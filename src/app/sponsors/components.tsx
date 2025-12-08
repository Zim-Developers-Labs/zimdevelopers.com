"use client";

import { cn } from "@/lib/utils";
import { sponsors } from "./sponsors";
import { Button } from "@/components/ui/button";
import Container from "@/components/container";

export default function SponsorsPageComponents() {
  const handleButtonClick = () => {
    const whatsappMessageText = encodeURIComponent(
      `Good day, we are interested in sponsoring the Zim Developers Community. Please provide more information.`
    );
    const whatsappLink = `https://wa.me/+263717238876?text=${whatsappMessageText}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="relative overflow-x-hidden">
      <div
        className="h-6 screen-line-after before:absolute
before:-z-1
before:h-6
border-y border-zinc-200
before:w-screen
before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)]
before:bg-size-[10px_10px]"
      />
      <Container className="py-6">
        <h1 className="text-4xl mb-4 font-semibold">Sponsors</h1>

        <p className="">
          Grateful for the support that helps us grow and maintain high-quality
          projects.
        </p>
      </Container>
      <div
        className="h-6 screen-line-after before:absolute
before:-z-1
before:h-6
border-y border-zinc-200
before:w-screen
before:bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)]
before:bg-size-[10px_10px]"
      />
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-8">
          {sponsors.map((item) => (
            <a
              key={item.name}
              className={cn(
                "flex min-h-20 items-center justify-center gap-4 hover:bg-accent2",
                "max-sm:screen-line-before max-sm:screen-line-after border border-zinc-200 rounded-lg p-4",
                "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
              )}
              href={item.homepage}
              target="_blank"
              rel="noreferrer noopener sponsored"
            >
              <item.logo className="h-8 w-auto" />
            </a>
          ))}

          {Array.from({ length: Math.max(0, 6 - sponsors.length) }).map(
            (_, i) => (
              <PlaceholderLogo key={`placeholder-${i}`} />
            )
          )}
        </div>

        <div className="flex justify-center p-2">
          <Button onClick={handleButtonClick} className="cursor-pointer">
            Become a Sponsor
          </Button>
        </div>
      </Container>
    </div>
  );
}

function PlaceholderLogo() {
  return (
    <div
      className={cn(
        "flex min-h-20 items-center justify-center relative",
        "bg-[repeating-linear-gradient(315deg,var(--color-zinc-300)_0,var(--color-zinc-300)_1px,transparent_0,transparent_50%)]",
        "bg-[length:10px_10px]",
        "border border-zinc-200 rounded-lg",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
      aria-hidden
    >
      <span className="bg-white px-3 py-1 text-sm text-zinc-400 rounded-md border border-zinc-200">
        empty slot
      </span>
    </div>
  );
}
