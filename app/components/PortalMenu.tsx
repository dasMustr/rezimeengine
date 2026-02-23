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

/* ---------------------------- PATH HELPERS ---------------------------- */

function normalizePath(pathname: string) {
  return pathname.split("?")[0].split("#")[0];
}

function resolveLang(pathname: string) {
  const p = normalizePath(pathname);
  if (p.startsWith("/en")) return "en";
  return "id";
}

/* ------------------------ CURRENT LABEL LOGIC ------------------------ */

function getCurrentLabel(pathname: string) {
  const p = normalizePath(pathname);

  // ROOT — not inside a section yet
  if (p === "/" || p === "/id" || p === "/en") return "Portal";

  // ID
  if (p.startsWith("/id/memahami")) return "Memahami";
  if (p.startsWith("/id/kerangka")) return "Kerangka";
  if (p.startsWith("/id/penerapan")) return "Catatan";
  if (p.startsWith("/id/kontak")) return "Kontak";

  // EN
  if (p.startsWith("/en/introduction")) return "Introduction";
  if (p.startsWith("/en/framework")) return "Framework";
  if (p.startsWith("/en/application")) return "Notes";
  if (p.startsWith("/en/contact")) return "Contact";

  // Legacy fallback
  if (p.startsWith("/orientation")) return "Memahami";
  if (p.startsWith("/operator")) return "Kerangka";
  if (p.startsWith("/allocator")) return "Catatan";
  if (p.startsWith("/contact")) return "Kontak";

  return "Portal";
}

function isActive(pathname: string, href: string) {
  const p = normalizePath(pathname);
  return p === href || p.startsWith(href + "/");
}

/* ------------------------------ UI ITEMS ------------------------------ */

function MenuItem({
  href,
  label,
  sub,
  onPick,
  active,
}: {
  href: string;
  label: string;
  sub: string;
  onPick: () => void;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onPick}
      className={[
        "block rounded-xl px-4 py-3 transition",
        active ? "bg-white/10" : "hover:bg-white/5",
      ].join(" ")}
      aria-current={active ? "page" : undefined}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {active ? (
            <span className="h-2 w-2 rounded-full bg-white/60" />
          ) : (
            <span className="h-2 w-2 rounded-full bg-white/10" />
          )}
          <div className="text-sm font-semibold text-white">{label}</div>
        </div>

        <div className={active ? "text-white/70" : "text-neutral-400"}>→</div>
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

/* ------------------------------ COMPONENT ------------------------------ */

export default function PortalMenu() {
  const pathname = usePathname();
  const lang = resolveLang(pathname);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const currentLabel = useMemo(() => getCurrentLabel(pathname), [pathname]);

  const isHome =
    normalizePath(pathname) === "/" ||
    normalizePath(pathname) === "/id" ||
    normalizePath(pathname) === "/en";

  /* close on outside click */
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

  /* ----------------------------- ROUTES ----------------------------- */

  const ROUTES =
    lang === "en"
      ? {
          learnHref: "/en/introduction",
          learnLabel: "Introduction",
          learnSub: "Your first lens • Why markets feel intense • Avoid early damage",

          frameworkHref: "/en/framework",
          frameworkLabel: "Framework",
          frameworkSub: "Regime → posture • Confidence before activity",

          notesHref: "/en/application",
          notesLabel: "Notes",
          notesSub: "Time-stamped record • Weekly snapshots • Process over hype",

          contactHref: "/en/contact",
          contactLabel: "Contact",
          contactSub: "Conversation first • This site is a networking tool",

          sectionLearn: "Learn",
          sectionUse: "Use",
          sectionConnect: "Connect",
          titleHome: "Choose your path",
          titleInside: "Jump to",
        }
      : {
          learnHref: "/id/memahami",
          learnLabel: "Memahami",
          learnSub: "Lensa awal • Kenapa pasar terasa berat • Hindari kerusakan dini",

          frameworkHref: "/id/kerangka",
          frameworkLabel: "Kerangka",
          frameworkSub: "Rezim → postur • Kepercayaan sebelum aktivitas",

          notesHref: "/id/penerapan",
          notesLabel: "Catatan",
          notesSub: "Arsip bertanggal • Snapshot mingguan • Proses tanpa hype",

          contactHref: "/id/kontak",
          contactLabel: "Kontak",
          contactSub: "Mulai dari percakapan • Website ini alat koneksi",

          sectionLearn: "Pelajari",
          sectionUse: "Gunakan",
          sectionConnect: "Terhubung",
          titleHome: "Pilih jalur",
          titleInside: "Lompat ke",
        };

  const MENU = (
    <>
      <SectionLabel>{ROUTES.sectionLearn}</SectionLabel>
      <MenuItem
        href={ROUTES.learnHref}
        label={ROUTES.learnLabel}
        sub={ROUTES.learnSub}
        onPick={onPick}
        active={isActive(pathname, ROUTES.learnHref)}
      />

      <div className="my-2 border-t border-white/10" />

      <SectionLabel>{ROUTES.sectionUse}</SectionLabel>
      <MenuItem
        href={ROUTES.frameworkHref}
        label={ROUTES.frameworkLabel}
        sub={ROUTES.frameworkSub}
        onPick={onPick}
        active={isActive(pathname, ROUTES.frameworkHref)}
      />
      <MenuItem
        href={ROUTES.notesHref}
        label={ROUTES.notesLabel}
        sub={ROUTES.notesSub}
        onPick={onPick}
        active={isActive(pathname, ROUTES.notesHref)}
      />

      <div className="my-2 border-t border-white/10" />

      <SectionLabel>{ROUTES.sectionConnect}</SectionLabel>
      <MenuItem
        href={ROUTES.contactHref}
        label={ROUTES.contactLabel}
        sub={ROUTES.contactSub}
        onPick={onPick}
        active={isActive(pathname, ROUTES.contactHref)}
      />
    </>
  );

  /* ------------------------------ RENDER ------------------------------ */

  return (
    <>
      {/* MOBILE */}
      <div className="sm:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200 hover:bg-white/10 transition">
              <span>{currentLabel}</span>
              <span className="text-neutral-400">▼</span>
            </button>
          </SheetTrigger>

          <SheetContent side="bottom" className="border-white/10 bg-black text-white">
            <SheetHeader>
              <SheetTitle className="text-left text-sm font-semibold text-white">
                {isHome ? ROUTES.titleHome : ROUTES.titleInside}
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

      {/* DESKTOP */}
      <div ref={ref} className="relative hidden sm:block">
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
        >
          <span>{currentLabel}</span>
          <span className="text-neutral-400">{open ? "▲" : "▼"}</span>
        </button>

        {open && (
          <div className="absolute left-0 mt-2 w-[520px] max-w-[92vw] overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-xl backdrop-blur">
            <div className="px-4 pt-3 pb-2 text-xs text-neutral-400">
              {isHome ? ROUTES.titleHome : ROUTES.titleInside}
            </div>
            <div className="p-2">{MENU}</div>
          </div>
        )}
      </div>
    </>
  );
}