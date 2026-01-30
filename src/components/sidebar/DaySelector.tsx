"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";

interface DaySelectorProps {
  totalDays?: number;
  completedDays?: number;
  currentDay?: number;
  lockedFrom?: number;
  onDaySelect?: (day: number) => void;
}

export function DaySelector({
  totalDays = 30,
  completedDays = 5,
  currentDay: initialCurrentDay = 6,
  lockedFrom = 15,
  onDaySelect,
}: DaySelectorProps) {
  const [selectedDay, setSelectedDay] = useState(initialCurrentDay);

  const handleDayClick = (day: number) => {
    if (day > lockedFrom) return;
    setSelectedDay(day);
    onDaySelect?.(day);
  };

  const getDayState = (day: number) => {
    if (day > lockedFrom) return "locked";
    if (day < completedDays) return "completed";
    if (day === selectedDay) return "current";
    return "available";
  };

  return (
    <div className="bg-bg-card rounded-xl border border-border p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-text-primary text-sm">
          Challenge Progress
        </h3>
        <span className="text-xs text-text-secondary">
          Day {selectedDay} of {totalDays}
        </span>
      </div>

      <div className="h-1.5 bg-bg-input rounded-full mb-4 overflow-hidden">
        <div
          className="h-full bg-accent-gold rounded-full transition-all duration-500"
          style={{ width: `${(completedDays / totalDays) * 100}%` }}
        />
      </div>

      <div className="grid grid-cols-6 gap-2">
        {Array.from({ length: totalDays }, (_, i) => i + 1).map((day) => {
          const state = getDayState(day);
          const isLocked = state === "locked";
          const isCompleted = state === "completed";
          const isCurrent = state === "current";

          return (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              disabled={isLocked}
              className={cn(
                "relative w-full aspect-square rounded-lg text-xs font-medium transition-all duration-200 flex items-center justify-center",
                isLocked && "opacity-40 cursor-not-allowed bg-bg-input",
                isCompleted && "bg-accent-gold text-white",
                isCurrent && "bg-white text-slate-900 shadow-md ring-2 ring-accent-gold ring-offset-2 ring-offset-bg-card",
                !isLocked && !isCompleted && !isCurrent && "bg-bg-input text-text-secondary hover:bg-bg-hover"
              )}
            >
              {isLocked ? (
                <Lock className="w-3 h-3 text-text-muted" />
              ) : (
                day
              )}
              {isCurrent && (
                <span className="absolute inset-0 rounded-lg pulse-ring bg-accent-gold/30" />
              )}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-accent-gold" />
          <span className="text-xs text-text-secondary">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-white border border-accent-gold shadow-sm" />
          <span className="text-xs text-text-secondary">Current</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-bg-input flex items-center justify-center">
            <Lock className="w-2 h-2 text-text-muted" />
          </div>
          <span className="text-xs text-text-secondary">Locked</span>
        </div>
      </div>
    </div>
  );
}
