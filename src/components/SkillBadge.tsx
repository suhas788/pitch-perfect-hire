import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  variant?: "technical" | "soft" | "interest";
  size?: "sm" | "md";
  className?: string;
}

export function SkillBadge({ skill, variant = "technical", size = "md", className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-colors",
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm",
        variant === "technical" && "bg-primary/10 text-primary border border-primary/20",
        variant === "soft" && "bg-accent/10 text-accent border border-accent/20",
        variant === "interest" && "bg-secondary text-secondary-foreground border border-border",
        className
      )}
    >
      {skill}
    </span>
  );
}
