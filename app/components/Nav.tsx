"use client";

import Link from "next/link";
import { useState } from "react";
import PortalMenu from "./PortalMenu";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          REZIME Engine
        </Link>

        <div className="flex items-center gap-4">
          <PortalMenu />

          <Link href="/faq" className="text-sm text-neutral-300 hover:text-white">
            FAQ
          </Link>

          <Link href="/contact" className="text-sm text-neutral-300 hover:text-white">
            Contact
          </Link>

          {/* MODE SWITCH */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="text-sm text-neutral-300 hover:text-white border border-white/10 rounded-full px-3 py-1 bg-white/5"
            >
              Mode ▾
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl border border-white/10 bg-black/90 backdrop-blur shadow-lg">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5"
                >
                  Active Participant
                </Link>
                <Link
                  href="/start"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5"
                >
                  Curious Cat 🐾
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5"
                >
                  Pricing
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
