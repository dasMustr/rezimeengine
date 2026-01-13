import Link from "next/link";

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
      {/* Hero */}
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
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
          >
            ← Operator
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-300 hover:bg-white/5 transition"
          >
            Contact →
          </Link>
        </div>
      </section>

      {/* Layout: TOC + content */}
      <section className="grid gap-8 lg:grid-cols-[240px_1fr]">
        {/* TOC */}
        <aside className="space-y-3 lg:sticky lg:top-24 lg:h-fit">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Contents
          </p>
          <div className="grid gap-2">
            <TocLink href="#mandate" label="Mandate" />
            <TocLink href="#governance" label="Governance" />
            <TocLink href="#risk" label="Risk Doctrine" />
            <TocLink href="#reporting" label="Reporting" />
            <TocLink href="#portfolio" label="Portfolio Lab" />
            <TocLink href="#status" label="Current Status" />
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-neutral-400 leading-relaxed">
            This is a long-horizon framing. It is intentionally conservative and
            non-promotional.
          </div>
        </aside>

        {/* Content */}
        <div className="space-y-12">
          <Section
            id="mandate"
            eyebrow="Strategy"
            title="Mandate"
            desc="A regime-mapped approach designed to hold through cycles with controlled drawdown behavior."
          >
            <div className="grid gap-4 lg:grid-cols-3">
              <Card
                title="Objective"
                desc="Prioritize survivability through regime transitions, then capture time-in-market."
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
                desc="Multi-asset compatible; instruments selected for liquidity and clarity."
                rows={[
                  { k: "Typical", v: "Indices • FX • Metals • Crypto" },
                  { k: "Preference", v: "Higher timeframes (less noise)" },
                  { k: "Constraint", v: "No signal-selling behavior" },
                ]}
              />
            </div>
          </Section>

          <Section
            id="governance"
            eyebrow="Operating rules"
            title="Governance"
            desc="These rules are designed to prevent style-drift and protect capital during uncertainty."
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap gap-2">
                <Badge tone="hard">Map, not signals</Badge>
                <Badge>Regime before tactics</Badge>
                <Badge>Exposure follows clarity</Badge>
                <Badge>Survival over optimization</Badge>
              </div>

              <div className="mt-5 space-y-3 text-sm text-neutral-300 leading-relaxed">
                <p>
                  <span className="font-semibold text-white">
                    1) Regime authority:
                  </span>{" "}
                  exposure is biased toward the dominant Empire; transitions reduce
                  aggression.
                </p>
                <p>
                  <span className="font-semibold text-white">
                    2) No forced trading:
                  </span>{" "}
                  absence of clarity is a valid state; inactivity is permitted.
                </p>
                <p>
                  <span className="font-semibold text-white">
                    3) Risk neutralization:
                  </span>{" "}
                  priority is to make positions riskless (BE → SL+) when structure
                  allows, then let upside ride.
                </p>
                <p>
                  <span className="font-semibold text-white">
                    4) Exit condition:
                  </span>{" "}
                  positions are reduced or exited on confirmed structural regime
                  break (Revolution / authority flip), not on discomfort.
                </p>
              </div>
            </div>
          </Section>

          <Section
            id="risk"
            eyebrow="Capital protection"
            title="Risk Doctrine"
            desc="REZIME’s edge is behavioral: it constrains drawdown by respecting regime transitions."
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3">
                <p className="text-sm font-semibold text-white">
                  Core risk principles
                </p>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {[
                    "Regime clarity governs sizing: unclear regime → smaller exposure.",
                    "Transitions are treated as high-variance environments.",
                    "Reduce leverage before increasing conviction.",
                    "Prefer fewer, cleaner holds over frequent decisions.",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-6 space-y-3">
                <p className="text-sm font-semibold text-white">
                  Drawdown framing (placeholder)
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  This section will later publish explicit drawdown constraints,
                  exposure caps, and escalation rules once the Portfolio Lab is
                  active.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Badge>Max DD: TBD</Badge>
                  <Badge>Exposure cap: TBD</Badge>
                  <Badge>Risk units: TBD</Badge>
                </div>
              </div>
            </div>
          </Section>

          <Section
            id="reporting"
            eyebrow="Transparency"
            title="Reporting"
            desc="Proof-first communication. Factsheet format, minimal commentary, time-stamped archive."
          >
            <div className="grid gap-4 lg:grid-cols-3">
              <Card
                title="Cadence"
                desc="Low-noise updates to build long-horizon trust."
                rows={[
                  { k: "Schedule", v: "Weekly" },
                  { k: "Format", v: "Factsheet-style" },
                  { k: "Tone", v: "Non-promotional" },
                ]}
              />
              <Card
                title="Contents"
                desc="What gets reported (not signals)."
                rows={[
                  { k: "Regime", v: "Empire state + transitions" },
                  { k: "Exposure", v: "Posture + risk notes" },
                  { k: "Performance", v: "Simple series" },
                ]}
              />
              <Card
                title="Integrity"
                desc="Designed to be auditable later."
                rows={[
                  { k: "Time-stamped", v: "Yes" },
                  { k: "Archive", v: "Persistent" },
                  { k: "Scope", v: "Global lab" },
                ]}
              />
            </div>
          </Section>

          <Section
            id="portfolio"
            eyebrow="Research program"
            title="Portfolio Lab"
            desc="A simulated global equity portfolio (10 exchanges/countries) used as a public proof engine. Simulated first, then deployable live."
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 text-sm text-neutral-300 leading-relaxed">
              <p>
                The Portfolio Lab is a public demonstration layer. It is meant to
                answer one question: can this worldview hold through regimes with
                controlled drawdowns?
              </p>
              <p className="text-xs text-neutral-500">
                Placeholder: country universe, allocation rules, and factsheet
                template will be published here.
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs uppercase tracking-widest text-neutral-400">
                    Universe
                  </p>
                  <p className="mt-2 text-sm text-white">10 exchanges</p>
                  <p className="mt-1 text-xs text-neutral-400">Placeholder</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs uppercase tracking-widest text-neutral-400">
                    Method
                  </p>
                  <p className="mt-2 text-sm text-white">Factsheet archive</p>
                  <p className="mt-1 text-xs text-neutral-400">Placeholder</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs uppercase tracking-widest text-neutral-400">
                    Goal
                  </p>
                  <p className="mt-2 text-sm text-white">Proof-first trust</p>
                  <p className="mt-1 text-xs text-neutral-400">Placeholder</p>
                </div>
              </div>
            </div>
          </Section>

          <Section
            id="status"
            eyebrow="Status"
            title="Current Status"
            desc="A calm, honest status page. No hype."
          >
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6 space-y-3 text-sm text-neutral-300 leading-relaxed">
              <p>
                <span className="font-semibold text-white">Phase:</span>{" "}
                Documentation + Portfolio Lab buildout.
              </p>
              <p>
                <span className="font-semibold text-white">Tools:</span>{" "}
                Engine / Sync / Battle Lines are in active development and
                internal use.
              </p>
              <p>
                <span className="font-semibold text-white">Release:</span>{" "}
                Public access is intentionally delayed; proof-first comes first.
              </p>
            </div>
          </Section>

          {/* CTA */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">
                  Allocator inquiries
                </p>
                <p className="text-xs text-neutral-400">
                  For collaboration, research, or future allocation discussions.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white hover:bg-white/15 transition"
              >
                Contact →
              </Link>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
