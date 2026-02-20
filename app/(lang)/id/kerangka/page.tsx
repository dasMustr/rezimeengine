"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import Reveal from "@/app/components/Reveal";
import Sheen from "@/app/components/Sheen";
import Section from "@/app/components/Section";
import { RuleTiles } from "@/app/components/VisualBlocks";

/* ----------------------------- SMALL COMPONENTS ---------------------------- */

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
  tone = "soft",
  footer,
}: {
  title: string;
  desc: string;
  tone?: "soft" | "hard";
  footer?: string;
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
      {footer ? (
        <p className="mt-3 text-xs text-neutral-500 leading-relaxed">{footer}</p>
      ) : null}
    </div>
  );
}

function Notice({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-semibold text-white">{title}</p>
      <div className="mt-2 text-sm text-neutral-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function JumpLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
    >
      {label}
    </a>
  );
}

function ModeHeader({
  eyebrow,
  title,
  subtitle,
  badge,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  badge: string;
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            {eyebrow}
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">{title}</p>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            {subtitle}
          </p>
        </div>
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-neutral-300">
          {badge}
        </span>
      </div>
    </div>
  );
}

/* ----------------------------- PROGRESSION RIBBON ---------------------------- */

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

/* ----------------------------- STRIP LEGEND ---------------------------- */

function StripLegend() {
  const items = [
    {
      name: "Netral",
      note: "Struktur belum jelas. Perlakukan sebagai partisipasi berkepercayaan rendah.",
      color: "#6b7280",
    },
    {
      name: "Kontrol Empire (Hijau / Biru)",
      note: "Satu Empire memegang kontrol. Hijau = Bull Empire. Biru = Bear Empire.",
      color: "#22c55e",
      color2: "#3b82f6",
    } as any,
    {
      name: "Instabil (Kuning)",
      note: "Konflik & jebakan. Kurangi eksposur dan kurangi keputusan.",
      color: "#facc15",
    },
    {
      name: "Reset (Merah)",
      note: "Asumsi berubah. Bangun ulang konteks sebelum re-engage.",
      color: "#ef4444",
    },
  ];

  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Panduan warna strip
          </p>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            Warna mengklasifikasikan{" "}
            <span className="text-white font-semibold">kondisi</span>. Bukan pemicu
            tindakan.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/40 p-2">
          <div className="flex h-3 w-[220px] overflow-hidden rounded-lg border border-white/10">
            <div style={{ background: "#6b7280" }} className="w-[18%]" />
            <div style={{ background: "#3b82f6" }} className="w-[22%]" />
            <div style={{ background: "#facc15" }} className="w-[10%]" />
            <div style={{ background: "#ef4444" }} className="w-[6%]" />
            <div style={{ background: "#22c55e" }} className="w-[44%]" />
          </div>
          <p className="mt-2 text-[11px] uppercase tracking-widest text-neutral-500">
            demo strip
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it: any) => (
          <div
            key={it.name}
            className="calm-block rounded-xl border border-white/10 bg-black/40 p-4"
          >
            <div className="flex items-center gap-3">
              {it.color2 ? (
                <span className="flex items-center gap-1" aria-hidden>
                  <span
                    className="h-3 w-3 rounded-sm border border-white/20"
                    style={{ background: it.color }}
                  />
                  <span
                    className="h-3 w-3 rounded-sm border border-white/20"
                    style={{ background: it.color2 }}
                  />
                </span>
              ) : (
                <span
                  className="h-3 w-3 rounded-sm border border-white/20"
                  style={{ background: it.color }}
                  aria-hidden
                />
              )}
              <p className="text-sm font-semibold text-white">{it.name}</p>
            </div>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              {it.note}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
        Jika cerita bentrok antar timeframe, perlakukan sebagai kepercayaan rendah.
        Kecilkan aktivitas atau pause.
      </p>
    </div>
  );
}

function CasePanel({
  label,
  caption,
  src,
  alt,
  priority = false,
  tag = "Contoh (GOOG)",
}: {
  label: string;
  caption: string;
  src: string;
  alt: string;
  priority?: boolean;
  tag?: string;
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white">
          {label}
        </span>
        <span className="text-[11px] uppercase tracking-widest text-neutral-500">
          {tag}
        </span>
      </div>

      <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-black/40">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        </div>
      </div>

      <p className="mt-3 text-sm text-neutral-300 leading-relaxed">{caption}</p>
    </div>
  );
}

/* ---------------------------------- PAGE ---------------------------------- */

