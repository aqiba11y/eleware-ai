"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  children?: ReactNode;
  className?: string;
  intensity?: "soft" | "medium" | "intense";
  showRadialMask?: boolean;
}

const OPACITIES: Record<NonNullable<AuroraBackgroundProps["intensity"]>, string> = {
  soft: "opacity-30",
  medium: "opacity-50",
  intense: "opacity-70",
};

export function AuroraBackground({
  children,
  className,
  intensity = "medium",
  showRadialMask = true,
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div
        className={cn(
          "absolute inset-0 blur-3xl animate-aurora",
          OPACITIES[intensity],
        )}
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 30% 30%, #7C5CFF, transparent 60%), radial-gradient(ellipse 50% 35% at 70% 70%, #5B3FE0, transparent 60%)",
          backgroundSize: "200% 200%, 250% 250%",
        }}
      />
      {showRadialMask && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, #0E0E1A 80%)",
          }}
        />
      )}
      {children && <div className="relative">{children}</div>}
    </div>
  );
}
