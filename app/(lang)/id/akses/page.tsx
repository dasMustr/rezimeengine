"use client";

import React from "react";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import Sheen from "@/app/components/Sheen";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-neutral-300">
      {children}
    </span>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-white/50" />
      <span>{children}</span>
    </li>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
        {title}
      </p>
      <div className="mt-3 text-sm text-neutral-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function AccessCard() {
  return (
    <div className="premium-card relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6">
      <Sheen className="rounded-2xl" />

      <div className="space-y-4">
        <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
          Fase 1 — Jaringan Kepercayaan
        </p>

        <h3 className="text-base font-semibold text-white">
          Masuk melalui percakapan
        </h3>

        <p className="text-sm text-neutral-300 leading-relaxed">
          REZIME tidak dibuka sebagai langganan publik.  
          Akses diberikan setelah percakapan dan kesesuaian cara berpikir.
        </p>

        <ul className="space-y-2 text-sm text-neutral-300">
          <Bullet>Fokus pada keselarasan, bukan jumlah pengguna</Bullet>
          <Bullet>Portofolio Lab sebagai bukti proses, bukan promosi</Bullet>
          <Bullet>Lingkungan tenang untuk berpikir jangka panjang</Bullet>
          <Bullet>Hubungan dulu, skala kemudian (jika perlu)</Bullet>
        </ul>

        <Link
          href="/contact"
          className="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
        >
          Mulai percakapan
        </Link>

        <p className="text-xs text-neutral-500 leading-relaxed">
          Ini bukan sinyal, bukan prediksi, dan bukan janji profit.
        </p>
      </div>
    </div>
  );
}

export default function AksesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-12">
      <Reveal>
        <header className="space-y-6">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Akses
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag>Alignment</Tag>
            <Tag>Percakapan</Tag>
            <Tag>Bukti proses</Tag>
            <Tag>Tanpa hype</Tag>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold text-white">
            REZIME bukan produk.  
            Ini lingkungan.
          </h1>

          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            Tujuan REZIME bukan membuat Anda menghasilkan uang.  
            Tujuannya membuat Anda nyaman berada di dunia finansial cukup lama
            hingga intuisi terbentuk.
          </p>

          <p className="max-w-3xl text-sm text-neutral-400 leading-relaxed">
            Orang yang bertahan cukup lama → memahami risiko  
            Memahami risiko → menjadi stabil  
            Stabil → membuat keputusan lebih baik
          </p>

          <div className="flex gap-4 pt-2">
            <Link href="/id/memahami" className="text-neutral-300 hover:text-white">
              Mulai dari Memahami →
            </Link>
            <Link href="/id/penerapan" className="text-neutral-300 hover:text-white">
              Lihat Penerapan →
            </Link>
          </div>
        </header>
      </Reveal>

      <Reveal delayMs={80}>
        <section className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Mengapa akses dibatasi">
            <ul className="space-y-2">
              <Bullet>Meningkatkan kualitas interaksi</Bullet>
              <Bullet>Mencegah ekspektasi tidak realistis</Bullet>
              <Bullet>Membangun jaringan jangka panjang</Bullet>
              <Bullet>Mengurangi noise publik</Bullet>
            </ul>
          </InfoCard>

          <InfoCard title="Arah jangka panjang">
            <ul className="space-y-2">
              <Bullet>Jaringan → jaringan modal → fund</Bullet>
              <Bullet>Produk profesional opsional</Bullet>
              <Bullet>REZIME sebagai framework pengambil keputusan</Bullet>
            </ul>
          </InfoCard>
        </section>
      </Reveal>

      <Reveal delayMs={140}>
        <section className="grid md:grid-cols-3">
          <div className="md:col-start-2">
            <AccessCard />
          </div>
        </section>
      </Reveal>
    </main>
  );
}