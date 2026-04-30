"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CalendlyButton } from "@/components/ui/CalendlyButton";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
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
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[rgba(124,92,255,0.1)] bg-[rgba(14,14,26,0.88)] backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between md:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a href="#top" className="group flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-5 w-[3px] flex-shrink-0 bg-[#7C5CFF]"
            />
            <span className="text-sm font-bold uppercase tracking-[0.12em] text-white transition-opacity group-hover:opacity-80">
              {SITE.name}
            </span>
          </a>

          {/* Desktop links */}
          <ul
            className="hidden items-center gap-8 md:flex"
            role="list"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[#C4C4D0] transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <CalendlyButton size="sm">Book a Call</CalendlyButton>
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

      {/* Mobile panel */}
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
            <ul className="mt-4 flex flex-col gap-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-xl px-4 py-4 text-xl font-medium text-white transition-colors hover:bg-[rgba(124,92,255,0.1)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CalendlyButton size="lg" className="w-full">
                Book a Call
              </CalendlyButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
