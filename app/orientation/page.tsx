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

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
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
      <Reveal delayMs={0}>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Start here
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag>New to markets</Tag>
            <Tag>Beginner-friendly</Tag>
            <Tag>Survival first</Tag>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            New to all this?
            <br />
            Good. Let’s begin safely.
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
            Most people don’t avoid markets because they’re lazy.
            They avoid them because they’re afraid of making a mistake they can’t recover from.
            <br />
            <br />
            REZIME starts with a simple idea:
            markets move through different environments — and your behavior has to change with them.
            <br />
            <br />
            This page is written for clarity on purpose.
            No jargon. No hype. Just the mental model that prevents early damage.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#reality"
              className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
            >
              <Sheen className="rounded-full" />
              Start → 
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

          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
              <span className="text-neutral-300">Jump to:</span>
              <JumpLink href="#reality" label="What markets are" />
              <JumpLink href="#why" label="Why people get hurt" />
              <JumpLink href="#what" label="What REZIME changes" />
              <JumpLink href="#flow" label="Your route" />
            </div>
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-widest text-neutral-400">
              What you’ll leave with
            </div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300 leading-relaxed">
              <li>• You’ll stop treating every market like the same market.</li>
              <li>• You’ll know when doing less is the smartest move.</li>
              <li>• You’ll build calm confidence through environment awareness.</li>
            </ul>

            <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-sm font-semibold text-white">
                The beginner safety rule
              </div>
              <div className="mt-2 text-sm leading-relaxed text-neutral-300">
                If you’re confused, reduce activity.
                Confusion usually means the environment is unstable — not that you should “try harder.”
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={80}>
        <section id="reality" className="scroll-mt-28 space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Reality (beginner)
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              What markets really are
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
              Markets are human behavior in motion.
              They move because people feel: fear, greed, hope, panic, confidence.
              <br />
              <br />
              The danger isn’t movement.
              The danger is using the wrong behavior for the environment you’re in.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <Block
              title="Environments change"
              desc="Sometimes markets trend cleanly. Sometimes they become tense. Sometimes they become chaotic. The same behavior won’t work everywhere."
              tone="hard"
            />
            <Block
              title="More activity isn’t more progress"
              desc="Beginners often do more when unsure. That’s usually when mistakes become emotional damage."
            />
            <Block
              title="Survival is the first win"
              desc="You can’t learn if you’re out of the game. Staying present long enough is the foundation."
              tone="hard"
            />
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={130}>
        <section id="why" className="scroll-mt-28 space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              The common trap
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              Why beginners get hurt
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
              The mistake usually isn’t a “bad entry.”
              It’s acting without recognizing the environment.
            </p>
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-2 text-sm text-neutral-300 leading-relaxed">
              <li>• They chase certainty in uncertainty</li>
              <li>• They increase activity when they should reduce it</li>
              <li>• They feel pressure to act every day</li>
              <li>• They confuse excitement with progress</li>
            </ul>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-sm font-semibold text-white">The shift</div>
              <div className="mt-2 text-sm leading-relaxed text-neutral-300">
                Stop asking: “What should I buy?”
                <br />
                Start asking:{" "}
                <span className="text-white font-semibold">
                  “What kind of market environment is this?”
                </span>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={180}>
        <section id="what" className="scroll-mt-28 space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              What changes
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              What REZIME changes for you
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
              REZIME isn’t your strategy.
              <br />
              <span className="text-white font-semibold">
                It’s the safety layer that keeps you steady while you build one.
              </span>
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <Block
              title="It names the environment"
              desc="So you stop guessing. You identify the market’s mode before you act."
              tone="hard"
            />
            <Block
              title="It guides behavior"
              desc="When the environment is unstable, you learn to do less — smaller, slower, more selective."
            />
            <Block
              title="It protects time-in-market"
              desc="So you’re still here after 6–12 months — when most beginners quietly disappear."
              tone="hard"
            />
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={230}>
        <section className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-10">
            <div className="text-xs uppercase tracking-widest text-neutral-400">
              Core idea
            </div>
            <div className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Survival comes first.
              <br />
              <span className="text-neutral-200">Profit comes later.</span>
            </div>
            <div className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-300">
              If you survive long enough, experience builds.
              And when experience builds, self-mastery becomes possible.
              REZIME is built to protect that timeline.
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={280}>
        <section id="flow" className="scroll-mt-28 space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Your route
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              A calm route from beginner → resilient
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
              Start here → learn environments → apply behavior rules → see proof over time.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Step n="1" title="Start Here" desc="Get the survival model first." />
            <Step n="2" title="Learn" desc="Name the environment before acting." />
            <Step n="3" title="Playbook" desc="Turn context into posture rules." />
            <Step n="4" title="Proof" desc="Watch learning unfold over time." />
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/observer"
              className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
            >
              <Sheen className="rounded-full" />
              Go to Learn →
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
              See Proof →
            </Link>
          </div>

          <p className="text-xs text-neutral-500 leading-relaxed">
            Your method decides entries. REZIME helps you recognize the environment.
          </p>
        </section>
      </Reveal>
    </div>
  );
}
