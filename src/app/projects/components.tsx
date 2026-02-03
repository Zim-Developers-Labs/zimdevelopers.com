'use client';

import { cn } from '@/lib/utils';
import { projects } from './projects';
import Container from '@/components/container';
import Link from 'next/link';
import { ExternalLinkIcon, LockIcon } from 'lucide-react';
import { RankIcon } from '@/components/ranking/rank-icon';
import RanksDialog from '@/components/ranking/ranks-dialog';
import { Icons } from '@/components/icons';

export default function ProjectsPageComponents() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="screen-line-after h-6 border-y border-zinc-200 before:absolute before:-z-1 before:h-6 before:w-screen before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]" />
      <Container className="py-6">
        <h1 className="mb-4 text-4xl font-semibold">Projects</h1>

        <p className="">
          Grateful for the projects that help us grow and gain high-value
          skills.
        </p>
      </Container>
      <div className="screen-line-after h-6 border-y border-zinc-200 before:absolute before:-z-1 before:h-6 before:w-screen before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px]" />
      <Container>
        <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((item) => (
            <div
              key={item.name}
              className={cn(
                'hover:bg-accent2 flex min-h-20 flex-col items-center justify-center gap-4',
                'max-sm:screen-line-before max-sm:screen-line-after rounded-lg border border-zinc-200 p-4',
                'sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after',
              )}
              // href={item.homepage}
            >
              <div className="flex flex-col items-start">
                <div className="mb-4 flex items-start gap-4">
                  <item.logo className="h-12 w-auto rounded-md border" />
                  <div className="flex flex-col text-zinc-900">
                    <Link
                      href={item.homepage}
                      target="_blank"
                      className="flex items-center gap-1 hover:underline"
                    >
                      {item.domain} <ExternalLinkIcon className="size-3" />
                    </Link>
                    <div className="text-muted-foreground text-sm">
                      {item.description}
                    </div>
                  </div>
                </div>
                <div className="flex w-[300px] items-center justify-between">
                  {item.accessType === 'Private Access' ? (
                    <div className="flex w-full justify-center rounded-sm border bg-zinc-50 py-1 text-center text-sm">
                      <div className="flex w-fit items-center gap-1 text-zinc-400">
                        <LockIcon className="size-3" />
                        {item.accessType}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.githubRepo}
                      className="flex w-full justify-center rounded-sm border bg-zinc-50 py-1 text-center text-sm hover:bg-zinc-200"
                    >
                      <div className="flex w-fit items-center gap-1">
                        <Icons.githubIcon className="size-3" />
                        {item.accessType}
                      </div>
                    </Link>
                  )}
                  <RanksDialog>
                    <div className="w-fit cursor-pointer pl-2">
                      <RankIcon id={item.minimumRank} className="h-6 w-fit" />
                    </div>
                  </RanksDialog>
                </div>
              </div>
            </div>
          ))}

          {Array.from({ length: Math.max(0, 8 - projects.length) }).map(
            (_, i) => (
              <PlaceholderLogo key={`placeholder-${i}`} />
            ),
          )}
        </div>
      </Container>
    </div>
  );
}

function PlaceholderLogo() {
  return (
    <div
      className={cn(
        'relative flex min-h-20 items-center justify-center',
        'bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)]',
        'bg-[length:10px_10px]',
        'rounded-lg border border-zinc-200',
        'max-sm:screen-line-before max-sm:screen-line-after',
        'sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after',
      )}
      aria-hidden
    >
      <span className="rounded-md border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-400">
        empty slot
      </span>
    </div>
  );
}
