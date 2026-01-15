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
    <div className="p-6 text-white">
      Allocator minimal render test ✅
    </div>
  );
}

