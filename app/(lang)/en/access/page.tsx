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
          Phase 1 — Trust Network
        </p>

        <h3 className="text-base font-semibold text-white">
          Entry is by conversation
        </h3>

        <p className="text-sm text-neutral-300 leading-relaxed">
          REZIME is not an open subscription right now. Access is granted through
          conversation and alignment of mindset.
        </p>

        <ul className="space-y-2 text-sm text-neutral-300">
          <Bullet>Alignment density over user count</Bullet>
          <Bullet>Portfolio Lab as timestamped proof (not hype)</Bullet>
          <Bullet>Calm, long-term decision culture</Bullet>
          <Bullet>Relationships first, scale later (if needed)</Bullet>
        </ul>

        <Link
          href="/contact"
          className="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
        >
          Start a conversation
        </Link>

        <p className="text-xs text-neutral-500 leading-relaxed">
          Educational framework only. Not financial advice. No signals. No
          predictions. No guarantees.
        </p>
      </div>
    </div>
  );
}

export default function AccessPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-12">
      <Reveal>
        <header className="space-y-6">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Access
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag>Conversation-gated</Tag>
            <Tag>Alignment first</Tag>
            <Tag>Proof over hype</Tag>
            <Tag>Calm by design</Tag>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold text-white">
            REZIME is not a product. It is an environment.
          </h1>

          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            REZIME is not positioned as a trading tool or content product. It is
            a baseline participation framework that helps people stay in markets
            safely long enough to develop intuition and financial stability.
          </p>

          <p className="max-w-3xl text-sm text-neutral-400 leading-relaxed">
            Stay long enough → understand risk → become stable → make better
            decisions.
          </p>

          <div className="flex gap-4 pt-2">
            <Link
              href="/en/introduction"
              className="text-neutral-300 hover:text-white"
            >
              Start with Introduction →
            </Link>
            <Link
              href="/en/application"
              className="text-neutral-300 hover:text-white"
            >
              See Application →
            </Link>
          </div>
        </header>
      </Reveal>

      <Reveal delayMs={80}>
        <section className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Why access is gated">
            <ul className="space-y-2">
              <Bullet>Higher quality conversations</Bullet>
              <Bullet>Prevents unrealistic expectations</Bullet>
              <Bullet>Builds long-term counterparties</Bullet>
              <Bullet>Protects signal-to-noise</Bullet>
            </ul>
          </InfoCard>

          <InfoCard title="Long-term direction">
            <ul className="space-y-2">
              <Bullet>Trust network → capital network → fund formation</Bullet>
              <Bullet>Optional professional product layer</Bullet>
              <Bullet>REZIME as a decision framework for operators</Bullet>
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