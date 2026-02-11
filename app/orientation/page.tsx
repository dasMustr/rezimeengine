// app/orientation/page.tsx
import Link from "next/link";
import Reveal from "../components/Reveal";
import Sheen from "../components/Sheen";
import Image from "next/image";
import { RuleTiles } from "../components/VisualBlocks";

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
      {label}
    </a>
  );
}

function ChartScreenshot({
  src = "/images/example-chart.png",
  alt = "Example market chart",
}: {
  src?: string;
  alt?: string;
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white">
            Familiarity reduces fear
          </p>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            This is a real market chart. You do not need to interpret it yet.
            The first goal is simply to make the interface feel normal.
          </p>
        </div>
        <span className="text-xs text-neutral-500">TradingView</span>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/40">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          priority
          className="h-auto w-full"
        />
      </div>

      <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
        Everyone sees the same price movement. The difference is how people act
        when the battle is clear versus when the battle is chaotic.
      </p>
    </div>
  );
}

/**
 * Orientation preview (keep it tiny here).
 * Full guide belongs in Playbook.
 */
function StripPreview() {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-white">The REZIME strip</p>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            REZIME adds a small color strip to label the current{" "}
            <span className="text-white font-semibold">regime</span> —
            who has control, whether control is breaking, or whether the market
            is stuck in a messy fight.
            <br />
            <br />
            It is not a buy/sell button. It is a{" "}
            <span className="text-white font-semibold">battle label</span>.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/40 p-2">
          <div className="flex h-3 w-[220px] overflow-hidden rounded-lg border border-white/10">
            <div style={{ background: "#6b7280" }} className="w-[16%]" />
            <div style={{ background: "#3b82f6" }} className="w-[24%]" />
            <div style={{ background: "#f59e0b" }} className="w-[10%]" />
            <div style={{ background: "#ef4444" }} className="w-[6%]" />
            <div style={{ background: "#22c55e" }} className="w-[44%]" />
          </div>
          <p className="mt-2 text-[11px] uppercase tracking-widest text-neutral-500">
            quick preview
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Link
          href="/operator"
          className="premium-card is-clickable inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
        >
          See the full regime guide in Playbook →
        </Link>
        <p className="text-xs text-neutral-500">
          Orientation keeps it simple. Playbook explains how to read it.
        </p>
      </div>
    </div>
  );
}

/**
 * Super simple strip legend (placed later, after "What REZIME does").
 * Beginner-safe language + battle framing.
 */
