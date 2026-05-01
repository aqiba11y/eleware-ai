"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TooltipItem {
  id: string | number;
  name: string;
  designation: string;
  image?: string;
}

interface AnimatedTooltipProps {
  items: TooltipItem[];
  className?: string;
  renderItem?: (item: TooltipItem) => ReactNode;
}

export function AnimatedTooltip({
  items,
  className,
  renderItem,
}: AnimatedTooltipProps) {
  const [hoveredId, setHoveredId] = useState<string | number | null>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 15 });
  const rotate = useTransform(springX, [-100, 100], [-15, 15]);
  const translateX = useTransform(springX, [-100, 100], [-30, 30]);

  return (
    <div className={cn("flex flex-row items-center", className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className="relative -mr-2"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set(e.clientX - rect.left - rect.width / 2);
          }}
        >
          <AnimatePresence>
            {hoveredId === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX,
                  rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-brand-card px-4 py-2 text-xs shadow-glow-purple-sm"
              >
                <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-brand-purple to-transparent" />
                <div className="font-bold text-text-primary">{item.name}</div>
                <div className="text-[10px] text-text-muted">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {renderItem ? (
            renderItem(item)
          ) : (
            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-border-accent bg-brand-card">
              {item.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
