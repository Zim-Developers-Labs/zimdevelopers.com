'use client';

import React, { useRef } from 'react';
import { useState } from 'react';
import { ArrowRight, Download, RotateCcw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { getContributorRank } from '../_actions/actions';
import { getCurrentRank, getRankTierColor } from '@/components/ranking/ranks';
import { RankIcon } from '@/components/ranking/rank-icon';
import { Linkify } from '@/lib/utils';
import RanksBenefitsDialog from '@/components/ranking/benefits-dialog';
import { toast } from 'sonner';

interface UserData {
  username: string;
  avatar: string;
  commits: number;
  pullRequests: number;
  issues: number;
  reviews: number;
  impactPoints: number;
  rank: number;
}

export default function RankCheckPageComponents() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);

    const result = await getContributorRank(username);

    if (result.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    if (result.data) {
      if (result.data.impactPoints === 0) {
        setError('User has 0 impact in the community');
        setLoading(false);
        return;
      }
      setUserData(result.data);
    }

    setLoading(false);
  };

  const downloadCard = async () => {
    if (!cardRef.current || !userData) return;

    const { default: html2canvas } = await import('html2canvas');
    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: '#18181b',
      scale: 2,
    });

    const link = document.createElement('a');
    link.download = `${userData.username}-rank-card.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const currentRank = userData ? getCurrentRank(userData.impactPoints) : null;

  return (
    <div className="flex min-h-[calc(100vh-120px)] items-center justify-center bg-zinc-900 p-4">
      <div className="w-full max-w-sm -translate-y-6">
        {!userData ? (
          /* Input Form View */
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div className="bg-white p-6">
              <div className="mb-6 flex items-center gap-2 text-zinc-400">
                <Icons.githubIcon className="h-5 w-5" />
                <span className="font-mono text-sm">community/rank</span>
              </div>

              <h1 className="mb-1 text-xl font-bold text-zinc-900">
                Check Your Rank
              </h1>
              <p className="mb-6 text-sm text-zinc-500">
                Enter your GitHub username below
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex items-center gap-2 rounded-xl bg-zinc-100 px-4 py-3 font-mono">
                  <span className="text-zinc-400">@</span>
                  <Input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="h-auto flex-1 border-none bg-transparent p-0 text-sm text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-0"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="h-12 w-full rounded-xl bg-zinc-900 text-white hover:bg-zinc-800"
                >
                  {loading ? 'Checking...' : 'Check Rank'}
                  {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </div>

            <div className="bg-zinc-800 p-6 font-mono text-sm">
              <div className="py-4 text-center text-zinc-500">
                {error ? (
                  <p className="text-red-400">
                    {'>'} error: {error}
                  </p>
                ) : (
                  <p>{'>'} awaiting_username...</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Card Preview View */
          <div className="space-y-4">
            <p className="mb-2 text-center font-mono text-xs text-zinc-500">
              preview your rank card
            </p>

            {/* Downloadable Card */}
            <div
              ref={cardRef}
              className="overflow-hidden rounded-2xl shadow-2xl"
            >
              {/* Card Header - White */}
              <div className="bg-white p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Icons.githubIcon className="h-4 w-4" />
                    <span className="font-mono text-xs">community/rank</span>
                  </div>
                  <span className="font-mono text-xs text-zinc-400">
                    {new Date().getFullYear()}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={userData.avatar || '/placeholder.svg'}
                    alt={userData.username}
                    className="h-16 w-16 rounded-2xl border-2 border-zinc-100"
                    crossOrigin="anonymous"
                  />
                  <div className="flex-1">
                    <p className="text-lg font-bold text-zinc-900">
                      @{userData.username}
                    </p>
                    <p className="flex items-center gap-1 text-xs font-medium text-green-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      verified contributor
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-black text-zinc-900">
                      #{userData.rank}
                    </p>
                    <p className="font-mono text-xs text-zinc-400">rank</p>
                  </div>
                </div>
                {/* Rank Info Bar */}
                {currentRank && (
                  <div className="mt-4 flex items-center justify-between rounded-md border border-t border-zinc-700 bg-zinc-800 px-5 py-3">
                    <div className="flex items-center gap-2.5">
                      <RankIcon
                        id={Linkify(currentRank.name)}
                        height={32}
                        width={32}
                      />
                      <div>
                        <p
                          className="text-xs font-bold"
                          style={{ color: getRankTierColor(currentRank.name) }}
                        >
                          {currentRank.name}
                        </p>
                        <p className="font-mono text-[9px] text-zinc-500">
                          {currentRank.minPoints.toLocaleString()} -{' '}
                          {currentRank.maxPoints.toLocaleString()} pts
                        </p>
                      </div>
                    </div>
                    <RanksBenefitsDialog impactPoints={userData.impactPoints} />
                  </div>
                )}
              </div>

              {/* Card Stats - Dark */}
              <div className="bg-zinc-800 p-5 font-mono">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-lg font-bold text-cyan-400">
                    {userData.impactPoints.toLocaleString()}
                  </p>
                  <p className="text-xs text-zinc-500">impact_points</p>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  <div className="rounded-lg bg-zinc-900 p-3 text-center">
                    <p className="text-lg font-bold text-white">
                      {userData.commits}
                    </p>
                    <p className="text-[10px] text-zinc-500">commits</p>
                  </div>
                  <div className="rounded-lg bg-zinc-900 p-3 text-center">
                    <p className="text-lg font-bold text-white">
                      {userData.pullRequests}
                    </p>
                    <p className="text-[10px] text-zinc-500">PRs</p>
                  </div>
                  <div className="rounded-lg bg-zinc-900 p-3 text-center">
                    <p className="text-lg font-bold text-white">
                      {userData.issues}
                    </p>
                    <p className="text-[10px] text-zinc-500">issues</p>
                  </div>
                  <div className="rounded-lg bg-zinc-900 p-3 text-center">
                    <p className="text-lg font-bold text-white">
                      {userData.reviews}
                    </p>
                    <p className="text-[10px] text-zinc-500">reviews</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={() => {
                  setUserData(null);
                  setUsername('');
                }}
                variant="outline"
                className="h-12 flex-1 rounded-xl border-zinc-700 bg-transparent text-zinc-400 hover:bg-zinc-800 hover:text-white"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </Button>
              <Button
                onClick={() => {
                  toast.error('Download feature is currently unavailable.');
                }}
                // onClick={downloadCard}
                className="h-12 flex-1 rounded-xl bg-white text-zinc-900 hover:bg-zinc-100"
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
