"use client";

import Link from "next/link";
import PortalMenu from "./PortalMenu";
import LangToggle from "../(lang)/_components/LangToggle";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
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