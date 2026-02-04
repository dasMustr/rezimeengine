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

export default function HomePage() {
  return (
    <section className="space-y-12">
      <Reveal delayMs={0}>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Tag>Market regimes</Tag>
              <Tag>Behavior over prediction</Tag>
              <Tag>Survival infrastructure</Tag>
            </div>

            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
              You don’t fail because you lack a strategy.
              <br />
              You fail because you don’t survive long enough to develop one.
            </h1>

            <p className="max-w-2xl text-base text-neutral-300">
              REZIME is a market survival framework.
              <br />
              It doesn’t teach you how to win — it helps you stop dying to the wrong environment,
              so you stay in the game long enough for real skill to emerge.
            </p>

            {/* PRIMARY SEGMENTATION (2 buttons) */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/start"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                <Sheen className="rounded-full" />
                I’m new to markets →
              </Link>

              <Link
                href="/observer"
                className="premium-card is-clickable group relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
              >
                <Sheen className="rounded-full" />
                I already trade →
              </Link>

              {/* Quiet secondary links */}
              <div className="flex items-center gap-4 pl-1">
                <Link
                  href="/allocator"
                  className="text-sm text-neutral-400 hover:text-white transition"
                >
                  Proof →
                </Link>
                <Link
                  href="/pricing"
                  className="text-sm text-neutral-400 hover:text-white transition"
                >
                  Pricing →
                </Link>
              </div>
            </div>

            <p className="text-xs text-neutral-500">
              Survive first → build skill → then care about performance.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
