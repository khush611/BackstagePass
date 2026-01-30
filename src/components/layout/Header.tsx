"use client";

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, Search, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onMenuClick?: () => void;
  className?: string;
}

export function Header({ onMenuClick, className }: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-bg-secondary/80 backdrop-blur-md border-b border-border",
        className
      )}
    >
      <div className="flex items-center justify-between h-14 px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-bg-hover transition-colors lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-text-secondary" />
          </button>
          <Logo />
        </div>

        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded-lg hover:bg-bg-hover transition-colors text-text-secondary hover:text-text-primary"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            className="p-2 rounded-lg hover:bg-bg-hover transition-colors text-text-secondary hover:text-text-primary relative"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-gold rounded-full" />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-gold">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            fill="white"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="font-semibold text-text-primary hidden sm:inline">
        Backstage<span className="text-accent-gold">Pass</span>
      </span>
    </div>
  );
}
