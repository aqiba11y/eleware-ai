"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EvervaultCardProps {
  text?: string;
  className?: string;
  children?: ReactNode;
}

const CHARS =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";

function generateNoise(length: number) {
  let out = "";
  for (let i = 0; i < length; i++) {
    out += CHARS[Math.floor(Math.random() * CHARS.length)];
  }
  return out;
}

export function EvervaultCard({
  text,
  className,
  children,
}: EvervaultCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Initial render shows empty string so SSR and client match; we populate
  // the noise after mount, avoiding Math.random() hydration mismatch.
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateNoise(1500));
  }, []);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    setRandomString(generateNoise(1500));
  };

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={cn(
        "group/card relative aspect-square overflow-hidden rounded-3xl border border-border-subtle bg-brand-card",
        className,
      )}
    >
      <div className="absolute inset-0 z-10 flex items-center justify-center text-text-primary">
        {children ?? <span className="text-2xl font-semibold">{text}</span>}
      </div>
      <motion.div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
        style={{
          background: "linear-gradient(135deg, #7C5CFF, #5B3FE0)",
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      />
      <motion.div
        className="absolute inset-0 mix-blend-overlay opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      >
        <p className="absolute inset-0 break-words p-4 font-mono text-xs leading-tight text-white/70">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}
