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

function MiniPoint({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="premium-card relative rounded-2xl border border-white/10 bg-white/5 p-5">
      <Sheen className="rounded-2xl" />
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-300">{desc}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <section className="space-y-12">
      {/* HERO */}
      <Reveal delayMs={0}>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-6 sm:p-8">
          <div className="space-y-5">
            {/* TAGS */}
            <div className="flex flex-wrap gap-2">
              <Tag>Beginner-safe</Tag>
              <Tag>Risk-first</Tag>
              <Tag>Calm by design</Tag>
            </div>

            {/* HEADLINE */}
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
              Stay in the game long enough
              <br />
              to understand it.
            </h1>

            {/* COPY */}
            <div className="space-y-4">
              <p className="max-w-2xl text-base text-neutral-300 leading-relaxed">
                Markets feel intimidating because feedback is immediate.
              </p>

              <div className="max-w-2xl space-y-2">
                <p className="text-sm text-neutral-400">
                  One mistake can feel permanent.
                </p>
                <p className="text-sm text-neutral-400">
                  People rush. Or they avoid starting.
                </p>
              </div>

              <div className="max-w-2xl space-y-2">
                <p className="text-sm text-neutral-400">
                  Most damage is not caused by being wrong.
                </p>
                <p className="text-sm text-neutral-400">
                  It comes from acting in the wrong condition.
                </p>
              </div>

              <p className="max-w-2xl text-sm text-neutral-400 leading-relaxed">
                REZIME makes the condition visible.
              </p>

              <p className="max-w-2xl text-sm text-neutral-400 leading-relaxed">
                Not a method. A calmer way to approach the environment.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-3">
              <Link
                href="/orientation"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Orientation →
              </Link>

              <Link
                href="/operator"
                className="premium-card is-clickable inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-neutral-200 transition hover:bg-white/10"
              >
                Framework →
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

      {/* THREE SIMPLE TRUTHS */}
      <Reveal delayMs={60}>
        <section className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              A simple idea
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Condition first. Behavior second.
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-neutral-300 leading-relaxed">
              When conditions are calm, learning is straightforward. When
              conditions are messy, error rates rise and emotions take control.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <MiniPoint
              title="Stable feels boring"
              desc="That is usually a good sign. Boring conditions are where steady learning happens."
            />
            <MiniPoint
              title="Messy feels urgent"
              desc="Urgency is often noise. It pulls people into decisions they do not understand yet."
            />
            <MiniPoint
              title="Confusion is a signal"
              desc="Confusion usually means the environment is unclear. Reducing activity protects your timeline."
            />
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">
              What REZIME is
            </p>
            <div className="mt-2 space-y-2 text-sm text-neutral-300 leading-relaxed">
              <p>It is a risk label for conditions.</p>
              <p>It is not an instruction engine.</p>
              <p>It helps you stay present long enough for understanding to form.</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* THREE DOORS */}
      <Reveal delayMs={110}>
        <section className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Explore
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Orientation. Framework. Record.
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-neutral-300 leading-relaxed">
              Start with fear. Then learn the lens. Then see it applied with
              context.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <HomeCard
              tone="hard"
              title="Orientation"
              desc="Why markets feel scary. Why most mistakes come from mismatch, not lack of intelligence."
              href="/orientation"
              cta="Why"
            />
            <HomeCard
              title="Framework"
              desc="A simple lens for reading conditions. Method-neutral. Designed to reduce avoidable damage."
              href="/operator"
              cta="Lens"
            />
            <HomeCard
              title="Portfolio Lab"
              desc="A time-stamped record with context. Decisions first, explanations included, no hindsight theater."
              href="/allocator"
              cta="Proof"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/orientation"
              className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
            >
              <Sheen className="rounded-full" />
              Start here →
            </Link>

            <Link
              href="/pricing"
              className="premium-card is-clickable inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-neutral-200 transition hover:bg-white/10"
            >
              Access →
            </Link>
          </div>
        </section>
      </Reveal>
    </section>
  );
}