export default function KerangkaPage() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Kerangka
          </p>

          <div className="flex flex-wrap gap-2">
            <Pill>Peta, bukan sinyal</Pill>
            <Pill>Netral metode</Pill>
            <Pill>Kondisi dulu</Pill>
            <Pill>Dirancang untuk waktu di pasar</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl text-white">
            Kenali kondisi
            <br className="hidden sm:block" /> sebelum Anda membawa risiko.
          </h1>

          <div className="max-w-3xl space-y-3 text-sm text-neutral-300 leading-relaxed">
            <p>
              REZIME adalah kerangka partisipasi dasar untuk orang yang memang
              berniat berada di pasar. Bukan jalan pintas. Ini urutan berpikir.
            </p>
            <p>
              Kerusakan terbesar biasanya bukan karena “salah”. Kerusakan datang
              saat kita membawa risiko pada kondisi yang instabil.
            </p>
            <p>
              REZIME melabeli kondisi terlebih dahulu, supaya aktivitas Anda
              sesuai dengan kondisi yang sedang terjadi.
            </p>
          </div>

          <div className="grid gap-4 pt-2 lg:grid-cols-3">
            <Card
              tone="hard"
              title="Kondisi"
              desc="Anda sedang berada di kondisi apa. Stabil, Instabil, atau Reset."
              footer="Kondisi dulu. Metode kemudian."
            />
            <Card
              title="Kepercayaan"
              desc="Stabil memberi ruang untuk sabar. Instabil menurunkan kepercayaan. Reset berarti bangun ulang konteks."
              footer="Kepercayaan mengatur seberapa banyak Anda melakukan sesuatu."
            />
            <Card
              tone="hard"
              title="Aktivitas"
              desc="Saat kepercayaan rendah, aktivitas mengecil. Keputusan lebih sedikit = kesalahan yang bisa dihindari lebih sedikit."
              footer="Restraint adalah skill."
            />
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/id/memahami"
              className="premium-card is-clickable rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
            >
              ← Memahami
            </Link>
            <Link
              href="/id/penerapan"
              className="premium-card is-clickable rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-300 transition hover:bg-white/5"
            >
              Penerapan → 
            </Link>
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-neutral-400 leading-relaxed">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-neutral-300">Loncat ke:</span>
              <JumpLink href="#survival" label="Mode Bertahan" />
              <JumpLink href="#timing" label="Mode Timing" />
              <JumpLink href="#strip" label="Warna strip" />
              <JumpLink href="#rules" label="Aturan baca" />
              <JumpLink href="#example" label="Walkthrough" />
            </div>
          </div>
        </section>
      </Reveal>

      {/* SURVIVAL MODE */}
      <Reveal delayMs={60}>
        <Section
          id="survival"
          eyebrow="Mode 1"
          title="Mode Bertahan"
          subtitle="Default. Satu timeframe utama."
        >
          <ModeHeader
            eyebrow="Dasar"
            title="Belajar dengan aman sebelum mencoba timing"
            subtitle="Mode Bertahan adalah fondasi. Satu timeframe utama (HTF). Tujuannya bukan menambah aktivitas. Tujuannya mengurangi kesalahan yang bisa dihindari, sambil pengalaman terbentuk."
            badge="HTF saja"
          />

          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="Kontrol Empire"
              desc="Di HTF, identifikasi siapa yang memegang kontrol. Bull Empire atau Bear Empire."
              footer="Ini menentukan postur."
            />
            <Card
              title="Instabil"
              desc="Kuning berarti konflik & jebakan. Kurangi eksposur dan kurangi keputusan."
              footer="Clarity turun → aktivitas turun."
            />
            <Card
              tone="hard"
              title="Reset"
              desc="Merah berarti kondisi berubah. Pause, lalu bangun ulang konteks sebelum re-engage."
              footer="Asumsi lama bisa tidak berlaku."
            />
          </div>

          <Notice title="Aturan inti (Mode Bertahan)">
            Instabil = kepercayaan turun. Kepercayaan turun = keputusan berkurang.
            Keputusan berkurang = kesalahan yang bisa dihindari berkurang.
          </Notice>
        </Section>
      </Reveal>

      {/* TIMING MODE */}
      <Reveal delayMs={90}>
        <Section
          id="timing"
          eyebrow="Mode 2"
          title="Mode Timing"
          subtitle="Opsional. Detail ekstra lintas timeframe."
        >
          <ModeHeader
            eyebrow="Opsional"
            title="Timing tidak wajib untuk aman"
            subtitle="Jika Anda bertahan, Anda akan melihat instabil biasanya muncul di timeframe kecil dulu lalu naik. Ini detail tambahan. Jika detail ini membuat urgensi, kembali ke Mode Bertahan."
            badge="HTF + MTF + LTF"
          />

          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="Bahasa LTF"
              desc="Instabil LTF = Tension. Reset LTF = Uprising."
            />
            <Card
              title="Bahasa MTF"
              desc="Instabil MTF = Unrest. Reset MTF = Rebellion."
            />
            <Card
              tone="hard"
              title="Bahasa HTF"
              desc="Instabil HTF = Siege. Reset HTF = Revolution."
            />
          </div>

          <Notice title="Rantai eskalasi">
            Tension → Uprising → Unrest → Rebellion → Siege → Revolution
            <br />
            Saat HTF mencapai Revolution, perlakukan sebagai reset. Bangun ulang
            “tesis Empire” sebelum membawa risiko lagi.
          </Notice>
        </Section>
      </Reveal>

      {/* STRIP */}
      <Reveal delayMs={120}>
        <section id="strip" className="space-y-4">
          <StripLegend />
        </section>
      </Reveal>

      {/* RULES */}
      <Reveal delayMs={150}>
        <Section
          id="rules"
          eyebrow="Cara pakai"
          title="Aturan membaca"
          subtitle="Aturan ini mengatur postur dan kepercayaan. Bukan instruksi tindakan."
        >
          <RuleTiles
            title="Aturan yang mengatur perilaku"
            subtitle="Cepat dipindai. Sulit disalahpahami."
            rules={[
              {
                title: "Rule 1: Mode Bertahan adalah default",
                desc: "Mulai dari HTF saja. Hormati Instabil dan Reset. Bertahan cukup lama sampai judgement terbentuk.",
                tone: "hard",
              },
              {
                title: "Rule 2: Mode Timing itu opsional",
                desc: "Detail multi-timeframe tidak wajib untuk aman. Jika membuat urgensi, buang detailnya.",
              },
              {
                title: "Rule 3: Instabil = kepercayaan turun",
                desc: "Konflik menurunkan reliabilitas. Instabil adalah label peringatan, bukan perintah untuk bertindak.",
                tone: "hard",
              },
              {
                title: "Rule 4: Kepercayaan turun = aktivitas turun",
                desc: "Keputusan lebih sedikit, kriteria lebih ketat, partisipasi lebih kecil. Tenang mengalahkan cepat.",
              },
              {
                title: "Rule 5: Reset mengubah asumsi",
                desc: "Saat kondisi berubah, pause dan bangun ulang konteks sebelum re-engage.",
                tone: "hard",
              },
            ]}
          />

          <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
            REZIME dirancang supaya waktu di pasar bisa survivable — agar pengalaman
            punya waktu untuk berubah menjadi intuisi.
          </p>
        </Section>
      </Reveal>

      {/* WALKTHROUGH */}
      <Reveal delayMs={210}>
        <Section
          id="example"
          eyebrow="Walkthrough"
          title="Cara sederhana membaca satu siklus"
          subtitle="Bukan soal menebak bottom. Tapi menghindari kondisi hostile dan re-engage saat struktur lebih bersih."
        >
          <div className="grid gap-4">
            <CasePanel
              src="/playbook/engine-strip.png"
              alt="Contoh strip REZIME pada GOOG"
              label="1) Mulai dari kondisi"
              caption="Sebelum keputusan apa pun, tanya satu hal: apakah kondisinya cukup stabil untuk membawa risiko. Jika kuning, aktivitas mengecil. Jika merah, Anda pause."
              priority
            />

            <CasePanel
              src="/playbook/sync-bear-revolution.png"
              alt="Contoh kondisi hostile pada GOOG"
              label="2) Struktur hostile"
              caption="Saat struktur hostile, tujuan bukan jadi pintar. Tujuan adalah menghindari eksposur yang mengubah gerak normal menjadi drawdown yang dalam."
            />

            <CasePanel
              src="/playbook/sync-bull-alignment.png"
              alt="Contoh struktur membaik pada GOOG"
              label="3) Struktur membaik"
              caption="Saat kondisi menjadi lebih bersih, perilaku jadi lebih mudah. Lebih mudah hold, lebih sulit panik. Di sini pasar mulai terasa normal."
            />

            <Notice title="Apa yang dibuktikan walkthrough ini">
              Anda tidak perlu bergerak lebih cepat. Anda perlu menyesuaikan
              aktivitas dengan kondisi. Itu cara pengalaman tetap hidup cukup lama
              untuk berubah menjadi intuisi.
            </Notice>
          </div>
        </Section>
      </Reveal>

      {/* CTA + PROGRESSION */}
      <Reveal delayMs={250}>
        <section className="space-y-5">
          <section className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">
                  Berikutnya: Penerapan
                </p>
                <p className="text-xs text-neutral-400">
                  Portfolio Lab adalah arsip berbasis waktu. Konteks dan postur
                  dicatat, minggu demi minggu.
                </p>
              </div>

              <Link
                href="/id/penerapan"
                className="premium-card is-clickable inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Masuk Penerapan →
              </Link>
            </div>

            <p className="mt-4 text-[11px] text-neutral-500 leading-relaxed">
              Dokumentasi edukasi saja. Bukan nasihat finansial. Bukan sinyal.
              Bukan prediksi. Tidak ada jaminan.
            </p>
          </section>

          <div className="pt-2">
            <ProgressPills current="kerangka" />
          </div>
        </section>
      </Reveal>
    </div>
  );
}