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

function StaggerItem({
  open,
  i,
  children,
}: {
  open: boolean;
  i: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rezime-reveal ${open ? "is-in" : ""}`}
      style={{ transitionDelay: open ? `${80 + i * 70}ms` : "0ms" }}
    >
      {children}
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
      className="block rounded-xl px-4 py-3 hover:bg-white/5 transition"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-semibold text-white">{label}</div>
        <div className="text-neutral-400">→</div>
      </div>
      <div className="mt-1 text-xs text-neutral-400">{sub}</div>
    </Link>
  );
}

export default function AudienceMenu() {
  const pathname = usePathname();

  const current = useMemo(() => {
    if (pathname.startsWith("/observer"))
      return { label: "Learn", sub: "Public • Beginner • Survival-first" };
    if (pathname.startsWith("/operator"))
      return { label: "Playbook", sub: "Tools • Interpretation • Rules" };
    if (pathname.startsWith("/allocator"))
      return { label: "Portfolio Lab", sub: "Proof • Risk posture • Reporting" };
    if (pathname.startsWith("/faq"))
      return { label: "FAQ", sub: "Clear answers • No hype" };
    return { label: "Portal", sub: "Choose a portal" };
  }, [pathname]);

  // Mobile (Sheet)
  const [mobileOpen, setMobileOpen] = useState(false);

  // Desktop dropdown
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Close desktop dropdown on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ===================== */}
      {/* MOBILE = SHEET        */}
      {/* ===================== */}
      <div className="sm:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200 hover:bg-white/10 transition">
              <span>{current.label}</span>
              <span className="text-neutral-400">▼</span>
            </button>
          </SheetTrigger>

          <SheetContent
            side="bottom"
            className="border-white/10 bg-black text-white"
          >
            <SheetHeader>
              <SheetTitle className="text-left text-sm font-semibold text-white">
                Portals
              </SheetTitle>
            </SheetHeader>

            {/* Prevent overflow weirdness on mobile */}
            <div className="mt-4 max-h-[70vh] overflow-auto pr-1 space-y-2">
              <StaggerItem open={mobileOpen} i={0}>
                <MenuItem
                  href="/observer"
                  label="Learn"
                  sub="Public • Beginner • Survival-first"
                  onPick={() => setMobileOpen(false)}
                />
              </StaggerItem>

              <StaggerItem open={mobileOpen} i={1}>
                <MenuItem
                  href="/operator"
                  label="Playbook"
                  sub="Tools • Interpretation • Rules"
                  onPick={() => setMobileOpen(false)}
                />
              </StaggerItem>

              <StaggerItem open={mobileOpen} i={2}>
                <MenuItem
                  href="/allocator"
                  label="Portfolio Lab"
                  sub="Proof • Risk posture • Reporting"
                  onPick={() => setMobileOpen(false)}
                />
              </StaggerItem>

              <StaggerItem open={mobileOpen} i={3}>
                <MenuItem
                  href="/faq"
                  label="FAQ"
                  sub="Clear answers • No hype"
                  onPick={() => setMobileOpen(false)}
                />
              </StaggerItem>

              <StaggerItem open={mobileOpen} i={4}>
                <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">
                    Portfolio Lab (Coming Soon)
                  </p>
                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                    Factsheet-style archive: regimes, exposure posture, time-stamped
                    updates. Simulated first, live later.
                  </p>
                  <div className="mt-3 inline-flex items-center rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-neutral-300">
                    Weekly cadence • low-noise
                  </div>
                </div>
              </StaggerItem>

              <div className="pt-2 text-[11px] text-neutral-500">
                Learn → Playbook → Proof
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
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
        >
          <span className="text-neutral-200">{current.label}</span>
          <span className="text-neutral-400">{open ? "▲" : "▼"}</span>
        </button>

        {open && (
          <div
            className="absolute left-0 mt-2 w-[520px] max-w-[92vw] overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-xl backdrop-blur"
            role="menu"
          >
            <div className="grid grid-cols-2 gap-0">
              <div className="p-2">
                <div className="px-3 pb-2 pt-3">
                  <p className="text-[11px] uppercase tracking-widest text-neutral-400">
                    Portals
                  </p>
                </div>

                <MenuItem
                  href="/observer"
                  label="Learn"
                  sub="Public • Beginner • Survival-first"
                  onPick={() => setOpen(false)}
                />
                <MenuItem
                  href="/operator"
                  label="Playbook"
                  sub="Tools • Interpretation • Rules"
                  onPick={() => setOpen(false)}
                />
                <MenuItem
                  href="/allocator"
                  label="Portfolio Lab"
                  sub="Proof • Risk posture • Reporting"
                  onPick={() => setOpen(false)}
                />
                <MenuItem
                  href="/faq"
                  label="FAQ"
                  sub="Clear answers • No hype"
                  onPick={() => setOpen(false)}
                />
              </div>

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
                    COVID, Luna, BTC cycles, volatility spikes — shown as regimes
                    (without exposing the construction).
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 px-4 py-3 text-[11px] text-neutral-400">
              Learn → Playbook → Proof
            </div>
          </div>
        )}
      </div>
    </>
  );
}
