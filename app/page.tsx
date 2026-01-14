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
      <Reveal delayMs={0}>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative space-y-6">
            <div className="flex flex-wrap gap-2">
              <Tag>Map, not signals</Tag>
              <Tag>Regime context</Tag>
              <Tag>Time-in-market</Tag>
              <Tag>Engine • Sync • Battle Lines</Tag>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Know what time it is in the market.
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
              REZIME is a regime map that helps you align exposure with the ruling Empire
              and stay composed through transitions. No buy/sell prompts. Just context,
              posture, and discipline.
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

              <Link
                href="/allocator"
                className="premium-card relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
              >
                <Sheen className="rounded-full" />
                Allocator Snapshot →
              </Link>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed">
              Built for clarity and survivability. Public overview, operator mechanics, and allocator-grade reporting.
            </p>
          </div>
        </div>
      </Reveal>

      {/* PORTALS */}
      <Reveal delayMs={80} className="mt-2">
        <div className="space-y-4">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                Select portal
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">
                Three portals. One system.
              </h2>
            </div>
            <p className="hidden text-sm text-neutral-400 sm:block">
              Overview → Tools → IR
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <PortalCard
              title="Observer"
              audience="Overview"
              href="/observer"
              desc="A plain-language introduction: what REZIME is, why regime context matters, and how transitions change what’s rational."
            />
            <PortalCard
              title="Operator"
              audience="Tools"
              href="/operator"
              desc="How to interpret Engine / Sync / Battle Lines, plus operating doctrine and case study slots."
            />
            <PortalCard
              title="Allocator"
              audience="IR"
              href="/allocator"
              desc="Allocator-first layout: snapshot, mandate fit, risk controls, governance, reporting cadence, and a proof archive."
            />
          </div>
        </div>
      </Reveal>

      {/* WHAT IT IS */}
      <Reveal delayMs={140} className="mt-2">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoBlock
            title="Not a signal service"
            desc="REZIME reduces decision-noise by clarifying regime and transition risk. Your method decides entries; REZIME governs context."
          />
          <InfoBlock
            title="Defined states"
            desc="Empire (trend control) → Rebellion (early instability) → Uprising (transition) → Revolution (regime reset)."
          />
          <InfoBlock
            title="Risk-first orientation"
            desc="Primary objective: survivability through transitions. Secondary: participate in dominant regimes with patience and discipline."
          />
        </div>
      </Reveal>
    </section>
  );
}
