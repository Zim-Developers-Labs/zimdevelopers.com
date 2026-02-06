'use client';

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
import { ChevronDown, Divide } from 'lucide-react';
import { useGitHubStars } from '@/hooks/github-stars';

export default function Header() {
  const groupLink = 'https://chat.whatsapp.com/FfXS39iLv7k36jrskKjOfX';

  const handleButtonClick = () => {
    window.open(groupLink, '_blank');
  };

  const stars = useGitHubStars('Zim-Developers-Labs/theword.fyi');

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
          <Button
            onClick={handleButtonClick}
            className="cursor-pointer hover:bg-zinc-700"
          >
            <Icons.whatsappSquareIcon className="size-5 text-[#25d366]" />
            <span>
              Join<span className="hidden sm:inline"> Group</span>
            </span>
          </Button>
          <Button asChild variant="outline" className="flex items-center">
            <Link target="_blank" href="https://github.com/Zim-Developers-Labs">
              <Icons.githubIcon className="size-6" />
              <span className="text-xs">{stars}</span>
            </Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
