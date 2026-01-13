"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

function MenuItem({
  href,
  label,
  sub,
  onPick,
}: {
  href: string;
  label: string;
  sub: string;
  onPick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onPick}
      className="block px-4 py-3 hover:bg-white/5 transition"
      role="menuitem"
    >
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-white">{label}</div>
        <div className="text-neutral-400">→</div>
      </div>
      <div className="mt-1 text-xs text-neutral-400">{sub}</div>
    </Link>
  );
}

function AudienceMenu() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Detect what page we're on
  const current =
    pathname.startsWith("/observer")
      ? "Observer"
      : pathname.startsWith("/operator")
      ? "Operator"
      : pathname.startsWith("/allocator")
      ? "Allocator"
      : "Portals";

  // Close on outside click + Escape key
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {current}
        <span className="text-neutral-400">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div
          className="absolute left-0 mt-2 w-72 overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-xl backdrop-blur"
          role="menu"
        >
          <MenuItem
            href="/observer"
            label="Observer"
            sub="Public • Documentary • Worldview"
            onPick={() => setOpen(false)}
          />
          <MenuItem
            href="/operator"
            label="Operator"
            sub="Practitioners • Tools • Rules"
            onPick={() => setOpen(false)}
          />
          <MenuItem
            href="/allocator"
            label="Allocator"
            sub="Institutional • IR • Risk doctrine"
            onPick={() => setOpen(false)}
          />

          <div className="border-t border-white/10 px-4 py-3 text-[11px] text-neutral-400">
            Documentary → Technical → Institutional
          </div>
        </div>
      )}
    </div>
  );
}

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          REZIME
        </Link>

        <div className="flex items-center gap-6">
          <AudienceMenu />

          <nav className="hidden items-center gap-6 text-sm text-neutral-300 sm:flex">
  <Link href="/contact" className="hover:text-white">
    Contact
  </Link>
</nav>

        </div>
      </div>
    </header>
  );
}
