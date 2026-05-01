"use client";

import { useScroll, type UseScrollOptions } from "framer-motion";
import type { RefObject } from "react";

type Target = RefObject<HTMLElement | null>;

export function useScrollProgress(
  target?: Target,
  options?: Omit<UseScrollOptions, "target">,
) {
  return useScroll({
    target: target as UseScrollOptions["target"],
    offset: ["start end", "end start"],
    ...options,
  });
}
