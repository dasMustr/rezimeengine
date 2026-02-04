import Link from "next/link";
import Reveal from "../components/Reveal";
import Sheen from "../components/Sheen";

function StepCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="calm-block relative rounded-2xl border border-white/10 bg-white/5 p-6">
      <Sheen />
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-300">{desc}</p>
    </div>
  );
}

function MiniCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="calm-block relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <Sheen />
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-neutral-300">
        {items.map((x) => (
          <li key={x} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-white/40" />
            <span className="leading-relaxed">{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function StartPage() {
  return (
    <section className="space-y-12">
      {/* HERO */}
      <Reveal delayMs={0}>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
          <div className="relative space-y-5">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
              New to markets? • Orientation
            </p>

            <h1 className="max-w-4xl text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl">
              Before strategy, learn how people blow up.
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
              If you’re new: you don’t need a “strategy” yet. You need orientation.
              This page explains what trading is, what charts and indicators are,
              and why most beginners lose money. No hype. Just a clear path.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="#basics"
                className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Start the basics
              </Link>

              <Link
                href="/observer"
                className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
              >
                <Sheen className="rounded-full" />
                Already trading? Start with the map →
              </Link>

              <Link
                href="/pricing#waitlist"
                className="ml-1 inline-flex items-center text-sm text-neutral-400 hover:text-white transition"
              >
                Subscribe (Coming Soon) →
              </Link>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed">
              Goal: survive first → build skill → then care about performance.
            </p>
          </div>
        </div>
      </Reveal>

      {/* BASICS GRID */}
      <Reveal delayMs={80}>
        <div id="basics" className="space-y-4 scroll-mt-28">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
              Basics
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight">
              The world in plain language
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-neutral-400 leading-relaxed">
              You’re not here to “predict.” You’re here to understand what you’re participating in.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <StepCard
              title="1) What is a market?"
              desc="A market is price discovery: buyers and sellers negotiating value in public. Price moves because opinions, information, risk, and urgency change."
            />
            <StepCard
              title="2) Trading vs investing"
              desc="Investing is longer-horizon ownership. Trading is shorter-horizon participation. Both can work — but both punish confusion, leverage, and impatience."
            />
            <StepCard
              title="3) What is a chart?"
              desc="A chart is a compressed history of transactions. Different timeframes show different layers of behavior: noise (small) vs structure (large)."
            />
            <StepCard
              title="4) What is TradingView?"
              desc="A charting workspace many traders use to view price and apply indicators. Think of it like a cockpit for analysis — not a promise of profit."
            />
            <StepCard
              title="5) What are indicators?"
              desc="Indicators summarize behavior. They can reduce noise — but they’re not prophecy. The danger is treating them like automatic buy/sell signals."
            />
            <StepCard
              title="6) Why beginners lose"
              desc="Most losses aren’t from one bad entry. They come from staying aggressive in the wrong environment: chop, uncertainty, and phase mismatch."
            />
          </div>

          <div className="pt-2">
            <Link
              href="/faq"
              className="inline-flex items-center text-sm text-neutral-400 hover:text-white transition"
            >
              Still confused? Read the FAQ →
            </Link>
          </div>
        </div>
      </Reveal>

      {/* APPROACHES + TOOLING */}
      <Reveal delayMs={140}>
        <div className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
              Orientation
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight">
              What people try, and what you actually need
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <MiniCard
              title="Common approaches people try"
              items={[
                "Fundamental: value, economics, company analysis (slower, research-heavy).",
                "Technical: charts, trend/structure, timing (faster feedback loop).",
                "Systematic: rules + backtesting + automation mindset.",
                "Portfolio-style: long-term allocation + rebalancing + risk control.",
              ]}
            />
            <MiniCard
              title="What you actually need to start"
              items={[
                "A charting platform (TradingView is common).",
                "One market to focus on (avoid jumping everywhere).",
                "A risk boundary (so one mistake can’t end you).",
                "A journal or notes (to learn from repetition).",
              ]}
            />
            <MiniCard
              title="Reality check (healthy expectations)"
              items={[
                "This is not a get-rich-quick path. It’s a skill.",
                "Even professionals have drawdowns and uncertainty.",
                "Your first milestone isn’t profit — it’s not blowing up.",
                "Survival gives you time. Time gives you edge.",
              ]}
            />
          </div>
        </div>
      </Reveal>

      {/* BRIDGE TO REZIME */}
      <Reveal delayMs={200}>
        <div className="calm-block relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <Sheen />
          <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
            The bridge
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight">
            Why REZIME exists
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-300">
            You can’t be profitable if you can’t survive. REZIME compresses market complexity into regimes
            so you stop guessing, reduce phase-mismatch mistakes, and stay alive long enough to build real skill.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-400">
            REZIME is a map, not signals — it helps you understand the environment so your decisions become calmer,
            slower, and more consistent.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/observer"
              className="premium-card is-clickable inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
            >
              Learn the map →
            </Link>
            <Link
              href="/operator"
              className="premium-card is-clickable inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
            >
              View the Playbook →
            </Link>
            <Link
              href="/pricing#waitlist"
              className="premium-card is-clickable inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
            >
              Pricing / Waitlist →
            </Link>
            <Link
              href="/faq"
              className="premium-card is-clickable inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
            >
              Read FAQ →
            </Link>
          </div>

          <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
            If you only take one idea from this page: survival buys you time — and time is the only thing that lets skill compound.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
