// app/orientation/page.tsx
import Link from "next/link";
import Reveal from "../components/Reveal";
import Sheen from "../components/Sheen";
import Image from "next/image";

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
            See it once, then it stops feeling scary
          </p>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            This is a real market chart. The goal is not to teach strategy here.
            The goal is to make the screen feel familiar.
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
        You are not looking at secret information. You are looking at price
        movement. Everyone sees this. The difference is how people behave inside
        different regimes.
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
            <Tag>Beginner-safe</Tag>
            <Tag>No hype</Tag>
            <Tag>Survival first</Tag>
            <Tag>Regimes and behavior</Tag>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            The fear is valid.
            <br />
            Markets are not mystical.
          </h1>

          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            When you are new, markets can feel like a secret world.
            It can look like professionals know something you do not.
            <br />
            <br />
            Reality is calmer. You see the same prices they see. You play the
            same game. The difference is not secret information. The difference
            is survivability.
            <br />
            <br />
            REZIME exists to help you survive the early phase long enough to
            develop your edge. That edge can come from charts, fundamentals,
            macro, narratives, order flow, or anything.
          </p>

          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
              <span className="text-neutral-300">Jump to:</span>
              <JumpPill href="#prices" label="Prices in real life" />
              <JumpPill href="#headlines" label="Why headlines scare you" />
              <JumpPill href="#mismatch" label="Regime mismatch" />
              <JumpPill href="#charting" label="Charting and TradingView" />
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
            eyebrow="Beginner layer"
            title="You already understand price movement"
            subtitle="Markets are just prices changing because people decide what things are worth. You have seen this your whole life outside finance."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="Food and daily goods"
              desc="Eggs, rice, coffee, cooking oil. Prices rise and fall based on supply, demand, and sentiment."
              note="That is price movement. It is not a special finance event."
            />
            <Card
              title="Flights, hotels, and tickets"
              desc="Holiday season pushes prices up. Low demand creates discounts. Resale markets jump when something is scarce."
              note="Same idea. Buyers and sellers constantly reprice."
            />
            <Card
              tone="hard"
              title="In game economies"
              desc="Rare items get expensive. A patch changes drop rates and prices move fast. Players react and prices follow."
              note="It feels chaotic, but it is still supply and demand."
            />
          </div>

          <Callout title="Simple translation">
            If you can accept that prices change in daily life, you can accept
            markets. The scary part is not movement. The scary part is not
            knowing how to behave in different regimes.
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
              You will see headlines like “trillions wiped out.”
              It sounds like disaster.
              Most of the time the core event is simple.
              Prices moved down.
            </p>

            <div className="grid gap-4 lg:grid-cols-2">
              <Card
                title="What your brain hears"
                desc="This is unsafe. I need to act now."
              />
              <Card
                tone="hard"
                title="What is actually happening"
                desc="The market is repricing. This is normal. The real question is which regime we are in."
              />
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed">
              The goal is not to ignore news. The goal is to stop letting news
              make normal movement feel like danger.
            </p>
          </div>
        </section>
      </Reveal>

      {/* MISMATCH */}
      <Reveal delayMs={240}>
        <section id="mismatch" className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="Reality layer"
            title="What you felt was not failure"
            subtitle="Most beginners do not lose because they are stupid. They lose because they stay active when the regime is unstable."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              title="Confusion is not a flaw"
              desc="When regimes conflict, clarity disappears. Your brain tries to force certainty where none exists."
              note="That is mismatch, not weakness."
            />
            <Card
              tone="hard"
              title="Urgency is a trap"
              desc="Instability triggers action bias. The more unstable it gets, the more you feel like you must do something."
              note="That impulse causes most beginner damage."
            />
            <Card
              title="Exhaustion is a signal"
              desc="Cognitive overload is common in unstable regimes."
              note="Your system is telling you to reduce activity."
            />
          </div>

          <Callout title="The beginner safety rule">
            If you are confused, reduce activity. Confusion usually means the
            regime is unstable. It does not mean you should try harder.
          </Callout>
        </section>
      </Reveal>

      {/* CHARTING + TRADINGVIEW */}
      <Reveal delayMs={320}>
        <section id="charting" className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="Bridge to the tools"
            title="Charting and TradingView"
            subtitle="Before you learn rules, you should recognize the basic interface. This reduces intimidation and makes Playbook feel natural."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            <Card
              tone="hard"
              title="What a chart is"
              desc="A chart is price history, visualized. It is not prediction. It is a way to see how price has been moving."
              note="Think of it like a timeline. You are looking at a story of movement."
            />
            <Card
              title="Why charts feel intimidating"
              desc="People think charts are secret codes. They are not. Most of what looks complex is just tools and layout."
              note="You and professionals see the same chart. Experience is the difference."
            />
          </div>

          {/* Screenshot */}
          <ChartScreenshot src="/images/example-chart.png" alt="TradingView chart screenshot example" />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              title="Candles"
              desc="A candle shows movement in a time slice. Price moved up, down, or sideways in that slice."
              note="Later, Playbook explains how regimes show up on candles."
            />
            <Card
              tone="hard"
              title="Timeframe"
              desc="Timeframe means how big each candle is. One minute, one hour, one day. Same price, different zoom level."
              note="Beginners get hurt by switching timeframes emotionally."
            />
            <Card
              title="Indicators"
              desc="Indicators are overlays that summarize price behavior. They are tools, not truth."
              note="REZIME is not a signal. It is a regime map."
            />
          </div>

          <Callout title="Important point">
            Your edge can come from any lens. Charts are one lens. Fundamentals
            are another lens. Macro is another lens. REZIME sits above all of
            them. It helps you adjust behavior to the regime so you survive long
            enough to learn.
          </Callout>
        </section>
      </Reveal>
      
      {/* TURNING POINT */}
      <Reveal delayMs={360}>
        <section className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="The turning point"
            title="The problem was never intelligence"
            subtitle="Most beginners do not struggle because they are incapable. They struggle because they use the same behavior in every regime."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="What beginners assume"
              desc="If I try harder, trade more, analyze more, I will figure it out."
              note="Effort feels like the solution."
            />
            <Card
              title="What actually happens"
              desc="During unstable regimes, more activity usually means more mistakes. Noise increases, clarity drops, and emotional reactions take over."
              note="More effort in the wrong regime increases damage."
            />
            <Card
              tone="hard"
              title="What changes everything"
              desc="Behavior must change with the regime. Sometimes the correct move is slower action, smaller exposure, or doing nothing."
              note="Skill includes knowing when not to interfere."
            />
          </div>

          <Callout title="A quiet but important truth">
            Markets are not tests of intelligence.  
            They are tests of behavior under different regimes.  
            <br /><br />
            Most people did not fail because they lacked ability.  
            They failed because they stayed active in regimes that punished activity.
          </Callout>
        </section>
      </Reveal>

      {/* WHAT REZIME DOES */}
      <Reveal delayMs={400}>
        <section id="rezime" className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="What REZIME is"
            title="A regime map, not a signal service"
            subtitle="REZIME does not tell you what to buy or sell. It tells you what kind of market you are in so your behavior matches reality."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="It names the regime"
              desc="So you stop guessing what kind of market this is before you act."
              note="Name first. Act second."
            />
            <Card
              title="It changes your posture"
              desc="Stable regimes reward patience. Conflict regimes demand smaller, slower, more selective behavior."
              note="Less stable means less interference."
            />
            <Card
              tone="hard"
              title="It protects your timeline"
              desc="So you are still here after 6 to 12 months, when most beginners quietly disappear."
              note="Survival creates the chance for mastery."
            />
          </div>

          <div className="calm-block rounded-3xl border border-white/10 bg-white/[0.04] p-10">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              The real problem
            </p>
            <p className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Most people do not lack talent.
              <br />
              They lack survivability.
            </p>
            <p className="mt-3 text-sm text-neutral-300">
              REZIME buys you that time.
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
                  Playbook explains the system rules and how REZIME tools behave
                  on charts.
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
              Not financial advice. This is education and survivability framing.
              No signals.
            </p>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
