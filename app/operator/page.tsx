import React from "react";
import Link from "next/link";
import Reveal from "../components/Reveal";
import Section from "../components/Section";

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

function RuleRow({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex flex-col gap-2 border-t border-white/10 pt-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="text-xs uppercase tracking-widest text-neutral-400">
        {label}
      </div>
      <div className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
        {text}
      </div>
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
            Playbook Portal
          </p>

          <div className="flex flex-wrap gap-2">
            <Pill>Map, not signals</Pill>
            <Pill>Regimes → decisions</Pill>
            <Pill>Survival first</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Not entries.
            <br className="hidden sm:block" /> Regime awareness.
          </h1>

          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            Operator is for practitioners. It explains how to interpret REZIME
            Engine, Sync, and Battle Lines — so you can identify{" "}
            <span className="text-white font-semibold">
              which Empire is ruling
            </span>{" "}
            and how instability is escalating across timeframes.
            <br />
            <br />
            REZIME is compatible with any execution style. It does not promise
            alpha. It gives you the baseline:{" "}
            <span className="text-white font-semibold">
              stop acting the same inside every regime
            </span>{" "}
            — because survival comes first.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/observer"
              className="premium-card is-clickable rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
            >
              ← Learn (Observer)
            </Link>
            <Link
              href="/allocator"
              className="premium-card is-clickable rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-300 transition hover:bg-white/5"
            >
              Proof (Portfolio Lab) →
            </Link>
          </div>

          {/* QUICK JUMP */}
          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-neutral-400 leading-relaxed">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-neutral-300">Jump to:</span>
              <a
                href="#stack"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                The Stack
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
                href="#cases"
                className="underline decoration-white/20 transition hover:decoration-white/50"
              >
                Cases
              </a>
            </div>
          </div>
        </section>
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
            Empire is ruling (Bull or Bear) and how stable that rule is. Your own
            method decides entries; REZIME gives you the regime context so you
            don’t confuse pullbacks for reversals, or stability for danger.
          </p>
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
              <TocLink href="#stack" label="The Stack (Engine / Sync / Lines)" />
              <TocLink href="#alignment" label="Alignment & Escalation" />
              <TocLink href="#rules" label="Interpretation Rules" />
              <TocLink href="#doctrine" label="Survival Doctrine" />
              <TocLink href="#cases" label="Case Library" />
              <TocLink href="#ip" label="What’s Shown vs Hidden" />
            </div>

            <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-neutral-400 leading-relaxed">
              Tip: Learn explains the worldview. Playbook explains how to read
              the map in real time.
            </div>
          </aside>

          {/* CONTENT */}
          <div className="space-y-12">
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
                      "Revolution = confirmed regime flip (Empire changes)",
                    ]}
                  />
                  <ToolCard
                    title="REZIME Sync"
                    subtitle="How is the challenge escalating?"
                    bullets={[
                      "Shows how regimes relate across timeframes (2TF or 3TF)",
                      "Revolution rarely happens on one timeframe — it builds",
                      "Helps you read escalation instead of reacting to noise",
                    ]}
                  />
                  <ToolCard
                    title="REZIME Battle Lines"
                    subtitle="How strong is the battle?"
                    bullets={[
                      "Territory walls (rolling bounds) show compression vs runway",
                      "Wide walls = cleaner behavior / clearer runway",
                      "Tight walls = compression; timing becomes advanced and risky",
                    ]}
                  />
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
                    desc="This is a strong ruling Empire. If you’re already aligned with the ruling regime, the best move is often to do nothing. If you’re not in, avoid late entries — wait for the next clean setup."
                  />
                  <MiniCard
                    title="Escalation (2TF vs 3TF)"
                    desc="Regime conflict usually begins on the lower timeframe and climbs upward. The exact ladder depends on whether you’re using 2TF or 3TF. Most people should treat escalation as a survival alert, not a ‘trade more’ signal."
                  />
                </div>

                <div className="calm-block mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold text-white">
                    The escalation storyboard (3TF)
                  </p>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    This is the sequence of an Empire being challenged on 3TF:
                    <span className="text-white font-semibold">
                      {" "}
                      Standoff → Uprising → Deadlock → Rebellion → Siege → Revolution
                    </span>
                    . Timing opportunities exist early, but they’re noisy and
                    advanced. REZIME’s default is survival: understand what’s
                    building before it becomes obvious.
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      [
                        "Standoff",
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
                        "MTF Revolution. The challenge is now real and visible to more participants.",
                      ],
                      [
                        "Siege",
                        "HTF uncertainty. The old Empire is pressured; safety is decreasing.",
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
                        On 2TF, the ladder compresses into:
                        <span className="text-white font-semibold">
                          {" "}
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
                        appears, prepare defensive actions first (trim / exit),
                        and only attempt timing if you truly understand the
                        timeframe correlation.
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
                <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
                  <RuleRow
                    label="Rule 1"
                    text="Start with the ruling Empire. If Engine shows a clear Bull or Bear Empire, your default assumption is that counter-moves are pullbacks until escalation proves otherwise."
                  />
                  <RuleRow
                    label="Rule 2"
                    text="Use Sync to identify escalation. Regime flips rarely happen on one timeframe — they build from LTF to MTF to HTF (3TF), or from LTF to HTF (2TF)."
                  />
                  <RuleRow
                    label="Rule 3"
                    text="Treat Standoff/Deadlock as uncertainty. Uncertainty is not a command to act — it’s a warning that your usual confidence should be reduced."
                  />
                  <RuleRow
                    label="Rule 4"
                    text="Treat Uprising/Rebellion as a serious alert. This is where defensive actions become rational: prepare trims, tighten your participation, and stop assuming the old Empire is ‘safe’."
                  />
                  <RuleRow
                    label="Rule 5"
                    text="Revolution is a reset. If HTF flips, the old Empire is no longer relevant. Do not keep executing a plan that belonged to the old regime."
                  />
                  <RuleRow
                    label="Rule 6"
                    text="Battle Lines describe battle strength. Wide walls usually mean cleaner behavior; tight walls mean compression, chop, and an approaching decision point."
                  />

                  <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
                    Reminder: REZIME does not govern trade frequency. It governs
                    regime awareness so your decisions fit the regime you are in.
                  </p>
                </div>
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
                    desc="Full Alignment means the ruling Empire is strong. If you’re already aligned, the default is to hold. Don’t micromanage pullbacks into panic decisions."
                  />
                  <MiniCard
                    tone="hard"
                    title="If not aligned, stay out"
                    desc="Late involvement inside a strong Empire often creates bad risk-reward. Patience is a position. Wait for the next clean setup instead of chasing stability."
                  />
                  <MiniCard
                    title="Escalation = prepare defense"
                    desc="When escalation appears (Standoff → … → Siege), treat it as a survival alert. Prepare trims or full exits. Don’t let uncertainty bait you into emotional activity."
                  />
                  <MiniCard
                    title="Timing is earned"
                    desc="Early phases can offer timing opportunities, but only if you understand timeframe correlation deeply. REZIME is built for survival first — thrive later."
                  />
                </div>

                <div className="calm-block mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold text-white">
                    Why the doctrine exists
                  </p>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    Most stress comes from not knowing which regime you’re in.
                    REZIME gives you the regime map: who rules, how stable the
                    rule is, and how the challenge is escalating. When you
                    understand the regime, the mind calms down — and discipline
                    becomes possible.
                  </p>
                </div>
              </Section>
            </Reveal>

            {/* CASES */}
            <Reveal delayMs={330}>
              <Section
                id="cases"
                eyebrow="Proof library"
                title="Case Library"
                subtitle="A public pattern library: regime behavior, escalation, and survival posture — without exposing construction."
              >
                <div className="grid gap-4 lg:grid-cols-3">
                  <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-6">
                    <p className="text-sm font-semibold text-white">2020 Crash</p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      Rapid escalation into Revolution. Shows why survival posture
                      matters when regimes flip fast.
                    </p>
                    <p className="mt-3 text-xs text-neutral-500">Regime strip slot</p>
                  </div>
                  <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-6">
                    <p className="text-sm font-semibold text-white">BTC Cycle</p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      Long Empires with clear phases. Shows why higher timeframes
                      often read cleaner.
                    </p>
                    <p className="mt-3 text-xs text-neutral-500">Regime strip slot</p>
                  </div>
                  <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-6">
                    <p className="text-sm font-semibold text-white">
                      Mean Reversion Trap
                    </p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      Strong Empires last longer than expected. Shows why
                      contrarian assumptions get punished without escalation proof.
                    </p>
                    <p className="mt-3 text-xs text-neutral-500">Regime strip slot</p>
                  </div>
                </div>
              </Section>
            </Reveal>

            {/* IP */}
            <Reveal delayMs={400}>
              <Section
                id="ip"
                eyebrow="IP protection"
                title="What’s Shown vs Hidden"
                subtitle="Demonstrate behavior and outcomes without disclosing construction."
              >
                <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 text-sm text-neutral-300 leading-relaxed">
                  <p>
                    Public proofs focus on the{" "}
                    <span className="text-white font-semibold">regime strip</span>{" "}
                    and labels only (Empire / Standoff / Uprising / Deadlock /
                    Rebellion / Siege / Revolution).
                  </p>
                  <p>
                    Construction details (MA blends, internal logic, territory
                    math) remain internal until access is released.
                  </p>
                  <p className="text-xs text-neutral-500">
                    Clear message: REZIME is a map. You can audit regime behavior
                    without reverse-engineering the tool.
                  </p>
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
                      Portfolio Lab = factsheet archive + cadence + governance tone.
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
