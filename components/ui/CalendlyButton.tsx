"use client";

import Script from "next/script";
import { Button } from "./Button";
import { buttonVariants } from "./Button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { SITE } from "@/lib/constants";

interface CalendlyButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function CalendlyButton({
  children,
  className,
  variant = "primary",
  size = "md",
}: CalendlyButtonProps) {
  function handleClick() {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: SITE.calendly });
    } else {
      window.open(SITE.calendly, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <Button
        variant={variant}
        size={size}
        className={cn(className)}
        onClick={handleClick}
        aria-label="Book a free discovery call on Calendly"
      >
        {children}
      </Button>
    </>
  );
}
