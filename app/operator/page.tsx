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
}: {
  src: string;
  alt: string;
  label: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white">
          {label}
        </span>
        <span className="text-[11px] uppercase tracking-widest text-neutral-500">
          Example (GOOG)
        </span>
      </div>

      <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-black/40">
        {/* Use "fill" so we don't need hardcoded width/height.
            Make container ratio stable for CLS. */}
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
            <Pill>Regimes shape behavior</Pill>
            <Pill>Survival → clarity → confidence</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Not entries.
            <br className="hidden sm:block" /> A new lens.
          </h1>

          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            This page teaches how to{" "}
            <span className="text-white font-semibold">think</span> with REZIME:
            read the environment first, then decide how much (or how little) you
            should do inside it.
            <br />
            <br />
            REZIME works with any execution style. It does not promise alpha. It
            gives you the baseline: stop acting the same inside every regime.
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
                href="#lens"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                How to Think
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="#foundation"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                Foundation
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
                href="#engine"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                Engine
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="#sync"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                Sync
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="#alignment"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                Alignment & Escalation
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="#rules"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                Interpretation Rules
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="#doctrine"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                Survival Doctrine
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="#example"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                Example (GOOG)
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      {/* HOW TO THINK (DOCTRINE ANCHOR) */}
      <Reveal delayMs={60}>
        <Section
          id="lens"
          eyebrow="How to think with REZIME"
          title="Markets are an environment, not a puzzle"
          subtitle="REZIME doesn’t predict price. It clarifies the environment your decisions live inside."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <MiniCard
              tone="hard"
              title="1) Name the regime"
              desc="Start with Engine. Who rules right now? If you can’t name the ruler, your confidence should shrink."
            />
            <MiniCard
              title="2) Check structure agreement"
              desc="Sync shows whether timeframes cooperate or fight. Conflict is where beginners get hurt."
            />
            <MiniCard
              tone="hard"
              title="3) Respect territory"
              desc="Battle Lines show compression vs runway. Tight walls mean advanced timing; wide walls mean cleaner behavior."
            />
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-white">
                What REZIME changes
              </p>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                Most stress comes from acting the same in every environment.
                REZIME gives you regime awareness so your behavior matches
                reality.
              </p>
              <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
                Survival builds clarity. Clarity builds confidence. Profits are a
                byproduct.
              </p>
            </div>

            <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-6">
              <p className="text-sm font-semibold text-white">
                What REZIME does not do
              </p>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                No entry arrows. No “must go up/down.” REZIME is a map: you still
                choose your method, size, and execution — but with environmental
                context.
              </p>
              <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
                If you’re unsure, waiting is also a decision.
              </p>
            </div>
          </div>
        </Section>
      </Reveal>

      {/* OPERATING PRINCIPLES */}
      <Reveal delayMs={90}>
        <section className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Operating principles
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
            Regime first. Execution second.
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-neutral-300 leading-relaxed">
            The playbook is intentionally entry-agnostic. It tells you which
            Empire is ruling (Bull or Bear) and how stable that rule is. Your
            method decides entries. REZIME gives you regime context so you do
            not confuse pullbacks for reversals, or stability for danger.
          </p>
        </section>
      </Reveal>

      {/* SIGNATURE UI ANCHOR */}
      <Reveal delayMs={120}>
        <section>
          <RegimeStripDemo />
        </section>
      </Reveal>

      {/* LAYOUT: TOC + CONTENT */}
      <Reveal delayMs={140}>
        <section className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* TOC */}
          <aside className="space-y-3 lg:sticky lg:top-24 lg:h-fit">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Contents
            </p>

            <div className="grid gap-2">
              <TocLink href="#lens" label="How to Think with REZIME" />
              <TocLink href="#foundation" label="Foundation: What a regime is" />
              <TocLink href="#stack" label="The Stack (Engine / Sync / Lines)" />
              <TocLink href="#engine" label="Engine Explained" />
              <TocLink href="#sync" label="Sync Explained" />
              <TocLink href="#alignment" label="Alignment & Escalation" />
              <TocLink href="#rules" label="Interpretation Rules" />
              <TocLink href="#doctrine" label="Survival Doctrine" />
              <TocLink href="#example" label="Example: GOOG (Full Walkthrough)" />
            </div>

            <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-neutral-400 leading-relaxed">
              Tip: Orientation calms the fear. Playbook teaches how to read the
              map in real time.
            </div>
          </aside>

          {/* CONTENT */}
          <div className="space-y-12">
            {/* FOUNDATION */}
            <Reveal delayMs={0}>
              <Section
                id="foundation"
                eyebrow="Foundation"
                title="Markets move in regimes, not randomness"
                subtitle="A regime is the behavioral state of the market. It tells you what kind of activity is rewarded or punished."
              >
                <div className="grid gap-4 lg:grid-cols-3">
                  <MiniCard
                    tone="hard"
                    title="Stable regime"
                    desc="Cleaner behavior. Structure holds more often. Patience and alignment are rewarded."
                  />
                  <MiniCard
                    title="Conflict regime"
                    desc="Buyers and sellers fight. Signals disagree. Fakeouts increase. Smaller size and fewer decisions win."
                  />
                  <MiniCard
                    tone="hard"
                    title="Reset regime"
                    desc="After a big move, the market digests and re-anchors. Old assumptions weaken and new structure forms."
                  />
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm font-semibold text-white">
                      Why it feels random
                    </p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      What feels like randomness is often transition. When
                      regimes shift, structure temporarily breaks, confidence
                      drops, and people overreact. REZIME helps you name the
                      state before your emotions write a story.
                    </p>
                  </div>

                  <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-6">
                    <p className="text-sm font-semibold text-white">
                      What Playbook teaches next
                    </p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      Engine shows who is ruling. Sync shows escalation across
                      timeframes. Battle Lines show territory and compression.
                      The tools do not predict price. They reveal regime
                      structure so your behavior matches reality.
                    </p>
                  </div>
                </div>
              </Section>
            </Reveal>

            {/* STACK */}
            <Reveal delayMs={0}>
              <Section
                id="stack"
                eyebrow="System architecture"
                title="The Stack"
                subtitle="Three indicators. Minimal redundancy. Each answers a different question."
              >
                <div className="grid gap-4 lg:grid-cols-3">
                  <ToolCard
                    title="REZIME Engine"
                    subtitle="Which Empire is ruling?"
                    bullets={[
                      "Bull Empire vs Bear Empire dominance",
                      "Shows whether the ruling regime is stable or under challenge",
                      "Revolution is confirmed regime flip (Empire changes)",
                    ]}
                  />
                  <ToolCard
                    title="REZIME Sync"
                    subtitle="How is the challenge escalating?"
                    bullets={[
                      "Shows how regimes relate across timeframes (2TF or 3TF)",
                      "Revolution rarely happens on one timeframe — it builds upward",
                      "Helps you read escalation instead of reacting to noise",
                    ]}
                  />
                  <ToolCard
                    title="REZIME Battle Lines"
                    subtitle="How hard is the battle?"
                    bullets={[
                      "Territory walls show compression vs runway",
                      "Wide walls usually mean cleaner behavior and clearer runway",
                      "Tight walls mean compression — timing becomes advanced and risky",
                    ]}
                  />
                </div>
              </Section>
            </Reveal>

            {/* ENGINE EXPLAINED */}
            <Reveal delayMs={40}>
              <Section
                id="engine"
                eyebrow="Core map"
                title="REZIME Engine Explained"
                subtitle="The Engine tells you who rules the market right now."
              >
                <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6 space-y-6">
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    The Engine is the foundation. It does not give entries. It
                    tells you which regime currently dominates behavior.
                  </p>

                  <div className="grid gap-4 lg:grid-cols-3">
                    <MiniCard
                      tone="hard"
                      title="Bull Empire"
                      desc="Buyers dominate structure. Pullbacks are usually continuation until escalation proves otherwise."
                    />
                    <MiniCard
                      tone="hard"
                      title="Bear Empire"
                      desc="Sellers dominate structure. Rallies are usually counter-moves unless regime pressure changes."
                    />
                    <MiniCard
                      title="Revolution"
                      desc="The Empire flips. Control changes hands. Old assumptions are invalid."
                    />
                  </div>

                  <div className="calm-block rounded-xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm font-semibold text-white">
                      What the strip represents
                    </p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      The strip is not momentum, not signal arrows, and not
                      timing. It’s a simplified display of who has structural
                      control. It shows dominance — not entry.
                    </p>
                  </div>

                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Rule: If you don&apos;t know who rules, you are gambling.
                    The Engine answers that first.
                  </p>
                </div>
              </Section>
            </Reveal>

            {/* SYNC EXPLAINED */}
            <Reveal delayMs={70}>
              <Section
                id="sync"
                eyebrow="Timeframe reality"
                title="REZIME Sync Explained"
                subtitle="Sync shows whether timeframes agree — and how conflict is climbing."
              >
                <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6 space-y-6">
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    Most beginners lose money in one situation:{" "}
                    <span className="text-white font-semibold">
                      they act like the market is stable while timeframes are
                      fighting.
                    </span>{" "}
                    Sync makes that fight visible.
                  </p>

                  <div className="grid gap-4 lg:grid-cols-3">
                    <MiniCard
                      tone="hard"
                      title="Full Alignment"
                      desc="Timeframes agree on the ruling Empire. Usually cleaner behavior and lower cognitive load."
                    />
                    <MiniCard
                      title="Mixed / Conflict"
                      desc="Lower timeframe disagrees with higher timeframe. Fakeouts, chop, and emotional mistakes increase."
                    />
                    <MiniCard
                      tone="hard"
                      title="Escalation"
                      desc="Conflict spreads upward over time. This is the real danger zone for beginners."
                    />
                  </div>

                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Rule: When timeframes disagree, your confidence should shrink
                    — not your activity increase.
                  </p>
                </div>
              </Section>
            </Reveal>

            {/* ALIGNMENT VS ESCALATION */}
            <Reveal delayMs={90}>
              <Section
                id="alignment"
                eyebrow="Core mechanic"
                title="Alignment & Escalation"
                subtitle="If you can name the phase, you stop making phase-mismatched decisions."
              >
                <div className="grid gap-4 lg:grid-cols-2">
                  <MiniCard
                    tone="hard"
                    title="Full Alignment"
                    desc="A strong ruling Empire. If you’re aligned, the best move is often to do less. If you’re not in, avoid late entries and wait."
                  />
                  <MiniCard
                    title="Escalation (2TF vs 3TF)"
                    desc="Conflict begins on lower timeframes and climbs upward. Treat escalation as a survival alert, not a trade-more signal."
                  />
                </div>

                <div className="calm-block mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold text-white">
                    The escalation storyboard (3TF)
                  </p>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    Sequence of an Empire being challenged on 3TF:{" "}
                    <span className="text-white font-semibold">
                      Tension → Uprising → Deadlock → Rebellion → Siege →
                      Revolution
                    </span>
                    .
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      [
                        "Tension",
                        "LTF uncertainty. The challenge begins, but outcomes are noisy.",
                      ],
                      [
                        "Uprising",
                        "LTF Revolution. Lower timeframe flips first — early signal, high noise.",
                      ],
                      [
                        "Deadlock",
                        "MTF uncertainty. Conflict spreads upward; chop and fakeouts increase.",
                      ],
                      [
                        "Rebellion",
                        "MTF Revolution. The challenge is now visible to more participants.",
                      ],
                      [
                        "Siege",
                        "HTF uncertainty. The old Empire is pressured; safety decreases.",
                      ],
                      [
                        "Revolution",
                        "HTF Revolution. The Empire flips. Old assumptions are invalid.",
                      ],
                    ].map(([name, desc]) => (
                      <div
                        key={name}
                        className="calm-block rounded-xl border border-white/10 bg-black/30 p-4"
                      >
                        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white">
                          {name}
                        </span>
                        <div className="mt-3 text-sm text-neutral-300 leading-relaxed">
                          {desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="calm-block rounded-xl border border-white/10 bg-black/30 p-4">
                      <p className="text-xs uppercase tracking-widest text-neutral-400">
                        2TF version
                      </p>
                      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                        On 2TF, the ladder compresses into:{" "}
                        <span className="text-white font-semibold">
                          Deadlock → Rebellion → Siege → Revolution
                        </span>
                        .
                      </p>
                    </div>
                    <div className="calm-block rounded-xl border border-white/10 bg-black/30 p-4">
                      <p className="text-xs uppercase tracking-widest text-neutral-400">
                        Operator habit
                      </p>
                      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                        Don’t be contrarian inside Full Alignment. If escalation
                        appears, prepare defense first: trim, reduce activity, or
                        step aside.
                      </p>
                    </div>
                  </div>
                </div>
              </Section>
            </Reveal>

            {/* RULES */}
            <Reveal delayMs={170}>
              <Section
                id="rules"
                eyebrow="How to read it"
                title="Interpretation Rules"
                subtitle="These rules produce clarity and survival. They do not produce entries."
              >
                <RuleTiles
                  title="Rules that govern behavior"
                  subtitle="Same doctrine — faster to scan."
                  rules={[
                    {
                      title: "Rule 1 — Start with the ruling Empire",
                      desc: "If Engine shows a clear Bull or Bear Empire, assume counter-moves are pullbacks until escalation proves otherwise.",
                      tone: "hard",
                    },
                    {
                      title: "Rule 2 — Use Sync to detect escalation",
                      desc: "Regime flips rarely happen on one timeframe. They build upward (3TF: LTF→MTF→HTF, 2TF: LTF→HTF).",
                    },
                    {
                      title: "Rule 3 — Treat uncertainty as a warning label",
                      desc: "Tension and Deadlock reduce reliability. Uncertainty is not a command to act.",
                      tone: "hard",
                    },
                    {
                      title: "Rule 4 — Treat Uprising/Rebellion as defense time",
                      desc: "Prepare trims/exits and reduce frequency. Do not assume the old Empire is safe.",
                    },
                    {
                      title: "Rule 5 — Revolution is a reset",
                      desc: "If HTF flips, the old Empire is no longer relevant. Do not keep executing a plan that belonged to the old regime.",
                      tone: "hard",
                    },
                    {
                      title: "Rule 6 — Battle Lines describe battle strength",
                      desc: "Wide walls usually mean cleaner behavior. Tight walls mean compression, chop, and an approaching decision point.",
                    },
                  ]}
                />

                <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
                  Reminder: REZIME does not govern trade frequency. It governs
                  regime awareness so your decisions fit the regime you are in.
                </p>
              </Section>
            </Reveal>

            {/* DOCTRINE */}
            <Reveal delayMs={250}>
              <Section
                id="doctrine"
                eyebrow="How you use it"
                title="Survival Doctrine"
                subtitle="Survive first. Time-in-market comes after."
              >
                <div className="grid gap-4 lg:grid-cols-2">
                  <MiniCard
                    tone="hard"
                    title="If aligned, do less"
                    desc="Full Alignment means the ruling Empire is strong. If you are already aligned, default is hold. Don’t micromanage pullbacks into panic decisions."
                  />
                  <MiniCard
                    tone="hard"
                    title="If not aligned, stay out"
                    desc="Late involvement inside a strong Empire often creates poor risk/reward. Patience is a position."
                  />
                  <MiniCard
                    title="Escalation means prepare defense"
                    desc="When escalation appears, treat it as a survival alert. Prepare trims or full exits."
                  />
                  <MiniCard
                    title="Timing is earned"
                    desc="Early phases can offer timing, but only if you truly understand timeframe correlation. REZIME defaults to survival."
                  />
                </div>

                <div className="calm-block mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold text-white">
                    Why the doctrine exists
                  </p>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    Most stress comes from not knowing which regime you are in.
                    REZIME gives you the regime map: who rules, how stable the
                    rule is, and how the challenge escalates. When you
                    understand the regime, the mind calms down — and discipline
                    becomes possible.
                  </p>
                </div>
              </Section>
            </Reveal>

            {/* EXAMPLE (GOOG) — FULL WALKTHROUGH */}
            <Reveal delayMs={320}>
              <Section
                id="example"
                eyebrow="Example"
                title="GOOG — Regime Life Cycle Walkthrough"
                subtitle="Baseline → Danger → Reset → Stability → Terrain. This is the lens in action."
              >
                <div className="grid gap-4">
                  <CaseImage
                    src="/playbook/engine-strip.png"
                    alt="REZIME Engine strip example on GOOG"
                    label="1) Baseline — Engine Context"
                    caption="The Engine strip shows the dominant Empire. This defines the behavioral baseline before conflict escalates. If you don’t know who rules, everything feels random."
                    priority
                  />

                  <div className="grid gap-4 lg:grid-cols-2">
                    <Takeaway
                      title="Teaching point"
                      tone="hard"
                      lines={[
                        "Engine answers the first question: who rules?",
                        "A named regime reduces fear and impulsive decision-making.",
                      ]}
                    />
                    <Takeaway
                      title="Not a signal"
                      lines={[
                        "The strip is not a timing tool.",
                        "It’s a map of structural control, not entry direction.",
                      ]}
                    />
                  </div>

                  <CaseImage
                    src="/playbook/sync-bear-revolution.png"
                    alt="REZIME Sync Bear Revolution example on GOOG"
                    label="2) Danger — Sync Bear Revolution"
                    caption="Multi-timeframe conflict escalates into a regime flip. The previous Empire loses control. Reliability drops. This is a capital protection environment — activity often increases here while edge decreases."
                  />

                  <div className="grid gap-4 lg:grid-cols-2">
                    <Takeaway
                      title="Survival posture"
                      tone="hard"
                      lines={[
                        "Danger phase is hostile for beginners.",
                        "Reduce frequency and decision count.",
                        "Protect timeline first — survive the environment.",
                      ]}
                    />
                    <Takeaway
                      title="What this means"
                      lines={[
                        "The environment changed, not your emotions.",
                        "When conflict is visible, act smaller, slower, or not at all.",
                      ]}
                    />
                  </div>

                  <CaseImage
                    src="/playbook/sync-bull-revolution.png"
                    alt="REZIME Sync Bull Revolution example on GOOG"
                    label="3) Reset — Sync Bull Revolution"
                    caption="Higher timeframe structure reclaims control. The market transitions from survival conditions to re-engagement conditions. This isn’t ‘trend strength’ yet — it’s the end of structural danger."
                  />

                  <div className="grid gap-4 lg:grid-cols-2">
                    <Takeaway
                      title="Reset posture"
                      tone="hard"
                      lines={[
                        "Environment improves — cautiously.",
                        "Signals start working again, but don’t rush.",
                      ]}
                    />
                    <Takeaway
                      title="Translation"
                      lines={[
                        "Stress decreases as structure returns.",
                        "This is where discipline becomes easier.",
                      ]}
                    />
                  </div>

                  <CaseImage
                    src="/playbook/sync-bull alignment.png"
                    alt="REZIME Sync Bull Alignment example on GOOG"
                    label="4) Stability — Sync Bull Alignment"
                    caption="Full alignment across timeframes. Structural conflict decreases. Directional persistence increases. Most ‘easy’ periods happen here — not at bottoms — because the regime is stable."
                  />

                  <div className="grid gap-4 lg:grid-cols-2">
                    <Takeaway
                      title="Stability posture"
                      tone="hard"
                      lines={[
                        "Stable Empire = cleaner behavior.",
                        "If aligned, do less. Let the environment work.",
                        "If not aligned, avoid late entries — wait for the next clean setup.",
                      ]}
                    />
                    <Takeaway
                      title="REZIME promise"
                      lines={[
                        "Less fear, fewer forced decisions.",
                        "More consistency through environment awareness.",
                      ]}
                    />
                  </div>

                  <CaseImage
                    src="/playbook/battle lines.png"
                    alt="REZIME Battle Lines example on GOOG"
                    label="5) Terrain — Battle Lines"
                    caption="Battle Lines show compression vs runway. Terrain affects timing risk, not direction. Wide walls usually mean cleaner behavior. Tight walls mean compression, fakeouts, and higher timing difficulty."
                  />

                  <div className="grid gap-4 lg:grid-cols-2">
                    <Takeaway
                      title="Terrain rule"
                      tone="hard"
                      lines={[
                        "Terrain governs stress, not trend.",
                        "Compression demands fewer decisions and tighter discipline.",
                      ]}
                    />
                    <Takeaway
                      title="Final translation"
                      lines={[
                        "REZIME doesn’t tell you where to trade.",
                        "It tells you what kind of environment you’re inside.",
                      ]}
                    />
                  </div>

                  <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm font-semibold text-white">
                      What this example demonstrates
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                      {[
                        "How regimes flip before emotions catch up",
                        "Why danger phases feel active but are hostile",
                        "Why stable empires feel obvious only in hindsight",
                        "Why terrain matters for timing, not bias",
                      ].map((t) => (
                        <li key={t} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
                      REZIME is a calm market lens. Survival first. Clarity
                      second. Confidence comes last.
                    </p>
                  </div>
                </div>
              </Section>
            </Reveal>

            {/* CTA */}
            <Reveal delayMs={470}>
              <section className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Want the proof archive?
                    </p>
                    <p className="text-xs text-neutral-400">
                      Portfolio Lab is a factsheet archive with cadence and
                      governance tone.
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
        </section>
      </Reveal>
    </div>
  );
}
