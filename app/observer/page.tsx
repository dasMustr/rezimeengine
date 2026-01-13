import Link from "next/link";
import Section from "../components/Section";

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
    <Link
      href={href}
      className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
    >
      <div className="flex items-center justify-between">
        <div className="text-xs text-neutral-400">{n}</div>
        <div className="text-xs text-neutral-400 group-hover:text-neutral-200 transition">
          Read →
        </div>
      </div>
      <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{desc}</p>
    </Link>
  );
}

export default function ObserverPage() {
  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="space-y-6">
        <p className="text-xs uppercase tracking-widest text-neutral-400">
          Observer Portal
        </p>

        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
          A documentary lens on market regimes.
        </h1>

        <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
          REZIME is a map — not a signal service. This portal explains the worldview:
          Empires (trend), Rebellions (early instability), Uprisings (transition),
          and Revolutions (new regime).
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
          >
            Back to Home
          </Link>
          <Link
            href="/operator"
            className="rounded-full border border-white/10 bg-white/0 px-4 py-2 text-xs text-neutral-300 hover:bg-white/5 transition"
          >
            Jump to Operator →
          </Link>
        </div>
      </section>

      {/* Quick chapters */}
      <Section
        eyebrow="Select a chapter"
        title="Four chapters. One map."
        subtitle="Start here if you want the core idea without technical details."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Card
            n="1)"
            title="What is REZIME?"
            desc="Why regime context matters more than entries — and why holding is the real edge."
            href="#what"
          />
          <Card
            n="2)"
            title="The 4 Regime States"
            desc="Empire → Rebellion → Uprising → Revolution, and how each one feels in price."
            href="#states"
          />
          <Card
            n="3)"
            title="How to read a chart (without signals)"
            desc="A simple decision flow: identify regime → align exposure → respect transitions."
            href="#read"
          />
          <Card
            n="4)"
            title="Creator / Beyond Markets"
            desc="The story: systems thinking, games-as-training, and why this became inevitable."
            href="#creator"
          />
        </div>
      </Section>

      {/* Longform */}
      <Section
        title="What is REZIME?"
        subtitle="REZIME frames markets as competing forces. The goal is not “predict the next candle” — it’s to understand the dominant regime so you can avoid fighting structure and survive volatility with composure."
      >
        <div id="what" className="space-y-3 text-sm text-neutral-300 leading-relaxed">
          <p>
            Most traders lose from regime mismatch: using tactics meant for trend
            inside a transition, or trying to fade momentum inside a true Empire.
          </p>
          <p>
            REZIME reduces decision-noise. It helps you stay aligned with what the
            market is actually doing — not what you want it to do.
          </p>
        </div>
      </Section>

      <Section
        title="The 4 Regime States"
        subtitle="Each state is a behavior pattern. If you can name the state, you can stop arguing with reality."
      >
        <div id="states" className="space-y-3 text-sm text-neutral-300 leading-relaxed">
          <p><span className="font-semibold text-white">Empire:</span> dominant trend. Holding is rewarded.</p>
          <p><span className="font-semibold text-white">Rebellion:</span> first instability. Noise increases. Positioning becomes selective.</p>
          <p><span className="font-semibold text-white">Uprising:</span> transition becomes visible. Risk control matters most.</p>
          <p><span className="font-semibold text-white">Revolution:</span> new regime. The map resets. A new Empire is born.</p>
        </div>
      </Section>

      <Section
        title="How to read (no signals)"
        subtitle="A simple operator mindset for the public: stop trying to be right — start trying to be aligned."
      >
        <div id="read" className="space-y-3 text-sm text-neutral-300 leading-relaxed">
          <p>
            Step 1: Identify the regime. Step 2: Match exposure to regime. Step 3:
            When transitions appear, reduce uncertainty — don’t increase ambition.
          </p>
          <p>
            If you want the actual tool behavior and rule-set, move to the Operator portal.
          </p>
          <div className="pt-2">
            <Link
              href="/operator"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
            >
              Go to Operator →
            </Link>
          </div>
        </div>
      </Section>

      <Section
        title="Creator / Beyond Markets"
        subtitle="This is where your legitimacy story lives — but it stays optional and tucked behind the Observer portal."
      >
        <div id="creator" className="space-y-3 text-sm text-neutral-300 leading-relaxed">
          <p>
            You can place your narrative here: law → self-directed markets apprenticeship → REZIME worldview.
          </p>
          <p>
            Add the Pro Clubs leadership story as “team systems + human dynamics” training — not “gaming”.
            Then link to your philosophy pages (Pattern / Spiral / Energy Wealth).
          </p>
        </div>
      </Section>

      {/* Bottom CTA */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold">Ready for the tools?</div>
            <div className="text-xs text-neutral-400">
              Operator portal = interpretation rules + Engine / Sync / Battle Lines behavior.
            </div>
          </div>
          <Link
            href="/operator"
            className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white hover:bg-white/15 transition"
          >
            Enter Operator →
          </Link>
        </div>
      </section>
    </div>
  );
}
