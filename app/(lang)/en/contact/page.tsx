import React from "react";
import Reveal from "@/app/components/Reveal";

export default function ContactEN() {
  return (
    <div className="space-y-16 max-w-3xl">

      {/* HERO */}
      <Reveal>
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            Contact
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">
            This website is not a funnel.
            <br />
            It is a conversation filter.
          </h1>

          <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
            <p>
              Most people who find REZIME are not looking for signals.
              They are trying to make sense of uncertainty without noise.
            </p>

            <p>
              If you reached this page, you probably already understood
              what this framework is trying to do.
            </p>

            <p className="text-neutral-400">
              So instead of selling anything here,
              I would rather talk.
            </p>
          </div>
        </section>
      </Reveal>

      {/* WHO SHOULD MESSAGE */}
      <Reveal delayMs={120}>
        <section className="space-y-5">
          <h2 className="text-xl font-semibold text-white">
            Good reasons to reach out
          </h2>

          <div className="space-y-3 text-sm text-neutral-300 leading-relaxed">
            <p>
              • You think about risk before return
            </p>
            <p>
              • You operate a business or manage capital and want a clearer decision framework
            </p>
            <p>
              • You work in finance and want to exchange perspectives
            </p>
            <p>
              • You build things and value long-term thinking
            </p>
            <p>
              • You disagree with something here but can explain why
            </p>
          </div>

          <p className="text-xs text-neutral-500">
            Disagreement is welcome. Noise is not.
          </p>
        </section>
      </Reveal>

      {/* WHO SHOULD NOT */}
      <Reveal delayMs={240}>
        <section className="space-y-5">
          <h2 className="text-xl font-semibold text-white">
            Probably not a fit
          </h2>

          <div className="space-y-3 text-sm text-neutral-300 leading-relaxed">
            <p>
              • Looking for trading signals or copy trades
            </p>
            <p>
              • Short-term speculation discussion only
            </p>
            <p>
              • Marketing / SEO / growth services
            </p>
            <p>
              • Generic networking without shared context
            </p>
          </div>
        </section>
      </Reveal>

      {/* HOW TO CONTACT */}
      <Reveal delayMs={360}>
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-white">
            How to reach me
          </h2>

          <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
            <p>
              Send a short message introducing:
            </p>

            <div className="pl-4 space-y-2 text-neutral-300">
              <p>• What you do</p>
              <p>• How you found the site</p>
              <p>• What made you interested</p>
            </div>

            <p className="text-neutral-400">
              Long messages are fine.
              Formality is unnecessary.
            </p>
          </div>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-neutral-300">
              Email:
            </p>
            <p className="mt-1 text-white text-lg font-medium">
              your@email.com
            </p>

            <p className="mt-4 text-xs text-neutral-500">
              I read everything myself. Replies may take time.
            </p>
          </div>
        </section>
      </Reveal>

      {/* CLOSING */}
      <Reveal delayMs={480}>
        <section className="space-y-4 text-sm text-neutral-400 leading-relaxed">
          <p>
            The goal of REZIME is not audience size.
          </p>
          <p>
            It is finding people who think in compatible directions.
          </p>
        </section>
      </Reveal>
    </div>
  );
}