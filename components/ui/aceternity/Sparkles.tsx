"use client";

import { useMemo, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SparklesProps {
  className?: string;
  children?: ReactNode;
  count?: number;
  colors?: string[];
}

export function Sparkles({
  className,
  children,
  count = 12,
  colors = ["#7C5CFF", "#8B7AFF", "#FFFFFF"],
}: SparklesProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 2,
        color: colors[i % colors.length],
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 3,
        key: i,
      })),
    [count, colors],
  );

  return (
    <span className={cn("relative inline-block", className)}>
      <span
        className="pointer-events-none absolute inset-0 -z-0"
        aria-hidden
      >
        {particles.map((p) => (
          <span
            key={p.key}
            className="absolute rounded-full animate-pulse-glow"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </span>
      <span className="relative z-10">{children}</span>
    </span>
  );
}
