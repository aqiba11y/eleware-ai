"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatBlock } from "@/components/ui/StatBlock";
import { Divider } from "@/components/ui/Divider";
import { FOUNDER, SITE } from "@/lib/constants";
import { slideInLeft, slideInRight, fadeInUp, viewportConfig } from "@/lib/animations";

export function AboutFounder() {
  const reduce = useReducedMotion();
  const [imgError, setImgError] = useState(false);

  return (
    <Section id="founder" className="bg-[#13131F]">
      <Container>
        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16"
        >
          <Eyebrow>{FOUNDER.eyebrow}</Eyebrow>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[420px_1fr]">
          {/* Left: image */}
          <motion.div
            variants={reduce ? {} : slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ boxShadow: "0 0 0 1px rgba(124, 92, 255, 0.3), 0 0 60px rgba(124, 92, 255, 0.12)" }}
            >
              <div className="aspect-square w-full bg-[#1A1A2E]">
                {imgError ? (
                  <div
                    className="flex h-full w-full items-center justify-center"
                    aria-label={FOUNDER.imageAlt}
                    role="img"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(124,92,255,0.15)]">
                        <span className="font-heading text-3xl font-bold text-[#7C5CFF]">
                          AH
                        </span>
                      </div>
                      <span className="text-[13px] text-[#6B6B7B]">
                        Photo coming soon
                      </span>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={FOUNDER.imageSrc}
                    alt={FOUNDER.imageAlt}
                    width={420}
                    height={420}
                    className="h-full w-full object-cover object-top"
                    onError={() => setImgError(true)}
                    priority={false}
                  />
                )}
              </div>
            </div>
            {/* Purple glow under image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 left-1/2 h-32 w-48 -translate-x-1/2"
              style={{
                background: "radial-gradient(ellipse, rgba(124, 92, 255, 0.25) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
          </motion.div>

          {/* Right: content */}
          <motion.div
            variants={reduce ? {} : slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-1 font-heading text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px]">
              {FOUNDER.name}
            </h2>
            <p className="mb-10 text-[16px] font-medium text-[#7C5CFF]">
              {FOUNDER.role}
            </p>

            <div className="flex flex-col gap-0">
              {FOUNDER.bio.map((para, i) => (
                <div key={i}>
                  <p className="py-5 text-[16px] leading-[1.7] text-[#C4C4D0]">
                    {para}
                  </p>
                  {i < FOUNDER.bio.length - 1 && <Divider />}
                </div>
              ))}
            </div>

            <Divider className="my-8" />

            {/* Stats */}
            <div className="mb-8 flex flex-col gap-0 sm:flex-row">
              {FOUNDER.stats.map((stat) => (
                <div key={stat.label} className="flex-1">
                  <StatBlock
                    value={stat.value}
                    label={stat.label}
                    size="sm"
                  />
                </div>
              ))}
            </div>

            {/* LinkedIn link */}
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] text-[#6B6B7B] transition-colors hover:text-[#7C5CFF]"
              aria-label="Abdullah Hijazi on LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
