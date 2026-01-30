"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface PassCardProps {
  title: string;
  description: string;
  price: string;
  priceLabel?: string;
  isFree?: boolean;
  isPopular?: boolean;
  onViewPass?: () => void;
}

function WavePattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 120"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
        </linearGradient>
      </defs>
      <path
        d="M0,60 C50,80 100,40 150,60 C200,80 250,40 300,60 C350,80 400,40 400,60 L400,120 L0,120 Z"
        fill="url(#waveGradient)"
        opacity="0.5"
      />
      <path
        d="M0,70 C60,50 120,90 180,70 C240,50 300,90 360,70 C380,60 400,70 400,70 L400,120 L0,120 Z"
        fill="url(#waveGradient)"
        opacity="0.3"
      />
      <path
        d="M0,80 C40,100 80,60 120,80 C160,100 200,60 240,80 C280,100 320,60 360,80 C380,90 400,80 400,80 L400,120 L0,120 Z"
        fill="url(#waveGradient)"
        opacity="0.4"
      />
    </svg>
  );
}

export function PassCard({
  title,
  description,
  price,
  priceLabel = "one time",
  isFree = false,
  isPopular = false,
  onViewPass,
}: PassCardProps) {
  return (
    <div className="relative group">
      <div className="bg-bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-accent-gold/30">
        <div className="relative h-24 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 overflow-hidden">
          <WavePattern />
          <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-white/20" />
          <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white/20" />
          <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-white/10" />
          <div className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-white/10" />

          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white font-semibold text-lg drop-shadow-md">
              {title}
            </h3>
          </div>

          {isPopular && (
            <div className="absolute top-2 right-2 px-2 py-0.5 bg-accent-gold rounded-full text-xs font-medium text-white">
              Popular
            </div>
          )}
        </div>

        <div className="relative">
          <div className="absolute -top-3 left-0 right-0 flex justify-between px-0">
            <div className="w-6 h-6 bg-bg-primary rounded-full -ml-3" />
            <div className="w-6 h-6 bg-bg-primary rounded-full -mr-3" />
          </div>
          <div className="border-t border-dashed border-border mx-4 mt-0" />
        </div>

        <div className="p-4 pt-2">
          <p className="text-xs text-text-muted mb-4 line-clamp-2">
            {description}
          </p>

          <div className="mb-4">
            {isFree ? (
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-text-primary">Free</span>
              </div>
            ) : (
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-text-primary">{price}</span>
                <span className="text-xs text-text-muted">/{priceLabel}</span>
              </div>
            )}
          </div>

          <Button
            variant={isPopular ? "gold" : "outline"}
            className="w-full"
            onClick={onViewPass}
          >
            View Pass
          </Button>
        </div>
      </div>
    </div>
  );
}
