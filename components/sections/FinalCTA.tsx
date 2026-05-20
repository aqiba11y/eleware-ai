"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { CornerOrbs } from "@/components/ui/CornerOrbs";
import { CalendlyButton } from "@/components/ui/CalendlyButton";
import { GradientText } from "@/components/ui/GradientText";
import { AuroraBackground } from "@/components/ui/aceternity/AuroraBackground";
import { MeteorEffect } from "@/components/ui/aceternity/MeteorEffect";
import { Sparkles } from "@/components/ui/aceternity/Sparkles";
import { TextGenerateEffect } from "@/components/ui/aceternity/TextGenerateEffect";
import { ThreeDOrb } from "@/components/signature/ThreeDOrb";
import { MagneticButton } from "@/components/signature/MagneticButton";
import { FINAL_CTA } from "@/lib/constants";
import {
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations";

// Render the headline with the last word in gradient (matches spec).
function HeadlineSplit({ text }: { text: string }) {
  const words = text.trim().replace(/\.$/, "").split(" ");
  const last = words.pop() ?? "";
  const head = words.join(" ");
  return (
    <>
      <TextGenerateEffect
        as="span"
        words={head}
        duration={1.0}
        stagger={0.1}
      />{" "}
      <GradientText as="span">
        <TextGenerateEffect
          as="span"
          words={last + "."}
          duration={1.0}
          stagger={0.1}
          delay={head ? 0.5 : 0}
        />
      </GradientText>
    </>
  );
}

export function FinalCTA() {
  const reduce = useReducedMotion();

  return (
    <Section id="book" className="relative overflow-hidden bg-[#13131F]">
      {/* Background composition */}
      <AuroraBackground intensity="intense" />
      <MeteorEffect number={6} className="opacity-70" />
      <CornerOrbs position="both" size={300} />

      {/* 3D orb in upper right */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-12 hidden h-56 w-56 opacity-50 lg:block xl:right-16"
      >
        <ThreeDOrb />
      </div>

      {/* Floating outlined orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-[15%] h-28 w-28 rounded-full border border-[rgba(124,92,255,0.2)] animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[12%] bottom-[20%] h-40 w-40 rounded-full border border-[rgba(124,92,255,0.18)] animate-float"
        style={{ animationDelay: "2s", animationDuration: "8s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[18%] bottom-[12%] h-20 w-20 rounded-full border border-[rgba(124,92,255,0.25)] animate-float"
        style={{ animationDelay: "1s", animationDuration: "7s" }}
      />

      <Container className="relative z-10">
        <Divider className="mb-12" />

        <motion.div
          variants={reduce ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow with sparkles */}
          <motion.div
            variants={reduce ? {} : staggerItem}
            className="mb-8"
          >
            <Sparkles count={10}>
              <Eyebrow>{FINAL_CTA.eyebrow}</Eyebrow>
            </Sparkles>
          </motion.div>

          <Divider className="mb-10 w-full max-w-md" />

          {/* Headline — last word in gradient via TextGenerate */}
          <motion.h2
            variants={reduce ? {} : staggerItem}
            className="mb-6 font-heading text-[48px] font-bold leading-[1.0] tracking-[-0.03em] text-white md:text-[72px] lg:text-[96px]"
          >
            <HeadlineSplit text={FINAL_CTA.headline} />
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

          {/* CTA: magnetic + moving border + pulse glow */}
          <motion.div variants={reduce ? {} : staggerItem} className="mb-6">
            <MagneticButton strength={8}>
              <span className="relative inline-flex rounded-xl">
                <span
                  aria-hidden
                  className="absolute -inset-[2px] rounded-xl animate-moving-border"
                  style={{
                    backgroundImage:
                      "linear-gradient(110deg, #5B3FE0 20%, #8B7AFF 50%, #5B3FE0 80%)",
                    backgroundSize: "200% 100%",
                    animationDuration: "3s",
                  }}
                />
                <span className="relative inline-flex rounded-xl animate-pulse-glow">
                  <CalendlyButton size="lg" className="min-w-[280px] text-[17px]">
                    {FINAL_CTA.cta} →
                  </CalendlyButton>
                </span>
              </span>
            </MagneticButton>
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
