"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { WHAT_WE_DO } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export function WhatWeDo() {
  const reduce = useReducedMotion();

  return (
    <Section id="how-it-works">
      <Container>
        {/* Header */}
        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-4"
        >
          <span className="text-[13px] font-medium text-[#6B6B7B]">
            {WHAT_WE_DO.number}
          </span>
        </motion.div>

        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-8"
        >
          <Eyebrow>{WHAT_WE_DO.eyebrow}</Eyebrow>
        </motion.div>

        <motion.h2
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-5 font-heading text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[64px]"
        >
          {WHAT_WE_DO.headline}
        </motion.h2>

        <motion.p
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-14 max-w-[600px] text-[17px] leading-[1.6] text-[#6B6B7B]"
        >
          {WHAT_WE_DO.subhead}
        </motion.p>

        <Divider className="mb-2" />

        {/* Services grid */}
        <motion.div
          variants={reduce ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {WHAT_WE_DO.services.map((service, i) => (
            <motion.div key={i} variants={reduce ? {} : staggerItem}>
              <div className="flex items-start gap-5 py-7">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-sm bg-[#7C5CFF]"
                />
                <p className="text-[16px] leading-[1.6] text-[#C4C4D0]">
                  {service}
                </p>
              </div>
              <Divider />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 flex justify-end">
          <span className="text-[13px] font-medium text-[#6B6B7B]">
            {WHAT_WE_DO.number}
          </span>
        </div>
      </Container>
    </Section>
  );
}
