import Link from "next/link";
import Reveal from "../components/Reveal";
import Sheen from "../components/Sheen";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-neutral-300">
      {children}
    </span>
  );
}

function Block({
  title,
  desc,
  tone = "soft",
}: {
  title: string;
  desc: string;
  tone?: "soft" | "hard";
}) {
  return (
    <div
      className={
        tone === "hard"
          ? "calm-block rounded-2xl border border-white/15 bg-white/10 p-6"
          : "calm-block rounded-2xl border border-white/10 bg-black/30 p-6"
      }
    >
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-neutral-300">{desc}</div>
    </div>
  );
}

export default function OrientationPage() {
  return (
    <div className="space-y-16">

      {/* HERO */}
      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Beginner
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag>First time here</Tag>
            <Tag>No finance knowledge needed</Tag>
            <Tag>Calm start</Tag>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            This world isn’t new to you.
            <br />
            You’ve already been living in it.
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
            Markets feel scary because they’re presented like a mysterious financial machine.
            <br /><br />
            But they’re not.
            <br /><br />
            They’re the same thing you see every day:
            prices changing because people decide what things are worth.
          </p>
        </section>
      </Reveal>

      {/* EVERYDAY EXAMPLES */}
      <Reveal delayMs={60}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            You’ve seen this before
          </h2>

          <div className="grid gap-4 lg:grid-cols-3">
            <Block
              title="Prices go up and down"
              desc="Eggs cost more this year. Rent changes. Phones get cheaper after launch. That’s price movement."
              tone="hard"
            />
            <Block
              title="Demand changes value"
              desc="Concert tickets sell out → resale price jumps. A rare game item becomes expensive. Same idea."
            />
            <Block
              title="Nothing mysterious"
              desc="This isn’t finance. It’s supply and demand — people deciding what something is worth."
              tone="hard"
            />
          </div>
        </section>
      </Reveal>

      {/* MEDIA FEAR */}
      <Reveal delayMs={110}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            “Billions wiped out” — why it sounds terrifying
          </h2>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 text-sm text-neutral-300">
            <p>
              You might see headlines like:
              <br />
              <span className="text-white font-semibold">“$2 trillion wiped from markets.”</span>
            </p>

            <p>
              That sounds like disaster.
              But what actually happened?
            </p>

            <p>
              Prices moved. That’s normal.
            </p>

            <p>
              When prices rise, nobody says:
              <br />
              “Trillions magically appeared.”
            </p>

            <p>
              News focuses on fear because fear gets attention.
              Calm explanations don’t get clicks.
            </p>

            <p className="text-neutral-400">
              Understanding this removes the illusion that markets are constantly on the edge of collapse.
            </p>
          </div>
        </section>
      </Reveal>

      {/* WHY BEGINNERS GET HURT */}
      <Reveal delayMs={160}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            So why do beginners get hurt?
          </h2>

          <div className="grid gap-4 lg:grid-cols-3">
            <Block
              title="Not because markets are evil"
              desc="Markets aren’t trying to trap you. Movement is normal."
            />
            <Block
              title="Not because you're incapable"
              desc="Everyone starts without experience. That’s not failure."
              tone="hard"
            />
            <Block
              title="It’s movement without understanding"
              desc="Like stepping onto a fast escalator without expecting it to move."
            />
          </div>
        </section>
      </Reveal>

      {/* CORE IDEA */}
      <Reveal delayMs={210}>
        <section className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-10">
            <div className="text-xs uppercase tracking-widest text-neutral-400">
              The simple truth
            </div>
            <div className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Markets move in different regimes.
            </div>
            <div className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-300">
              The mistake beginners make is acting the same in every regime.
              <br /><br />
              That’s what creates fear, damage, and confusion.
              <br /><br />
              REZIME exists to help you recognize regimes —
              so your behavior matches reality.
            </div>
          </div>
        </section>
      </Reveal>

      {/* BRIDGE */}
      <Reveal delayMs={260}>
        <section className="space-y-4 text-center">
          <p className="text-sm text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Next, we explain why things sometimes feel calm…  
            and sometimes feel chaotic.
            <br /><br />
            That’s where regimes come in.
          </p>

          <Link
            href="/observer"
            className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-medium transition hover:bg-white/15"
          >
            <Sheen className="rounded-full" />
            Continue to Reality →
          </Link>
        </section>
      </Reveal>
    </div>
  );
}
