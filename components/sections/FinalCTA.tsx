"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { CornerOrbs } from "@/components/ui/CornerOrbs";
import { GlowEffect } from "@/components/ui/GlowEffect";
import { CalendlyButton } from "@/components/ui/CalendlyButton";
import { FINAL_CTA } from "@/lib/constants";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export function FinalCTA() {
  const reduce = useReducedMotion();

  return (
    <Section id="book" className="relative overflow-hidden bg-[#13131F]">
      <GlowEffect
        className="absolute left-1/2 top-1/2"
        size={800}
        intensity="medium"
      />
      <CornerOrbs position="both" size={300} />

      <Container className="relative z-10">
        {/* Horizontal dividers across layout — matches PDF */}
        <Divider className="mb-12" />

        <motion.div
          variants={reduce ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow */}
          <motion.div
            variants={reduce ? {} : staggerItem}
            className="mb-8"
          >
            <Eyebrow>{FINAL_CTA.eyebrow}</Eyebrow>
          </motion.div>

          <Divider className="mb-10 w-full max-w-md" />

          {/* Headline */}
          <motion.h2
            variants={reduce ? {} : staggerItem}
            className="mb-6 font-heading text-[48px] font-bold leading-[1.0] tracking-[-0.03em] text-white md:text-[72px] lg:text-[96px]"
          >
            {FINAL_CTA.headline}
          </motion.h2>

          <Divider className="mb-8 w-full max-w-md" />

          {/* Subhead */}
          <motion.p
            variants={reduce ? {} : staggerItem}
            className="mb-4 text-[18px] font-medium text-[#C4C4D0] md:text-[20px]"
          >
            {FINAL_CTA.subhead}
          </motion.p>

          {/* Body */}
          <motion.p
            variants={reduce ? {} : staggerItem}
            className="mb-12 max-w-[500px] text-[15px] leading-[1.7] text-[#6B6B7B]"
          >
            {FINAL_CTA.body}
          </motion.p>

          {/* CTA */}
          <motion.div variants={reduce ? {} : staggerItem} className="mb-6">
            <CalendlyButton size="lg" className="min-w-[280px] text-[17px]">
              {FINAL_CTA.cta} →
            </CalendlyButton>
          </motion.div>

          {/* Calendly URL */}
          <motion.p
            variants={reduce ? {} : staggerItem}
            className="text-[13px] text-[#6B6B7B]"
          >
            {FINAL_CTA.calendlyDisplay}
          </motion.p>
        </motion.div>

        <Divider className="mt-16" />
      </Container>
    </Section>
  );
}
