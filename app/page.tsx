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
        <span className="text-neutral-400">Open</span> <span className="text-white">→</span> {cta}
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
              <Tag>Market regimes</Tag>
              <Tag>Behavior over prediction</Tag>
              <Tag>Survival infrastructure</Tag>
            </div>

            {/* HERO */}
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
              Most people don’t lose because they lack skill.
              <br />
              They lose because they don’t survive long enough to develop it.
            </h1>

            {/* SUBTEXT */}
            <p className="max-w-2xl text-base text-neutral-300">
              REZIME is not a strategy.
              <br />
              It’s market survival infrastructure.
              <br />
              <br />
              It helps you stop donating capital to the wrong environment —
              so you stay in the game long enough for real edge to emerge.
            </p>

            {/* PRIMARY CTAs (NO "I already trade") */}
            <div className="flex flex-wrap gap-3 pt-2">
              {/* Primary: beginner-friendly */}
              <Link
                href="/orientation"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                New to Markets? Start here →
              </Link>

              {/* Secondary: map */}
              <Link
                href="/observer"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
              >
                <Sheen className="rounded-full" />
                Learn the Regime Map →
              </Link>

              {/* Quiet secondary */}
              <div className="flex items-center gap-4 pl-1">
                <Link
                  href="/allocator"
                  className="text-sm text-neutral-400 hover:text-white transition"
                >
                  Proof →
                </Link>
                <Link
                  href="/pricing"
                  className="text-sm text-neutral-400 hover:text-white transition"
                >
                  Access →
                </Link>
              </div>
            </div>

            {/* MICRO PROMISE */}
            <p className="text-xs text-neutral-500">
              Survive → Understand → Build edge → Then performance follows.
            </p>
          </div>
        </div>
      </Reveal>

      {/* PORTAL GRID (makes it feel “new to the market” — clear structure) */}
      <Reveal delayMs={80}>
        <section className="space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400">
                The REZIME system
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                A survival-first route through markets
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-neutral-300 leading-relaxed">
                Pick the doorway that fits you. Same framework works for investing,
                trading, discretionary, systematic — anything that touches markets.
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            <HomeCard
              tone="hard"
              title="New to Markets"
              desc="ELI5. No jargon. Learn what markets are, why people get hurt, and how survivability actually works."
              href="/orientation"
              cta="Start (ELI5)"
            />
            <HomeCard
              title="Learn"
              desc="Public explanation of the regime map: Empire / Siege / Revolution — and the safe behavior in each."
              href="/observer"
              cta="Read the map"
            />
            <HomeCard
              title="Playbook"
              desc="How to interpret Engine / Sync / Battle Lines. Context → posture. Rules, not signals."
              href="/operator"
              cta="Use the tools"
            />
            <HomeCard
              title="Portfolio Lab"
              desc="A time-stamped proof trail: posture and weekly deltas through real market conditions (no hype)."
              href="/allocator"
              cta="See proof"
            />
          </div>
        </section>
      </Reveal>
    </section>
  );
}
