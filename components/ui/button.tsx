import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium uppercase tracking-widest transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded";

    const variants = {
      primary:
        "bg-gold-champagne text-obsidian hover:bg-gold-glow shadow-gold-glow font-bold",
      secondary:
        "bg-obsidian-surface text-alabaster border border-gold-muted hover:border-gold-champagne hover:bg-gold-muted/10",
      outline:
        "border border-gold-champagne/40 text-gold-champagne hover:bg-gold-muted/20 font-semibold",
      ghost:
        "text-alabaster-muted hover:text-gold-champagne hover:bg-gold-muted/10",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-[10px]",
      md: "px-6 py-3 text-xs",
      lg: "px-8 py-4 text-xs font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
