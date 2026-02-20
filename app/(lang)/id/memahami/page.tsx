"use client";

import React from "react";
import Link from "next/link";

import Reveal from "@/app/components/Reveal";
import Sheen from "@/app/components/Sheen";
import { RuleTiles } from "@/app/components/VisualBlocks";

/* ----------------------------- SMALL COMPONENTS ---------------------------- */

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-neutral-300">
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
  note,
  tone = "soft",
}: {
  title: string;
  desc: string;
  note?: string;
  tone?: "soft" | "hard";
}) {
  return (
    <div
      className={[
        "calm-block rounded-2xl border p-6",
        tone === "hard"
          ? "border-white/15 bg-white/10"
          : "border-white/10 bg-black/30",
      ].join(" ")}
    >
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{desc}</p>
      {note && (
        <p className="mt-3 text-xs text-neutral-500 leading-relaxed">{note}</p>
      )}
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-widest text-neutral-400">
        {eyebrow}
      </p>
      <h2 className="text-xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
        {subtitle}
      </p>
    </div>
  );
}

function JumpPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
    >
      {label}
    </a>
  );
}

function ProgressPills({ current }: { current: "memahami" | "kerangka" | "penerapan" | "akses" }) {
  const items = [
    { key: "memahami", label: "Memahami", href: "/id/memahami" },
    { key: "kerangka", label: "Kerangka", href: "/id/kerangka" },
    { key: "penerapan", label: "Penerapan", href: "/id/penerapan" },
    { key: "akses", label: "Akses", href: "/id/akses" },
  ] as const;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it) => {
        const active = it.key === current;
        return (
          <Link
            key={it.key}
            href={it.href}
            className={[
              "rounded-full border px-4 py-2 text-xs transition",
              active
                ? "border-white/15 bg-white/10 text-white"
                : "border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white",
            ].join(" ")}
            aria-current={active ? "page" : undefined}
          >
            {it.label}
          </Link>
        );
      })}
    </div>
  );
}

/* ---------------------------------- PAGE ---------------------------------- */

