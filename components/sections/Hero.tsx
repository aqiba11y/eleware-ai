"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatBlock } from "@/components/ui/StatBlock";
import { Divider } from "@/components/ui/Divider";
import { CornerOrbs } from "@/components/ui/CornerOrbs";
import { CalendlyButton } from "@/components/ui/CalendlyButton";
import { GradientText } from "@/components/ui/GradientText";
import { HERO } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Hero() {
  const reduce = useReducedMotion();
  const variants = reduce ? {} : staggerContainer;
  const itemVariants = reduce ? {} : staggerItem;

  return (
    <Section
      id="top"
      className="flex min-h-[90vh] flex-col justify-center pb-0 pt-28 md:pt-36"
    >
      <CornerOrbs position="top-right" size={380} />

      <Container className="relative">
        <Divider className="mb-10" />

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="max-w-[820px]"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-6">
            <Eyebrow>{HERO.eyebrow}</Eyebrow>
          </motion.div>

          <Divider className="mb-8" />

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 font-heading text-[48px] font-bold leading-[1.0] tracking-[-0.02em] md:text-[72px] lg:text-[88px]"
          >
            <span className="block text-white">{HERO.headlineWhite}</span>
            <GradientText className="block">{HERO.headlinePurple}</GradientText>
          </motion.h1>

          <Divider className="mb-8" />

          {/* Subhead */}
          <motion.p
            variants={itemVariants}
            className="mb-10 max-w-[560px] text-[18px] leading-[1.6] text-[#C4C4D0] md:text-[20px]"
          >
            {HERO.subhead}
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <CalendlyButton size="lg">{HERO.primaryCTA} →</CalendlyButton>
          </motion.div>
        </motion.div>

        {/* Audience tag — desktop, right side near orbs */}
        <div className="absolute right-0 top-8 hidden lg:block xl:right-8">
          <p className="rounded-xl border border-[rgba(124,92,255,0.3)] bg-[rgba(124,92,255,0.1)] px-5 py-3 text-center text-sm font-semibold text-white">
            {HERO.audienceTag}
          </p>
        </div>
      </Container>

      {/* Stats row */}
      <Container className="mt-14">
        <Divider className="mb-0" />
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row"
        >
          {HERO.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="flex-1"
            >
              <StatBlock value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
