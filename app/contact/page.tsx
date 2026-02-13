// app/contact/page.tsx
import React from "react";
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

const MAIL = "hello@rezimeengine.com";

const mailto = (subject: string, body?: string) => {
  const s = encodeURIComponent(subject);
  const b = body ? encodeURIComponent(body) : "";
  return `mailto:${MAIL}?subject=${s}${body ? `&body=${b}` : ""}`;
};

const GENERAL_BODY = `Hi REZIME,

I have an inquiry about:

Context (optional):
Market:
Experience level:
Link or screenshot (optional):

Message:

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
              For any inquiries, email is the fastest way.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={mailto("REZIME inquiry", GENERAL_BODY)}
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                Email us →
              </a>

              <Link
                href="/orientation"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
              >
                <Sheen className="rounded-full" />
                Start here
              </Link>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed">
              Educational only. No advice, no signals, no guarantees.
            </p>
          </div>
        </div>
      </Reveal>

      {/* SIMPLE DETAILS */}
      <Reveal delayMs={120}>
        <section className="calm-block rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-neutral-400">
            Email
          </p>
          <p className="mt-2 text-sm text-neutral-200">{MAIL}</p>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            Any inquiries are welcome. If it helps, include your market, your
            experience level, and what you are trying to understand or improve.
          </p>
        </section>
      </Reveal>

      {/* FOOT CTA */}
      <Reveal delayMs={200}>
        <section className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-white">
                Prefer to review first?
              </div>
              <div className="text-xs text-neutral-400">
                Start with Orientation, then Framework, then Portfolio Lab.
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
                Framework
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
