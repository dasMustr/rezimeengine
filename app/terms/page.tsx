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
              <Tag>Calm learning</Tag>
              <Tag>Market regimes</Tag>
              <Tag>Map, not signals</Tag>
              <Tag>Risk-first</Tag>
            </div>

            {/* HERO */}
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
              A calmer way to read markets.
              <br />
              Clear context. Better decisions.
            </h1>

            {/* SUBTEXT */}
            <p className="max-w-3xl text-base text-neutral-300 leading-relaxed">
              REZIME helps you label what kind of market you&apos;re in—so you
              can choose a posture that fits.
              <br />
              <br />
              No alerts. No calls. Just a clean framework for staying grounded
              when price gets noisy.
            </p>

            {/* MICRO PROMISE */}
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  What it does
                </p>
                <p className="mt-2 text-sm text-neutral-200">
                  Makes conditions legible
                </p>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                  Simple labels for structure, momentum, and regime shifts.
                </p>
              </div>

              <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  How it feels
                </p>
                <p className="mt-2 text-sm text-neutral-200">Less guessing</p>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                  Fewer impulse moves. More “wait” and “engage” clarity.
                </p>
              </div>

              <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  The goal
                </p>
                <p className="mt-2 text-sm text-neutral-200">
                  Stay operational
                </p>
                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                  Protect your attention and capital. Performance comes later.
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
                  label="Orientation: a friendly intro to how markets behave (and why fear is normal)."
                />
                <TinyStep
                  n="2"
                  label="Framework: learn the regimes and posture rules (context, not entries)."
                />
                <TinyStep
                  n="3"
                  label="Portfolio Lab: see the framework applied in real time, week by week."
                />
              </div>
            </div>

            <p className="text-xs text-neutral-500">
              Clarity → posture → risk control → confidence over time.
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
              A simple route into REZIME
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-neutral-300 leading-relaxed">
              Start with the basics, learn the labels, then watch it applied.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <HomeCard
              tone="hard"
              title="Orientation"
              desc="A gentle intro. What markets are, why uncertainty feels intense, and how to avoid early mistakes."
              href="/orientation"
              cta="Start"
            />
            <HomeCard
              title="Framework"
              desc="Learn REZIME regimes (Empire, Siege, Revolution) and the matching posture rules—no signals."
              href="/operator"
              cta="Learn"
            />
            <HomeCard
              title="Portfolio Lab"
              desc="A time-stamped archive of applied context and posture. Process-first, week by week."
              href="/allocator"
              cta="See the Lab"
            />
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">Scope boundaries</p>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              REZIME is educational and analytical. No signals, no guarantees,
              no trade execution.
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
