"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import { ThreeDOrbFallback } from "./ThreeDOrbFallback";

// Lazy-loaded R3F canvas — only fetched on non-touch, non-reduced-motion devices
const ThreeDOrbCanvas = dynamic(
  () => import("./ThreeDOrbCanvas").then((m) => m.ThreeDOrbCanvas),
  {
    ssr: false,
    loading: () => <ThreeDOrbFallback />,
  },
);

interface ThreeDOrbProps {
  className?: string;
}

export function ThreeDOrb({ className }: ThreeDOrbProps) {
  const isTouch = useIsTouchDevice();
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("relative", className)} aria-hidden>
      {isTouch || reduceMotion ? (
        <ThreeDOrbFallback />
      ) : (
        <ThreeDOrbCanvas />
      )}
    </div>
  );
}
