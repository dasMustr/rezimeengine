// app/page.tsx
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

function TinyStep({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-[2px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[11px] text-neutral-200">
        {n}
      </div>
      <p className="text-sm text-neutral-300 leading-relaxed">{label}</p>
    </div>
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
              <Tag>Survival-first</Tag>
              <Tag>Regime label</Tag>
              <Tag>Map, not signals</Tag>
              <Tag>Behavior over prediction</Tag>
            </div>

            {/* HERO */}
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
              Markets aren&apos;t dangerous.
              <br />
              Entering without a map is.
            </h1>

            {/* SUBTEXT */}
            <p className="max-w-3xl text-base text-neutral-300 leading-relaxed">
              REZIME is a calm regime framework designed to help beginners avoid
              the most common early mistake.
              <br />
              <br />
              You do not need secret information. You need survivability.
              Different conditions require different behavior. REZIME helps you
              label the environment so you stop acting the same inside every
              regime.
            </p>

            {/* MICRO PROMISE */}
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  Goal
                </p>
                <p className="mt-2 text-sm text-neutral-200">
                  Avoid the wrong regime
                </p>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                  Stay out of environments that punish activity, then re-engage
                  when conditions improve.
                </p>
              </div>

              <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  Promise
                </p>
                <p className="mt-2 text-sm text-neutral-200">
                  Calm, not hype
                </p>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                  No shortcuts, no performance marketing, no signal arrows.
                  Education and posture rules.
                </p>
              </div>

              <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  Outcome
                </p>
                <p className="mt-2 text-sm text-neutral-200">
                  Time in the game
                </p>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                  Survival builds skill. Skill builds confidence. Profit is a
                  byproduct, not the pitch.
                </p>
              </div>
            </div>

            <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-xs uppercase tracking-widest text-neutral-400">
                The simple path
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                <TinyStep
                  n="1"
                  label="Orientation: understand price movement, fear, and the beginner trap."
                />
                <TinyStep
                  n="2"
                  label="Playbook: learn the REZIME labels and posture rules (not entries)."
                />
                <TinyStep
                  n="3"
                  label="Portfolio Lab: time-stamped practice and proof-of-process."
                />
              </div>
            </div>

            <p className="text-xs text-neutral-500">
              Survival → understanding → self-mastery → profit as a byproduct.
            </p>
          </div>
        </div>
      </Reveal>

      {/* SYSTEM GRID */}
      <Reveal delayMs={80}>
        <section className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Start here
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              A calm route into markets
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-neutral-300 leading-relaxed">
              This site is built for people who feel intimidated by charts and
              finance. Orientation is simple. Playbook is practical. The Lab is
              time-stamped, no hype.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <HomeCard
              tone="hard"
              title="Orientation"
              desc="No jargon. Understand what prices are, why headlines feel scary, and the real beginner trap: staying active in unstable conditions."
              href="/orientation"
              cta="Start"
            />
            <HomeCard
              title="Playbook"
              desc="Learn the REZIME labels (Neutral, Bull, Bear, Siege, Revolution) and posture rules. This is about avoiding the wrong regime, not calling tops."
              href="/operator"
              cta="Apply"
            />
            <HomeCard
              title="Portfolio Lab"
              desc="A time-stamped archive of practice. Regimes, posture, and learning over time. Proof-of-process, not performance hype."
              href="/allocator"
              cta="See the Lab"
            />
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">What you will not see</p>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              No “buy now” alerts. No guaranteed returns. No influencer energy.
              REZIME is a map that helps you act smaller, slower, or not at all
              when conditions are unstable.
            </p>
            <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
              Not financial advice. Education only.
            </p>
          </div>
        </section>
      </Reveal>
    </section>
  );
}
