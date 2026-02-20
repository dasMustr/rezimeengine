"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getMirrorPath } from "../_lib/langMap";

export default function LangToggle() {
  const pathname = usePathname();
  const mirror = getMirrorPath(pathname);
  const isID = pathname.startsWith("/id");

  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-black/40 p-1 backdrop-blur">
      <span
        className={[
          "px-3 py-1 text-xs rounded-full transition",
          isID ? "bg-white/10 text-white" : "text-neutral-400",
        ].join(" ")}
      >
        ID
      </span>

      <span className="mx-1 text-neutral-600">|</span>

      <Link
        href={mirror}
        className={[
          "px-3 py-1 text-xs rounded-full transition",
          !isID ? "bg-white/10 text-white" : "text-neutral-400 hover:text-neutral-200",
        ].join(" ")}
        aria-label={isID ? "Switch to English" : "Switch to Indonesian"}
      >
        EN
      </Link>
    </div>
  );
}