import Link from "next/link";
import Reveal from "../components/Reveal";
import ProofCard from "../components/ProofCard";

const PORTFOLIO_LAB_URL =
  "https://www.notion.so/END-Weekly-Global-Portfolio-22126a6e989c803896a4d732246aea06?source=copy_link";

// You’ll fill links as you post each week.
// Keep them empty now; the UI still looks intentional.
const PROOFS = [
  {
    week: 1,
    date: "Wk 1",
    title: "Global Portfolio Lab — Week 1",
    summary:
      "Kickoff snapshot: holdings established, baseline regime map, and exposure posture recorded.",
    tags: ["Time-stamped", "Factsheet", "Baseline"],
    links: {
      // youtube: "https://youtube.com/...",
      // x: "https://x.com/...",
      // instagram: "https://instagram.com/...",
      // tradingview: "https://www.tradingview.com/...",
      notion: PORTFOLIO_LAB_URL,
      // pdf: "https://...",
    },
  },
  {
    week: 2,
    date: "Wk 2",
    title: "Week 2",
    summary:
      "First delta week: changes vs baseline, regime stability notes, and risk posture adjustments.",
    tags: ["Weekly delta", "Regime notes"],
    links: {
      notion: PORTFOLIO_LAB_URL,
    },
  },
  {
    week: 3,
    date: "Wk 3",
    title: "Week 3",
    summary:
      "Consistency check: beta-hugging behavior vs major indices and country baskets. No hype.",
    tags: ["Consistency", "Low-noise"],
    links: {
      notion: PORTFOLIO_LAB_URL,
    },
  },
  {
    week: 4,
    date: "Wk 4",
    title: "Week 4",
    summary:
      "Momentum confirmation window: this is where public-facing rollout becomes viable if behavior holds.",
    tags: ["Launch gate", "Proof-first"],
    links: {
      notion: PORTFOLIO_LAB_URL,
    },
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
      {children}
    </span>
  );
}

