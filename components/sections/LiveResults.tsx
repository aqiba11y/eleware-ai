"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LIVE_RESULTS } from "@/lib/constants";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations";
import { GridBackground } from "@/components/ui/aceternity/GridBackground";
import { MeteorEffect } from "@/components/ui/aceternity/MeteorEffect";
import { NumberTicker } from "@/components/ui/aceternity/NumberTicker";
import { DashboardStack } from "@/components/signature/DashboardStack";

/**
 * Parses ticker-friendly values like "2,700+", "32%", "874+", "5+"
 * into a numeric value plus a prefix and suffix that wrap the count-up.
 */
function parseTicker(raw: string): {
  value: number;
  prefix: string;
  suffix: string;
} {
  const match = raw.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!match) return { value: 0, prefix: "", suffix: raw };
  return {
    value: parseInt(match[2].replace(/,/g, ""), 10),
    prefix: match[1],
    suffix: match[3],
  };
}

export function LiveResults() {
  const reduce = useReducedMotion();

  return (
    <Section id="live-results" className="relative overflow-hidden">
      {/* Background layers */}
      <GridBackground opacity={0.05} cellSize={48} />
      <MeteorEffect number={4} className="opacity-60" />

      <Container>
        {/* Section number */}
        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-4"
        >
          <span className="text-[13px] font-medium text-[#6B6B7B]">
            {LIVE_RESULTS.number}
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-8"
        >
          <Eyebrow>{LIVE_RESULTS.eyebrow}</Eyebrow>
        </motion.div>

        {/* Headline + subhead */}
        <motion.h2
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-3xl font-heading text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[60px]"
        >
          {LIVE_RESULTS.headline}
        </motion.h2>

        <motion.p
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-6 max-w-2xl text-[15px] leading-[1.7] text-[#C4C4D0]"
        >
          {LIVE_RESULTS.subhead}
        </motion.p>

        {/* Aggregate stats row */}
        <motion.div
          variants={reduce ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-14 grid grid-cols-1 gap-px bg-[rgba(255,255,255,0.06)] sm:grid-cols-2 lg:grid-cols-4"
        >
          {LIVE_RESULTS.aggregateStats.map((s) => {
            const t = parseTicker(s.value);
            return (
              <motion.div
                key={s.label}
                variants={reduce ? {} : staggerItem}
                className="relative bg-[#1A1A2E] border-l-[3px] border-[#7C5CFF] px-7 py-6"
              >
                <p className="font-heading text-[42px] font-bold leading-none tracking-tight text-[#8B7AFF] md:text-[52px]">
                  <NumberTicker
                    value={t.value}
                    prefix={t.prefix}
                    suffix={t.suffix}
                    duration={1.6}
                  />
                </p>
                <p className="mt-2 text-[14px] leading-snug text-[#6B6B7B]">
                  {s.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dashboard stack */}
        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-20"
        >
          <DashboardStack />
        </motion.div>

        {/* Closing number */}
        <div className="mt-12 flex justify-end">
          <span className="text-[13px] font-medium text-[#6B6B7B]">
            {LIVE_RESULTS.number}
          </span>
        </div>
      </Container>
    </Section>
  );
}
