// app/orientation/page.tsx
import Link from "next/link";
import Reveal from "../components/Reveal";
import Sheen from "../components/Sheen";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-neutral-300">
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
  note,
  tone = "soft",
}: {
  title: string;
  desc: string;
  note?: string;
  tone?: "soft" | "hard";
}) {
  return (
    <div
      className={[
        "calm-block rounded-2xl border p-6",
        tone === "hard"
          ? "border-white/15 bg-white/10"
          : "border-white/10 bg-black/30",
      ].join(" ")}
    >
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{desc}</p>
      {note ? (
        <p className="mt-3 text-xs text-neutral-500 leading-relaxed">{note}</p>
      ) : null}
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-widest text-neutral-400">
        {eyebrow}
      </p>
      <h2 className="text-xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
        {subtitle}
      </p>
    </div>
  );
}

function Callout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-semibold text-white">{title}</p>
      <div className="mt-2 text-sm text-neutral-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function JumpPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
    >
      {label} →
    </a>
  );
}

export default function OrientationPage() {
  return (
    <div className="space-y-20">

      {/* HERO */}
      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Start here
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag>Beginner-safe</Tag>
            <Tag>No hype</Tag>
            <Tag>Survival first</Tag>
            <Tag>Regimes → behavior</Tag>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            The fear is valid.
            <br />
            But markets aren’t mystical.
          </h1>

          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            When you’re new, markets feel like a secret world where “professionals”
            know something you don’t.
            <br />
            <br />
            Reality: you see the same prices they see. Same candles. Same news.
            The difference isn’t secret information — it’s{" "}
            <span className="text-white font-semibold">survivability</span>.
            <br />
            <br />
            REZIME exists to help you survive the early phase long enough to develop your edge —
            whatever your style is: charts, fundamentals, macro, narratives, order book, anything.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#prices"
              className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
            >
              <Sheen className="rounded-full" />
              Start →
            </a>

            <Link
              href="/operator"
              className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-200 transition hover:bg-white/[0.06]"
            >
              <Sheen className="rounded-full" />
              Skip to Playbook →
            </Link>

            <Link
              href="/"
              className="text-sm text-neutral-400 hover:text-white transition self-center"
            >
              Back to Home
            </Link>
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
              <span className="text-neutral-300">Jump to:</span>
              <JumpPill href="#prices" label="Prices in real life" />
              <JumpPill href="#headlines" label="Why headlines scare you" />
              <JumpPill href="#mismatch" label="Regime mismatch" />
              <JumpPill href="#tools" label="Charts & tools" />
              <JumpPill href="#rezime" label="What REZIME does" />
              <JumpPill href="#route" label="Your route" />
            </div>
          </div>
        </section>
      </Reveal>

      {/* SECTION — PRICES */}
      <Reveal delayMs={70}>
        <section id="prices" className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="Beginner layer"
            title="You already understand price movement"
            subtitle="Markets are just prices changing because people decide what things are worth. You’ve seen this your whole life — outside finance."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="Food & daily goods"
              desc="Eggs, rice, coffee, cooking oil — sometimes prices rise, sometimes they fall."
              note="That’s not “chaos.” That’s supply, demand, and emotion."
            />
            <Card
              title="Flights, hotels, surge pricing"
              desc="Holiday season → prices spike. Low demand → discounts appear."
              note="Same idea: buyers and sellers adjusting in real time."
            />
            <Card
              tone="hard"
              title="Currency exchange"
              desc="Sometimes USD/IDR feels expensive, sometimes cheaper."
              note="That’s a market too — just a different product."
            />
          </div>

          <Callout title="The simple translation">
            If you can accept that prices change in daily life, you can accept markets.
            The scary part isn’t movement — it’s{" "}
            <span className="text-white font-semibold">
              not knowing how to behave during different kinds of movement
            </span>
            .
          </Callout>
        </section>
      </Reveal>

      {/* SECTION — HEADLINES */}
      <Reveal delayMs={140}>
        <section id="headlines" className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="The headline effect"
            title="Why “billions wiped out” feels terrifying"
            subtitle="Headlines are written to trigger emotion. Calm doesn’t get clicks. Fear does."
          />

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-neutral-300 leading-relaxed">
              You’ll see headlines like:{" "}
              <span className="text-white font-semibold">
                “$2 trillion wiped from markets.”
              </span>
              <br />
              <br />
              But what usually happened is simple:{" "}
              <span className="text-white font-semibold">prices moved down</span>.
              <br />
              <br />
              The goal isn’t to ignore news. The goal is to stop letting news make normal
              movement feel like danger.
            </p>

            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <Card
                title="What your brain hears"
                desc="“This is unsafe. I need to act now.”"
              />
              <Card
                tone="hard"
                title="What’s actually happening"
                desc="“The market is repricing. This is normal. The question is: what regime are we in?”"
              />
            </div>
          </div>
        </section>
      </Reveal>

      {/* SECTION — REGIME MISMATCH */}
      <Reveal delayMs={210}>
        <section id="mismatch" className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="Reality layer"
            title="What you felt wasn’t failure — it was regime mismatch"
            subtitle="Most beginners don’t lose because they’re stupid. They lose because they stay active when the regime is unstable."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              title="Confusion isn’t a flaw"
              desc="When regimes conflict, clarity disappears. Your brain tries to force certainty where none exists."
              note="That’s not weakness — it’s mismatch."
            />
            <Card
              tone="hard"
              title="Urgency is a trap"
              desc="The more unstable it gets, the more you feel like you must do something."
              note="That impulse causes most beginner damage."
            />
            <Card
              title="Exhaustion is a signal"
              desc="Cognitive overload is common in unstable regimes."
              note="Your system is telling you: reduce activity."
            />
          </div>

          <Callout title="The beginner safety rule">
            If you’re confused, reduce activity.
            <br />
            Confusion usually means the{" "}
            <span className="text-white font-semibold">regime is unstable</span> —
            not that you should “try harder.”
          </Callout>
        </section>
      </Reveal>

      {/* SECTION — TOOLS BRIDGE */}
      <Reveal delayMs={280}>
        <section id="tools" className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="Bridge"
            title="Charts, tools, and the “professional screen” illusion"
            subtitle="The first time you see someone with six monitors, it’s easy to think: “They know something I don’t.”"
          />

          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-6">
            <p className="text-sm text-neutral-300 leading-relaxed">
              Here’s the truth:
              <br />
              <span className="text-white font-semibold">
                what you see is what they see too.
              </span>{" "}
              Same prices. Same market. Same information.
              <br />
              <br />
              Tools don’t create certainty. Tools create{" "}
              <span className="text-white font-semibold">a lens</span>.
              Different people use different lenses:
            </p>

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              <Card
                tone="hard"
                title="Charting"
                desc="A visual way to see price history and rhythm."
                note="It can help. It can also tempt people into overtrading."
              />
              <Card
                title="Fundamentals"
                desc="Reports, earnings, valuation, narratives about the real world."
                note="Different lens, same market."
              />
              <Card
                tone="hard"
                title="Other lenses"
                desc="Order flow, macro, sentiment, on-chain, social narratives."
                note="Everyone has a lens. The real constraint is time."
              />
            </div>
          </div>

          <Callout title="Why this matters">
            Timing can work — but only if you survive long enough to learn.
            <br />
            REZIME is the safety layer that helps you stay in the game while you build skill.
          </Callout>
        </section>
      </Reveal>

      {/* SECTION — WHAT REZIME DOES */}
      <Reveal delayMs={350}>
        <section id="rezime" className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="What REZIME is"
            title="A regime map — not a signal service"
            subtitle="REZIME doesn’t tell you what to buy or sell. It tells you what kind of market you’re in — so your behavior matches reality."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="It names the regime"
              desc="So you stop guessing what kind of market this is."
              note="Before you act, you know the mode."
            />
            <Card
              title="It changes your posture"
              desc="Stable regimes reward patience. Conflict regimes demand smaller, slower, more selective behavior."
              note="Less stable → less interference."
            />
            <Card
              tone="hard"
              title="It protects your timeline"
              desc="So you’re still here after 6–12 months — when most beginners quietly disappear."
              note="Survival creates the chance for mastery."
            />
          </div>

          <div className="calm-block rounded-3xl border border-white/10 bg-white/[0.04] p-10">
            <div className="text-xs uppercase tracking-widest text-neutral-400">
              The real problem
            </div>
            <div className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Most people don’t lack talent.
              <br />
              They lack survivability.
            </div>
            <div className="mt-3 text-sm text-neutral-300">
              REZIME buys you that time.
            </div>
          </div>
        </section>
      </Reveal>

      {/* SECTION — ROUTE */}
      <Reveal delayMs={420}>
        <section id="route" className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="Your route"
            title="Start → Playbook → Proof"
            subtitle="A calm route into markets: build survivability first, then learn the regime system, then watch it unfold in real time."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="Step 1 — Start"
              desc="Demystify markets and learn the survivability posture."
              note="You are here."
            />
            <Card
              title="Step 2 — Playbook"
              desc="Learn how regimes work, how escalation builds, and how REZIME tools are applied."
              note="Interpretation rules — not signals."
            />
            <Card
              tone="hard"
              title="Step 3 — Proof"
              desc="Portfolio Lab: time-stamped snapshots that show survivability in real markets."
              note="No hype. Just process."
            />
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/operator"
              className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
            >
              <Sheen className="rounded-full" />
              Enter Playbook →
            </Link>

            <Link
              href="/allocator"
              className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-neutral-200 transition hover:bg-white/10"
            >
              <Sheen className="rounded-full" />
              See Proof →
            </Link>
          </div>

          <p className="text-xs text-neutral-500 leading-relaxed">
            Your method decides entries. REZIME governs regime awareness, posture, and survivability.
          </p>
        </section>
      </Reveal>
    </div>
  );
}
