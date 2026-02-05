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

  // What label should the button show?
  // Desktop: keep it stable as "Portal" so it feels like a "deeper" doorway.
  // Mobile: show context ("Start Here", "Learn", etc.)
  const currentMobile = useMemo(() => {
    if (pathname.startsWith("/orientation")) return "Start Here";
    if (pathname.startsWith("/observer")) return "Learn";
    if (pathname.startsWith("/operator")) return "Playbook";
    if (pathname.startsWith("/allocator")) return "Proof";
    if (pathname.startsWith("/pricing")) return "Access";
    if (pathname.startsWith("/faq")) return "FAQ";
    if (pathname.startsWith("/contact")) return "Contact";
    if (pathname === "/") return "Navigate";
    return "Navigate";
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

  const onPick = () => {
    setOpen(false);
    setMobileOpen(false);
  };

  // Mobile: one place to navigate everything
  const MOBILE_MENU = (
    <>
      <SectionLabel>Start</SectionLabel>
      <MenuItem
        href="/orientation"
        label="Start Here"
        sub="No jargon • Survival-first • Calm entry"
        onPick={onPick}
      />

      <div className="my-2 border-t border-white/10" />

      <SectionLabel>Core</SectionLabel>
      <MenuItem
        href="/observer"
        label="Learn"
        sub="Regime map • What each state means"
        onPick={onPick}
      />
      <MenuItem
        href="/operator"
        label="Playbook"
        sub="How to read it • Rules • Discipline"
        onPick={onPick}
      />
      <MenuItem
        href="/allocator"
        label="Proof"
        sub="Portfolio Lab • Weekly snapshots • Posture"
        onPick={onPick}
      />

      <div className="my-2 border-t border-white/10" />

      <SectionLabel>Support</SectionLabel>
      <MenuItem
        href="/faq"
        label="FAQ"
        sub="Clear answers • No hype"
        onPick={onPick}
      />
      <MenuItem
        href="/contact"
        label="Contact"
        sub="Questions • Partnerships • Notes"
        onPick={onPick}
      />

      <div className="my-2 border-t border-white/10" />

      <SectionLabel>Access</SectionLabel>
      <MenuItem
        href="/pricing"
        label="Access"
        sub="Waitlist • Tiers • Coming soon"
        onPick={onPick}
      />

      <div className="border-t border-white/10 px-4 py-3 text-[11px] text-neutral-400">
        Start Here → Learn → Playbook → Proof
      </div>
    </>
  );

  // Desktop: portal-only, so the top nav stays calm and “public”
  const DESKTOP_MENU = (
    <>
      <SectionLabel>Portal</SectionLabel>

      <MenuItem
        href="/observer"
        label="Learn"
        sub="Regime map • Public overview • Safe behavior"
        onPick={onPick}
      />

      <MenuItem
        href="/operator"
        label="Playbook"
        sub="Interpretation rules • How to use the tools"
        onPick={onPick}
      />

      <MenuItem
        href="/allocator"
        label="Proof"
        sub="Portfolio Lab • Weekly snapshots • Process trail"
        onPick={onPick}
      />

      <div className="my-2 border-t border-white/10" />

      <MenuItem
        href="/pricing"
        label="Access"
        sub="Waitlist • Future tiers • Not a signal service"
        onPick={onPick}
      />

      <div className="border-t border-white/10 px-4 py-3 text-[11px] text-neutral-400">
        Upgrade only when your skill upgrades.
      </div>
    </>
  );

  return (
    <>
      {/* MOBILE = SHEET */}
      <div className="sm:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded={mobileOpen}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
            >
              <span>{currentMobile}</span>
              <span className="text-neutral-400">▼</span>
            </button>
          </SheetTrigger>

          <SheetContent
            side="bottom"
            className="border-white/10 bg-black text-white"
          >
            <SheetHeader>
              <SheetTitle className="text-left text-sm font-semibold text-white">
                Navigate REZIME
              </SheetTitle>
            </SheetHeader>

            <div className="mt-4 max-h-[70vh] overflow-auto pr-1">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-2">
                {MOBILE_MENU}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* DESKTOP = DROPDOWN */}
      <div ref={ref} className="relative hidden sm:block">
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
        >
          <span>Portal</span>
          <span className="text-neutral-400">{open ? "▲" : "▼"}</span>
        </button>

        {open && (
          <div
            className="absolute left-0 mt-2 w-[520px] max-w-[92vw] overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-xl backdrop-blur"
            role="menu"
            aria-label="Portal"
          >
            <div className="p-2">{DESKTOP_MENU}</div>
          </div>
        )}
      </div>
    </>
  );
}
