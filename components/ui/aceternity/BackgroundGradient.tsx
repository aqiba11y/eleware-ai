"use client";

import { motion, type Transition } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BackgroundGradientProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

const GRADIENT =
  "linear-gradient(120deg, #7C5CFF 0%, #5B3FE0 25%, #8B7AFF 50%, #5B3FE0 75%, #7C5CFF 100%)";

const transition: Transition = {
  duration: 10,
  ease: "linear",
  repeat: Infinity,
};

const animateValues = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
};

export function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true,
}: BackgroundGradientProps) {
  const sharedStyle = {
    backgroundImage: GRADIENT,
    backgroundSize: animate ? "300% 300%" : undefined,
  };

  return (
    <div className={cn("group relative rounded-3xl p-[2px]", containerClassName)}>
      <motion.div
        aria-hidden
        initial={animate ? { backgroundPosition: "0% 50%" } : false}
        animate={animate ? animateValues : undefined}
        transition={animate ? transition : undefined}
        style={sharedStyle}
        className="absolute inset-0 rounded-3xl opacity-60 blur-md transition-opacity duration-500 group-hover:opacity-100"
      />
      <motion.div
        aria-hidden
        initial={animate ? { backgroundPosition: "0% 50%" } : false}
        animate={animate ? animateValues : undefined}
        transition={animate ? transition : undefined}
        style={sharedStyle}
        className="absolute inset-0 rounded-3xl"
      />
      <div className={cn("relative rounded-3xl bg-brand-card", className)}>
        {children}
      </div>
    </div>
  );
}
