"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "secondary" | "outline" | "gold";
  children: React.ReactNode;
}

const variantClasses = {
  secondary: "bg-bg-input text-text-primary hover:bg-bg-hover",
  outline: "border border-border text-text-primary hover:bg-bg-hover",
  gold: "bg-accent-gold text-white hover:opacity-90",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "outline", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1.5 text-xs",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
