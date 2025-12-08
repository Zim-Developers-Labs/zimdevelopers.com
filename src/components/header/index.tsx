"use client";

import Link from "next/link";
import Container from "../container";
import { Icons } from "../icons";
import { Button } from "../ui/button";

export default function Header() {
  const groupLink = "https://chat.whatsapp.com/FfXS39iLv7k36jrskKjOfX";

  const handleButtonClick = () => {
    window.open(groupLink, "_blank");
  };

  return (
    <header>
      <Container className="flex justify-between items-center py-4">
        <Link href="/" className="block">
          <Icons.zimDevLabsIcon className="h-10 w-10 text-zinc-900" />
        </Link>
        <div className="font-light text-xl tracking-widest hidden sm:block">
          Zim Developers Labs
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={handleButtonClick}
            className="hover:bg-zinc-700 cursor-pointer"
          >
            <Icons.whatsappSquareIcon className="size-5 text-[#25d366]" />
            Join Group
          </Button>
        </div>
      </Container>
    </header>
  );
}
