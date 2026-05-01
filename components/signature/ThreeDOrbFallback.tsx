import { cn } from "@/lib/utils";

interface ThreeDOrbFallbackProps {
  className?: string;
}

export function ThreeDOrbFallback({ className }: ThreeDOrbFallbackProps) {
  return (
    <div
      className={cn(
        "h-full w-full flex items-center justify-center",
        className,
      )}
      aria-hidden
    >
      <div
        className="aspect-square w-3/4 rounded-full opacity-60 blur-[2px] animate-float"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #8B7AFF 0%, #7C5CFF 40%, #5B3FE0 80%)",
          boxShadow:
            "0 0 60px rgba(124, 92, 255, 0.4), inset 0 -20px 40px rgba(0, 0, 0, 0.3)",
        }}
      />
    </div>
  );
}
