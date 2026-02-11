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

export default function FaqPage() {
  return (
    <section className="space-y-14">

      {/* HERO */}
      <Reveal delayMs={0}>
        <div className="premium-card relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
          <Sheen />

          <div className="relative space-y-6">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
              REZIME Framework FAQ
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Clarifications on scope, function, and design intent.
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
              REZIME is a regime-classification framework built to condition
              market participation based on environment, not conviction.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/"
                className="premium-card relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-neutral-200 transition hover:bg-white/10"
              >
                Back to Home
              </Link>

              <Link
                href="/allocator"
                className="premium-card relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
              >
                Portfolio Lab →
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      {/* FAQ BODY */}
      <Reveal delayMs={90}>
        <div className="premium-card relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <Sheen />

          <div className="space-y-3">

            <FaqItem n="1" q="What is REZIME Engine?">
              <p>
                REZIME Engine is a <span className="text-white font-semibold">market regime classification layer</span>.
                It structures price behavior into defined states so participation decisions are conditioned by environment.
              </p>
              <p>
                The framework separates continuation, conflict, and transition phases
                so decision context is visible before engagement.
              </p>
            </FaqItem>

            <FaqItem n="2" q="Is REZIME a signal indicator?">
              <p>
                REZIME does not generate trade signals. It provides <span className="text-white font-semibold">state awareness</span>.
              </p>
              <p>
                It clarifies whether the environment is stable, unstable, or transitioning.
                Execution decisions remain the operator’s responsibility.
              </p>
            </FaqItem>

            <FaqItem n="3" q="Why is survivability emphasized?">
              <p>
                Drawdowns commonly arise from environment misalignment rather than entry precision.
                Conditioning participation to regime reduces avoidable exposure errors.
              </p>
              <p>
                Outcome consistency typically improves once structural misalignment is reduced.
              </p>
            </FaqItem>

            <FaqItem n="4" q="Does REZIME guarantee profits?">
              <p>
                Markets contain randomness and structural shifts.
                REZIME improves decision context; it does not alter probability distribution.
              </p>
              <p>
                Its function is to improve environmental awareness and reduce behavior-driven losses.
              </p>
            </FaqItem>

            <FaqItem n="5" q="Is REZIME a complete trading system?">
              <p>
                REZIME is a <span className="text-white font-semibold">framework layer</span>, not a full strategy.
              </p>
              <p>
                It integrates with discretionary, systematic, macro, or technical approaches
                by conditioning when participation is structurally favorable.
              </p>
            </FaqItem>

            <FaqItem n="6" q="Which markets does REZIME apply to?">
              <p>
                Any market with continuous price discovery and chartable structure.
                The framework is environment-based, not asset-specific.
              </p>
            </FaqItem>

            <FaqItem n="7" q="How should timeframes be selected?">
              <p>
                Higher timeframes provide cleaner regime definition.
                Lower timeframes require stronger discipline and risk control.
              </p>
              <p>
                Timeframe choice should match operator experience and execution profile.
              </p>
            </FaqItem>

            <FaqItem n="8" q="Why are Engine, Sync, and Battle Lines separated?">
              <p>
                Each module represents a different analytical layer:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Engine → regime classification</li>
                <li>Sync → multi-timeframe alignment</li>
                <li>Battle Lines → structural reference levels</li>
              </ul>
              <p>
                Separation preserves clarity and prevents premature complexity.
              </p>
            </FaqItem>

            <FaqItem n="9" q="Where can the framework be seen in application?">
              <p>
                The Portfolio Lab documents environment context, posture decisions,
                and behavioral consistency across changing regimes.
              </p>
            </FaqItem>

          </div>
        </div>
      </Reveal>
    </section>
  );
}
