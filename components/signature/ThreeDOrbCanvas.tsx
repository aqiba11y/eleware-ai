"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Orb() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    const m = meshRef.current;
    if (!m) return;
    m.rotation.y += delta * 0.15;
    m.rotation.x += delta * 0.04;
    // Subtle parallax toward cursor (state.pointer is normalized -1..1)
    m.position.x += (state.pointer.x * 0.3 - m.position.x) * 0.04;
    m.position.y += (state.pointer.y * 0.3 - m.position.y) * 0.04;
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#7C5CFF"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.3}
        metalness={0.1}
        transparent
        opacity={0.7}
        emissive="#5B3FE0"
        emissiveIntensity={0.25}
      />
    </Sphere>
  );
}

export function ThreeDOrbCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 3], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-3, 2, 2]} intensity={0.4} color="#8B7AFF" />
      <Orb />
    </Canvas>
  );
}
