import React from "react";
import Link from "next/link";
import Reveal from "../components/Reveal";
import Section from "../components/Section";

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

export default function AllocatorPage() {
  return (
    <div className="space-y-14">

      {/* HERO */}
      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Record
          </p>

          <div className="flex flex-wrap gap-2">
            <Pill>Time in markets</Pill>
            <Pill>Posture archive</Pill>
            <Pill>Behavior over outcome</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Experience cannot be claimed.
            <br className="hidden sm:block" />
            It has to be logged.
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
            Portfolio Lab is a week-by-week record of how exposure was handled
            under different conditions.
            <br />
            <br />
            Not a scoreboard. Not a prediction feed.
            A learning record.
          </p>

          <p className="max-w-3xl text-xs text-neutral-500">
            Educational documentation only. No advice. No signals.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/operator"
              className="premium-card is-clickable rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
            >
              ← Framework
            </Link>

            <a
              href={PORTFOLIO_LAB_URL}
              target="_blank"
              rel="noreferrer"
              className="premium-card is-clickable rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
            >
              Open record →
            </a>
          </div>
        </section>
      </Reveal>

      {/* WHAT THIS PAGE PROVES */}
      <Reveal delayMs={80}>
        <Section
          id="proof"
          eyebrow="Purpose"
          title="What this page proves"
          subtitle="Understanding grows from exposure handled over time."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              title="What is tracked"
              desc="The context surrounding decisions."
              rows={[
                { k: "Regime", v: "What conditions existed" },
                { k: "Posture", v: "How exposure was handled" },
                { k: "Reasoning", v: "Why that posture was chosen" },
              ]}
            />

            <Card
              title="What is not tracked"
              desc="Because this is not a signal service."
              rows={[
                { k: "No alerts", v: "No entry or exit calls" },
                { k: "No hindsight", v: "No selective screenshots" },
                { k: "No claims", v: "No prediction marketing" },
              ]}
            />

            <Card
              title="Why this matters"
              desc="Skill forms from repetition under feedback."
              rows={[
                { k: "Step 1", v: "Avoid damage" },
                { k: "Step 2", v: "Stay consistent" },
                { k: "Step 3", v: "Let intuition form" },
              ]}
            />
          </div>
        </Section>
      </Reveal>

      {/* HOW TO READ */}
      <Reveal delayMs={120}>
        <Section
          id="reading"
          eyebrow="How to read it"
          title="Do not read this like performance"
          subtitle="Read it like a flight log."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <Card
              title="Wrong question"
              desc="Did it go up or down?"
              rows={[
                { k: "Focus", v: "Outcome" },
                { k: "Result", v: "Short-term judgment" },
                { k: "Problem", v: "Teaches nothing repeatable" },
              ]}
            />
            <Card
              title="Correct question"
              desc="Was behavior matched to conditions?"
              rows={[
                { k: "Focus", v: "Decision quality" },
                { k: "Result", v: "Repeatable learning" },
                { k: "Benefit", v: "Intuition formation" },
              ]}
            />
          </div>
        </Section>
      </Reveal>

      {/* ACCESS */}
      <Reveal delayMs={160}>
        <Section
          id="archive"
          eyebrow="Archive"
          title="Full Portfolio Lab"
          subtitle="All weekly logs live in the external record."
        >
          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-neutral-300">
                Week-by-week snapshots, posture changes, and regime notes.
              </p>
            </div>
            <a
              href={PORTFOLIO_LAB_URL}
              target="_blank"
              rel="noreferrer"
              className="premium-card is-clickable rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
            >
              Open Portfolio Lab →
            </a>
          </div>
        </Section>
      </Reveal>

    </div>
  );
}
