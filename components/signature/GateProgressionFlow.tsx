"use client";

import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { METHOD } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface GateProgressionFlowProps {
  className?: string;
  duration?: number;
}

export function GateProgressionFlow({
  className,
  duration = 6,
}: GateProgressionFlowProps) {
  const gates = METHOD.gates;
  const total = gates.length;
  const progress = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  const [activeGate, setActiveGate] = useState<number | null>(null);
  const [hoveredGate, setHoveredGate] = useState<number | null>(null);
  const lastReachedRef = useRef(-1);

  // Drive the progress motion value 0 -> 1 on a loop, pausing on hover
  useEffect(() => {
    if (reduceMotion) {
      progress.set(1);
      return;
    }
    if (hoveredGate !== null) return;
    const controls = animate(progress, [progress.get(), 1], {
      duration: duration * (1 - progress.get()),
      ease: "linear",
      onComplete: () => {
        progress.set(0);
      },
    });
    const loop = animate(progress, [0, 1], {
      duration,
      ease: "linear",
      repeat: Infinity,
      delay: duration * (1 - progress.get()) + 0.0001,
    });
    return () => {
      controls.stop();
      loop.stop();
    };
  }, [hoveredGate, duration, progress, reduceMotion]);

  // Trigger gate activation when crossing thresholds
  useMotionValueEvent(progress, "change", (latest) => {
    const idx = Math.min(total - 1, Math.floor(latest * total));
    if (idx !== lastReachedRef.current && idx >= 0) {
      lastReachedRef.current = idx;
      setActiveGate(idx);
      setTimeout(() => {
        setActiveGate((curr) => (curr === idx ? null : curr));
      }, 900);
    }
  });

  // Map progress -> dot horizontal position (desktop) and vertical (mobile)
  const dotLeft = useTransform(progress, [0, 1], ["5%", "95%"]);
  const dotTop = useTransform(progress, [0, 1], ["5%", "95%"]);

  return (
    <div className={cn("relative w-full", className)}>
      {/* DESKTOP: horizontal flow */}
      <div className="hidden md:block">
        <div className="relative h-32">
          {/* Connecting line */}
          <div className="absolute left-[5%] right-[5%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-brand-purple/0 via-brand-purple/40 to-brand-purple/0" />

          {/* Traveling dot */}
          {!reduceMotion && (
            <motion.div
              aria-hidden
              className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple-bright"
              style={{
                left: dotLeft,
                boxShadow:
                  "0 0 20px rgba(124,92,255,0.9), 0 0 40px rgba(124,92,255,0.4)",
              }}
            />
          )}

          {/* Gates */}
          {gates.map((gate, i) => {
            const left = `${5 + (i * 90) / (total - 1)}%`;
            const isActive = activeGate === i || hoveredGate === i;
            return (
              <button
                key={gate.id}
                type="button"
                onMouseEnter={() => setHoveredGate(i)}
                onMouseLeave={() => setHoveredGate(null)}
                onFocus={() => setHoveredGate(i)}
                onBlur={() => setHoveredGate(null)}
                aria-label={`${gate.id}: ${gate.title}. ${gate.description}`}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-default focus:outline-none"
                style={{ left }}
              >
                <motion.div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border-2 text-xs font-semibold transition-colors",
                    isActive
                      ? "border-brand-purple-bright bg-brand-purple text-white"
                      : "border-border-accent bg-brand-card text-text-body",
                  )}
                  animate={{
                    scale: isActive ? 1.15 : 1,
                    boxShadow: isActive
                      ? "0 0 32px rgba(124,92,255,0.7)"
                      : "0 0 0 rgba(124,92,255,0)",
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {gate.id}
                </motion.div>
              </button>
            );
          })}
        </div>

        {/* Gate detail labels below */}
        <div className="mt-8 grid grid-cols-6 gap-3">
          {gates.map((gate, i) => {
            const isActive = activeGate === i || hoveredGate === i;
            return (
              <div
                key={gate.id}
                className={cn(
                  "text-center transition-opacity duration-300",
                  isActive ? "opacity-100" : "opacity-60",
                )}
              >
                <div className="text-sm font-semibold text-text-primary">
                  {gate.title}
                </div>
                <div className="mt-1 text-xs leading-snug text-text-muted">
                  {gate.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MOBILE: vertical flow */}
      <div className="md:hidden">
        <div className="relative pl-16">
          <div className="absolute left-[1.875rem] top-2 bottom-2 w-px bg-gradient-to-b from-brand-purple/0 via-brand-purple/40 to-brand-purple/0" />

          {!reduceMotion && (
            <motion.div
              aria-hidden
              className="absolute left-[1.875rem] h-3 w-3 -translate-x-1/2 rounded-full bg-brand-purple-bright"
              style={{
                top: dotTop,
                boxShadow:
                  "0 0 20px rgba(124,92,255,0.9), 0 0 40px rgba(124,92,255,0.4)",
              }}
            />
          )}

          <ul className="space-y-6">
            {gates.map((gate, i) => {
              const isActive = activeGate === i || hoveredGate === i;
              return (
                <li
                  key={gate.id}
                  onMouseEnter={() => setHoveredGate(i)}
                  onMouseLeave={() => setHoveredGate(null)}
                  className="relative"
                >
                  <motion.div
                    className={cn(
                      "absolute -left-[2.625rem] flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-semibold transition-colors",
                      isActive
                        ? "border-brand-purple-bright bg-brand-purple text-white"
                        : "border-border-accent bg-brand-card text-text-body",
                    )}
                    animate={{ scale: isActive ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {gate.id}
                  </motion.div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">
                      {gate.title}
                    </div>
                    <div className="mt-1 text-xs text-text-muted">
                      {gate.description}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
