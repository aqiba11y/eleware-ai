"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CalendlyButton } from "@/components/ui/CalendlyButton";
import { MagneticButton } from "@/components/signature/MagneticButton";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-[rgba(124,92,255,0.12)] bg-black/60 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between md:h-20"
          aria-label="Main navigation"
        >
          {/* Logo with subtle pulse glow */}
          <a href="#top" className="group flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-5 w-[3px] flex-shrink-0 bg-[#7C5CFF] animate-pulse-glow"
            />
            <span className="text-sm font-bold uppercase tracking-[0.12em] text-white transition-opacity group-hover:opacity-80">
              {SITE.name}
            </span>
          </a>

          {/* Desktop links with underline-on-hover */}
          <ul
            className="hidden items-center gap-8 md:flex"
            role="list"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-underline text-sm text-[#C4C4D0] transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA — magnetic + moving border */}
          <div className="hidden md:block">
            <MagneticButton strength={4}>
              <span className="relative inline-flex rounded-xl">
                <span
                  aria-hidden
                  className="absolute -inset-[1.5px] rounded-xl animate-moving-border opacity-90"
                  style={{
                    backgroundImage:
                      "linear-gradient(110deg, #5B3FE0 20%, #8B7AFF 50%, #5B3FE0 80%)",
                    backgroundSize: "200% 100%",
                  }}
                />
                <span className="relative inline-flex rounded-xl">
                  <CalendlyButton size="sm">Book a Call</CalendlyButton>
                </span>
              </span>
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="rounded-lg p-2 text-white transition-colors hover:bg-[rgba(124,92,255,0.1)] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {/* Mobile panel — staggered link reveal */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-16 z-40 flex flex-col bg-[#0E0E1A] p-6 md:hidden"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <motion.ul
              className="mt-4 flex flex-col gap-2"
              role="list"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                },
              }}
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <a
                    href={link.href}
                    className="block rounded-xl px-4 py-4 text-xl font-medium text-white transition-colors hover:bg-[rgba(124,92,255,0.1)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="mt-8"
            >
              <CalendlyButton size="lg" className="w-full">
                Book a Call
              </CalendlyButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
