import { cn } from "@/lib/utils";

interface GlowEffectProps {
  className?: string;
  size?: number;
  intensity?: "subtle" | "medium" | "strong";
}

export function GlowEffect({
  className,
  size = 500,
  intensity = "medium",
}: GlowEffectProps) {
  const opacityMap = {
    subtle: 0.15,
    medium: 0.25,
    strong: 0.45,
  };

  const opacity = opacityMap[intensity];

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(ellipse at center, rgba(124, 92, 255, ${opacity}) 0%, transparent 70%)`,
        filter: "blur(60px)",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
