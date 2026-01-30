"use client";

import { Users, Brain, Apple } from "lucide-react";
import { cn } from "@/lib/utils";

interface Challenge {
  id: number;
  title: string;
  participants: number;
  icon: "meditation" | "apple";
  isLocked?: boolean;
}

const challenges: Challenge[] = [
  { id: 1, title: "14-Day Mindfulness Challenge", participants: 89, icon: "meditation" },
  { id: 2, title: "30-Day Healthy Eating Challenge", participants: 234, icon: "apple" },
];

const iconMap = {
  meditation: Brain,
  apple: Apple,
};

export function ExploreSection() {
  return (
    <div className="bg-bg-card rounded-xl border border-border p-4">
      <h3 className="font-semibold text-text-primary text-sm mb-4">
        Explore New Challenges
      </h3>

      <div className="space-y-3">
        {challenges.map((challenge) => {
          const Icon = iconMap[challenge.icon];
          return (
            <ChallengeItem key={challenge.id} challenge={challenge} Icon={Icon} />
          );
        })}
      </div>
    </div>
  );
}

function ChallengeItem({
  challenge,
  Icon,
}: {
  challenge: Challenge;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg bg-bg-input hover:bg-bg-hover transition-colors cursor-pointer group",
        challenge.isLocked && "blur-locked"
      )}
    >
      <div className="w-10 h-10 rounded-lg bg-accent-gold/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-accent-gold" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-text-primary truncate group-hover:text-accent-gold transition-colors">
          {challenge.title}
        </h4>
        <div className="flex items-center gap-1 mt-1">
          <Users className="w-3 h-3 text-text-muted" />
          <span className="text-xs text-text-muted">
            {challenge.participants} participants
          </span>
        </div>
      </div>
    </div>
  );
}
