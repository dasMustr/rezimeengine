import Link from "next/link";
import Section from "../components/Section";
import Reveal from "../components/Reveal";

function TocLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="block rounded-lg px-2 py-1 text-xs text-neutral-400 hover:text-white transition"
    >
      {label}
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
          ? "calm-block rounded-2xl border border-white/15 bg-white/10 p-6"
          : "calm-block rounded-2xl border border-white/10 bg-black/30 p-6"
      }
    >
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{desc}</p>
    </div>
  );
}

function PlaceholderShot({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{desc}</p>
        </div>
        <span className="text-xs text-neutral-500">Placeholder</span>
      </div>

      <div className="mt-4 rounded-xl border border-dashed border-white/15 bg-black/30 p-6">
        <p className="text-xs uppercase tracking-widest text-neutral-400">
          Screenshot slot
        </p>
        <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
          Later: add a single chart image + 1–2 sentences explaining the regime
          and the correct behavior (no internal formulas).
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
            <Pill>Regime awareness</Pill>
            <Pill>Survival-first</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Before you build an edge,
            you must survive long enough for it to matter.
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
            Most traders don’t fail because they chose the wrong strategy.
            They fail because they stayed active in the wrong{" "}
            <span className="text-white font-semibold">regime</span> long enough
            to self-destruct.
            <br /><br />
            REZIME is a regime map that helps you identify{" "}
            <span className="text-white font-semibold">which Empire is ruling</span>{" "}
            and how stable that rule is — so your behavior matches reality:
            participate when the regime is stable, reduce activity when conflict
            grows, and reset when the regime flips.
            <br /><br />
            Survival first. Skill second. Performance last.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/" className="premium-card is-clickable rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10">
              Back to Home
            </Link>
            <Link href="/operator" className="premium-card is-clickable rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-300 transition hover:bg-white/5">
              Jump to Playbook →
            </Link>
            <Link href="/allocator" className="premium-card is-clickable rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-300 transition hover:bg-white/5">
              See Proof →
            </Link>
            <Link href="/faq" className="premium-card is-clickable rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-300 transition hover:bg-white/5">
              Read FAQ →
            </Link>
          </div>

          {/* Start Here */}
          <div className="calm-block rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Start here
            </p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300 leading-relaxed">
              <li>1) Identify the ruling Empire (Bull or Bear)</li>
              <li>2) Decide if the regime is stable or under pressure</li>
              <li>3) If confused, reduce activity — you’re likely in conflict</li>
            </ul>
          </div>
        </section>
      </Reveal>

      {/* CONTENT */}
      <Reveal delayMs={80}>
        <section className="space-y-12">

          <Section
            id="what"
            eyebrow="Definition"
            title="What is REZIME Engine?"
            subtitle="A map of regime dominance — not price prediction."
          >
            <MiniBlock
              tone="hard"
              title="There is always a ruling Empire"
              desc="Markets are never neutral. Either the Bull Empire or the Bear Empire is in control. Most mistakes come from trading against the ruling regime."
            />
          </Section>

          <Section
            id="states"
            eyebrow="The public vocabulary"
            title="Empire • Siege • Revolution"
            subtitle="A simplified way to understand regime stability."
          >
            <MiniBlock
              title="Empire"
              desc="Stable regime dominance. Trends persist. Patience and holding are often rewarded."
            />
            <MiniBlock
              title="Siege"
              desc="Regime under pressure. Conflict rises. Reduce activity and overconfidence."
            />
            <MiniBlock
              title="Revolution"
              desc="Regime flips. Old assumptions are invalid. Reset and re-anchor."
            />
          </Section>

          <Section
            id="behavior"
            eyebrow="Beginner-safe behavior"
            title="How to behave by regime"
            subtitle="Match participation to regime stability."
          >
            <MiniBlock title="Empire behavior" desc="Do less. Let trends work. Avoid micromanaging." />
            <MiniBlock title="Siege behavior" desc="Reduce exposure. Avoid forcing trades in conflict." />
            <MiniBlock title="Revolution behavior" desc="Treat as reset. Rebuild under new regime." />
          </Section>

          <Section
            id="next"
            eyebrow="Progression"
            title="Learn → Playbook"
            subtitle="Recognition first. Escalation next."
          >
            <p className="text-sm text-neutral-300 leading-relaxed">
              Learn teaches regime recognition. Playbook teaches how regimes
              escalate across timeframes and how to interpret the tools in detail.
            </p>
          </Section>
        </section>
      </Reveal>
    </div>
  );
}
