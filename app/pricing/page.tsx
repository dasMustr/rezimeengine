// app/pricing/page.tsx
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

const tiers = [
  {
    name: "Engine",
    price: "$19.99",
    note: "Beginner (single timeframe).",
    features: [
      "Empire / Siege / Revolution regime map",
      "Safer participation rules per regime",
      "Works on any charted market",
      "Core documentation & onboarding",
    ],
    cta: "Request Access",
    href: "/checkout?plan=engine",
  },
  {
    name: "Sync",
    price: "$29.99",
    note: "Intermediate (alignment across timeframes).",
    features: [
      "HTF/LTF alignment mapping",
      "Ages + rebellion context (timing support)",
      "Gap-rule guidance (reduce overtrading)",
      "Operator notes (interpretation rules)",
    ],
    cta: "Request Access",
    href: "/checkout?plan=sync",
    featured: true,
  },
  {
    name: "Battle Lines",
    price: "$34.99",
    note: "Advanced (territory walls for management).",
    features: [
      "HTF/LTF territory walls",
      "Timing + management layer",
      "Optional fog badge (risk awareness)",
      "Advanced interpretation notes",
    ],
    cta: "Request Access",
    href: "/checkout?plan=battlelines",
  },
];

function TierCard({
  name,
  price,
  note,
  features,
  cta,
  href,
  featured,
}: {
  name: string;
  price: string;
  note: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "premium-card relative overflow-hidden rounded-2xl border p-6",
        featured
          ? "border-white/20 bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
          : "border-white/10 bg-white/5",
      ].join(" ")}
    >
      <Sheen className="rounded-2xl" />

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-white">{name}</h3>
          <p className="mt-1 text-sm text-neutral-400">{note}</p>
        </div>

        {featured && (
          <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] text-neutral-200">
            Recommended start
          </span>
        )}
      </div>

      <div className="mt-5">
        <div className="text-3xl font-semibold text-white">{price}</div>
        <div className="text-xs text-neutral-500">monthly</div>
      </div>

      <ul className="mt-5 space-y-2 text-sm text-neutral-300 leading-relaxed">
        {features.map((f) => (
          <Bullet key={f}>{f}</Bullet>
        ))}
      </ul>

      <Link
        href={href}
        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
      >
        {cta}
      </Link>

      <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
        Educational access only. No financial advice. No signals. No guarantees.
      </p>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-12">
      {/* HERO */}
      <Reveal delayMs={0}>
        <header className="space-y-6">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Access
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag>Survival-first</Tag>
            <Tag>Education</Tag>
            <Tag>Analytical tools</Tag>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Access is not a paywall.
            <br />
            It’s the safety layer you keep coming back to.
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-neutral-300 leading-relaxed">
            Most people don’t need more entries.
            They need fewer mistakes in the wrong environment.
            <br />
            <br />
            REZIME is designed to keep you calm, selective, and alive long enough
            to build real skill.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/orientation"
              className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
            >
              <Sheen className="rounded-full" />
              New to Markets? Start here →
            </Link>

            <Link
              href="/observer"
              className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
            >
              <Sheen className="rounded-full" />
              Learn the Map →
            </Link>

            <Link
              href="/contact"
              className="text-sm text-neutral-400 hover:text-white transition self-center"
            >
              Questions? Contact →
            </Link>
          </div>
        </header>
      </Reveal>

      {/* WHAT THIS IS (PAYMENT REVIEW FRIENDLY, BUT HUMAN) */}
      <Reveal delayMs={80}>
        <section className="calm-block rounded-3xl border border-white/10 bg-black/30 p-7 sm:p-8 space-y-5">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              What you’re buying
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Educational access + analytical tools (not advice)
            </h2>
            <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
              Access gives you the documentation, interpretation rules, and chart
              tools to recognize market regimes and adjust behavior safely.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold text-white">
                Included with access
              </div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300 leading-relaxed">
                <Bullet>Documentation & onboarding</Bullet>
                <Bullet>Regime explanations (Empire / Siege / Revolution)</Bullet>
                <Bullet>Indicator access + interpretation guides</Bullet>
                <Bullet>Framework materials (posture, activity, risk behavior)</Bullet>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-sm font-semibold text-white">
                What REZIME is not
              </div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300 leading-relaxed">
                <Bullet>Not trading signals</Bullet>
                <Bullet>Not financial advice</Bullet>
                <Bullet>Not portfolio management</Bullet>
                <Bullet>No profit guarantees</Bullet>
              </ul>
            </div>
          </div>

          <p className="text-xs text-neutral-500 leading-relaxed">
            If you want a “get rich quick” product, this is not it.
            REZIME is built for survivability and self-mastery.
          </p>
        </section>
      </Reveal>

      {/* TIERS */}
      <Reveal delayMs={120}>
        <section className="space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              Choose your layer
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Start small. Add complexity only when you’ve earned it.
            </h2>
            <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
              Beginners usually start with Engine. Sync and Battle Lines are for
              people who already have screen-time and want structure for timing
              and management.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {tiers.map((t) => (
              <TierCard key={t.name} {...t} />
            ))}
          </div>

          <p className="text-xs text-neutral-500 leading-relaxed">
            Tip: Start with the smallest layer that makes you safer.
            Complexity is a privilege earned through time-in-market.
          </p>
        </section>
      </Reveal>

      {/* LEGAL / LINKS */}
      <Reveal delayMs={160}>
        <section className="text-xs text-neutral-500 leading-relaxed space-y-2">
          <p>
            By subscribing, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-white">
              Terms of Use
            </Link>
            ,{" "}
            <Link href="/privacy" className="underline hover:text-white">
              Privacy Policy
            </Link>
            , and{" "}
            <Link href="/refunds" className="underline hover:text-white">
              Refund Policy
            </Link>
            .
          </p>
          <p>
            Not sure yet? Start with{" "}
            <Link href="/orientation" className="underline hover:text-white">
              New to Markets
            </Link>{" "}
            and come back when you’re ready.
          </p>
        </section>
      </Reveal>
    </main>
  );
}
