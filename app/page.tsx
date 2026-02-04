import Link from "next/link";
import Reveal from "./components/Reveal";
import Sheen from "./components/Sheen";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-neutral-300">
      {children}
    </span>
  );
}

function PathCard({
  title,
  kicker,
  desc,
  href,
  cta,
  variant = "soft",
}: {
  title: string;
  kicker: string;
  desc: string;
  href: string;
  cta: string;
  variant?: "soft" | "solid";
}) {
  const base =
    "premium-card is-clickable group relative overflow-hidden rounded-2xl border border-white/10 p-6 transition";
  const bg =
    variant === "solid"
      ? "bg-white/10 hover:bg-white/15"
      : "bg-white/[0.04] hover:bg-white/[0.07]";

  return (
    <Link href={href} className={`${base} ${bg}`}>
      <Sheen />
      <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
        {kicker}
      </p>
      <div className="mt-2 flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition">
          {cta} →
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-300">{desc}</p>
    </Link>
  );
}

export default function HomePage() {
  return (
    <section className="space-y-12">
      {/* HERO (2 CTAs max) */}
      <Reveal delayMs={0}>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative space-y-6">
            <div className="flex flex-wrap gap-2">
              <Tag>Market regimes</Tag>
              <Tag>Phase mismatch</Tag>
              <Tag>Survival infrastructure</Tag>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl text-white">
              You don’t fail because you lack a strategy.
              <br />
              You fail because you don’t survive long enough to develop one.
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
              REZIME is a <span className="text-white font-semibold">market survival framework</span>.
              It doesn’t tell you how to win — it helps you stop dying to the wrong environment,
              so you stay alive long enough for real skill to emerge.
            </p>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm text-neutral-300 leading-relaxed">
                <span className="text-white font-semibold">Map, not signals.</span>{" "}
                Profit is a byproduct of survivability. Survivability is a byproduct of understanding the regime.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/observer"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                See the map (Learn) →
              </Link>

              <Link
                href="/allocator"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
              >
                <Sheen className="rounded-full" />
                View proof (Portfolio Lab) →
              </Link>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed">
              We don’t teach you how to win. We teach you how to not die.
            </p>
          </div>
        </div>
      </Reveal>

      {/* START POINT */}
      <Reveal delayMs={70}>
        <div id="path" className="space-y-4 scroll-mt-28">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                Start point
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
                Where should we start?
              </h2>
            </div>
            <p className="hidden text-sm text-neutral-400 sm:block">
              Beginner basics • Practitioner portals
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <PathCard
              kicker="Beginner"
              title="Start"
              href="/start"
              cta="Start here"
              variant="solid"
              desc="Plain language. What markets are, what indicators mean, and why most beginners lose."
            />
            <PathCard
              kicker="Practitioner"
              title="Learn / Playbook / Proof"
              href="/observer"
              cta="Go to Learn"
              desc="Skip basics. Start with the regime map, then move to Playbook and Proof when ready."
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
