"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatBlock } from "@/components/ui/StatBlock";
import { Divider } from "@/components/ui/Divider";
import { WHAT_YOU_GET } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem, slideInRight, viewportConfig } from "@/lib/animations";

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
          {/* Left: timeline */}
          <motion.div
            variants={reduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative flex flex-col"
          >
            {/* Vertical connecting line */}
            <div
              aria-hidden="true"
              className="absolute left-[68px] top-10 hidden h-[calc(100%-80px)] w-px lg:block"
              style={{ background: "rgba(124, 92, 255, 0.3)" }}
            />

            {WHAT_YOU_GET.timeline.map((item, i) => (
              <motion.div key={i} variants={reduce ? {} : staggerItem}>
                <div className="flex items-start gap-6 py-6">
                  {/* Milestone pill */}
                  <div className="z-10 flex-shrink-0 rounded-lg border border-[rgba(124,92,255,0.4)] bg-[#1A1A2E] px-4 py-2.5 text-center">
                    <span className="whitespace-nowrap text-[13px] font-semibold text-[#8B7AFF]">
                      {item.milestone}
                    </span>
                  </div>
                  {/* Description */}
                  <p className="pt-2.5 text-[16px] leading-[1.6] text-[#C4C4D0]">
                    {item.description}
                  </p>
                </div>
                {i < WHAT_YOU_GET.timeline.length - 1 && <Divider />}
              </motion.div>
            ))}
          </motion.div>

          {/* Right: stat blocks */}
          <motion.div
            variants={reduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-0"
          >
            {WHAT_YOU_GET.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={reduce ? {} : slideInRight}
              >
                <StatBlock
                  value={stat.value}
                  label={stat.label}
                  className="mb-px"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 flex justify-end">
          <span className="text-[13px] font-medium text-[#6B6B7B]">
            {WHAT_YOU_GET.number}
          </span>
        </div>
      </Container>
    </Section>
  );
}
