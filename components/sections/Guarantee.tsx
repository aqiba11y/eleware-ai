"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { GlowEffect } from "@/components/ui/GlowEffect";
import { CalendlyButton } from "@/components/ui/CalendlyButton";
import { GUARANTEE } from "@/lib/constants";
import { fadeInUp, scaleIn, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export function Guarantee() {
  const reduce = useReducedMotion();

  return (
    <Section id="guarantee" className="relative overflow-hidden">
      {/* Intense background glow */}
      <GlowEffect
        className="absolute left-1/2 top-1/2"
        size={900}
        intensity="strong"
      />

      <Container className="relative z-10">
        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-4"
        >
          <span className="text-[13px] font-medium text-[#6B6B7B]">
            {GUARANTEE.number}
          </span>
        </motion.div>

        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-12"
        >
          <Eyebrow>{GUARANTEE.eyebrow}</Eyebrow>
        </motion.div>

        {/* Main guarantee box */}
        <motion.div
          variants={reduce ? {} : scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16 rounded-2xl border border-[rgba(124,92,255,0.35)] bg-[rgba(26,26,46,0.9)] p-10 text-center md:p-16"
          style={{
            boxShadow: "0 0 80px rgba(124, 92, 255, 0.12), inset 0 1px 0 rgba(124, 92, 255, 0.1)",
          }}
        >
          <h2 className="mb-5 font-heading text-[48px] font-bold leading-[1.0] tracking-[-0.03em] text-white md:text-[64px] lg:text-[80px]">
            {GUARANTEE.headline}
          </h2>

          <p className="mb-6 font-heading text-[22px] font-bold text-[#8B7AFF] md:text-[28px]">
            {GUARANTEE.subheadline}
          </p>

          <Divider className="mx-auto mb-6 max-w-xs" />

          <p className="text-[16px] leading-[1.6] text-[#6B6B7B]">
            {GUARANTEE.body}
          </p>
        </motion.div>

        {/* Terms */}
        <motion.div
          variants={reduce ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 gap-0 sm:grid-cols-2"
        >
          {GUARANTEE.terms.map((term, i) => (
            <motion.div key={i} variants={reduce ? {} : staggerItem}>
              <div className="flex items-start gap-4 py-5">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full border border-[rgba(124,92,255,0.5)]"
                />
                <p className="text-[15px] leading-[1.6] text-[#C4C4D0]">
                  {term}
                </p>
              </div>
              <Divider />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-14 text-center"
        >
          <CalendlyButton size="lg">Claim the guarantee →</CalendlyButton>
        </motion.div>

        <div className="mt-8 flex justify-end">
          <span className="text-[13px] font-medium text-[#6B6B7B]">
            {GUARANTEE.number}
          </span>
        </div>
      </Container>
    </Section>
  );
}
