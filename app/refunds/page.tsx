// app/refunds/page.tsx
import Link from "next/link";
import Reveal from "@/app/components/Reveal";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg sm:text-xl font-semibold text-white">{title}</h2>
      <div className="text-sm text-neutral-300 leading-relaxed">{children}</div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-white/50" />
      <span>{children}</span>
    </li>
  );
}

export default function RefundPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14 space-y-10">
      <Reveal delayMs={0}>
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Refund & Cancellation Policy
          </h1>
          <p className="text-sm text-neutral-400">Last updated: [Insert date]</p>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            This policy explains how refunds, cancellations, and billing are handled
            for REZIME ("REZIME", "we", "our", "us").
          </p>
        </header>
      </Reveal>

      <Reveal delayMs={60}>
        <div className="calm-block rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7 space-y-3">
          <div className="text-sm font-semibold text-white">Summary</div>
          <ul className="space-y-2 text-sm text-neutral-300 leading-relaxed">
            <Bullet>
              REZIME is a digital education + analytical tools service.
            </Bullet>
            <Bullet>
              Once access is granted, the service is considered delivered.
            </Bullet>
            <Bullet>
              Refunds are generally not provided after access is granted, except for
              clear billing errors (e.g., duplicate charge).
            </Bullet>
            <Bullet>
              You can cancel future subscription billing anytime (if applicable).
            </Bullet>
          </ul>
        </div>
      </Reveal>

      <Reveal delayMs={110}>
        <div className="space-y-10">
          <Section title="1. Nature of Digital Access">
            <p>
              REZIME provides access to digital educational documentation, research
              materials, and analytical tools. Once access is granted, the service
              is considered delivered.
            </p>
          </Section>

          <Section title="2. Refund Policy">
            <p>Due to the digital and educational nature of REZIME:</p>
            <ul className="mt-3 space-y-2">
              <Bullet>
                Payments are generally non-refundable once access has been granted.
              </Bullet>
              <Bullet>
                Refunds are not provided due to misunderstanding of the platform.
              </Bullet>
              <Bullet>
                Refunds are not based on trading outcomes or expectations.
              </Bullet>
            </ul>

            <p className="mt-4">
              Exceptional cases (such as technical errors or duplicate charges) may
              be reviewed at our discretion.
            </p>
          </Section>

          <Section title="3. Subscription Cancellations">
            <p>If subscription billing is offered:</p>
            <ul className="mt-3 space-y-2">
              <Bullet>You may cancel future billing at any time.</Bullet>
              <Bullet>
                Cancellation stops future charges but does not retroactively refund
                past payments.
              </Bullet>
              <Bullet>
                Access remains available until the end of the current billing period.
              </Bullet>
            </ul>
          </Section>

          <Section title="4. Chargebacks & Disputes">
            <p>
              Initiating a payment dispute or chargeback without contacting us first
              may result in suspension of access. We encourage users to contact us
              to resolve billing issues directly.
            </p>
          </Section>

          <Section title="5. Billing Issues">
            <p>
              If you believe there was an error in billing, contact us within{" "}
              <strong>7 days</strong> of the charge so we can investigate quickly.
            </p>
          </Section>

          <Section title="6. Changes to This Policy">
            <p>
              We may update this policy at any time. Continued use of REZIME indicates
              acceptance of updates.
            </p>
          </Section>

          <Section title="7. Contact">
            <p>
              For billing or refund questions, contact:{" "}
              <span className="text-white">hello@rezimeengine.com</span>
            </p>
            <p className="mt-3 text-xs text-neutral-500">
              Related links:{" "}
              <Link href="/terms" className="underline hover:text-white">
                Terms
              </Link>{" "}
              •{" "}
              <Link href="/privacy" className="underline hover:text-white">
                Privacy
              </Link>
            </p>
          </Section>
        </div>
      </Reveal>
    </main>
  );
}
