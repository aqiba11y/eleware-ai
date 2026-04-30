"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { FAQS } from "@/lib/constants";
import { fadeInUp, viewportConfig } from "@/lib/animations";

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
          {FAQS.map((faq, i) => (
            <div key={i}>
              <Divider />
              <div>
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between py-6 text-left"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="max-w-[85%] text-[16px] font-semibold leading-[1.5] text-white md:text-[17px]">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="ml-4 flex-shrink-0 text-[#7C5CFF]"
                    aria-hidden="true"
                  >
                    {openIndex === i ? (
                      <X size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      initial={reduce ? {} : { height: 0, opacity: 0 }}
                      animate={reduce ? {} : { height: "auto", opacity: 1 }}
                      exit={reduce ? {} : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="pb-6 text-[15px] leading-[1.7] text-[#C4C4D0]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
          <Divider />
        </motion.div>
      </Container>
    </Section>
  );
}
