"use client";

import Link from "next/link";
import PortalMenu from "@/app/components/PortalMenu";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-wide text-white">
          REZIME Engine
        </Link>

        <div className="flex items-center gap-3">
          {/* Beginner entry point (always visible) */}
          <Link
            href="/start"
            className="premium-card is-clickable inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs text-white transition hover:bg-white/15"
          >
            Start <span className="opacity-90">🐾</span>
          </Link>

          {/* Portal switcher */}
          <PortalMenu />

          <Link
            href="/faq"
            className="text-sm text-neutral-300 hover:text-white transition"
          >
            FAQ
          </Link>

          <Link
            href="/contact"
            className="text-sm text-neutral-300 hover:text-white transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
