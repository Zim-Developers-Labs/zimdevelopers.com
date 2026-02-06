'use client';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Download, ChevronDown, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { getCurrentRank, getRankTierColor, ranks } from './ranks';
import { RankIcon } from './rank-icon';
import { Linkify } from '@/lib/utils';

function generateBenefitsText(): string {
  let text = 'ZIM DEVELOPERS LABS - RANKS & BENEFITS\n';
  text += '='.repeat(50) + '\n\n';

  for (const rank of ranks) {
    text += `${rank.name.toUpperCase()}\n`;
    text += `-`.repeat(rank.name.length) + '\n';
    text += `Points: ${rank.minPoints.toLocaleString()} - ${rank.maxPoints.toLocaleString()}\n`;
    text += `Benefit: ${rank.benefit.name}\n`;
    text += `${rank.benefit.description}\n\n`;
  }

  text +=
    '\nNote: Benefits of all previous ranks apply to your current rank.\n';
  return text;
}

function downloadBenefitsFile() {
  const text = generateBenefitsText();
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = 'zim-developers-ranks-and-benefits.txt';
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
}

export default function RanksBenefitsDialog({
  impactPoints,
}: {
  impactPoints: number;
}) {
  const currentRank = getCurrentRank(impactPoints);
  const currentIndex = ranks.findIndex((r) => r.name === currentRank.name);
  const previousBenefits = ranks.slice(0, currentIndex);
  const [expandedTier, setExpandedTier] = useState<string | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-full border border-zinc-700 px-3 py-1 font-mono text-[10px] text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-300"
        >
          <Info className="h-3 w-3" />
          View Benefits
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] w-[340px] overflow-hidden rounded-2xl border-zinc-700 bg-zinc-900 p-0">
        <DialogTitle className="sr-only">
          {currentRank.name} - Rank Benefits
        </DialogTitle>
        <DialogDescription className="sr-only">
          View the benefits associated with your current rank and all previous
          ranks.
        </DialogDescription>

        {/* Header */}
        <div className="border-b border-zinc-800 px-5 pt-5 pb-4">
          <div className="flex items-center gap-3">
            <RankIcon id={Linkify(currentRank.name)} height={54} width={54} />
            <div>
              <p
                className="text-sm font-bold"
                style={{ color: getRankTierColor(currentRank.name) }}
              >
                {currentRank.name}
              </p>
              <p className="font-mono text-[10px] text-zinc-500">
                {currentRank.minPoints.toLocaleString()} -{' '}
                {currentRank.maxPoints.toLocaleString()} pts
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="scrollbar-dark max-h-[55vh] overflow-y-auto px-5 pb-2">
          {/* Current rank benefit */}
          <div className="mb-4">
            <p className="mb-2 font-mono text-[10px] tracking-wider text-zinc-500 uppercase">
              Your Current Benefit
            </p>
            <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-3">
              <p className="mb-1 text-xs font-semibold text-zinc-200">
                {currentRank.benefit.name}
              </p>
              <p className="text-[11px] leading-relaxed text-zinc-400">
                {currentRank.benefit.description}
              </p>
            </div>
          </div>

          {/* Previous ranks benefits */}
          {previousBenefits.length > 0 && (
            <div className="mb-3">
              <div className="mb-2 flex items-center gap-2">
                <p className="font-mono text-[10px] tracking-wider text-zinc-500 uppercase">
                  Previous Rank Benefits
                </p>
                <span className="rounded-full bg-zinc-800 px-1.5 py-0.5 font-mono text-[9px] text-zinc-500">
                  also apply
                </span>
              </div>

              <p className="mb-3 text-[10px] leading-relaxed text-zinc-500">
                All benefits from previous ranks carry over to your current
                rank.
              </p>

              <div className="space-y-1.5">
                {previousBenefits
                  .slice()
                  .reverse()
                  .map((rank) => {
                    const isExpanded = expandedTier === rank.name;
                    return (
                      <button
                        key={rank.name}
                        type="button"
                        onClick={() =>
                          setExpandedTier(isExpanded ? null : rank.name)
                        }
                        className="w-full text-left"
                      >
                        <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-2.5 transition-colors hover:border-zinc-700">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <RankIcon
                                id={Linkify(rank.name)}
                                height={18}
                                width={18}
                              />
                              <span
                                className="text-[11px] font-medium"
                                style={{
                                  color: getRankTierColor(rank.name),
                                }}
                              >
                                {rank.name}
                              </span>
                            </div>
                            <ChevronDown
                              className={`h-3 w-3 text-zinc-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                            />
                          </div>
                          {isExpanded && (
                            <div className="mt-2 border-t border-zinc-700/50 pt-2">
                              <p className="text-[11px] font-medium text-zinc-300">
                                {rank.benefit.name}
                              </p>
                              <p className="mt-1 text-[10px] leading-relaxed text-zinc-500">
                                {rank.benefit.description}
                              </p>
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
              </div>
            </div>
          )}
        </div>

        {/* Footer with download */}
        <div className="border-t border-zinc-800 px-5 py-3">
          <Button
            onClick={downloadBenefitsFile}
            className="h-9 w-full rounded-lg bg-zinc-800 text-xs text-zinc-300 hover:bg-zinc-700"
          >
            <Download className="mr-2 h-3.5 w-3.5" />
            Download Ranks & Benefits
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
