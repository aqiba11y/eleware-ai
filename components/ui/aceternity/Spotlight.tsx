"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

interface SpotlightProps {
  className?: string;
  fill?: string;
  size?: number;
}

export function Spotlight({
  className,
  fill = "#7C5CFF",
  size = 600,
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 30, y: 30 });
  const isTouch = useIsTouchDevice();

  useEffect(() => {
    if (isTouch) return;
    const handler = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [isTouch]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute inset-0 transition-[background] duration-300"
        style={{
          background: `radial-gradient(${size}px circle at ${pos.x}% ${pos.y}%, ${fill}30, transparent 50%)`,
        }}
      />
    </div>
  );
}
