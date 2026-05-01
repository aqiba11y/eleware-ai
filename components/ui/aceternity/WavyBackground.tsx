"use client";

import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "@/lib/utils";

interface WavyBackgroundProps {
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
}

export function WavyBackground({
  className,
  containerClassName,
  colors = ["#7C5CFF", "#5B3FE0", "#8B7AFF"],
  waveWidth = 50,
  backgroundFill = "transparent",
  blur = 10,
  speed = "slow",
  waveOpacity = 0.5,
}: WavyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const noise = createNoise3D();
    let w = 0;
    let h = 0;
    let nt = 0;
    let raf = 0;

    const speedMul = speed === "slow" ? 0.001 : 0.002;

    const init = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      ctx.filter = `blur(${blur}px)`;
      nt = 0;
    };

    const drawWave = () => {
      nt += speedMul;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = backgroundFill;
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < colors.length; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth;
        ctx.strokeStyle = colors[i];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      drawWave();
      raf = requestAnimationFrame(render);
    };

    init();
    window.addEventListener("resize", init);
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
    };
  }, [blur, backgroundFill, colors, speed, waveWidth]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        containerClassName,
      )}
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        className={cn("absolute inset-0 h-full w-full", className)}
        style={{ opacity: waveOpacity }}
      />
    </div>
  );
}
