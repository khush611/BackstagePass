"use client";

import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Tabs } from "@/components/ui/Tabs";
import { formatNumber } from "@/lib/utils";
import { CheckCircle, Ticket, LayoutGrid } from "lucide-react";

interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  subscribers: number;
  posts: number;
  isVerified?: boolean;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export function ProfileCard({
  name,
  title,
  bio,
  avatar,
  subscribers,
  posts,
  isVerified = false,
  activeTab = "backstage",
  onTabChange,
}: ProfileCardProps) {
  const tabs = [
    { id: "backstage", label: "Backstage", icon: <LayoutGrid className="w-4 h-4" /> },
    { id: "passes", label: "Passes", icon: <Ticket className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-bg-card rounded-2xl border border-border overflow-hidden">
      <div className="h-24 bg-gradient-to-r from-accent-gold/20 via-accent-blue/10 to-accent-purple/20" />

      <div className="px-4 pb-4 sm:px-6 sm:pb-6 -mt-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4">
            <Avatar
              src={avatar}
              alt={name}
              size="xl"
              showRing
              className="ring-4 ring-bg-card"
            />
            <div className="sm:pb-1">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-text-primary">{name}</h1>
                {isVerified && (
                  <CheckCircle className="w-5 h-5 text-accent-blue fill-accent-blue stroke-white" />
                )}
              </div>
              <p className="text-sm text-text-secondary">{title}</p>
              <p className="text-sm text-text-muted mt-1">{bio}</p>
            </div>
          </div>

          <Button variant="outline" className="self-start sm:self-auto">
            Share Profile
          </Button>
        </div>

        <div className="flex items-center gap-6 mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-text-primary">
              {formatNumber(subscribers)}
            </span>
            <span className="text-sm text-text-secondary">Subscribers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-text-primary">
              {formatNumber(posts)}
            </span>
            <span className="text-sm text-text-secondary">Posts</span>
          </div>
        </div>

        <div className="mt-4">
          <Tabs tabs={tabs} value={activeTab} onChange={onTabChange} />
        </div>
      </div>
    </div>
  );
}
