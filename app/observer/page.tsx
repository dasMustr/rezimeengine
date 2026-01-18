import Link from "next/link";
import Section from "../components/Section";
import Reveal from "../components/Reveal";

function TocLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="block rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-300 hover:bg-white/10 hover:text-white transition"
    >
      {label}
    </a>
  );
}

function Card({
  n,
  title,
  desc,
  href,
}: {
  n: string;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
    >
      <div className="flex items-center justify-between">
        <div className="text-xs text-neutral-400">{n}</div>
        <div className="text-xs text-neutral-400 transition group-hover:text-neutral-200">
          Read →
        </div>
      </div>
      <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-300">{desc}</p>
    </a>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
      {children}
    </span>
  );
}

function MiniBlock({
  title,
  desc,
  tone = "soft",
}: {
  title: string;
  desc: string;
  tone?: "soft" | "hard";
}) {
  return (
    <div
      className={
        tone === "hard"
          ? "rounded-2xl border border-white/15 bg-white/10 p-6"
          : "rounded-2xl border border-white/10 bg-black/30 p-6"
      }
    >
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{desc}</p>
    </div>
  );
}

function PlaceholderShot({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            {desc}
          </p>
        </div>
        <span className="text-xs text-neutral-500">Placeholder</span>
      </div>

      <div className="mt-4 rounded-xl border border-dashed border-white/15 bg-black/30 p-6">
        <p className="text-xs uppercase tracking-widest text-neutral-400">
          Screenshot slot
        </p>
        <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
          Later: add a single chart image + 1–2 sentences explaining the regime and
          the correct behavior (no internal formulas).
        </p>
      </div>
    </div>
  );
}

