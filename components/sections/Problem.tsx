"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { BackgroundBeams } from "@/components/ui/aceternity/BackgroundBeams";
import { BackgroundGradient } from "@/components/ui/aceternity/BackgroundGradient";
import { CardSpotlight } from "@/components/ui/aceternity/CardSpotlight";
import { PROBLEM } from "@/lib/constants";
import { fadeInUp, slideInRight, viewportConfig } from "@/lib/animations";

export function Problem() {
  const reduce = useReducedMotion();

  return (
    <Section id="problem">
      <BackgroundBeams className="opacity-25" count={5} />

      <Container className="relative z-10">
        <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-[1fr_300px]">
          {/* Left content */}
          <div>
            <motion.div
              variants={reduce ? {} : fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mb-3"
            >
              <span className="text-[13px] font-medium text-[#6B6B7B]">
                {PROBLEM.number}
              </span>
            </motion.div>

            <motion.div
              variants={reduce ? {} : fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mb-8"
            >
              <Eyebrow>{PROBLEM.eyebrow}</Eyebrow>
            </motion.div>

            <motion.h2
              initial={
                reduce
                  ? undefined
                  : { opacity: 0, filter: "blur(16px)", y: 20 }
              }
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-12 font-heading text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[64px]"
            >
              {PROBLEM.headline}
            </motion.h2>

            {/* 3 body bullets, each in a card spotlight */}
            <div className="flex flex-col gap-3">
              {PROBLEM.body.map((item, i) => (
                <motion.div
                  key={i}
                  variants={reduce ? {} : fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.12 }}
                >
                  <CardSpotlight className="px-6 py-5">
                    <div className="flex items-start gap-5">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-4 w-4 flex-shrink-0 rounded-full bg-[#7C5CFF] animate-scale-pulse"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      />
                      <p className="text-[17px] leading-[1.6] text-[#C4C4D0]">
                        <strong className="font-semibold text-white">
                          {item.bold}
                        </strong>
                        {item.rest ? ` ${item.rest}` : ""}
                      </p>
                    </div>
                  </CardSpotlight>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: stat box wrapped in animated gradient border */}
          <motion.div
            variants={reduce ? {} : slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:pt-24"
          >
            <BackgroundGradient
              containerClassName="rounded-2xl"
              className="rounded-2xl p-8 animate-pulse-glow"
            >
              <p className="font-heading text-[64px] font-bold leading-none tracking-[-0.03em] text-[#8B7AFF] md:text-[80px]">
                {PROBLEM.stat.value}
              </p>
              <Divider className="my-4" />
              <p className="text-[14px] leading-[1.5] text-[#6B6B7B]">
                {PROBLEM.stat.label}
              </p>
            </BackgroundGradient>
          </motion.div>
        </div>

        <div className="mt-16 flex justify-end">
          <span className="text-[13px] font-medium text-[#6B6B7B]">
            {PROBLEM.number}
          </span>
        </div>
      </Container>
    </Section>
  );
}
