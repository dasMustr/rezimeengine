"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function AudienceMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

const current =
  pathname.startsWith("/observer")
    ? { label: "Observer", sub: "Public • Documentary • Worldview" }
    : pathname.startsWith("/operator")
    ? { label: "Operator", sub: "Practitioners • Tools • Rules" }
    : pathname.startsWith("/allocator")
    ? { label: "Allocator", sub: "Institutional • IR • Risk doctrine" }
    : { label: "Audience", sub: "Choose a portal" };

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="text-neutral-200">{current.label}</span>
<span className="text-neutral-400">{open ? "▲" : "▼"}</span>

      </button>

{open && (
  <div
    className="absolute left-0 mt-2 w-[520px] overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-xl backdrop-blur"
    role="menu"
  >
    <div className="grid grid-cols-2 gap-0">
      {/* Left column: portals */}
      <div className="p-2">
        <div className="px-3 pb-2 pt-3">
          <p className="text-[11px] uppercase tracking-widest text-neutral-400">
            Portals
          </p>
        </div>

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
      </div>

      {/* Right column: featured */}
      <div className="border-l border-white/10 p-4">
        <p className="text-[11px] uppercase tracking-widest text-neutral-400">
          Featured
        </p>

        <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm font-semibold text-white">
            Portfolio Lab (Coming Soon)
          </p>
          <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
            A factsheet-style archive: regime context, exposure posture, and
            time-stamped updates. Simulated first, live later.
          </p>

          <div className="mt-3 inline-flex items-center rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-neutral-300">
            Weekly cadence • low-noise
          </div>
        </div>

        <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm font-semibold text-white">
            Case Study Library
          </p>
          <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
            COVID, Luna, BTC cycles, volatility spikes — shown as regime states
            (without exposing the construction).
          </p>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10 px-4 py-3 text-[11px] text-neutral-400">
      Documentary → Technical → Institutional
    </div>
  </div>
)}

    </div>
  );
}

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
