import Link from "next/link";
import Reveal from "../components/Reveal";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
      {children}
    </span>
  );
}

function Section({
  id,
  eyebrow,
  title,
  desc,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  desc?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-5">
      <div className="space-y-2">
        {eyebrow && (
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        {desc && (
          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            {desc}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

function ToolCard({
  title,
  subtitle,
  bullets,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
}) {
  return (
    <div className="premium-card relative rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="text-sm text-neutral-300 leading-relaxed">{subtitle}</p>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-neutral-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TocLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="block rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-300 hover:bg-white/10 hover:text-white transition"
    >
      {label}
    </a>
  );
}

function MiniCard({
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
          ? "rounded-2xl border border-white/15 bg-white/10 p-6"
          : "rounded-2xl border border-white/10 bg-black/30 p-6"
      }
    >
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{desc}</p>
    </div>
  );
}

function RuleRow({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  return (
    <div className="flex flex-col gap-2 border-t border-white/10 pt-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="text-xs uppercase tracking-widest text-neutral-400">
        {label}
      </div>
      <div className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
        {text}
      </div>
    </div>
  );
}

export default function OperatorPage() {
  return (
    <div className="space-y-14">
      {/* HERO */}
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Operator Portal
          </p>

          <div className="flex flex-wrap gap-2">
            <Pill>Map, not signals</Pill>
            <Pill>HTF → MTF → LTF relationships</Pill>
            <Pill>Time-in-market posture</Pill>
          </div>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Tools + rules for reading regimes.
          </h1>

          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            Operator is for practitioners. It explains how to interpret REZIME Engine,
            Sync, and Battle Lines. It does not tell you to buy or sell.
            The goal is clarity. You stay aligned with the dominant Empire and you survive transitions.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/observer"
              className="premium-card relative rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 hover:bg-white/10 transition"
            >
              ← Observer
            </Link>
            <Link
              href="/allocator"
              className="premium-card relative rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-300 hover:bg-white/5 transition"
            >
              Allocator →
            </Link>
          </div>
        </section>

      {/* OPERATING PRINCIPLES */}
      <Reveal delayMs={90}>
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Operating principles
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
            Context first. Execution second.
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-neutral-300 leading-relaxed">
            REZIME is a context layer. It helps you know what battle you are in.
            Then you apply your own entry method, sizing, and discipline.
          </p>
        </section>
      </Reveal>

      {/* LAYOUT: TOC + CONTENT */}
      <Reveal delayMs={140}>
        <section className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* TOC */}
          <aside className="space-y-3 lg:sticky lg:top-24 lg:h-fit">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Contents
            </p>

            <div className="grid gap-2">
              <TocLink href="#stack" label="The Stack" />
              <TocLink href="#alignment" label="Full Alignment vs Transitions" />
              <TocLink href="#rules" label="Interpretation Rules" />
              <TocLink href="#doctrine" label="Operator Doctrine" />
              <TocLink href="#cases" label="Case Study Slots" />
              <TocLink href="#ip" label="What’s Shown vs Hidden" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-neutral-400 leading-relaxed">
              Tip: Observer is the “what.” Operator is the “how.”
            </div>
          </aside>

          {/* CONTENT */}
          <div className="space-y-12">
            {/* STACK */}
            <Reveal delayMs={0}>
              <Section
                id="stack"
                eyebrow="System architecture"
                title="The Stack"
                desc="Three indicators. Minimal redundancy. Each answers a different question."
              >
                <div className="grid gap-4 lg:grid-cols-3">
                  <ToolCard
                    title="REZIME Engine"
                    subtitle="What regime are we in?"
                    bullets={[
                      "Bull Empire / Bear Empire dominance",
                      "Transition intensity (Rebellion → Uprising)",
                      "Revolution = confirmed regime flip",
                    ]}
                  />
                  <ToolCard
                    title="REZIME Sync"
                    subtitle="Are timeframes aligned?"
                    bullets={[
                      "HTF–MTF–LTF alignment at a glance",
                      "Shows where conflict begins (usually LTF first)",
                      "Helps you stop fighting structure",
                    ]}
                  />
                  <ToolCard
                    title="REZIME Battle Lines"
                    subtitle="Where is the battlefield?"
                    bullets={[
                      "Territory walls (rolling bounds)",
                      "Wide walls = cleaner holds / clearer runway",
                      "Tight walls = compression / decision zone",
                    ]}
                  />
                </div>
              </Section>
            </Reveal>

            {/* FULL ALIGNMENT VS TRANSITIONS */}
            <Reveal delayMs={90}>
              <Section
                id="alignment"
                eyebrow="Core mechanic"
                title="Full Alignment vs Transitions"
                desc="This is the part most traders are missing. If you can name the phase, you stop making phase-mismatched decisions."
              >
                <div className="grid gap-4 lg:grid-cols-2">
                  <MiniCard
                    tone="hard"
                    title="Full Alignment (all 3 TF agree)"
                    desc="This is a strong Empire. It is usually not the place to be a hero. If you are aligned, you focus on holding and reducing churn. If you are not in, you wait for cracks."
                  />
                  <MiniCard
                    title="Transition ladder (conflict escalates upward)"
                    desc="Transitions usually start at the LTF, then climb into MTF, then HTF. Your job is not to predict the flip. Your job is to see the escalation early and adjust posture before the storm grows."
                  />
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold text-white">
                    The escalation storyboard
                  </p>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    Think of it like pressure building in layers. Early phases have the best RR,
                    but they are noisy. Later phases are safer, but RR is worse.
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      ["Standoff", "LTF challenges the Empire and gets pushed back."],
                      ["Rebellion", "LTF starts winning. Instability is real."],
                      ["Deadlock", "The fight spreads. Chops and fakeouts increase."],
                      ["Uprising", "MTF is challenged or flips. The storm is obvious."],
                      ["Siege", "HTF is pressured. Old structure is not safe."],
                      ["Revolution", "HTF flips. A new Empire begins forming."],
                    ].map(([name, desc]) => (
                      <div
                        key={name}
                        className="rounded-xl border border-white/10 bg-black/30 p-4"
                      >
                        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white">
                          {name}
                        </span>
                        <div className="mt-3 text-sm text-neutral-300 leading-relaxed">
                          {desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
                    Best operator habit: never be contrarian inside Full Alignment. Wait until cracks appear.
                  </p>
                </div>
              </Section>
            </Reveal>

            {/* RULES */}
            <Reveal delayMs={170}>
              <Section
                id="rules"
                eyebrow="How to read it"
                title="Interpretation Rules"
                desc="These rules produce posture. They do not produce entries."
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <RuleRow
                    label="Rule 1"
                    text="Start with the Empire. If Engine shows a clear Empire, your default posture is to align with it. Do not treat minor counter-moves as reversals."
                  />
                  <RuleRow
                    label="Rule 2"
                    text="Rebellion is a warning, not a command. It means volatility and counterpressure increased. Reduce overconfidence. Tighten your personal execution rules."
                  />
                  <RuleRow
                    label="Rule 3"
                    text="Uprising is when you shift into survival mode. Do less, not more. Reduce exposure. Avoid forcing new trades in messy structure."
                  />
                  <RuleRow
                    label="Rule 4"
                    text="Revolution is a reset. If the regime flips, the old assumptions are invalid. You rebuild your plan under the new Empire."
                  />
                  <RuleRow
                    label="Rule 5"
                    text="Battle Lines are your battlefield map. Wide walls usually mean cleaner holds. Tight walls usually mean compression and an approaching decision point."
                  />

                  <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
                    Reminder: REZIME supplements any method. It adds regime context to your own execution.
                  </p>
                </div>
              </Section>
            </Reveal>

            {/* DOCTRINE */}
            <Reveal delayMs={250}>
              <Section
                id="doctrine"
                eyebrow="How you use it"
                title="Operator Doctrine"
                desc="The goal is to make risk small early, then let time-in-market do the heavy lifting."
              >
                <div className="grid gap-4 lg:grid-cols-2">
                  <MiniCard
                    tone="hard"
                    title="Entry posture"
                    desc="You prefer a single clean entry at the smallest meaningful confluence. Often this is when LTF and MTF begin to re-align after a pullback. You avoid stacking entries just to feel busy."
                  />
                  <MiniCard
                    tone="hard"
                    title="Hold posture"
                    desc="Once aligned, you reduce churn. You want to hold through the right phase, not micro-manage every candle. If Full Alignment returns, that supports holding."
                  />
                  <MiniCard
                    title="Reduce posture"
                    desc="If Rebellion grows or Uprising appears, you reduce exposure. This is where people usually do the opposite and get chopped. You aim for composure."
                  />
                  <MiniCard
                    title="Exit posture"
                    desc="Exit is not “took profit.” Exit is “structure broke” on the timeframe that matters to your plan. A real regime flip changes the environment, so you stop pretending the old plan still applies."
                  />
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold text-white">
                    The point of the doctrine
                  </p>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    Most stress comes from not knowing what battle you are in. REZIME gives you the battle map.
                    When you understand the battle, the mind calms down. Then you can act with discipline.
                  </p>
                </div>
              </Section>
            </Reveal>

            {/* CASES */}
            <Reveal delayMs={330}>
              <Section
                id="cases"
                eyebrow="Proof library"
                title="Case Study Slots (placeholders)"
                desc="Later: paste screenshots of the regime strip only. Keep construction private. Show behavior, not ingredients."
              >
                <div className="grid gap-4 lg:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                    <p className="text-sm font-semibold text-white">2020 Crash</p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      Fast escalation from Rebellion to Revolution. Shows why survival mode matters.
                    </p>
                    <p className="mt-3 text-xs text-neutral-500">Screenshot slot</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                    <p className="text-sm font-semibold text-white">BTC Cycle</p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      Long Empires, fewer rebellions. Shows why HTF tends to be cleaner.
                    </p>
                    <p className="mt-3 text-xs text-neutral-500">Screenshot slot</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                    <p className="text-sm font-semibold text-white">Mean Reversion Trap</p>
                    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                      Full Alignment holds longer than expected. Shows why contrarian entries get punished.
                    </p>
                    <p className="mt-3 text-xs text-neutral-500">Screenshot slot</p>
                  </div>
                </div>
              </Section>
            </Reveal>

            {/* IP */}
            <Reveal delayMs={400}>
              <Section
                id="ip"
                eyebrow="IP protection"
                title="What’s Shown vs Hidden"
                desc="You can demonstrate outcomes without disclosing construction."
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3 text-sm text-neutral-300 leading-relaxed">
                  <p>
                    Public proofs show the{" "}
                    <span className="text-white font-semibold">regime strip</span>{" "}
                    and the labels only (Empire / Rebellion / Uprising / Revolution).
                  </p>
                  <p>
                    The moving average construction and territory logic remain internal
                    until subscriber access is released.
                  </p>
                  <p className="text-xs text-neutral-500">
                    Clear message: REZIME is a map. The details are for operators.
                  </p>
                </div>
              </Section>
            </Reveal>

            {/* CTA */}
            <Reveal delayMs={470}>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Want the institutional framing?
                    </p>
                    <p className="text-xs text-neutral-400">
                      Allocator portal = factsheet archive + mandate + governance + risk.
                    </p>
                  </div>

                  <Link
                    href="/allocator"
                    className="premium-card relative inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white hover:bg-white/15 transition"
                  >
                    Enter Allocator →
                  </Link>
                </div>
              </section>
            </Reveal>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
