"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

const filters = [
  { id: "all", label: "All Posts" },
  { id: "pinned", label: "Pinned" },
];

export function FeedFilters() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-2">
        <span className="text-sm text-text-muted">Showing posts from:</span>
        <div className="flex items-center gap-1 bg-bg-input rounded-lg p-1">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200",
                activeFilter === filter.id
                  ? "bg-bg-card text-text-primary shadow-sm"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-2">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-input text-text-secondary hover:text-text-primary text-sm transition-colors">
          <Globe className="w-4 h-4" />
          Everyone
        </button>
      </div>
    </div>
  );
}