export default function MemahamiPage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Mengapa
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag>Ramah pemula</Tag>
            <Tag>Belajar tenang</Tag>
            <Tag>Tanpa tekanan</Tag>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl text-white">
            Kalau pasar terasa menakutkan,
            <br />
            itu normal.
          </h1>

          <div className="max-w-3xl space-y-3 text-sm text-neutral-300 leading-relaxed">
            <p>
              Pasar adalah salah satu tempat yang memberi umpan balik paling cepat.
              Tindakan bisa berakibat sebelum pemahaman sempat terbentuk.
            </p>
            <p>
              Rasa takut bukan datang dari “rumit”.  
              Rasa takut datang dari <span className="text-white">kecepatan konsekuensi</span>.
            </p>
            <p>
              Halaman ini ada untuk memperlambat itu — supaya pengalaman bisa terkumpul
              dengan aman.
            </p>
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
              <span className="text-neutral-300">Loncat ke:</span>
              <JumpPill href="#movement" label="Pergerakan" />
              <JumpPill href="#headlines" label="Headline" />
              <JumpPill href="#mismatch" label="Mismatch" />
              <JumpPill href="#rezime" label="Apa itu REZIME" />
            </div>
          </div>
        </section>
      </Reveal>

      {/* MOVEMENT */}
      <Reveal delayMs={80}>
        <section id="movement" className="space-y-5">
          <SectionHeader
            eyebrow="Konteks"
            title="Anda sebenarnya sudah paham pergerakan harga"
            subtitle="Harga berubah itu biasa. Anda melihatnya di mana-mana."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="Barang harian"
              desc="Harga makanan dan kebutuhan berubah karena suplai dan permintaan."
            />
            <Card
              title="Tiket dan perjalanan"
              desc="Permintaan tinggi menaikkan harga. Permintaan rendah menurunkannya."
            />
            <Card
              tone="hard"
              title="Game dan item"
              desc="Kelangkaan mengubah nilai cepat. Pemain menyesuaikan diri."
            />
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-neutral-300">
            Yang menakutkan bukan pergerakannya.  
            Yang menakutkan adalah ketidakpastian: <span className="text-white">harus bersikap bagaimana</span> saat kondisi berubah.
          </div>
        </section>
      </Reveal>

      {/* HEADLINES */}
      <Reveal delayMs={160}>
        <section id="headlines" className="space-y-5">
          <SectionHeader
            eyebrow="Persepsi"
            title="Kenapa headline terasa melelahkan"
            subtitle="Emosi bergerak lebih cepat daripada informasi."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            <Card
              title="Yang terasa"
              desc="Ada yang salah. Saya harus bertindak sekarang."
            />
            <Card
              tone="hard"
              title="Yang sebenarnya"
              desc="Harga bergerak cepat. Kondisi berubah."
            />
          </div>

          <p className="text-xs text-neutral-500">
            Tujuannya bukan mengabaikan berita. Tujuannya menghapus rasa urgensi.
          </p>
        </section>
      </Reveal>

      {/* MISMATCH */}
      <Reveal delayMs={240}>
        <section id="mismatch" className="space-y-5">
          <SectionHeader
            eyebrow="Risiko inti"
            title="Sebagian besar kerusakan datang dari mismatch"
            subtitle="Terlalu aktif saat kondisi tidak stabil menghasilkan kesalahan yang bisa dihindari."
          />

          <RuleTiles
            title="Ingat"
            subtitle="Ini aturan postur, bukan taktik."
            rules={[
              {
                title: "Kalau bingung, kurangi aktivitas",
                desc: "Kalau jelasnya rendah, keputusan biasanya memburuk.",
                tone: "hard",
              },
              {
                title: "Urgensi menciptakan kesalahan",
                desc: "Kecepatan menaikkan error rate.",
              },
              {
                title: "Melakukan lebih sedikit adalah skill",
                desc: "Restraint melindungi waktu belajar.",
                tone: "hard",
              },
            ]}
          />
        </section>
      </Reveal>

      {/* WHAT REZIME IS */}
      <Reveal delayMs={320}>
        <section id="rezime" className="space-y-5">
          <SectionHeader
            eyebrow="Apa itu REZIME"
            title="Label kondisi"
            subtitle="REZIME tidak memberi tahu Anda harus apa. REZIME membantu Anda menilai kapan sebuah keputusan layak percaya diri."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card tone="hard" title="Stabil" desc="Aksi punya waktu untuk bekerja." />
            <Card title="Tidak stabil" desc="Kurangi aktivitas dan ekspektasi." />
            <Card tone="hard" title="Reset" desc="Pause, lalu bangun ulang konteks." />
          </div>

          <div className="calm-block rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Intinya
            </p>
            <p className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Tujuan kita bukan sukses cepat.
              <br />
              Tujuan kita bertahan cukup lama untuk mengerti.
            </p>
            <p className="mt-3 text-sm text-neutral-300 leading-relaxed max-w-3xl">
              REZIME ada supaya pengalaman bisa terkumpul tanpa satu kesalahan
              mengakhiri proses.
            </p>
          </div>
        </section>
      </Reveal>

      {/* NEXT CTA + PROGRESSION */}
      <Reveal delayMs={420}>
        <section className="space-y-5">
          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Berikutnya: Kerangka</p>
                <p className="text-xs text-neutral-400">
                  Lihat bagaimana kondisi dilabeli.
                </p>
              </div>

              <Link
                href="/id/kerangka"
                className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Masuk Kerangka →
              </Link>
            </div>
          </div>

          {/* Progress ribbon */}
          <div className="pt-2">
            <ProgressPills current="memahami" />
          </div>
        </section>
      </Reveal>
    </div>
  );
}