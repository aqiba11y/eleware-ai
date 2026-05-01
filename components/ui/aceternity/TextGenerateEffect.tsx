"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ElementType } from "react";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  duration?: number;
  filter?: boolean;
  stagger?: number;
  delay?: number;
  as?: ElementType;
}

export function TextGenerateEffect({
  words,
  className,
  duration = 0.5,
  filter = true,
  stagger = 0.08,
  delay = 0,
  as: Tag = "span",
}: TextGenerateEffectProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const tokens = words.split(" ");
  const Component = Tag as ElementType;

  return (
    <Component ref={ref} className={cn(className)}>
      {tokens.map((token, i) => (
        <motion.span
          key={`${token}-${i}`}
          className="inline-block whitespace-pre"
          initial={{
            opacity: 0,
            filter: filter ? "blur(10px)" : "none",
            y: 8,
          }}
          animate={
            inView
              ? { opacity: 1, filter: "blur(0px)", y: 0 }
              : undefined
          }
          transition={{
            duration,
            delay: delay + i * stagger,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {token}
          {i < tokens.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </Component>
  );
}
