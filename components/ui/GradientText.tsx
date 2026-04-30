import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export function GradientText({
  children,
  className,
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <Tag
      className={cn(
        "bg-gradient-to-br from-[#7C5CFF] to-[#5B3FE0] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </Tag>
  );
}
