import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion.js";

export default function CursorGlow() {
  const reduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useSpring(useMotionValue(-200), { stiffness: 220, damping: 28 });
  const y = useSpring(useMotionValue(-200), { stiffness: 220, damping: 28 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(finePointer && !reduced);
    if (!finePointer || reduced) return undefined;

    const onMove = (event) => {
      x.set(event.clientX - 180);
      y.set(event.clientY - 180);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[3] h-[360px] w-[360px] rounded-full bg-cyan-300/10 blur-3xl"
      style={{ x, y }}
    />
  );
}
