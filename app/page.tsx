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

export default function HomePage() {
  return (
    <section className="space-y-12">
      <Reveal delayMs={0}>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
          <div className="space-y-6">
            {/* TAGS */}
            <div className="flex flex-wrap gap-2">
              <Tag>Survival-first</Tag>
              <Tag>Markets as environments</Tag>
              <Tag>Calm learning</Tag>
            </div>

            {/* HERO */}
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
              Markets aren’t dangerous.
              <br />
              Entering without a map is.
            </h1>

            {/* SUBTEXT */}
            <p className="max-w-2xl text-base text-neutral-300">
              REZIME is a calm framework for understanding market environments —
              so you can learn without being broken by early mistakes.
              <br />
              <br />
              No hype. No shortcuts. No signals.
              Just the safety layer that helps you stay in the game long enough to
              understand yourself.
            </p>

            {/* PRIMARY CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/orientation"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Start Here → 
              </Link>

              <Link
                href="/observer"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
              >
                <Sheen className="rounded-full" />
                See the Environment Map →
              </Link>

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
              The REZIME path
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              A calm route into markets
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-neutral-300 leading-relaxed">
              Start where you are. Move slowly. Build clarity before complexity.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            <HomeCard
              tone="hard"
              title="Start Here"
              desc="Beginner-friendly. No jargon. Learn why people get hurt and how to avoid early trauma."
              href="/orientation"
              cta="Orientation"
            />
            <HomeCard
              title="Learn"
              desc="Understand environments (stable / tense / chaotic) and what each one demands from your behavior."
              href="/observer"
              cta="Environment map"
            />
            <HomeCard
              title="Playbook"
              desc="How to interpret REZIME tools without turning them into signals. Posture rules, not predictions."
              href="/operator"
              cta="Behavior rules"
            />
            <HomeCard
              title="Proof"
              desc="Portfolio Lab: a time-stamped archive of environments, decisions, and learning over time."
              href="/allocator"
              cta="See the Lab"
            />
          </div>
        </section>
      </Reveal>
    </section>
  );
}
