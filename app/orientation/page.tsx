// app/orientation/page.tsx
import React from "react";
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

function ChartMini({
  src = "/images/example-chart.png",
  alt = "Example market chart",
}: {
  src?: string;
  alt?: string;
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-white">A chart is history</p>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            It shows what happened, not what will happen. For now, the goal is
            comfort with the interface.
          </p>
        </div>
        <Link
          href="/operator"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
        >
          Learn the lens in Framework →
        </Link>
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
        Everyone sees the same movement. The difference is behavior when
        conditions are clear versus messy.
      </p>
    </div>
  );
}

/**
 * Tiny preview only.
 * Full mapping + meanings belongs in Framework.
 */
function StripPreview() {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-white">
            A simple label for conditions
          </p>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            REZIME adds a small color strip to label the environment. It helps
            you slow down in yellow and stop in red before mistakes compound.
          </p>
          <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
            It is not an instruction. It is a risk label.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/40 p-2">
          <div className="flex h-3 w-[220px] overflow-hidden rounded-lg border border-white/10">
            <div style={{ background: "#6b7280" }} className="w-[16%]" />
            <div style={{ background: "#3b82f6" }} className="w-[24%]" />
            <div style={{ background: "#facc15" }} className="w-[10%]" />
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
          Learn the full map in Framework →
        </Link>
        <p className="text-xs text-neutral-500">
          Orientation stays gentle. Framework shows the meanings and how to read
          them.
        </p>
      </div>
    </div>
  );
}

export default function OrientationPage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Why
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag>Beginner-safe</Tag>
            <Tag>Risk-first</Tag>
            <Tag>Method-neutral</Tag>
            <Tag>Calm by design</Tag>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl text-white">
            If you feel fear,
            <br />
            you are not behind.
          </h1>

          <div className="max-w-3xl space-y-3 text-sm text-neutral-300 leading-relaxed">
            <p>
              Markets feel intimidating because feedback is immediate. Mistakes
              can become permanent before understanding forms.
            </p>
            <p>
              The goal is not to feel confident fast. The goal is to stay safe
              long enough for the environment to make sense.
            </p>
            <p>
              REZIME is built to label the condition first, so your behavior
              matches what you are in.
            </p>
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
              <span className="text-neutral-300">Jump to:</span>
              <JumpPill href="#prices" label="Price movement" />
              <JumpPill href="#headlines" label="Headlines" />
              <JumpPill href="#mismatch" label="Mismatch" />
              <JumpPill href="#rezime" label="What REZIME is" />
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
            subtitle="Prices change because people constantly revalue what things are worth. You have seen this outside finance your whole life."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="Food and daily goods"
              desc="Eggs, rice, coffee, cooking oil. Prices rise and fall with supply, demand, and mood."
              note="This is normal repricing. It happens everywhere."
            />
            <Card
              title="Flights, hotels, and tickets"
              desc="Holiday season pushes prices up. Low demand creates discounts. Scarcity changes prices fast."
              note="Same idea. Buyers and sellers constantly reprice."
            />
            <Card
              tone="hard"
              title="In-game economies"
              desc="Rare items get expensive. A patch changes drop rates. Players react and prices adapt."
              note="It can feel chaotic, but it is still supply and demand."
            />
          </div>

          <Callout title="Simple translation">
            Movement is not the scary part. The scary part is deciding how to act
            when conditions change.
          </Callout>
        </section>
      </Reveal>

      {/* HEADLINES */}
      <Reveal delayMs={160}>
        <section id="headlines" className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="The headline effect"
            title="Why dramatic headlines feel terrifying"
            subtitle="Fear gets attention. Calm does not. Headlines compress complexity into urgency."
          />

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <p className="text-sm text-neutral-300 leading-relaxed">
              You will see headlines that sound like disaster. Most of the time,
              the core event is simple. Prices moved quickly.
            </p>

            <div className="grid gap-4 lg:grid-cols-2">
              <Card
                title="What your brain hears"
                desc="This is unsafe. I need to act right now."
              />
              <Card
                tone="hard"
                title="What is actually happening"
                desc="The market is repricing. The real question is whether conditions are clear or messy."
              />
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed">
              The goal is not to ignore news. The goal is to stop turning normal
              movement into urgency.
            </p>
          </div>
        </section>
      </Reveal>

      {/* MISMATCH */}
      <Reveal delayMs={240}>
        <section id="mismatch" className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="Core risk"
            title="Most damage comes from mismatch"
            subtitle="People get hurt when they stay active in messy conditions. Activity feels productive, but error rates rise."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              title="Confusion is information"
              desc="Messy environments reduce clarity. Your brain tries to force certainty where none exists."
              note="That is not weakness. That is the environment."
            />
            <Card
              tone="hard"
              title="Urgency creates mistakes"
              desc="When things feel unstable, your brain screams to act. That impulse causes most beginner damage."
              note="Calm beats fast."
            />
            <Card
              title="Overwhelm is a signal"
              desc="Overwhelm is common in messy environments."
              note="Your system is telling you to shrink activity."
            />
          </div>

          <RuleTiles
            title="Safety rules"
            subtitle="If you remember nothing else, remember these."
            rules={[
              {
                title: "If you are confused, reduce activity",
                desc: "Confusion often means conditions are messy. Trying harder usually increases mistakes.",
                tone: "hard",
              },
              {
                title: "Do not chase clarity inside chaos",
                desc: "In messy conditions, fakeouts increase and errors compound.",
              },
              {
                title: "Your job is safety, not prediction",
                desc: "Safety buys time. Time builds skill. Skill creates advantage.",
                tone: "hard",
              },
              {
                title: "Doing nothing is a valid move",
                desc: "In messy conditions, restraint is often the highest skill.",
              },
            ]}
          />
        </section>
      </Reveal>

      {/* WHAT REZIME IS */}
      <Reveal delayMs={320}>
        <section id="rezime" className="scroll-mt-28 space-y-5">
          <SectionHeader
            eyebrow="What REZIME is"
            title="A risk label, not an instruction"
            subtitle="REZIME does not tell you what to do. It helps you recognize when conditions are stable, messy, or changed."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              tone="hard"
              title="Stable"
              desc="Actions have time to work. Mistakes stay small."
              note="Learning feels slower, but safer."
            />
            <Card
              title="Messy"
              desc="Signals conflict. Activity increases error."
              note="Smaller decisions. Fewer moves."
            />
            <Card
              tone="hard"
              title="Reset"
              desc="Conditions changed. Old assumptions no longer apply."
              note="Pause. Rebuild context."
            />
          </div>

          <StripPreview />

          <ChartMini src="/images/example-chart.png" alt="Chart screenshot example" />

          <div className="calm-block rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              The common failure mode
            </p>
            <p className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Most people do not lack talent.
              <br />
              They lack risk containment.
            </p>
            <p className="mt-3 text-sm text-neutral-300 leading-relaxed max-w-3xl">
              REZIME exists to slow down consequences so experience can catch up.
              It helps you stay in the game long enough for the environment to
              make sense.
            </p>
          </div>
        </section>
      </Reveal>

      {/* BOTTOM CTA */}
      <Reveal delayMs={420}>
        <section id="next" className="scroll-mt-28">
          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">
                  Next step: Framework
                </p>
                <p className="text-xs text-neutral-400">
                  The full REZIME map, meanings, and how to read it calmly.
                </p>
              </div>

              <Link
                href="/operator"
                className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Enter Framework →
              </Link>
            </div>

            <p className="mt-4 text-[11px] text-neutral-500 leading-relaxed">
              Educational documentation only. Not financial advice. No signals.
              No predictions. No guarantees.
            </p>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
