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

function MiniCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-neutral-300">{desc}</div>
    </div>
  );
}

function StateRow({
  name,
  vibe,
  whatToDo,
}: {
  name: string;
  vibe: string;
  whatToDo: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white">
          {name}
        </span>
        <span className="text-xs text-neutral-400">{vibe}</span>
      </div>
      <div className="mt-3 text-sm text-neutral-300 leading-relaxed">
        <span className="font-semibold text-white">What you do:</span> {whatToDo}
      </div>
    </div>
  );
}

export default function ObserverPage() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Observer Portal
          </p>

          <div className="flex flex-wrap gap-2">
            <Pill>Map, not signals</Pill>
            <Pill>Time-in-market</Pill>
            <Pill>Regimes & transitions</Pill>
            <Pill>Beginner-friendly</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            REZIME tells you what time it is.
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
            People don’t lose because they “picked the wrong thing” — they lose
            because they didn’t know what phase the market was in. REZIME is a
            documentary lens on the battle happening in price: an Empire
            (dominant trend) and the challengers trying to overthrow it.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
            >
              Back to Home
            </Link>

            <Link
              href="/operator"
              className="rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-300 transition hover:bg-white/5"
            >
              Tools / Operator →
            </Link>
          </div>
        </section>
      </Reveal>

      {/* WHY THIS EXISTS */}
      <Reveal delayMs={80}>
        <Section
          eyebrow="Why REZIME exists"
          title="The common problem: you didn’t know the regime."
          subtitle="If you don’t know what phase you’re in, every bad outcome becomes possible."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <MiniCard
              title="1) You hold the right thing at the wrong time"
              desc="It goes sideways for months. You get bored, lose conviction, and exit right before it moves."
            />
            <MiniCard
              title="2) You buy during the wrong Empire"
              desc="You unknowingly enter while the ruling force is collapsing. Your entry isn’t the problem — the timing is."
            />
            <MiniCard
              title="3) You fight a strong trend"
              desc="You try to be contrarian when the Empire is at full strength. You might win one battle, but the war crushes you."
            />
            <MiniCard
              title="4) You get cooked by the storm"
              desc="Transitions are where volatility spikes. Most people size up when they should be reducing uncertainty."
            />
          </div>
        </Section>
      </Reveal>

      {/* WHAT IT IS / IS NOT */}
      <Reveal delayMs={140}>
        <Section
          eyebrow="Definition"
          title="REZIME is a map, not a prediction."
          subtitle="It doesn’t replace your strategy — it gives your strategy context."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white">What it is</div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                <li>• A regime lens: “Who’s ruling right now?”</li>
                <li>• A transition lens: “Is the storm coming?”</li>
                <li>• A behavior lens: “How do I act in this phase?”</li>
                <li>• A clarity tool: reduces panic + overtrading</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="text-sm font-semibold text-white">What it is not</div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                <li>• Not a holy grail</li>
                <li>• Not “buy/sell signals”</li>
                <li>• Not top/bottom hunting</li>
                <li>• Not a substitute for learning or experience</li>
              </ul>
            </div>
          </div>
        </Section>
      </Reveal>

      {/* 4 STATES */}
      <Reveal delayMs={200}>
        <Section
          eyebrow="The big picture"
          title="The 4 regime states"
          subtitle="If you can name the state, you stop arguing with reality."
        >
          <div className="space-y-4">
            <StateRow
              name="Empire"
              vibe="Dominant trend • holding is rewarded"
              whatToDo="Don’t fight it. If you’re in, protect your position. If you’re not, wait for safer re-entry windows."
            />
            <StateRow
              name="Rebellion"
              vibe="First instability • noise rises"
              whatToDo="Be selective. Rebellion can be a pullback… or the beginning of a bigger overthrow."
            />
            <StateRow
              name="Uprising"
              vibe="Transition becomes visible"
              whatToDo="This is storm territory. Reduce uncertainty. Don’t size up just because candles look exciting."
            />
            <StateRow
              name="Revolution"
              vibe="Regime flip • a new Empire is born"
              whatToDo="Reset your assumptions. What used to work may stop working — until the new Empire stabilizes."
            />
          </div>
        </Section>
      </Reveal>

      {/* STORYBOARD (compressed grid) */}
      <Reveal delayMs={260}>
        <Section
          eyebrow="How transitions evolve"
          title="The REZIME storyboard"
          subtitle="Transitions escalate in phases. Real markets aren’t linear — but naming the phase prevents phase-mismatch decisions."
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-neutral-300 leading-relaxed">
              Think of it like civil unrest inside an Empire:{" "}
              <span className="font-semibold text-white">
                you don’t fight Rome at its peak — you wait for cracks.
              </span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Standoff", "Small challengers test the Empire… and get pushed back."],
                ["Rebellion", "Challengers start winning. Instability becomes real."],
                ["Deadlock", "Conflict spreads. The fight becomes messy and visible."],
                ["Uprising", "The mid layer flips. The storm is now obvious."],
                ["Siege", "The Empire itself is pressured. Structure isn’t safe."],
                ["Revolution", "Regime flips. A new Empire begins forming."],
              ].map(([name, desc]) => (
                <div
                  key={name}
                  className="rounded-xl border border-white/10 bg-black/30 p-4"
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

            <div className="mt-4 text-xs text-neutral-500 leading-relaxed">
              REZIME doesn’t say “this always happens.” It says: if you can recognize
              the phase, you stop making phase-mismatched decisions.
            </div>
          </div>
        </Section>
      </Reveal>

      {/* WHAT THIS DOES FOR YOU (stress, survivability) */}
      <Reveal delayMs={320}>
        <Section
          eyebrow="The benefit"
          title="REZIME reduces stress by replacing confusion with context."
          subtitle="Stress usually isn’t risk — it’s not understanding what’s happening."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <MiniCard
              title="Withstand the storm"
              desc="REZIME helps you survive transitions without spiraling into impulsive decisions."
            />
            <MiniCard
              title="Avoid the storm"
              desc="Sometimes the best move is no move. Knowing the phase makes inactivity feel intelligent, not fearful."
            />
            <MiniCard
              title="Better experience, less burnout"
              desc="You build intuition faster when your experiences are high-quality — not random churn."
            />
            <MiniCard
              title="Works with any approach"
              desc="Use it with technicals, fundamentals, macro… or just as a sanity check on ‘what time it is.’"
            />
          </div>
        </Section>
      </Reveal>

      {/* CTA */}
      <Reveal delayMs={380}>
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold">Want the tool behavior?</div>
              <div className="text-xs text-neutral-400">
                Operator portal = how the Engine / Sync / Battle Lines express these regimes on chart.
              </div>
            </div>

            <Link
              href="/operator"
              className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
            >
              Enter Operator →
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
