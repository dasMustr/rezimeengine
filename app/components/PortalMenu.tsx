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

function normalizePath(pathname: string) {
  // Remove query/hash noise just in case (pathname usually doesn't include them, but safe)
  return pathname.split("?")[0].split("#")[0];
}

function resolveLang(pathname: string) {
  const p = normalizePath(pathname);
  if (p.startsWith("/en")) return "en";
  return "id"; // default/canon
}

function getCurrentLabel(pathname: string) {
  const p = normalizePath(pathname);

  // ID canon
  if (p.startsWith("/id/memahami")) return "Memahami";
  if (p.startsWith("/id/kerangka")) return "Kerangka";
  if (p.startsWith("/id/penerapan")) return "Penerapan";
  if (p.startsWith("/id/akses")) return "Akses";

  // EN mirror
  if (p.startsWith("/en/introduction")) return "Introduction";
  if (p.startsWith("/en/framework")) return "Framework";
  if (p.startsWith("/en/application")) return "Application";
  if (p.startsWith("/en/access")) return "Access";

  // Legacy (should mostly redirect now, but nice fallback)
  if (p.startsWith("/orientation")) return "Orientation";
  if (p.startsWith("/operator")) return "Framework";
  if (p.startsWith("/allocator")) return "Portfolio Lab";
  if (p.startsWith("/pricing")) return "Access";

  return "Portal";
}

export default function PortalMenu() {
  const pathname = usePathname();
  const lang = resolveLang(pathname);

  // Mobile
  const [mobileOpen, setMobileOpen] = useState(false);

  // Desktop
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Context label (used for BOTH mobile + desktop button)
  const currentLabel = useMemo(() => getCurrentLabel(pathname), [pathname]);

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

  const ROUTES =
    lang === "en"
      ? {
          learnHref: "/en/introduction",
          learnLabel: "Introduction",
          learnSub:
            "Your first lens • What markets are • Why fear is normal • Avoid early damage",
          frameworkHref: "/en/framework",
          frameworkLabel: "Framework",
          frameworkSub: "Regimes → posture • How to read Engine/Sync/Battle Lines",
          applyHref: "/en/application",
          applyLabel: "Application",
          applySub: "Time-stamped proof • Weekly snapshots • Process over hype",
          joinHref: "/en/access",
          joinLabel: "Access",
          joinSub: "Conversation-gated entry • Optional paid layer later",
          sectionLearn: "Learn",
          sectionApply: "Apply",
          sectionJoin: "Join",
        }
      : {
          learnHref: "/id/memahami",
          learnLabel: "Memahami",
          learnSub:
            "Lensa awal • Apa itu pasar • Kenapa takut itu normal • Hindari kerusakan dini",
          frameworkHref: "/id/kerangka",
          frameworkLabel: "Kerangka",
          frameworkSub: "Rezim → sikap • Cara membaca Engine/Sync/Battle Lines",
          applyHref: "/id/penerapan",
          applyLabel: "Penerapan",
          applySub: "Bukti bertanggal • Snapshot mingguan • Proses tanpa hype",
          joinHref: "/id/akses",
          joinLabel: "Akses",
          joinSub: "Masuk via percakapan • Lapisan berbayar opsional nanti",
          sectionLearn: "Pelajari",
          sectionApply: "Terapkan",
          sectionJoin: "Masuk",
        };

  // One unified menu (mobile + desktop)
  const MENU = (
    <>
      <SectionLabel>{ROUTES.sectionLearn}</SectionLabel>
      <MenuItem
        href={ROUTES.learnHref}
        label={ROUTES.learnLabel}
        sub={ROUTES.learnSub}
        onPick={onPick}
      />

      <div className="my-2 border-t border-white/10" />

      <SectionLabel>{ROUTES.sectionApply}</SectionLabel>
      <MenuItem
        href={ROUTES.frameworkHref}
        label={ROUTES.frameworkLabel}
        sub={ROUTES.frameworkSub}
        onPick={onPick}
      />
      <MenuItem
        href={ROUTES.applyHref}
        label={ROUTES.applyLabel}
        sub={ROUTES.applySub}
        onPick={onPick}
      />

      <div className="my-2 border-t border-white/10" />

      <SectionLabel>{ROUTES.sectionJoin}</SectionLabel>
      <MenuItem
        href={ROUTES.joinHref}
        label={ROUTES.joinLabel}
        sub={ROUTES.joinSub}
        onPick={onPick}
      />
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
              <span>{currentLabel}</span>
              <span className="text-neutral-400">▼</span>
            </button>
          </SheetTrigger>

          <SheetContent
            side="bottom"
            className="border-white/10 bg-black text-white"
          >
            <SheetHeader>
              <SheetTitle className="text-left text-sm font-semibold text-white">
                {lang === "en" ? "Choose your route" : "Pilih rute"}
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

      {/* DESKTOP = DROPDOWN */}
      <div ref={ref} className="relative hidden sm:block">
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
        >
          <span>{currentLabel}</span>
          <span className="text-neutral-400">{open ? "▲" : "▼"}</span>
        </button>

        {open && (
          <div
            className="absolute left-0 mt-2 w-[520px] max-w-[92vw] overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-xl backdrop-blur"
            role="menu"
            aria-label="Portal"
          >
            <div className="p-2">{MENU}</div>
          </div>
        )}
      </div>
    </>
  );
}