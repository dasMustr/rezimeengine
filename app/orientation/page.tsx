// app/orientation/page.tsx
import Link from "next/link";
import Reveal from "../components/Reveal";
import Sheen from "../components/Sheen";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-neutral-300">
      {children}
    </span>
  );
}

function Block({
  title,
  desc,
  tone = "soft",
}: {
  title: string;
  desc: string;
  tone?: "soft" | "hard";
}) {
  return (
    <div
      className={
        tone === "hard"
          ? "calm-block rounded-2xl border border-white/15 bg-white/10 p-6"
          : "calm-block rounded-2xl border border-white/10 bg-black/30 p-6"
      }
    >
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-neutral-300">{desc}</div>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="text-xs uppercase tracking-widest text-neutral-400">
        Step {n}
      </div>
      <div className="mt-2 text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-neutral-300">{desc}</div>
    </div>
  );
}

function JumpLink({ href, label }: { href: string; label: string }) {
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
    <div className="space-y-16">
      {/* HERO */}
      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Start
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag>Beginner-safe</Tag>
            <Tag>No jargon</Tag>
            <Tag>Survival first</Tag>
            <Tag>Regimes → behavior</Tag>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Markets aren’t mysterious.
            <br />
            They’re just prices moving — like everything else.
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
            If you’re new, the fear is valid. Markets are presented like a secret
            world where “professionals” know something you don’t.
            <br />
            <br />
            But you’re not entering a different universe.
            You’re entering the same game — and you see the same information they
            see.
            <br />
            <br />
            This page bridges what you already understand in daily life into what
            markets actually are — then shows how REZIME helps you survive long
            enough to develop your edge.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#beginner"
              className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
            >
              <Sheen className="rounded-full" />
              Start →
            </a>

            <Link
              href="/operator"
              className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-neutral-200 transition hover:bg-white/10"
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
              <JumpLink href="#beginner" label="What markets are" />
              <JumpLink href="#media" label="Why headlines scare you" />
              <JumpLink href="#reality" label="Why it feels hard" />
              <JumpLink href="#charts" label="What charting is" />
              <JumpLink href="#rezime" label="What REZIME does" />
              <JumpLink href="#path" label="Your route" />
            </div>
          </div>
        </section>
      </Reveal>

      {/* SECTION A — BEGINNER */}
      <Reveal delayMs={80}>
        <section id="beginner" className="scroll-mt-28 space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Beginner layer
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              You already understand price movement
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
              Markets are not a special “finance-only” phenomenon. They’re just
              prices changing because people decide what things are worth — the
              same thing you see everywhere else.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <Block
              tone="hard"
              title="Daily life prices"
              desc="Eggs cost more this year. Rent changes. Airplane tickets spike during holidays. That’s price movement."
            />
            <Block
              title="Supply & demand"
              desc="Concert tickets sell out → resale jumps. A rare in-game item becomes expensive. Same logic."
            />
            <Block
              tone="hard"
              title="Nothing mystical"
              desc="Markets are just this idea — but applied to assets like stocks, currency, crypto, and commodities."
            />
          </div>
        </section>
      </Reveal>

      {/* SECTION A.2 — MEDIA FEAR */}
      <Reveal delayMs={130}>
        <section id="media" className="scroll-mt-28 space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              The headline effect
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              Why “billions wiped out” feels terrifying
            </h2>
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 text-sm text-neutral-300 leading-relaxed">
            <p>
              You’ll see headlines like{" "}
              <span className="text-white font-semibold">
                “$2 trillion wiped from markets.”
              </span>
            </p>
            <p>
              That sounds like disaster — but the core event is simple:
              <span className="text-white font-semibold"> prices moved</span>.
            </p>
            <p>
              News is designed to trigger emotion. Fear gets clicks. Calm doesn’t.
              If a headline said “prices moved normally today,” nobody would read it.
            </p>
            <p className="text-neutral-400">
              The goal isn’t to ignore news. The goal is to stop letting headlines
              make normal movement feel like danger.
            </p>
          </div>
        </section>
      </Reveal>

      {/* SECTION B — REALITY */}
      <Reveal delayMs={180}>
        <section id="reality" className="scroll-mt-28 space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Reality layer
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              What you felt wasn’t failure — it was regime mismatch
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
              Beginners don’t get hurt because they’re “bad at trading.”
              They get hurt because they stay active when the market is unstable —
              and instability triggers normal human reactions: confusion, urgency,
              overtrading, and frustration.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <Block
              title="Confusion isn’t a personal flaw"
              desc="When regimes are conflicted, clarity disappears. Your brain tries to force certainty where none exists."
            />
            <Block
              tone="hard"
              title="Urgency is a trap"
              desc="The more unstable it gets, the more you feel like you must ‘do something.’ That impulse causes most beginner damage."
            />
            <Block
              title="Exhaustion is a signal"
              desc="Cognitive overload is common in unstable regimes. It’s not weakness — it’s mismatch."
            />
          </div>

          <div className="mt-2 rounded-2xl border border-white/10 bg-black/30 p-5">
            <div className="text-sm font-semibold text-white">
              The beginner safety rule
            </div>
            <div className="mt-2 text-sm leading-relaxed text-neutral-300">
              If you’re confused, reduce activity.
              Confusion usually means the{" "}
              <span className="text-white font-semibold">regime</span> is unstable —
              not that you should “try harder.”
            </div>
          </div>
        </section>
      </Reveal>

      {/* SECTION C — CHARTING */}
      <Reveal delayMs={230}>
        <section id="charts" className="scroll-mt-28 space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              The intimidation myth
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              Those “professional screens” aren’t a different game
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
              The first time you see someone with six monitors and charts
              everywhere, it’s easy to think: “They know something I don’t.”
              <br />
              <br />
              But here’s the truth:
              <span className="text-white font-semibold">
                what you see is what they see too.
              </span>{" "}
              Same prices. Same candles. Same market.
              <br />
              <br />
              The difference isn’t secret information — it’s experience, process,
              and survivability.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <Block
              tone="hard"
              title="What a chart is"
              desc="A chart is just price history visualized. It’s a way to see movement more clearly."
            />
            <Block
              title="What analysis tools are"
              desc="Indicators, fundamentals, narratives, order flow — these are lenses people use to interpret the same market."
            />
            <Block
              tone="hard"
              title="Everyone has an edge"
              desc="Some develop it through charts, some through reports, some through stories. The real constraint is time."
            />
          </div>

          <div className="mt-2 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-10">
            <div className="text-xs uppercase tracking-widest text-neutral-400">
              The real problem
            </div>
            <div className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Most people don’t lack talent.
              <br />
              They lack survivability.
            </div>
            <div className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-300">
              Everyone can develop an edge.
              Most people just don’t survive long enough to discover theirs.
              <br />
              <br />
              <span className="text-white font-semibold">REZIME buys you that time.</span>
            </div>
          </div>
        </section>
      </Reveal>

      {/* SECTION D — WHAT REZIME DOES */}
      <Reveal delayMs={280}>
        <section id="rezime" className="scroll-mt-28 space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              What REZIME is
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              A regime map — not a signal service
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
              REZIME doesn’t tell you what to buy or sell.
              It tells you what kind of market you’re in — so your behavior matches reality.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <Block
              tone="hard"
              title="It names the regime"
              desc="So you stop guessing. Before you act, you know the market’s mode."
            />
            <Block
              title="It changes your posture"
              desc="Stable regimes reward patience. Conflict regimes demand smaller, slower, more selective behavior."
            />
            <Block
              tone="hard"
              title="It protects your timeline"
              desc="So you’re still here after 6–12 months — when most beginners quietly disappear."
            />
          </div>

          <p className="text-xs text-neutral-500 leading-relaxed">
            Your method decides entries. REZIME governs context, posture, and survivability.
          </p>
        </section>
      </Reveal>

      {/* SECTION E — PATH */}
      <Reveal delayMs={330}>
        <section id="path" className="scroll-mt-28 space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Your route
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              Start → Playbook → Proof
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
              This is a calm route into markets: learn the regime map, then learn
              the interpretation rules, then watch it unfold in real time.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Step
              n="1"
              title="Start"
              desc="Demystify markets + learn the survivability posture."
            />
            <Step
              n="2"
              title="Playbook"
              desc="Learn how regimes work, how escalation builds, and how to apply REZIME tools."
            />
            <Step
              n="3"
              title="Proof"
              desc="Portfolio Lab: time-stamped snapshots that show survivability in real markets."
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

            <Link
              href="/faq"
              className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
            >
              <Sheen className="rounded-full" />
              Read FAQ →
            </Link>
          </div>

          <p className="text-xs text-neutral-500 leading-relaxed">
            REZIME isn’t here to make you fast. It’s here to keep you safe long enough to become real.
          </p>
        </section>
      </Reveal>
    </div>
  );
}
