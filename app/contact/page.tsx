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
      className="premium-card is-clickable group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition"
    >
      <Sheen className="rounded-2xl" />
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
    <div className="calm-block relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
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
              <Pill>Survival-first</Pill>
              <Pill>Map, not signals</Pill>
              <Pill>Calm education</Pill>
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Contact & Early Access
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
              If you want early access, collaboration, or just want to ask a question —
              this is the place.
              <br />
              <br />
              REZIME is market survival infrastructure: educational + analytical tools.
              Not financial advice. Not signals.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              {/* Primary CTA */}
              <a
                href="mailto:hello@rezimeengine.com?subject=Early%20Access%20Request&body=Hi%20REZIME%20team%2C%0A%0A1)%20Where%20did%20you%20find%20REZIME%3F%0A2)%20What%20market%20do%20you%20want%20to%20use%20it%20for%20(stocks%2Fcrypto%2Fforex%2Fother)%3F%0A3)%20What%20is%20your%20experience%20level%20(beginner%2Fintermediate%2Fadvanced)%3F%0A%0AThanks!"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Request Early Access →
              </a>

              {/* Secondary */}
              <Link
                href="/orientation"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 hover:bg-white/[0.06] transition"
              >
                <Sheen className="rounded-full" />
                New to Markets → Start Here
              </Link>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed">
              We’ll reply as fast as we can. This is a small team build.
            </p>
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
              Early access → Collaboration → General
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Card
              meta="Access"
              title="Early Access Request"
              desc="If you want to be among the first users. Beginner-friendly onboarding is part of this."
              href="mailto:hello@rezimeengine.com?subject=Early%20Access%20Request"
            />
            <Card
              meta="Collaboration"
              title="Partnership / Writing / Community"
              desc="If you want to collaborate on content, education, community, or distribution."
              href="mailto:hello@rezimeengine.com?subject=Collaboration%20Inquiry"
            />
            <Card
              meta="General"
              title="Questions / Feedback"
              desc="Short notes, questions, or suggestions to improve clarity and safety."
              href="mailto:hello@rezimeengine.com?subject=General%20Question%20/%20Feedback"
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
            title="What to include"
            desc="Experience level + market (stocks/crypto/forex) + what you’re trying to avoid (blowups, confusion, overtrading)."
          />
          <InfoBlock
            title="Response expectations"
            desc="Replies may be slow. This is an early-stage product built with care, not rushed hype."
          />
        </section>
      </Reveal>

      {/* DISCLOSURES */}
      <Reveal delayMs={240}>
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white">Disclosures</h2>
          <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
            REZIME provides educational and analytical tools only. Nothing on this website
            is investment advice, and this website is not an offer to sell or a solicitation
            to buy any securities or services.
          </p>
        </section>
      </Reveal>

      {/* FOOT CTA */}
      <Reveal delayMs={320}>
        <section className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-white">
                Want the framework first?
              </div>
              <div className="text-xs text-neutral-400">
                Orientation is beginner ELI5. Observer explains the regime map.
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                href="/orientation"
                className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white hover:bg-white/15 transition"
              >
                Orientation
              </Link>
              <Link
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
