import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export default function TiltCard({ children, className = "", as: Component = motion.div }) {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const background = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(0,245,255,0.18), transparent 34%)`;

  const onMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * 8);
    rotateY.set((px - 0.5) * 10);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  return (
    <Component
      className={`glass gradient-border rounded-[28px] ${className}`}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", background }}
      onPointerMove={onMove}
      onPointerLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
    >
      {children}
    </Component>
  );
}
