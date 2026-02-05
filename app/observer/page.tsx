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
            Reality
          </p>

          <div className="flex flex-wrap gap-2">
            <Pill>Your experience makes sense</Pill>
            <Pill>Stress has a cause</Pill>
            <Pill>This isn’t random</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            What you felt wasn’t failure.
            <br className="hidden sm:block" />
            It was regime mismatch.
          </h1>

          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            After learning that markets are just price movement, the next shock
            beginners face is emotional:
            <br /><br />
            “Why does this feel stressful sometimes… and calm at other times?”
            <br /><br />
            The answer isn’t intelligence, discipline, or talent.
            It’s regimes.
            <br /><br />
            Markets move through periods of stability, tension, and reset.
            When your behavior doesn’t match the regime, your nervous system
            feels like something is wrong — even if you can’t explain why.
          </p>
        </section>
      </Reveal>

      {/* EMOTIONAL VALIDATION */}
      <Reveal delayMs={80}>
        <Section
          eyebrow="First realization"
          title="Your reactions are normal"
          subtitle="Confusion, urgency, and overtrading are regime mismatch symptoms."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <MiniBlock
              title="Feeling confused?"
              desc="You’re likely in a conflict regime. The market is moving without clear direction, but your brain wants certainty."
            />
            <MiniBlock
              title="Feeling urgency?"
              desc="Instability creates action pressure. Your system thinks doing more will fix the discomfort."
            />
            <MiniBlock
              title="Feeling drained?"
              desc="That’s cognitive overload. Your mind is trying to process instability as if it were clarity."
            />
          </div>
        </Section>
      </Reveal>

      {/* THE MISCONCEPTION */}
      <Reveal delayMs={160}>
        <Section
          eyebrow="The common trap"
          title="More effort doesn’t fix unstable regimes"
          subtitle="Activity without regime awareness increases damage."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <MiniBlock
              tone="hard"
              title="The instinct"
              desc="‘I need to trade more, analyze more, watch more.’ This feels productive — but often deepens the mistake."
            />
            <MiniBlock
              title="The reality"
              desc="Performance improves when behavior matches regime stability. The less stable the regime, the less you should interfere."
            />
          </div>
        </Section>
      </Reveal>

      {/* REGIME CONCEPT */}
      <Reveal delayMs={240}>
        <Section
          eyebrow="The key shift"
          title="Markets are regimes, not puzzles"
          subtitle="You don’t solve regimes. You survive them."
        >
          <MiniBlock
            tone="hard"
            title="There is always a ruling side"
            desc="Markets are never neutral. Either the Bull Empire or the Bear Empire is in control. Most damage happens when people trade against the ruling regime or act aggressively during conflict."
          />
        </Section>
      </Reveal>

      {/* BRIDGE TO PLAYBOOK */}
      <Reveal delayMs={320}>
        <Section
          eyebrow="Why REZIME exists"
          title="REZIME is regime awareness"
          subtitle="It helps you see reality before emotions react."
        >
          <MiniBlock
            title="Recognition first"
            desc="REZIME shows which regime is ruling and whether that rule is stable or under challenge."
          />
          <MiniBlock
            title="Structure next"
            desc="The Playbook explains how regimes escalate, how timeframes interact, and how to interpret shifts."
          />
        </Section>
      </Reveal>

      {/* CTA */}
      <Reveal delayMs={400}>
        <section className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Ready to understand the system?
              </p>
              <p className="text-xs text-neutral-400">
                Reality explains the problem. Playbook explains the mechanics.
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
