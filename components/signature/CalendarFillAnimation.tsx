"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ROWS = 5;
const COLS = 7;
const TOTAL = ROWS * COLS;

// Deterministic shuffled fill order — stable across SSR/client to avoid hydration mismatch
const FILL_ORDER: number[] = (() => {
  const arr = Array.from({ length: TOTAL }, (_, i) => i);
  let s = 1337;
  for (let i = arr.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
})();

interface CalendarFillAnimationProps {
  className?: string;
  cellClassName?: string;
}

export function CalendarFillAnimation({
  className,
  cellClassName,
}: CalendarFillAnimationProps) {
  const [filled, setFilled] = useState<Set<number>>(new Set());
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setFilled(new Set(FILL_ORDER.slice(0, 24)));
      return;
    }

    let cancelled = false;
    const sleep = (ms: number) =>
      new Promise<void>((r) => setTimeout(() => r(), ms));

    const run = async () => {
      while (!cancelled) {
        // Phase 1: progressively fill all cells (~3.5s)
        for (let i = 0; i < TOTAL && !cancelled; i++) {
          await sleep(100);
          setFilled((prev) => {
            const next = new Set(prev);
            next.add(FILL_ORDER[i]);
            return next;
          });
        }
        if (cancelled) break;

        // Phase 2: hold full state (2s)
        await sleep(2000);
        if (cancelled) break;

        // Phase 3: empty 6 cells back out (the "pipeline closing some calls" feel)
        const emptySet = FILL_ORDER.slice(0, 6);
        setFilled((prev) => {
          const next = new Set(prev);
          emptySet.forEach((i) => next.delete(i));
          return next;
        });
        await sleep(1500);
        if (cancelled) break;

        // Phase 4: refill those (calendar replenishing)
        setFilled((prev) => {
          const next = new Set(prev);
          emptySet.forEach((i) => next.add(i));
          return next;
        });
        await sleep(2500);
        if (cancelled) break;

        // Reset for next loop
        setFilled(new Set());
        await sleep(400);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [reduceMotion]);

  return (
    <div
      className={cn("grid grid-cols-7 gap-1.5", className)}
      role="img"
      aria-label="Calendar visualization showing booked qualified calls filling the grid"
    >
      {Array.from({ length: TOTAL }, (_, i) => {
        const isFilled = filled.has(i);
        return (
          <motion.div
            key={i}
            className={cn(
              "aspect-square rounded-md border border-white/[0.06]",
              cellClassName,
            )}
            animate={{
              backgroundColor: isFilled ? "#7C5CFF" : "rgba(255,255,255,0)",
              boxShadow: isFilled
                ? "0 0 14px rgba(124,92,255,0.45), inset 0 0 0 1px rgba(139,122,255,0.3)"
                : "0 0 0 rgba(124,92,255,0)",
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          />
        );
      })}
    </div>
  );
}
