import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import Sheen from "@/app/components/Sheen";

export default function CheckoutPlaceholder() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 space-y-12">
      <Reveal delayMs={0}>
        <section className="space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Access request
          </p>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Access is opening soon.
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl mx-auto">
            We’re finalizing the access system so everything stays aligned with
            the survival-first philosophy.
            <br />
            No hype. No rushed launches. No chaos.
          </p>
        </section>
      </Reveal>

      <Reveal delayMs={80}>
        <section className="calm-block rounded-3xl border border-white/10 bg-white/5 p-8 text-center space-y-5">
          <div className="text-lg font-semibold text-white">
            What happens next
          </div>

          <ul className="space-y-2 text-sm text-neutral-300 leading-relaxed">
            <li>• Access tiers will open in phases</li>
            <li>• Early users will receive onboarding guidance</li>
            <li>• The goal is stability, not scale-at-all-costs</li>
          </ul>

          <p className="text-xs text-neutral-500 leading-relaxed max-w-md mx-auto">
            REZIME provides educational and analytical tools only.
            Not financial advice. No signals. No performance guarantees.
          </p>
        </section>
      </Reveal>

      <Reveal delayMs={140}>
        <section className="text-center space-y-4">
          <Link
            href="/contact"
            className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/15"
          >
            <Sheen className="rounded-full" />
            Join early access list →
          </Link>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/orientation" className="text-sm text-neutral-400 hover:text-white transition">
              New to Markets →
            </Link>
            <Link href="/pricing" className="text-sm text-neutral-400 hover:text-white transition">
              Back to Access →
            </Link>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
