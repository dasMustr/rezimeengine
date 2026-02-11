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
              <Tag>Regime classification</Tag>
              <Tag>Map, not signals</Tag>
              <Tag>Behavior over prediction</Tag>
            </div>

            {/* HERO */}
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
              Markets aren&apos;t dangerous.
              <br />
              Unstructured participation is.
            </h1>

            {/* SUBTEXT */}
            <p className="max-w-3xl text-base text-neutral-300 leading-relaxed">
              REZIME is a calm decision-structure framework that classifies market
              regimes so participation can be conditioned by environment, not conviction.
              <br />
              <br />
              You do not need secret information. You need a process that reduces
              avoidable exposure mistakes. Different conditions require different posture.
              REZIME makes the environment legible so you stop acting the same inside every regime.
            </p>

            {/* MICRO PROMISE */}
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  Objective
                </p>
                <p className="mt-2 text-sm text-neutral-200">
                  Reduce phase mismatch
                </p>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                  Avoid environments that punish activity, then re-engage when structure stabilizes.
                </p>
              </div>

              <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  Design
                </p>
                <p className="mt-2 text-sm text-neutral-200">
                  Calm, not performative
                </p>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                  No prediction theater. No signal arrows. Clear labels and posture rules that
                  reduce confusion under volatility.
                </p>
              </div>

              <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  Outcome
                </p>
                <p className="mt-2 text-sm text-neutral-200">
                  Capital continuity
                </p>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                  Staying operational builds skill. Skill builds confidence. Performance is a byproduct,
                  not the pitch.
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
                  label="Orientation: understand price behavior, uncertainty, and the phase mismatch trap."
                />
                <TinyStep
                  n="2"
                  label="Playbook: learn REZIME regimes and posture rules (context, not entries)."
                />
                <TinyStep
                  n="3"
                  label="Portfolio Lab: time-stamped record of context, posture, and learning over time."
                />
              </div>
            </div>

            <p className="text-xs text-neutral-500">
              Risk control → clarity → discipline → performance as a byproduct.
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
              Orientation defines the mental model. The Playbook defines interpretation rules.
              The Portfolio Lab documents applied behavior under live conditions.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <HomeCard
              tone="hard"
              title="Orientation"
              desc="No jargon. Understand how price behaves, why uncertainty feels chaotic, and the core error: staying active when the environment is structurally unstable."
              href="/orientation"
              cta="Start"
            />
            <HomeCard
              title="Playbook"
              desc="Learn the REZIME regimes (Empire, Siege, Revolution) and posture rules. The focus is environment conditioning, not calling tops."
              href="/operator"
              cta="Apply"
            />
            <HomeCard
              title="Portfolio Lab"
              desc="A time-stamped archive of applied process. Regimes, posture shifts, and reasoning over time. Record-first, not performance marketing."
              href="/allocator"
              cta="See the Lab"
            />
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">Scope boundaries</p>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              You will not find entry alerts, profit guarantees, or influencer energy.
              REZIME is a map that supports smaller, slower, or zero participation when conditions are unstable.
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
