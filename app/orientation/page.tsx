// app/orientation/page.tsx
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

function Step({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="text-xs uppercase tracking-widest text-neutral-400">
        Step {n}
      </div>
      <div className="mt-2 text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-neutral-300">{desc}</div>
    </div>
  );
}

function JumpLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 transition hover:bg-white/10"
    >
      {label} →
    </a>
  );
}

export default function OrientationPage() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Market Orientation
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag>Briefing room</Tag>
            <Tag>Survivability</Tag>
            <Tag>Regimes</Tag>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Before strategy, understand the battlefield.
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
            Markets aren’t a puzzle to solve — they’re an environment to survive.
            <br />
            <br />
            Most people don’t lose because they lack intelligence.
            They lose because they act without understanding what kind of market they’re inside.
            <br />
            <br />
            This applies to{" "}
            <span className="text-white font-semibold">
              investing, trading, systematic, macro
            </span>{" "}
            — anything that touches markets.
          </p>

          {/* HERO CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#reality"
              className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
            >
              <Sheen className="rounded-full" />
              Start briefing →
            </a>

            <Link
              href="/observer"
              className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
            >
              <Sheen className="rounded-full" />
              Skip to the Map →
            </Link>

            <Link
              href="/"
              className="text-sm text-neutral-400 hover:text-white transition self-center"
            >
              Back to Home
            </Link>
          </div>

          {/* QUICK JUMP STRIP (briefing-room feel) */}
          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
              <span className="text-neutral-300">Jump to:</span>
              <JumpLink href="#reality" label="Reality" />
              <JumpLink href="#why" label="Why people struggle" />
              <JumpLink href="#what" label="What REZIME changes" />
              <JumpLink href="#flow" label="Your route" />
            </div>
          </div>

          {/* PROMISE */}
          <div className="calm-block rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-widest text-neutral-400">
              What you’ll leave with
            </div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300 leading-relaxed">
              <li>• You’ll stop treating every market like the same market.</li>
              <li>• You’ll know when to reduce activity (and why).</li>
              <li>• You’ll survive longer — long enough to develop real edge.</li>
            </ul>

            <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-sm font-semibold text-white">
                One rule to remember
              </div>
              <div className="mt-2 text-sm leading-relaxed text-neutral-300">
                If you’re confused, you’re probably in{" "}
                <span className="text-white font-semibold">Siege</span>.
                Confusion is a signal to reduce activity — not to “try harder.”
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* REALITY */}
      <Reveal delayMs={80}>
        <section id="reality" className="scroll-mt-28 space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Reality
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              The reality of markets
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
              Markets are not built to reward participation.
              They are built to transfer capital from the unprepared to the prepared.
              <br />
              <br />
              The danger is not price movement.
              The danger is misunderstanding the environment.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <Block
              title="Markets change character"
              desc="The same behavior does not work everywhere. A method that thrives in trends can get destroyed in chop."
              tone="hard"
            />
            <Block
              title="Activity ≠ progress"
              desc="Doing more often causes more damage. When uncertainty rises, the correct move is usually less activity — not more."
            />
            <Block
              title="Survival is the first edge"
              desc="You can only develop skill if you are still in the game. Staying alive comes first."
              tone="hard"
            />
          </div>
        </section>
      </Reveal>

      {/* WHY PEOPLE STRUGGLE */}
      <Reveal delayMs={130}>
        <section id="why" className="scroll-mt-28 space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              The common failure
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              Why most participants struggle
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
              The problem is not effort. The problem is context.
            </p>
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-2 text-sm text-neutral-300 leading-relaxed">
              <li>• They try to predict instead of reading the environment</li>
              <li>• They increase activity when uncertainty rises</li>
              <li>• They treat all market conditions the same</li>
              <li>• They measure success by excitement, not survivability</li>
            </ul>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-sm font-semibold text-white">The shift</div>
              <div className="mt-2 text-sm leading-relaxed text-neutral-300">
                Stop asking: “Where will price go?”
                <br />
                Start asking:{" "}
                <span className="text-white font-semibold">
                  “What kind of market is this?”
                </span>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* WHAT REZIME DOES */}
      <Reveal delayMs={180}>
        <section id="what" className="scroll-mt-28 space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              What’s different
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              What REZIME does differently
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
              REZIME is not your strategy.
              <br />
              <span className="text-white font-semibold">
                It protects you while you build one.
              </span>
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <Block
              title="It names the environment"
              desc="You stop guessing what kind of market this is. You can name the regime instead of inventing explanations."
              tone="hard"
            />
            <Block
              title="It changes your activity level"
              desc="You learn when to participate, when to reduce activity, and when to step back and re-anchor."
            />
            <Block
              title="It protects time-in-market"
              desc="You stay alive long enough to gain real experience — without self-inflicted blowups."
              tone="hard"
            />
          </div>
        </section>
      </Reveal>

      {/* CORE SHIFT */}
      <Reveal delayMs={230}>
        <section className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-10">
            <div className="text-xs uppercase tracking-widest text-neutral-400">
              Core shift
            </div>
            <div className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Winning comes later.
              <br />
              <span className="text-neutral-200">Not dying comes first.</span>
            </div>
            <div className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-300">
              Most systems teach entries. This framework teaches survivability —
              matching behavior to environment so you stop donating capital during the wrong phase.
            </div>
          </div>
        </section>
      </Reveal>

      {/* HOW IT FLOWS */}
      <Reveal delayMs={280}>
        <section id="flow" className="scroll-mt-28 space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Your route
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              Your orientation route
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
              A clean sequence: orient → learn the map → use the tools → audit the proof.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Step
              n="1"
              title="Orientation"
              desc="Understand what markets are and why survivability matters."
            />
            <Step
              n="2"
              title="Learn the regime map"
              desc="Name the environment (stable / conflicted / reset)."
            />
            <Step
              n="3"
              title="Use the tools"
              desc="Turn context into posture and behavior rules."
            />
            <Step
              n="4"
              title="Audit the proof"
              desc="See weekly posture in real conditions (no hype)."
            />
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/observer"
              className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
            >
              <Sheen className="rounded-full" />
              Go to Learn (Regime Map) →
            </Link>

            <Link
              href="/operator"
              className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-neutral-200 transition hover:bg-white/10"
            >
              <Sheen className="rounded-full" />
              Enter Playbook →
            </Link>

            <Link
              href="/allocator"
              className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm text-neutral-300 transition hover:bg-white/[0.06]"
            >
              <Sheen className="rounded-full" />
              See Proof (Portfolio Lab) →
            </Link>
          </div>

          <p className="text-xs text-neutral-500 leading-relaxed">
            REZIME is a context layer. Your method decides entries. REZIME decides the environment.
          </p>
        </section>
      </Reveal>
    </div>
  );
}
