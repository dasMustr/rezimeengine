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

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Public navigation */}
          <nav className="hidden items-center gap-4 sm:flex">
            <Link
              href="/faq"
              className="text-sm text-neutral-300 hover:text-neutral-100 transition"
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className="text-sm text-neutral-300 hover:text-neutral-100 transition"
            >
              Contact
            </Link>
          </nav>

          {/* Language toggle + Portal */}
          <div className="flex items-center gap-2">
            <LangToggle />
            <PortalMenu />
          </div>
        </div>
      </div>
    </header>
  );
}