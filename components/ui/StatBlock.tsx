import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string;
  label: string;
  size?: "default" | "sm";
  className?: string;
}

export function StatBlock({
  value,
  label,
  size = "default",
  className,
}: StatBlockProps) {
  return (
    <div
      className={cn(
        "relative bg-[#1A1A2E] border-l-[3px] border-[#7C5CFF]",
        size === "default" ? "px-7 py-6" : "px-5 py-4",
        className
      )}
    >
      <p
        className={cn(
          "font-heading font-bold leading-none tracking-tight text-[#8B7AFF]",
          size === "default" ? "text-[42px] md:text-[52px]" : "text-[32px]"
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          "mt-1.5 text-[#6B6B7B]",
          size === "default" ? "text-[14px]" : "text-[12px]"
        )}
      >
        {label}
      </p>
    </div>
  );
}