function Section({
  id,
  eyebrow,
  title,
  desc,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  desc?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-5">
      <div className="space-y-2">
        {eyebrow && (
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        {desc && (
          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            {desc}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

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
  title,
  desc,
  rows,
}: {
  title: string;
  desc: string;
  rows: { k: string; v: string }[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="text-sm text-neutral-300 leading-relaxed">{desc}</p>
      </div>

      <div className="mt-4 space-y-2">
        {rows.map((r) => (
          <div
            key={r.k}
            className="flex items-start justify-between gap-6 border-t border-white/10 pt-3"
          >
            <div className="text-xs text-neutral-400">{r.k}</div>
            <div className="text-sm text-neutral-200 text-right">{r.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Badge({
  tone = "soft",
  children,
}: {
  tone?: "soft" | "hard";
  children: React.ReactNode;
}) {
  return (
    <span
      className={
        tone === "hard"
          ? "inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white"
          : "inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-neutral-300"
      }
    >
      {children}
    </span>
  );
}

export default function AllocatorPage() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Allocator Portal
          </p>

          <div className="flex flex-wrap gap-2">
            <Pill>Institutional framing</Pill>
            <Pill>Risk-first doctrine</Pill>
            <Pill>Proof-first reporting</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            REZIME as an allocatable operating system.
          </h1>

          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            This portal is written in an investor-relations tone. It focuses on
            mandate, governance, risk controls, and reporting cadence — not
            tactics. REZIME is a map that disciplines exposure through market
            regimes.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/operator"
              className="premium-card relative rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
            >
              ← Operator
            </Link>
            <Link
              href="/contact"
              className="premium-card relative rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-300 hover:bg-white/5 transition"
            >
              Contact →
            </Link>
          </div>
        </section>
      </Reveal>

      {/* TOC + CONTENT */}
      <Reveal delayMs={90}>
        <section className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* TOC */}
          <aside className="space-y-3 lg:sticky lg:top-24 lg:h-fit">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Contents
            </p>
            <div className="grid gap-2">
              <TocLink href="#proof" label="Proof Archive" />
              <TocLink href="#mandate" label="Mandate" />
              <TocLink href="#governance" label="Governance" />
              <TocLink href="#risk" label="Risk Doctrine" />
              <TocLink href="#reporting" label="Reporting" />
              <TocLink href="#portfolio" label="Portfolio Lab" />
              <TocLink href="#status" label="Current Status" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-neutral-400 leading-relaxed">
              This is long-horizon framing. Intentionally conservative.
            </div>
          </aside>

          {/* CONTENT */}
          <div className="space-y-12">
            {/* PROOF ARCHIVE (Allocator-only) */}
            <Reveal delayMs={120}>
              <section id="proof" className="scroll-mt-24 space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-400">
                      Proof Archive
                    </p>
                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
                      Time-stamped public journal (platform-agnostic)
                    </h2>
                    <p className="mt-2 max-w-3xl text-sm text-neutral-300 leading-relaxed">
                      Weekly updates are recorded publicly and indexed here. No embeds,
                      no scripts — just a clean archive that works everywhere.
                    </p>
                  </div>

                  <div className="text-xs text-neutral-500">
                    Updated weekly • low-noise • context-first
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  {PROOFS.map((p, i) => (
                    <Reveal key={p.week} delayMs={160 + i * 70}>
                      <ProofCard
                        week={p.week}
                        date={p.date}
                        title={p.title}
                        summary={p.summary}
                        tags={p.tags}
                        links={p.links}
                      />
                    </Reveal>
                  ))}
                </div>

                <div className="premium-card relative rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Portfolio Lab (deep detail)
                      </p>
                      <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                        Factsheet-style archive: holdings, regime context, exposure posture,
                        and week-by-week deltas. Hosted externally to keep the site clean.
                      </p>
                    </div>

                    <Link
                      href={PORTFOLIO_LAB_URL}
                      target="_blank"
                      className="premium-card relative inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white hover:bg-white/15 transition"
                    >
                      Open Portfolio Lab →
                    </Link>
                  </div>

                  <p className="mt-4 text-[11px] text-neutral-500">
                    Not financial advice. Public documentation for transparency and process.
                  </p>
                </div>
              </section>
            </Reveal>

            {/* rest of your sections stay the same */}
            <Reveal delayMs={150}>
              <Section
                id="mandate"
                eyebrow="Strategy"
                title="Mandate"
                desc="A regime-mapped approach designed to hold through cycles with controlled drawdown behavior."
              >
                <div className="grid gap-4 lg:grid-cols-3">
                  <Card
                    title="Objective"
                    desc="Prioritize survivability through transitions, then capture time-in-market."
                    rows={[
                      { k: "Primary", v: "Avoid catastrophic drawdowns" },
                      { k: "Secondary", v: "Participate in dominant regimes" },
                      { k: "Not optimized for", v: "Top/bottom precision" },
                    ]}
                  />
                  <Card
                    title="Approach"
                    desc="Context-first. Exposure scales with regime clarity, not excitement."
                    rows={[
                      { k: "Core", v: "Empire recognition + transition discipline" },
                      { k: "Method", v: "Map → Align → Hold" },
                      { k: "Mechanism", v: "REZIME Engine / Sync / Battle Lines" },
                    ]}
                  />
                  <Card
                    title="Universe"
                    desc="Multi-asset compatible; selected for liquidity and clarity."
                    rows={[
                      { k: "Typical", v: "Indices • FX • Metals • Crypto" },
                      { k: "Preference", v: "Higher TFs (less noise)" },
                      { k: "Constraint", v: "No signal-selling behavior" },
                    ]}
                  />
                </div>
              </Section>
            </Reveal>

            {/* Governance / Risk / Reporting / Portfolio / Status / CTA… keep your existing code */}
            {/* (No other changes required) */}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
