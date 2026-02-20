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
    <Link
      href={mirror}
      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
    >
      {isID ? "EN" : "ID"}
    </Link>
  );
}