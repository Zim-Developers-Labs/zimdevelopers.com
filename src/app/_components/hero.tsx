"use client";

import heroBg from "@/assets/hero.webp";
import Container from "@/components/container";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function HomePageHero() {
  const groupLink = "https://chat.whatsapp.com/FfXS39iLv7k36jrskKjOfX";

  const handleButtonClick = () => {
    window.open(groupLink, "_blank");
  };

  return (
    <section>
      <Container className="pt-4 pb-8 sm:py-12">
        <div
          className="bg-[#daeefd] bg-center bg-cover flex flex-col items-center justify-center w-full min-h-[50vh] py-16 gap-4 sm:gap-0 px-4 text-white text-center rounded-xl "
          style={{ backgroundImage: `url(${heroBg.src})` }}
        >
          <div className="mb-6">
            <div className="flex items-center  gap-2">
              <Icons.xfinityProsXLogo className="size-7" />
              <div className="flex flex-col items-start text-xs">
                <div>
                  XFINITY PROS INC.{" "}
                  <span className="text-zinc-300">{"//"} 2025</span>
                </div>
                <div>BETTER ZIMBABWE PROGRAM</div>
              </div>
            </div>
          </div>
          <h1 className="font-semibold max-w-lg mb-6 text-4xl">
            Visionary Developer Community in Zimbabwe
          </h1>
          <p className=" max-w-md mb-4 sm:mb-10">
            It's time to stop complaining about bad software and make it
            ourselves. Join or sponsor the movement today.
          </p>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleButtonClick}
              className="bg-white text-zinc-900 rounded-full hover:bg-zinc-200 cursor-pointer"
            >
              Join Community
            </Button>
            <Button asChild variant="link">
              <Link
                href="/sponsors"
                className="text-white underline hover:text-zinc-200"
              >
                Sponsor
                <ExternalLink className="inline size-4 " />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
