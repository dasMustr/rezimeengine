import Link from "next/link";
import Reveal from "../components/Reveal";
import Sheen from "../components/Sheen";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
  href,
  meta,
}: {
  title: string;
  desc: string;
  href: string;
  meta?: string;
}) {
  return (
    <a
      href={href}
      className="premium-card group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition"
    >
      <Sheen />
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          {meta && (
            <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
              {meta}
            </p>
          )}
          <h3 className="text-sm font-semibold text-white">{title}</h3>
        </div>
        <span className="mt-1 text-xs text-neutral-400 group-hover:text-neutral-200 transition">
          Open →
        </span>
      </div>
      <p className="mt-3 text-sm text-neutral-300 leading-relaxed">{desc}</p>
    </a>
  );
}

function InfoBlock({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="premium-card relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <Sheen />
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <p className="mt-3 text-sm leading-relaxed text-neutral-300">{desc}</p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <Reveal delayMs={0}>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative space-y-6">
            <div className="flex flex-wrap gap-2">
              <Pill>Research documentation</Pill>
              <Pill>Map, not signals</Pill>
              <Pill>Long-horizon tone</Pill>
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Contact
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
              Reach out for collaboration, tooling discussions, or general notes.
              REZIME is a mapping framework and documentation layer, not a signal service.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/observer"
                className="premium-card relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-neutral-200 hover:bg-white/10 transition"
              >
                <Sheen className="rounded-full" />
                Start with Observer
              </Link>

              <Link
                href="/allocator"
                className="premium-card relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 hover:bg-white/[0.06] transition"
              >
                <Sheen className="rounded-full" />
                Allocator Portal
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      {/* QUICK INTENTS */}
      <Reveal delayMs={90}>
        <section className="space-y-4">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                Select intent
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
                What are you reaching out about?
              </h2>
            </div>
            <p className="hidden text-sm text-neutral-400 sm:block">
              Collaboration → General
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Card
              meta="Collaboration"
              title="Research / Partnerships"
              desc="Aligned long-horizon projects, tooling, education, or institutional-facing work."
              href="mailto:hello@rezimeengine.com?subject=Collaboration%20/%20Partnership%20Inquiry"
            />
            <Card
              meta="Allocator"
              title="Allocator / IR"
              desc="Factsheets, reporting cadence, mandate fit, or diligence-style questions."
              href="mailto:hello@rezimeengine.com?subject=Allocator%20/%20IR%20Inquiry"
            />
            <Card
              meta="General"
              title="Questions / Notes"
              desc="Short messages, feedback, or clarifications about the framework."
              href="mailto:hello@rezimeengine.com?subject=General%20Inquiry"
            />
          </div>
        </section>
      </Reveal>

      {/* DETAILS */}
      <Reveal delayMs={160}>
        <section className="grid gap-4 sm:grid-cols-3">
          <InfoBlock
            title="Primary contact"
            desc="Email: hello@rezimeengine.com (recommended)."
          />
          <InfoBlock
            title="Identity"
            desc="REZIME by paeteon (dasMustr). Links can be added later without turning this page into a linktree."
          />
          <InfoBlock
            title="Response expectations"
            desc="Replies may be slow. This is a solo-operated research + build project."
          />
        </section>
      </Reveal>

      {/* DISCLOSURES */}
      <Reveal delayMs={240}>
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white">Disclosures</h2>
          <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
            REZIME is educational documentation and research tooling. It does not provide
            investment advice. This website is not an offer to sell or a solicitation to
            buy any securities or services.
          </p>
        </section>
      </Reveal>

      {/* FOOT CTA */}
      <Reveal delayMs={320}>
        <section className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-white">
                Want the framing first?
              </div>
              <div className="text-xs text-neutral-400">
                Observer explains the worldview. Operator explains interpretation rules.
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                href="/observer"
                className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white hover:bg-white/15 transition"
              >
                Observer
              </Link>
              <Link
                href="/operator"
                className="inline-flex justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
              >
                Operator
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
