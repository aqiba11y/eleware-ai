import type { Variants } from "framer-motion";
import { ANIM } from "./animation-config";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIM.duration.slow, ease: ANIM.ease.glide },
  },
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: ANIM.duration.slow, ease: ANIM.ease.smooth },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: ANIM.stagger.normal,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIM.duration.normal, ease: ANIM.ease.glide },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: ANIM.duration.slow, ease: ANIM.ease.glide },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: ANIM.duration.slow, ease: ANIM.ease.glide },
  },
};

export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(20px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: ANIM.duration.epic, ease: ANIM.ease.glide },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: ANIM.duration.normal, ease: ANIM.ease.snappy },
  },
};

export const VIEWPORT_ONCE = { once: true, amount: 0.2 } as const;
