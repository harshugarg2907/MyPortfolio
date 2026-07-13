import { Float, PerspectiveCamera, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion.js";

function CompanySticker() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.55) * 0.18;
    group.current.rotation.x = Math.sin(t * 0.42) * 0.08;
    group.current.position.y = Math.sin(t * 0.9) * 0.08;
  });

  return (
    <group ref={group} position={[0, -0.12, 0]}>
      <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.25}>
        <mesh position={[0, 0.06, -0.16]} scale={[1.72, 1.08, 0.14]}>
          <boxGeometry args={[1.6, 1.05, 0.22]} />
          <meshStandardMaterial color="#0b1224" roughness={0.28} metalness={0.35} />
        </mesh>
        <mesh position={[0, 0.06, 0.02]} scale={[1.55, 0.92, 0.035]}>
          <boxGeometry args={[1.55, 0.92, 0.08]} />
          <meshStandardMaterial color="#111c33" roughness={0.22} metalness={0.2} emissive="#06172c" emissiveIntensity={0.35} />
        </mesh>
        <Text
          position={[0, 0.18, 0.12]}
          fontSize={0.58}
          letterSpacing={0}
          anchorX="center"
          anchorY="middle"
          color="#f8fafc"
          outlineWidth={0.012}
          outlineColor="#00f5ff"
        >
          IBM
        </Text>
        <Text
          position={[0, -0.36, 0.13]}
          fontSize={0.14}
          letterSpacing={0}
          anchorX="center"
          anchorY="middle"
          color="#94a3b8"
        >
          APPLICATION DEVELOPER
        </Text>
        <mesh position={[0, -1.02, -0.08]} rotation={[-0.22, 0, 0]} scale={[1.75, 0.12, 0.72]}>
          <boxGeometry args={[1.6, 0.2, 0.9]} />
          <meshStandardMaterial color="#172033" roughness={0.32} metalness={0.45} />
        </mesh>
        <mesh position={[0, -0.89, 0.42]} rotation={[-0.22, 0, 0]} scale={[0.42, 0.018, 0.16]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#00f5ff" emissive="#00f5ff" emissiveIntensity={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[-1.36, 0.86, 0.02]} scale={[0.5, 0.34, 0.08]}>
          <sphereGeometry args={[1, 32, 16]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.34} metalness={0.05} />
        </mesh>
        <mesh position={[-1.1, 0.95, 0.04]} scale={[0.36, 0.28, 0.08]}>
          <sphereGeometry args={[1, 32, 16]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.34} metalness={0.05} />
        </mesh>
        <mesh position={[-1.58, 0.98, 0.03]} scale={[0.28, 0.25, 0.08]}>
          <sphereGeometry args={[1, 24, 16]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.34} metalness={0.05} />
        </mesh>
        <mesh position={[1.28, 0.9, 0.08]} rotation={[0.18, 0.42, 0.2]}>
          <octahedronGeometry args={[0.32, 0]} />
          <meshStandardMaterial color="#00f5ff" emissive="#00f5ff" emissiveIntensity={0.75} roughness={0.24} />
        </mesh>
        <mesh position={[1.46, 0.32, 0.1]} rotation={[0.4, -0.1, 0.25]}>
          <torusGeometry args={[0.22, 0.032, 12, 48]} />
          <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={0.55} roughness={0.3} />
        </mesh>
        <Text
          position={[-1.42, 0.9, 0.2]}
          fontSize={0.2}
          letterSpacing={0}
          anchorX="center"
          anchorY="middle"
          color="#02030a"
        >
          ☁
        </Text>
        <Text
          position={[1.08, -0.5, 0.2]}
          fontSize={0.22}
          letterSpacing={0}
          anchorX="center"
          anchorY="middle"
          color="#00f5ff"
        >
          &lt;/&gt;
        </Text>
        <mesh position={[-1.2, -0.52, 0.05]} rotation={[0.18, 0.08, -0.35]} scale={[0.16, 0.52, 0.1]}>
          <capsuleGeometry args={[0.28, 0.7, 10, 18]} />
          <meshStandardMaterial color="#2563eb" emissive="#2563eb" emissiveIntensity={0.28} roughness={0.28} />
        </mesh>
      </Float>
      <mesh position={[0, -1.56, -0.62]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.55, 0.52, 1]}>
        <circleGeometry args={[1, 64]} />
        <meshBasicMaterial color="#00f5ff" transparent opacity={0.12} />
      </mesh>
      <mesh position={[1.12, 1.18, 0.12]} rotation={[0.3, 0.2, 0.4]}>
        <boxGeometry args={[0.42, 0.42, 0.08]} />
        <meshStandardMaterial color="#00f5ff" emissive="#00f5ff" emissiveIntensity={0.8} roughness={0.28} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div className="absolute inset-8 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden="true" />;
  }

  return (
    <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} aria-hidden="true">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={42} />
      <ambientLight intensity={0.8} />
      <pointLight position={[3, 3, 3]} intensity={8} color={new THREE.Color("#00f5ff")} />
      <pointLight position={[-4, -2, 2]} intensity={5} color={new THREE.Color("#7c3aed")} />
      <CompanySticker />
    </Canvas>
  );
}
