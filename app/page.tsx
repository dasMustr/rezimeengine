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
              <Tag>Risk-first</Tag>
              <Tag>Map, not signals</Tag>
              <Tag>Beginner-safe</Tag>
              <Tag>Calm by design</Tag>
            </div>

            {/* HERO */}
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
              A traffic light for market risk.
              <br />
              Built for the yellow and red.
            </h1>

            {/* SUBTEXT (traffic light) */}
            <p className="max-w-3xl text-base text-neutral-300 leading-relaxed">
              REZIME helps you avoid the two environments that wipe people out:
              <strong className="text-white"> Siege (yellow)</strong> and{" "}
              <strong className="text-white">Revolution (red)</strong>.
              <br />
              <br />
              Green is personal. It depends on your edge. REZIME doesn&apos;t tell
              you when to &quot;go&quot;. It helps you recognize when you should slow
              down or stop.
            </p>

            {/* MICRO PROMISE (simpler) */}
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  What it does
                </p>
                <p className="mt-2 text-sm text-neutral-200">
                  Labels the environment
                </p>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                  So you stop treating every market like it&apos;s the same day.
                </p>
              </div>

              <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  Why it matters
                </p>
                <p className="mt-2 text-sm text-neutral-200">
                  Fewer avoidable mistakes
                </p>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                  Chaos creates traps. REZIME helps you reduce decisions when clarity is low.
                </p>
              </div>

              <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  The outcome
                </p>
                <p className="mt-2 text-sm text-neutral-200">
                  Stay in the game
                </p>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                  Safety buys time. Time builds skill. Skill creates advantage.
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
                  label="Orientation: get comfortable with charts and the idea of “market environments.”"
                />
                <TinyStep
                  n="2"
                  label="Framework: learn how the REZIME map behaves and how to use it safely."
                />
                <TinyStep
                  n="3"
                  label="Portfolio Lab: see the map applied over time — record-first, not hype."
                />
              </div>
            </div>

            <p className="text-xs text-neutral-500">
              Educational tools. No signals. No guarantees.
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
              Learn safely, then go deeper
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-neutral-300 leading-relaxed">
              Orientation is the calm entry. Framework is the map. Portfolio Lab is the proof trail.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <HomeCard
              tone="hard"
              title="Orientation"
              desc="A gentle start. Understand what charts are and why fear is normal. No jargon."
              href="/orientation"
              cta="Start"
            />
            <HomeCard
              title="Framework"
              desc="The REZIME map: regimes, meaning, and how to use it without turning it into signals."
              href="/operator"
              cta="Learn"
            />
            <HomeCard
              title="Portfolio Lab"
              desc="Time-stamped snapshots of applied process. Context and decisions, not marketing."
              href="/allocator"
              cta="See the Lab"
            />
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">Scope boundaries</p>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              REZIME is not a signal service. It&apos;s a risk map that helps you slow down or stop
              when the environment is unstable.
            </p>
            <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
              Educational documentation only. Not financial advice.
            </p>
          </div>
        </section>
      </Reveal>
    </section>
  );
}
