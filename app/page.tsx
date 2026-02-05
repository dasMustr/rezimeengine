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
              build real skill.
            </p>

            {/* HERO ENTRY (single doorway, non-redundant) */}
            <div className="pt-2">
              <Link
                href="/orientation"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                New to Markets? Start Calm →
              </Link>
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
              Beginner first (avoid early damage), then learn the map, then rules, then proof.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            <HomeCard
              tone="hard"
              title="Beginner"
              desc="No jargon. Learn what markets are, why beginners get hurt, and the one rule that prevents early damage."
              href="/orientation"
              cta="Start"
            />
            <HomeCard
              title="Learn (Map)"
              desc="Understand environments (stable / tense / chaotic) and what each one demands from your behavior."
              href="/observer"
              cta="Regime map"
            />
            <HomeCard
              title="Playbook (Rules)"
              desc="Interpret Engine / Sync / Battle Lines without turning them into signals. Posture rules, not predictions."
              href="/operator"
              cta="Behavior rules"
            />
            <HomeCard
              title="Proof (Portfolio Lab)"
              desc="A time-stamped archive of environments, posture, and learning over time (no hype)."
              href="/allocator"
              cta="See the Lab"
            />
          </div>
        </section>
      </Reveal>
    </section>
  );
}
