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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3 pb-2 pt-3 text-[11px] uppercase tracking-widest text-neutral-400">
      {children}
    </div>
  );
}

export default function PortalMenu() {
  const pathname = usePathname();

  // Mobile
  const [mobileOpen, setMobileOpen] = useState(false);

  // Desktop
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const current = useMemo(() => {
    if (pathname.startsWith("/observer")) return "Learn";
    if (pathname.startsWith("/operator")) return "Playbook";
    if (pathname.startsWith("/allocator")) return "Portfolio Lab";
    if (pathname.startsWith("/start")) return "Orientation";
    if (pathname.startsWith("/faq")) return "FAQ";
    if (pathname === "/") return "Portals";
    return "Portals";
  }, [pathname]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const MENU = (
    <>
      <SectionLabel>Portals</SectionLabel>

      <MenuItem
        href="/observer"
        label="Learn"
        sub="Regime map • Public overview"
        onPick={() => {
          setOpen(false);
          setMobileOpen(false);
        }}
      />

      <MenuItem
        href="/operator"
        label="Playbook"
        sub="Interpretation rules • How to use REZIME"
        onPick={() => {
          setOpen(false);
          setMobileOpen(false);
        }}
      />

      <MenuItem
        href="/allocator"
        label="Portfolio Lab"
        sub="Proof trail • Posture • Weekly deltas"
        onPick={() => {
          setOpen(false);
          setMobileOpen(false);
        }}
      />

      <div className="my-2 border-t border-white/10" />

      <SectionLabel>New here?</SectionLabel>

      <MenuItem
        href="/start"
        label="Orientation (New to Markets)"
        sub="Beginner basics • No hype • Start safely"
        onPick={() => {
          setOpen(false);
          setMobileOpen(false);
        }}
      />

      <div className="border-t border-white/10 px-4 py-3 text-[11px] text-neutral-400">
        Learn → Playbook → Portfolio Lab
      </div>
    </>
  );

  return (
    <>
      {/* ===================== */}
      {/* MOBILE = SHEET        */}
      {/* ===================== */}
      <div className="sm:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded={mobileOpen}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
            >
              {current}
              <span className="text-neutral-400">▼</span>
            </button>
          </SheetTrigger>

          <SheetContent
            side="bottom"
            className="border-white/10 bg-black text-white"
          >
            <SheetHeader>
              <SheetTitle className="text-left text-sm font-semibold text-white">
                REZIME Portals
              </SheetTitle>
            </SheetHeader>

            <div className="mt-4 max-h-[70vh] overflow-auto pr-1">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-2">
                {MENU}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* ===================== */}
      {/* DESKTOP = DROPDOWN    */}
      {/* ===================== */}
      <div ref={ref} className="relative hidden sm:block">
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
        >
          {current}
          <span className="text-neutral-400">{open ? "▲" : "▼"}</span>
        </button>

        {open && (
          <div
            className="absolute left-0 mt-2 w-[520px] max-w-[92vw] overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-xl backdrop-blur"
            role="menu"
            aria-label="Portals"
          >
            <div className="p-2">{MENU}</div>
          </div>
        )}
      </div>
    </>
  );
}
