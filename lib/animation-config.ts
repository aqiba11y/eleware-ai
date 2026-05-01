export const ANIM = {
  ease: {
    smooth: [0.4, 0, 0.2, 1] as [number, number, number, number],
    bounce: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
    snappy: [0.4, 0, 0.6, 1] as [number, number, number, number],
    glide: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  },
  duration: {
    instant: 0.15,
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    epic: 1.2,
  },
  stagger: {
    tight: 0.05,
    normal: 0.1,
    loose: 0.2,
  },
  spring: {
    snappy: { type: "spring" as const, stiffness: 400, damping: 30 },
    smooth: { type: "spring" as const, stiffness: 100, damping: 20 },
    bouncy: { type: "spring" as const, stiffness: 300, damping: 15 },
  },
} as const;
