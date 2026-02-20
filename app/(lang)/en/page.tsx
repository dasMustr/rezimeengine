// app/page.tsx
import React from "react";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import Sheen from "@/app/components/Sheen";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-neutral-300">
      {children}
    </span>
  );
}

function HomeCard({
  title,
  desc,
  href,
  cta,
  tone = "soft",
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
  tone?: "soft" | "hard";
}) {
  return (
    <Link
      href={href}
      className={[
        "premium-card is-clickable group relative block rounded-2xl border p-6 transition",
        tone === "hard"
          ? "border-white/15 bg-white/10 hover:bg-white/15"
          : "border-white/10 bg-white/5 hover:bg-white/10",
      ].join(" ")}
    >
      <Sheen className="rounded-2xl" />
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-neutral-300">{desc}</div>
      <div className="mt-4 text-xs text-neutral-300">
        <span className="text-neutral-400">Buka</span>{" "}
        <span className="text-white">→</span> {cta}
      </div>
    </Link>
  );
}

function ScopeBlock() {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-semibold text-white">Tentang</p>
      <div className="mt-2 space-y-3 text-sm text-neutral-300 leading-relaxed">
        <p>
          REZIME adalah kerangka dasar untuk orang yang ingin terbiasa berada di
          dunia finansial. Bukan sinyal. Bukan prediksi. Bukan ajakan transaksi.
        </p>
        <p>
          Tujuannya sederhana: mengurangi kesalahan yang tidak perlu, supaya
          pengalaman bisa terkumpul dan intuisi bisa terbentuk.
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <section className="space-y-12">
      {/* HERO */}
      <Reveal delayMs={0}>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 sm:p-12">
          <div className="space-y-7">

            {/* TAGS */}
            <div className="flex flex-wrap gap-2">
              <Tag>Kerangka dasar</Tag>
              <Tag>Tenang by design</Tag>
              <Tag>Bukan sinyal</Tag>
            </div>

            {/* HERO COPY */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
                Pasar terasa keras
                <br />
                karena umpan baliknya instan.
              </h1>

              <p className="max-w-2xl text-base text-neutral-300 leading-relaxed">
                Banyak orang bukan gagal karena tidak pintar.
                <br />
                Tapi karena konsekuensi datang lebih cepat dari proses belajar.
              </p>

              <p className="max-w-3xl text-sm text-neutral-400 leading-relaxed">
                REZIME membantu mengenali kondisi terlebih dahulu,
                supaya bisa melambat saat tidak jelas
                dan tetap stabil saat kondisi mendukung.
                <br /><br />
                Untuk individu yang ingin lebih nyaman mengelola uang.
                Untuk profesional dan pemilik usaha yang ingin keputusan finansial
                lebih stabil dalam jangka panjang.
              </p>
            </div>

            {/* INVITATION */}
            <div className="max-w-3xl space-y-2">
              <p className="text-sm text-neutral-400">
                Kalau kamu tidak tertarik dengan cepat kaya,
                kemungkinan kamu akan cocok di sini.
              </p>
              <p className="text-sm text-neutral-400">
                Tujuannya waktu. Waktu membentuk pengalaman.
                Pengalaman membentuk intuisi.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/orientation"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Mulai di sini →
              </Link>

              <Link
                href="/operator"
                className="premium-card is-clickable inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-neutral-200 transition hover:bg-white/10"
              >
                Lihat kerangka →
              </Link>

              <Link
                href="/allocator"
                className="text-sm text-neutral-400 underline decoration-white/10 underline-offset-4 transition hover:text-neutral-200 hover:decoration-white/20"
              >
                Catatan publik
              </Link>

              <Link
                href="/pricing"
                className="text-sm text-neutral-500 underline decoration-white/10 underline-offset-4 transition hover:text-neutral-200 hover:decoration-white/20"
              >
                Akses
              </Link>
            </div>

            <p className="text-xs text-neutral-500">
              Dokumentasi edukatif. Bukan nasihat finansial. Tidak ada sinyal. Tidak ada jaminan.
            </p>
          </div>
        </div>
      </Reveal>

      {/* THREE DOORS */}
      <Reveal delayMs={80}>
        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Struktur sederhana
            </p>
            <h2 className="text-xl font-semibold text-white">
              Kenapa. Kerangka. Catatan.
            </h2>
            <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
              Pahami dulu. Gunakan perlahan. Lihat hasilnya seiring waktu.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <HomeCard
              tone="hard"
              title="Kenapa"
              desc="Pasar terasa menekan karena konsekuensi datang cepat. Mulai dari urutan belajar yang lebih aman."
              href="/orientation"
              cta="Orientasi"
            />
            <HomeCard
              title="Kerangka"
              desc="Cara membaca kondisi sebelum bertindak. Membantu menyamakan sikap dengan situasi."
              href="/operator"
              cta="Framework"
            />
            <HomeCard
              title="Catatan"
              desc="Arsip publik berbasis waktu. Tidak ada edit setelah kejadian."
              href="/allocator"
              cta="Portfolio Lab"
            />
          </div>

          <ScopeBlock />
        </section>
      </Reveal>
    </section>
  );
}