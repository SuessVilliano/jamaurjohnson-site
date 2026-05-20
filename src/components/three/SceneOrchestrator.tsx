"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Stars, Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { scrollProgressStore, PILLAR_KEYS } from "@/components/providers/ScrollProgress";
import { OrbitRings } from "@/components/three/HeroScene";

/**
 * Camera flies along a Catmull-Rom curve threaded through 7 stations — one per
 * pillar. Scroll progress (0..1) maps directly to position on the curve.
 */
function CameraRig() {
  const curve = useMemo(() => {
    const points = [
      new THREE.Vector3(0, 0, 6.5), // intro
      new THREE.Vector3(-2.5, 1.2, 5.5), // about
      new THREE.Vector3(-4.2, -0.5, 4.0), // build
      new THREE.Vector3(-1.5, -2.0, 3.2), // trade
      new THREE.Vector3(2.4, -1.0, 4.2), // create
      new THREE.Vector3(3.8, 1.8, 5.0), // elevate
      new THREE.Vector3(0, 0, 6.8), // outro
    ];
    return new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.5);
  }, []);

  useFrame(({ camera }) => {
    const { progress } = scrollProgressStore.get();
    const p = curve.getPointAt(progress);
    camera.position.lerp(p, 0.12);
    const look = curve.getPointAt(Math.min(1, progress + 0.04));
    const target = new THREE.Vector3(look.x * 0.15, look.y * 0.15, 0);
    camera.lookAt(target);
  });

  return null;
}

const PILLAR_COLORS: Record<string, { aqua: string; violet: string; pink: string }> = {
  intro: { aqua: "#4ee0ff", violet: "#8b5cf6", pink: "#ff61d3" },
  about: { aqua: "#6ee7ff", violet: "#a78bfa", pink: "#f0abfc" },
  build: { aqua: "#22d3ee", violet: "#3b82f6", pink: "#06b6d4" },
  trade: { aqua: "#a78bfa", violet: "#7c3aed", pink: "#ec4899" },
  create: { aqua: "#f0abfc", violet: "#ec4899", pink: "#fb7185" },
  elevate: { aqua: "#fbbf24", violet: "#f97316", pink: "#facc15" },
  outro: { aqua: "#4ee0ff", violet: "#8b5cf6", pink: "#ff61d3" },
};

/**
 * The orb is the central character — it morphs color, distortion, and scale
 * based on the active pillar's progress. Its motion is driven by the pointer
 * for a sense of presence, and by scroll for narrative progression.
 */
function MorphingOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  // MeshDistortMaterial extends MeshStandardMaterial; we only touch color + emissive.
  const matRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const colorCurrent = useMemo(() => new THREE.Color("#4ee0ff"), []);
  const colorTarget = useMemo(() => new THREE.Color("#4ee0ff"), []);
  const emissiveCurrent = useMemo(() => new THREE.Color("#8b5cf6"), []);
  const emissiveTarget = useMemo(() => new THREE.Color("#8b5cf6"), []);

  useFrame(({ clock, pointer }) => {
    const { pillar, pillarLocalProgress } = scrollProgressStore.get();
    const t = clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.25) * 0.3 + pointer.y * 0.15;
      meshRef.current.rotation.y = t * 0.15 + pointer.x * 0.2;

      const pulse = 1 + Math.sin(t * 0.8) * 0.04;
      const scaleByPillar =
        pillar === "intro" ? 1.6 : pillar === "outro" ? 1.4 : 1.1 + pillarLocalProgress * 0.3;
      const target = scaleByPillar * pulse;
      meshRef.current.scale.lerp(new THREE.Vector3(target, target, target), 0.05);
    }

    if (matRef.current) {
      const c = PILLAR_COLORS[pillar];
      colorTarget.set(c.aqua);
      emissiveTarget.set(c.violet);
      colorCurrent.lerp(colorTarget, 0.04);
      emissiveCurrent.lerp(emissiveTarget, 0.04);
      matRef.current.color.copy(colorCurrent);
      matRef.current.emissive.copy(emissiveCurrent);
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} scale={1.6} position={[0, 0.1, 0]}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshDistortMaterial
          ref={(m) => {
            matRef.current = m as unknown as THREE.MeshStandardMaterial | null;
          }}
          color="#4ee0ff"
          emissive="#8b5cf6"
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.7}
          distort={0.45}
          speed={1.4}
        />
      </mesh>
    </Float>
  );
}

