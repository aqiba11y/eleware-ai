"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

type CursorState = "default" | "hover" | "text";

export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const reduce = useReducedMotion();
  const [hidden, setHidden] = useState(true);
  const [state, setState] = useState<CursorState>("default");

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const ringX = useSpring(mouseX, { stiffness: 240, damping: 22 });
  const ringY = useSpring(mouseY, { stiffness: 240, damping: 22 });

  const dotTransform = useMotionTemplate`translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  const ringTransform = useMotionTemplate`translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

  // Wire mouse listeners + apply global cursor:none class
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isTouch || reduce) return;

    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const onLeave = () => setHidden(true);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      // Interactive — prioritize this match
      if (
        target.closest(
          "a, button, [role='button'], input:not([type='hidden']), textarea, select, [data-cursor='hover']",
        )
      ) {
        setState("hover");
        return;
      }
      // Text content
      if (
        target.closest(
          "p, h1, h2, h3, h4, h5, h6, blockquote, [data-cursor='text']",
        )
      ) {
        setState("text");
        return;
      }
      setState("default");
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [hidden, isTouch, mouseX, mouseY, reduce]);

  if (isTouch || reduce) return null;

  // Sizes vary per state
  const dotSize = state === "hover" ? 16 : 8;
  const ringWidth = state === "text" ? 2 : state === "hover" ? 12 : 40;
  const ringHeight = state === "text" ? 24 : state === "hover" ? 12 : 40;

  return (
    <>
      {/* Dot — instant follow */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9990] rounded-full bg-[#7C5CFF]"
        style={{
          width: dotSize,
          height: dotSize,
          opacity: hidden ? 0 : 1,
          transform: dotTransform,
          transition:
            "width 0.2s ease, height 0.2s ease, opacity 0.2s ease",
          mixBlendMode: "difference",
        }}
      />

      {/* Ring — lazy spring trail */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9990] border border-[#7C5CFF]"
        style={{
          width: ringWidth,
          height: ringHeight,
          opacity: hidden ? 0 : 0.5,
          transform: ringTransform,
          borderRadius: state === "text" ? 1 : 9999,
          transition:
            "width 0.25s ease, height 0.25s ease, border-radius 0.2s ease, opacity 0.2s ease",
        }}
      />
    </>
  );
}
