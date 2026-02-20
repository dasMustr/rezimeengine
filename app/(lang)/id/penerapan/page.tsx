"use client";

import React from "react";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import Sheen from "@/app/components/Sheen";
import Section from "@/app/components/Section";

const PORTFOLIO_LAB_URL =
  "https://www.notion.so/REZIME-Portfolio-Lab-2f2e5f5ad67580649936e6102c240fe7?source=copy_link";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
  rows,
}: {
  title: string;
  desc: string;
  rows: { k: string; v: string }[];
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{desc}</p>

      <div className="mt-4 space-y-2">
        {rows.map((r) => (
          <div
            key={r.k}
            className="flex items-start justify-between gap-6 border-t border-white/10 pt-3"
          >
            <div className="text-xs text-neutral-400">{r.k}</div>
            <div className="text-sm text-neutral-200 text-right">{r.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProgressPills({
  current,
}: {
  current: "memahami" | "kerangka" | "penerapan" | "akses";
}) {
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

export default function PenerapanPage() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Penerapan
          </p>

          <div className="flex flex-wrap gap-2">
            <Pill>Waktu di pasar</Pill>
            <Pill>Arsip postur</Pill>
            <Pill>Perilaku di atas hasil</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl text-white">
            Pengalaman tidak bisa diklaim.
            <br className="hidden sm:block" />
            Pengalaman harus dicatat.
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
            Portfolio Lab adalah catatan mingguan tentang bagaimana eksposur
            dikelola di bawah kondisi yang berbeda.
            <br />
            <br />
            Bukan scoreboard. Bukan feed prediksi.
            Ini adalah rekam belajar.
          </p>

          <p className="max-w-3xl text-xs text-neutral-500">
            Dokumentasi edukasi saja. Bukan nasihat. Bukan sinyal. Bukan prediksi.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/id/kerangka"
              className="premium-card is-clickable rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
            >
              ← Kerangka
            </Link>

            <a
              href={PORTFOLIO_LAB_URL}
              target="_blank"
              rel="noreferrer"
              className="premium-card is-clickable rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
            >
              Buka catatan →
            </a>
          </div>
        </section>
      </Reveal>

      {/* PURPOSE */}
      <Reveal delayMs={80}>
        <Section
          id="proof"
          eyebrow="Tujuan"
          title="Apa yang dibuktikan halaman ini"
          subtitle="Pemahaman tumbuh dari eksposur yang dikelola dengan benar — berulang, dan tercatat."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              title="Yang dicatat"
              desc="Konteks di sekitar keputusan."
              rows={[
                { k: "Kondisi", v: "Kondisi apa yang sedang terjadi" },
                { k: "Postur", v: "Eksposur dikelola bagaimana" },
                { k: "Alasan", v: "Kenapa postur itu dipilih" },
              ]}
            />

            <Card
              title="Yang tidak dicatat"
              desc="Karena ini bukan layanan sinyal."
              rows={[
                { k: "Tanpa alert", v: "Tidak ada call entry/exit" },
                { k: "Tanpa hindsight", v: "Tidak ada seleksi screenshot" },
                { k: "Tanpa klaim", v: "Tidak ada marketing prediksi" },
              ]}
            />

            <Card
              title="Kenapa ini penting"
              desc="Skill terbentuk dari repetisi di bawah feedback."
              rows={[
                { k: "Langkah 1", v: "Hindari kerusakan" },
                { k: "Langkah 2", v: "Jaga konsistensi" },
                { k: "Langkah 3", v: "Biarkan intuisi terbentuk" },
              ]}
            />
          </div>
        </Section>
      </Reveal>

      {/* HOW TO READ */}
      <Reveal delayMs={120}>
        <Section
          id="reading"
          eyebrow="Cara membaca"
          title="Jangan baca ini seperti performa"
          subtitle="Baca seperti flight log."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <Card
              title="Pertanyaan yang salah"
              desc="Naik atau turun?"
              rows={[
                { k: "Fokus", v: "Hasil" },
                { k: "Akibat", v: "Judgement jangka pendek" },
                { k: "Masalah", v: "Tidak menghasilkan pembelajaran yang bisa diulang" },
              ]}
            />
            <Card
              title="Pertanyaan yang benar"
              desc="Apakah perilaku cocok dengan kondisi?"
              rows={[
                { k: "Fokus", v: "Kualitas keputusan" },
                { k: "Hasil", v: "Pembelajaran repeatable" },
                { k: "Manfaat", v: "Pembentukan intuisi" },
              ]}
            />
          </div>
        </Section>
      </Reveal>

      {/* ARCHIVE */}
      <Reveal delayMs={160}>
        <Section
          id="archive"
          eyebrow="Arsip"
          title="Portfolio Lab lengkap"
          subtitle="Semua log mingguan ada di catatan eksternal."
        >
          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-neutral-300">
                Snapshot minggu-ke-minggu, perubahan postur, dan catatan kondisi.
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Ini bukti proses, bukan bukti “hasil”.
              </p>
            </div>
            <a
              href={PORTFOLIO_LAB_URL}
              target="_blank"
              rel="noreferrer"
              className="premium-card is-clickable rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
            >
              Buka Portfolio Lab →
            </a>
          </div>
        </Section>
      </Reveal>

      {/* BRIDGE TO ACCESS + PROGRESSION */}
      <Reveal delayMs={210}>
        <section className="space-y-5">
          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">
                  Berikutnya: Akses
                </p>
                <p className="text-xs text-neutral-400">
                  Saat ini REZIME dibuka lewat percakapan — supaya kualitas,
                  ekspektasi, dan alignment tetap tinggi.
                </p>
              </div>

              <Link
                href="/id/akses"
                className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Masuk Akses →
              </Link>
            </div>
          </div>

          <div className="pt-2">
            <ProgressPills current="penerapan" />
          </div>
        </section>
      </Reveal>
    </div>
  );
}