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
      ? "Cancel anytime. Stay light while you learn."
      : "Two months free. Built for steady time-in-market.";

  const href =
    billing === "monthly"
      ? "/checkout?plan=engine"
      : "/checkout?plan=engine_annual";

  const features = [
    "REZIME Engine access (Sync is embedded as one tool)",
    "Regime labeling on your chosen timeframe",
    "Two safety warnings that matter most: Instability (yellow) and Reset (red)",
    "Posture cues so behavior matches conditions",
    "Reading rules, examples, and interpretation notes",
    "Method-neutral, works on any charted market",
  ];

  return (
    <div className="premium-card relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6">
      <Sheen className="rounded-2xl" />

      <div className="flex h-full flex-col">
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
            Membership
          </p>
          <h3 className="text-base font-semibold text-white">
            REZIME Engine + Documentation
          </h3>
          <p className="text-sm text-neutral-400">
            A baseline framework for people who intend to spend time in markets.
            Built to reduce avoidable mistakes while experience forms.
          </p>
          <p className="text-xs text-neutral-300/80">
            Includes: Engine tool + full reading guide
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
            Get access
          </Link>

          <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
            Educational framework only. Not financial advice. No signals. No
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
            <Tag>Time in markets</Tag>
            <Tag>Risk containment</Tag>
            <Tag>Map, not signals</Tag>
            <Tag>Calm by design</Tag>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Priced for consistency, not intensity.
          </h1>

          <div className="space-y-3">
            <p className="max-w-3xl text-sm sm:text-base text-neutral-300 leading-relaxed">
              REZIME is meant to be the baseline framework for anyone who plans
              to spend real time in markets.
            </p>
            <p className="max-w-3xl text-sm text-neutral-400 leading-relaxed">
              It helps you recognize conditions first, so you slow down during
              instability and reset cleanly when assumptions stop working.
              The tool supports the framework. It does not replace experience.
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
            Priced like a gym membership. The goal is a steady habit and safer
            time-in-market.
          </p>
        </header>
      </Reveal>

      <Reveal delayMs={60}>
        <section className="grid gap-4 md:grid-cols-2">
          <InfoCard title="What you are getting" tone="soft">
            <ul className="space-y-2">
              <Bullet>A baseline decision lens you can reuse forever</Bullet>
              <Bullet>One simple tool to label conditions on a chart</Bullet>
              <Bullet>Reading rules, examples, and interpretation guidance</Bullet>
              <Bullet>Posture cues for instability and resets</Bullet>
            </ul>
          </InfoCard>

          <InfoCard title="What this is not" tone="hard">
            <ul className="space-y-2">
              <Bullet>Signals</Bullet>
              <Bullet>Personalized advice</Bullet>
              <Bullet>Guaranteed outcomes</Bullet>
              <Bullet>A substitute for judgment and experience</Bullet>
            </ul>
          </InfoCard>
        </section>
      </Reveal>

      <Reveal delayMs={110}>
        <section className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                One membership
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Choose monthly or annual.
              </h2>
              <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
                If REZIME helps you reduce activity during instability and reset
                cleanly when regimes change, it is doing its job.
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
            Tip: If you are new, read Orientation first. The tool is optional.
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
