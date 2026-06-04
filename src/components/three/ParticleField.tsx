"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// Seeded PRNG (mulberry32) — deterministic so particle positions are pure
// (no Math.random during render) and stay stable across re-renders.
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function Particles({ count = 800 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const rand = mulberry32(0x9e3779b9);
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (rand() - 0.5) * 18;
      arr[i * 3 + 1] = (rand() - 0.5) * 12;
      arr[i * 3 + 2] = (rand() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.02;
    ref.current.rotation.x = Math.sin(t * 0.1) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.8}
        color="#9ad8ff"
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function ParticleField() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Particles />
    </Canvas>
  );
}
