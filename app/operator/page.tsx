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
 * Teaching colors (UI only, not logic).
 * Bull: green | Bear: blue | Siege: orange | Revolution: red | Neutral: gray
 */
function StripLegend() {
  const items = [
    {
      name: "Neutral",
      note: "Newborn or unclear structure. Treat as low-confidence participation.",
      color: "#6b7280",
    },
    {
      name: "Bull Empire",
      note: "Dominant buyers. Baseline bullish environment.",
      color: "#22c55e",
    },
    {
      name: "Bear Empire",
      note: "Dominant sellers. Baseline bearish environment.",
      color: "#3b82f6",
    },
    {
      name: "Siege",
      note: "Conflict and instability. Reduce activity and tighten criteria.",
      color: "#f59e0b",
    },
    {
      name: "Revolution",
      note: "Confirmed regime transition. Reset assumptions and re-evaluate posture.",
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
            Colors classify environment. They are not entry triggers.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/40 p-2">
          <div className="flex h-3 w-[220px] overflow-hidden rounded-lg border border-white/10">
            <div style={{ background: "#6b7280" }} className="w-[18%]" />
            <div style={{ background: "#3b82f6" }} className="w-[22%]" />
            <div style={{ background: "#f59e0b" }} className="w-[10%]" />
            <div style={{ background: "#ef4444" }} className="w-[6%]" />
            <div style={{ background: "#22c55e" }} className="w-[44%]" />
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
        If the color story conflicts across timeframes (Sync), treat it as reduced
        confidence. Shrink size or pause.
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
            <Pill>Regime classification</Pill>
            <Pill>Risk containment</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Not entries.
            <br className="hidden sm:block" /> Environment control.
          </h1>

          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            REZIME is a calm market lens. It does not predict price. It helps you{" "}
            <span className="text-white font-semibold">
              avoid phase-mismatched participation
            </span>
            , the regimes where a bullish (or bearish) posture is structurally
            punished.
            <br />
            <br />
            Your execution style stays yours. REZIME answers{" "}
            <span className="text-white font-semibold">
              “What kind of market is this?”
            </span>{" "}
            so sizing, frequency, and expectations match reality.
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
          title="The edge is avoiding hostile regimes"
          subtitle="Losses often come from consistent activity in the wrong environment, not from a single bad entry."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <MiniCard
              tone="hard"
              title="1) Identify control"
              desc="Engine shows which Empire has structural control. If control is unclear, confidence should shrink."
            />
            <MiniCard
              title="2) Detect escalation"
              desc="Sync shows whether timeframes agree or fight. Conflict increases fakeouts and reduces reliability."
            />
            <MiniCard
              tone="hard"
              title="3) Read terrain"
              desc="Battle Lines show compression versus runway. Terrain changes timing difficulty, not directional bias."
            />
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <KeyIdeaBlock
              title="What REZIME is"
              subtitle="A permission system for posture"
              bullets={[
                "When regimes align, bias is allowed and behavior is cleaner.",
                "When conflict escalates, shrink exposure or pause.",
                "You do not need to predict turning points to avoid hostile phases.",
              ]}
            />
            <KeyIdeaBlock
              title="Scope boundaries"
              subtitle="Environment classification only"
              bullets={[
                "No entry alerts, no profit guarantees, no predictive calls.",
                "REZIME does not replace your method. It conditions when your method should be used.",
                "Waiting is a valid posture when the map is unstable.",
              ]}
            />
          </div>
        </Section>
      </Reveal>

      {/* STRIP COLOR LEGEND */}
      <Reveal delayMs={90}>
        <section id="strip" className="space-y-4">
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
              subtitle="Who has control?"
              bullets={[
                "Bull Empire versus Bear Empire dominance",
                "Stability versus pressure",
                "Revolution signals confirmed control transition",
              ]}
            />
            <ToolCard
              title="REZIME Sync"
              subtitle="Is conflict escalating?"
              bullets={[
                "Alignment versus conflict across timeframes (2TF / 3TF)",
                "Regime transitions typically build upward over time",
                "Conflict means shrink confidence, not increase activity",
              ]}
            />
            <ToolCard
              title="REZIME Battle Lines"
              subtitle="Is terrain tight or wide?"
              bullets={[
                "Walls show compression versus runway",
                "Wide walls usually mean cleaner holding behavior",
                "Tight walls often mean chop and higher timing difficulty",
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
          subtitle="These rules govern posture and confidence. They are not entry instructions."
        >
          <RuleTiles
            title="Rules that govern behavior"
            subtitle="Fast to scan. Hard to misread."
            rules={[
              {
                title: "Rule 1 — Start with control (Engine)",
                desc: "If Bull or Bear Empire is clear, treat counter-moves as pullbacks until escalation proves otherwise.",
                tone: "hard",
              },
              {
                title: "Rule 2 — Track escalation (Sync)",
                desc: "Regime transitions rarely appear on one timeframe. They typically build upward (LTF → MTF → HTF).",
              },
              {
                title: "Rule 3 — Treat uncertainty as reduced confidence",
                desc: "Siege and conflict reduce reliability. Uncertainty is a warning label, not a command to act.",
                tone: "hard",
              },
              {
                title: "Rule 4 — Defense posture during instability",
                desc: "Reduce size, reduce frequency, tighten criteria. Do not assume the current Empire is safe.",
              },
              {
                title: "Rule 5 — Revolution resets assumptions",
                desc: "If HTF flips, stop executing a plan that belonged to the prior regime.",
                tone: "hard",
              },
              {
                title: "Rule 6 — Terrain changes difficulty (Battle Lines)",
                desc: "Battle Lines do not change bias. They change timing difficulty. Tight walls mean fewer decisions.",
              },
            ]}
          />
          <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
            REZIME does not tell you to trade more. It tells you when conditions
            deserve less confidence.
          </p>
        </Section>
      </Reveal>

      {/* GOOG WALKTHROUGH */}
      <Reveal delayMs={170}>
        <Section
          id="example"
          eyebrow="Example"
          title="GOOG — Regime life cycle walkthrough"
          subtitle="The goal is not calling the bottom. The goal is avoiding hostile regimes, then re-engaging as stability returns."
        >
          <div className="grid gap-4">
            <CaseImage
              src="/playbook/engine-strip.png"
              alt="REZIME Engine strip example on GOOG"
              label="0) Baseline — Engine context"
              caption="Engine is the baseline. It classifies control. Before entries, you care about environment."
              priority
              dateRange="Apr 2022 to Apr 2024 (approx.)"
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Takeaway
                title="Key takeaway"
                tone="hard"
                lines={[
                  "REZIME is a regime filter first. It is a permission system for posture.",
                  "The edge is avoiding hostile phases (dead time plus drawdowns).",
                ]}
              />
              <Takeaway
                title="Notes"
                lines={[
                  "Dates are visible on the TradingView timeline for verification.",
                  "Numbers are stated roughly because screenshot resolution varies.",
                ]}
              />
            </div>

            <CaseImage
              src="/playbook/sync-bear-revolution.png"
              alt="REZIME Sync Bear Revolution example on GOOG"
              label="1) Bear Empire begins — avoid bullish exposure"
              dateRange="Around Apr 2022 (approx.)"
              caption="This is a Bear Empire environment. The key is not “short it.” The key is avoiding bullish posture while the regime is structurally hostile."
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Takeaway
                title="What this avoids"
                tone="hard"
                lines={[
                  "Avoid long periods of low reward for time in a hostile regime.",
                  "Avoid deep drawdowns during a structurally bearish phase.",
                ]}
              />
              <Takeaway
                title="Defense posture"
                lines={[
                  "Reduce exposure and decision count.",
                  "If participating, operate smaller and stricter.",
                  "Do not force bullish narratives inside Bear Empire structure.",
                ]}
              />
            </div>

            <CaseImage
              src="/playbook/sync-bull-revolution.png"
              alt="REZIME Sync Bull Revolution example on GOOG"
              label="2) Transition — regime resets"
              dateRange="Around May 2023 (approx.)"
              caption="This is the transition. Structural danger fades. This is not peak optimism. It is the environment becoming valid for bullish posture again."
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Takeaway
                title="Translation"
                tone="hard"
                lines={[
                  "You do not need to predict the bottom.",
                  "You wait until the regime stops being structurally hostile to bullish exposure.",
                ]}
              />
              <Takeaway
                title="Operator habit"
                lines={[
                  "Re-engage gradually. Do not rush size.",
                  "Let structure prove itself before scaling confidence.",
                ]}
              />
            </div>

            <CaseImage
              src="/playbook/sync-bull-alignment.png"
              alt="REZIME Sync Bull Alignment example on GOOG"
              label="3) Full alignment — cleaner holding zone"
              dateRange="Apr 2024 onward (approx.)"
              caption="Alignment across timeframes tends to produce cleaner behavior. Many easier runs happen here, not at the bottom, because the regime is stable."
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
                  "Avoid late entries with poor risk and reward.",
                  "Wait for the next clean transition or reset.",
                ]}
              />
            </div>

            <CaseImage
              src="/playbook/battle-lines.png"
              alt="REZIME Battle Lines example on GOOG"
              label="4) Terrain — timing difficulty meter"
              dateRange="Apr 2022 to Apr 2024 (approx.)"
              caption="Battle Lines show compression versus runway. Terrain affects timing difficulty, not bias. Wide walls tend to mean cleaner behavior. Tight walls often mean compression and fakeouts."
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Takeaway
                title="Terrain rule"
                tone="hard"
                lines={[
                  "Tight walls mean fewer decisions. Overtrading risk increases.",
                  "Wide walls mean easier holding. Fakeouts tend to reduce.",
                ]}
              />
              <Takeaway
                title="Final sentence"
                lines={[
                  "REZIME does not tell you where to trade.",
                  "It tells you what kind of market you are inside so decisions stop becoming phase-mismatched.",
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
        </section>
      </Reveal>
    </div>
  );
}
