"use client";

import { cn } from "@/lib/utils";

interface NoiseTextureProps {
  className?: string;
  opacity?: number;
  fixed?: boolean;
}

const NOISE_SVG =
  "data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='1'/></svg>";

export function NoiseTexture({
  className,
  opacity = 0.04,
  fixed = true,
}: NoiseTextureProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none inset-0 z-[1] mix-blend-overlay",
        fixed ? "fixed" : "absolute",
        className,
      )}
      style={{
        opacity,
        backgroundImage: `url("${NOISE_SVG}")`,
        backgroundSize: "200px 200px",
      }}
    />
  );
}
