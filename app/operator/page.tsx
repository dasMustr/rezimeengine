import Link from "next/link";
import Reveal from "../components/Reveal";
import TradingViewAdvancedChart from "../components/TradingViewAdvancedChart";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
      {children}
    </span>
  );
}

function Section({
  id,
  eyebrow,
  title,
  desc,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  desc?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-5">
      <div className="space-y-2">
        {eyebrow && (
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        {desc && (
          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            {desc}
          </p>
        )}
      </div>
      {children}
    </section>
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
    <div className="premium-card relative rounded-2xl border border-white/10 bg-white/5 p-6">
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
      className="block rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-300 hover:bg-white/10 hover:text-white transition"
    >
      {label}
    </a>
  );
}

export default function OperatorPage() {
  return (
    <div className="space-y-14">
      {/* Hero */}
      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Operator Portal
          </p>

          <div className="flex flex-wrap gap-2">
            <Pill>Map, not signals</Pill>
            <Pill>HTF → MTF → LTF relationships</Pill>
            <Pill>Risk-first doctrine</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Tools + rules for reading regimes.
          </h1>

          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            This portal explains how to interpret REZIME Engine, Sync, and Battle
            Lines. It does not tell you to buy/sell. The goal is to reduce
            decision-noise and keep exposure aligned with the dominant Empire.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/observer"
              className="premium-card relative rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
            >
              ← Observer
            </Link>
            <Link
              href="/allocator"
              className="premium-card relative rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-300 hover:bg-white/5 transition"
            >
              Allocator →
            </Link>
          </div>
        </section>
      </Reveal>

      {/* TradingView chart (Operator-only) */}
      <Reveal delayMs={90}>
        <section className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400">
                Live context (widget)
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">
                Interactive chart sandbox
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-neutral-300 leading-relaxed">
                This is for vibe + demonstration only. Operator gets the “alive”
                tooling; Home stays ultra-light.
              </p>
            </div>

            <div className="text-xs text-neutral-500">
              Default: XAUUSD • 1H • Dark
            </div>
          </div>

          <TradingViewAdvancedChart symbol="OANDA:XAUUSD" interval="60" height={520} />
        </section>
      </Reveal>

      {/* Layout: TOC + content */}
      <Reveal delayMs={140}>
        <section className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* TOC */}
          <aside className="space-y-3 lg:sticky lg:top-24 lg:h-fit">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Contents
            </p>
            <div className="grid gap-2">
              <TocLink href="#stack" label="The Stack (Engine / Sync / Lines)" />
              <TocLink href="#interpret" label="Interpretation Rules" />
              <TocLink href="#doctrine" label="Operator Doctrine" />
              <TocLink href="#case" label="Case Study Slots" />
              <TocLink href="#ip" label="What’s Shown vs Hidden" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-neutral-400 leading-relaxed">
              Tip: If you’re new, read Observer first. Operator is intentionally
              “docs-like.”
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-12">
            <Reveal delayMs={0}>
              <Section
                id="stack"
                eyebrow="System architecture"
                title="The Stack"
                desc="Three indicators, minimal redundancy. Each answers a different question."
              >
                <div className="grid gap-4 lg:grid-cols-3">
                  <ToolCard
                    title="REZIME Engine"
                    subtitle="What regime are we in?"
                    bullets={[
                      "Bull Empire / Bear Empire dominance",
                      "Rebellion / transition visibility",
                      "Revolution = confirmed regime flip",
                    ]}
                  />
                  <ToolCard
                    title="REZIME Sync"
                    subtitle="Are timeframes aligned?"
                    bullets={[
                      "HTF–MTF–LTF alignment at a glance",
                      "Rebellion = LTF challenges HTF",
                      "Revolution = confirmed HTF flip",
                    ]}
                  />
                  <ToolCard
                    title="REZIME Battle Lines"
                    subtitle="Where is the battlefield?"
                    bullets={[
                      "Territory walls (rolling bounds)",
                      "Wide walls = safer holds / cleaner move",
                      "Tight walls = compression / endgame",
                    ]}
                  />
                </div>
              </Section>
            </Reveal>

            <Reveal delayMs={90}>
              <Section
                id="interpret"
                eyebrow="How to read it"
                title="Interpretation Rules (no signals)"
                desc="REZIME is a context layer. You still decide entries, sizing, and tactics."
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 text-sm text-neutral-300 leading-relaxed">
                  <p>
                    <span className="font-semibold text-white">
                      1) Identify the Empire.
                    </span>{" "}
                    If Engine shows Empire dominance, default posture is: hold with
                    the trend, reduce churn.
                  </p>
                  <p>
                    <span className="font-semibold text-white">
                      2) Respect Rebellion.
                    </span>{" "}
                    Rebellion is not “reverse now.” It’s warning: volatility and
                    counterpressure have increased. Reduce leverage, tighten rules.
                  </p>
                  <p>
                    <span className="font-semibold text-white">
                      3) Uprising = transition.
                    </span>{" "}
                    When disagreement intensifies, aim for survival, not
                    optimization. “Do less, not more.”
                  </p>
                  <p>
                    <span className="font-semibold text-white">
                      4) Revolution = reset.
                    </span>{" "}
                    A confirmed flip changes the operating environment. Old
                    assumptions are invalid. Rebuild positioning under the new
                    Empire.
                  </p>
                </div>
              </Section>
            </Reveal>

            <Reveal delayMs={180}>
              <Section
                id="doctrine"
                eyebrow="How you use it"
                title="Operator Doctrine"
                desc="Make trades riskless ASAP, then let upside be unlimited."
              >
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 text-sm text-neutral-300 leading-relaxed">
                    <p className="font-semibold text-white">Entry posture</p>
                    <p>
                      Prefer a single clean entry at smallest meaningful
                      confluence: LTF + MTF alignment, often near an MTF transition
                      (SMA100 break) with early EMA respect.
                    </p>
                    <p>
                      You’re not trying to “add 7 times.” You’re trying to enter
                      clean, neutralize risk, and hold.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 text-sm text-neutral-300 leading-relaxed">
                    <p className="font-semibold text-white">Exit posture</p>
                    <p>
                      Exit is not “took profit.” Exit is “structure broke.” You
                      stay until a real reversal challenges MTF/HTF and confirms a
                      regime flip.
                    </p>
                    <p>
                      REZIME is designed to avoid catastrophic drawdowns — not to
                      capture every turning point.
                    </p>
                  </div>
                </div>
              </Section>
            </Reveal>

            <Reveal delayMs={260}>
              <Section
                id="case"
                eyebrow="Proof library"
                title="Case Study Slots (placeholders)"
                desc="Later: paste screenshots of the regime strip only (MA hidden), to prove behavior without leaking construction."
              >
                <div className="grid gap-4 lg:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                    <p className="text-sm font-semibold text-white">COVID Crash</p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      Empire → Rebellion → Uprising → Revolution mapping during panic.
                    </p>
                    <p className="mt-3 text-xs text-neutral-500">Screenshot slot</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                    <p className="text-sm font-semibold text-white">Luna Collapse</p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      Transition behavior under structural failure and cascade.
                    </p>
                    <p className="mt-3 text-xs text-neutral-500">Screenshot slot</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                    <p className="text-sm font-semibold text-white">BTC Cycles</p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      Longer empires, fewer rebellions — why HTF works best.
                    </p>
                    <p className="mt-3 text-xs text-neutral-500">Screenshot slot</p>
                  </div>
                </div>
              </Section>
            </Reveal>

            <Reveal delayMs={330}>
              <Section
                id="ip"
                eyebrow="IP protection"
                title="What’s Shown vs Hidden"
                desc="You can demonstrate outcomes without disclosing construction."
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 text-sm text-neutral-300 leading-relaxed">
                  <p>
                    Public proofs will show the{" "}
                    <span className="text-white font-semibold">regime strip</span>{" "}
                    and state labels only (Empire/Rebellion/Uprising/Revolution).
                  </p>
                  <p>
                    The moving average construction and territory/border logic
                    remain internal until subscriber access is released.
                  </p>
                  <p className="text-xs text-neutral-500">
                    Clear message: REZIME is a map — the details are for operators.
                  </p>
                </div>
              </Section>
            </Reveal>

            <Reveal delayMs={400}>
              {/* CTA */}
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Want the institutional framing?
                    </p>
                    <p className="text-xs text-neutral-400">
                      Allocator portal = factsheet archive + mandate + governance + risk.
                    </p>
                  </div>
                  <Link
                    href="/allocator"
                    className="premium-card relative inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white hover:bg-white/15 transition"
                  >
                    Enter Allocator →
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
