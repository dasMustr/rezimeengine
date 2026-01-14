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
      <TocLink href="#rezime" label="REZIME Philosophy" />
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
            <Reveal delayMs={140}>
              <Section
                id="rezime"
                eyebrow="Framework"
                title="REZIME Philosophy"
                desc="A regime framework that improves time-in-market by clarifying what phase the market is in — and what actions are rational inside that phase."
              >
                <div className="grid gap-4 lg:grid-cols-3">
                  <Card
                    title="Why it exists"
                    desc="Most participants know “time in the market beats timing the market.” The real problem is: which time are we in?"
                    rows={[
                      { k: "Root failure", v: "Unclear regime → wrong behavior" },
                      { k: "REZIME role", v: "Identify regime + phase" },
                      { k: "Outcome", v: "More holding power, less panic" },
                    ]}
                  />
                  <Card
                    title="What it is"
                    desc="REZIME is not a signal engine. It is a context map that stabilizes whatever execution approach you already use."
                    rows={[
                      { k: "Type", v: "Regime & transition model" },
                      { k: "Works with", v: "TA, fundamentals, discretionary" },
                      { k: "Not", v: "Holy grail / prediction / signals" },
                    ]}
                  />
                  <Card
                    title="What it changes"
                    desc="Stress often comes from not knowing what’s happening. Clarity lowers noise and improves decision quality."
                    rows={[
                      { k: "Reduces", v: "Random entries, emotional exits" },
                      { k: "Improves", v: "Exposure discipline & patience" },
                      { k: "Focus", v: "Survivability through transitions" },
                    ]}
                  />
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge tone="hard">Map, not signals</Badge>
                    <Badge>Time-in-market{" > "}timing hype</Badge>
                    <Badge>Regime clarity governs exposure</Badge>
                    <Badge>Survival over optimization</Badge>
                  </div>

                  <div className="mt-5 space-y-3 text-sm text-neutral-300 leading-relaxed">
                    <p>
                      <span className="font-semibold text-white">Core thesis:</span>{" "}
                      REZIME helps you avoid fighting a strong empire. Contrarian trades are
                      not “brave” — they’re often structurally early. The model waits for
                      internal disruption before treating reversal as plausible.
                    </p>
                    <p>
                      <span className="font-semibold text-white">Mechanism:</span>{" "}
                      REZIME reads the interaction of three timeframes. Full alignment
                      signals a strong trend (high caution for contrarians). Transition
                      phases identify when pressure is building against the regime.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                    <p className="text-sm font-semibold text-white">Phase sequence</p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      In REZIME, markets behave like empires: stable dominance → internal
                      disruption → structural challenge → regime change.
                    </p>

                    <div className="mt-4 space-y-2 text-sm text-neutral-300">
                      {[
                        ["Full Alignment", "All 3 TFs point the same way — strong trend. Don’t fight it yet."],
                        ["Standoff", "LTF challenges the regime but gets pushed back (earliest + noisiest)."],
                        ["Rebellion", "LTF breaks through; counter-pressure becomes real."],
                        ["Deadlock", "MTF is challenged; transition risk increases."],
                        ["Uprising", "MTF breaks through; regime weakening becomes visible."],
                        ["Siege", "HTF is challenged; reversal becomes structurally possible."],
                        ["Revolution", "HTF flips; a new empire takes control."],
                      ].map(([k, v]) => (
                        <div key={k} className="border-t border-white/10 pt-3">
                          <div className="text-xs text-neutral-400">{k}</div>
                          <div className="text-sm text-neutral-200">{v}</div>
                        </div>
                      ))}
                    </div>

                    <p className="mt-4 text-[11px] text-neutral-500">
                      Note: Markets are not linear — this sequence is a map for probability,
                      not a script for certainty.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm font-semibold text-white">
                      The 4 failure modes REZIME addresses
                    </p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      When you don’t know the regime, you’re vulnerable to every outcome.
                      REZIME reduces ambiguity so your execution method can operate inside a
                      coherent context.
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                      {[
                        "Regime blindness → chopped by sideways & transitions.",
                        "Entering too early → thesis dies before maturity.",
                        "Entering too late → buying exhaustion and stagnation.",
                        "Holding without context → panic exits before structure breaks.",
                      ].map((x) => (
                        <li key={x} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
                      <p className="text-xs uppercase tracking-widest text-neutral-400">
                        Practitioner note
                      </p>
                      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                        My personal style prefers early transition entries (Standoff →
                        Rebellion), not chasing Full Alignment. But REZIME itself is a lens:
                        it gives context — execution is optional and modular.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 premium-card relative rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold text-white">Why I built this</p>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    I’m not obsessed with markets — I’m obsessed with systems. Markets are a
                    high-pressure environment where weak frameworks break. REZIME is built
                    to preserve clarity and survivability so a thesis can be seen through —
                    or avoided when the storm is structurally likely.
                  </p>
                </div>
              </Section>
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
