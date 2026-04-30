import { cn } from "@/lib/utils";

interface CornerOrbsProps {
  position?: "top-right" | "bottom-left" | "both";
  size?: number;
  className?: string;
}

export function CornerOrbs({
  position = "both",
  size = 320,
  className,
}: CornerOrbsProps) {
  const half = size / 2;

  return (
    <>
      {(position === "top-right" || position === "both") && (
        <div
          aria-hidden="true"
          className={cn("pointer-events-none absolute", className)}
          style={{
            top: -half,
            right: -half,
            width: size,
            height: size,
            borderRadius: "50%",
            border: "1px solid rgba(124, 92, 255, 0.25)",
          }}
        />
      )}
      {(position === "top-right" || position === "both") && (
        <div
          aria-hidden="true"
          className={cn("pointer-events-none absolute", className)}
          style={{
            top: -half * 0.4,
            right: -half * 0.4,
            width: size * 0.65,
            height: size * 0.65,
            borderRadius: "50%",
            border: "1px solid rgba(124, 92, 255, 0.15)",
          }}
        />
      )}
      {(position === "bottom-left" || position === "both") && (
        <div
          aria-hidden="true"
          className={cn("pointer-events-none absolute", className)}
          style={{
            bottom: -half,
            left: -half,
            width: size,
            height: size,
            borderRadius: "50%",
            border: "1px solid rgba(124, 92, 255, 0.2)",
          }}
        />
      )}
    </>
  );
}
