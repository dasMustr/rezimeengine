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
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="text-sm text-neutral-300 leading-relaxed">{subtitle}</p>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-neutral-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
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
  priority = false,
  dateRange,
  exampleTag = "Example (GOOG)",
}: {
  src: string;
  alt: string;
  label: string;
  caption: string;
  priority?: boolean;
  dateRange?: string;
  exampleTag?: string;
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white">
          {label}
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {dateRange ? (
            <span className="text-[11px] uppercase tracking-widest text-neutral-500">
              {dateRange}
            </span>
          ) : null}
          <span className="text-[11px] uppercase tracking-widest text-neutral-500">
            {exampleTag}
          </span>
        </div>
      </div>

      <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-black/40">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        </div>
      </div>

      <p className="mt-3 text-sm text-neutral-300 leading-relaxed">{caption}</p>
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
        {lines.map((t) => (
          <li key={t} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
            <span>{t}</span>
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
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Copy rules applied:
 * - Calm, compact, non-sales tone
 * - No em dashes
 * - Keep your existing terms (Empire, Regime, Instability, Reset)
 * - Survival Mode is the default. Timing Mode is optional.
 * - Tool is optional. The lens is the point.
 */
function StripLegend() {
  const items = [
    {
      name: "Neutral",
      note: "Unclear structure. Treat as reduced confidence participation.",
      color: "#6b7280",
    },
    {
      name: "Empire control (Green / Blue)",
      note: "One Empire has control. Green is Bullish Empire. Blue is Bearish Empire.",
      color: "#22c55e",
      color2: "#3b82f6",
    } as any,
    {
      name: "Instability (Yellow)",
      note: "Conflict and traps. Reduce exposure and tighten criteria.",
      color: "#facc15",
    },
    {
      name: "Reset (Red)",
      note: "Regime reset. Reconsider the prior Empire thesis.",
      color: "#ef4444",
    },
  ];

  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Strip color guide
          </p>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            Colors classify <span className="text-white font-semibold">regime</span>.
            They are not action triggers.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/40 p-2">
          <div className="flex h-3 w-[220px] overflow-hidden rounded-lg border border-white/10">
            <div style={{ background: "#6b7280" }} className="w-[18%]" />
            <div style={{ background: "#3b82f6" }} className="w-[22%]" />
            <div style={{ background: "#facc15" }} className="w-[10%]" />
            <div style={{ background: "#ef4444" }} className="w-[6%]" />
            <div style={{ background: "#22c55e" }} className="w-[44%]" />
          </div>
          <p className="mt-2 text-[11px] uppercase tracking-widest text-neutral-500">
            demo strip
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it: any) => (
          <div
            key={it.name}
            className="calm-block rounded-xl border border-white/10 bg-black/40 p-4"
          >
            <div className="flex items-center gap-3">
              {it.color2 ? (
                <span className="flex items-center gap-1" aria-hidden>
                  <span
                    className="h-3 w-3 rounded-sm border border-white/20"
                    style={{ background: it.color }}
                  />
                  <span
                    className="h-3 w-3 rounded-sm border border-white/20"
                    style={{ background: it.color2 }}
                  />
                </span>
              ) : (
                <span
                  className="h-3 w-3 rounded-sm border border-white/20"
                  style={{ background: it.color }}
                  aria-hidden
                />
              )}

              <p className="text-sm font-semibold text-white">{it.name}</p>
            </div>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              {it.note}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
        If the story conflicts across timeframes, treat it as reduced confidence.
        Shrink exposure or pause.
      </p>
    </div>
  );
}

function ModeHeader({
  eyebrow,
  title,
  subtitle,
  badge,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  badge: string;
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            {eyebrow}
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">{title}</p>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            {subtitle}
          </p>
        </div>
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-neutral-300">
          {badge}
        </span>
      </div>
    </div>
  );
}

function SummaryCard({
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
          ? "calm-block rounded-2xl border border-white/15 bg-white/10 p-6"
          : "calm-block rounded-2xl border border-white/10 bg-black/30 p-6"
      }
    >
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-neutral-300">
        {lines.map((t) => (
          <li key={t} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function OperatorPage() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Framework
          </p>

          <div className="flex flex-wrap gap-2">
            <Pill>Map, not signals</Pill>
            <Pill>Method-neutral</Pill>
            <Pill>Regime-first</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl text-white">
            A condition label
            <br className="hidden sm:block" /> before a decision.
          </h1>

          <div className="max-w-3xl space-y-3 text-sm text-neutral-300 leading-relaxed">
            <p>
              REZIME is a simplified lens. It helps you match your behavior to the
              regime you are in.
            </p>
            <p>
              Most damage is not caused by being wrong once. It comes from staying
              active when conditions are unstable.
            </p>
            <p>
              This page explains the map. The tool is optional. The posture is the
              point.
            </p>
          </div>

          <div className="grid gap-4 pt-2 lg:grid-cols-3">
            <MiniCard
              tone="hard"
              title="Stable"
              desc="Conditions are clean enough to participate. Fewer surprises. Mistakes stay smaller."
            />
            <MiniCard
              title="Instability"
              desc="Conflict and traps increase. Reduce exposure and reduce decisions. Calm beats fast."
            />
            <MiniCard
              tone="hard"
              title="Reset"
              desc="Conditions changed. Rebuild context before you re-engage. Old assumptions may not apply."
            />
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/orientation"
              className="premium-card is-clickable rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
            >
              ← Orientation
            </Link>
            <Link
              href="/allocator"
              className="premium-card is-clickable rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-300 transition hover:bg-white/5"
            >
              Portfolio Lab →
            </Link>
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-neutral-400 leading-relaxed">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-neutral-300">Jump to:</span>
              <a
                href="#survival"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                Survival Mode
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="#timing"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                Timing Mode
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="#strip"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                Strip colors
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="#tool"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                Tool
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="#rules"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                Reading rules
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="#example"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                Walkthrough
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      {/* SURVIVAL MODE */}
      <Reveal delayMs={45}>
        <Section
          id="survival"
          eyebrow="Mode 1"
          title="Survival Mode"
          subtitle="Default. One main timeframe."
        >
          <ModeHeader
            eyebrow="First priority"
            title="Survival first"
            subtitle="You focus on one main timeframe, your HTF. You learn to respect instability and reset before you try to time anything."
            badge="HTF only"
          />

          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <MiniCard
              tone="hard"
              title="Empire control"
              desc="On HTF, identify who has control. Bullish Empire or Bearish Empire."
            />
            <MiniCard
              title="Instability"
              desc="Yellow on HTF means instability. Reduce exposure and reduce decisions."
            />
            <MiniCard
              tone="hard"
              title="Reset"
              desc="Red on HTF means reset. Treat it as a full thesis reset before re-engaging."
            />
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <KeyIdeaBlock
              title="What it builds"
              subtitle="Craft over time"
              bullets={[
                "You stay safe long enough for judgment to form.",
                "You stop forcing activity inside unstable regimes.",
                "You build posture before you chase outcomes.",
              ]}
            />
            <KeyIdeaBlock
              title="What it avoids"
              subtitle="Early ambition"
              bullets={[
                "No timing pressure. No fast answers. No promises.",
                "No obsession with perfect entries. Focus on staying alive.",
                "No pretending you can outsmart instability.",
              ]}
            />
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <SummaryCard
              tone="hard"
              title="If you only remember one thing"
              lines={[
                "Instability means reduced confidence.",
                "Reduced confidence means fewer decisions.",
                "Fewer decisions means fewer avoidable mistakes.",
              ]}
            />
            <SummaryCard
              title="What this feels like"
              lines={[
                "More waiting, less urgency.",
                "Smaller participation when the strip turns yellow.",
                "A clean pause when the strip turns red.",
              ]}
            />
          </div>
        </Section>
      </Reveal>

      {/* TIMING MODE */}
      <Reveal delayMs={70}>
        <Section
          id="timing"
          eyebrow="Mode 2"
          title="Timing Mode"
          subtitle="Optional. Multi-timeframe escalation language."
        >
          <ModeHeader
            eyebrow="Later, not now"
            title="Timing comes after survival"
            subtitle="If you stay in the game, you start noticing how instability builds across timeframes. This is optional and advanced. It is not required to participate safely."
            badge="HTF + MTF + LTF"
          />

          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <MiniCard
              tone="hard"
              title="HTF"
              desc="HTF Instability is Siege. HTF Reset is Revolution."
            />
            <MiniCard
              title="MTF"
              desc="MTF Instability is Unrest. MTF Reset is Rebellion."
            />
            <MiniCard
              tone="hard"
              title="LTF"
              desc="LTF Instability is Tension. LTF Reset is Uprising."
            />
          </div>

          <div className="mt-4 calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">Escalation idea</p>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Instability often appears on smaller timeframes first, then climbs upward.
              <br />
              <span className="text-white font-semibold">
                Tension → Uprising → Unrest → Rebellion → Siege → Revolution
              </span>
              <br />
              <br />
              Even in Timing Mode, the rule stays simple. When HTF prints Revolution,
              treat it as a reset. Reconsider the prior Empire thesis.
            </p>
          </div>

          <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
            Timing Mode is not an upgrade. It is extra detail. If it creates urgency, return
            to Survival Mode.
          </p>
        </Section>
      </Reveal>

      {/* STRIP COLOR LEGEND */}
      <Reveal delayMs={90}>
        <section id="strip" className="space-y-4">
          <StripLegend />
        </section>
      </Reveal>

      {/* TOOL */}
      <Reveal delayMs={110}>
        <Section
          id="tool"
          eyebrow="Tool"
          title="One tool, optional"
          subtitle="The site explains the map. The tool helps you see it faster."
        >
          <div className="grid gap-4 lg:grid-cols-1">
            <ToolCard
              title="REZIME Engine"
              subtitle="A regime label that helps you stop mismatching behavior to conditions."
              bullets={[
                "Classifies Empire control on your chosen timeframe",
                "Labels Instability so you reduce exposure and reduce decisions",
                "Labels Reset so you rebuild context before re-engaging",
                "Includes an optional Timing view once you are ready",
              ]}
            />
          </div>

          <div className="mt-4 calm-block rounded-2xl border border-white/10 bg-black/30 p-6">
            <p className="text-sm font-semibold text-white">Scope</p>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              REZIME is educational documentation. It does not provide signals or personalized advice.
              Use it as a lens for posture and confidence. The tool is optional.
            </p>
          </div>
        </Section>
      </Reveal>

      {/* RULES */}
      <Reveal delayMs={140}>
        <Section
          id="rules"
          eyebrow="How to read it"
          title="Reading rules"
          subtitle="These rules govern posture and confidence. They are not action instructions."
        >
          <RuleTiles
            title="Rules that govern behavior"
            subtitle="Fast to scan. Hard to misread."
            rules={[
              {
                title: "Rule 1: Survival Mode is the default",
                desc: "Start with HTF only. Respect Instability and Reset. Stay safe long enough to build craft.",
                tone: "hard",
              },
              {
                title: "Rule 2: Timing Mode is optional",
                desc: "Timing uses multiple timeframes and needs experience. It is not required for safety.",
              },
              {
                title: "Rule 3: Instability means reduced confidence",
                desc: "Conflict reduces reliability. Instability is a warning label, not a command to act.",
                tone: "hard",
              },
              {
                title: "Rule 4: Defense posture during instability",
                desc: "Reduce exposure, reduce frequency, tighten criteria. Do not assume the current Empire remains safe.",
              },
              {
                title: "Rule 5: Reset changes assumptions",
                desc: "If HTF flips into Reset, pause and rebuild context before re-engaging.",
                tone: "hard",
              },
            ]}
          />
          <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
            REZIME does not tell you to do more. It tells you when regimes deserve less confidence.
          </p>
        </Section>
      </Reveal>

      {/* WALKTHROUGH */}
      <Reveal delayMs={170}>
        <Section
          id="example"
          eyebrow="Example"
          title="GOOG walkthrough"
          subtitle="The goal is avoiding hostile regimes, then re-engaging as clarity returns."
        >
          <div className="grid gap-4">
            <CaseImage
              src="/playbook/engine-strip.png"
              alt="REZIME Engine strip example on GOOG"
              label="0) Baseline context"
              caption="Start with regime. Before decisions, care about who has control and whether conditions are stable enough to participate."
              priority
              dateRange="Apr 2022 to Apr 2024 (approx.)"
              exampleTag="Example (GOOG)"
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Takeaway
                title="Key takeaway"
                tone="hard"
                lines={[
                  "REZIME is a regime filter first. It is a posture system.",
                  "Survival Mode is the foundation. Timing Mode is optional.",
                ]}
              />
              <Takeaway
                title="Notes"
                lines={[
                  "Dates are visible on the timeline for verification.",
                  "Numbers are approximate because screenshot resolution varies.",
                ]}
              />
            </div>

            <CaseImage
              src="/playbook/sync-bear-revolution.png"
              alt="REZIME Timing view example showing Bear control on GOOG"
              label="1) Bear Empire controls"
              dateRange="Around Apr 2022 (approx.)"
              caption="When Bear Empire controls, avoid bullish posture while structure is hostile."
              exampleTag="Example (GOOG)"
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Takeaway
                title="What this avoids"
                tone="hard"
                lines={[
                  "Long periods of low reward for time spent in a hostile regime.",
                  "Deep drawdowns during structurally bearish periods.",
                ]}
              />
              <Takeaway
                title="Defense posture"
                lines={[
                  "Reduce exposure and reduce decisions.",
                  "If participating, operate smaller and stricter.",
                  "Do not force optimistic narratives inside hostile structure.",
                ]}
              />
            </div>

            <CaseImage
              src="/playbook/sync-bull-revolution.png"
              alt="REZIME Timing view example showing transition on GOOG"
              label="2) Transition"
              dateRange="Around May 2023 (approx.)"
              caption="This is the transition. Structural danger fades. The regime becomes valid for bullish posture again."
              exampleTag="Example (GOOG)"
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Takeaway
                title="Translation"
                tone="hard"
                lines={[
                  "You do not need to predict the bottom.",
                  "You wait until the regime stops being structurally hostile.",
                ]}
              />
              <Takeaway
                title="Operator habit"
                lines={[
                  "Re-engage gradually. Do not rush exposure.",
                  "Let structure prove itself before scaling confidence.",
                ]}
              />
            </div>

            <CaseImage
              src="/playbook/sync-bull-alignment.png"
              alt="REZIME Timing view example showing alignment on GOOG"
              label="3) Cleaner regime"
              dateRange="Apr 2024 onward (approx.)"
              caption="When timeframes align, behavior often becomes cleaner. It can become easier to hold and harder to overreact."
              exampleTag="Example (GOOG)"
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Takeaway
                title="If aligned"
                tone="hard"
                lines={[
                  "Do less. Hold more.",
                  "Stop micromanaging pullbacks into panic.",
                  "Let the regime do the heavy lifting.",
                ]}
              />
              <Takeaway
                title="If not aligned"
                lines={[
                  "Avoid late entries with poor risk and reward.",
                  "Wait for the next clean transition or reset.",
                ]}
              />
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <Takeaway
                title="Final sentence"
                tone="hard"
                lines={[
                  "REZIME does not tell you what to do.",
                  "It tells you which regime you are in so behavior stops becoming mismatched.",
                ]}
              />
              <Takeaway
                title="Remember"
                lines={[
                  "This is a learning lens first.",
                  "The tool is optional. The posture is the point.",
                ]}
              />
            </div>
          </div>
        </Section>
      </Reveal>

      {/* CTA */}
      <Reveal delayMs={260}>
        <section className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Want the record archive?
              </p>
              <p className="text-xs text-neutral-400">
                Portfolio Lab is a cadence-based archive. Context and posture, recorded over time.
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
