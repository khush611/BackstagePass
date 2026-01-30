"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Users, Calendar, CheckCircle, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChallengeProgressProps {
  title: string;
  currentDay: number;
  totalDays: number;
  participants: number;
  isJoined?: boolean;
  isLocked?: boolean;
  onCheckIn?: () => void;
}

export function ChallengeProgress({
  title,
  currentDay,
  totalDays,
  participants,
  isJoined = false,
  isLocked = false,
  onCheckIn,
}: ChallengeProgressProps) {
  const progress = (currentDay / totalDays) * 100;
  const isCompleted = currentDay >= totalDays;

  return (
    <Card
      padding="md"
      className={cn(
        "relative overflow-hidden",
        isLocked && "blur-locked"
      )}
    >
      {isLocked && (
        <div className="absolute inset-0 bg-bg-card/80 backdrop-blur-sm flex items-center justify-center z-10">
          <div className="text-center">
            <Lock className="w-8 h-8 text-text-muted mx-auto mb-2" />
            <span className="text-sm text-text-muted">Locked</span>
          </div>
        </div>
      )}

      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-sm text-text-primary mb-1">
            {title}
          </h3>
          <div className="flex items-center gap-3 text-xs text-text-muted">
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {participants}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {totalDays} days
            </span>
          </div>
        </div>
        {isJoined && !isCompleted && (
          <Badge variant="gold">
            Day {currentDay}
          </Badge>
        )}
        {isCompleted && (
          <Badge variant="green">
            <CheckCircle className="w-3 h-3 mr-1" />
            Done
          </Badge>
        )}
      </div>

      {isJoined && (
        <div className="mb-3">
          <div className="h-2 bg-bg-input rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent-gold to-amber-400 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-1.5">
            <span className="text-xs text-text-muted">Progress</span>
            <span className="text-xs font-medium text-text-secondary">
              {currentDay}/{totalDays} days
            </span>
          </div>
        </div>
      )}

      {isJoined && !isCompleted && (
        <Button
          variant="gold"
          className="w-full"
          onClick={onCheckIn}
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          Check in for Day {currentDay + 1}
        </Button>
      )}
      {!isJoined && (
        <Button variant="outline" className="w-full">
          Join Challenge
        </Button>
      )}
    </Card>
  );
}
