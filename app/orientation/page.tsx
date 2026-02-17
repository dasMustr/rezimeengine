// app/orientation/page.tsx
import React from "react";
import Reveal from "@/app/components/Reveal";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-neutral-300">
      {children}
    </span>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-semibold text-white">{title}</p>
      <div className="mt-3 space-y-3 text-sm text-neutral-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function OrientationPage() {
  return (
    <section className="space-y-10">
      <Reveal delayMs={0}>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Tag>Survival first</Tag>
              <Tag>Environment over ideas</Tag>
              <Tag>Exposure awareness</Tag>
              <Tag>Calm by design</Tag>
            </div>

            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-white">
              Most people do not fail markets because they are unintelligent.
              <br />
              They fail because they learn in the wrong order.
            </h1>

            <p className="max-w-3xl text-base text-neutral-300 leading-relaxed">
              Markets are one of the few places where a reasonable idea can
              become a costly decision simply because it was made inside an
              unstable environment.
              <br />
              <br />
              The problem is rarely the idea. The problem is the conditions.
            </p>

            <p className="text-xs text-neutral-500">
              This page explains the failure pattern. The next page introduces
              the lens.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delayMs={60}>
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            The mismatch
          </p>
          <h2 className="text-xl font-semibold text-white">
            People think markets test prediction. Markets test exposure.
          </h2>
          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            A prediction can be right and still lose money. A method can be
            valid and still blow up an account. What ends careers is not being
            wrong. It is being exposed when conditions are unstable.
          </p>
        </section>
      </Reveal>

      <Reveal delayMs={90}>
        <div className="grid gap-4 lg:grid-cols-2">
          <Block title="The common failure pattern">
            <p>
              Most people start by looking for a strategy. Something that feels
              actionable. Something that promises clarity.
            </p>
            <p>
              Then they apply it immediately, before they can recognize when
              conditions are stable and when they are not.
            </p>
            <p>
              When volatility increases, they do not slow down. They speed up.
              They add effort. They add conviction. Often they add size.
            </p>
            <p>
              The result is predictable. Even good ideas turn into damage,
              because they were deployed in the wrong environment.
            </p>
          </Block>

          <Block title="The learning order that actually works">
            <p>
              The first skill is not finding the best entry. The first skill is
              knowing when not to act.
            </p>
            <p>
              You do not first learn to win. You first learn how not to die.
            </p>
            <p>
              Once survival is stable, learning becomes real. You can take many
              small lessons without one mistake becoming permanent.
            </p>
            <p>
              This is what REZIME is designed for. Learning that does not end
              your participation.
            </p>
          </Block>
        </div>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            The conclusion
          </p>
          <h2 className="text-xl font-semibold text-white">
            The environment comes first.
          </h2>
          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            Before deciding what to do in markets, the only responsible question
            is what kind of environment this is and whether action even makes
            sense.
          </p>
          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            The next page introduces a simple lens for recognizing stable and
            unstable conditions, without relying on signals or predictions.
          </p>
        </section>
      </Reveal>

      <Reveal delayMs={150}>
        <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-semibold text-white">Next</p>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            Continue to the Framework page to see the REZIME lens.
          </p>
          <div className="mt-4">
            <a
              href="/operator"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-neutral-200 hover:bg-white/10"
            >
              Open → Framework
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
