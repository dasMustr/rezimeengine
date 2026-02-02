import Link from "next/link";
import Reveal from "../components/Reveal";
import Sheen from "../components/Sheen";

function StepCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="premium-card relative rounded-2xl border border-white/10 bg-white/5 p-6">
      <Sheen />
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-300">{desc}</p>
    </div>
  );
}

export default function StartPage() {
  return (
    <section className="space-y-12">
      <Reveal delayMs={0}>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
          <div className="relative space-y-4">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
              Curious Cat 🐾 • Start here
            </p>
            <h1 className="max-w-4xl text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl">
              Markets aren’t scary — but they are unforgiving.
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
              This page explains the basics: what trading is, what charts and indicators are, and why most people
              lose money. No hype. Just reality — and a clear path forward.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/observer"
                className="premium-card relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                After this: Learn the map
              </Link>

              <Link
                href="/pricing#waitlist"
                className="premium-card relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
              >
                <Sheen className="rounded-full" />
                Subscribe (Coming Soon)
              </Link>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed">
              Goal: survive first → build skill → then care about performance.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delayMs={80}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StepCard
            title="1) What is a market?"
            desc="A market is price discovery: buyers and sellers negotiating value in public. It’s not a salary and not a casino — it’s a competitive environment."
          />
          <StepCard
            title="2) Trading vs investing"
            desc="Investing is longer horizon ownership. Trading is shorter horizon participation. Both can work — but both punish confusion and overconfidence."
          />
          <StepCard
            title="3) What is a chart?"
            desc="A chart is a compressed history of transactions. It’s not magic — it’s a lens. Different timeframes show different levels of behavior."
          />
          <StepCard
            title="4) What is TradingView?"
            desc="A popular charting platform where you analyze price and apply indicators. It’s the standard workspace for many traders."
          />
          <StepCard
            title="5) What are indicators?"
            desc="Indicators are visual tools that summarize behavior. The danger: treating them like signals instead of context. REZIME is a map, not a trigger."
          />
          <StepCard
            title="6) Why beginners lose"
            desc="Most losses come from phase mismatch: trading aggressively in chop, forcing entries, and staying active when the environment is unclear."
          />
        </div>
      </Reveal>

      <Reveal delayMs={140}>
        <div className="premium-card relative rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <Sheen />
          <h2 className="text-xl font-semibold tracking-tight">
            Why REZIME exists
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-300">
            You can’t be profitable if you can’t survive. REZIME compresses market complexity into regimes so you stop
            guessing, reduce phase-mismatch mistakes, and stay alive long enough to develop real skill.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/observer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
            >
              Learn the map →
            </Link>
            <Link
              href="/operator"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
            >
              View the Playbook →
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
            >
              Read FAQ →
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
