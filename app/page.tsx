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
        <h3 className="text-base font-semibold">{title}</h3>
        <span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition">
          {cta} →
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-300">{desc}</p>
    </Link>
  );
}

function MiniPortal({
  title,
  sub,
  href,
}: {
  title: string;
  sub: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="premium-card is-clickable group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
    >
      <Sheen />
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="mt-1 text-xs text-neutral-400">{sub}</div>
        </div>
        <div className="text-neutral-400 group-hover:text-neutral-200 transition">
          →
        </div>
      </div>
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
    <section className="space-y-12">
      {/* HERO */}
      <Reveal delayMs={0}>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative space-y-6">
            <div className="flex flex-wrap gap-2">
              <Tag>Survival-first</Tag>
              <Tag>Regime map</Tag>
              <Tag>Map, not signals</Tag>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              I’m not teaching you how to win.
              <br className="hidden sm:block" /> I’m teaching you how to not die.
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
              REZIME is a market regime map. It doesn’t replace your strategy —
              it protects you while you build one.
              <br />
              When the environment changes, your behavior must change too.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/observer"
                className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Start with the map →
              </Link>

              <Link
                href="#path"
                className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
              >
                <Sheen className="rounded-full" />
                Choose a path
              </Link>

              <Link
                href="/allocator"
                className="ml-1 inline-flex items-center text-sm text-neutral-400 hover:text-white transition"
              >
                See the proof →
              </Link>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed">
              Survive first → build skill → performance becomes a byproduct.
            </p>
          </div>
        </div>
      </Reveal>

      {/* PATH SELECTOR */}
      <Reveal delayMs={70}>
        <div id="path" className="space-y-4 scroll-mt-28">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
                Start point
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">
                Where should we start?
              </h2>
            </div>
            <p className="hidden text-sm text-neutral-400 sm:block">
              Basics • Map • Proof
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <PathCard
              kicker="Beginner"
              title="Curious Cat 🐾"
              href="/start"
              cta="Start here"
              variant="solid"
              desc="Plain-language basics: what markets are, why most beginners lose, and how to avoid blowing up early."
            />
            <PathCard
              kicker="Already trading"
              title="Active Participant"
              href="/observer"
              cta="Go to Learn"
              desc="Start with the regime map (Empire / Siege / Revolution), then move to Playbook when ready."
            />
          </div>

          {/* single line clarity under the cards */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-neutral-300 leading-relaxed">
            <span className="font-semibold text-white">Rule of thumb:</span>{" "}
            if you feel confused, you’re probably in{" "}
            <span className="font-semibold text-white">Siege</span>. Confusion is
            a signal to reduce activity — not try harder.
          </div>
        </div>
      </Reveal>

      {/* PORTALS */}
      <Reveal delayMs={130}>
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-6">
            <div className="text-sm font-semibold text-white">Browse sections</div>
            <div className="text-xs text-neutral-500">Learn → Playbook → Proof</div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <MiniPortal title="Learn" sub="Regime map overview" href="/observer" />
            <MiniPortal title="Playbook" sub="How to interpret tools" href="/operator" />
            <MiniPortal title="Portfolio Lab" sub="Proof that survival works" href="/allocator" />
          </div>
        </div>
      </Reveal>

      {/* FAQ PREVIEW */}
      <Reveal delayMs={180}>
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
              q="What is REZIME?"
              a={
                <>
                  A <span className="font-semibold text-white">market regime map</span>{" "}
                  that helps you stop fighting the wrong environment.
                </>
              }
            />
            <FaqPreviewItem
              q="Is it a strategy?"
              a={
                <>
                  No. REZIME is <span className="font-semibold text-white">not your strategy</span>.{" "}
                  It protects you while you build one.
                </>
              }
            />
            <FaqPreviewItem
              q="Do you guarantee profits?"
              a={
                <>
                  No. The goal is survivability and clarity —{" "}
                  <span className="font-semibold text-white">profit is a byproduct</span>{" "}
                  of staying alive long enough to develop edge.
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
              href="/pricing#waitlist"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
            >
              Subscribe (Coming Soon) →
            </Link>
          </div>

          <p className="text-xs text-neutral-500 leading-relaxed">
            New? Start with Curious Cat 🐾. Already trading? Start with the map.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
