// app/operator/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { RuleTiles } from "../components/VisualBlocks";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
      {children}
    </span>
  );
}

function ToolCard({
  title,
  subtitle,
  bullets,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
        {subtitle}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-neutral-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/60" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
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
  dateRange,
  priority = false,
}: {
  src: string;
  alt: string;
  label: string;
  caption: string;
  dateRange?: string;
  priority?: boolean;
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

function Takeaway({
  title,
  lines,
  tone = "soft",
}: {
  title: string;
  lines: string[];
  tone?: "soft" | "hard";
}) {
  return (
    <div
      className={
        tone === "hard"
          ? "calm-block rounded-2xl border border-white/15 bg-white/10 p-5"
          : "calm-block rounded-2xl border border-white/10 bg-white/5 p-5"
      }
    >
      <p className="text-xs uppercase tracking-widest text-neutral-400">
        {title}
      </p>
      <ul className="mt-3 space-y-2 text-sm text-neutral-300">
        {lines.map((l) => (
          <li key={l} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/60" />
            <span>{l}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function OperatorPage() {
  return (
    <div className="space-y-20">
      {/* HERO */}
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
            <br />
            One regime at a time.
          </h1>

          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            Markets are a perpetual contest between the{" "}
            <span className="text-white font-semibold">Bull Empire</span> and the{" "}
            <span className="text-white font-semibold">Bear Empire</span>.
            <br />
            <br />
            REZIME labels the current <span className="text-white font-semibold">regime</span>.
            Yellow marks conflict. Red marks reset.
          </p>
        </section>
      </Reveal>

      {/* POSTURE RULES */}
      <Reveal delayMs={40}>
        <Section
          eyebrow="Start simple"
          title="Posture rules"
          subtitle="Respect the regime before anything else."
        >
          <div className="grid gap-4 lg:grid-cols-4">
            <MiniCard
              tone="hard"
              title="Bull Empire"
              desc="Bull Empire controls the regime. Baseline upward thesis."
            />
            <MiniCard
              title="Bear Empire"
              desc="Bear Empire controls the regime. Baseline downward thesis."
            />
            <MiniCard
              title="Siege"
              desc="Conflict inside the regime. Shrink exposure and shrink decision frequency."
            />
            <MiniCard
              tone="hard"
              title="Revolution"
              desc="Regime reset. Reconsider your prior Empire thesis."
            />
          </div>
        </Section>
      </Reveal>

      {/* TIMEFRAME LANGUAGE */}
      <Reveal delayMs={80}>
        <Section
          eyebrow="Sync"
          title="Timeframe language"
          subtitle="Regime escalation builds upward."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <MiniCard
              tone="hard"
              title="HTF"
              desc="Yellow = Siege. Red = Revolution. This is the primary regime story."
            />
            <MiniCard
              title="MTF"
              desc="Yellow = Deadlock. Red = Rebellion."
            />
            <MiniCard
              tone="hard"
              title="LTF"
              desc="Yellow = Tension. Red = Uprising."
            />
          </div>

          <p className="mt-6 text-sm text-neutral-300 leading-relaxed">
            Major shifts rarely appear instantly on the highest timeframe.
            They often escalate upward:
            <br />
            Tension → Deadlock → Siege → Revolution.
            <br />
            <br />
            If HTF prints Revolution, the regime has reset.
            Rebuild context before acting.
          </p>
        </Section>
      </Reveal>

      {/* STACK */}
      <Reveal delayMs={120}>
        <Section
          eyebrow="The Stack"
          title="Three tools. Three questions."
          subtitle="Minimal overlap. Clear roles."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <ToolCard
              title="Engine"
              subtitle="Which Empire controls the regime?"
              bullets={[
                "Bull vs Bear dominance",
                "Pressure vs stability",
                "Revolution confirms control transition",
              ]}
            />
            <ToolCard
              title="Sync"
              subtitle="Is escalation building?"
              bullets={[
                "Alignment vs conflict",
                "Regime shifts build upward",
                "Conflict reduces confidence",
              ]}
            />
            <ToolCard
              title="Battle Lines"
              subtitle="Is terrain tight or wide?"
              bullets={[
                "Compression vs runway",
                "Wide walls favor holding",
                "Tight walls increase difficulty",
              ]}
            />
          </div>
        </Section>
      </Reveal>

      {/* GOOG WALKTHROUGH */}
      <Reveal delayMs={160}>
        <Section
          eyebrow="Example"
          title="GOOG — Regime life cycle"
          subtitle="Avoid hostile regimes. Re-engage when alignment returns."
        >
          <div className="grid gap-6">
            <CaseImage
              src="/playbook/engine-strip.png"
              alt="Baseline regime"
              label="Baseline context"
              dateRange="Apr 2022–Apr 2024"
              priority
              caption="Engine classifies which Empire controls the regime before decisions begin."
            />

            <Takeaway
              title="Key takeaway"
              tone="hard"
              lines={[
                "REZIME is a regime filter first.",
                "Posture must match Empire control.",
              ]}
            />

            <CaseImage
              src="/playbook/sync-bear-revolution.png"
              alt="Bear Empire"
              label="Bear Empire regime"
              dateRange="Apr 2022"
              caption="Bear Empire holds structural control. Bullish thesis belongs to the wrong Empire."
            />

            <Takeaway
              title="Defense posture"
              lines={[
                "Shrink exposure.",
                "Reduce decisions.",
                "Do not force optimism inside Bear regime structure.",
              ]}
            />

            <CaseImage
              src="/playbook/sync-bull-revolution.png"
              alt="Regime transition"
              label="Revolution — reset"
              dateRange="May 2023"
              caption="Regime resets. Bull Empire regains structural control."
            />

            <Takeaway
              title="Translation"
              tone="hard"
              lines={[
                "You do not need to predict the bottom.",
                "Wait for the regime to become structurally valid again.",
              ]}
            />

            <CaseImage
              src="/playbook/sync-bull-alignment.png"
              alt="Alignment"
              label="Full alignment"
              dateRange="Apr 2024 onward"
              caption="Alignment across timeframes produces cleaner holding conditions."
            />

            <Takeaway
              title="Holding posture"
              lines={[
                "Do less.",
                "Let regime alignment carry momentum.",
              ]}
            />
          </div>
        </Section>
      </Reveal>

      {/* CTA */}
      <Reveal delayMs={200}>
        <section className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                See it applied over time
              </p>
              <p className="text-xs text-neutral-400">
                Portfolio Lab documents regime shifts across cycles.
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
