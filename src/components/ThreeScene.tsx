"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

function ParticleSphere(props: Record<string, unknown>) {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random points in a sphere
  const [positions] = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 10 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return [positions];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingShapes() {
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const targetX = (state.pointer.x * Math.PI) / 4;
    const targetY = (state.pointer.y * Math.PI) / 4;

    if (meshRef1.current) {
      meshRef1.current.rotation.x = time * 0.2 + targetY;
      meshRef1.current.rotation.y = time * 0.3 + targetX;
      meshRef1.current.position.y = Math.sin(time * 0.5) * 1.5;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x = time * -0.2 + targetY;
      meshRef2.current.rotation.y = time * -0.3 + targetX;
      meshRef2.current.position.y = Math.cos(time * 0.5) * 1.5 - 2;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={meshRef1} position={[3, 1, -5]}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial color="#005ac2" wireframe opacity={0.5} transparent />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh ref={meshRef2} position={[-4, -2, -6]}>
          <torusGeometry args={[1.2, 0.3, 16, 100]} />
          <meshStandardMaterial color="#5de6ff" wireframe opacity={0.3} transparent />
        </mesh>
      </Float>
    </>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]} gl={{ antialias: false }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#005ac2" />
        <ParticleSphere />
        <FloatingShapes />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