function StripLegendSimple() {
  const items = [
    {
      name: "Neutral",
      note: "Early or unclear phase. Hard to tell who has control.",
      color: "#6b7280",
    },
    {
      name: "Bull Empire",
      note: "Buyers have control. Moves usually feel smoother and cleaner.",
      color: "#22c55e",
    },
    {
      name: "Bear Empire",
      note: "Sellers have control. Drops can feel fast and heavy.",
      color: "#3b82f6",
    },
    {
      name: "Siege",
      note: "Stalemate / crossfire. More traps. Reduce decisions and wait.",
      color: "#f59e0b",
    },
    {
      name: "Revolution",
      note: "Control changed hands. Old assumptions need a reset.",
      color: "#ef4444",
    },
  ];

  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-white">Regime meanings</p>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            Two Empires are always fighting. Your job is to{" "}
            <span className="text-white font-semibold">name the ruler</span>{" "}
            before you act.
            <br />
            <br />
            If you cannot name the ruler, you do not get to be aggressive.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/40 p-2">
          <div className="flex h-3 w-[220px] overflow-hidden rounded-lg border border-white/10">
            <div style={{ background: "#6b7280" }} className="w-[16%]" />
            <div style={{ background: "#3b82f6" }} className="w-[24%]" />
            <div style={{ background: "#f59e0b" }} className="w-[10%]" />
            <div style={{ background: "#ef4444" }} className="w-[6%]" />
            <div style={{ background: "#22c55e" }} className="w-[44%]" />
          </div>
          <p className="mt-2 text-[11px] uppercase tracking-widest text-neutral-500">
            simple guide
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.name}
            className="calm-block rounded-xl border border-white/10 bg-black/40 p-4"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-sm border border-white/20"
                style={{ background: it.color }}
                aria-hidden
              />
              <p className="text-sm font-semibold text-white">{it.name}</p>
            </div>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              {it.note}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
        If you want the “how to read this across timeframes,” that’s Playbook.
      </p>
    </div>
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
            <Tag>Risk-first</Tag>
            <Tag>No hype</Tag>
            <Tag>Beginner-safe</Tag>
            <Tag>Behavior over prediction</Tag>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            The fear is valid.
            <br />
            Markets are not mystical.
          </h1>

          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            Markets can feel like a secret world. It can look like professionals
            have access to information you do not.
            <br />
            <br />
            Reality is simpler. You see the same prices they see. The difference
            is not secrets — it’s knowing{" "}
            <span className="text-white font-semibold">
              what kind of battle you are stepping into
            </span>
            .
            <br />
            <br />
            REZIME is a simple{" "}
            <span className="text-white font-semibold">regime layer</span>. It
            does not replace your method. It helps you reduce mistakes when the
            market is messy, and become more patient when the regime is clear.
          </p>

          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
              <span className="text-neutral-300">Jump to:</span>
              <JumpPill href="#prices" label="Prices in real life" />
              <JumpPill href="#headlines" label="Why headlines scare you" />
              <JumpPill href="#mismatch" label="The phase mismatch trap" />
              <JumpPill href="#strip" label="The REZIME strip" />
              <JumpPill href="#charting" label="What a chart is" />
              <JumpPill href="#rezime" label="What REZIME does" />
              <JumpPill href="#next" label="Next step" />
            </div>
          </div>
        </section>
      </Reveal>

      {/* PRICES */}
      <Reveal delayMs={80}>
        <section id="prices" className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="Context"
            title="You already understand price movement"
            subtitle="Markets are prices changing as people continuously revalue what things are worth. You have seen this outside finance your whole life."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="Food and daily goods"
              desc="Eggs, rice, coffee, cooking oil. Prices rise and fall with supply, demand, and mood."
              note="That is normal repricing. It happens everywhere."
            />
            <Card
              title="Flights, hotels, and tickets"
              desc="Holiday season pushes prices up. Low demand creates discounts. Scarcity changes prices fast."
              note="Same idea: buyers and sellers constantly reprice."
            />
            <Card
              tone="hard"
              title="In-game economies"
              desc="Rare items get expensive. A patch changes drop rates. Players react and prices adapt."
              note="It can feel chaotic, but it is still supply and demand."
            />
          </div>

          <Callout title="Simple translation">
            If you accept that prices change in daily life, you can accept
            markets. The uncomfortable part is not movement — it’s not knowing
            how to behave when the regime changes.
          </Callout>
        </section>
      </Reveal>

      {/* HEADLINES */}
      <Reveal delayMs={160}>
        <section id="headlines" className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="The headline effect"
            title="Why “billions wiped out” feels terrifying"
            subtitle="Headlines are designed to trigger emotion. Calm does not get clicks. Fear does."
          />

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <p className="text-sm text-neutral-300 leading-relaxed">
              You will see headlines like “trillions wiped out.” It sounds like
              disaster. Most of the time, the core event is simple: prices moved
              down quickly.
            </p>

            <div className="grid gap-4 lg:grid-cols-2">
              <Card
                title="What your brain hears"
                desc="This is unsafe. I need to act now."
              />
              <Card
                tone="hard"
                title="What is actually happening"
                desc="The market is repricing. This is normal. The real question is: is the regime clear or chaotic right now?"
              />
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed">
              The goal is not to ignore news. The goal is to stop letting
              headlines turn normal movement into urgency.
            </p>
          </div>
        </section>
      </Reveal>

      {/* MISMATCH */}
      <Reveal delayMs={240}>
        <section id="mismatch" className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="Core risk"
            title="Most damage comes from phase mismatch"
            subtitle="People get hurt when they stay active during chaotic regimes. Activity feels productive — but error rates rise."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              title="Confusion is information"
              desc="Chaotic regimes reduce clarity. Your brain tries to force certainty where none exists."
              note="That is not weakness. It is the regime."
            />
            <Card
              tone="hard"
              title="Urgency creates mistakes"
              desc="When things feel unstable, your brain screams “do something.” That impulse causes most beginner damage."
              note="Calm beats fast."
            />
            <Card
              title="Exhaustion is a signal"
              desc="Overwhelm is common in chaotic markets."
              note="Your system is telling you to shrink activity."
            />
          </div>

          <RuleTiles
            title="Safety rules"
            subtitle="If you remember nothing else, remember these."
            rules={[
              {
                title: "If you are confused, reduce activity",
                desc: "Confusion often means the regime is chaotic. Trying harder usually increases mistakes.",
                tone: "hard",
              },
              {
                title: "Do not chase clarity inside chaos",
                desc: "When the regime is chaotic, fakeouts increase and errors compound.",
              },
              {
                title: "Your job is safety, not prediction",
                desc: "Safety buys time. Time builds skill. Skill creates advantage.",
                tone: "hard",
              },
              {
                title: "Doing nothing is a valid move",
                desc: "In chaotic regimes, restraint is often the highest skill.",
              },
            ]}
          />
        </section>
      </Reveal>

      {/* STRIP PREVIEW */}
      <Reveal delayMs={300}>
        <section id="strip" className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="The REZIME idea"
            title="A simple label for the market regime"
            subtitle="REZIME uses colors to label who has control, so you stop acting the same inside every fight."
          />
          <StripPreview />
        </section>
      </Reveal>

      {/* CHARTING + TRADINGVIEW */}
      <Reveal delayMs={340}>
        <section id="charting" className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="Interface"
            title="What a chart is"
            subtitle="Before rules, recognize the interface. Familiarity reduces intimidation."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            <Card
              tone="hard"
              title="A chart is a picture of history"
              desc="A chart shows what price did in the past. It is not a prediction machine."
              note="Think of it as a timeline of price behavior."
            />
            <Card
              title="Why charts feel intimidating"
              desc="Charts look like secret codes. They are mostly just layout and tools."
              note="You and professionals see the same chart."
            />
          </div>

          <ChartScreenshot
            src="/images/example-chart.png"
            alt="TradingView chart screenshot example"
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              title="Candles"
              desc="Each candle is one time slice. Price moved up, down, or sideways in that slice."
              note="You do not need to memorize this right now."
            />
            <Card
              tone="hard"
              title="Timeframe"
              desc="Timeframe is zoom level. One minute, one hour, one day. Same price, different zoom."
              note="Switching timeframes emotionally creates noise and confusion."
            />
            <Card
              title="Indicators"
              desc="Indicators summarize behavior. They are tools, not truth."
              note="REZIME is a label, not an instruction to trade."
            />
          </div>

          <Callout title="Important point">
            Your method can come from any lens: charts, fundamentals, macro, or
            rules you learn over time. REZIME sits above the method as context.
            It helps your behavior match the regime.
          </Callout>
        </section>
      </Reveal>

      {/* WHAT REZIME DOES */}
      <Reveal delayMs={400}>
        <section id="rezime" className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="What REZIME is"
            title="A regime map, not a signal service"
            subtitle="REZIME does not tell you what to buy or sell. It helps you name who has control, so your behavior becomes calmer and safer."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="It names who has control"
              desc="So you stop guessing before you act."
              note="Name first. Act second."
            />
            <Card
              title="It changes your behavior"
              desc="Clear regimes reward patience. Chaotic regimes demand smaller, slower, more selective action."
              note="Less clarity means fewer decisions."
            />
            <Card
              tone="hard"
              title="It protects your timeline"
              desc="So you are still here months later, when most people quit after avoidable losses."
              note="Staying in the game creates the chance for mastery."
            />
          </div>

          {/* FULL LEGEND MOVED HERE */}
          <div className="pt-2">
            <StripLegendSimple />
          </div>

          <div className="calm-block rounded-3xl border border-white/10 bg-white/[0.04] p-10">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              The common failure mode
            </p>
            <p className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Most people do not lack talent.
              <br />
              They lack risk containment.
            </p>
            <p className="mt-3 text-sm text-neutral-300">
              REZIME is built to reinforce that foundation.
            </p>
          </div>
        </section>
      </Reveal>

      {/* BOTTOM CTA ONLY */}
      <Reveal delayMs={480}>
        <section id="next" className="scroll-mt-28">
          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">
                  Next step: enter Playbook
                </p>
                <p className="text-xs text-neutral-400">
                  Playbook explains how the REZIME framework behaves on charts
                  and how to read the map in real time.
                </p>
              </div>

              <Link
                href="/operator"
                className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Enter Playbook →
              </Link>
            </div>

            <p className="mt-4 text-[11px] text-neutral-500 leading-relaxed">
              Educational documentation only. Not financial advice. No signals.
            </p>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
