import { useEffect, useState } from "react";

export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame;

    const updateActive = () => {
      const checkpoint = window.scrollY + Math.min(window.innerHeight * 0.35, 360);
      const current = ids.reduce((latest, id) => {
        const element = document.getElementById(id);
        if (!element) return latest;
        return element.offsetTop <= checkpoint ? id : latest;
      }, ids[0]);
      setActive(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActive);
    };
  }, [ids]);

  return active;
}
