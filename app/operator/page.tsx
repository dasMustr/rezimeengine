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

function KeyIdeaBlock({
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
      <p className="text-xs uppercase tracking-widest text-neutral-400">
        {title}
      </p>
      <p className="mt-2 text-sm font-semibold text-white">{subtitle}</p>
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

function StripLegend() {
  const items = [
    {
      name: "Bull Empire",
      note: "Bull Empire controls the regime. Baseline upward control.",
      color: "#22c55e",
    },
    {
      name: "Bear Empire",
      note: "Bear Empire controls the regime. Baseline downward control.",
      color: "#3b82f6",
    },
    {
      name: "Siege (Yellow)",
      note: "Conflict increases. Traps increase. Reduce exposure.",
      color: "#f59e0b",
    },
    {
      name: "Revolution (Red)",
      note: "Confirmed regime reset. Reconsider your prior thesis.",
      color: "#ef4444",
    },
  ];

  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-5">
      <p className="text-xs uppercase tracking-widest text-neutral-400">
        Strip color guide
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {items.map((it) => (
          <div
            key={it.name}
            className="calm-block rounded-xl border border-white/10 bg-black/40 p-4"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-sm border border-white/20"
                style={{ background: it.color }}
              />
              <p className="text-sm font-semibold text-white">{it.name}</p>
            </div>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              {it.note}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-neutral-500">
        Colors classify regime. They are not entry signals.
      </p>
    </div>
  );
}

export default function OperatorPage() {
  return (
    <div className="space-y-16">
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
            Markets are a perpetual battle between the{" "}
            <span className="text-white font-semibold">Bull Empire</span> and the{" "}
            <span className="text-white font-semibold">Bear Empire</span>.
            <br />
            <br />
            REZIME labels the current <span className="text-white font-semibold">regime</span>.
            Yellow means conflict. Red means reset.
          </p>
        </section>
      </Reveal>

      {/* POSTURE RULES */}
      <Reveal delayMs={40}>
        <Section
          id="posture"
          eyebrow="Start simple"
          title="Posture rules"
          subtitle="Respect the regime before anything else."
        >
          <div className="grid gap-4 lg:grid-cols-4">
            <MiniCard
              tone="hard"
              title="Bull Empire"
              desc="Bull Empire is in control. Baseline upward regime."
            />
            <MiniCard
              title="Bear Empire"
              desc="Bear Empire is in control. Baseline downward regime."
            />
            <MiniCard
              title="Siege"
              desc="Conflict increases. Reduce exposure and reduce decisions."
            />
            <MiniCard
              tone="hard"
              title="Revolution"
              desc="Regime reset. Stop and reconsider your prior thesis."
            />
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <KeyIdeaBlock
              title="Beginner anchor"
              subtitle="Red is a reset"
              bullets={[
                "Revolution means the prior regime is no longer reliable.",
                "Do not continue executing a thesis from the previous Empire.",
                "Pause. Rebuild context. Then re-engage gradually.",
              ]}
            />
            <KeyIdeaBlock
              title="Advanced layer"
              subtitle="Revolutions have build-up"
              bullets={[
                "Major regime shifts rarely appear instantly.",
                "They usually escalate across timeframes first.",
                "Tracking build-up is advanced and easy to misuse.",
              ]}
            />
          </div>
        </Section>
      </Reveal>

      {/* TIMEFRAME LANGUAGE */}
      <Reveal delayMs={80}>
        <Section
          id="timeframes"
          eyebrow="Sync"
          title="Timeframe language"
          subtitle="Same colors. Different words. Escalation builds upward."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <MiniCard
              tone="hard"
              title="HTF"
              desc="Yellow = Siege. Red = Revolution. This is the main regime story."
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
            Escalation often flows upward.
            <br />
            Tension → Deadlock → Siege → Revolution.
            <br />
            <br />
            If HTF prints Revolution, the regime has reset.
            Reconsider which Empire you assumed was in control.
          </p>
        </Section>
      </Reveal>

      {/* STRIP LEGEND */}
      <Reveal delayMs={120}>
        <section>
          <StripLegend />
        </section>
      </Reveal>

      {/* STACK */}
      <Reveal delayMs={160}>
        <Section
          eyebrow="Tools"
          title="The Stack"
          subtitle="Three tools. Three questions."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <ToolCard
              title="Engine"
              subtitle="Which Empire controls the regime?"
              bullets={[
                "Bull vs Bear dominance",
                "Stability vs pressure",
                "Revolution confirms transition",
              ]}
            />
            <ToolCard
              title="Sync"
              subtitle="Is escalation building across timeframes?"
              bullets={[
                "Alignment vs conflict",
                "Escalation tends to build upward",
                "Conflict reduces confidence",
              ]}
            />
            <ToolCard
              title="Battle Lines"
              subtitle="Is terrain tight or wide?"
              bullets={[
                "Compression vs runway",
                "Wide walls favor holding",
                "Tight walls increase timing difficulty",
              ]}
            />
          </div>
        </Section>
      </Reveal>

      {/* RULES */}
      <Reveal delayMs={200}>
        <Section
          eyebrow="Reading rules"
          title="Regime-first discipline"
          subtitle="Posture is governed by regime, not emotion."
        >
          <RuleTiles
            title="Core rules"
            subtitle="Fast to scan. Hard to misread."
            rules={[
              {
                title: "Start with control",
                desc: "Identify which Empire dominates before any action.",
                tone: "hard",
              },
              {
                title: "Yellow reduces confidence",
                desc: "Siege, Deadlock, and Tension mean shrink exposure.",
              },
              {
                title: "HTF Revolution resets the story",
                desc: "Stop executing the prior regime thesis and rebuild context.",
                tone: "hard",
              },
              {
                title: "Terrain changes difficulty",
                desc: "Battle Lines affect timing difficulty, not Empire control.",
              },
            ]}
          />
        </Section>
      </Reveal>

      {/* CTA */}
      <Reveal delayMs={240}>
        <section className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                See it applied over time
              </p>
              <p className="text-xs text-neutral-400">
                Portfolio Lab documents posture and regime changes across cycles.
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
