"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  format?: (n: number) => string;
}

export function NumberTicker({
  value,
  className,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.5,
  format,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const display = useTransform(motionValue, (v) => {
    if (format) return format(v);
    const fixed = v.toFixed(decimals);
    const formatted = fixed.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [inView, motionValue, value, duration]);

  return (
    <motion.span ref={ref} className={cn(className)}>
      {display}
    </motion.span>
  );
}
