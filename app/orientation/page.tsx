// app/orientation/page.tsx
import React from "react";
import Link from "next/link";
import Reveal from "../components/Reveal";
import Sheen from "../components/Sheen";
import Image from "next/image";
import { RuleTiles } from "../components/VisualBlocks";

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
            Why
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag>Beginner-safe</Tag>
            <Tag>Calm learning</Tag>
            <Tag>No pressure</Tag>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl text-white">
            If markets feel intimidating,
            <br />
            that is normal.
          </h1>

          <div className="max-w-3xl space-y-3 text-sm text-neutral-300 leading-relaxed">
            <p>
              Markets are one of the only places where feedback is immediate.
              Actions have consequences before understanding has time to form.
            </p>
            <p>
              The fear does not come from complexity.  
              It comes from consequence speed.
            </p>
            <p>
              This page exists to slow that down so experience can accumulate
              safely.
            </p>
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
              <span className="text-neutral-300">Jump to:</span>
              <JumpPill href="#movement" label="Movement" />
              <JumpPill href="#headlines" label="Headlines" />
              <JumpPill href="#mismatch" label="Mismatch" />
              <JumpPill href="#rezime" label="What REZIME is" />
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
            subtitle="Prices changing is not unusual. You see it everywhere."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="Daily goods"
              desc="Food and necessities change price based on supply and demand."
            />
            <Card
              title="Tickets and travel"
              desc="High demand increases price. Low demand discounts it."
            />
            <Card
              tone="hard"
              title="Games and items"
              desc="Scarcity changes value quickly. Players adapt."
            />
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-neutral-300">
            Movement is not the scary part.  
            The uncertainty of how to behave during change is.
          </div>
        </section>
      </Reveal>

      {/* HEADLINES */}
      <Reveal delayMs={160}>
        <section id="headlines" className="space-y-5">
          <SectionHeader
            eyebrow="Perception"
            title="Why headlines feel overwhelming"
            subtitle="Emotion travels faster than information."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            <Card
              title="What it feels like"
              desc="Something is wrong. I need to act immediately."
            />
            <Card
              tone="hard"
              title="What it actually is"
              desc="Prices changed quickly. The condition changed."
            />
          </div>

          <p className="text-xs text-neutral-500">
            The goal is not ignoring news. The goal is removing urgency.
          </p>
        </section>
      </Reveal>

      {/* MISMATCH */}
      <Reveal delayMs={240}>
        <section id="mismatch" className="space-y-5">
          <SectionHeader
            eyebrow="Core risk"
            title="Most damage comes from mismatch"
            subtitle="Being active in unstable conditions causes avoidable mistakes."
          />

          <RuleTiles
            title="Remember"
            subtitle="These are posture rules, not tactics."
            rules={[
              {
                title: "Confusion means reduce activity",
                desc: "Clarity is low. Decisions worsen outcomes.",
                tone: "hard",
              },
              {
                title: "Urgency creates mistakes",
                desc: "Speed increases error rate.",
              },
              {
                title: "Doing less is a skill",
                desc: "Restraint protects learning time.",
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
            subtitle="It does not tell you what to do. It helps you decide when decisions deserve confidence."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="Stable"
              desc="Actions have time to work."
            />
            <Card
              title="Unstable"
              desc="Reduce activity and expectations."
            />
            <Card
              tone="hard"
              title="Reset"
              desc="Pause and rebuild context."
            />
          </div>

          <div className="calm-block rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              The point
            </p>
            <p className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              The goal is not fast success.
              <br />
              The goal is staying long enough to understand.
            </p>
            <p className="mt-3 text-sm text-neutral-300 leading-relaxed max-w-3xl">
              REZIME exists so experience can accumulate without one mistake
              ending the process.
            </p>
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal delayMs={420}>
        <section className="scroll-mt-28">
          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">
                  Next: Framework
                </p>
                <p className="text-xs text-neutral-400">
                  See how the conditions are labeled.
                </p>
              </div>

              <Link
                href="/operator"
                className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Enter Framework →
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
