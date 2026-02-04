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
            Start here
          </p>

          <div className="flex flex-wrap gap-2">
            <Tag>New to markets</Tag>
            <Tag>ELI5</Tag>
            <Tag>Survive first</Tag>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            New to all this?
            <br />
            Good. Let’s make sure you survive long enough to get good.
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
            Most beginners don’t lose because they’re “bad at charts.”
            They lose because they don’t know what kind of market they’re in —
            so they do the wrong thing at the wrong time.
            <br />
            <br />
            This page is beginner-friendly on purpose.
            No jargon. No hype. Just the mental model that stops early damage.
            <br />
            <br />
            This applies to{" "}
            <span className="text-white font-semibold">
              investing, trading, long-term, short-term
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
              Start (ELI5) →
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

          {/* QUICK JUMP STRIP */}
          <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
              <span className="text-neutral-300">Jump to:</span>
              <JumpLink href="#reality" label="What markets really are" />
              <JumpLink href="#why" label="Why beginners get wrecked" />
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
              <li>• You’ll know when to do less (and why that’s smart).</li>
              <li>• You’ll stay in the game long enough to build real skill.</li>
            </ul>

            <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-sm font-semibold text-white">
                The #1 beginner rule
              </div>
              <div className="mt-2 text-sm leading-relaxed text-neutral-300">
                If you’re confused, you’re probably in{" "}
                <span className="text-white font-semibold">chop</span>.
                Confusion = reduce activity. Not “try harder.”
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
              Reality (ELI5)
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              What markets really are
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
              Markets aren’t built to reward participation.
              They reward preparation.
              <br />
              <br />
              The danger isn’t movement.
              The danger is doing “trend behavior” inside a choppy market —
              or doing “chop behavior” inside a trend.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <Block
              title="Markets change personality"
              desc="Sometimes they trend cleanly. Sometimes they chop and fake you out. Same behavior won’t work in both."
              tone="hard"
            />
            <Block
              title="Doing more can be worse"
              desc="Beginners often trade more when unsure. That’s usually when damage happens fastest."
            />
            <Block
              title="Survival is the first win"
              desc="You can’t learn if you’re out of the game. Staying alive is the first edge."
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
              The common trap
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              Why beginners get wrecked
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
              The mistake isn’t “wrong entry.”
              The mistake is acting like the environment doesn’t matter.
            </p>
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-2 text-sm text-neutral-300 leading-relaxed">
              <li>• They chase certainty in an uncertain environment</li>
              <li>• They increase activity when they should reduce it</li>
              <li>• They treat every day like it requires action</li>
              <li>• They confuse excitement with progress</li>
            </ul>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-sm font-semibold text-white">The shift</div>
              <div className="mt-2 text-sm leading-relaxed text-neutral-300">
                Stop asking: “What should I buy?”
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
              What changes
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              What REZIME does for you
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
              REZIME isn’t your strategy.
              <br />
              <span className="text-white font-semibold">
                It’s the safety layer that keeps you alive while you build one.
              </span>
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <Block
              title="It names the environment"
              desc="So you stop guessing. You can identify the market’s ‘mode’ instead of forcing a story."
              tone="hard"
            />
            <Block
              title="It adjusts your activity level"
              desc="When the environment is messy, you learn to do less — smaller, slower, more selective."
            />
            <Block
              title="It protects your time-in-market"
              desc="So you’re still here after 6–12 months, when most beginners quit."
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
              Core idea
            </div>
            <div className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Profit is later.
              <br />
              <span className="text-neutral-200">Survival is now.</span>
            </div>
            <div className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-300">
              If you survive long enough, experience builds.
              And when experience builds, edge eventually appears.
              REZIME is built to protect that timeline.
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
              Your route from beginner → resilient
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
              A clean sequence: start here → learn the map → use the tools → audit the proof.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Step n="1" title="New to Markets" desc="Get the survival model first." />
            <Step n="2" title="Learn the map" desc="Name the environment (stable / messy / reset)." />
            <Step n="3" title="Use the tools" desc="Turn context into posture rules." />
            <Step n="4" title="See proof" desc="Watch weekly posture in real conditions." />
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/observer"
              className="premium-card is-clickable relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
            >
              <Sheen className="rounded-full" />
              Go to Learn (Map) →
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
            Your method decides entries. REZIME decides the environment.
          </p>
        </section>
      </Reveal>
    </div>
  );
}
