"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface AvatarProps {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "xl";
  className?: string;
  fallback?: string;
  showRing?: boolean;
}

const sizeClasses = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  xl: "w-20 h-20 text-xl",
};

const gradients = [
  "from-amber-400 to-orange-500",
  "from-blue-400 to-indigo-500",
  "from-green-400 to-emerald-500",
  "from-purple-400 to-pink-500",
  "from-rose-400 to-red-500",
];

function getGradient(name: string): string {
  const index = name.charCodeAt(0) % gradients.length;
  return gradients[index];
}

export function Avatar({
  src,
  alt,
  size = "md",
  className,
  fallback,
  showRing = false,
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);
  const initials = fallback || alt.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const gradient = getGradient(alt);

  const showFallback = !src || imageError;

  return (
    <div
      className={cn(
        "relative rounded-full overflow-hidden flex items-center justify-center flex-shrink-0",
        sizeClasses[size],
        showFallback ? `bg-gradient-to-br ${gradient}` : "bg-bg-input",
        showRing && "ring-2 ring-accent-gold ring-offset-2 ring-offset-bg-card",
        className
      )}
    >
      {showFallback ? (
        <span className="text-white font-semibold">{initials}</span>
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
}
