// app/orientation/page.tsx
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

/* ---------------------------------- PAGE ---------------------------------- */

export default function OrientationPage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Introduction
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag>Survival-first</Tag>
            <Tag>Calm by design</Tag>
            <Tag>Not signals</Tag>
            <Tag>Conversation-friendly</Tag>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl text-white">
            Markets feel intense
            <br />
            because feedback is instant.
          </h1>

          <div className="max-w-3xl space-y-3 text-sm text-neutral-300 leading-relaxed">
            <p>
              Most people do not fail because they are unintelligent.
              They fail because consequences arrive faster than understanding can form.
            </p>
            <p>
              REZIME is a simple lens:{" "}
              <span className="text-neutral-200">
                label the condition first
              </span>
              , then decide how active you deserve to be.
            </p>
            <p className="text-neutral-400">
              This site exists for one purpose: make markets slower to learn, so
              experience can accumulate without one mistake ending the journey.
            </p>
          </div>

          {/* Networking intent block */}
          <div className="calm-block rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-semibold text-white">
              What this site is (and why it exists)
            </p>
            <div className="mt-2 space-y-2 text-sm text-neutral-300 leading-relaxed">
              <p>
                A public, time-stamped record of how I think about markets.
                No hype, no conversion, no “guru” posture.
              </p>
              <p className="text-neutral-400">
                If this lens matches how you think, I would actually love to
                talk. This is meant to be a networking tool, not a product page.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/en/contact"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Reach out →
              </Link>

              <Link
                href="/en/application"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-neutral-200 transition hover:bg-white/10"
              >
                See the public record →
              </Link>

              <span className="text-xs text-neutral-500">
                Educational only. Not financial advice.
              </span>
            </div>
          </div>

          {/* Jump to */}
          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
              <span className="text-neutral-300">Jump to:</span>
              <JumpPill href="#movement" label="Movement" />
              <JumpPill href="#headlines" label="Headlines" />
              <JumpPill href="#mismatch" label="Mismatch" />
              <JumpPill href="#rezime" label="What REZIME is" />
              <JumpPill href="#who" label="Who this is for" />
            </div>
          </div>
        </section>
      </Reveal>

      {/* MOVEMENT */}
      <Reveal delayMs={80}>
        <section id="movement" className="space-y-5">
          <SectionHeader
            eyebrow="Context"
            title="You already understand price movement"
            subtitle="Prices changing is normal. What feels scary is not movement. It's uncertainty about what to do during change."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="Daily goods"
              desc="Supply, demand, and seasons move prices. You already accept this as reality."
            />
            <Card
              title="Tickets and travel"
              desc="Demand spikes increase price. Discounts appear when demand fades."
            />
            <Card
              tone="hard"
              title="Games and items"
              desc="Scarcity changes value quickly. Players adapt behavior, not just beliefs."
            />
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-neutral-300 leading-relaxed">
            Markets are the same phenomenon, just faster and louder.
            REZIME exists to add a missing layer:{" "}
            <span className="text-neutral-200">posture</span>.
          </div>
        </section>
      </Reveal>

      {/* HEADLINES */}
      <Reveal delayMs={160}>
        <section id="headlines" className="space-y-5">
          <SectionHeader
            eyebrow="Perception"
            title="Why headlines feel overwhelming"
            subtitle="Emotion travels faster than information. Urgency is contagious."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            <Card
              title="What it feels like"
              desc="Something is wrong. I need to act immediately, before it's too late."
            />
            <Card
              tone="hard"
              title="What it often is"
              desc="The condition changed quickly. Your confidence should change with it."
            />
          </div>

          <div className="text-sm text-neutral-300 leading-relaxed max-w-3xl">
            The goal is not “ignore news.”
            The goal is remove forced urgency so your actions match reality.
          </div>
        </section>
      </Reveal>

      {/* MISMATCH */}
      <Reveal delayMs={240}>
        <section id="mismatch" className="space-y-5">
          <SectionHeader
            eyebrow="Core risk"
            title="Most damage comes from mismatch"
            subtitle="People get hurt when their activity level is higher than the market condition deserves."
          />

          <RuleTiles
            title="Posture rules"
            subtitle="These are survival rules, not tactics. The goal is to protect learning time."
            rules={[
              {
                title: "Confusion means reduce activity",
                desc: "Low clarity = higher error rate. Preserve capital and attention.",
                tone: "hard",
              },
              {
                title: "Urgency creates mistakes",
                desc: "Speed increases slippage, bad entries, and emotional decisions.",
              },
              {
                title: "Doing less is a skill",
                desc: "Restraint is what keeps you in the game long enough to develop intuition.",
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
            eyebrow="What REZIME is"
            title="A condition label"
            subtitle="Not a system that tells you what to buy. A lens that tells you when decisions deserve confidence."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card tone="hard" title="Stable" desc="Time works in your favor. Actions have room to play out." />
            <Card title="Unstable" desc="Reduce activity and expectations. Protect capital and attention." />
            <Card tone="hard" title="Reset" desc="Pause. Rebuild context. Let the condition reveal itself." />
          </div>

          <div className="calm-block rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              The point
            </p>
            <p className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Survival precedes profit.
              <br />
              Profit is a byproduct of stability.
            </p>
            <p className="mt-3 text-sm text-neutral-300 leading-relaxed max-w-3xl">
              If you can stay in the game long enough, you get something rare:
              real pattern recognition. Most people quit before that.
            </p>
          </div>
        </section>
      </Reveal>

      {/* WHO THIS IS FOR */}
      <Reveal delayMs={380}>
        <section id="who" className="space-y-5">
          <SectionHeader
            eyebrow="Fit"
            title="Who this is for"
            subtitle="REZIME is built for people who want a stable relationship with markets, not a dopamine loop."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="Professionals & operators"
              desc="People making long-term decisions who want markets to feel less chaotic."
              note="If your job requires judgment, this lens will feel familiar."
            />
            <Card
              title="Beginners"
              desc="People entering markets who want to avoid early damage and build confidence properly."
              note="A slower start is not weakness. It is design."
            />
            <Card
              tone="hard"
              title="Builders & investors"
              desc="People who care about process, documentation, and reality-based decision making."
              note="If you like systems more than stories, you’ll fit."
            />
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-neutral-300 leading-relaxed">
            If you are looking for “what to buy today,” you will likely be bored here.
            <br />
            If you want a lens that reduces avoidable mistakes, you will probably resonate.
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal delayMs={460}>
        <section className="scroll-mt-28">
          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">
                  Next: Framework
                </p>
                <p className="text-xs text-neutral-400">
                  See how the conditions are labeled, and how posture follows.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/en/framework"
                  className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
                >
                  <Sheen className="rounded-full" />
                  Enter Framework →
                </Link>

                <Link
                  href="/en/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-neutral-200 transition hover:bg-white/10"
                >
                  Contact →
                </Link>
              </div>
            </div>

            <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
              Educational framework only. Not financial advice. No signals. No predictions. No guarantees.
            </p>
          </div>
        </section>
      </Reveal>
    </div>
  );
}