"use client";

import Link from "next/link";
import PortalMenu from "./PortalMenu";
import LangToggle from "../(lang)/_components/LangToggle";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 relative border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/5 to-transparent">
        {/* Brand */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.18em] text-neutral-100"
        >
          REZIME
        </Link>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <LangToggle />
          <PortalMenu />
        </div>
      </div>
    </header>
  );
}