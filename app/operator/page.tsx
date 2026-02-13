// app/operator/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { RuleTiles } from "../components/VisualBlocks";

/* ------------------------------------------------------------------ */
/* Small Components (unchanged structure) */
/* ------------------------------------------------------------------ */

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
      {children}
    </span>
  );
}

function MiniCard({
  title,
  desc,
  tone = "soft",
}: {
  title: string;
  desc: string;
  tone?: "soft" | "hard";
}) {
  return (
    <div
      className={
        tone === "hard"
          ? "calm-block rounded-2xl border border-white/15 bg-white/10 p-6"
          : "calm-block rounded-2xl border border-white/10 bg-black/30 p-6"
      }
    >
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{desc}</p>
    </div>
  );
}

function CaseImage({
  src,
  alt,
  label,
  caption,
  priority = false,
  dateRange,
}: {
  src: string;
  alt: string;
  label: string;
  caption: string;
  priority?: boolean;
  dateRange?: string;
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white">
          {label}
        </span>
        {dateRange && (
          <span className="text-[11px] uppercase tracking-widest text-neutral-500">
            {dateRange}
          </span>
        )}
      </div>

      <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-black/40">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover"
          />
        </div>
      </div>

      <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
        {caption}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main Page */
/* ------------------------------------------------------------------ */

export default function OperatorPage() {
  return (
    <div className="space-y-20">

      {/* ------------------------------------------------------------ */}
      {/* HERO */}
      {/* ------------------------------------------------------------ */}

      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            How
          </p>

          <div className="flex flex-wrap gap-2">
            <Pill>Regime-first</Pill>
            <Pill>Map, not signals</Pill>
            <Pill>Method-neutral</Pill>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Two Empires.
            <br className="hidden sm:block" /> One regime at a time.
          </h1>

          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            Markets are a perpetual contest between the{" "}
            <span className="text-white font-semibold">Bull Empire</span> and the{" "}
            <span className="text-white font-semibold">Bear Empire</span>.
            <br />
            <br />
            REZIME labels the current <span className="text-white font-semibold">regime</span>.
            Yellow marks conflict inside the regime.
            Red marks regime reset.
          </p>
        </section>
      </Reveal>

      {/* ============================================================ */}
      {/* LEVEL 1 — SURVIVAL */}
      {/* ============================================================ */}

      <Reveal delayMs={60}>
        <section className="space-y-6">
          <div className="calm-block rounded-3xl border border-white/15 bg-white/[0.06] p-8 sm:p-10">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Level 1
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white">
              Survival — Time in the Market
            </h2>

            <p className="mt-4 max-w-3xl text-sm text-neutral-300 leading-relaxed">
              To survive, you only need one timeframe.
              <br />
              <br />
              Identify which Empire controls the regime.
              Identify if it is Yellow.
              Identify if it is Red.
              <br />
              <br />
              That alone prevents most avoidable damage.
            </p>

            <div className="mt-6 grid gap-4 lg:grid-cols-4">
              <MiniCard
                tone="hard"
                title="Bull Empire"
                desc="Buyers control the regime. Apply your method normally."
              />
              <MiniCard
                title="Bear Empire"
                desc="Sellers control the regime. Apply your method normally."
              />
              <MiniCard
                title="Yellow (Conflict)"
                desc="Regime instability. Reduce exposure and reduce decisions."
              />
              <MiniCard
                tone="hard"
                title="Red (Revolution)"
                desc="Regime reset. Pause and reconsider your prior thesis."
              />
            </div>

            <p className="mt-6 text-sm text-neutral-300 leading-relaxed">
              Survival does not require timing.
              Survival requires discipline.
            </p>
          </div>
        </section>
      </Reveal>

      {/* ============================================================ */}
      {/* LEVEL 2 — TIMING */}
      {/* ============================================================ */}

      <Reveal delayMs={120}>
        <section className="space-y-6">
          <div className="calm-block rounded-3xl border border-white/10 bg-black/30 p-8 sm:p-10">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Level 2
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white">
              Timing — Multi-Timeframe Progression
            </h2>

            <p className="mt-4 max-w-3xl text-sm text-neutral-300 leading-relaxed">
              Revolutions are not random.
              They build.
              <br />
              <br />
              Regime escalation typically follows this structure:
            </p>

            <div className="mt-6 text-sm text-neutral-300 leading-relaxed space-y-2">
              <p>Tension → Uprising → Deadlock → Rebellion → Siege → Revolution</p>
            </div>

            <p className="mt-6 text-sm text-neutral-300 leading-relaxed">
              LTF instability can grow into MTF conflict.
              MTF conflict can escalate into HTF regime shift.
              <br />
              <br />
              This layer is advanced.
              It improves precision.
              It is not required for survival.
            </p>

            <p className="mt-6 text-sm text-neutral-300 leading-relaxed">
              First survive.
              Then build intuition.
              Then timing becomes possible.
              Profit is a byproduct of survival mastery.
            </p>
          </div>
        </section>
      </Reveal>

      {/* ============================================================ */}
      {/* GOOG WALKTHROUGH */}
      {/* ============================================================ */}

      <Reveal delayMs={180}>
        <Section
          id="example"
          eyebrow="Example"
          title="GOOG walkthrough"
          subtitle="Avoid hostile regimes. Re-engage when control shifts."
        >
          <div className="grid gap-6">
            <CaseImage
              src="/playbook/engine-strip.png"
              alt="Baseline regime"
              label="Baseline regime context"
              dateRange="Apr 2022–Apr 2024 (approx.)"
              priority
              caption="Engine classifies which Empire controls the regime before decisions begin."
            />

            <CaseImage
              src="/playbook/sync-bear-revolution.png"
              alt="Bear Empire regime"
              label="Bear Empire regime"
              dateRange="Apr 2022 (approx.)"
              caption="Bear Empire controls the regime. Bullish thesis belongs to the wrong Empire until reset occurs."
            />

            <CaseImage
              src="/playbook/sync-bull-revolution.png"
              alt="Regime transition"
              label="Revolution — reset"
              dateRange="May 2023 (approx.)"
              caption="HTF Revolution resets regime control. Prior assumptions must be reconsidered."
            />

            <CaseImage
              src="/playbook/sync-bull-alignment.png"
              alt="Alignment"
              label="Alignment returns"
              dateRange="Apr 2024 onward (approx.)"
              caption="Alignment across timeframes produces cleaner regime behavior."
            />
          </div>
        </Section>
      </Reveal>

      {/* CTA */}

      <Reveal delayMs={240}>
        <section className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                See it documented over time
              </p>
              <p className="text-xs text-neutral-400">
                Portfolio Lab records regime shifts and posture decisions.
              </p>
            </div>

            <Link
              href="/allocator"
              className="premium-card is-clickable inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
            >
              Enter Portfolio Lab →
            </Link>
          </div>
        </section>
      </Reveal>

    </div>
  );
}
