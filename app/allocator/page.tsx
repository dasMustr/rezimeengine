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
            Portfolio Lab
          </p>

          <div className="flex flex-wrap gap-2">
            <Pill>Time-stamped record</Pill>
            <Pill>Risk-first</Pill>
            <Pill>Behavior over prediction</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            A weekly record of regime context and exposure posture.
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
            This is not a performance showcase.
            <br />
            <br />
            Portfolio Lab documents the regime, the posture taken, and the
            reasoning week by week. The goal is simple: reduce self-inflicted
            damage first. Let time do the rest.
            <br />
            <br />
            Educational documentation only. No signals. No financial advice.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/operator"
              className="premium-card is-clickable rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
            >
              ← Playbook
            </Link>

            <a
              href={PORTFOLIO_LAB_URL}
              target="_blank"
              rel="noreferrer"
              className="premium-card is-clickable rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
            >
              Open Portfolio Lab →
            </a>
          </div>
        </section>
      </Reveal>

      {/* WHY THIS EXISTS */}
      <Reveal delayMs={80}>
        <Section
          id="why"
          eyebrow="Purpose"
          title="Why Portfolio Lab exists"
          subtitle="Because most trading damage comes from behavior, not tools."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              title="What is documented"
              desc="Regime, posture decisions, and decision rationale."
              rows={[
                { k: "Focus", v: "Regime awareness" },
                { k: "Output", v: "Exposure posture" },
                { k: "Style", v: "Low-noise documentation" },
              ]}
            />
            <Card
              title="What is intentionally excluded"
              desc="This is not marketing-by-outcome."
              rows={[
                { k: "Excluded", v: "Entry and exit alerts" },
                { k: "Excluded", v: "Prediction claims" },
                { k: "Excluded", v: "Selective performance screenshots" },
              ]}
            />
            <Card
              title="Core idea"
              desc="Reduce avoidable losses first. Let time do the rest."
              rows={[
                { k: "Step 1", v: "Avoid phase mismatch" },
                { k: "Step 2", v: "Stay aligned with regime" },
                { k: "Step 3", v: "Let craft compound" },
              ]}
            />
          </div>
        </Section>
      </Reveal>

      {/* WEEKLY PLACEHOLDER */}
      <Reveal delayMs={120}>
        <Section
          id="weekly"
          eyebrow="Ongoing"
          title="Weekly performance placeholder"
          subtitle="Week 2 is in progress. The archive lives in Notion."
        >
          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">
                  Week 1 is posted. Week 2 is ongoing.
                </p>
                <p className="mt-1 text-sm text-neutral-300 leading-relaxed">
                  If you want the week-on-week record, it is all inside Portfolio Lab.
                </p>
              </div>

              <a
                href={PORTFOLIO_LAB_URL}
                target="_blank"
                rel="noreferrer"
                className="premium-card is-clickable inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
              >
                View week-on-week →{" "}
              </a>
            </div>
          </div>
        </Section>
      </Reveal>

      {/* PORTFOLIO LAB LINK */}
      <Reveal delayMs={160}>
        <Section
          id="portfolio"
          eyebrow="Deep archive"
          title="Full Portfolio Lab"
          subtitle="All weekly snapshots live here."
        >
          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-neutral-300">
                Holdings, regime notes, posture changes, and weekly deltas.
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
