// app/operator/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { RegimeStripDemo, RuleTiles } from "../components/VisualBlocks";

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

function TocLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="premium-card is-clickable block rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-300 transition hover:text-white"
    >
      {label}
    </a>
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
        <div className="flex flex-wrap items-center gap-2">
          {dateRange ? (
            <span className="text-[11px] uppercase tracking-widest text-neutral-500">
              {dateRange}
            </span>
          ) : null}
          <span className="text-[11px] uppercase tracking-widest text-neutral-500">
            Example (GOOG)
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
 * Color guide for the strip. These are “UI teaching colors” (not logic),
 * chosen to match your screenshot defaults:
 * - Bull: green
 * - Bear: blue
 * - Siege: orange
 * - Revolution: red
 * - Neutral: gray
 *
 * If you ever want perfect matching, we can wire these to CSS variables
 * that you reuse across the site (e.g. --rez-bull, --rez-bear...).
 */
function StripLegend() {
  const items = [
    {
      name: "Bull Empire",
      note: "Dominant buyers (baseline bullish environment)",
      color: "#22c55e",
    },
    {
      name: "Bear Empire",
      note: "Dominant sellers (baseline bearish environment)",
      color: "#3b82f6",
    },
    {
      name: "Siege",
      note: "Pressure / instability (reduce confidence)",
      color: "#f59e0b",
    },
    {
      name: "Revolution",
      note: "Confirmed regime flip (reset assumptions)",
      color: "#ef4444",
    },
    {
      name: "Neutral",
      note: "No clear dominance (shrink activity)",
      color: "#6b7280",
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
            This is what to look for at a glance. Colors are{" "}
            <span className="text-white font-semibold">environment labels</span>{" "}
            — not entry triggers.
          </p>
        </div>

        {/* Tiny sample strip */}
        <div className="rounded-xl border border-white/10 bg-black/40 p-2">
          <div className="flex h-3 w-[220px] overflow-hidden rounded-lg border border-white/10">
            <div style={{ background: "#3b82f6" }} className="w-[26%]" />
            <div style={{ background: "#f59e0b" }} className="w-[10%]" />
            <div style={{ background: "#ef4444" }} className="w-[6%]" />
            <div style={{ background: "#22c55e" }} className="w-[40%]" />
            <div style={{ background: "#6b7280" }} className="w-[18%]" />
          </div>
          <p className="mt-2 text-[11px] uppercase tracking-widest text-neutral-500">
            demo strip
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.name}
            className="calm-block rounded-xl border border-white/10 bg-black/40 p-4"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-sm border border-white/20"
                style={{ background: it.color }}
                aria-hidden
              />
              <p className="text-sm font-semibold text-white">{it.name}</p>
            </div>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              {it.note}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
        Tip: If the color story conflicts across timeframes (Sync), treat it as a
        warning label — your confidence should shrink.
      </p>
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
            Playbook
          </p>

          <div className="flex flex-wrap gap-2">
            <Pill>Map, not signals</Pill>
            <Pill>Avoid the wrong regime</Pill>
            <Pill>Survival → clarity → confidence</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Not entries.
            <br className="hidden sm:block" /> Regime awareness.
          </h1>

          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            REZIME is a calm market lens. It doesn&apos;t predict price. It helps
            you{" "}
            <span className="text-white font-semibold">
              avoid the wrong environment
            </span>{" "}
            — the regimes where being bullish (or bearish) is structurally
            punished.
            <br />
            <br />
            Your execution style is still yours. REZIME answers:{" "}
            <span className="text-white font-semibold">
              “What kind of market is this?”
            </span>{" "}
            so your behavior matches reality.
          </p>

          <div className="flex flex-wrap gap-3">
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

          {/* QUICK JUMP */}
          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-neutral-400 leading-relaxed">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-neutral-300">Jump to:</span>
              <a
                href="#big-idea"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                The Big Idea
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="#strip"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                Strip Colors
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="#stack"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                The Stack
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="#rules"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                Rules
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="#example"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                GOOG Walkthrough
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      {/* BIG IDEA */}
      <Reveal delayMs={60}>
        <Section
          id="big-idea"
          eyebrow="The big idea"
          title="The edge is avoiding the wrong regime"
          subtitle="Most people don’t lose because they’re bad at entries. They lose because they trade every environment the same way."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <MiniCard
              tone="hard"
              title="1) Name who rules"
              desc="Engine tells you which Empire has structural control. If you can’t name the ruler, reduce confidence."
            />
            <MiniCard
              title="2) See conflict early"
              desc="Sync shows whether timeframes agree or fight. Fighting regimes punish beginners with fakeouts."
            />
            <MiniCard
              tone="hard"
              title="3) Respect terrain"
              desc="Battle Lines show compression vs runway. Tight walls mean timing difficulty; wide walls mean cleaner behavior."
            />
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <KeyIdeaBlock
              title="What REZIME is"
              subtitle="A permission system for bias"
              bullets={[
                "When regimes align, bullish/bearish bias is allowed (cleaner behavior).",
                "When conflict escalates, reduce exposure or step aside.",
                "You don’t need to predict bottoms — you avoid hostile environments.",
              ]}
            />
            <KeyIdeaBlock
              title="What REZIME is not"
              subtitle="Not signals, not entry arrows"
              bullets={[
                "No ‘must go up/down.’ No predictive calls.",
                "REZIME does not replace your method; it stabilizes environment awareness.",
                "Waiting is a valid action when the map is hostile.",
              ]}
            />
          </div>
        </Section>
      </Reveal>

      {/* STRIP DEMO + COLOR LEGEND */}
      <Reveal delayMs={90}>
        <section id="strip" className="space-y-4">
          <RegimeStripDemo />
          <StripLegend />
        </section>
      </Reveal>

      {/* STACK */}
      <Reveal delayMs={110}>
        <Section
          id="stack"
          eyebrow="System architecture"
          title="The Stack"
          subtitle="Three tools. Three questions. Minimal overlap."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <ToolCard
              title="REZIME Engine"
              subtitle="Who rules right now?"
              bullets={[
                "Bull Empire vs Bear Empire dominance",
                "Regime stability vs pressure",
                "Revolution = confirmed Empire flip",
              ]}
            />
            <ToolCard
              title="REZIME Sync"
              subtitle="Is conflict escalating?"
              bullets={[
                "Shows alignment vs conflict across timeframes (2TF / 3TF)",
                "Revolutions build upward over time",
                "Conflict = shrink confidence, not increase activity",
              ]}
            />
            <ToolCard
              title="REZIME Battle Lines"
              subtitle="Is terrain tight or wide?"
              bullets={[
                "Walls show compression vs runway",
                "Wide walls = cleaner behavior (easier holding)",
                "Tight walls = chop / fakeouts (timing becomes advanced)",
              ]}
            />
          </div>
        </Section>
      </Reveal>

      {/* RULES */}
      <Reveal delayMs={140}>
        <Section
          id="rules"
          eyebrow="How to read it"
          title="Interpretation Rules"
          subtitle="These rules produce survival and clarity. They do not produce entries."
        >
          <RuleTiles
            title="Rules that govern behavior"
            subtitle="Fast to scan. Hard to misread."
            rules={[
              {
                title: "Rule 1 — Start with the ruling Empire",
                desc: "If Engine shows a clear Bull or Bear Empire, assume counter-moves are pullbacks until escalation proves otherwise.",
                tone: "hard",
              },
              {
                title: "Rule 2 — Sync is your escalation detector",
                desc: "Regime flips rarely happen on one timeframe. They build upward (3TF: LTF→MTF→HTF, 2TF: LTF→HTF).",
              },
              {
                title: "Rule 3 — Uncertainty is a warning label",
                desc: "Tension and Deadlock reduce reliability. Uncertainty is not a command to act.",
                tone: "hard",
              },
              {
                title: "Rule 4 — Uprising/Rebellion = defense time",
                desc: "Reduce size, reduce frequency, protect timeline. Do not assume the old Empire is safe.",
              },
              {
                title: "Rule 5 — Revolution is a reset",
                desc: "If HTF flips, the old Empire is no longer relevant. Stop executing a plan that belonged to the old regime.",
                tone: "hard",
              },
              {
                title: "Rule 6 — Terrain changes difficulty",
                desc: "Battle Lines don’t change bias — they change timing difficulty. Tight walls = fewer decisions.",
              },
            ]}
          />
          <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
            Reminder: REZIME doesn’t tell you to trade more. It tells you when
            the environment deserves less confidence.
          </p>
        </Section>
      </Reveal>

      {/* GOOG WALKTHROUGH */}
      <Reveal delayMs={170}>
        <Section
          id="example"
          eyebrow="Example"
          title="GOOG — Regime Life Cycle Walkthrough"
          subtitle="The goal isn’t calling the bottom. It’s avoiding the wrong regime, then re-engaging when the map improves."
        >
          <div className="grid gap-4">
            <CaseImage
              src="/playbook/engine-strip.png"
              alt="REZIME Engine strip example on GOOG"
              label="0) Baseline — Engine Context"
              caption="Engine is the baseline: it names who has structural control. Before you care about entries, you care about the environment."
              priority
              dateRange="Apr 2022 → Apr 2024 (approx.)"
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Takeaway
                title="Key takeaway"
                tone="hard"
                lines={[
                  "REZIME is a regime filter first — a permission system for bias.",
                  "The edge is avoiding hostile environments (dead money + drawdowns).",
                ]}
              />
              <Takeaway
                title="How to verify"
                lines={[
                  "Dates are visible on the chart timeline for double-checking.",
                  "Numbers are stated roughly because screenshot quality varies.",
                ]}
              />
            </div>

            <CaseImage
              src="/playbook/sync-bear-revolution.png"
              alt="REZIME Sync Bear Revolution example on GOOG"
              label="1) Bear Empire begins — ‘No Buy Zone’"
              dateRange="Around Apr 2022 (approx.)"
              caption="This is the start of a Bear Empire environment. GOOG was roughly ~$115 at the beginning. The key is not ‘short it’ — the key is: avoid being structurally bullish inside a Bear Empire."
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Takeaway
                title="What this saves you"
                tone="hard"
                lines={[
                  "Avoid ~365+ days of dead money (low reward for time).",
                  "Avoid a maximum drawdown of roughly ~25%+ (price went down to ~83.5).",
                ]}
              />
              <Takeaway
                title="Survival posture"
                lines={[
                  "Reduce exposure and decision count.",
                  "If you must participate, operate smaller and stricter.",
                  "Do not force bullish narratives inside Bear Empire conditions.",
                ]}
              />
            </div>

            <CaseImage
              src="/playbook/sync-bull-revolution.png"
              alt="REZIME Sync Bull Revolution example on GOOG"
              label="2) Bear Empire ends — regime resets"
              dateRange="Around May 2023 (approx.)"
              caption="This is the transition: the structural danger phase ends. This is not ‘peak optimism’ — it’s the environment becoming valid for bullish participation again."
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Takeaway
                title="Translation"
                tone="hard"
                lines={[
                  "You don’t need to predict the bottom.",
                  "You wait until the market stops being structurally hostile to bullish exposure.",
                ]}
              />
              <Takeaway
                title="Operator habit"
                lines={[
                  "Re-engage gradually. Don’t rush.",
                  "Let structure prove itself before you scale confidence.",
                ]}
              />
            </div>

            <CaseImage
              src="/playbook/sync-bull alignment.png"
              alt="REZIME Sync Bull Alignment example on GOOG"
              label="3) Full alignment — clean holding zone"
              dateRange="Apr 2024 onward (approx.)"
              caption="Full alignment across timeframes. Behavior is cleaner. This is where many ‘easy’ runs happen — not at the bottom — because the regime is stable. In this GOOG example, alignment could translate into ~+50% within ~365 days (roughly), simply by being on the right side of the environment."
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Takeaway
                title="If aligned"
                tone="hard"
                lines={[
                  "Do less. Hold more.",
                  "Stop micromanaging pullbacks into panic.",
                  "Let the environment do the heavy lifting.",
                ]}
              />
              <Takeaway
                title="If not aligned"
                lines={[
                  "Avoid late entries with poor risk/reward.",
                  "Wait for the next clean setup or reset.",
                ]}
              />
            </div>

            <CaseImage
              src="/playbook/battle lines.png"
              alt="REZIME Battle Lines example on GOOG"
              label="4) Terrain — timing difficulty meter"
              dateRange="Apr 2022 → Apr 2024 (approx.)"
              caption="Battle Lines show compression vs runway. Terrain affects timing difficulty, not bias. Wide walls usually mean cleaner behavior; tight walls mean compression, fakeouts, and higher timing difficulty."
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Takeaway
                title="Terrain rule"
                tone="hard"
                lines={[
                  "Tight walls = fewer decisions. You will be baited into overtrading.",
                  "Wide walls = easier holding. Fewer fakeouts.",
                ]}
              />
              <Takeaway
                title="Final sentence"
                lines={[
                  "REZIME doesn’t tell you where to trade.",
                  "It tells you what kind of market you’re inside — so you stop making phase-mismatched decisions.",
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
                Want the factsheet archive?
              </p>
              <p className="text-xs text-neutral-400">
                Portfolio Lab is a cadence-based archive (proof of process, not
                hype).
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
