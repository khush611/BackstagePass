"use client";

import { Avatar } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";
import { formatTimeAgo } from "@/lib/utils";
import { Heart, MessageCircle, Share2, MoreHorizontal, CheckCircle, Pin, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface FeedPostCardProps {
  author: {
    name: string;
    avatar?: string;
    isVerified?: boolean;
  };
  content: string;
  image?: string;
  timestamp: Date;
  likes: number;
  comments: number;
  isPinned?: boolean;
}

export function FeedPostCard({
  author,
  content,
  image,
  timestamp,
  likes,
  comments,
  isPinned = false,
}: FeedPostCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [imageError, setImageError] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <Card padding="none" className="overflow-hidden">
      {isPinned && (
        <div className="px-4 py-2 bg-accent-gold/10 border-b border-border flex items-center gap-2">
          <Pin className="w-3 h-3 text-accent-gold" />
          <span className="text-xs font-medium text-accent-gold">Pinned Post</span>
        </div>
      )}

      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
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
          <button className="p-1.5 rounded-lg hover:bg-bg-hover transition-colors text-text-muted hover:text-text-secondary">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-3">
          <p className="text-sm text-text-primary whitespace-pre-line leading-relaxed">
            {content}
          </p>
        </div>

        {image && (
          <div className="relative aspect-video rounded-lg overflow-hidden mb-3 bg-gradient-to-br from-bg-input to-bg-hover flex items-center justify-center">
            {imageError ? (
              <div className="flex flex-col items-center gap-2 text-text-muted">
                <ImageIcon className="w-8 h-8" />
                <span className="text-xs">Image</span>
              </div>
            ) : (
              <img
                src={image}
                alt="Post image"
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            )}
          </div>
        )}

        <div className="flex items-center gap-1 pt-3 border-t border-border">
          <button
            onClick={handleLike}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200",
              isLiked
                ? "text-red-500 bg-red-500/10"
                : "text-text-secondary hover:bg-bg-hover hover:text-text-primary"
            )}
          >
            <Heart
              className={cn("w-5 h-5", isLiked && "fill-current")}
            />
            <span className="text-sm font-medium">{likeCount}</span>
          </button>

          <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-hover hover:text-text-primary transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">{comments}</span>
          </button>

          <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-text-secondary hover:bg-bg-hover hover:text-text-primary transition-colors ml-auto">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Card>
  );
}
