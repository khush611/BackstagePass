"use client";

import { WorkshopBanner } from "@/components/sidebar/WorkshopBanner";
import { DaySelector } from "@/components/sidebar/DaySelector";
import { ExploreSection } from "@/components/sidebar/ExploreSection";

export function Sidebar() {
  return (
    <div className="space-y-6">
      <WorkshopBanner />
      <ExploreSection />
      <DaySelector />
    </div>
  );
}
