'use client';

import heroBg from '@/assets/hero.webp';
import Container from '@/components/container';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { whatsappGroupLink } from '@/lib/constants';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function HomePageHero() {
  const handleButtonClick = () => {
    window.open(whatsappGroupLink, '_blank');
  };

  return (
    <section>
      <Container className="pt-4 pb-8 sm:py-12">
        <div
          className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-4 rounded-xl bg-[#daeefd] bg-cover bg-center px-4 py-16 text-center text-white sm:gap-0"
          style={{ backgroundImage: `url(${heroBg.src})` }}
        >
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <Icons.xfinityProsXLogo className="size-7" />
              <div className="flex flex-col items-start text-xs">
                <div>
                  XFINITY PROS INC.{' '}
                  <span className="text-zinc-300">
                    {'//'} {new Date().getFullYear()}
                  </span>
                </div>
                <div>BETTER ZIMBABWE PROGRAM</div>
              </div>
            </div>
          </div>
          <h1 className="mb-6 max-w-lg text-4xl font-semibold">
            Visionary Developer Community in Zimbabwe
          </h1>
          <p className="mb-4 max-w-md sm:mb-10">
            It's time to stop complaining about bad software and make it
            ourselves. Join the movement today.
          </p>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleButtonClick}
              className="cursor-pointer rounded-full bg-white text-zinc-900 hover:bg-zinc-200"
            >
              Join Community
            </Button>
            <Button asChild variant="link">
              <Link
                href="/projects"
                className="text-white underline hover:text-zinc-200"
              >
                Projects
                <ExternalLink className="inline size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
