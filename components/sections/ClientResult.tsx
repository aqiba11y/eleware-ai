"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { CardSpotlight } from "@/components/ui/aceternity/CardSpotlight";
import { MeteorEffect } from "@/components/ui/aceternity/MeteorEffect";
import { NumberTicker } from "@/components/ui/aceternity/NumberTicker";
import { EvervaultCard } from "@/components/ui/aceternity/EvervaultCard";
import { CLIENT_RESULT } from "@/lib/constants";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations";

function parseTicker(raw: string) {
  const m = raw.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!m) return { value: 0, prefix: "", suffix: raw };
  return {
    value: parseInt(m[2].replace(/,/g, ""), 10),
    prefix: m[1],
    suffix: m[3],
  };
}

export function ClientResult() {
  const reduce = useReducedMotion();

  return (
    <Section id="case-study">
      <MeteorEffect number={3} className="opacity-50" />

      <Container className="relative z-10">
        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-4"
        >
          <span className="text-[13px] font-medium text-[#6B6B7B]">
            {CLIENT_RESULT.number}
          </span>
        </motion.div>

        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-8"
        >
          <Eyebrow>{CLIENT_RESULT.eyebrow}</Eyebrow>
        </motion.div>

        {/* Headline + top stats */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
          <motion.h2
            variants={reduce ? {} : fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="font-heading text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[60px]"
          >
            {CLIENT_RESULT.headline}
          </motion.h2>

          <motion.div
            variants={reduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-0"
          >
            {CLIENT_RESULT.topStats.map((stat) => {
              const t = parseTicker(stat.value);
              return (
                <motion.div
                  key={stat.label}
                  variants={reduce ? {} : staggerItem}
                  className="relative mb-px border-l-[3px] border-[#7C5CFF] bg-[#1A1A2E] px-7 py-6"
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <Divider className="my-14" />

        {/* Case study two-column wrapped in card spotlights */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Problems */}
          <motion.div
            variants={reduce ? {} : slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <CardSpotlight className="h-full p-8 md:p-10">
              <Eyebrow>{CLIENT_RESULT.problems.title}</Eyebrow>
              <ul className="mt-8 flex flex-col" role="list">
                {CLIENT_RESULT.problems.items.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={reduce ? {} : slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="flex items-start gap-4 py-5">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full border border-[#6B6B7B]"
                      />
                      <p className="text-[15px] leading-[1.6] text-[#6B6B7B]">
                        {item}
                      </p>
                    </div>
                    {i < CLIENT_RESULT.problems.items.length - 1 && <Divider />}
                  </motion.li>
                ))}
              </ul>
            </CardSpotlight>
          </motion.div>

          {/* Solutions */}
          <motion.div
            variants={reduce ? {} : slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <CardSpotlight className="h-full p-8 md:p-10">
              <Eyebrow>{CLIENT_RESULT.solutions.title}</Eyebrow>
              <ul className="mt-8 flex flex-col" role="list">
                {CLIENT_RESULT.solutions.items.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={reduce ? {} : slideInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="flex items-start gap-4 py-5">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-sm bg-[#7C5CFF] animate-scale-pulse"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      />
                      <p className="text-[15px] leading-[1.6] text-[#C4C4D0]">
                        {item}
                      </p>
                    </div>
                    {i < CLIENT_RESULT.solutions.items.length - 1 && <Divider />}
                  </motion.li>
                ))}
              </ul>
            </CardSpotlight>
          </motion.div>
        </div>

        {/* Testimonials — Evervault encrypted-text-on-hover effect */}
        <Divider className="my-14" />
        <div className="mb-8 flex items-center gap-3">
          <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-[#6B6B7B]">
            More Wins
          </span>
        </div>
        <motion.div
          variants={reduce ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {CLIENT_RESULT.testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={reduce ? {} : staggerItem}
              className="relative"
            >
              <EvervaultCard className="aspect-auto rounded-2xl">
                <div className="flex h-full flex-col p-8">
                  <p className="mb-6 text-[16px] italic leading-[1.7] text-[#C4C4D0]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <Divider className="mb-5" />
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[14px] font-semibold text-white">
                        {t.name}
                      </p>
                      <p className="text-[13px] text-[#6B6B7B]">
                        {t.role} · {t.company}
                      </p>
                    </div>
                    <span className="rounded-full bg-[rgba(124,92,255,0.15)] px-3 py-1 text-[12px] font-medium text-[#7C5CFF]">
                      {t.metric}
                    </span>
                  </div>
                </div>
              </EvervaultCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 flex justify-end">
          <span className="text-[13px] font-medium text-[#6B6B7B]">
            {CLIENT_RESULT.number}
          </span>
        </div>
      </Container>
    </Section>
  );
}
