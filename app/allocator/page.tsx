import Link from "next/link";
import Reveal from "../components/Reveal";
import ProofCard from "../components/ProofCard";

const PORTFOLIO_LAB_URL =
  "https://www.notion.so/END-Weekly-Global-Portfolio-22126a6e989c803896a4d732246aea06?source=copy_link";

const PROOFS = [
  {
    week: 1,
    date: "Wk 1",
    title: "Global Portfolio Lab — Week 1",
    summary:
      "Kickoff snapshot: holdings established, baseline regime map, and exposure posture recorded.",
    tags: ["Time-stamped", "Factsheet", "Baseline"],
    links: { notion: PORTFOLIO_LAB_URL },
  },
  {
    week: 2,
    date: "Wk 2",
    title: "Week 2",
    summary:
      "First delta week: changes vs baseline, regime stability notes, and risk posture adjustments.",
    tags: ["Weekly delta", "Regime notes"],
    links: { notion: PORTFOLIO_LAB_URL },
  },
  {
    week: 3,
    date: "Wk 3",
    title: "Week 3",
    summary:
      "Consistency check: beta-hugging behavior vs major indices and country baskets. No hype.",
    tags: ["Consistency", "Low-noise"],
    links: { notion: PORTFOLIO_LAB_URL },
  },
  {
    week: 4,
    date: "Wk 4",
    title: "Week 4",
    summary:
      "Momentum confirmation window: this is where public-facing rollout becomes viable if behavior holds.",
    tags: ["Launch gate", "Proof-first"],
    links: { notion: PORTFOLIO_LAB_URL },
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
            <Pill>Risk-first posture</Pill>
            <Pill>Proof-first reporting</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            REZIME as an allocatable operating system.
          </h1>

          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            This portal is written in an investor-relations tone. It focuses on mandate fit,
            risk controls, governance, and reporting. Tactics live in Operator.
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

      {/* LAYOUT: TOC + CONTENT */}
      <Reveal delayMs={80}>
        <section className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* TOC */}
          <aside className="space-y-3 lg:sticky lg:top-24 lg:h-fit">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Contents
            </p>

            <div className="grid gap-2">
              <TocLink href="#snapshot" label="Allocator Snapshot" />
              <TocLink href="#mandate" label="Mandate Fit" />
              <TocLink href="#risk" label="Risk Controls" />
              <TocLink href="#governance" label="Governance" />
              <TocLink href="#reporting" label="Reporting & Evidence" />
              <TocLink href="#proof" label="Proof Archive" />
              <TocLink href="#portfolio" label="Portfolio Lab" />
              <TocLink href="#status" label="Current Status" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-neutral-400 leading-relaxed">
              Built for allocator scanning. Clear sections, minimal story. Observer has the public framing.
            </div>

            <Link
              href="/observer"
              className="block rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-300 hover:bg-white/10 hover:text-white transition"
            >
              Read REZIME overview in Observer →
            </Link>
          </aside>

          {/* CONTENT */}
          <div className="space-y-12">
            {/* SNAPSHOT */}
            <Reveal delayMs={110}>
              <Section
                id="snapshot"
                eyebrow="One-screen summary"
                title="Allocator Snapshot"
                desc="A compact view of mandate, edge definition, constraints, and reporting cadence."
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge tone="hard">Map, not signals</Badge>
                    <Badge tone="hard">Risk-first</Badge>
                    <Badge>Time-in-market posture</Badge>
                    <Badge>Regime-aware exposure</Badge>
                    <Badge>Weekly factsheet cadence</Badge>
                  </div>

                  <div className="mt-5 grid gap-4 lg:grid-cols-3">
                    <Card
                      title="Mandate fit"
                      desc="Designed to participate in dominant regimes while controlling behavior during transitions."
                      rows={[
                        { k: "Primary objective", v: "Survivability through regime change" },
                        { k: "Secondary", v: "Participation in dominant trend regimes" },
                        { k: "Not optimized for", v: "Top/bottom precision" },
                      ]}
                    />
                    <Card
                      title="Edge definition"
                      desc="The edge is behavioral: reducing phase-mismatched decisions that create avoidable drawdowns."
                      rows={[
                        { k: "Core", v: "Regime recognition + transition discipline" },
                        { k: "Mechanism", v: "Engine / Sync / Battle Lines" },
                        { k: "Output", v: "Exposure posture, not entries" },
                      ]}
                    />
                    <Card
                      title="Reporting"
                      desc="Evidence is published in a consistent format with time-stamps and deltas."
                      rows={[
                        { k: "Cadence", v: "Weekly updates" },
                        { k: "Artifacts", v: "Factsheet + posture notes" },
                        { k: "Archive", v: "Proof cards + Portfolio Lab" },
                      ]}
                    />
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="text-xs uppercase tracking-widest text-neutral-400">
                      What allocators should expect
                    </p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      This is not a promise of prediction. It is a governance layer that improves decision quality
                      across instruments by clarifying regime and transition risk.
                    </p>
                  </div>
                </div>
              </Section>
            </Reveal>

            {/* MANDATE */}
            <Reveal delayMs={150}>
              <Section
                id="mandate"
                eyebrow="Strategy"
                title="Mandate Fit"
                desc="REZIME is compatible with institutional process because it expresses posture, constraints, and auditability."
              >
                <div className="grid gap-4 lg:grid-cols-3">
                  <Card
                    title="Objective"
                    desc="Participation with controlled downside behavior."
                    rows={[
                      { k: "Primary", v: "Avoid catastrophic drawdowns" },
                      { k: "Secondary", v: "Participate in dominant regimes" },
                      { k: "Constraint", v: "No signal-selling behavior" },
                    ]}
                  />
                  <Card
                    title="Implementation"
                    desc="A context layer that can sit above TA, fundamentals, or discretionary workflows."
                    rows={[
                      { k: "Input", v: "Multi-timeframe regime signals" },
                      { k: "Output", v: "Exposure posture + transition warnings" },
                      { k: "Use", v: "Reduce churn and overtrading" },
                    ]}
                  />
                  <Card
                    title="Why it scales"
                    desc="Because it governs behavior, not instrument-specific tricks."
                    rows={[
                      { k: "Multi-asset", v: "Indices • FX • Metals • Crypto" },
                      { k: "Preference", v: "Higher TFs for clarity" },
                      { k: "Design", v: "Low-noise decision model" },
                    ]}
                  />
                </div>
              </Section>
            </Reveal>

            {/* RISK */}
            <Reveal delayMs={190}>
              <Section
                id="risk"
                eyebrow="Controls"
                title="Risk Controls"
                desc="The model is built to reduce phase-mismatch and manage exposure during transitions."
              >
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm font-semibold text-white">Risk posture by regime</p>
                    <div className="mt-4 space-y-2 text-sm text-neutral-300">
                      {[
                        ["Empire / Full alignment", "Hold posture. Avoid contrarian exposure. Reduce churn."],
                        ["Rebellion", "Warning posture. Tighten rules. Reduce overconfidence."],
                        ["Uprising", "Survival posture. Do less. Reduce exposure during instability."],
                        ["Revolution", "Reset posture. Old assumptions invalid. Rebuild under new regime."],
                      ].map(([k, v]) => (
                        <div key={k} className="border-t border-white/10 pt-3">
                          <div className="text-xs text-neutral-400">{k}</div>
                          <div className="text-sm text-neutral-200">{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                    <p className="text-sm font-semibold text-white">What this avoids</p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      The largest avoidable losses often come from fighting a strong trend,
                      increasing exposure inside instability, and panic-exiting without structural break.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                      {[
                        "Contrarian impulses during full alignment",
                        "Overtrading inside deadlock / transition churn",
                        "Leverage creep when volatility is rising",
                        "Narrative attachment after regime flip",
                      ].map((x) => (
                        <li key={x} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Section>
            </Reveal>

            {/* GOVERNANCE */}
            <Reveal delayMs={230}>
              <Section
                id="governance"
                eyebrow="Process"
                title="Governance"
                desc="Institutional friendliness comes from consistency: vocabulary, cadence, and review discipline."
              >
                <div className="grid gap-4 lg:grid-cols-3">
                  <Card
                    title="Vocabulary"
                    desc="A shared language reduces interpretation drift."
                    rows={[
                      { k: "States", v: "Empire / Rebellion / Uprising / Revolution" },
                      { k: "Phases", v: "Standoff → Deadlock → Siege" },
                      { k: "Result", v: "Repeatable posture decisions" },
                    ]}
                  />
                  <Card
                    title="Review loop"
                    desc="Regime notes become a weekly decision record."
                    rows={[
                      { k: "Format", v: "Factsheet + deltas" },
                      { k: "Focus", v: "Posture + risk changes" },
                      { k: "Benefit", v: "Auditability over hindsight" },
                    ]}
                  />
                  <Card
                    title="Transparency"
                    desc="Show outcomes without revealing construction."
                    rows={[
                      { k: "Public", v: "Regime strip + labels" },
                      { k: "Private", v: "Model construction details" },
                      { k: "Purpose", v: "Proof without leakage" },
                    ]}
                  />
                </div>
              </Section>
            </Reveal>

            {/* REPORTING */}
            <Reveal delayMs={270}>
              <Section
                id="reporting"
                eyebrow="IR cadence"
                title="Reporting & Evidence"
                desc="A clean, repeatable evidence trail designed for allocator review."
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">Portfolio Lab (deep detail)</p>
                      <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                        Factsheet-style archive: holdings, regime context, exposure posture, and week-by-week deltas.
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
              </Section>
            </Reveal>

            {/* PROOF ARCHIVE */}
            <Reveal delayMs={310}>
              <section id="proof" className="scroll-mt-24 space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-400">
                      Proof Archive
                    </p>
                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
                      Time-stamped weekly index
                    </h2>
                    <p className="mt-2 max-w-3xl text-sm text-neutral-300 leading-relaxed">
                      Weekly updates are indexed here. Platform-agnostic. No embeds.
                      Designed to be easy to audit.
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
              </section>
            </Reveal>

            {/* PORTFOLIO / STATUS placeholders */}
            <Reveal delayMs={350}>
              <Section
                id="portfolio"
                eyebrow="Archive"
                title="Portfolio"
                desc="Reserved for future: downloadable factsheets, exposure summaries, and standardized risk notes."
              >
                <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-neutral-300 leading-relaxed">
                  Placeholder section. The primary archive currently lives in Portfolio Lab.
                </div>
              </Section>
            </Reveal>

            <Reveal delayMs={390}>
              <Section
                id="status"
                eyebrow="Now"
                title="Current Status"
                desc="What is live today, what is being built, and what changes next."
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="space-y-2 text-sm text-neutral-300 leading-relaxed">
                    <p>
                      <span className="font-semibold text-white">Live:</span> weekly proof index and Portfolio Lab archive.
                    </p>
                    <p>
                      <span className="font-semibold text-white">In build:</span> standardized factsheet template and public regime-strip proofs.
                    </p>
                    <p>
                      <span className="font-semibold text-white">Next:</span> tighten reporting format and expand case studies under Operator.
                    </p>
                  </div>
                </div>
              </Section>
            </Reveal>

            {/* CTA */}
            <Reveal delayMs={430}>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">Need the public framing?</p>
                    <p className="text-xs text-neutral-400">
                      Observer explains REZIME in plain language. Operator explains mechanics.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/observer"
                      className="premium-card relative inline-flex justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
                    >
                      Observer →
                    </Link>
                    <Link
                      href="/operator"
                      className="premium-card relative inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white hover:bg-white/15 transition"
                    >
                      Operator →
                    </Link>
                  </div>
                </div>
              </section>
            </Reveal>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
