"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackgroundBeamsProps {
  className?: string;
  count?: number;
}

export function BackgroundBeams({
  className,
  count = 6,
}: BackgroundBeamsProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-40",
        className,
      )}
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 800"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="beam-grad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#7C5CFF" stopOpacity="0" />
            <stop offset="0.5" stopColor="#7C5CFF" stopOpacity="0.6" />
            <stop offset="1" stopColor="#7C5CFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: count }).map((_, i) => {
          const offset = i * (800 / count);
          return (
            <motion.line
              key={i}
              x1={offset - 100}
              y1={-100}
              x2={offset + 600}
              y2={900}
              stroke="url(#beam-grad)"
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
              transition={{
                duration: 6,
                ease: "linear",
                repeat: Infinity,
                delay: i * 0.7,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
