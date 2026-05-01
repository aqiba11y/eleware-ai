"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * First-load brand stamp that fades out 350ms after mount.
 * - Skips entirely under prefers-reduced-motion
 * - Pointer-events-none so clicks pass through during the fade
 * - Removes itself from the DOM after the fade completes
 */
export function PageTransition() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => setDone(true), 450);
    return () => clearTimeout(t);
  }, [reduce]);

  if (done) return null;

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
      className="pointer-events-none fixed inset-0 z-[10000] flex items-center justify-center bg-[#0E0E1A]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="flex items-center gap-3"
      >
        <span className="h-6 w-[3px] bg-[#7C5CFF] animate-pulse-glow" />
        <span className="text-base font-bold uppercase tracking-[0.12em] text-white">
          Eleware AI
        </span>
      </motion.div>
    </motion.div>
  );
}
