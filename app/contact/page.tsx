import Link from "next/link";

function SectionTitle({
  kicker,
  title,
  desc,
}: {
  kicker: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-widest text-neutral-400">
        {kicker}
      </p>
      <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
        {title}
      </h1>
      <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function Card({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="space-y-2">
        <h2 className="text-base font-semibold">{title}</h2>
        <p className="text-sm text-neutral-300 leading-relaxed">{desc}</p>
      </div>
      {children ? <div className="mt-5">{children}</div> : null}
    </section>
  );
}

function Field({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-xs uppercase tracking-widest text-neutral-400">
        {label}
      </span>
      <input
        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-white/20"
        placeholder={placeholder}
      />
    </label>
  );
}

export default function ContactPage() {
  return (
    <section className="space-y-10">
      <SectionTitle
        kicker="Contact"
        title="Reach out."
        desc="For collaborations, media, or institutional conversations. REZIME is a map-not-signals framework — inquiries should be aligned with research, process, and long-horizon thinking."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card
          title="General"
          desc="For questions about REZIME philosophy, site content, or operator access (when available)."
        >
          <div className="space-y-4">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" placeholder="you@email.com" />
            <label className="block space-y-2">
              <span className="text-xs uppercase tracking-widest text-neutral-400">
                Message
              </span>
              <textarea
                className="h-32 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-white/20"
                placeholder="What would you like to discuss?"
              />
            </label>

            {/* This is UI-only for now. We'll wire it later via Formspree/Resend. */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
            >
              Send (coming soon)
            </button>

            <p className="text-xs text-neutral-500">
              Note: This form is a placeholder. Next step is wiring delivery via
              Formspree or Resend.
            </p>
          </div>
        </Card>

        <div className="space-y-4">
          <Card
            title="Institutional / Allocator"
            desc="For allocators who want process clarity, reporting discipline, and governance framing."
          >
            <ul className="mt-1 space-y-2 text-sm text-neutral-300">
              <li>• Mandate & reporting expectations</li>
              <li>• Risk doctrine & drawdown governance</li>
              <li>• Portfolio Lab review (simulated → live later)</li>
            </ul>
          </Card>

          <Card
            title="Media / Speaking"
            desc="For interviews, podcasts, or written features on markets, regime thinking, and the REZIME philosophy."
          />

          <section className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Identity
            </p>
            <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
              REZIME by <span className="text-white font-semibold">paeteon</span>{" "}
              (<span className="text-white font-semibold">dasMustr</span>)
            </p>
            <p className="mt-2 text-xs text-neutral-500">
              Links/socials can be added here later without turning the page
              into a linktree.
            </p>
          </section>
        </div>
      </div>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-base font-semibold">Disclosures</h2>
        <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
          REZIME is educational documentation and research tooling. It does not
          provide investment advice. This website is not an offer to sell or a
          solicitation to buy any securities or services.
        </p>
      </section>

      <div className="flex flex-wrap gap-3 pt-6">
        <Link
          href="/"
          className="rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/5 transition"
        >
          ← Back to Home
        </Link>
        <Link
          href="/allocator"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
        >
          ← Back to Allocator
        </Link>
      </div>
    </section>
  );
}
