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

function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      {title && (
        <h2 className="text-xl text-white/90 mb-6 tracking-tight">{title}</h2>
      )}
      <div className="space-y-4 text-neutral-300 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="text-neutral-200">

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20">
        <Reveal>
          <div className="flex flex-wrap gap-2 mb-6">
            <Tag>Beginner-safe</Tag>
            <Tag>Risk aware</Tag>
            <Tag>Calm by design</Tag>
          </div>

          <h1 className="text-4xl md:text-5xl text-white leading-tight tracking-tight mb-6">
            The market feels dangerous
            <br />
            because feedback is immediate.
          </h1>

          <p className="text-neutral-300 text-lg mb-4">
            Mistakes become permanent faster than understanding forms.
          </p>

          <p className="text-neutral-400 mb-10">
            REZIME slows the damage so experience can catch up.
          </p>

          <div className="flex gap-4">
            <Link
              href="/orientation"
              className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm hover:bg-white/15 transition"
            >
              Start here
            </Link>

            <Link
              href="/framework"
              className="rounded-full border border-white/10 px-6 py-3 text-sm text-neutral-400 hover:text-white transition"
            >
              What this is
            </Link>
          </div>
        </Reveal>
      </section>

      {/* RECOGNITION SECTION */}
      <Section title="What usually happens">
        <div className="grid md:grid-cols-3 gap-6">

          <Card>
            <p>You wait for clarity</p>
            <p className="text-neutral-500">It never feels clear</p>
            <p className="text-neutral-400 mt-3">So you act late</p>
          </Card>

          <Card>
            <p>You act early</p>
            <p className="text-neutral-500">Noise punishes you</p>
            <p className="text-neutral-400 mt-3">Confidence drops</p>
          </Card>

          <Card>
            <p>You finally understand</p>
            <p className="text-neutral-500">But the account is smaller</p>
            <p className="text-neutral-400 mt-3">So you hesitate again</p>
          </Card>

        </div>

        <p className="text-neutral-400 pt-6">
          The problem is not knowledge.
          <br />
          The problem is learning speed versus consequence speed.
        </p>
      </Section>

      {/* WHAT REZIME DOES */}
      <Section title="What REZIME does">
        <p>
          REZIME labels conditions before decisions.
        </p>

        <p className="text-neutral-400">
          It does not tell you what to do.
          It tells you when behavior becomes dangerous.
        </p>

        <div className="grid md:grid-cols-3 gap-6 pt-6">

          <Card>
            <h3 className="text-white mb-2">Stable</h3>
            <p className="text-neutral-400">
              Actions have time to work.
              Mistakes stay small.
            </p>
          </Card>

          <Card>
            <h3 className="text-white mb-2">Messy</h3>
            <p className="text-neutral-400">
              Signals conflict.
              Activity increases error.
            </p>
          </Card>

          <Card>
            <h3 className="text-white mb-2">Reset</h3>
            <p className="text-neutral-400">
              Conditions changed.
              Old assumptions no longer apply.
            </p>
          </Card>

        </div>
      </Section>

      {/* CLOSING */}
      <Section>
        <p>
          You are not trying to be right.
        </p>

        <p className="text-neutral-400">
          You are trying to stay long enough
          for the environment to make sense.
        </p>

        <div className="pt-8">
          <Link
            href="/orientation"
            className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm hover:bg-white/15 transition"
          >
            Enter orientation
          </Link>
        </div>
      </Section>

      <footer className="text-center text-neutral-600 text-sm py-12">
        Educational framework. No signals. No predictions. No guarantees.
      </footer>
    </main>
  );
}