"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

interface GridBackgroundProps {
  className?: string;
  cellSize?: number;
  opacity?: number;
  interactive?: boolean;
}

export function GridBackground({
  className,
  cellSize = 40,
  opacity = 0.08,
  interactive = true,
}: GridBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const isTouch = useIsTouchDevice();
  const enableInteract = interactive && !isTouch;

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        if (!enableInteract) return;
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(124,92,255,${opacity}) 1px, transparent 1px), linear-gradient(to bottom, rgba(124,92,255,${opacity}) 1px, transparent 1px)`,
          backgroundSize: `${cellSize}px ${cellSize}px`,
        }}
      />
      {enableInteract && (
        <div
          className="absolute inset-0 transition-opacity"
          style={{
            background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(124,92,255,0.18), transparent 50%)`,
          }}
        />
      )}
    </div>
  );
}
