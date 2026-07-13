import { Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion.js";

export default function FloatingGeometry() {
  const reduced = usePrefersReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(window.matchMedia("(min-width: 900px)").matches && !reduced);
  }, [reduced]);

  if (!show) return null;

  return (
    <div className="floating-geometry pointer-events-none fixed inset-0 z-[2]" aria-hidden="true">
      <Canvas dpr={[1, 1.25]} camera={{ position: [0, 0, 8], fov: 50 }} gl={{ alpha: true, antialias: false }}>
        <ambientLight intensity={0.9} />
        <Float speed={0.8} floatIntensity={0.8} rotationIntensity={0.4}>
          <mesh position={[-4.6, 2.2, 0]} rotation={[0.4, 0.8, 0.2]}>
            <octahedronGeometry args={[0.55, 0]} />
            <meshStandardMaterial color="#00f5ff" wireframe transparent opacity={0.35} />
          </mesh>
        </Float>
        <Float speed={0.65} floatIntensity={0.5} rotationIntensity={0.35}>
          <mesh position={[4.5, -1.8, 0]} rotation={[0.2, 0.4, 0.1]}>
            <torusKnotGeometry args={[0.45, 0.07, 80, 8]} />
            <meshStandardMaterial color="#7c3aed" wireframe transparent opacity={0.32} />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
}
