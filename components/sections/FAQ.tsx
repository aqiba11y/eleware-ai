"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { FAQS } from "@/lib/constants";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <Section id="faq">
      <Container>
        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-8"
        >
          <Eyebrow>Questions, Answered</Eyebrow>
        </motion.div>

        <motion.h2
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16 font-heading text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px]"
        >
          Things people ask before booking.
        </motion.h2>

        <motion.div
          variants={reduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <Divider />
                <div
                  className={cn(
                    "transition-colors duration-300",
                    isOpen
                      ? "bg-[rgba(124,92,255,0.04)]"
                      : "hover:bg-[rgba(124,92,255,0.025)]",
                  )}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between px-3 py-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span
                      className={cn(
                        "max-w-[85%] text-[16px] font-semibold leading-[1.5] transition-colors duration-300 md:text-[17px]",
                        isOpen
                          ? "bg-gradient-to-r from-[#7C5CFF] to-[#8B7AFF] bg-clip-text text-transparent"
                          : "text-white",
                      )}
                    >
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="ml-4 flex-shrink-0 text-[#7C5CFF]"
                      aria-hidden="true"
                    >
                      <Plus size={18} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        role="region"
                        aria-labelledby={`faq-question-${i}`}
                        initial={reduce ? {} : { height: 0, opacity: 0 }}
                        animate={reduce ? {} : { height: "auto", opacity: 1 }}
                        exit={reduce ? {} : { height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="px-3 pb-5 text-[15px] leading-[1.7] text-[#C4C4D0]">
                          {faq.a}
                        </p>
                        {/* Accent divider drawing in below answer */}
                        <motion.div
                          initial={reduce ? {} : { scaleX: 0 }}
                          animate={reduce ? {} : { scaleX: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.15,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="ml-3 h-px w-1/3 origin-left bg-gradient-to-r from-[#7C5CFF] to-transparent"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
          <Divider />
        </motion.div>
      </Container>
    </Section>
  );
}
