"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LIVE_RESULTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface DashboardStackProps {
  className?: string;
}

export function DashboardStack({ className }: DashboardStackProps) {
  const dashboards = LIVE_RESULTS.dashboards;
  const [active, setActive] = useState(1);
  const activeDashboard = dashboards[active];

  return (
    <div className={cn("relative w-full", className)}>
      <div
        className="relative mx-auto h-[280px] max-w-[760px] sm:h-[380px] md:h-[460px]"
        style={{ perspective: 1500 }}
      >
        <div
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {dashboards.map((d, i) => {
            const isActive = i === active;
            const offset = i - active;
            return (
              <motion.button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${d.label} dashboard, ${d.duration}`}
                aria-pressed={isActive}
                className="group absolute inset-0 mx-auto overflow-hidden rounded-2xl border border-border-accent bg-brand-card shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                animate={{
                  rotateY: offset * -10,
                  x: offset * 56,
                  z: -Math.abs(offset) * 70,
                  opacity: isActive ? 1 : 0.55,
                  scale: isActive ? 1 : 0.94,
                  zIndex: dashboards.length - Math.abs(offset),
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Image (or placeholder if file missing) */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={d.src}
                  alt={d.alt}
                  className="h-full w-full object-cover object-top"
                  onError={(e) => {
                    // Fallback: show inline gradient + label
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector(".dash-fallback")) {
                      const fb = document.createElement("div");
                      fb.className =
                        "dash-fallback absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#1A1A2E] via-[#13131F] to-[#1A1A2E] text-text-muted";
                      fb.innerHTML = `
                        <div class="text-xs uppercase tracking-widest text-brand-purple">PLACEHOLDER</div>
                        <div class="text-sm font-medium text-text-primary">${d.label} · ${d.duration}</div>
                        <div class="text-[11px] text-text-muted">Replace at ${d.src}</div>
                      `;
                      parent.appendChild(fb);
                    }
                  }}
                />

                {/* Label badge */}
                <div className="absolute left-3 top-3 flex items-center gap-2 rounded-md border border-border-subtle bg-brand-card/80 px-3 py-1 text-xs text-text-primary backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-purple animate-pulse-glow" />
                  <span>
                    {d.label} <span className="text-text-muted">· {d.duration}</span>
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Active dashboard highlights */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        {activeDashboard.highlights.map((h) => (
          <div
            key={h.label}
            className="flex items-baseline gap-2 rounded-full border border-border-subtle bg-brand-surface px-4 py-2"
          >
            <span className="text-base font-semibold text-text-primary">
              {h.value}
            </span>
            <span className="text-xs text-text-muted">{h.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Dot navigation */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {dashboards.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to dashboard ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === active
                ? "w-8 bg-brand-purple"
                : "w-1.5 bg-text-muted/40 hover:bg-text-muted",
            )}
          />
        ))}
      </div>
    </div>
  );
}
