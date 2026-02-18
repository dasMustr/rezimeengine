// app/page.tsx
import React from "react";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import Sheen from "@/app/components/Sheen";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-neutral-300">
      {children}
    </span>
  );
}

function HomeCard({
  title,
  desc,
  href,
  cta,
  tone = "soft",
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
  tone?: "soft" | "hard";
}) {
  return (
    <Link
      href={href}
      className={[
        "premium-card is-clickable group relative block rounded-2xl border p-6 transition",
        tone === "hard"
          ? "border-white/15 bg-white/10 hover:bg-white/15"
          : "border-white/10 bg-white/5 hover:bg-white/10",
      ].join(" ")}
    >
      <Sheen className="rounded-2xl" />
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-neutral-300">{desc}</div>
      <div className="mt-4 text-xs text-neutral-300">
        <span className="text-neutral-400">Open</span>{" "}
        <span className="text-white">→</span> {cta}
      </div>
    </Link>
  );
}

function ScopeBlock() {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-semibold text-white">Scope</p>
      <div className="mt-2 space-y-3 text-sm text-neutral-300 leading-relaxed">
        <p>
          REZIME is an educational framework describing decision conditions. It
          does not provide signals or personalized advice.
        </p>
        <p>
          The optional tool exists to help you apply the lens more consistently.
          It is support, not a substitute for judgment or experience.
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <section className="space-y-12">
      {/* HERO */}
      <Reveal delayMs={0}>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 sm:p-12">
          <div className="space-y-7">
            {/* TAGS */}
            <div className="flex flex-wrap gap-2">
              <Tag>Beginner-safe</Tag>
              <Tag>Risk-aware</Tag>
              <Tag>Calm by design</Tag>
            </div>

            {/* HERO COPY */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
                Markets feel dangerous
                <br />
                because feedback is immediate.
              </h1>

              <p className="max-w-2xl text-base text-neutral-300 leading-relaxed">
                The problem is not intelligence. The problem is consequence
                speed.
              </p>

              <p className="max-w-2xl text-sm text-neutral-400 leading-relaxed">
                REZIME labels conditions before decisions, so you can reduce
                activity when clarity is low and stay active when conditions are
                stable.
              </p>
            </div>

            {/* RECOGNITION (TIGHT + COMPACT) */}
            <div className="max-w-2xl space-y-2">
              <p className="text-sm text-neutral-400">
                Most damage is not caused by being wrong.
              </p>
              <p className="text-sm text-neutral-400">
                It comes from carrying risk inside unstable conditions.
              </p>
              <p className="text-sm text-neutral-400">
                You are not trying to win faster. You are trying to last long
                enough for the environment to make sense.
              </p>
            </div>

            {/* CTAs (CLEAR HIERARCHY) */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/orientation"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Start with Why →
              </Link>

              <Link
                href="/operator"
                className="premium-card is-clickable inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-neutral-200 transition hover:bg-white/10"
              >
                Enter Framework →
              </Link>

              <Link
                href="/pricing"
                className="text-sm text-neutral-400 underline decoration-white/10 underline-offset-4 transition hover:text-neutral-200 hover:decoration-white/20"
              >
                Access
              </Link>
            </div>

            <p className="text-xs text-neutral-500">
              Educational framework. Not financial advice. No signals. No
              predictions. No guarantees.
            </p>
          </div>
        </div>
      </Reveal>

      {/* THREE DOORS */}
      <Reveal delayMs={80}>
        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              A simple structure
            </p>
            <h2 className="text-xl font-semibold text-white">Why. Lens. Proof.</h2>
            <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
              Understand the mismatch. Use the lens. Examine the record.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <HomeCard
              tone="hard"
              title="Why"
              desc="If you feel fear, you are not behind. The environment is intense because consequences arrive fast."
              href="/orientation"
              cta="Orientation"
            />
            <HomeCard
              title="Lens"
              desc="A condition-first decision lens you can apply to any approach. It helps you choose posture before action."
              href="/operator"
              cta="Framework"
            />
            <HomeCard
              title="Proof"
              desc="A time-stamped archive of decisions under the lens. Context included. No hindsight theater."
              href="/allocator"
              cta="Portfolio Lab"
            />
          </div>

          <ScopeBlock />
        </section>
      </Reveal>
    </section>
  );
}
