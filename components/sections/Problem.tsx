"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { PROBLEM } from "@/lib/constants";
import { fadeInUp, slideInRight, viewportConfig } from "@/lib/animations";

export function Problem() {
  const reduce = useReducedMotion();

  return (
    <Section id="problem">
      <Container>
        <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-[1fr_300px]">
          {/* Left: content */}
          <div>
            <motion.div
              variants={reduce ? {} : fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mb-3 flex items-center gap-3"
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
              variants={reduce ? {} : fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mb-12 font-heading text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[64px]"
            >
              {PROBLEM.headline}
            </motion.h2>

            {/* Bullet points */}
            <div className="flex flex-col">
              {PROBLEM.body.map((line, i) => {
                const [bold, rest] = line.split(" — ");
                return (
                  <motion.div
                    key={i}
                    variants={reduce ? {} : fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex items-start gap-5 py-7">
                      <span
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-[#7C5CFF] opacity-80"
                      />
                      <p className="text-[17px] leading-[1.6] text-[#C4C4D0]">
                        <strong className="font-semibold text-white">
                          {bold}
                        </strong>
                        {rest ? ` — ${rest}` : ""}
                      </p>
                    </div>
                    {i < PROBLEM.body.length - 1 && <Divider />}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: stat box */}
          <motion.div
            variants={reduce ? {} : slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:pt-24"
          >
            <div className="border border-[rgba(124,92,255,0.3)] bg-[#1A1A2E] p-8">
              <p className="font-heading text-[64px] font-bold leading-none tracking-[-0.03em] text-[#8B7AFF] md:text-[80px]">
                {PROBLEM.stat.value}
              </p>
              <Divider className="my-4" />
              <p className="text-[14px] leading-[1.5] text-[#6B6B7B]">
                {PROBLEM.stat.label}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section number */}
        <div className="mt-16 flex justify-end">
          <span className="text-[13px] font-medium text-[#6B6B7B]">
            {PROBLEM.number}
          </span>
        </div>
      </Container>
    </Section>
  );
}
