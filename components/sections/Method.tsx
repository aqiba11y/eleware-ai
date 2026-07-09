"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WavyBackground } from "@/components/ui/aceternity/WavyBackground";
import { GateProgressionFlow } from "@/components/signature/GateProgressionFlow";
import { METHOD } from "@/lib/constants";
import { fadeInUp, viewportConfig } from "@/lib/animations";

export function Method() {
  const reduce = useReducedMotion();

  return (
    <Section id="method" className="bg-gradient-to-b from-transparent via-[#13131F] to-transparent">
      {/* Subtle wavy background */}
      <WavyBackground
        waveOpacity={0.18}
        blur={30}
        speed="slow"
        colors={["#7C5CFF", "#5B3FE0", "#8B7AFF"]}
      />

      <Container className="relative z-10">
        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-8"
        >
          <Eyebrow>{METHOD.eyebrow}</Eyebrow>
        </motion.div>

        <motion.h2
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-20 font-heading text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[64px]"
        >
          {METHOD.headline}
        </motion.h2>

        {/* The showstopper — animated gate progression flow */}
        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <GateProgressionFlow />
        </motion.div>

      </Container>
    </Section>
  );
}
