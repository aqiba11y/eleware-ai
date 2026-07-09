"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0E1A] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "btn-shine bg-[#7C5CFF] text-white rounded-xl hover:bg-[#8B7AFF] hover:shadow-[0_0_32px_rgba(124,92,255,0.4)] active:scale-[0.98]",
        secondary:
          "bg-transparent text-white border border-[rgba(124,92,255,0.4)] rounded-xl hover:border-[#7C5CFF] hover:bg-[rgba(124,92,255,0.08)] active:scale-[0.98]",
        ghost:
          "bg-transparent text-[#7C5CFF] rounded-lg hover:text-[#8B7AFF] underline-offset-4 hover:underline",
      },
      size: {
        sm: "px-5 py-2.5 text-sm",
        md: "px-8 py-4 text-base",
        lg: "px-10 py-5 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export function Button({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export { buttonVariants };
