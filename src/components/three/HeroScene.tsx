"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Stars } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { useDisplayMode } from "./hooks/useDisplayMode";

export function FluidOrb() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(t * 0.25) * 0.3 + pointer.y * 0.15;
    ref.current.rotation.y = t * 0.15 + pointer.x * 0.2;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} scale={1.6} position={[0, 0.1, 0]}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshDistortMaterial
          color="#4ee0ff"
          emissive="#8b5cf6"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.7}
          distort={0.45}
          speed={1.4}
        />
      </mesh>
    </Float>
  );
}

export function OrbitRings() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.z = clock.getElapsedTime() * 0.06;
  });

  const rings = useMemo(
    () => [
      { radius: 2.4, color: "#4ee0ff", thickness: 0.012, tilt: 0.4 },
      { radius: 2.9, color: "#8b5cf6", thickness: 0.01, tilt: -0.35 },
      { radius: 3.4, color: "#ff61d3", thickness: 0.008, tilt: 0.2 },
    ],
    [],
  );

  return (
    <group ref={group}>
      {rings.map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + r.tilt, 0, i * 0.5]}>
          <torusGeometry args={[r.radius, r.thickness, 12, 200]} />
          <meshBasicMaterial color={r.color} transparent opacity={0.55} />
        </mesh>
      ))}
    </group>
  );
}

export function HeroScene() {
  const mode = useDisplayMode();

  if (mode === "off") return null;
  const lite = mode === "lite";

  return (
    <Canvas
      dpr={lite ? [1, 1.3] : [1, 1.8]}
      camera={{ position: [0, 0, 6.5], fov: 50 }}
      gl={{ antialias: !lite, alpha: true, powerPreference: "high-performance" }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[6, 6, 6]} intensity={1.4} color="#4ee0ff" />
        <pointLight position={[-6, -3, 4]} intensity={1.1} color="#8b5cf6" />
        {!lite && (
          <pointLight position={[0, -6, 2]} intensity={0.7} color="#ff61d3" />
        )}

        <FluidOrb />
        <OrbitRings />
        <Sparkles
          count={lite ? 45 : 120}
          scale={9}
          size={2.2}
          speed={0.5}
          color="#4ee0ff"
        />
        <Stars
          radius={40}
          depth={40}
          count={lite ? 420 : 1200}
          factor={3}
          fade
          speed={0.6}
        />
      </Suspense>
    </Canvas>
  );
}
