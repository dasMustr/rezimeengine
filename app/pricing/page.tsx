"use client";

// app/pricing/page.tsx
import React from "react";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import Sheen from "@/app/components/Sheen";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-neutral-300">
      {children}
    </span>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-white/50" />
      <span>{children}</span>
    </li>
  );
}

function InfoCard({
  title,
  tone = "soft",
  children,
}: {
  title: string;
  tone?: "soft" | "hard";
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        "calm-block rounded-2xl border p-6",
        tone === "hard"
          ? "border-white/10 bg-black/30"
          : "border-white/10 bg-white/5",
      ].join(" ")}
    >
      <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
        {title}
      </p>
      <div className="mt-3 text-sm text-neutral-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function PriceToggle({
  billing,
  setBilling,
}: {
  billing: "monthly" | "annual";
  setBilling: (v: "monthly" | "annual") => void;
}) {
  return (
    <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
      <button
        type="button"
        onClick={() => setBilling("monthly")}
        className={[
          "rounded-full px-4 py-2 text-xs transition",
          billing === "monthly"
            ? "bg-white/10 text-white"
            : "text-neutral-300 hover:bg-white/10",
        ].join(" ")}
      >
        Monthly
      </button>
      <button
        type="button"
        onClick={() => setBilling("annual")}
        className={[
          "rounded-full px-4 py-2 text-xs transition",
          billing === "annual"
            ? "bg-white/10 text-white"
            : "text-neutral-300 hover:bg-white/10",
        ].join(" ")}
      >
        Annual
      </button>
    </div>
  );
}

function AccessCard({ billing }: { billing: "monthly" | "annual" }) {
  const monthlyPrice = 19.99;
  const annualPrice = 199.99; // ~2 months free

  const price =
    billing === "monthly"
      ? `$${monthlyPrice.toFixed(2)}`
      : `$${annualPrice.toFixed(2)}`;

  const cadence = billing === "monthly" ? "monthly" : "yearly";
  const note =
    billing === "monthly"
      ? "Cancel anytime. Keep it light while you learn."
      : "Two months free. Built for steady learning.";

  const href =
    billing === "monthly"
      ? "/checkout?plan=engine"
      : "/checkout?plan=engine_annual";

  const features = [
    "REZIME Engine access (Sync is embedded as one tool)",
    "Regime classification on your chosen timeframe",
    "Two warnings that matter most: Instability (yellow) and Reset (red)",
    "Posture cues so behavior matches the regime",
    "Docs, interpretation rules, and examples",
    "Method-neutral, works on any charted market",
  ];

  return (
    <div className="premium-card relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6">
      <Sheen className="rounded-2xl" />

      <div className="flex h-full flex-col">
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
            Access
          </p>
          <h3 className="text-base font-semibold text-white">REZIME Engine</h3>
          <p className="text-sm text-neutral-400">
            One tool. One lens. Built for staying in the game long enough to
            understand it.
          </p>
          <p className="text-xs text-neutral-300/80">
            Includes: Engine + embedded Sync
          </p>
        </div>

        <div className="mt-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-3xl font-semibold text-white">{price}</div>
              <div className="text-xs text-neutral-500">{cadence}</div>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-neutral-200">
              {note}
            </span>
          </div>
        </div>

        <ul className="mt-5 space-y-2 text-sm text-neutral-300 leading-relaxed">
          {features.map((f) => (
            <Bullet key={f}>{f}</Bullet>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <Link
            href={href}
            className={[
              "inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition",
              "bg-white text-black hover:opacity-90",
            ].join(" ")}
          >
            Request Access
          </Link>

          <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
            Educational access only. Not financial advice. No signals. No
            predictions. No guarantees.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [billing, setBilling] = React.useState<"monthly" | "annual">("monthly");

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-12">
      <Reveal delayMs={0}>
        <header className="space-y-6">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Access
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag>Risk containment</Tag>
            <Tag>Map, not signals</Tag>
            <Tag>Method-neutral</Tag>
            <Tag>Calm by design</Tag>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            One tool, kept intentionally simple.
          </h1>

          <div className="space-y-3">
            <p className="max-w-3xl text-sm sm:text-base text-neutral-300 leading-relaxed">
              REZIME is a regime-first decision lens. It helps you reduce mismatch
              in unstable conditions so you can learn with fewer avoidable
              mistakes.
            </p>
            <p className="max-w-3xl text-sm text-neutral-400 leading-relaxed">
              The framework is the point. The tool is optional assistance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/orientation"
              className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
            >
              <Sheen className="rounded-full" />
              Start with Orientation →
            </Link>

            <Link
              href="/operator"
              className="self-center text-sm text-neutral-400 hover:text-white transition"
            >
              Read Framework →
            </Link>

            <Link
              href="/contact"
              className="self-center text-sm text-neutral-400 hover:text-white transition"
            >
              Questions? Contact →
            </Link>
          </div>

          <p className="text-xs text-neutral-500 leading-relaxed">
            Priced like a gym membership. The goal is consistency and staying in
            the game.
          </p>
        </header>
      </Reveal>

      <Reveal delayMs={60}>
        <section className="grid gap-4 md:grid-cols-2">
          <InfoCard title="What you are getting" tone="soft">
            <ul className="space-y-2">
              <Bullet>A regime lens you can learn and reuse</Bullet>
              <Bullet>One indicator tool that makes the lens easier to apply</Bullet>
              <Bullet>Interpretation rules and examples</Bullet>
              <Bullet>Posture guidance for instability and resets</Bullet>
            </ul>
          </InfoCard>

          <InfoCard title="What this is not" tone="hard">
            <ul className="space-y-2">
              <Bullet>Signals</Bullet>
              <Bullet>Financial advice</Bullet>
              <Bullet>Guaranteed outcomes</Bullet>
              <Bullet>A substitute for judgment</Bullet>
            </ul>
          </InfoCard>
        </section>
      </Reveal>

      <Reveal delayMs={110}>
        <section className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                One option
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Choose monthly or annual.
              </h2>
              <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
                Keep it simple. If REZIME helps you slow down in instability and
                reset cleanly when regimes flip, it is doing its job.
              </p>
            </div>

            <PriceToggle billing={billing} setBilling={setBilling} />
          </div>

          <div className="grid gap-4 md:grid-cols-3 items-stretch">
            <div className="md:col-start-2">
              <AccessCard billing={billing} />
            </div>
          </div>

          <p className="text-xs text-neutral-500 leading-relaxed">
            Tip: if you are new, read Orientation first. The tool is optional.
          </p>
        </section>
      </Reveal>

      <Reveal delayMs={160}>
        <section className="text-xs text-neutral-500 leading-relaxed space-y-2">
          <p>
            By subscribing, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-white">
              Terms of Use
            </Link>
            , and{" "}
            <Link href="/privacy" className="underline hover:text-white">
              Privacy Policy
            </Link>
            .
          </p>
          <p>
            Not sure yet? Read{" "}
            <Link href="/orientation" className="underline hover:text-white">
              Orientation
            </Link>{" "}
            first.
          </p>
        </section>
      </Reveal>
    </main>
  );
}
