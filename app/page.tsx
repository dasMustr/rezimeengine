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

function LightPill({
  label,
  desc,
}: {
  label: string;
  desc: string;
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
      <p className="text-xs uppercase tracking-widest text-neutral-400">{label}</p>
      <p className="mt-2 text-xs text-neutral-500 leading-relaxed">{desc}</p>
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
              <Tag>Red / Yellow awareness</Tag>
              <Tag>Beginner-friendly</Tag>
            </div>

            {/* HERO */}
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
              A traffic light for markets.
              <br />
              Focused on yellow and red.
            </h1>

            {/* SUBTEXT */}
            <p className="max-w-3xl text-base text-neutral-300 leading-relaxed">
              REZIME helps you avoid the two environments that wipe people out:
              <strong className="text-white"> Siege (yellow)</strong> and{" "}
              <strong className="text-white">Revolution (red)</strong>.
              <br />
              <br />
              Green is personal — it depends on your edge. REZIME doesn&apos;t tell you when to
              &quot;go&quot;. It helps you recognize when you should slow down or stop.
            </p>

            {/* MICRO PROMISE */}
            <div className="grid gap-3 sm:grid-cols-3">
              <LightPill
                label="Yellow = Siege"
                desc="Slow down. Reduce exposure. Be selective. Conditions are noisy and punish forcing."
              />
              <LightPill
                label="Red = Revolution"
                desc="Stop. No matter your edge, this is where habits get margin-called sooner or later."
              />
              <LightPill
                label="No green claims"
                desc="REZIME is not a signal service. It&apos;s a clarity layer: read the environment first."
              />
            </div>

            <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-xs uppercase tracking-widest text-neutral-400">
                The simple path
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                <TinyStep
                  n="1"
                  label="Orientation: learn how markets move, and why fear is normal."
                />
                <TinyStep
                  n="2"
                  label="Framework: read regimes (especially Siege/Revolution) and choose the right posture."
                />
                <TinyStep
                  n="3"
                  label="Portfolio Lab: see the process applied in real time — record-first, not hype."
                />
              </div>
            </div>

            <p className="text-xs text-neutral-500">
              Clarity first → smaller mistakes → staying in the game.
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
              Learn the map. Then decide your pace.
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-neutral-300 leading-relaxed">
              REZIME is built for survivability: spot the red/yellow environments early, and
              avoid unnecessary damage.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <HomeCard
              tone="hard"
              title="Orientation"
              desc="A friendly start. What markets are, why uncertainty feels intense, and how to avoid early mistakes."
              href="/orientation"
              cta="Start"
            />
            <HomeCard
              title="Framework"
              desc="Learn the REZIME regimes and posture rules. Especially Siege (yellow) and Revolution (red)."
              href="/operator"
              cta="Apply"
            />
            <HomeCard
              title="Portfolio Lab"
              desc="A time-stamped record of the process in action. Context, posture, and learning over time."
              href="/allocator"
              cta="See the Lab"
            />
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">Scope boundaries</p>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              REZIME is educational and analytical tools — not financial advice, not signals, and
              no guarantees. You choose when to participate.
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
