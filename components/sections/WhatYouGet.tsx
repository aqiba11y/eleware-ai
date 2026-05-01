"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BackgroundGradient } from "@/components/ui/aceternity/BackgroundGradient";
import { NumberTicker } from "@/components/ui/aceternity/NumberTicker";
import { PipelineGrowthChart } from "@/components/signature/PipelineGrowthChart";
import { WHAT_YOU_GET } from "@/lib/constants";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations";

function parseTicker(raw: string) {
  const m = raw.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!m) return { value: 0, prefix: "", suffix: raw, isRange: false };
  const isRange = /^\d+\s*[-–]\s*\d+/.test(raw);
  return {
    value: parseInt(m[2].replace(/,/g, ""), 10),
    prefix: m[1],
    suffix: m[3],
    isRange,
  };
}

export function WhatYouGet() {
  const reduce = useReducedMotion();

  return (
    <Section id="results">
      <Container>
        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-4"
        >
          <span className="text-[13px] font-medium text-[#6B6B7B]">
            {WHAT_YOU_GET.number}
          </span>
        </motion.div>

        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-8"
        >
          <Eyebrow>{WHAT_YOU_GET.eyebrow}</Eyebrow>
        </motion.div>

        <motion.h2
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16 font-heading text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[64px]"
        >
          {WHAT_YOU_GET.headline}
        </motion.h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px]">
          {/* Left: scroll-linked growth chart + condensed milestone descriptions */}
          <motion.div
            variants={reduce ? {} : fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="rounded-2xl border border-[rgba(124,92,255,0.18)] bg-[#13131F] p-6 md:p-8"
          >
            <PipelineGrowthChart />

            {/* Milestone descriptions below chart */}
            <motion.div
              variants={reduce ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4"
            >
              {WHAT_YOU_GET.timeline.map((item) => (
                <motion.div
                  key={item.milestone}
                  variants={reduce ? {} : staggerItem}
                  className="border-l-2 border-[rgba(124,92,255,0.4)] pl-3"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8B7AFF]">
                    {item.milestone}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-[1.5] text-[#C4C4D0]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: stat blocks wrapped in animated gradient border */}
          <motion.div
            variants={reduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-3"
          >
            {WHAT_YOU_GET.stats.map((stat) => {
              const t = parseTicker(stat.value);
              return (
                <motion.div
                  key={stat.label}
                  variants={reduce ? {} : staggerItem}
                >
                  <BackgroundGradient
                    containerClassName="rounded-xl"
                    className="rounded-xl border-l-[3px] border-[#7C5CFF] bg-[#1A1A2E] px-7 py-6"
                  >
                    <p className="font-heading text-[42px] font-bold leading-none tracking-tight text-[#8B7AFF] md:text-[52px]">
                      {t.isRange ? (
                        stat.value
                      ) : (
                        <NumberTicker
                          value={t.value}
                          prefix={t.prefix}
                          suffix={t.suffix}
                          duration={1.6}
                        />
                      )}
                    </p>
                    <p className="mt-1.5 text-[14px] text-[#6B6B7B]">
                      {stat.label}
                    </p>
                  </BackgroundGradient>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-12 flex justify-end">
          <span className="text-[13px] font-medium text-[#6B6B7B]">
            {WHAT_YOU_GET.number}
          </span>
        </div>
      </Container>
    </Section>
  );
}
