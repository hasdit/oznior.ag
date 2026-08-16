import * as React from "react";
import { cn } from "./button";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "dark" | "outline";
}

export function Badge({ className, variant = "gold", ...props }: BadgeProps) {
  const variants = {
    gold: "bg-gold-champagne/20 text-gold-champagne border border-gold-champagne/40",
    dark: "bg-obsidian border border-gold-muted text-alabaster-muted",
    outline: "border border-gold-champagne text-gold-champagne",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest rounded-full",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
