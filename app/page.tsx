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

function PortalCard({
  title,
  audience,
  desc,
  href,
}: {
  title: string;
  audience: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="premium-card group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition"
    >
      <Sheen />

      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
            {audience}
          </p>
          <h3 className="text-sm font-semibold">{title}</h3>
        </div>

        <span className="mt-1 text-xs text-neutral-400 group-hover:text-neutral-200 transition">
          Enter →
        </span>
      </div>

      <p className="mt-3 text-sm text-neutral-300 leading-relaxed">{desc}</p>
    </Link>
  );
}

function InfoBlock({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="premium-card relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <Sheen />
      <h4 className="text-sm font-semibold">{title}</h4>
      <p className="mt-3 text-sm leading-relaxed text-neutral-300">{desc}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <section className="space-y-14">
      {/* HERO */}
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative space-y-6">
            <div className="flex flex-wrap gap-2">
              <Tag>Map, not signals</Tag>
              <Tag>Bull Empire / Bear Empire</Tag>
              <Tag>Regime • Alignment • Territory</Tag>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Regime mapping for holding through market cycles.
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
              REZIME frames markets as competing Empires. The goal is survival
              through transitions — then time-in-market. No buy/sell prompts.
              Only context.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/observer"
                className="premium-card relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Start with Observer
              </Link>

              <Link
                href="/operator"
                className="premium-card relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
              >
                <Sheen className="rounded-full" />
                View Tools (Operator)
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      {/* PORTALS */}
      <Reveal className="mt-2">
        <div className="space-y-4">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                Select audience
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">
                Three portals. One system.
              </h2>
            </div>
            <p className="hidden text-sm text-neutral-400 sm:block">
              Documentary → Technical → Institutional
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <PortalCard
              title="Observer"
              audience="Public"
              href="/observer"
              desc="A documentary introduction to the REZIME worldview: Empires, Rebellions, Uprisings, Revolutions — and how to hold with structure, not emotion."
            />
            <PortalCard
              title="Operator"
              audience="Practitioners"
              href="/operator"
              desc="Technical usage of REZIME Engine / Sync / Battle Lines, interpretation rules, and curated case studies across major market events."
            />
            <PortalCard
              title="Allocator"
              audience="Allocators"
              href="/allocator"
              desc="An IR-style portal: Portfolio Lab, factsheets, mandate, governance, and risk doctrine — designed for institutional conversations."
            />
          </div>
        </div>
      </Reveal>

      {/* WHAT IT IS (institutional blocks) */}
      <Reveal className="mt-2">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoBlock
            title="Not a signal service"
            desc="REZIME is designed to reduce decision-noise. It identifies the dominant regime so you can align exposure and hold through volatility."
          />
          <InfoBlock
            title="Defined states"
            desc="Empire (trend control) → Rebellion (counter-move) → Uprising (pressure spreads) → Revolution (regime shift)."
          />
          <InfoBlock
            title="Risk-first orientation"
            desc="Primary objective: survive transitions, avoid fighting the Empire, and let time-in-market do the compounding."
          />
        </div>
      </Reveal>
    </section>
  );
}
