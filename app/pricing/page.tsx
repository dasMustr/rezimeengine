import Link from "next/link";

const tiers = [
  {
    name: "Engine",
    price: "$19.99",
    note: "Beginner (1 timeframe).",
    features: [
      "Empire / Siege / Revolution regime map",
      "Cleaner participation (avoid wrong regime)",
      "Works on any charted market",
      "Core documentation",
    ],
    cta: "Subscribe",
    href: "/checkout?plan=engine",
  },
  {
    name: "Sync",
    price: "$29.99",
    note: "Intermediate (multi-timeframe alignment).",
    features: [
      "HTF/LTF alignment mapping",
      "Ages + rebellion context (timing support)",
      "3–5 gap rule guidance",
      "Operator portal framework",
    ],
    cta: "Subscribe",
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
      "Optional fog badge",
      "Advanced interpretation notes",
    ],
    cta: "Subscribe",
    href: "/checkout?plan=battlelines",
  },
];

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-white">Pricing</h1>
        <p className="mt-3 max-w-2xl text-white/70">
          REZIME is a <strong>market structure education platform</strong> providing
          analytical chart tools, documentation, and framework materials.
          It does <strong>not</strong> provide trading signals, financial advice, or portfolio management.
        </p>
      </header>

      {/* WHAT YOU ARE BUYING — important for payment review */}
      <section className="mb-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
        <p className="font-semibold text-white mb-2">What your subscription includes:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Access to educational documentation</li>
          <li>Research-based market regime explanations</li>
          <li>Analytical chart indicators and interpretation guides</li>
          <li>Framework-based decision support materials</li>
        </ul>
        <p className="mt-3 text-xs text-white/50">
          REZIME does not provide investment advice, trading signals, or financial recommendations.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={[
              "rounded-2xl border p-5 backdrop-blur",
              t.featured
                ? "border-white/20 bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                : "border-white/10 bg-white/5",
            ].join(" ")}
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white">{t.name}</h2>
                <p className="mt-1 text-sm text-white/60">{t.note}</p>
              </div>
              {t.featured && (
                <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">
                  Most popular
                </span>
              )}
            </div>

            <div className="mt-4">
              <div className="text-3xl font-semibold text-white">{t.price}</div>
              <div className="text-xs text-white/50">per month</div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {t.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-white/50" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href={t.href}
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              {t.cta}
            </Link>

            <p className="mt-3 text-xs text-white/45">
              Educational access only. No financial advice or trading signals.
            </p>
          </div>
        ))}
      </section>

      {/* LEGAL SAFETY BLOCK */}
      <section className="mt-12 text-xs text-white/50 leading-relaxed">
        <p>
          By subscribing, you agree to our{" "}
          <Link href="/terms" className="underline hover:text-white">Terms of Use</Link>,{" "}
          <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>, and{" "}
          <Link href="/refunds" className="underline hover:text-white">Refund Policy</Link>.
        </p>
      </section>
    </main>
  );
}
