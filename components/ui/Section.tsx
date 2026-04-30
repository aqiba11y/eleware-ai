import { cn } from "@/lib/utils";
import { GlowEffect } from "./GlowEffect";
import { CornerOrbs } from "./CornerOrbs";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "withGlow" | "withOrbs";
  as?: "section" | "div";
}

export function Section({
  children,
  id,
  className,
  variant = "default",
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative w-full py-[80px] lg:py-[140px] overflow-hidden",
        className
      )}
    >
      {variant === "withGlow" && (
        <GlowEffect
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          size={700}
          intensity="subtle"
        />
      )}
      {variant === "withOrbs" && <CornerOrbs position="both" />}
      {children}
    </Tag>
  );
}
