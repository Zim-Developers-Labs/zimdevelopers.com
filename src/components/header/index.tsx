import Link from 'next/link';
import Container from '../container';
import { Icons } from '../icons';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { whatsappGroupLink } from '@/lib/constants';
import React from 'react';
import { StarsCount } from './star-counter';
import { Skeleton } from '../ui/skeleton';

export default function Header() {
  return (
    <header>
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="block">
            <Icons.zimDevLabsIcon className="h-10 w-10 text-zinc-900" />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                Quick Links
                <ChevronDown className="inline size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/projects">Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/templates">Templates</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/hall-of-fame">Hall of Fame</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blog">Community Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/rank-check">Check Your Rank</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/change-log">Change Log</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="hidden text-xl font-light tracking-widest sm:block">
          Zim Developers Labs
        </div>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link
              href={whatsappGroupLink}
              target="_blank"
              rel="nofollow"
              className="block cursor-pointer hover:bg-zinc-700"
            >
              <Icons.whatsappSquareIcon className="size-5 text-[#25d366]" />
              <span>
                Join<span className="hidden sm:inline"> Group</span>
              </span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex items-center">
            <Link target="_blank" href="https://github.com/Zim-Developers-Labs">
              <Icons.githubIcon className="size-6" />
              <span className="text-xs">
                <React.Suspense
                  fallback={<Skeleton className="h-4 w-[42px]" />}
                >
                  <StarsCount />
                </React.Suspense>
              </span>
            </Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
