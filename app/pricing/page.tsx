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
    cta: "Join waitlist",
    href: "/pricing#waitlist",
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
    cta: "Join waitlist",
    href: "/pricing#waitlist",
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
    cta: "Join waitlist",
    href: "/pricing#waitlist",
  },
];

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-10">
      <header className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          Placeholder checkout • real tiers • launch-ready
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">
          Pricing
        </h1>
        <p className="mt-2 max-w-2xl text-white/70">
          REZIME is a map, not signals. Subscriptions will unlock indicators and portals.
          Checkout is not live yet — you can join the waitlist to get first access.
        </p>
      </header>

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
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15"
            >
              {t.cta}
            </Link>

            <p className="mt-3 text-xs text-white/45">
              Checkout inactive • joining the waitlist is the current path.
            </p>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5" id="waitlist">
        <h3 className="text-lg font-semibold text-white">Join the waitlist</h3>
        <p className="mt-1 text-sm text-white/70">
          Get notified when subscriptions go live. No spam.
        </p>

        <form className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
          <input
            type="email"
            required
            placeholder="you@email.com"
            className="h-11 rounded-xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-white/30 outline-none focus:border-white/20"
          />
          <button
            type="submit"
            className="h-11 rounded-xl bg-white px-4 text-sm font-semibold text-black hover:opacity-90"
          >
            Notify me
          </button>
        </form>

        <p className="mt-2 text-xs text-white/45">
          (For now this can submit to email, a Google Form, or your backend later.)
        </p>
      </section>
    </main>
  );
}
