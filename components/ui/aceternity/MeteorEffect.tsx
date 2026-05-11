"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorEffectProps {
  number?: number;
  className?: string;
}

interface Meteor {
  top: string;
  left: string;
  delay: string;
  duration: string;
  key: number;
}

export function MeteorEffect({ number = 5, className }: MeteorEffectProps) {
  // SSR renders zero meteors; client populates after mount to avoid
  // Math.random() hydration mismatch.
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    setMeteors(
      Array.from({ length: number }, (_, i) => ({
        top: `${Math.floor(Math.random() * 60) - 10}%`,
        left: `${Math.floor(Math.random() * 100)}%`,
        delay: `${(Math.random() * 3).toFixed(2)}s`,
        duration: `${(5 + Math.random() * 5).toFixed(2)}s`,
        key: i,
      })),
    );
  }, [number]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      {meteors.map((m) => (
        <span
          key={m.key}
          className="absolute h-0.5 w-0.5 rotate-[215deg] rounded-full bg-brand-purple animate-meteor"
          style={{
            top: m.top,
            left: m.left,
            animationDelay: m.delay,
            animationDuration: m.duration,
            boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
          }}
        >
          <span
            className="absolute top-1/2 -translate-y-1/2 h-px w-[60px]"
            style={{
              background:
                "linear-gradient(90deg, #7C5CFF, transparent)",
            }}
          />
        </span>
      ))}
    </div>
  );
}
