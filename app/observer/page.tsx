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
            Learn is a plain-language introduction to REZIME Engine. It teaches a
            simple regime vocabulary so you can name what you’re seeing, reduce
            confusion, and make calmer decisions in markets.
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
              <TocLink href="#siege" label="Inside Siege (phases)" />
              <TocLink href="#how-to-read" label="How to use it (public)" />
              <TocLink href="#next" label="Where to go next" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-neutral-400 leading-relaxed">
              This portal is for people with zero market context. It explains
              the map — not execution rules.
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
                    title="Inside Siege (phases)"
                    desc="Siege isn’t one thing — it escalates and de-escalates."
                    href="#siege"
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
                    People don’t blow up because they “entered wrong.” They blow
                    up because they{" "}
                    <span className="font-semibold text-white">
                      stayed active in the wrong regime
                    </span>
                    .
                  </p>
                  <p>
                    REZIME Engine doesn’t replace your method. It{" "}
                    <span className="font-semibold text-white">supplements</span>{" "}
                    it by adding context: is the environment stable, conflicted,
                    or resetting?
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
                      Stress comes from not understanding the environment. If
                      you can name the regime, decisions become calmer, more
                      structured, and less reactive.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                    <p className="text-sm font-semibold text-white">
                      The core benefit
                    </p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      REZIME Engine helps you avoid phase-mismatch mistakes:
                      being “right” while the environment is wrong for your
                      behavior.
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
                        stable continuation. Holding and patience are rewarded.
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <p className="text-sm">
                        <span className="font-semibold text-white">Siege:</span>{" "}
                        conflict and uncertainty. Chop increases. Participation
                        should become selective and smaller.
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <p className="text-sm">
                        <span className="font-semibold text-white">
                          Revolution:
                        </span>{" "}
                        reset / regime change. Old assumptions break. The map
                        re-anchors.
                      </p>
                    </div>
                  </div>

                  <p className="pt-2 text-xs text-neutral-500 leading-relaxed">
                    This is the public vocabulary. The tool mechanics and
                    interpretation rules live in Playbook.
                  </p>
                </div>
              </Section>
            </Reveal>

            {/* SIEGE PHASES */}
            <Reveal delayMs={280}>
              <Section
                id="siege"
                eyebrow="Inside the difficult part"
                title="Inside Siege (phases)"
                subtitle="Siege isn’t one thing. It escalates, stalls, and resolves — and your behavior should adapt."
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-sm text-neutral-300 leading-relaxed">
                    Markets don’t flip in one candle. Most damage happens in the{" "}
                    <span className="font-semibold text-white">middle</span> —
                    when people keep acting like it’s still Empire.
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      [
                        "Cracks",
                        "Early instability appears. The move still continues, but the ride gets bumpier.",
                      ],
                      [
                        "Counterpush",
                        "The other side starts winning pockets of territory. Confidence fades.",
                      ],
                      [
                        "Chop / Deadlock",
                        "Both sides trade control. Fakeouts increase. Overtrading becomes expensive.",
                      ],
                      [
                        "Pressure",
                        "The dominant structure is challenged. Old “safe areas” stop being safe.",
                      ],
                      [
                        "Break",
                        "A decisive failure occurs. Continuation logic weakens.",
                      ],
                      [
                        "Reset",
                        "Revolution completes. A new regime begins forming (new Empire).",
                      ],
                    ].map(([name, desc]) => (
                      <div
                        key={name}
                        className="rounded-xl border border-white/10 bg-black/30 p-4"
                      >
                        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white">
                          {name}
                        </span>
                        <div className="mt-3 text-sm text-neutral-300 leading-relaxed">
                          {desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-xs text-neutral-500 leading-relaxed">
                    You don’t need perfect prediction. You need{" "}
                    <span className="text-white">regime awareness</span> so you
                    stop making confident decisions in an unstable environment.
                  </div>
                </div>
              </Section>
            </Reveal>

            {/* HOW TO READ */}
            <Reveal delayMs={320}>
              <Section
                id="how-to-read"
                eyebrow="Practical use"
                title="How to use REZIME Engine (public version)"
                subtitle="A simple flow: identify regime → match participation → avoid phase-mismatch behavior."
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
                        Name the regime:{" "}
                        <span className="text-white">Empire</span>,{" "}
                        <span className="text-white">Siege</span>,{" "}
                        <span className="text-white">Revolution</span>.
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs uppercase tracking-widest text-neutral-400">
                        Step 2
                      </div>
                      <div className="mt-1">
                        Match behavior: hold in Empire, reduce activity in Siege,
                        re-anchor after Revolution.
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs uppercase tracking-widest text-neutral-400">
                        Step 3
                      </div>
                      <div className="mt-1">
                        Avoid “being right” in the wrong environment. Let the
                        map decide the tempo.
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
            <Reveal delayMs={360}>
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
            <Reveal delayMs={400}>
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
