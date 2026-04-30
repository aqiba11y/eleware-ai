"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatBlock } from "@/components/ui/StatBlock";
import { Divider } from "@/components/ui/Divider";
import { CLIENT_RESULT } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export function ClientResult() {
  const reduce = useReducedMotion();

  return (
    <Section id="case-study">
      <Container>
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

          {/* Stat column */}
          <motion.div
            variants={reduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-0"
          >
            {CLIENT_RESULT.topStats.map((stat) => (
              <motion.div key={stat.label} variants={reduce ? {} : staggerItem}>
                <StatBlock
                  value={stat.value}
                  label={stat.label}
                  className="mb-px"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Divider className="my-14" />

        {/* Case study two-column */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Problems */}
          <div className="pr-0 md:pr-12">
            <motion.div
              variants={reduce ? {} : fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mb-8"
            >
              <Eyebrow>{CLIENT_RESULT.problems.title}</Eyebrow>
            </motion.div>
            <motion.ul
              variants={reduce ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex flex-col"
              role="list"
            >
              {CLIENT_RESULT.problems.items.map((item, i) => (
                <motion.li
                  key={i}
                  variants={reduce ? {} : staggerItem}
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
            </motion.ul>
          </div>

          {/* Solutions */}
          <div
            className="mt-12 pl-0 md:mt-0 md:border-l md:pl-12"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <motion.div
              variants={reduce ? {} : fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="mb-8"
            >
              <Eyebrow>{CLIENT_RESULT.solutions.title}</Eyebrow>
            </motion.div>
            <motion.ul
              variants={reduce ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex flex-col"
              role="list"
            >
              {CLIENT_RESULT.solutions.items.map((item, i) => (
                <motion.li
                  key={i}
                  variants={reduce ? {} : staggerItem}
                >
                  <div className="flex items-start gap-4 py-5">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-sm bg-[#7C5CFF]"
                    />
                    <p className="text-[15px] leading-[1.6] text-[#C4C4D0]">
                      {item}
                    </p>
                  </div>
                  {i < CLIENT_RESULT.solutions.items.length - 1 && <Divider />}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Testimonials */}
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
              className="rounded-2xl border border-[rgba(124,92,255,0.15)] bg-[#1A1A2E] p-8"
            >
              <p className="mb-6 text-[16px] italic leading-[1.7] text-[#C4C4D0]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <Divider className="mb-5" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[14px] font-semibold text-white">{t.name}</p>
                  <p className="text-[13px] text-[#6B6B7B]">
                    {t.role} · {t.company}
                  </p>
                </div>
                <span className="rounded-full bg-[rgba(124,92,255,0.15)] px-3 py-1 text-[12px] font-medium text-[#7C5CFF]">
                  {t.metric}
                </span>
              </div>
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
