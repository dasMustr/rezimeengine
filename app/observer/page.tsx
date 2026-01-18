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

function FaqItem({
  n,
  q,
  children,
}: {
  n: string;
  q: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-black/30 open:bg-white/5 transition">
      <summary className="cursor-pointer list-none px-5 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="text-[11px] uppercase tracking-widest text-neutral-500">
              FAQ {n}
            </div>
            <div className="mt-1 text-sm font-semibold text-white">{q}</div>
          </div>

          <div className="mt-1 shrink-0 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-neutral-300 transition group-open:bg-white/10">
            <span className="group-open:hidden">Open</span>
            <span className="hidden group-open:inline">Close</span>
          </div>
        </div>
      </summary>

      <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-neutral-300 space-y-3">
        {children}
      </div>
    </details>
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
            Learn the regimes. Recognize the phase.
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
            Observer is a plain-language introduction to REZIME. It teaches the
            regime vocabulary and transition phases so you can name what you are
            seeing, reduce confusion, and make calmer decisions in markets.
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
              <TocLink href="#faq" label="FAQ (REZIME Engine)" />
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
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  {/* Flow chips */}
                  <div className="flex flex-wrap gap-2 text-[11px]">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-neutral-300">
                      Identify regime
                    </span>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-neutral-300">
                      Align exposure
                    </span>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-neutral-300">
                      Respect transitions
                    </span>
                  </div>

                  {/* Steps */}
                  <div className="mt-5 space-y-3 text-sm text-neutral-300 leading-relaxed">
                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs uppercase tracking-widest text-neutral-400">
                        Step 1
                      </div>
                      <div className="mt-1">
                        Name the regime:{" "}
                        <span className="text-white">Empire</span>,{" "}
                        <span className="text-white">Rebellion</span>,{" "}
                        <span className="text-white">Uprising</span>,{" "}
                        <span className="text-white">Revolution</span>.
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs uppercase tracking-widest text-neutral-400">
                        Step 2
                      </div>
                      <div className="mt-1">
                        Match behavior: hold, wait, reduce exposure, or reposition.
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs uppercase tracking-widest text-neutral-400">
                        Step 3
                      </div>
                      <div className="mt-1">
                        Avoid contrarian decisions during full alignment. Wait for cracks.
                      </div>
                    </div>

                    <p className="pt-1 text-xs text-neutral-500">
                      Your style decides entries. REZIME decides context.
                    </p>
                  </div>
                </div>
              </Section>
            </Reveal>

            {/* FAQ */}
            <Reveal delayMs={340}>
              <Section
                id="faq"
                eyebrow="FAQ"
                title="REZIME Engine FAQ"
                subtitle="Clear answers. No hype. This is a survival-first map designed to keep you from being right in the wrong regime."
              >
                <div className="space-y-3">
                  <FaqItem n="1" q="What is REZIME Engine?">
                    <p>
                      REZIME Engine is a <span className="font-semibold text-white">market regime map</span>.
                      It classifies the market into clear states so you can stop guessing.
                    </p>

                    <div className="grid gap-2 sm:grid-cols-3">
                      <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                        <div className="text-xs uppercase tracking-widest text-neutral-400">
                          Empire
                        </div>
                        <div className="mt-1 text-sm text-neutral-300">
                          stable continuation
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                        <div className="text-xs uppercase tracking-widest text-neutral-400">
                          Siege
                        </div>
                        <div className="mt-1 text-sm text-neutral-300">
                          uncertainty, conflict, chop
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                        <div className="text-xs uppercase tracking-widest text-neutral-400">
                          Revolution
                        </div>
                        <div className="mt-1 text-sm text-neutral-300">
                          major shift, reset, regime change
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-500 leading-relaxed">
                      Beginner-friendly by design — but deep enough to scale into advanced market participation over time.
                    </p>
                  </FaqItem>

                  <FaqItem n="2" q='Is REZIME Engine a “signal indicator”?'>
                    <p className="font-semibold text-white">No.</p>
                    <p>
                      REZIME Engine is <span className="font-semibold text-white">map, not signals</span>.
                      It does not say “Buy here” or “Sell here.”
                    </p>
                    <p>Instead, it helps you see:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>what environment the market is in</li>
                      <li>whether conditions are stable or unstable</li>
                      <li>whether continuation or transition is more likely</li>
                    </ul>
                    <p>
                      You still make decisions. REZIME Engine simply makes the market easier to read.
                    </p>
                  </FaqItem>

                  <FaqItem n="3" q="Why would I only “survive” the markets? I want to make money.">
                    <p>
                      Survival is step one because most beginners do not lose money from bad entries.
                      They lose money from staying in the wrong regime.
                    </p>

                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs uppercase tracking-widest text-neutral-400">
                        Example mistakes
                      </div>
                      <ul className="mt-2 list-disc pl-5 space-y-1">
                        <li>staying bullish in a Bear Empire</li>
                        <li>holding through a Revolution</li>
                        <li>forcing entries during Siege</li>
                      </ul>
                    </div>

                    <p>
                      REZIME Engine is built on a simple idea:
                      <span className="font-semibold text-white"> Once you stop getting dragged, making money becomes easier.</span>
                    </p>
                    <p className="text-xs text-neutral-500">
                      Clarity first. Profits later. (And this is exactly why the Portfolio Lab exists.)
                    </p>
                  </FaqItem>

                  <FaqItem n="4" q="Do you guarantee profits?">
                    <p className="font-semibold text-white">No.</p>
                    <p>
                      Markets always contain randomness, and no tool can remove that.
                    </p>
                    <p>What REZIME Engine does reduce:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>confusion</li>
                      <li>overconfidence in the wrong environment</li>
                      <li>holding through regime shifts</li>
                      <li>aggressive participation when the market has changed character</li>
                    </ul>
                    <p>
                      REZIME Engine does not promise outcomes. It improves decision quality.
                    </p>
                  </FaqItem>

                  <FaqItem n="5" q="Is REZIME Engine the holy grail?">
                    <p className="font-semibold text-white">No.</p>
                    <p>
                      REZIME Engine is not meant to be your final strategy.
                      It is meant to keep you alive long enough to develop one.
                    </p>

                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs uppercase tracking-widest text-neutral-400">
                        Think of it like this
                      </div>
                      <ul className="mt-2 list-disc pl-5 space-y-1">
                        <li>survive first</li>
                        <li>gain experience</li>
                        <li>build your own edge</li>
                      </ul>
                    </div>

                    <p>
                      REZIME Engine is also <span className="font-semibold text-white">supplementary</span> by nature.
                      It fits on top of almost any approach, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>technical analysis</li>
                      <li>macro and fundamentals</li>
                      <li>trend structure / support resistance</li>
                      <li>supply-demand concepts</li>
                      <li>order blocks and discretionary execution</li>
                    </ul>

                    <p>
                      It helps you avoid being <span className="font-semibold text-white">“right” in the wrong regime.</span>
                    </p>
                  </FaqItem>

                  <FaqItem n="6" q="What markets does REZIME Engine work on?">
                    <p>
                      REZIME Engine works on anything that can be charted.
                    </p>
                    <p>
                      If <span className="font-semibold text-white">price moves</span>,
                      supply and demand exist, and there is a usable chart — then REZIME applies.
                    </p>
                    <p className="text-xs text-neutral-500">
                      Includes (but not limited to): stocks, crypto, indices, forex, metals, futures, commodities, bonds, and more.
                    </p>
                  </FaqItem>

                  <FaqItem n="7" q="What timeframe should I use?">
                    <p>
                      If you are new: <span className="font-semibold text-white">start higher</span>.
                      Higher timeframes are cleaner and reduce noise.
                    </p>

                    <div className="grid gap-2 sm:grid-cols-2">
                      <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                        <div className="text-xs uppercase tracking-widest text-neutral-400">
                          Stocks
                        </div>
                        <div className="mt-1 text-sm text-neutral-300">
                          Daily or Weekly
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                        <div className="text-xs uppercase tracking-widest text-neutral-400">
                          Crypto / Futures / Forex
                        </div>
                        <div className="mt-1 text-sm text-neutral-300">
                          4H or Daily
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-500">
                      As skill increases, faster timeframes become usable — but fast timeframes require discipline and strong risk control.
                    </p>
                  </FaqItem>

                  <FaqItem n="8" q="Why are there 3 indicators (Engine + Sync + Battle Lines)?">
                    <p>
                      They are separated intentionally because they represent three different skill levels.
                    </p>

                    <div className="grid gap-2 sm:grid-cols-3">
                      <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                        <div className="text-xs uppercase tracking-widest text-neutral-400">
                          REZIME Engine
                        </div>
                        <div className="mt-1 text-sm text-neutral-300">
                          Beginner — one timeframe, simple regime clarity
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                        <div className="text-xs uppercase tracking-widest text-neutral-400">
                          REZIME Sync
                        </div>
                        <div className="mt-1 text-sm text-neutral-300">
                          Intermediate — multi-timeframe alignment
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                        <div className="text-xs uppercase tracking-widest text-neutral-400">
                          Battle Lines
                        </div>
                        <div className="mt-1 text-sm text-neutral-300">
                          Advanced — territory walls for timing & management
                        </div>
                      </div>
                    </div>

                    <p>
                      You do not need all three at once.
                      <span className="font-semibold text-white"> You upgrade only when your skill upgrades.</span>
                    </p>
                  </FaqItem>

                  <FaqItem n="9" q="REZIME Sync: how do I choose timeframes? (the 3–5 gap rule)">
                    <p>
                      REZIME Sync works best when timeframes have a meaningful distance.
                    </p>
                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs uppercase tracking-widest text-neutral-400">
                        Gap rule
                      </div>
                      <div className="mt-2 text-sm text-neutral-300">
                        Sweet spot: <span className="text-white">3 to 5 steps</span> · Maximum: <span className="text-white">6 steps</span>
                      </div>
                    </div>

                    <p className="mt-2">Examples:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>4H – 1H – 15M</li>
                      <li>Daily – 4H – 1H</li>
                      <li>Weekly – Daily – 2H (commonly useful for stocks)</li>
                    </ul>

                    <p className="text-xs text-neutral-500">
                      If you stretch timeframes too far (example: Weekly → 1M), alignment becomes weak and less meaningful.
                      Sync is designed to keep your participation structured, not chaotic.
                    </p>
                  </FaqItem>

                  <FaqItem n="10" q="Where can I see proof that it works?">
                    <p className="font-semibold text-white">In the Portfolio Lab.</p>
                    <p>
                      The Portfolio Lab exists to show one thing:
                      <span className="font-semibold text-white"> REZIME Engine is not theory. It is applied.</span>
                    </p>
                    <p>
                      It documents REZIME across real markets and real regimes, with a focus on:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>staying alive first</li>
                      <li>controlling drawdowns</li>
                      <li>avoiding regime traps</li>
                      <li>building clarity over time</li>
                    </ul>

                    <div className="pt-2 flex flex-wrap gap-3">
                      <Link
                        href="/allocator"
                        className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
                      >
                        Go to Portfolio Lab →
                      </Link>
                      <span className="text-xs text-neutral-500 flex items-center">
                        (This will point to /portfolio-lab once you rename the route.)
                      </span>
                    </div>
                  </FaqItem>
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
