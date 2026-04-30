import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <hr
      aria-hidden="true"
      className={cn("w-full border-none", className)}
      style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
    />
  );
}
