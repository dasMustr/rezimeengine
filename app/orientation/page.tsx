// app/orientation/page.tsx
import Link from "next/link";
import Reveal from "../components/Reveal";
import Sheen from "../components/Sheen";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-neutral-300">
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-6">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function OrientationPage() {
  return (
    <div className="space-y-24">

      {/* HERO */}
      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">Start</p>

          <div className="flex flex-wrap gap-2">
            <Tag>Beginner safe</Tag>
            <Tag>No jargon</Tag>
            <Tag>Survival first</Tag>
            <Tag>Regimes → behavior</Tag>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
            Markets aren’t mysterious.
            <br />
            They’re just prices moving — like everything else.
          </h1>

          <p className="max-w-2xl text-sm text-neutral-300 leading-relaxed">
            If you’re new, the fear is valid. Markets are presented like a secret world.
            But you’re not entering a different universe — you’re entering the same game.
            <br /><br />
            REZIME helps you survive long enough to develop your edge.
          </p>

          <div className="flex gap-3">
            <a href="#prices" className="premium-card is-clickable rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium hover:bg-white/15 transition">
              Start →
            </a>
            <Link href="/operator" className="text-sm text-neutral-400 hover:text-white transition self-center">
              Skip to Playbook →
            </Link>
          </div>
        </section>
      </Reveal>

      {/* SCREEN 2 — PRICE MOVEMENT */}
      <Reveal delayMs={60}>
        <section id="prices" className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-neutral-400">Beginner layer</p>
          <h2 className="text-xl font-semibold text-white">You already understand price movement</h2>
          <p className="text-sm text-neutral-300">Markets aren’t special. They’re just prices changing.</p>

          <div className="grid gap-4 lg:grid-cols-3">
            <Card title="Eggs cost more this year" desc="That’s price movement." />
            <Card title="Rare in-game item spikes" desc="Supply & demand." />
            <Card title="Concert tickets resell high" desc="Same logic." />
          </div>
        </section>
      </Reveal>

      {/* SCREEN 3 — HEADLINE EFFECT */}
      <Reveal delayMs={120}>
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-neutral-400">The headline effect</p>
          <h2 className="text-xl font-semibold text-white">“Billions wiped out” sounds terrifying</h2>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-lg font-semibold text-white">Prices moved. That’s it.</p>
            <p className="mt-3 text-sm text-neutral-300">
              News amplifies emotion because emotion gets attention.
            </p>
          </div>
        </section>
      </Reveal>

      {/* SCREEN 4 — REGIME MISMATCH */}
      <Reveal delayMs={180}>
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-neutral-400">Reality layer</p>
          <h2 className="text-xl font-semibold text-white">You didn’t fail. You were active in the wrong regime.</h2>

          <div className="grid gap-4 lg:grid-cols-3">
            <Card title="Confusion" desc="Regimes are conflicting." />
            <Card title="Urgency" desc="Instability triggers action bias." />
            <Card title="Exhaustion" desc="Cognitive overload from chaos." />
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-5 text-sm text-neutral-300">
            <span className="text-white font-semibold">Beginner safety rule:</span> If confused, reduce activity. Confusion means the regime is unstable.
          </div>
        </section>
      </Reveal>

      {/* SCREEN 5 — PROFESSIONAL MYTH */}
      <Reveal delayMs={240}>
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-neutral-400">The intimidation myth</p>
          <h2 className="text-xl font-semibold text-white">Those “professional screens” aren’t a different game</h2>

          <div className="text-center text-lg font-semibold text-white">You see what they see.</div>

          <div className="grid gap-4 lg:grid-cols-3">
            <Card title="A chart" desc="Just price history visualized." />
            <Card title="Tools" desc="Lenses, not guarantees." />
            <Card title="Edge" desc="Built through time." />
          </div>
        </section>
      </Reveal>

      {/* SCREEN 6 — POWER STATEMENT */}
      <Reveal delayMs={300}>
        <section className="calm-block rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
          <p className="text-2xl font-semibold text-white">
            Most people don’t lack talent.
            <br />They lack survivability.
          </p>
          <p className="mt-3 text-sm text-neutral-300">REZIME buys you time.</p>
        </section>
      </Reveal>

      {/* SCREEN 7 — WHAT REZIME IS */}
      <Reveal delayMs={360}>
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-neutral-400">What REZIME is</p>
          <h2 className="text-xl font-semibold text-white">A regime map — not a signal service</h2>

          <div className="grid gap-4 lg:grid-cols-3">
            <Card title="Names the regime" desc="So you stop guessing." />
            <Card title="Changes posture" desc="Behavior matches stability." />
            <Card title="Protects time" desc="So you’re still here later." />
          </div>
        </section>
      </Reveal>

      {/* SCREEN 8 — ROUTE */}
      <Reveal delayMs={420}>
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-neutral-400">Your route</p>
          <h2 className="text-xl font-semibold text-white">Start → Playbook → Proof</h2>

          <div className="grid gap-4 lg:grid-cols-3">
            <Card title="Step 1" desc="Learn survivability." />
            <Card title="Step 2" desc="Learn regime interpretation." />
            <Card title="Step 3" desc="Watch proof unfold." />
          </div>

          <div className="flex gap-3 pt-4">
            <Link href="/operator" className="premium-card is-clickable rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm hover:bg-white/15 transition">
              Enter Playbook →
            </Link>
            <Link href="/allocator" className="premium-card is-clickable rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-neutral-200 hover:bg-white/10 transition">
              See Proof →
            </Link>
          </div>
        </section>
      </Reveal>

    </div>
  );
}
