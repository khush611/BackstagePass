"use client";

import { Button } from "@/components/ui/Button";
import { Clock, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  title: string;
  timeRemaining?: string;
  isCompleted?: boolean;
  isUrgent?: boolean;
  onComplete?: () => void;
}

export function TaskCard({
  title,
  timeRemaining,
  isCompleted = false,
  isUrgent = false,
  onComplete,
}: TaskCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between p-3 rounded-lg border transition-all duration-200",
        isCompleted
          ? "bg-accent-green/5 border-accent-green/20"
          : isUrgent
          ? "bg-red-500/5 border-red-500/20"
          : "bg-bg-input border-transparent hover:border-border"
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
            isCompleted
              ? "bg-accent-green/20"
              : isUrgent
              ? "bg-red-500/20"
              : "bg-bg-hover"
          )}
        >
          {isCompleted ? (
            <CheckCircle className="w-4 h-4 text-accent-green" />
          ) : isUrgent ? (
            <AlertCircle className="w-4 h-4 text-red-500" />
          ) : (
            <Clock className="w-4 h-4 text-text-muted" />
          )}
        </div>
        <div>
          <p
            className={cn(
              "text-sm font-medium",
              isCompleted ? "text-text-muted line-through" : "text-text-primary"
            )}
          >
            {title}
          </p>
          {timeRemaining && !isCompleted && (
            <span
              className={cn(
                "text-xs",
                isUrgent ? "text-red-500" : "text-text-muted"
              )}
            >
              {timeRemaining}
            </span>
          )}
        </div>
      </div>

      {!isCompleted && (
        <Button
          variant={isUrgent ? "gold" : "secondary"}
          onClick={onComplete}
        >
          Check in for Day 5
        </Button>
      )}
    </div>
  );
}
