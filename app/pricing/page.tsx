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
    note: "Single timeframe. The base layer.",
    bundleLine: "Includes: Engine",
    features: [
      "Regime map: Neutral, Bull Empire, Bear Empire, Siege, Revolution",
      "Simple posture rules per regime",
      "Works on any charted market",
      "Docs and onboarding (education, not advice)",
    ],
    cta: "Request Access",
    href: "/checkout?plan=engine",
    highlight: false,
  },
  {
    name: "Engine + Sync",
    price: "$24.99",
    note: "Adds timeframe alignment and conflict states.",
    bundleLine: "Includes: Engine + Sync",
    features: [
      "Everything in Engine",
      "2TF safety mode (default)",
      "Optional 3TF mode (toggle)",
      "Conflict ladder: Tension, Uprising, Deadlock, Rebellion, Siege",
      "Operator notes and guardrails",
    ],
    cta: "Request Access",
    href: "/checkout?plan=sync",
    highlight: true,
  },
  {
    name: "Engine + Sync + Battle Lines",
    price: "$29.99",
    note: "Adds territory walls for management.",
    bundleLine: "Includes: Engine + Sync + Battle Lines",
    features: [
      "Everything in Engine + Sync",
      "Territory walls across HTF, MTF, LTF",
      "Better management and less chasing",
      "Layer toggles (show/hide HTF, MTF, LTF)",
      "Clear color system for quick reading",
    ],
    cta: "Request Access",
    href: "/checkout?plan=battlelines",
    highlight: false,
  },
];

function TierCard({
  name,
  price,
  note,
  bundleLine,
  features,
  cta,
  href,
  highlight,
}: {
  name: string;
  price: string;
  note: string;
  bundleLine: string;
  features: string[];
  cta: string;
  href: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "premium-card relative overflow-hidden rounded-2xl border p-6",
        highlight
          ? "border-white/20 bg-white/10"
          : "border-white/10 bg-white/5",
      ].join(" ")}
    >
      <Sheen className="rounded-2xl" />

      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-white">{name}</h3>
          <p className="text-sm text-neutral-400">{note}</p>
          <p className="text-xs text-neutral-300/80">{bundleLine}</p>
        </div>

        {/* Price */}
        <div className="mt-5">
          <div className="text-3xl font-semibold text-white">{price}</div>
          <div className="text-xs text-neutral-500">monthly</div>
        </div>

        {/* Features */}
        <ul className="mt-5 space-y-2 text-sm text-neutral-300 leading-relaxed">
          {features.map((f) => (
            <Bullet key={f}>{f}</Bullet>
          ))}
        </ul>

        {/* CTA pinned */}
        <div className="mt-auto pt-6">
          <Link
            href={href}
            className={[
              "inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition",
              "bg-white text-black hover:opacity-90",
            ].join(" ")}
          >
            {cta}
          </Link>

          <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
            Educational access only. Not financial advice. No signals. No guarantees.
          </p>
        </div>
      </div>
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
            A safety layer for market participation.
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-neutral-300 leading-relaxed">
            REZIME helps you avoid the wrong regime. It does not give entries. It
            gives context and rules so you make fewer mistakes.
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
              href="/contact"
              className="self-center text-sm text-neutral-400 hover:text-white transition"
            >
              Questions? Contact →
            </Link>
          </div>
        </header>
      </Reveal>

      {/* WHAT THIS IS */}
      <Reveal delayMs={60}>
        <section className="grid gap-4 md:grid-cols-2">
          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              Included
            </p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300 leading-relaxed">
              <Bullet>Indicator access (based on your tier)</Bullet>
              <Bullet>Documentation and onboarding</Bullet>
              <Bullet>Interpretation rules and examples</Bullet>
              <Bullet>Beginner-safe posture principles</Bullet>
            </ul>
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              Not included
            </p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300 leading-relaxed">
              <Bullet>Signals</Bullet>
              <Bullet>Financial advice</Bullet>
              <Bullet>Portfolio management</Bullet>
              <Bullet>Profit guarantees</Bullet>
            </ul>
          </div>
        </section>
      </Reveal>

      {/* TIERS */}
      <Reveal delayMs={110}>
        <section className="space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              Choose your layer
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Start small. Add complexity when you are ready.
            </h2>
            <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
              Engine is the base. Sync adds timeframe agreement and conflict
              states. Battle Lines adds territory walls for management.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 items-stretch">
            {tiers.map((t) => (
              <TierCard key={t.name} {...t} />
            ))}
          </div>

          <p className="text-xs text-neutral-500 leading-relaxed">
            Tip: pick the smallest layer that makes you safer. Complexity is
            optional.
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
            Not sure yet? Read{" "}
            <Link href="/orientation" className="underline hover:text-white">
              New to Markets
            </Link>{" "}
            first.
          </p>
        </section>
      </Reveal>
    </main>
  );
}
