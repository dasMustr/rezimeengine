import Link from "next/link";
import Reveal from "../components/Reveal";
import Sheen from "../components/Sheen";

function FaqItem({
  n,
  q,
  children,
}: {
  n: string;
  q: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-white/[0.03] open:bg-white/5 transition">
      <summary className="cursor-pointer list-none px-5 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              FAQ {n}
            </div>
            <div className="mt-1 text-sm font-semibold text-white">{q}</div>
          </div>

          <div className="mt-1 shrink-0 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-neutral-300 transition group-open:bg-white/10">
            <span className="group-open:hidden">Open</span>
            <span className="hidden group-open:inline">Close</span>
          </div>
        </div>
      </summary>

      <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-neutral-300 space-y-3">
        {children}
      </div>
    </details>
  );
}

function MiniCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="premium-card group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/5"
    >
      <Sheen />
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="mt-2 text-xs leading-relaxed text-neutral-400">
            {desc}
          </div>
        </div>
        <span className="mt-1 text-xs text-neutral-400 group-hover:text-neutral-200 transition">
          Enter →
        </span>
      </div>
    </Link>
  );
}

export default function FaqPage() {
  return (
    <section className="space-y-14">
      {/* HERO */}
      <Reveal delayMs={0}>
        <div className="premium-card relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
          <Sheen />

          <div className="relative space-y-6">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
              REZIME Engine FAQ
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Clear answers. No hype.
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
              REZIME Engine is a market regime map built for survivability.
              It helps you stop being right in the wrong regime.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/"
                className="premium-card relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-neutral-200 transition hover:bg-white/10"
              >
                <Sheen className="rounded-full" />
                Back to Home
              </Link>

              <Link
                href="/observer"
                className="premium-card relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
              >
                <Sheen className="rounded-full" />
                Start with Learn →
              </Link>

              <Link
                href="/allocator"
                className="premium-card relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                View Proof (Portfolio Lab) →
              </Link>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed">
              New here? Read this FAQ → then go to Learn → then check Portfolio Lab proof.
            </p>
          </div>
        </div>
      </Reveal>

      {/* FAQ CARD */}
      <Reveal delayMs={90}>
        <div className="premium-card relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <Sheen />

          <div className="space-y-6">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                  FAQ
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight">
                  REZIME Engine FAQ
                </h2>
              </div>

              <div className="flex gap-2">
                <Link
                  href="/observer"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
                >
                  Learn →
                </Link>
                <Link
                  href="/operator"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
                >
                  Playbook →
                </Link>
              </div>
            </div>

            {/* your existing 10 items unchanged */}
            <div className="space-y-3">
              {/* ... keep your 1–10 exactly as-is ... */}
            </div>
          </div>
        </div>
      </Reveal>

      {/* NEXT STEPS */}
      <Reveal delayMs={160}>
        <div className="grid gap-4 sm:grid-cols-3">
          <MiniCard
            title="Learn"
            desc="Start with the map: regimes, transitions, and survival-first thinking."
            href="/observer"
          />
          <MiniCard
            title="Playbook"
            desc="Interpretation rules for Engine / Sync / Battle Lines."
            href="/operator"
          />
          <MiniCard
            title="Portfolio Lab"
            desc="Proof archive: applied documentation across real regimes."
            href="/allocator"
          />
        </div>
      </Reveal>
    </section>
  );
}
