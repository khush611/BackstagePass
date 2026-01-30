"use client";

import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Clock, Video } from "lucide-react";

export function WorkshopBanner() {
  return (
    <div className="rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-amber-500 to-amber-400 p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-amber-900 uppercase tracking-wide">
            Upcoming Workshop
          </span>
          <Badge variant="default" className="bg-white/20 text-white text-xs">
            <Video className="w-3 h-3 mr-1" />
            Live
          </Badge>
        </div>
        <h3 className="font-semibold text-white text-sm leading-tight">
          AMA: Growth, Sales & Mindset
        </h3>
      </div>

      <div className="bg-bg-card border border-t-0 border-border rounded-b-xl p-4">
        <div className="flex items-center gap-3 text-sm text-text-secondary mb-3">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>10:00 - 11:00 AM</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Avatar
            alt="Russell Brunson"
            size="sm"
            fallback="RB"
          />
          <span className="text-sm text-text-primary font-medium">
            Russell Brunson
          </span>
        </div>
      </div>
    </div>
  );
}
