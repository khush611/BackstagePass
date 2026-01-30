"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "green";
  className?: string;
}

const variantClasses = {
  default: "bg-bg-input text-text-secondary",
  gold: "bg-accent-gold-light text-accent-gold",
  green: "bg-green-500/10 text-accent-green",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium px-2 py-0.5 text-xs",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
