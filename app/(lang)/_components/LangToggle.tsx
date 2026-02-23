"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getMirrorPath } from "../_lib/langMap";

function normalizePath(pathname: string) {
  return pathname.split("?")[0].split("#")[0];
}

export default function LangToggle() {
  const pathname = usePathname();
  const p = normalizePath(pathname);

  // Everything NOT under /en is ID (including "/")
  const isID = !p.startsWith("/en");

  const mirror = useMemo(() => getMirrorPath(p), [p]);

  const idHref = isID ? p : mirror;
  const enHref = isID ? mirror : p;

  const baseBtn =
    "px-3 py-1.5 text-xs rounded-full transition select-none";

  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 text-neutral-200 hover:bg-white/10 transition">
      <Link
        href={idHref}
        aria-label="Switch to Indonesian"
        className={[
          baseBtn,
          isID
            ? "bg-white/10 text-white"
            : "text-neutral-400 hover:text-neutral-200 hover:bg-white/5",
        ].join(" ")}
      >
        ID
      </Link>

      <Link
        href={enHref}
        aria-label="Switch to English"
        className={[
          baseBtn,
          !isID
            ? "bg-white/10 text-white"
            : "text-neutral-400 hover:text-neutral-200 hover:bg-white/5",
        ].join(" ")}
      >
        EN
      </Link>
    </div>
  );
}