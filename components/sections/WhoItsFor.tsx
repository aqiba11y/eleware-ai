"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { WHO_ITS_FOR } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export function WhoItsFor() {
  const reduce = useReducedMotion();

  return (
    <Section id="who-its-for" className="bg-[#13131F]">
      <Container>
        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-4"
        >
          <span className="text-[13px] font-medium text-[#6B6B7B]">
            {WHO_ITS_FOR.number}
          </span>
        </motion.div>

        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-8"
        >
          <Eyebrow>{WHO_ITS_FOR.eyebrow}</Eyebrow>
        </motion.div>

        <motion.h2
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16 font-heading text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[64px]"
        >
          {WHO_ITS_FOR.headline}
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* For You */}
          <motion.div
            variants={reduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="overflow-hidden rounded-2xl border border-[rgba(124,92,255,0.3)] bg-[#1A1A2E]"
          >
            {/* Top purple bar */}
            <div className="h-[3px] w-full bg-[#7C5CFF]" aria-hidden="true" />

            <div className="p-8 md:p-10">
              <p className="mb-8 text-[14px] font-bold uppercase tracking-[0.1em] text-[#7C5CFF]">
                {WHO_ITS_FOR.forYou.title}
              </p>

              <ul className="flex flex-col" role="list">
                {WHO_ITS_FOR.forYou.items.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={reduce ? {} : staggerItem}
                  >
                    <div className="flex items-start gap-4 py-5">
                      <Check
                        size={16}
                        className="mt-0.5 flex-shrink-0 text-[#7C5CFF]"
                        aria-hidden="true"
                      />
                      <p className="text-[15px] leading-[1.6] text-[#C4C4D0]">
                        {item}
                      </p>
                    </div>
                    {i < WHO_ITS_FOR.forYou.items.length - 1 && <Divider />}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Not For You */}
          <motion.div
            variants={reduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(26,26,46,0.5)]"
          >
            {/* Top muted bar */}
            <div
              className="h-[3px] w-full"
              style={{ background: "rgba(107,107,123,0.4)" }}
              aria-hidden="true"
            />

            <div className="p-8 md:p-10">
              <p className="mb-8 text-[14px] font-bold uppercase tracking-[0.1em] text-[#6B6B7B]">
                {WHO_ITS_FOR.notForYou.title}
              </p>

              <ul className="flex flex-col" role="list">
                {WHO_ITS_FOR.notForYou.items.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={reduce ? {} : staggerItem}
                  >
                    <div className="flex items-start gap-4 py-5">
                      <X
                        size={16}
                        className="mt-0.5 flex-shrink-0 text-[#6B6B7B]"
                        aria-hidden="true"
                      />
                      <p className="text-[15px] leading-[1.6] text-[#6B6B7B]">
                        {item}
                      </p>
                    </div>
                    {i < WHO_ITS_FOR.notForYou.items.length - 1 && <Divider />}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 flex justify-end">
          <span className="text-[13px] font-medium text-[#6B6B7B]">
            {WHO_ITS_FOR.number}
          </span>
        </div>
      </Container>
    </Section>
  );
}
