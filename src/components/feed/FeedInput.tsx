"use client";

import { Avatar } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";
import { Image as ImageIcon, Video, Smile, Send } from "lucide-react";
import { useState } from "react";

export function FeedInput() {
  const [content, setContent] = useState("");

  return (
    <Card padding="md">
      <div className="flex items-start gap-3">
        <Avatar alt="You" size="md" fallback="Y" />
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full bg-transparent text-sm text-text-primary placeholder:text-text-muted resize-none outline-none min-h-[60px]"
            rows={2}
          />
          <div className="flex items-center justify-between pt-3 border-t border-border mt-3">
            <div className="flex items-center gap-1">
              <button className="p-2 rounded-lg text-text-muted hover:text-accent-gold hover:bg-accent-gold/10 transition-colors">
                <ImageIcon className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg text-text-muted hover:text-accent-blue hover:bg-accent-blue/10 transition-colors">
                <Video className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg text-text-muted hover:text-accent-purple hover:bg-accent-purple/10 transition-colors">
                <Smile className="w-5 h-5" />
              </button>
            </div>
            <button
              disabled={!content.trim()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-gold text-white font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              Post
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
