"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MovingBorderProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  duration?: number;
}

export function MovingBorder({
  children,
  className,
  containerClassName,
  duration = 4,
}: MovingBorderProps) {
  return (
    <div
      className={cn(
        "relative inline-flex rounded-full p-[2px]",
        containerClassName,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full animate-moving-border"
        style={{
          backgroundImage:
            "linear-gradient(110deg, #5B3FE0 20%, #8B7AFF 50%, #5B3FE0 80%)",
          backgroundSize: "200% 100%",
          animationDuration: `${duration}s`,
        }}
      />
      <span
        className={cn(
          "relative z-10 inline-flex h-full w-full items-center justify-center rounded-full bg-brand-card px-6 py-3 text-sm font-medium text-text-primary",
          className,
        )}
      >
        {children}
      </span>
    </div>
  );
}
