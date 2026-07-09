"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

// Thin gradient bar at the very top of the viewport that fills as you scroll.
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[95] h-[2px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, #5B3FE0 0%, #7C5CFF 50%, #8B7AFF 100%)",
        boxShadow: "0 0 8px rgba(124, 92, 255, 0.5)",
      }}
    />
  );
}
