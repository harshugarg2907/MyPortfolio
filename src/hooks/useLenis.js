import { useEffect } from "react";
import Lenis from "lenis";
import usePrefersReducedMotion from "./usePrefersReducedMotion.js";

export default function useLenis() {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return undefined;
    const mobileOrTouch = window.matchMedia("(max-width: 768px), (pointer: coarse)").matches;
    if (mobileOrTouch) return undefined;

    const lenis = new Lenis({
      lerp: 0.18,
      wheelMultiplier: 1.18,
      touchMultiplier: 1.45,
      syncTouch: true,
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reducedMotion]);
}
