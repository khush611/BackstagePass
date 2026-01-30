"use client";

import { useState } from "react";
import { Header } from "./Header";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

export function MainLayout({ children, sidebar }: MainLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header onMenuClick={() => setIsMobileMenuOpen(true)} />

      <div className="flex max-w-[1400px] mx-auto">
        <main className="flex-1 min-w-0 px-4 py-6 lg:px-6">
          {children}
        </main>

        <aside className="hidden lg:block w-80 xl:w-96 shrink-0 border-l border-border bg-bg-secondary">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto p-4">
            {sidebar}
          </div>
        </aside>

        <div
          className={cn(
            "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div
            className={cn(
              "absolute right-0 top-0 h-full w-80 bg-bg-secondary transform transition-transform duration-300 ease-out",
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-semibold text-text-primary">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-bg-hover transition-colors"
              >
                <X className="w-5 h-5 text-text-secondary" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100%-4rem)]">
              {sidebar}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
