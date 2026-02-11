// app/contact/page.tsx
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
      className="premium-card is-clickable group relative block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
    >
      <Sheen className="rounded-2xl" />
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          {meta ? (
            <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
              {meta}
            </p>
          ) : null}
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
    <div className="calm-block rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <p className="mt-3 text-sm leading-relaxed text-neutral-300">{desc}</p>
    </div>
  );
}

const MAIL = "hello@rezimeengine.com";

const mailto = (subject: string, body?: string) => {
  const s = encodeURIComponent(subject);
  const b = body ? encodeURIComponent(body) : "";
  return `mailto:${MAIL}?subject=${s}${body ? `&body=${b}` : ""}`;
};

const EARLY_ACCESS_BODY = `Hi REZIME team,

I want early access.

Market: (stocks / crypto / forex / other)
Experience: (beginner / intermediate / advanced)
Primary goal: (avoid blowups / reduce noise / improve discipline / other)

Where I found you:
Link (optional):

Thanks`;

const RESEARCH_BODY = `Hi REZIME team,

I’m reaching out re: REZIME.

Context:
Role / firm (optional):
What you want to evaluate: (framework / Portfolio Lab / indicator access)

Best link to review:
1) Website: https://rezimeengine.com
2) Portfolio Lab: (share the specific week or page)

Questions:
1)
2)

Thanks`;

const COLLAB_BODY = `Hi REZIME team,

I’m interested in collaborating.

Area: (writing / distribution / community / education / other)
What you have in mind:
Timeline:

Thanks`;

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
              <Pill>Map, not signals</Pill>
              <Pill>Regime classification</Pill>
              <Pill>Education</Pill>
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Contact
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
              Email is the fastest way to reach us. Choose an intent below and
              you will get a clean template.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={mailto("Early Access", EARLY_ACCESS_BODY)}
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Request Early Access →
              </a>

              <a
                href={mailto("Research / Evaluation", RESEARCH_BODY)}
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
              >
                <Sheen className="rounded-full" />
                Professional Inquiry →
              </a>

              <Link
                href="/orientation"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
              >
                <Sheen className="rounded-full" />
                New to Markets
              </Link>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed">
              Small team. Replies can be slow during trading sessions.
            </p>
          </div>
        </div>
      </Reveal>

      {/* QUICK INTENTS */}
      <Reveal delayMs={90}>
        <section className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
              Quick links
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
              Pick an intent
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-neutral-300 leading-relaxed">
              This keeps messages structured and easy to answer. If you are a
              professional evaluating the work, use Professional Inquiry.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Card
              meta="Access"
              title="Early Access"
              desc="Request access and onboarding."
              href={mailto("Early Access", EARLY_ACCESS_BODY)}
            />
            <Card
              meta="Professional"
              title="Professional Inquiry"
              desc="Research, evaluation, or recruiting conversations."
              href={mailto("Research / Evaluation", RESEARCH_BODY)}
            />
            <Card
              meta="Collab"
              title="Collaboration"
              desc="Writing, community, distribution."
              href={mailto("Collaboration", COLLAB_BODY)}
            />
          </div>
        </section>
      </Reveal>

      {/* DETAILS */}
      <Reveal delayMs={160}>
        <section className="grid gap-4 sm:grid-cols-3">
          <InfoBlock title="Email" desc={MAIL} />
          <InfoBlock
            title="Include"
            desc="Your market, your level, and what you want to evaluate or improve."
          />
          <InfoBlock
            title="Scope"
            desc="Education only. No advice, no signals, no guarantee language."
          />
        </section>
      </Reveal>

      {/* FOOT CTA */}
      <Reveal delayMs={240}>
        <section className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-white">
                Prefer to review first?
              </div>
              <div className="text-xs text-neutral-400">
                Start with Orientation, then Playbook, then Portfolio Lab.
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                href="/orientation"
                className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
              >
                Orientation
              </Link>

              <Link
                href="/operator"
                className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
              >
                Playbook
              </Link>

              <Link
                href="/allocator"
                className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white transition hover:bg-white/15"
              >
                Portfolio Lab
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
