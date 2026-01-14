import Link from "next/link";
import Section from "../components/Section";
import Reveal from "../components/Reveal";

function TocLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="block rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-300 hover:bg-white/10 hover:text-white transition"
    >
      {label}
    </a>
  );
}

function Card({
  n,
  title,
  desc,
  href,
}: {
  n: string;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
    >
      <div className="flex items-center justify-between">
        <div className="text-xs text-neutral-400">{n}</div>
        <div className="text-xs text-neutral-400 transition group-hover:text-neutral-200">
          Read →
        </div>
      </div>
      <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-300">{desc}</p>
    </a>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
      {children}
    </span>
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
            <Pill>Regime context</Pill>
            <Pill>Time-in-market</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Know what time it is in the market.
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
            REZIME is a documentary lens on market regimes. The goal is not to
            predict the next candle. It is to identify the ruling Empire and its
            phase so you stop fighting structure and start aligning exposure.
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
              Jump to Operator →
            </Link>
          </div>
        </section>
      </Reveal>

      {/* TOC + CONTENT */}
      <Reveal delayMs={80}>
        <section className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* TOC */}
          <aside className="space-y-3 lg:sticky lg:top-24 lg:h-fit">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Contents
            </p>
            <div className="grid gap-2">
              <TocLink href="#what" label="What is REZIME?" />
              <TocLink href="#why" label="Why regimes matter" />
              <TocLink href="#states" label="The 4 regime states" />
              <TocLink href="#storyboard" label="The storyboard (phases)" />
              <TocLink href="#how-to-read" label="How to use it (public)" />
              <TocLink href="#next" label="Where to go next" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-neutral-400 leading-relaxed">
              This portal is for people with zero market context. It explains
              the map, not execution rules.
            </div>
          </aside>

          {/* CONTENT */}
          <div className="space-y-12">
            {/* QUICK CHAPTERS */}
            <Reveal delayMs={120}>
              <Section
                eyebrow="Start here"
                title="Four chapters. One map."
                subtitle="High-level first. Technical behavior lives in Operator."
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card
                    n="1)"
                    title="What is REZIME?"
                    desc="A framework for time-in-market by identifying the ruling regime."
                    href="#what"
                  />
                  <Card
                    n="2)"
                    title="Why regimes matter"
                    desc="Most losses come from phase mismatch, not from bad entries."
                    href="#why"
                  />
                  <Card
                    n="3)"
                    title="The 4 regime states"
                    desc="Empire → Rebellion → Uprising → Revolution."
                    href="#states"
                  />
                  <Card
                    n="4)"
                    title="Storyboard (phases)"
                    desc="How transitions escalate: Standoff → Rebellion → Deadlock → Uprising → Siege → Revolution."
                    href="#storyboard"
                  />
                </div>
              </Section>
            </Reveal>

            {/* WHAT */}
            <Reveal delayMs={160}>
              <Section
                id="what"
                eyebrow="Definition"
                title="What is REZIME?"
                subtitle="REZIME is a regime map that helps you stay aligned with structure. It helps you hold through the right phases and avoid fighting the wrong ones."
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 text-sm leading-relaxed text-neutral-300">
                  <p>
                    Timing the market is hard because people don’t know{" "}
                    <span className="font-semibold text-white">what time</span>{" "}
                    they’re in. They buy the right instrument in the wrong
                    phase, then panic during the storm. Or they fade a trend
                    while the Empire is still strong.
                  </p>
                  <p>
                    REZIME doesn’t replace your method. It{" "}
                    <span className="font-semibold text-white">supplements</span>{" "}
                    it by adding context. Which side is winning, and how mature
                    the move is.
                  </p>
                </div>
              </Section>
            </Reveal>

            {/* WHY */}
            <Reveal delayMs={200}>
              <Section
                id="why"
                eyebrow="Why this exists"
                title="Why regimes matter"
                subtitle="If you don’t know the regime, four bad outcomes become likely: you fight the trend, you enter too late, you hold too short, or you get chopped during transitions."
              >
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm font-semibold text-white">
                      The core problem
                    </p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      Stress comes from not understanding the battle. If you can
                      name the regime and the phase, decision-making becomes
                      calmer, more structured, and less reactive.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                    <p className="text-sm font-semibold text-white">
                      The core benefit
                    </p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      REZIME helps you withstand the storm. Or avoid it. It’s a
                      lens that increases your chances of getting the right
                      experiences without burning out.
                    </p>
                  </div>
                </div>
              </Section>
            </Reveal>

            {/* STATES */}
            <Reveal delayMs={240}>
              <Section
                id="states"
                eyebrow="The map"
                title="The 4 regime states"
                subtitle="If you can name the state, you stop arguing with reality."
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 text-sm text-neutral-300">
                  <div className="flex flex-col gap-3">
                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <p className="text-sm">
                        <span className="font-semibold text-white">Empire:</span>{" "}
                        dominant trend. Holding is rewarded. Don’t fight it.
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <p className="text-sm">
                        <span className="font-semibold text-white">
                          Rebellion:
                        </span>{" "}
                        first instability. Noise increases. Entries become
                        selective.
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <p className="text-sm">
                        <span className="font-semibold text-white">
                          Uprising:
                        </span>{" "}
                        transition becomes visible. Risk control matters most.
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <p className="text-sm">
                        <span className="font-semibold text-white">
                          Revolution:
                        </span>{" "}
                        regime flips. The map resets. A new Empire is born.
                      </p>
                    </div>
                  </div>

                  <p className="pt-2 text-xs text-neutral-500 leading-relaxed">
                    This is the public vocabulary. The multi-timeframe mechanics
                    live in Operator.
                  </p>
                </div>
              </Section>
            </Reveal>

            {/* STORYBOARD */}
            <Reveal delayMs={280}>
              <Section
                id="storyboard"
                eyebrow="How transitions evolve"
                title="The storyboard (phases)"
                subtitle="Transitions escalate. The best entries tend to appear early, but early is noisy. Late is safer, but RR is worse."
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-sm text-neutral-300 leading-relaxed">
                    Civilizations don’t fall in a single day. Markets don’t flip
                    in a single candle.{" "}
                    <span className="font-semibold text-white">
                      You don’t fight Rome at its peak. You wait for cracks.
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      [
                        "Standoff",
                        "Small challengers test the Empire, then get pushed back.",
                      ],
                      [
                        "Rebellion",
                        "Challengers start winning. Instability becomes real.",
                      ],
                      [
                        "Deadlock",
                        "Conflict spreads. The fight becomes messy and visible.",
                      ],
                      [
                        "Uprising",
                        "The mid layer flips. The storm is now obvious.",
                      ],
                      [
                        "Siege",
                        "The Empire itself is pressured. Structure isn’t safe.",
                      ],
                      [
                        "Revolution",
                        "Regime flips. A new Empire begins forming.",
                      ],
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
                    REZIME doesn’t claim perfect prediction. It gives you a
                    phase vocabulary so you stop making phase-mismatched
                    decisions.
                  </div>
                </div>
              </Section>
            </Reveal>

            {/* HOW TO READ */}
            <Reveal delayMs={320}>
              <Section
                id="how-to-read"
                eyebrow="Practical use"
                title="How to use REZIME (public version)"
                subtitle="A simple flow: identify regime → align exposure → respect transitions."
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 text-sm text-neutral-300 leading-relaxed">
                  <p>
                    1) Name the regime (Empire / Rebellion / Uprising /
                    Revolution). 2) Match behavior: hold, wait, reduce exposure,
                    or reposition. 3) Don’t become contrarian inside full
                    alignment. Wait for cracks.
                  </p>

                  <p className="text-xs text-neutral-500">
                    Your personal style decides entries. REZIME decides context.
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/operator"
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
                    >
                      Go to Operator → (tools & rules)
                    </Link>
                  </div>
                </div>
              </Section>
            </Reveal>

            {/* NEXT */}
            <Reveal delayMs={360}>
              <Section
                id="next"
                eyebrow="Navigation"
                title="Where to go next"
                subtitle="Observer explains the map. Operator explains the tool behavior. Allocator is for proof, risk, and institutional framing."
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/operator"
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                  >
                    <div className="text-xs uppercase tracking-widest text-neutral-400">
                      Operator
                    </div>
                    <div className="mt-2 text-base font-semibold text-white">
                      Interpretation rules + indicator behavior
                    </div>
                    <div className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      Engine / Sync / Battle Lines: what they show and how to use
                      them.
                    </div>
                  </Link>

                  <Link
                    href="/allocator"
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                  >
                    <div className="text-xs uppercase tracking-widest text-neutral-400">
                      Allocator
                    </div>
                    <div className="mt-2 text-base font-semibold text-white">
                      Proof + risk posture + reporting cadence
                    </div>
                    <div className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      Built for institutional eyes: auditability, governance, and
                      IR tone.
                    </div>
                  </Link>
                </div>
              </Section>
            </Reveal>

            {/* BOTTOM CTA */}
            <Reveal delayMs={400}>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Want the tools and mechanics?
                    </div>
                    <div className="text-xs text-neutral-400">
                      Operator portal = interpretation rules + Engine / Sync /
                      Battle Lines behavior.
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
        </section>
      </Reveal>
    </div>
  );
}
