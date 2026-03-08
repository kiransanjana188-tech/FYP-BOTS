import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ count = 1500 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, [count]);

  const ref = useRef<THREE.Points>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.0002;
      ref.current.rotation.y += 0.0002;
    }
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f2ff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function GlowingCircuits() {
  const lines = useMemo(() => {
    const l = [];
    for (let i = 0; i < 10; i++) {
      const points = [];
      let x = (Math.random() - 0.5) * 10;
      let y = (Math.random() - 0.5) * 10;
      let z = (Math.random() - 0.5) * 10;
      
      for (let j = 0; j < 4; j++) {
        points.push(new THREE.Vector3(x, y, z));
        const axis = Math.floor(Math.random() * 3);
        const dist = (Math.random() - 0.5) * 3;
        if (axis === 0) x += dist;
        else if (axis === 1) y += dist;
        else z += dist;
      }
      l.push(new THREE.CatmullRomCurve3(points));
    }
    return l;
  }, []);

  return (
    <group>
      {lines.map((curve, i) => (
        <Float key={i} speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
          <mesh>
            <tubeGeometry args={[curve, 32, 0.005, 8, false]} />
            <meshBasicMaterial color="#bc13fe" transparent opacity={0.2} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <color attach="background" args={['#050505']} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ff" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#bc13fe" />
          
          <ParticleField />
          <GlowingCircuits />
          
          <fog attach="fog" args={['#050505', 5, 15]} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
    </div>
  );
}
