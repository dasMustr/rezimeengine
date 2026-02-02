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
      className="premium-card group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
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

function InfoStrip() {
  return (
    <div className="premium-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <Sheen />
      <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
        What this is
      </p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-300">
        REZIME is a <span className="font-semibold text-white">regime map</span>, not signals.
        It doesn’t tell you buy/sell — it helps you avoid being{" "}
        <span className="font-semibold text-white">right in the wrong environment</span>.
      </p>
    </div>
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
    "premium-card group relative overflow-hidden rounded-2xl border border-white/10 p-6 transition";
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
        <h3 className="text-base font-semibold">{title}</h3>
        <span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition">
          {cta} →
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-300">{desc}</p>
    </Link>
  );
}

function FaqPreviewItem({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-sm font-semibold text-white">{q}</div>
      <div className="mt-2 text-sm leading-relaxed text-neutral-300">{a}</div>
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
              <Tag>Market regimes</Tag>
              <Tag>Transitions</Tag>
              <Tag>Map, not signals</Tag>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              A market regime map — built for survivability.
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
              Compress complexity into clear regimes so you stop guessing,
              reduce phase-mismatch mistakes, and stay alive long enough to build real skill.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/start"
                className="premium-card relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Start (Curious Cat 🐾)
              </Link>

              <Link
                href="/observer"
                className="premium-card relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
              >
                <Sheen className="rounded-full" />
                Learn the map
              </Link>

              <Link
                href="/pricing"
                className="premium-card relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-neutral-200 transition hover:bg-white/10"
              >
                <Sheen className="rounded-full" />
                Pricing
              </Link>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed">
              Survive first → build skill → then care about performance.
            </p>
          </div>
        </div>
      </Reveal>

      {/* PATH SELECTOR */}
      <Reveal delayMs={70}>
        <div className="space-y-4">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                Choose your path
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">
                New to markets — or already participating?
              </h2>
            </div>
            <p className="hidden text-sm text-neutral-400 sm:block">
              Beginner → Basics • Participant → Tools
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <PathCard
              kicker="Beginner"
              title="Curious Cat 🐾"
              href="/start"
              cta="Start here"
              variant="solid"
              desc="What trading is, what charts/indicators are, and why most beginners lose. Plain language. No hype."
            />
            <PathCard
              kicker="Already trading"
              title="Active Participant"
              href="#portals"
              cta="Jump to portals"
              desc="Go straight to the map, the tools, and the proof. Learn → Playbook → Portfolio Lab."
            />
          </div>
        </div>
      </Reveal>

      {/* WHAT THIS IS (short, no heavy cards) */}
      <Reveal delayMs={120}>
        <InfoStrip />
      </Reveal>

      {/* PORTALS (moved lower) */}
      <Reveal delayMs={160}>
        <div id="portals" className="space-y-4 scroll-mt-28">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                Portals
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">
                Three portals. One system.
              </h2>
            </div>
            <p className="hidden text-sm text-neutral-400 sm:block">
              Learn → Playbook → Proof
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <PortalCard
              title="Learn"
              audience="Overview"
              href="/observer"
              desc="Plain-language intro: what the map is, why regimes matter, and how transitions change what’s rational."
            />
            <PortalCard
              title="Playbook"
              audience="Tools"
              href="/operator"
              desc="How to interpret Engine / Sync / Battle Lines, plus operating doctrine and case study slots."
            />
            <PortalCard
              title="Portfolio Lab"
              audience="Proof"
              href="/allocator"
              desc="Proof archive + risk posture + reporting cadence. Built to show survivability across real regimes."
            />
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/operator"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
            >
              View Playbook →
            </Link>
            <Link
              href="/pricing#waitlist"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
            >
              Subscribe (Coming Soon) →
            </Link>
          </div>
        </div>
      </Reveal>

      {/* FAQ PREVIEW */}
      <Reveal delayMs={220} className="mt-2">
        <div className="space-y-4">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                FAQ
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">
                Clear answers. No hype.
              </h2>
            </div>

            <Link
              href="/faq"
              className="hidden sm:inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
            >
              View full FAQ →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FaqPreviewItem
              q="What is REZIME Engine?"
              a={
                <>
                  A <span className="font-semibold text-white">market regime map</span> that classifies the market into
                  clear states so you stop guessing.
                </>
              }
            />
            <FaqPreviewItem
              q="Is it a signal indicator?"
              a={
                <>
                  No. REZIME is <span className="font-semibold text-white">map, not signals</span>. You still make the
                  decisions — it makes the environment easier to read.
                </>
              }
            />
            <FaqPreviewItem
              q="Do you guarantee profits?"
              a={
                <>
                  No. Markets contain randomness. REZIME improves decision quality by reducing confusion and
                  phase-mismatch mistakes.
                </>
              }
            />
            <FaqPreviewItem
              q="Is it the holy grail?"
              a={
                <>
                  No. It’s meant to keep you alive long enough to develop your own edge — and it can supplement almost
                  any approach.
                </>
              }
            />
            <FaqPreviewItem
              q="What timeframe should I use?"
              a={
                <>
                  If you’re new: start higher (cleaner, less noise). Stocks: Daily/Weekly. Crypto/Futures/FX: 4H/Daily.
                </>
              }
            />
            <FaqPreviewItem
              q="Where’s the proof?"
              a={
                <>
                  In the <span className="font-semibold text-white">Portfolio Lab</span> — applied documentation across
                  real markets and real regimes, focused on survivability and drawdown control.
                </>
              }
            />
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/faq"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
            >
              Read the full FAQ →
            </Link>
            <Link
              href="/allocator"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
            >
              Enter Portfolio Lab →
            </Link>
          </div>

          <p className="text-xs text-neutral-500 leading-relaxed">
            New here? Start with Curious Cat 🐾, then go to Learn for the full regime walkthrough.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