/** Per-pillar accent geometry orbiting the morphing orb. */
function PillarSatellites() {
  const groups = useRef<Record<string, THREE.Group | null>>({});

  useFrame(({ clock }) => {
    const { pillar, pillarLocalProgress } = scrollProgressStore.get();
    const t = clock.getElapsedTime();

    PILLAR_KEYS.forEach((key) => {
      const g = groups.current[key];
      if (!g) return;
      const active = key === pillar;
      const targetOpacity = active ? 1 : 0;
      g.traverse((obj) => {
        const m = (obj as THREE.Mesh).material as THREE.Material | undefined;
        if (m && "opacity" in m) {
          const mat = m as THREE.Material & { opacity: number; transparent: boolean };
          mat.transparent = true;
          mat.opacity += (targetOpacity - mat.opacity) * 0.06;
        }
      });
      g.rotation.y = t * 0.15 + (active ? pillarLocalProgress * Math.PI : 0);
    });
  });

  return (
    <>
      {/* BUILD — orbital wireframe cube cluster (companies as instances) */}
      <group ref={(r) => { groups.current.build = r; }} position={[0, 0, 0]}>
        {Array.from({ length: 9 }).map((_, i) => {
          const angle = (i / 9) * Math.PI * 2;
          const radius = 2.2;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * radius, Math.sin(angle * 0.6) * 0.5, Math.sin(angle) * radius]}
              scale={0.14}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0} />
            </mesh>
          );
        })}
      </group>

      {/* TRADE — vertical candlestick ribbon */}
      <group ref={(r) => { groups.current.trade = r; }} position={[0, 0, 0]}>
        {Array.from({ length: 14 }).map((_, i) => {
          const x = (i - 7) * 0.3;
          const h = 0.3 + Math.abs(Math.sin(i * 1.7)) * 1.2;
          const up = i % 2 === 0;
          return (
            <mesh key={i} position={[x, h / 2 - 0.5, -0.5]}>
              <boxGeometry args={[0.12, h, 0.12]} />
              <meshBasicMaterial color={up ? "#a78bfa" : "#ec4899"} transparent opacity={0} />
            </mesh>
          );
        })}
      </group>

      {/* CREATE — stacked book spines */}
      <group ref={(r) => { groups.current.create = r; }} position={[0, -0.8, 0]}>
        {Array.from({ length: 7 }).map((_, i) => (
          <mesh key={i} position={[(i - 3) * 0.18, 0, 0]} rotation={[0, 0, (i - 3) * 0.05]}>
            <boxGeometry args={[0.14, 1.6, 0.3]} />
            <meshBasicMaterial
              color={["#f0abfc", "#ec4899", "#fb7185", "#a78bfa", "#f472b6", "#e879f9", "#c084fc"][i]}
              transparent
              opacity={0}
            />
          </mesh>
        ))}
      </group>

      {/* ELEVATE — constellation nodes */}
      <group ref={(r) => { groups.current.elevate = r; }} position={[0, 0, 0]}>
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          const r = 2.4 + Math.sin(i) * 0.4;
          const y = Math.cos(i * 0.7) * 1.2;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * r, y, Math.sin(angle) * r]}
              scale={0.08}
            >
              <sphereGeometry args={[1, 12, 12]} />
              <meshBasicMaterial color="#fbbf24" transparent opacity={0} />
            </mesh>
          );
        })}
      </group>

      {/* ABOUT — single soft halo ring (low-poly portrait silhouette analog) */}
      <group ref={(r) => { groups.current.about = r; }} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh>
          <torusGeometry args={[2.0, 0.005, 8, 120]} />
          <meshBasicMaterial color="#a78bfa" transparent opacity={0} />
        </mesh>
      </group>
    </>
  );
}

export function SceneOrchestrator() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.8]}
        camera={{ position: [0, 0, 6.5], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="!absolute inset-0"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[6, 6, 6]} intensity={1.4} color="#4ee0ff" />
          <pointLight position={[-6, -3, 4]} intensity={1.1} color="#8b5cf6" />
          <pointLight position={[0, -6, 2]} intensity={0.7} color="#ff61d3" />

          <CameraRig />
          <MorphingOrb />
          <OrbitRings />
          <PillarSatellites />
          <Sparkles count={120} scale={9} size={2.2} speed={0.5} color="#4ee0ff" />
          <Stars radius={40} depth={40} count={1200} factor={3} fade speed={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
}
