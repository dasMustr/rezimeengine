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

export default function HomePage() {
  return (
    <section className="space-y-12">
      <Reveal delayMs={0}>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
          <div className="space-y-6">
            {/* TAGS */}
            <div className="flex flex-wrap gap-2">
              <Tag>Beginner-safe</Tag>
              <Tag>Risk containment</Tag>
              <Tag>Method-neutral</Tag>
              <Tag>Calm by design</Tag>
            </div>

            {/* HERO */}
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
              Stay in the game long enough
              <br />
              to understand it.
            </h1>

            {/* SUBTEXT */}
            <div className="space-y-4">
              <p className="max-w-3xl text-base text-neutral-300 leading-relaxed">
                No one can hand you understanding. It only forms through time in
                the arena — observing, experiencing, and learning how conditions
                behave.
              </p>

              <p className="max-w-3xl text-base text-neutral-300 leading-relaxed">
                Most damage is not caused by being wrong. It happens when
                ordinary behavior meets unstable conditions — and risk quietly
                compounds faster than the learner can adapt.
              </p>

              <p className="max-w-3xl text-base text-neutral-300 leading-relaxed">
                REZIME is a decision safety framework for market exposure. It
                helps you recognize the condition first, then choose whether
                action even makes sense.
              </p>

              <p className="max-w-3xl text-sm text-neutral-400 leading-relaxed">
                Built for individuals — especially business owners — who want a
                small exposure sleeve for resilience, without turning the
                learning process into a self-inflicted crisis.
              </p>

              <p className="text-sm text-neutral-400 max-w-3xl leading-relaxed">
                The site teaches the lens. The optional tool makes the lens
                easier to apply. One tool. One purpose: fewer avoidable
                blowups while experience does its work.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/orientation"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Start with Why →
              </Link>

              <Link
                href="/pricing"
                className="premium-card is-clickable inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-neutral-200 transition hover:bg-white/10"
              >
                Access →
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
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              A simple structure
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Why. Lens. Proof.
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-neutral-300 leading-relaxed">
              Understand the mismatch. Learn the lens. Examine the record.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <HomeCard
              tone="hard"
              title="Why"
              desc="Why people blow up. It is usually mismatch, not intelligence — carrying risk into unstable conditions."
              href="/orientation"
              cta="Orientation"
            />
            <HomeCard
              title="Lens"
              desc="A condition-first lens you can apply to any approach, including long-horizon allocation and structured exposure for resilience."
              href="/operator"
              cta="Framework"
            />
            <HomeCard
              title="Proof"
              desc="A time-stamped archive of decisions under the lens. Context included — the goal is clarity, not hype."
              href="/allocator"
              cta="Portfolio Lab"
            />
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">Scope</p>
            <div className="mt-2 space-y-3 text-sm text-neutral-300 leading-relaxed">
              <p>
                REZIME is an educational framework describing decision
                conditions. It does not provide signals or personalized advice.
              </p>
              <p>
                The optional tool exists to help you apply the lens more
                consistently. It is support, not a substitute for judgment or
                experience.
              </p>
            </div>
          </div>
        </section>
      </Reveal>
    </section>
  );
}
