"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { CardSpotlight } from "@/components/ui/aceternity/CardSpotlight";
import { GridBackground } from "@/components/ui/aceternity/GridBackground";
import { Sparkles } from "@/components/ui/aceternity/Sparkles";
import { WHO_ITS_FOR } from "@/lib/constants";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations";

export function WhoItsFor() {
  const reduce = useReducedMotion();

  return (
    <Section id="who-its-for" className="bg-[#13131F]">
      <GridBackground opacity={0.05} cellSize={48} interactive={false} />

      <Container className="relative z-10">
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
          {/* For You — wrapped in CardSpotlight */}
          <motion.div
            variants={reduce ? {} : slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <CardSpotlight className="overflow-hidden rounded-2xl border-[rgba(124,92,255,0.3)]">
              <div className="h-[3px] w-full bg-[#7C5CFF]" aria-hidden="true" />
              <div className="p-8 md:p-10">
                <p className="mb-8 text-[14px] font-bold uppercase tracking-[0.1em] text-[#7C5CFF]">
                  {WHO_ITS_FOR.forYou.title}
                </p>
                <motion.ul
                  variants={reduce ? {} : staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  className="flex flex-col"
                  role="list"
                >
                  {WHO_ITS_FOR.forYou.items.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={reduce ? {} : staggerItem}
                    >
                      <div className="flex items-start gap-4 py-5">
                        <Sparkles count={4} className="inline-flex">
                          <Check
                            size={16}
                            className="mt-0.5 flex-shrink-0 text-[#7C5CFF]"
                            aria-hidden="true"
                          />
                        </Sparkles>
                        <p className="text-[15px] leading-[1.6] text-[#C4C4D0]">
                          {item}
                        </p>
                      </div>
                      {i < WHO_ITS_FOR.forYou.items.length - 1 && <Divider />}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Not For You — muted, no spotlight */}
          <motion.div
            variants={reduce ? {} : slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(26,26,46,0.5)]"
          >
            <div
              className="h-[3px] w-full"
              style={{ background: "rgba(107,107,123,0.4)" }}
              aria-hidden="true"
            />
            <div className="p-8 md:p-10">
              <p className="mb-8 text-[14px] font-bold uppercase tracking-[0.1em] text-[#6B6B7B]">
                {WHO_ITS_FOR.notForYou.title}
              </p>
              <motion.ul
                variants={reduce ? {} : staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="flex flex-col"
                role="list"
              >
                {WHO_ITS_FOR.notForYou.items.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={reduce ? {} : staggerItem}
                  >
                    <div className="flex items-start gap-4 py-5">
                      <X
                        size={16}
                        className="mt-0.5 flex-shrink-0 text-[#6B6B7B] animate-scale-pulse"
                        style={{ animationDelay: `${i * 0.4}s` }}
                        aria-hidden="true"
                      />
                      <p className="text-[15px] leading-[1.6] text-[#6B6B7B]">
                        {item}
                      </p>
                    </div>
                    {i < WHO_ITS_FOR.notForYou.items.length - 1 && <Divider />}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>

      </Container>
    </Section>
  );
}
