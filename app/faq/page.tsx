import Link from "next/link";
import Reveal from "../components/Reveal";
import Sheen from "../components/Sheen";

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
    <details className="group rounded-2xl border border-white/10 bg-white/[0.03] open:bg-white/5 transition">
      <summary className="cursor-pointer list-none px-5 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
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

function MiniCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="premium-card group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/5"
    >
      <Sheen />
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="mt-2 text-xs leading-relaxed text-neutral-400">
            {desc}
          </div>
        </div>
        <span className="mt-1 text-xs text-neutral-400 group-hover:text-neutral-200 transition">
          Enter →
        </span>
      </div>
    </Link>
  );
}

export default function FaqPage() {
  return (
    <section className="space-y-14">
      {/* HERO */}
      <Reveal delayMs={0}>
        <div className="premium-card relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
          <Sheen />

          <div className="relative space-y-6">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
              REZIME Engine FAQ
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Clear answers. No hype.
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
              REZIME Engine is a market regime map built for survivability. It
              helps you stop being right in the wrong regime.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/"
                className="premium-card relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-neutral-200 transition hover:bg-white/10"
              >
                <Sheen className="rounded-full" />
                Back to Home
              </Link>

              <Link
                href="/observer"
                className="premium-card relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
              >
                <Sheen className="rounded-full" />
                Start with Learn →
              </Link>

              <Link
                href="/allocator"
                className="premium-card relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                View Proof (Portfolio Lab) →
              </Link>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed">
              New here? Read this FAQ → then go to Learn → then check Portfolio
              Lab proof.
            </p>
          </div>
        </div>
      </Reveal>

      {/* FAQ CARD */}
      <Reveal delayMs={90}>
        <div className="premium-card relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <Sheen />

          <div className="space-y-6">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                  FAQ
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight">
                  REZIME Engine FAQ
                </h2>
              </div>

              <div className="flex gap-2">
                <Link
                  href="/observer"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
                >
                  Learn →
                </Link>
                <Link
                  href="/operator"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
                >
                  Playbook →
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <FaqItem n="1" q="What is REZIME Engine?">
                <p>
                  REZIME Engine is a{" "}
                  <span className="font-semibold text-white">
                    market regime map
                  </span>
                  . It classifies the market into clear states so you can stop
                  guessing.
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
                  Beginner-friendly by design — but deep enough to scale into
                  advanced market participation over time.
                </p>
              </FaqItem>

              <FaqItem n="2" q='Is REZIME Engine a “signal indicator”?'>
                <p className="font-semibold text-white">No.</p>

                <p>
                  REZIME Engine is{" "}
                  <span className="font-semibold text-white">
                    map, not signals
                  </span>
                  . It does not say “Buy here” or “Sell here.”
                </p>

                <p>Instead, it helps you see:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>what environment the market is in</li>
                  <li>whether conditions are stable or unstable</li>
                  <li>whether continuation or transition is more likely</li>
                </ul>

                <p>
                  You still make decisions. REZIME Engine simply makes the
                  market easier to read.
                </p>
              </FaqItem>

              <FaqItem
                n="3"
                q="Why would I only “survive” the markets? I want to make money."
              >
                <p>
                  Survival is step one because most beginners do not lose money
                  from bad entries. They lose money from staying in the wrong
                  regime.
                </p>

                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <div className="text-xs uppercase tracking-widest text-neutral-400">
                    Example
                  </div>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>staying bullish in a Bear Empire</li>
                    <li>holding through a Revolution</li>
                    <li>forcing entries during Siege</li>
                  </ul>
                </div>

                <p>
                  REZIME Engine is built on a simple idea:
                  <span className="font-semibold text-white">
                    {" "}
                    once you stop getting dragged, making money becomes easier.
                  </span>
                </p>

                <p className="text-xs text-neutral-500">
                  Clarity first. Profits later. (And this is exactly why the
                  Portfolio Lab exists.)
                </p>
              </FaqItem>

              <FaqItem n="4" q="Do you guarantee profits?">
                <p className="font-semibold text-white">No.</p>

                <p>
                  Markets always contain randomness, and no tool can remove
                  that.
                </p>

                <p>What REZIME Engine does reduce:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>confusion</li>
                  <li>overconfidence in the wrong environment</li>
                  <li>holding through regime shifts</li>
                  <li>
                    aggressive participation when the market has changed
                    character
                  </li>
                </ul>

                <p>
                  REZIME Engine does not promise outcomes. It improves decision
                  quality.
                </p>
              </FaqItem>

              <FaqItem n="5" q="Is REZIME Engine the holy grail?">
                <p className="font-semibold text-white">No.</p>

                <p>
                  REZIME Engine is not meant to be your final strategy. It is
                  meant to keep you alive long enough to develop one.
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
                  REZIME Engine is also{" "}
                  <span className="font-semibold text-white">
                    supplementary
                  </span>{" "}
                  by nature. It fits on top of almost any approach, including:
                </p>

                <ul className="list-disc pl-5 space-y-1">
                  <li>technical analysis</li>
                  <li>macro and fundamentals</li>
                  <li>trend structure / support resistance</li>
                  <li>supply-demand concepts</li>
                  <li>order blocks and discretionary execution</li>
                </ul>

                <p>
                  It helps you avoid being{" "}
                  <span className="font-semibold text-white">right</span> in the
                  wrong regime.
                </p>
              </FaqItem>

              <FaqItem n="6" q="What markets does REZIME Engine work on?">
                <p>REZIME Engine works on anything that can be charted.</p>

                <p>
                  If price moves, supply and demand exist, and there is a usable
                  chart — then REZIME applies.
                </p>

                <p className="text-xs text-neutral-500">
                  Includes (but not limited to): stocks, crypto, indices, forex,
                  metals, futures, commodities, bonds, and more.
                </p>
              </FaqItem>

              <FaqItem n="7" q="What timeframe should I use?">
                <p>
                  If you are new:{" "}
                  <span className="font-semibold text-white">start higher</span>
                  . Higher timeframes are cleaner and reduce noise.
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
                  As skill increases, faster timeframes become usable — but they
                  require discipline and strong risk control.
                </p>
              </FaqItem>

              <FaqItem
                n="8"
                q="Why are there 3 indicators (Engine + Sync + Battle Lines)?"
              >
                <p>
                  They are separated intentionally because they represent three
                  different skill levels.
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
                  <span className="font-semibold text-white">
                    {" "}
                    You upgrade only when your skill upgrades.
                  </span>
                </p>
              </FaqItem>

              <FaqItem
                n="9"
                q="REZIME Sync: how do I choose timeframes? (the 3–5 gap rule)"
              >
                <p>
                  REZIME Sync works best when timeframes have a meaningful
                  distance.
                </p>

                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <div className="text-xs uppercase tracking-widest text-neutral-400">
                    Gap rule
                  </div>
                  <div className="mt-2 text-sm text-neutral-300">
                    Sweet spot:{" "}
                    <span className="text-white">3 to 5 steps</span> · Maximum:{" "}
                    <span className="text-white">6 steps</span>
                  </div>
                </div>

                <p className="mt-2">Examples:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>4H – 1H – 15M</li>
                  <li>Daily – 4H – 1H</li>
                  <li>Weekly – Daily – 2H (commonly useful for stocks)</li>
                </ul>

                <p className="text-xs text-neutral-500">
                  If you stretch timeframes too far (example: Weekly → 1M),
                  alignment becomes weak and less meaningful. Sync is designed
                  to keep your participation structured, not chaotic.
                </p>
              </FaqItem>

              <FaqItem n="10" q="Where can I see proof that it works?">
                <p className="font-semibold text-white">In the Portfolio Lab.</p>

                <p>
                  The Portfolio Lab exists to show one thing:
                  <span className="font-semibold text-white">
                    {" "}
                    REZIME Engine is not theory. It is applied.
                  </span>
                </p>

                <p>
                  It documents REZIME across real markets and real regimes, with
                  a focus on:
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
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
                  >
                    Go to Portfolio Lab →
                  </Link>
                  <span className="text-xs text-neutral-500 flex items-center">
                    (You can rename /allocator → /portfolio-lab later.)
                  </span>
                </div>
              </FaqItem>
            </div>
          </div>
        </div>
      </Reveal>

      {/* NEXT STEPS */}
      <Reveal delayMs={160}>
        <div className="grid gap-4 sm:grid-cols-3">
          <MiniCard
            title="Learn"
            desc="Start with the map: regimes, transitions, and survival-first thinking."
            href="/observer"
          />
          <MiniCard
            title="Playbook"
            desc="Interpretation rules for Engine / Sync / Battle Lines."
            href="/operator"
          />
          <MiniCard
            title="Portfolio Lab"
            desc="Proof archive: applied documentation across real regimes."
            href="/allocator"
          />
        </div>
      </Reveal>
    </section>
  );
}
