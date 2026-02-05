import Link from "next/link";
import Section from "../components/Section";
import Reveal from "../components/Reveal";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
      {children}
    </span>
  );
}

function MiniBlock({
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

export default function RealityPage() {
  return (
    <div className="space-y-14">

      {/* HERO */}
      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Reality Portal
          </p>

          <div className="flex flex-wrap gap-2">
            <Pill>Your fear is valid</Pill>
            <Pill>Regimes create stress</Pill>
            <Pill>Survival comes first</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            You’re not bad at trading.
            <br className="hidden sm:block" />
            You’ve been operating in the wrong regime.
          </h1>

          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            Most traders believe they failed because of discipline, psychology,
            or “bad entries.” The deeper truth is simpler and less personal:
            <br /><br />
            They stayed active in unstable regimes long enough for natural human
            reactions — fear, hesitation, overtrading, frustration — to destroy
            them.
            <br /><br />
            REZIME exists because markets are not just charts. They are{" "}
            <span className="text-white font-semibold">regimes</span> — periods
            of stability, conflict, and reset. When you misread the regime, your
            nervous system goes to war with reality.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/operator"
              className="premium-card is-clickable rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
            >
              Understand the System →
            </Link>
            <Link
              href="/allocator"
              className="premium-card is-clickable rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-300 transition hover:bg-white/5"
            >
              See Proof →
            </Link>
          </div>
        </section>
      </Reveal>

      {/* SECTION 1 — VALIDATION */}
      <Reveal delayMs={80}>
        <Section
          eyebrow="First truth"
          title="Your emotional reactions are normal"
          subtitle="Stress, confusion, and overtrading are regime mismatch symptoms."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <MiniBlock
              title="Feeling confused?"
              desc="You’re likely in a conflict regime. The market is sending mixed signals, and your brain is trying to force clarity where none exists."
            />
            <MiniBlock
              title="Feeling urgency?"
              desc="Instability triggers action bias. The more chaotic the regime, the more you feel like you must ‘do something.’"
            />
            <MiniBlock
              title="Feeling exhausted?"
              desc="That’s cognitive overload. Your system is reacting to regime instability, not personal weakness."
            />
          </div>
        </Section>
      </Reveal>

      {/* SECTION 2 — THE MISCONCEPTION */}
      <Reveal delayMs={160}>
        <Section
          eyebrow="Common illusion"
          title="Traders think effort fixes losses"
          subtitle="But effort without regime alignment increases damage."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <MiniBlock
              tone="hard"
              title="The wrong belief"
              desc="‘If I try harder, trade more, analyze more, I’ll fix this.’ In unstable regimes, more activity often means more mistakes."
            />
            <MiniBlock
              title="The reality"
              desc="Performance improves when behavior matches regime stability. The less stable the regime, the less you should interfere."
            />
          </div>
        </Section>
      </Reveal>

      {/* SECTION 3 — THE REFRAME */}
      <Reveal delayMs={240}>
        <Section
          eyebrow="Reframe"
          title="Markets are not puzzles. They are regimes."
          subtitle="You don’t conquer regimes. You survive them."
        >
          <MiniBlock
            tone="hard"
            title="There is always a ruling Empire"
            desc="Markets are never neutral. Either the Bull Empire or the Bear Empire is in control. Most damage comes from trading against the ruling regime or acting aggressively during conflict."
          />
        </Section>
      </Reveal>

      {/* SECTION 4 — THE BRIDGE */}
      <Reveal delayMs={320}>
        <Section
          eyebrow="Why REZIME exists"
          title="REZIME is a regime awareness system"
          subtitle="It helps you see reality before your emotions react to it."
        >
          <MiniBlock
            title="Recognition first"
            desc="REZIME shows which regime is ruling and whether that rule is stable or under challenge."
          />
          <MiniBlock
            title="Escalation next"
            desc="The Playbook explains how regimes escalate across timeframes and how to interpret those shifts."
          />
        </Section>
      </Reveal>

      {/* CTA */}
      <Reveal delayMs={400}>
        <section className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Ready to understand regimes?
              </p>
              <p className="text-xs text-neutral-400">
                Reality explains the problem. Playbook explains the system.
              </p>
            </div>

            <Link
              href="/operator"
              className="premium-card is-clickable inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
            >
              Enter Playbook →
            </Link>
          </div>
        </section>
      </Reveal>

    </div>
  );
}
