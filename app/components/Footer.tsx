"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function normalizePath(pathname: string) {
  return pathname.split("?")[0].split("#")[0];
}

function resolveLang(pathname: string) {
  const p = normalizePath(pathname);
  if (p.startsWith("/en")) return "en";
  return "id"; // default/canon
}

export default function Footer() {
  const pathname = usePathname();
  const lang = resolveLang(pathname);

  const notesHref = lang === "en" ? "/en/application" : "/id/penerapan";
  const contactHref = lang === "en" ? "/en/contact" : "/id/kontak";

  const notesLabel = lang === "en" ? "Notes" : "Catatan";
  const contactLabel = lang === "en" ? "Contact" : "Kontak";

  const disclaimer =
    lang === "en"
      ? "Educational framework only. Not financial advice. No signals. No predictions. No guarantees."
      : "Dokumentasi edukatif. Bukan nasihat finansial. Tidak ada sinyal. Tidak ada prediksi. Tidak ada jaminan.";

  return (
    <footer className="mt-24 border-t border-white/10 pt-8 pb-12 text-sm text-neutral-400">
      <div className="mx-auto max-w-6xl px-6 space-y-6">
        {/* Navigation meta */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <Link href={notesHref} className="hover:text-white transition">
            {notesLabel}
          </Link>

          <span className="text-neutral-700">•</span>

          <Link href={contactHref} className="hover:text-white transition">
            {contactLabel}
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[11px] text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          {disclaimer}
        </p>

        {/* Identity */}
        <p className="text-center text-[11px] text-neutral-600">
          © {new Date().getFullYear()} REZIME
        </p>
      </div>
    </footer>
  );
}