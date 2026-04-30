"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { METHOD } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export function Method() {
  const reduce = useReducedMotion();

  return (
    <Section id="method" className="bg-[#13131F]">
      <Container>
        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-4"
        >
          <span className="text-[13px] font-medium text-[#6B6B7B]">
            {METHOD.number}
          </span>
        </motion.div>

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
          className="mb-16 font-heading text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[64px]"
        >
          {METHOD.headline}
        </motion.h2>

        {/* Gate cards */}
        <motion.div
          variants={reduce ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-6"
          style={{ background: "rgba(124, 92, 255, 0.12)" }}
        >
          {METHOD.gates.map((gate, i) => {
            const isLast = i === METHOD.gates.length - 1;
            const topBarColor = isLast ? "#F59E0B" : "#7C5CFF";

            return (
              <motion.div
                key={gate.id}
                variants={reduce ? {} : staggerItem}
                className="group flex flex-col bg-[#1A1A2E] transition-colors duration-200 hover:bg-[#1f1f38]"
              >
                {/* Top color bar */}
                <div
                  className="h-[3px] w-full flex-shrink-0"
                  style={{ background: topBarColor }}
                  aria-hidden="true"
                />

                <div className="flex flex-1 flex-col p-6 lg:p-5 xl:p-6">
                  {/* Gate ID */}
                  <p
                    className="mb-1 text-[13px] font-bold tracking-[0.05em]"
                    style={{ color: topBarColor }}
                  >
                    {gate.id}
                  </p>

                  {/* Gate name */}
                  <h3 className="mb-4 font-heading text-[18px] font-bold text-white lg:text-[16px] xl:text-[18px]">
                    {gate.title}
                  </h3>

                  <Divider className="mb-4" />

                  {/* Description */}
                  <p className="text-[14px] leading-[1.6] text-[#6B6B7B]">
                    {gate.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-8 flex justify-end">
          <span className="text-[13px] font-medium text-[#6B6B7B]">
            {METHOD.number}
          </span>
        </div>
      </Container>
    </Section>
  );
}
