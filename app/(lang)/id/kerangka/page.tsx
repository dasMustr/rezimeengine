// app/operator/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Reveal from "@/app/components/Reveal";
import Sheen from "@/app/components/Sheen";
import Section from "@/app/components/Section";
import { RuleTiles } from "@/app/components/VisualBlocks";

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
  tone = "soft",
  footer,
}: {
  title: string;
  desc: string;
  tone?: "soft" | "hard";
  footer?: string;
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
      {footer ? (
        <p className="mt-3 text-xs text-neutral-500 leading-relaxed">{footer}</p>
      ) : null}
    </div>
  );
}

function Notice({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-semibold text-white">{title}</p>
      <div className="mt-2 text-sm text-neutral-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function JumpLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
    >
      {label}
    </a>
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
        <div className="max-w-3xl">
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
      note: "Conflict and traps. Reduce exposure and reduce decisions.",
      color: "#facc15",
    },
    {
      name: "Reset (Red)",
      note: "Conditions changed. Rebuild context before you re-engage.",
      color: "#ef4444",
    },
  ];

  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="max-w-xl">
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

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
        Shrink activity or pause.
      </p>
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

function CasePanel({
  label,
  caption,
  src,
  alt,
  priority = false,
  tag = "Example (GOOG)",
}: {
  label: string;
  caption: string;
  src: string;
  alt: string;
  priority?: boolean;
  tag?: string;
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white">
          {label}
        </span>
        <span className="text-[11px] uppercase tracking-widest text-neutral-500">
          {tag}
        </span>
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
            <Pill>Built for time in markets</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl text-white">
            Recognize the regime
            <br className="hidden sm:block" /> before you carry risk.
          </h1>

          <div className="max-w-3xl space-y-3 text-sm text-neutral-300 leading-relaxed">
            <p>
              REZIME is a baseline framework for people who intend to spend time
              in markets. It is not a shortcut. It is an order of operations.
            </p>
            <p>
              Most damage is not caused by being wrong. It comes from carrying
              risk when conditions are unstable.
            </p>
            <p>
              REZIME labels conditions first, so your activity matches what you
              are in.
            </p>
          </div>

          <div className="grid gap-4 pt-2 lg:grid-cols-3">
            <Card
              tone="hard"
              title="Regime"
              desc="What condition are you in right now. Stable, Instability, or Reset."
              footer="Condition first. Method second."
            />
            <Card
              title="Confidence"
              desc="Stable allows patience. Instability reduces confidence. Reset requires rebuilding context."
              footer="Confidence controls how much you do."
            />
            <Card
              tone="hard"
              title="Activity"
              desc="When confidence is low, activity shrinks. Fewer decisions means fewer avoidable mistakes."
              footer="Restraint is a skill."
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
              <JumpLink href="#survival" label="Survival Mode" />
              <JumpLink href="#timing" label="Timing Mode" />
              <JumpLink href="#strip" label="Strip colors" />
              <JumpLink href="#rules" label="Reading rules" />
              <JumpLink href="#tool" label="Tool (optional)" />
              <JumpLink href="#example" label="Walkthrough" />
            </div>
          </div>
        </section>
      </Reveal>

      {/* SURVIVAL MODE */}
      <Reveal delayMs={60}>
        <Section
          id="survival"
          eyebrow="Mode 1"
          title="Survival Mode"
          subtitle="Default. One main timeframe."
        >
          <ModeHeader
            eyebrow="Baseline"
            title="Learn safely before you try to time anything"
            subtitle="Survival Mode is the foundation. One main timeframe, your HTF. The goal is not more activity. The goal is fewer avoidable mistakes while experience accumulates."
            badge="HTF only"
          />

          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="Empire control"
              desc="On HTF, identify who has control. Bullish Empire or Bearish Empire."
              footer="This sets posture."
            />
            <Card
              title="Instability"
              desc="Yellow means conflict and traps. Reduce exposure and reduce decisions."
              footer="Less clarity means less activity."
            />
            <Card
              tone="hard"
              title="Reset"
              desc="Red means conditions changed. Pause, then rebuild context before re-engaging."
              footer="Old assumptions may not apply."
            />
          </div>

          <Notice title="The Survival rule">
            Instability means reduced confidence. Reduced confidence means fewer
            decisions. Fewer decisions means fewer avoidable mistakes.
          </Notice>
        </Section>
      </Reveal>

      {/* TIMING MODE */}
      <Reveal delayMs={90}>
        <Section
          id="timing"
          eyebrow="Mode 2"
          title="Timing Mode"
          subtitle="Optional. Extra detail across timeframes."
        >
          <ModeHeader
            eyebrow="Optional"
            title="Timing is not required for safety"
            subtitle="If you stay in the game, you will notice how instability often appears on smaller timeframes first and climbs upward. This is optional detail. If it creates urgency, return to Survival Mode."
            badge="HTF + MTF + LTF"
          />

          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="LTF language"
              desc="LTF Instability is Tension. LTF Reset is Uprising."
            />
            <Card
              title="MTF language"
              desc="MTF Instability is Unrest. MTF Reset is Rebellion."
            />
            <Card
              tone="hard"
              title="HTF language"
              desc="HTF Instability is Siege. HTF Reset is Revolution."
            />
          </div>

          <Notice title="Escalation chain">
            Tension → Uprising → Unrest → Rebellion → Siege → Revolution
            <br />
            When HTF reaches Revolution, treat it as a reset. Rebuild the Empire
            thesis before you carry risk again.
          </Notice>
        </Section>
      </Reveal>

      {/* STRIP */}
      <Reveal delayMs={120}>
        <section id="strip" className="space-y-4">
          <StripLegend />
        </section>
      </Reveal>

      {/* RULES */}
      <Reveal delayMs={150}>
        <Section
          id="rules"
          eyebrow="How to use it"
          title="Reading rules"
          subtitle="These rules govern posture and confidence. They are not action instructions."
        >
          <RuleTiles
            title="Rules that govern behavior"
            subtitle="Fast to scan. Hard to misread."
            rules={[
              {
                title: "Rule 1: Survival Mode is the default",
                desc: "Start with HTF only. Respect Instability and Reset. Stay safe long enough for judgment to form.",
                tone: "hard",
              },
              {
                title: "Rule 2: Timing Mode is optional",
                desc: "Multi-timeframe detail is not required for safety. If it creates urgency, remove it.",
              },
              {
                title: "Rule 3: Instability means reduced confidence",
                desc: "Conflict reduces reliability. Instability is a warning label, not a command to act.",
                tone: "hard",
              },
              {
                title: "Rule 4: Reduced confidence means reduced activity",
                desc: "Fewer decisions, tighter criteria, smaller participation. Calm beats fast.",
              },
              {
                title: "Rule 5: Reset changes assumptions",
                desc: "When conditions change, pause and rebuild context before re-engaging.",
                tone: "hard",
              },
            ]}
          />

          <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
            REZIME is designed to make time in markets survivable, so experience
            has time to compound into intuition.
          </p>
        </Section>
      </Reveal>

      {/* TOOL */}
      <Reveal delayMs={180}>
        <Section
          id="tool"
          eyebrow="Tool"
          title="One tool, optional"
          subtitle="The site explains the map. The tool helps you see it faster."
        >
          <div className="grid gap-4">
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
              REZIME is educational documentation. It does not provide signals
              or personalized advice. Use it as a lens for posture and
              confidence. The tool is optional.
            </p>
          </div>
        </Section>
      </Reveal>

      {/* WALKTHROUGH */}
      <Reveal delayMs={210}>
        <Section
          id="example"
          eyebrow="Walkthrough"
          title="A simple way to read a cycle"
          subtitle="Not about calling bottoms. About avoiding hostile conditions and re-engaging when structure becomes cleaner."
        >
          <div className="grid gap-4">
            <CasePanel
              src="/playbook/engine-strip.png"
              alt="REZIME Engine strip example on GOOG"
              label="1) Start with regime"
              caption="Before any decision, ask one question. Is the regime stable enough to carry risk. If the strip is yellow, activity shrinks. If the strip is red, you pause."
              priority
            />

            <CasePanel
              src="/playbook/sync-bear-revolution.png"
              alt="REZIME Timing view example showing Bear control on GOOG"
              label="2) Hostile structure"
              caption="When structure is hostile, the goal is not cleverness. It is avoiding long exposure that turns normal movement into deep drawdown."
            />

            <CasePanel
              src="/playbook/sync-bull-alignment.png"
              alt="REZIME Timing view example showing alignment on GOOG"
              label="3) Cleaner structure returns"
              caption="When regime becomes cleaner, behavior becomes easier. It often becomes easier to hold, and harder to overreact. This is where time in markets starts to feel normal."
            />

            <Notice title="What the walkthrough is proving">
              You do not need to move faster. You need to match activity to
              condition. That is how experience stays alive long enough to turn
              into intuition.
            </Notice>
          </div>
        </Section>
      </Reveal>

      {/* CTA */}
      <Reveal delayMs={250}>
        <section className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Want the time-stamped record?
              </p>
              <p className="text-xs text-neutral-400">
                Portfolio Lab is a cadence-based archive. Context and posture,
                recorded over time.
              </p>
            </div>

            <Link
              href="/allocator"
              className="premium-card is-clickable inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
            >
              Enter Portfolio Lab →
            </Link>
          </div>

          <p className="mt-4 text-[11px] text-neutral-500 leading-relaxed">
            Educational documentation only. Not financial advice. No signals. No
            predictions. No guarantees.
          </p>
        </section>
      </Reveal>
    </div>
  );
}
