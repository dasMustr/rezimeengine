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
  tone = "soft",
  children,
}: {
  title: string;
  tone?: "soft" | "hard";
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        "calm-block rounded-2xl border p-6",
        tone === "hard"
          ? "border-white/10 bg-black/30"
          : "border-white/10 bg-white/5",
      ].join(" ")}
    >
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
  const features = [
    "Conversation-gated entry (no open subscription by default)",
    "A calm framework for staying in markets long enough to learn risk",
    "Timestamped Portfolio Lab as proof-of-process (not hype marketing)",
    "Reading rules and posture cues (slow down in instability, reset cleanly)",
    "Selective access keeps alignment density high",
  ];

  return (
    <div className="premium-card relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6">
      <Sheen className="rounded-2xl" />

      <div className="flex h-full flex-col">
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
            Access (Phase 1)
          </p>
          <h3 className="text-base font-semibold text-white">
            Entry is by conversation
          </h3>
          <p className="text-sm text-neutral-400">
            REZIME is currently used as a filter for alignment. If the mindset
            matches, access is granted.
          </p>
          <p className="text-xs text-neutral-300/80">
            Money is not the goal. Alignment density is the goal.
          </p>
        </div>

        <ul className="mt-5 space-y-2 text-sm text-neutral-300 leading-relaxed">
          {features.map((f) => (
            <Bullet key={f}>{f}</Bullet>
          ))}
        </ul>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Optional later
          </p>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            When infrastructure is ready (payment + maturity), a small paid layer
            (~$20) may exist for people who prefer self-serve access. Early
            aligned users keep privileged access.
          </p>
        </div>

        <div className="mt-auto pt-6 space-y-3">
          <Link
            href="/contact"
            className={[
              "inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition",
              "bg-white text-black hover:opacity-90",
            ].join(" ")}
          >
            Request access (start a conversation)
          </Link>

          <p className="text-xs text-neutral-500 leading-relaxed">
            Educational framework only. Not financial advice. No signals. No
            predictions. No guarantees.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AccessPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-12">
      <Reveal delayMs={0}>
        <header className="space-y-6">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Akses
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag>Conversation-gated</Tag>
            <Tag>Alignment first</Tag>
            <Tag>Portfolio Lab proof</Tag>
            <Tag>Calm by design</Tag>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Access is not a checkout button.
          </h1>

          <div className="space-y-3">
            <p className="max-w-3xl text-sm sm:text-base text-neutral-300 leading-relaxed">
              REZIME is not positioned as a trading tool or content product.
              It is a baseline participation framework that helps people spend
              time in markets safely long enough to develop intuition and
              financial stability.
            </p>
            <p className="max-w-3xl text-sm text-neutral-400 leading-relaxed">
              The purpose is comfort in the financial world. Not performance.
              Not profit. Not signals.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/id/memahami"
              className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
            >
              <Sheen className="rounded-full" />
              Start with Memahami →
            </Link>

            <Link
              href="/id/kerangka"
              className="self-center text-sm text-neutral-400 hover:text-white transition"
            >
              Read Kerangka →
            </Link>

            <Link
              href="/id/penerapan"
              className="self-center text-sm text-neutral-400 hover:text-white transition"
            >
              See Penerapan →
            </Link>
          </div>

          <p className="text-xs text-neutral-500 leading-relaxed">
            Phase 1 is intentionally small: trust network first, scale later (if
            needed).
          </p>
        </header>
      </Reveal>

      <Reveal delayMs={70}>
        <section className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Why access is gated" tone="soft">
            <ul className="space-y-2">
              <Bullet>
                REZIME is used as a filter for mindset alignment
              </Bullet>
              <Bullet>
                We prioritize signal-to-noise over growth
              </Bullet>
              <Bullet>
                Conversations create trust and long-term counterparties
              </Bullet>
              <Bullet>
                The Portfolio Lab stays timestamped and reality-based
              </Bullet>
            </ul>
          </InfoCard>

          <InfoCard title="What we are building toward" tone="hard">
            <ul className="space-y-2">
              <Bullet>
                A trust network → capital network → Indonesian fund formation
              </Bullet>
              <Bullet>
                Optional premium product layer for professionals
              </Bullet>
              <Bullet>
                REZIME becomes “the framework fund managers use”
              </Bullet>
              <Bullet>
                Calm explanations, no aggressive marketing
              </Bullet>
            </ul>
          </InfoCard>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="grid gap-4 md:grid-cols-3 items-stretch">
          <div className="md:col-start-2">
            <AccessCard />
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={170}>
        <section className="text-xs text-neutral-500 leading-relaxed space-y-2">
          <p>
            By using this site, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-white">
              Terms of Use
            </Link>
            , and{" "}
            <Link href="/privacy" className="underline hover:text-white">
              Privacy Policy
            </Link>
            .
          </p>
          <p>
            If you are new, start with{" "}
            <Link href="/id/memahami" className="underline hover:text-white">
              Memahami
            </Link>{" "}
            first.
          </p>
        </section>
      </Reveal>
    </main>
  );
}