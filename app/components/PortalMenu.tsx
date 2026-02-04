"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function MenuItem({ href, label, sub, onPick }: any) {
  return (
    <Link
      href={href}
      onClick={onPick}
      className="block rounded-xl px-4 py-3 hover:bg-white/5 transition"
    >
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-white">{label}</div>
        <div className="text-neutral-400">→</div>
      </div>
      <div className="mt-1 text-xs text-neutral-400">{sub}</div>
    </Link>
  );
}

function SectionLabel({ children }: any) {
  return (
    <div className="px-3 pb-2 pt-3 text-[11px] uppercase tracking-widest text-neutral-400">
      {children}
    </div>
  );
}

export default function PortalMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const current = useMemo(() => {
    if (pathname === "/") return "Home";
    if (pathname.startsWith("/start")) return "Start";
    if (pathname.startsWith("/observer")) return "Learn";
    if (pathname.startsWith("/operator")) return "Playbook";
    if (pathname.startsWith("/allocator")) return "Proof";
    if (pathname.startsWith("/faq")) return "FAQ";
    return "Explore";
  }, [pathname]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
      >
        {current} <span className="text-neutral-400">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-[480px] max-w-[92vw] rounded-2xl border border-white/10 bg-black/90 shadow-xl backdrop-blur">
          <SectionLabel>Start</SectionLabel>
          <MenuItem href="/" label="Home" sub="Survival-first framework" onPick={() => setOpen(false)} />
          <MenuItem href="/start" label="Start" sub="Beginner basics • No hype" onPick={() => setOpen(false)} />

          <div className="my-2 border-t border-white/10" />

          <SectionLabel>Portals</SectionLabel>
          <MenuItem href="/observer" label="Learn" sub="Market regime map" onPick={() => setOpen(false)} />
          <MenuItem href="/operator" label="Playbook" sub="How to interpret REZIME" onPick={() => setOpen(false)} />
          <MenuItem href="/allocator" label="Proof" sub="Portfolio Lab • Process trail" onPick={() => setOpen(false)} />

          <div className="border-t border-white/10 px-4 py-3 text-[11px] text-neutral-400">
            Learn → Playbook → Proof
          </div>
        </div>
      )}
    </div>
  );
}