export default function ObserverPage() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Learn Portal
          </p>

          <div className="flex flex-wrap gap-2">
            <Pill>Map, not signals</Pill>
            <Pill>Survival-first</Pill>
            <Pill>Time-in-market</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Learn the regime. Stop fighting the wrong environment.
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
            Learn is a plain-language introduction to REZIME Engine.
            It teaches a simple regime vocabulary so you can name what you’re seeing,
            reduce confusion, and make calmer decisions in markets.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
            >
              Back to Home
            </Link>

            <Link
              href="/operator"
              className="rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-300 transition hover:bg-white/5"
            >
              Jump to Playbook →
            </Link>

            <Link
              href="/faq"
              className="rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-300 transition hover:bg-white/5"
            >
              Read FAQ →
            </Link>
          </div>
        </section>
      </Reveal>

      {/* TOC + CONTENT */}
      <Reveal delayMs={80}>
        <section className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* TOC */}
          <aside className="space-y-3 lg:sticky lg:top-24 lg:h-fit">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Contents
            </p>
            <div className="grid gap-2">
              <TocLink href="#what" label="What is REZIME Engine?" />
              <TocLink href="#why" label="Why regimes matter" />
              <TocLink href="#states" label="The 3 regimes" />
              <TocLink href="#behavior" label="How to behave (public)" />
              <TocLink href="#examples" label="Examples (placeholders)" />
              <TocLink href="#how-to-read" label="How to use it (public)" />
              <TocLink href="#next" label="Where to go next" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-neutral-400 leading-relaxed">
              This portal is for people with zero market context. It explains the map — not execution rules.
            </div>
          </aside>

          {/* CONTENT */}
          <div className="space-y-12">
            {/* QUICK CHAPTERS */}
            <Reveal delayMs={120}>
              <Section
                eyebrow="Start here"
                title="Four chapters. One map."
                subtitle="High-level first. Tool mechanics live in Playbook."
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card
                    n="1)"
                    title="What is REZIME Engine?"
                    desc="A survival-first regime map for time-in-market."
                    href="#what"
                  />
                  <Card
                    n="2)"
                    title="Why regimes matter"
                    desc="Most losses come from regime mismatch, not bad entries."
                    href="#why"
                  />
                  <Card
                    n="3)"
                    title="The 3 regimes"
                    desc="Empire → Siege → Revolution."
                    href="#states"
                  />
                  <Card
                    n="4)"
                    title="How to behave (public)"
                    desc="A beginner-safe rule: match your activity to the regime."
                    href="#behavior"
                  />
                </div>
              </Section>
            </Reveal>

            {/* WHAT */}
            <Reveal delayMs={160}>
              <Section
                id="what"
                eyebrow="Definition"
                title="What is REZIME Engine?"
                subtitle="REZIME Engine is a market regime map. It classifies the environment so you stop guessing."
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 text-sm leading-relaxed text-neutral-300">
                  <p>
                    People don’t blow up because they “entered wrong.” They blow up because they{" "}
                    <span className="font-semibold text-white">stayed active in the wrong regime</span>.
                  </p>
                  <p>
                    REZIME Engine doesn’t replace your method. It{" "}
                    <span className="font-semibold text-white">supplements</span>{" "}
                    it by adding context: is the environment stable, conflicted, or resetting?
                  </p>
                </div>
              </Section>
            </Reveal>

            {/* WHY */}
            <Reveal delayMs={200}>
              <Section
                id="why"
                eyebrow="Why this exists"
                title="Why regimes matter"
                subtitle="If you don’t know the regime, three bad outcomes become likely: you fight the move, you force action in chop, or you hold through a reset."
              >
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm font-semibold text-white">
                      The core problem
                    </p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      Stress comes from not understanding the environment.
                      If you can name the regime, decisions become calmer, more structured, and less reactive.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                    <p className="text-sm font-semibold text-white">
                      The core benefit
                    </p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      REZIME Engine helps you avoid phase-mismatch mistakes:
                      being “right” while the environment is wrong for your behavior.
                    </p>
                  </div>
                </div>
              </Section>
            </Reveal>

            {/* STATES */}
            <Reveal delayMs={240}>
              <Section
                id="states"
                eyebrow="The map"
                title="The 3 regimes"
                subtitle="If you can name the regime, you stop arguing with reality."
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 text-sm text-neutral-300">
                  <div className="flex flex-col gap-3">
                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <p className="text-sm">
                        <span className="font-semibold text-white">Empire:</span>{" "}
                        stable continuation. Patience and holding are rewarded.
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <p className="text-sm">
                        <span className="font-semibold text-white">Siege:</span>{" "}
                        conflict and uncertainty. Chop increases. Participation should become selective and smaller.
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <p className="text-sm">
                        <span className="font-semibold text-white">Revolution:</span>{" "}
                        reset / regime change. Old assumptions break. The map re-anchors.
                      </p>
                    </div>
                  </div>

                  <p className="pt-2 text-xs text-neutral-500 leading-relaxed">
                    This is the public vocabulary. Tool mechanics and advanced interpretation live in Playbook.
                  </p>
                </div>
              </Section>
            </Reveal>

            {/* BEHAVIOR */}
            <Reveal delayMs={280}>
              <Section
                id="behavior"
                eyebrow="Beginner-safe behavior"
                title="How to behave in each regime (public version)"
                subtitle="The goal is not to predict. The goal is to match your activity level to the environment."
              >
                <div className="grid gap-4 lg:grid-cols-3">
                  <MiniBlock
                    tone="hard"
                    title="Empire behavior"
                    desc="Do less. Hold more. Avoid micro-managing. Your edge is patience and not interrupting the trend."
                  />
                  <MiniBlock
                    title="Siege behavior"
                    desc="Do less, not more. Reduce exposure and reduce frequency. Siege is where overtrading and impulsive confidence get punished."
                  />
                  <MiniBlock
                    tone="hard"
                    title="Revolution behavior"
                    desc="Treat it as a reset. Stop assuming the old logic still applies. Re-anchor your plan after the environment changes."
                  />
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold text-white">The simplest rule</p>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    If you are confused, you are probably in <span className="text-white font-semibold">Siege</span>.
                    Confusion is a signal to reduce activity — not a reason to “try harder.”
                  </p>
                  <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
                    Playbook adds the detailed interpretation rules and the indicator behavior.
                    Learn stays intentionally simple.
                  </p>
                </div>
              </Section>
            </Reveal>

            {/* EXAMPLES */}
            <Reveal delayMs={320}>
              <Section
                id="examples"
                eyebrow="Visual learning"
                title="Examples (placeholders)"
                subtitle="Later, we’ll add screenshots showing the same regime concept across different markets."
              >
                <div className="grid gap-4 lg:grid-cols-2">
                  <PlaceholderShot
                    title="Example A: Clean Empire"
                    desc="A stable trend regime where holding beats overtrading. Add a chart screenshot + 1–2 line caption later."
                  />
                  <PlaceholderShot
                    title="Example B: Siege / Chop"
                    desc="A conflict regime where fakeouts spike. The correct move is reduced exposure and fewer decisions."
                  />
                  <PlaceholderShot
                    title="Example C: Revolution / Reset"
                    desc="A regime change where the old assumptions break. Show how re-anchoring avoids stubborn losses."
                  />
                  <PlaceholderShot
                    title="Example D: Same map, different market"
                    desc="Show the exact same regime vocabulary on a different asset class (stocks vs crypto vs FX)."
                  />
                </div>

                <p className="text-xs text-neutral-500 leading-relaxed">
                  Rule for Learn examples: show behavior + regime labels, not internal construction.
                </p>
              </Section>
            </Reveal>

            {/* HOW TO READ */}
            <Reveal delayMs={360}>
              <Section
                id="how-to-read"
                eyebrow="Practical use"
                title="How to use REZIME Engine (public version)"
                subtitle="A simple flow: identify regime → match participation → respect resets."
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  {/* Flow chips */}
                  <div className="flex flex-wrap gap-2 text-[11px]">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-neutral-300">
                      Identify regime
                    </span>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-neutral-300">
                      Match participation
                    </span>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-neutral-300">
                      Respect resets
                    </span>
                  </div>

                  {/* Steps */}
                  <div className="mt-5 space-y-3 text-sm text-neutral-300 leading-relaxed">
                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs uppercase tracking-widest text-neutral-400">
                        Step 1
                      </div>
                      <div className="mt-1">
                        Name the regime: <span className="text-white">Empire</span>,{" "}
                        <span className="text-white">Siege</span>,{" "}
                        <span className="text-white">Revolution</span>.
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs uppercase tracking-widest text-neutral-400">
                        Step 2
                      </div>
                      <div className="mt-1">
                        Match behavior: hold in Empire, reduce activity in Siege, re-anchor after Revolution.
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs uppercase tracking-widest text-neutral-400">
                        Step 3
                      </div>
                      <div className="mt-1">
                        Avoid “being right” in the wrong environment. Let the map decide the tempo.
                      </div>
                    </div>

                    <p className="pt-1 text-xs text-neutral-500">
                      Your style decides entries. REZIME decides context.
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/faq"
                      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
                    >
                      Read the FAQ →
                    </Link>
                    <Link
                      href="/operator"
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
                    >
                      Enter Playbook →
                    </Link>
                  </div>
                </div>
              </Section>
            </Reveal>

            {/* NEXT */}
            <Reveal delayMs={400}>
              <Section
                id="next"
                eyebrow="Navigation"
                title="Where to go next"
                subtitle="Learn explains the map. Playbook explains the tools. Portfolio Lab is for proof and reporting."
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/operator"
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                  >
                    <div className="text-xs uppercase tracking-widest text-neutral-400">
                      Playbook
                    </div>
                    <div className="mt-2 text-base font-semibold text-white">
                      Interpretation rules + indicator behavior
                    </div>
                    <div className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      Engine / Sync / Battle Lines: what they show and how to use them.
                    </div>
                  </Link>

                  <Link
                    href="/allocator"
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                  >
                    <div className="text-xs uppercase tracking-widest text-neutral-400">
                      Portfolio Lab
                    </div>
                    <div className="mt-2 text-base font-semibold text-white">
                      Proof + risk posture + reporting cadence
                    </div>
                    <div className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      Time-stamped documentation across real regimes. Survivability first.
                    </div>
                  </Link>
                </div>
              </Section>
            </Reveal>

            {/* BOTTOM CTA */}
            <Reveal delayMs={440}>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Want the tools and mechanics?
                    </div>
                    <div className="text-xs text-neutral-400">
                      Playbook = interpretation rules + Engine / Sync / Battle Lines behavior.
                    </div>
                  </div>

                  <Link
                    href="/operator"
                    className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
                  >
                    Enter Playbook →
                  </Link>
                </div>
              </section>
            </Reveal>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
