"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WHAT_YOU_GET } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PipelineGrowthChartProps {
  className?: string;
}

const W = 800;
const H = 320;
const PAD_X = 50;
const PAD_Y = 40;

// 5 anchor points along the growth curve.
// Y values are inverted (SVG origin at top-left).
const ANCHORS = [
  { x: PAD_X, y: H - PAD_Y - 10 },
  { x: PAD_X + (W - 2 * PAD_X) * 0.25, y: H - PAD_Y - 70 },
  { x: PAD_X + (W - 2 * PAD_X) * 0.5, y: H - PAD_Y - 140 },
  { x: PAD_X + (W - 2 * PAD_X) * 0.75, y: H - PAD_Y - 200 },
  { x: W - PAD_X, y: PAD_Y + 20 },
];

const PATH_D = (() => {
  let d = `M ${ANCHORS[0].x} ${ANCHORS[0].y}`;
  for (let i = 1; i < ANCHORS.length; i++) {
    const prev = ANCHORS[i - 1];
    const curr = ANCHORS[i];
    const cp1x = prev.x + (curr.x - prev.x) * 0.5;
    const cp1y = prev.y;
    const cp2x = prev.x + (curr.x - prev.x) * 0.5;
    const cp2y = curr.y;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
  }
  return d;
})();

const FILL_D = `${PATH_D} L ${ANCHORS[ANCHORS.length - 1].x} ${H - PAD_Y} L ${ANCHORS[0].x} ${H - PAD_Y} Z`;

export function PipelineGrowthChart({ className }: PipelineGrowthChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 50%"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const fillOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.18]);

  // Pre-compute milestone opacities (hooks must run unconditionally)
  const op0 = useTransform(scrollYProgress, [0.05, 0.18], [0, 1]);
  const op1 = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const op2 = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);
  const op3 = useTransform(scrollYProgress, [0.8, 0.95], [0, 1]);
  const opacities = [op0, op1, op2, op3];

  const milestones = WHAT_YOU_GET.timeline;

  return (
    <div ref={ref} className={cn("relative w-full", className)}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Pipeline growth over 90 days"
        role="img"
      >
        <defs>
          <linearGradient id="pgc-line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#7C5CFF" />
            <stop offset="1" stopColor="#8B7AFF" />
          </linearGradient>
          <linearGradient id="pgc-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#7C5CFF" stopOpacity="0.5" />
            <stop offset="1" stopColor="#7C5CFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Gridlines */}
        {[0, 0.25, 0.5, 0.75].map((t) => (
          <line
            key={t}
            x1={PAD_X}
            x2={W - PAD_X}
            y1={PAD_Y + (H - 2 * PAD_Y) * t}
            y2={PAD_Y + (H - 2 * PAD_Y) * t}
            stroke="rgba(124,92,255,0.06)"
            strokeWidth={1}
          />
        ))}

        {/* Filled area under curve */}
        <motion.path
          d={FILL_D}
          fill="url(#pgc-fill)"
          style={{ opacity: fillOpacity }}
        />

        {/* Animated growth curve */}
        <motion.path
          d={PATH_D}
          fill="none"
          stroke="url(#pgc-line)"
          strokeWidth={3}
          strokeLinecap="round"
          style={{ pathLength }}
        />

        {/* Milestone markers */}
        {ANCHORS.slice(0, 4).map((p, i) => (
          <motion.g key={i} style={{ opacity: opacities[i] }}>
            <circle
              cx={p.x}
              cy={p.y}
              r={5}
              fill="#7C5CFF"
              stroke="#FFFFFF"
              strokeWidth={2}
            />
            <text
              x={p.x}
              y={p.y - 16}
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="11"
              fontWeight="600"
              style={{ letterSpacing: "0.05em" }}
            >
              {milestones[i]?.milestone.toUpperCase()}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
