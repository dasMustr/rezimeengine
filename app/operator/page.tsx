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
 * Empires: green/blue | Messy/Conflict: yellow | Reset: red | Neutral: gray
 *
 * Notes applied:
 * - No "Stable → Green" concept.
 * - Market is a perpetual battle between two Empires (Bullish vs Bearish).
 * - Use the word "Regime" (not environment).
 * - Two segments:
 *   1) Survival = 1 timeframe focus (yellow = messy, red = reset)
 *   2) Timing   = multi-timeframe escalation language (Sync)
 */
function StripLegend() {
  const items = [
    {
      name: "Neutral",
      note: "Newborn or unclear structure. Treat as low-confidence participation.",
      color: "#6b7280",
    },
    {
      name: "Empire control (Green / Blue)",
      note: "The regime is controlled by one Empire. Green = Bullish Empire. Blue = Bearish Empire.",
      color: "#22c55e",
      color2: "#3b82f6",
    } as any,
    {
      name: "Messy (Yellow)",
      note: "Conflict and traps. Reduce exposure and tighten criteria.",
      color: "#f59e0b",
    },
    {
      name: "Reset (Red)",
      note: "Revolution / reset. Reconsider the prior Empire thesis.",
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
        If the color story conflicts across timeframes (Timing), treat it as reduced
        confidence. Shrink exposure or pause.
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
            How
          </p>

          <div className="flex flex-wrap gap-2">
            <Pill>Map, not signals</Pill>
            <Pill>Method-neutral</Pill>
            <Pill>Regime-first</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Learn the map.
            <br className="hidden sm:block" /> Reduce mistakes.
          </h1>

          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            You can use any method over time. REZIME sits above the method. It
            helps you read the{" "}
            <span className="text-white font-semibold">regime</span> so your
            behavior matches what the market is doing.
            <br />
            <br />
            The market is a perpetual battle between two Empires:{" "}
            <span className="text-white font-semibold">
              Bullish Empire vs Bearish Empire.
            </span>{" "}
            Green and blue are simply “who controls the regime.” Yellow means the
            regime is messy and conflicted. Red means the regime has reset — your
            prior Empire thesis should be reconsidered.
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
                href="#survival"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                Survival
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="#timing"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                Timing
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
                Reading rules
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="#example"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                GOOG walkthrough
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      {/* SURVIVAL */}
      <Reveal delayMs={50}>
        <Section
          id="survival"
          eyebrow="Segment 1"
          title="Survival"
          subtitle="One timeframe. Two warnings. Protect yourself first."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <MiniCard
              tone="hard"
              title="Empire control (green / blue)"
              desc="One Empire controls the regime. Green = Bullish Empire. Blue = Bearish Empire. This is not “stable” — it’s simply control."
            />
            <MiniCard
              title="Messy (yellow)"
              desc="Instability and traps. Reduce exposure and reduce decisions."
            />
            <MiniCard
              tone="hard"
              title="Reset (red)"
              desc="Revolution / reset on your main timeframe. Treat it as a full thesis reset before re-engaging."
            />
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <KeyIdeaBlock
              title="What survival gives you"
              subtitle="A safer way to participate"
              bullets={[
                "A simple label for regime so behavior matches reality.",
                "Clear warning states: messy (yellow) and reset (red).",
                "Permission to pause instead of forcing activity.",
              ]}
            />
            <KeyIdeaBlock
              title="What survival avoids"
              subtitle="Overconfidence"
              bullets={[
                "No entry alerts. No prediction theater. No performance promises.",
                "No need to time transitions — you only need to respect instability.",
                "Less damage from hostile or unstable regimes.",
              ]}
            />
          </div>
        </Section>
      </Reveal>

      {/* TIMING */}
      <Reveal delayMs={75}>
        <Section
          id="timing"
          eyebrow="Segment 2"
          title="Timing"
          subtitle="Same colors. Different words. Escalation builds across timeframes."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <MiniCard
              tone="hard"
              title="HTF (primary)"
              desc="HTF Yellow = Siege. HTF Red = Revolution."
            />
            <MiniCard title="MTF" desc="MTF Yellow = Deadlock. MTF Red = Rebellion." />
            <MiniCard
              tone="hard"
              title="LTF"
              desc="LTF Yellow = Tension. LTF Red = Uprising."
            />
          </div>

          <div className="mt-4 calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">
              The escalation idea (advanced)
            </p>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Timing is the multi-timeframe view. Revolutions don’t typically appear
              instantly on the highest timeframe. There is often a build-up that climbs upward:
              <br />
              <span className="text-white font-semibold">
                Tension → Deadlock → Siege → Revolution.
              </span>
              <br />
              <br />
              Still, the priority stays the same:
              <span className="text-white font-semibold">
                {" "}when HTF prints Revolution, treat it as a reset.
              </span>{" "}
              Reconsider your entire previous Empire thesis.
            </p>
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
          eyebrow="Tools"
          title="The Stack"
          subtitle="Three tools. Three questions. Minimal overlap."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <ToolCard
              title="REZIME Engine"
              subtitle="Who has control right now?"
              bullets={[
                "Bullish Empire versus Bearish Empire dominance",
                "Who is controlling the regime (no prediction required)",
                "Red confirms a regime reset / control transition",
              ]}
            />
            <ToolCard
              title="REZIME Sync"
              subtitle="Is conflict building across timeframes?"
              bullets={[
                "Timing view: HTF / MTF / LTF translation of yellow and red",
                "Escalation can build upward (LTF → MTF → HTF)",
                "Conflict means shrink confidence, not increase activity",
              ]}
            />
            <ToolCard
              title="REZIME Battle Lines"
              subtitle="Is the terrain tight or wide?"
              bullets={[
                "Walls show compression versus runway",
                "Wide walls often mean cleaner holding behavior",
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
          title="Reading rules"
          subtitle="These rules govern posture and confidence. They are not action instructions."
        >
          <RuleTiles
            title="Rules that govern behavior"
            subtitle="Fast to scan. Hard to misread."
            rules={[
              {
                title: "Rule 1 — Start with control (Engine)",
                desc: "If one Empire is clearly controlling the regime, treat counter-moves as pullbacks until escalation proves otherwise.",
                tone: "hard",
              },
              {
                title: "Rule 2 — Survival first, timing second",
                desc: "Survival needs one timeframe: respect messy (yellow) and reset (red). Timing uses multi-timeframes (Sync).",
              },
              {
                title: "Rule 3 — Treat uncertainty as reduced confidence",
                desc: "Siege and conflict reduce reliability. Uncertainty is a warning label, not a command to act.",
                tone: "hard",
              },
              {
                title: "Rule 4 — Defense posture during instability",
                desc: "Reduce exposure, reduce frequency, tighten criteria. Do not assume the current Empire is safe.",
              },
              {
                title: "Rule 5 — Revolution resets assumptions",
                desc: "If HTF flips into Revolution, treat it as a reset. Pause and rebuild your thesis for the new Empire.",
                tone: "hard",
              },
              {
                title: "Rule 6 — Terrain changes difficulty (Battle Lines)",
                desc: "Battle Lines do not change bias. They change timing difficulty. Tight walls mean fewer decisions.",
              },
            ]}
          />
          <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
            REZIME does not tell you to do more. It tells you when regimes deserve
            less confidence.
          </p>
        </Section>
      </Reveal>

      {/* GOOG WALKTHROUGH */}
      <Reveal delayMs={170}>
        <Section
          id="example"
          eyebrow="Example"
          title="GOOG walkthrough"
          subtitle="The goal is not predicting the bottom. The goal is avoiding hostile regimes, then re-engaging as regime clarity returns."
        >
          <div className="grid gap-4">
            <CaseImage
              src="/playbook/engine-strip.png"
              alt="REZIME Engine strip example on GOOG"
              label="0) Baseline context"
              caption="Engine is the baseline. It classifies control. Before decisions, you care about regime."
              priority
              dateRange="Apr 2022 to Apr 2024 (approx.)"
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Takeaway
                title="Key takeaway"
                tone="hard"
                lines={[
                  "REZIME is a regime filter first. It is a posture system.",
                  "Survival is respecting messy (yellow) and reset (red). Timing is optional.",
                ]}
              />
              <Takeaway
                title="Notes"
                lines={[
                  "Dates are visible on the timeline for verification.",
                  "Numbers are stated roughly because screenshot resolution varies.",
                ]}
              />
            </div>

            <CaseImage
              src="/playbook/sync-bear-revolution.png"
              alt="REZIME Sync Bear reset example on GOOG"
              label="1) Bear Empire begins"
              dateRange="Around Apr 2022 (approx.)"
              caption="Bear Empire controls the regime. The key is avoiding bullish posture while the regime is structurally hostile."
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Takeaway
                title="What this avoids"
                tone="hard"
                lines={[
                  "Long periods of low reward for time spent in a hostile regime.",
                  "Deep drawdowns during a structurally bearish regime.",
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
              alt="REZIME Sync Bull reset example on GOOG"
              label="2) Transition"
              dateRange="Around May 2023 (approx.)"
              caption="This is the transition. Structural danger fades. The regime becomes valid for bullish posture again."
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Takeaway
                title="Translation"
                tone="hard"
                lines={[
                  "You do not need to predict the bottom.",
                  "You wait until the regime stops being structurally hostile to bullish posture.",
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
              alt="REZIME Sync Bull alignment example on GOOG"
              label="3) Full alignment"
              dateRange="Apr 2024 onward (approx.)"
              caption="Alignment across timeframes tends to produce cleaner behavior. Easier runs often happen here because the regime is clearer."
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

            <CaseImage
              src="/playbook/battle-lines.png"
              alt="REZIME Battle Lines example on GOOG"
              label="4) Terrain"
              dateRange="Apr 2022 to Apr 2024 (approx.)"
              caption="Battle Lines show compression versus runway. Terrain affects timing difficulty, not bias. Wide walls tend to mean cleaner behavior. Tight walls often mean compression and fakeouts."
            />

            <div className="grid gap-4 lg:grid-cols-2">
              <Takeaway
                title="Terrain rule"
                tone="hard"
                lines={[
                  "Tight walls mean fewer decisions. Overactivity risk increases.",
                  "Wide walls mean easier holding. Fakeouts tend to reduce.",
                ]}
              />
              <Takeaway
                title="Final sentence"
                lines={[
                  "REZIME does not tell you what to do.",
                  "It tells you which regime you are in so decisions stop becoming mismatched.",
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
