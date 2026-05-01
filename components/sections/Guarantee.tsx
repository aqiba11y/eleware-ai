"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { CalendlyButton } from "@/components/ui/CalendlyButton";
import { AuroraBackground } from "@/components/ui/aceternity/AuroraBackground";
import { BackgroundGradient } from "@/components/ui/aceternity/BackgroundGradient";
import { TextGenerateEffect } from "@/components/ui/aceternity/TextGenerateEffect";
import { Sparkles } from "@/components/ui/aceternity/Sparkles";
import { MagneticButton } from "@/components/signature/MagneticButton";
import { GUARANTEE } from "@/lib/constants";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations";

export function Guarantee() {
  const reduce = useReducedMotion();

  return (
    <Section id="guarantee" className="relative overflow-hidden">
      {/* Intense aurora background */}
      <AuroraBackground intensity="intense" />

      {/* Floating outlined orbs (drift via float keyframe) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-[18%] h-32 w-32 rounded-full border border-[rgba(124,92,255,0.2)] animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[12%] top-[60%] h-48 w-48 rounded-full border border-[rgba(124,92,255,0.18)] animate-float"
        style={{ animationDelay: "1.5s", animationDuration: "8s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[15%] bottom-[12%] h-24 w-24 rounded-full border border-[rgba(124,92,255,0.25)] animate-float"
        style={{ animationDelay: "3s", animationDuration: "7s" }}
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

        {/* Main guarantee box wrapped in animated gradient border */}
        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16"
        >
          <BackgroundGradient
            containerClassName="rounded-3xl"
            className="relative overflow-hidden p-10 text-center md:p-16 animate-pulse-glow"
          >
            <h2 className="mb-5 font-heading text-[48px] font-bold leading-[1.0] tracking-[-0.03em] text-white md:text-[64px] lg:text-[80px]">
              <TextGenerateEffect
                words={GUARANTEE.headline}
                duration={1.0}
                stagger={0.1}
              />
            </h2>

            <Sparkles count={14}>
              <p className="mb-6 font-heading text-[22px] font-bold text-[#8B7AFF] md:text-[28px]">
                {GUARANTEE.subheadline}
              </p>
            </Sparkles>

            <Divider className="mx-auto mb-6 max-w-xs" />

            <p className="text-[16px] leading-[1.6] text-[#C4C4D0]">
              {GUARANTEE.body}
            </p>
          </BackgroundGradient>
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
          <MagneticButton strength={6}>
            <CalendlyButton size="lg">Claim the guarantee →</CalendlyButton>
          </MagneticButton>
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
