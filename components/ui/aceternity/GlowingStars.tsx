"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface GlowingStarsProps {
  className?: string;
  count?: number;
}

interface Star {
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
  key: number;
}

export function GlowingStars({ className, count = 4 }: GlowingStarsProps) {
  // SSR renders no stars; client fills them in after mount to avoid
  // Math.random() hydration mismatch.
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: count }, (_, i) => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: 6 + Math.random() * 4,
        delay: Math.random() * 4,
        duration: 3 + Math.random() * 2,
        key: i,
      })),
    );
  }, [count]);

  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden
    >
      {stars.map((s) => (
        <span
          key={s.key}
          className="absolute animate-pulse-glow"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        >
          <span className="block h-full w-full rounded-full bg-brand-purple-bright shadow-[0_0_12px_#7C5CFF,0_0_24px_#7C5CFF]" />
        </span>
      ))}
    </div>
  );
}
