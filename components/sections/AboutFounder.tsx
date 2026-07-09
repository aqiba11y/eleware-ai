"use client";

import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { BackgroundGradient } from "@/components/ui/aceternity/BackgroundGradient";
import { NumberTicker } from "@/components/ui/aceternity/NumberTicker";
import { TextGenerateEffect } from "@/components/ui/aceternity/TextGenerateEffect";
import { MagneticButton } from "@/components/signature/MagneticButton";
import { GradientText } from "@/components/ui/GradientText";
import { FOUNDER, SITE } from "@/lib/constants";
import {
  fadeInUp,
  slideInRight,
  viewportConfig,
} from "@/lib/animations";

function parseTicker(raw: string) {
  const m = raw.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!m) return { value: 0, prefix: "", suffix: raw, isRange: false };
  const isRange = /^\d+\s*[-–]\s*\d+/.test(raw);
  return {
    value: parseInt(m[2].replace(/,/g, ""), 10),
    prefix: m[1],
    suffix: m[3],
    isRange,
  };
}

// Split the founder name so the last word renders in the brand gradient.
function NameSplit({ name }: { name: string }) {
  const parts = name.trim().split(" ");
  const last = parts.pop() ?? "";
  const head = parts.join(" ");
  return (
    <>
      <TextGenerateEffect as="span" words={head} duration={0.5} stagger={0.07} />{" "}
      <GradientText as="span">
        <TextGenerateEffect as="span" words={last} duration={0.5} stagger={0.07} delay={0.4} />
      </GradientText>
    </>
  );
}

export function AboutFounder() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [imgError, setImgError] = useState(false);

  // Subtle parallax on the photo — moves slower than text on scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <Section id="founder" className="bg-gradient-to-b from-transparent via-[#13131F] to-transparent">
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

        <div
          ref={sectionRef}
          className="grid grid-cols-1 gap-12 lg:grid-cols-[420px_1fr]"
        >
          {/* Left: photo with animated gradient border + glowing stars + parallax */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <motion.div style={reduce ? undefined : { y: photoY }}>
              <BackgroundGradient
                containerClassName="rounded-2xl"
                className="overflow-hidden rounded-2xl"
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
              </BackgroundGradient>

            </motion.div>

            {/* Purple glow under image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 left-1/2 h-32 w-48 -translate-x-1/2"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(124, 92, 255, 0.25) 0%, transparent 70%)",
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
              <NameSplit name={FOUNDER.name} />
            </h2>

            {/* Role pill with pulse glow */}
            <div className="mb-10 mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(124,92,255,0.3)] bg-[rgba(124,92,255,0.08)] px-3 py-1.5 animate-pulse-glow">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7C5CFF]" />
              <span className="text-[13px] font-medium text-[#7C5CFF]">
                {FOUNDER.role}
              </span>
            </div>

            <div className="flex flex-col gap-0">
              {FOUNDER.bio.map((para, i) => (
                <motion.div
                  key={i}
                  variants={reduce ? {} : slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.12 }}
                >
                  <p className="py-5 text-[16px] leading-[1.7] text-[#C4C4D0]">
                    {para}
                  </p>
                  {i < FOUNDER.bio.length - 1 && <Divider />}
                </motion.div>
              ))}
            </div>

            <Divider className="my-8" />

            {/* Stats with NumberTicker + pulsing left bar */}
            <div className="mb-8 flex flex-col gap-0 sm:flex-row">
              {FOUNDER.stats.map((stat) => {
                const t = parseTicker(stat.value);
                return (
                  <div
                    key={stat.label}
                    className="group relative flex-1 rounded-r-xl border-l-[3px] border-[#7C5CFF] bg-[#1A1A2E] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1E1E35] hover:shadow-glow-purple-sm"
                  >
                    <p className="font-heading text-[32px] font-bold leading-none tracking-tight text-[#8B7AFF]">
                      {t.isRange ? (
                        stat.value
                      ) : (
                        <NumberTicker
                          value={t.value}
                          prefix={t.prefix}
                          suffix={t.suffix}
                          duration={1.6}
                        />
                      )}
                    </p>
                    <p className="mt-1 text-[12px] text-[#6B6B7B]">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* LinkedIn — magnetic + color shift */}
            <MagneticButton strength={4}>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[14px] text-[#6B6B7B] transition-colors duration-300 hover:text-[#7C5CFF]"
                aria-label="Abdullah Hijazi on LinkedIn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="transition-transform group-hover:scale-110"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="link-underline">Connect on LinkedIn</span>
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
