"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { CornerOrbs } from "@/components/ui/CornerOrbs";
import { CalendlyButton } from "@/components/ui/CalendlyButton";
import { GradientText } from "@/components/ui/GradientText";
import { Spotlight } from "@/components/ui/aceternity/Spotlight";
import { GridBackground } from "@/components/ui/aceternity/GridBackground";
import { Sparkles } from "@/components/ui/aceternity/Sparkles";
import { TextGenerateEffect } from "@/components/ui/aceternity/TextGenerateEffect";
import { NumberTicker } from "@/components/ui/aceternity/NumberTicker";
import { ThreeDOrb } from "@/components/signature/ThreeDOrb";
import { CalendarFillAnimation } from "@/components/signature/CalendarFillAnimation";
import { MagneticButton } from "@/components/signature/MagneticButton";
import { HERO } from "@/lib/constants";

function parseTicker(raw: string) {
  const m = raw.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!m) return { value: 0, prefix: "", suffix: raw };
  return {
    value: parseInt(m[2].replace(/,/g, ""), 10),
    prefix: m[1],
    suffix: m[3],
  };
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <Section
      id="top"
      className="flex min-h-[90vh] flex-col justify-center pb-0 pt-28 md:pt-36"
    >
      {/* Background composition */}
      <Spotlight className="z-0" size={700} />
      <GridBackground className="z-0" cellSize={48} opacity={0.06} />
      <CornerOrbs position="top-right" size={380} />

      <Container className="relative z-10">
        <Divider className="mb-10" />

        {/* 2-column hero: text left, calendar+orb right */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-16">
          {/* LEFT: text content */}
          <div className="max-w-[820px]">
            {/* Eyebrow with sparkles */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-6"
            >
              <Sparkles count={8}>
                <Eyebrow>{HERO.eyebrow}</Eyebrow>
              </Sparkles>
            </motion.div>

            <Divider className="mb-8" />

            {/* Headline — split with text-generate effect */}
            <h1 className="mb-6 font-heading text-[48px] font-bold leading-[1.0] tracking-[-0.02em] md:text-[72px] lg:text-[88px]">
              <TextGenerateEffect
                as="span"
                words={HERO.headlineWhite}
                className="block text-white"
                duration={0.4}
                stagger={0.06}
              />
              <GradientText as="span" className="block">
                <TextGenerateEffect
                  as="span"
                  words={HERO.headlinePurple}
                  duration={0.4}
                  stagger={0.06}
                  delay={0.5}
                />
              </GradientText>
            </h1>

            <Divider className="mb-8" />

            {/* Subhead with blur-reveal */}
            <motion.p
              initial={
                reduce
                  ? undefined
                  : { opacity: 0, filter: "blur(16px)", y: 16 }
              }
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="mb-10 max-w-[560px] text-[18px] leading-[1.6] text-[#C4C4D0] md:text-[20px]"
            >
              {HERO.subhead}
            </motion.p>

            {/* CTA: magnetic + moving-border ring */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <MagneticButton strength={6}>
                <span className="relative inline-flex rounded-xl">
                  <span
                    aria-hidden
                    className="absolute -inset-[2px] rounded-xl animate-moving-border opacity-90"
                    style={{
                      backgroundImage:
                        "linear-gradient(110deg, #5B3FE0 20%, #8B7AFF 50%, #5B3FE0 80%)",
                      backgroundSize: "200% 100%",
                    }}
                  />
                  <span className="relative inline-flex rounded-xl">
                    <CalendlyButton size="lg">
                      {HERO.primaryCTA} →
                    </CalendlyButton>
                  </span>
                </span>
              </MagneticButton>
            </motion.div>
          </div>

          {/* RIGHT: calendar fill animation + 3D orb behind */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative mx-auto w-full max-w-[420px]"
          >
            {/* 3D orb behind, lower-z */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-12 -z-10 opacity-60"
            >
              <ThreeDOrb />
            </div>

            {/* Calendar grid */}
            <div className="rounded-2xl border border-[rgba(124,92,255,0.18)] bg-[rgba(26,26,46,0.55)] p-5 backdrop-blur-sm md:p-7">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7C5CFF]">
                  Your calendar
                </span>
                <span className="text-[11px] text-[#6B6B7B]">live</span>
              </div>
              <CalendarFillAnimation />
              <p className="mt-5 text-center text-[12px] text-[#6B6B7B]">
                {HERO.audienceTag}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Stats row */}
      <Container className="relative z-10 mt-14">
        <Divider className="mb-0" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={
            reduce
              ? {}
              : {
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.1, delayChildren: 1.5 },
                  },
                }
          }
          className="flex flex-col sm:flex-row"
        >
          {HERO.stats.map((stat) => {
            const t = parseTicker(stat.value);
            return (
              <motion.div
                key={stat.label}
                variants={
                  reduce
                    ? {}
                    : {
                        hidden: { opacity: 0, y: 16 },
                        visible: { opacity: 1, y: 0 },
                      }
                }
                className="group relative flex-1 border-l-[3px] border-[#7C5CFF] bg-[#1A1A2E] px-7 py-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow-purple-sm"
              >
                <p className="font-heading text-[42px] font-bold leading-none tracking-tight text-[#8B7AFF] md:text-[52px]">
                  <NumberTicker
                    value={t.value}
                    prefix={t.prefix}
                    suffix={t.suffix}
                    duration={1.6}
                  />
                </p>
                <p className="mt-1.5 text-[14px] text-[#6B6B7B]">
                  {stat.label}
                </p>
                {/* Pulsing left bar */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-[#7C5CFF] opacity-0 transition-opacity duration-300 group-hover:opacity-100 animate-pulse-glow"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
