"use client";

import Link from "next/link";
import AudienceMenu from "./AudienceMenu";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          REZIME
        </Link>

        <div className="flex items-center gap-4">
          <AudienceMenu />
          <Link href="/contact" className="text-sm text-neutral-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
