// app/en/page.tsx (or app/(lang)/en/page.tsx depending on your setup)
import React from "react";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import Sheen from "@/app/components/Sheen";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-neutral-300">
      {children}
    </span>
  );
}

function HomeCard({
  title,
  desc,
  href,
  cta,
  tone = "soft",
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
  tone?: "soft" | "hard";
}) {
  return (
    <Link
      href={href}
      className={[
        "premium-card is-clickable group relative block rounded-2xl border p-6 transition",
        tone === "hard"
          ? "border-white/15 bg-white/10 hover:bg-white/15"
          : "border-white/10 bg-white/5 hover:bg-white/10",
      ].join(" ")}
    >
      <Sheen className="rounded-2xl" />
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-neutral-300">{desc}</div>
      <div className="mt-4 text-xs text-neutral-300">
        <span className="text-neutral-400">Open</span>{" "}
        <span className="text-white">→</span> {cta}
      </div>
    </Link>
  );
}

function ScopeBlock() {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-semibold text-white">What this is</p>
      <div className="mt-2 space-y-3 text-sm text-neutral-300 leading-relaxed">
        <p>
          REZIME is a framework for people who want to stay in markets long enough
          to become stable. It is not signals. Not predictions. Not trade prompts.
        </p>
        <p>
          The goal is simple: reduce avoidable mistakes so experience can compound,
          and intuition can form.
        </p>
      </div>
    </div>
  );
}

export default function HomePageEN() {
  return (
    <section className="space-y-12">
      {/* HERO */}
      <Reveal delayMs={0}>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 sm:p-12">
          <div className="space-y-7">
            {/* TAGS */}
            <div className="flex flex-wrap gap-2">
              <Tag>Framework-first</Tag>
              <Tag>Calm by design</Tag>
              <Tag>Not signals</Tag>
            </div>

            {/* HERO COPY */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
                Markets feel brutal
                <br />
                because feedback is instant.
              </h1>

              <p className="max-w-2xl text-base text-neutral-300 leading-relaxed">
                Most people don’t fail because they’re unintelligent.
                <br />
                They fail because consequences arrive faster than learning.
              </p>

              <p className="max-w-3xl text-sm text-neutral-400 leading-relaxed">
                REZIME starts with condition recognition.
                Slow down when things are unclear.
                Stay steady when structure supports action.
                <br />
                <br />
                Built for professionals and operators who want financial decisions to
                become more stable over time.
              </p>
            </div>

            {/* INVITATION */}
            <div className="max-w-3xl space-y-2">
              <p className="text-sm text-neutral-400">
                If you’re not here for get-rich-quick narratives, you’ll probably fit.
              </p>
              <p className="text-sm text-neutral-400">
                The goal is time. Time builds experience. Experience builds intuition.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/en/orientation"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Start here →
              </Link>

              <Link
                href="/en/framework"
                className="premium-card is-clickable inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-neutral-200 transition hover:bg-white/10"
              >
                View the framework →
              </Link>

              <Link
                href="/en/portfolio-lab"
                className="text-sm text-neutral-400 underline decoration-white/10 underline-offset-4 transition hover:text-neutral-200 hover:decoration-white/20"
              >
                Public notes (Portfolio Lab)
              </Link>

              <Link
                href="/en/contact"
                className="text-sm text-neutral-500 underline decoration-white/10 underline-offset-4 transition hover:text-neutral-200 hover:decoration-white/20"
              >
                Contact
              </Link>
            </div>

            <p className="text-xs text-neutral-500">
              Educational documentation. Not financial advice. No signals. No guarantees.
            </p>
          </div>
        </div>
      </Reveal>

      {/* THREE DOORS */}
      <Reveal delayMs={80}>
        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Simple structure
            </p>
            <h2 className="text-xl font-semibold text-white">
              Why. Framework. Notes.
            </h2>
            <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
              Understand first. Apply slowly. Let results reveal themselves over time.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <HomeCard
              tone="hard"
              title="Why"
              desc="Why markets feel intense. A safer learning order that avoids early damage."
              href="/en/orientation"
              cta="Orientation"
            />
            <HomeCard
              title="Framework"
              desc="How to read conditions before acting, so posture matches the market."
              href="/en/framework"
              cta="The REZIME lens"
            />
            <HomeCard
              title="Notes"
              desc="A time-stamped public ledger. No edits after the fact."
              href="/en/portfolio-lab"
              cta="Portfolio Lab"
            />
          </div>

          <ScopeBlock />

          {/* Networking / conversation anchor */}
          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">Talk to me</p>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              REZIME is conversation-gated. If our worldview matches, I can share more.
            </p>
            <div className="mt-4">
              <Link
                href="/en/contact"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Contact →
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </section>
  );
}