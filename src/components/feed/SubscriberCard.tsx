"use client";

import { Avatar } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";
import { formatTimeAgo } from "@/lib/utils";
import { Heart, MessageCircle, CheckCircle, Sparkles, PartyPopper } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SubscriberCardProps {
  author: {
    name: string;
    avatar?: string;
    isVerified?: boolean;
  };
  content: string;
  timestamp: Date;
  likes: number;
  comments: number;
}

function ConfettiDecoration() {
  const pieces = [
    { x: 5, y: 15, color: "#fff", size: 6, rotation: 45 },
    { x: 12, y: 35, color: "#fef3c7", size: 8, rotation: 20 },
    { x: 20, y: 10, color: "#fff", size: 5, rotation: 60 },
    { x: 28, y: 45, color: "#fef3c7", size: 7, rotation: 15 },
    { x: 35, y: 20, color: "#fff", size: 6, rotation: 75 },
    { x: 42, y: 8, color: "#fef3c7", size: 5, rotation: 30 },
    { x: 50, y: 40, color: "#fff", size: 8, rotation: 50 },
    { x: 58, y: 15, color: "#fef3c7", size: 6, rotation: 10 },
    { x: 65, y: 35, color: "#fff", size: 7, rotation: 65 },
    { x: 72, y: 12, color: "#fef3c7", size: 5, rotation: 40 },
    { x: 80, y: 42, color: "#fff", size: 6, rotation: 25 },
    { x: 88, y: 18, color: "#fef3c7", size: 8, rotation: 55 },
    { x: 95, y: 30, color: "#fff", size: 5, rotation: 80 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pieces.map((piece, i) => (
        <div
          key={i}
          className="absolute float-animation"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            animationDelay: `${i * 0.15}s`,
          }}
        >
          <div
            className="rounded-sm"
            style={{
              width: piece.size,
              height: piece.size,
              backgroundColor: piece.color,
              opacity: 0.8,
              transform: `rotate(${piece.rotation}deg)`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

export function SubscriberCard({
  author,
  content,
  timestamp,
  likes,
  comments,
}: SubscriberCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <Card padding="none" className="overflow-hidden relative">
      <div className="relative h-14 bg-gradient-to-r from-amber-500 via-orange-400 to-amber-400 overflow-hidden">
        <ConfettiDecoration />
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          <PartyPopper className="w-4 h-4 text-white/90" />
          <span className="text-white font-semibold text-sm drop-shadow-sm">
            Welcome to Our Community!
          </span>
          <Sparkles className="w-4 h-4 text-white/90" />
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Avatar src={author.avatar} alt={author.name} size="md" fallback={author.name} />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-sm text-text-primary">
                {author.name}
              </span>
              {author.isVerified && (
                <CheckCircle className="w-4 h-4 text-accent-blue fill-accent-blue stroke-white" />
              )}
            </div>
            <span className="text-xs text-text-muted">
              {formatTimeAgo(timestamp)}
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-accent-gold/5 to-accent-blue/5 rounded-lg p-4 border border-accent-gold/20">
          <p className="text-sm text-text-primary whitespace-pre-line leading-relaxed">
            {content}
          </p>
        </div>

        <div className="flex items-center gap-1 mt-4 pt-3 border-t border-border">
          <button
            onClick={handleLike}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200",
              isLiked
                ? "text-red-500 bg-red-500/10"
                : "text-text-secondary hover:bg-bg-hover hover:text-text-primary"
            )}
          >
            <Heart className={cn("w-5 h-5", isLiked && "fill-current")} />
            <span className="text-sm font-medium">{likeCount}</span>
          </button>

          <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-hover hover:text-text-primary transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">{comments}</span>
          </button>
        </div>
      </div>
    </Card>
  );
}
