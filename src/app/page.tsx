"use client";

import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Sidebar } from "@/components/layout/Sidebar";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { FeedInput } from "@/components/feed/FeedInput";
import { FeedFilters } from "@/components/feed/FeedFilters";
import { FeedPostCard } from "@/components/feed/FeedPostCard";
import { SubscriberCard } from "@/components/feed/SubscriberCard";
import { ChallengeProgress } from "@/components/challenges/ChallengeProgress";
import { TaskCard } from "@/components/challenges/TaskCard";
import { PassesGrid } from "@/components/passes/PassesGrid";
import { Card } from "@/components/ui/Card";
import { profileData, challengesData, feedPosts } from "@/data/mockData";
import { AlertTriangle } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("backstage");
  const joinedChallenges = challengesData.filter((c) => c.isJoined);

  return (
    <MainLayout sidebar={<Sidebar />}>
      <div className="max-w-2xl mx-auto space-y-6">
        <ProfileCard
          name={profileData.name}
          title={profileData.title}
          bio={profileData.bio}
          avatar={profileData.avatar}
          subscribers={profileData.subscribers}
          posts={profileData.posts}
          isVerified={profileData.isVerified}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {activeTab === "backstage" && (
          <>
            <Card padding="md">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-amber-500/10">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-text-primary">
                    Complete today&apos;s task before time runs out
                  </h3>
                </div>
              </div>
              <div className="space-y-2">
                {joinedChallenges.slice(0, 2).map((challenge) => (
                  <TaskCard
                    key={challenge.id}
                    title={challenge.title}
                    timeRemaining="Ends in 5h 30m"
                    isUrgent={challenge.currentDay > 3}
                  />
                ))}
              </div>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {joinedChallenges.map((challenge) => (
                <ChallengeProgress
                  key={challenge.id}
                  title={challenge.title}
                  currentDay={challenge.currentDay}
                  totalDays={challenge.totalDays}
                  participants={challenge.participants}
                  isJoined={challenge.isJoined}
                />
              ))}
            </div>

            <FeedInput />

            <FeedFilters />

            <div className="space-y-4">
              {feedPosts
                .filter((post) => post.type === "welcome")
                .map((post) => (
                  <SubscriberCard
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    timestamp={post.timestamp}
                    likes={post.likes}
                    comments={post.comments}
                  />
                ))}

              {feedPosts
                .filter((post) => post.type === "regular")
                .map((post) => (
                  <FeedPostCard
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    image={post.image}
                    timestamp={post.timestamp}
                    likes={post.likes}
                    comments={post.comments}
                    isPinned={post.isPinned}
                  />
                ))}
            </div>
          </>
        )}

        {activeTab === "passes" && (
          <div className="space-y-4">
            <PassesGrid />
          </div>
        )}
      </div>
    </MainLayout>
  );
}
