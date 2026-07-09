"use client";

import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

interface CardSpotlightProps {
  children: ReactNode;
  className?: string;
  radius?: number;
  color?: string;
}

export function CardSpotlight({
  children,
  className,
  radius = 400,
  color = "rgba(124, 92, 255, 0.18)",
}: CardSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const isTouch = useIsTouchDevice();

  if (isTouch) {
    return (
      <div
        className={cn(
          "relative rounded-2xl border border-border-subtle bg-brand-card",
          className,
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border-subtle bg-brand-card transition-all duration-300 hover:-translate-y-[3px] hover:border-border-accent hover:shadow-glow-purple-sm",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(${radius}px circle at ${pos.x}px ${pos.y}px, ${color}, transparent 50%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
