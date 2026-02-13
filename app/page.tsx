// app/page.tsx
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

export default function HomePage() {
  return (
    <section className="space-y-12">
      <Reveal delayMs={0}>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
          <div className="space-y-6">
            {/* TAGS */}
            <div className="flex flex-wrap gap-2">
              <Tag>Beginner-safe</Tag>
              <Tag>Risk-first</Tag>
              <Tag>Method-neutral</Tag>
              <Tag>Calm by design</Tag>
            </div>

            {/* HERO */}
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
              If markets feel overwhelming,
              <br />
              start here.
            </h1>

            {/* SUBTEXT */}
            <p className="max-w-3xl text-base text-neutral-300 leading-relaxed">
              Confusion is normal. Stress is normal. Most people are not failing
              because they lack intelligence. They are simply exposed to unstable
              conditions too early.
              <br />
              <br />
              REZIME teaches one priority. Learn to survive first. Build skill
              in stable environments. Let results come later.
            </p>

            <p className="text-xs text-neutral-500">
              Educational framework. No signals. No predictions. No guarantees.
            </p>
          </div>
        </div>
      </Reveal>

      {/* THREE DOORS */}
      <Reveal delayMs={80}>
        <section className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              A simple structure
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Why. How. Proof.
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-neutral-300 leading-relaxed">
              Understand survival. Learn the framework. Examine the record.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <HomeCard
              tone="hard"
              title="Why"
              desc="Understand how market environments affect risk and why survival must come before performance."
              href="/orientation"
              cta="Orientation"
            />
            <HomeCard
              title="How"
              desc="Learn the REZIME framework and how to read conditions without relying on signals."
              href="/operator"
              cta="Framework"
            />
            <HomeCard
              title="Proof"
              desc="Review time-stamped applications of the framework. Context, decisions, and outcomes."
              href="/allocator"
              cta="Portfolio Lab"
            />
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">Scope</p>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              REZIME is a risk framework designed to help you manage exposure
              across different market methods. It does not provide signals or financial advice.
            </p>
          </div>
        </section>
      </Reveal>
    </section>
  );
}
