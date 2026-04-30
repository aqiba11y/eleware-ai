import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className="inline-block h-5 w-[3px] flex-shrink-0 bg-[#7C5CFF]"
      />
      <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-[#7C5CFF]">
        {children}
      </span>
    </div>
  );
}
