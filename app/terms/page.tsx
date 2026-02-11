// app/terms/page.tsx
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

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14 space-y-10">
      <Reveal delayMs={0}>
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Terms of Use
          </h1>
          <p className="text-sm text-neutral-400">Last updated: [Insert date]</p>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Welcome to REZIME ("REZIME", "we", "our", "us"). By accessing or using
            this website, platform, tools, or materials, you agree to these Terms
            of Use. If you do not agree, you must not use the service.
          </p>
        </header>
      </Reveal>

      {/* PLAIN SUMMARY */}
      <Reveal delayMs={60}>
        <div className="calm-block rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3">
          <div className="text-sm font-semibold text-white">
            Summary (plain language)
          </div>
          <ul className="space-y-2 text-sm text-neutral-300 leading-relaxed">
            <Bullet>REZIME is education and analytical tools — not advice.</Bullet>
            <Bullet>You remain fully responsible for your decisions and risk.</Bullet>
            <Bullet>No signals. No guarantees. Markets involve loss risk.</Bullet>
            <Bullet>Access grants digital use rights, not ownership.</Bullet>
          </ul>
        </div>
      </Reveal>

      <Reveal delayMs={110}>
        <div className="space-y-10">

          <Section title="1. Nature of the Service">
            <p>
              REZIME is an <strong>educational and analytical research platform</strong>.
              It may include:
            </p>
            <ul className="mt-3 space-y-2">
              <Bullet>Market regime mapping concepts</Bullet>
              <Bullet>Educational documentation and interpretation guides</Bullet>
              <Bullet>Chart tools, indicators, and visual frameworks</Bullet>
              <Bullet>Research-based models and observational structures</Bullet>
            </ul>

            <p className="mt-4 font-semibold text-white">REZIME does NOT provide:</p>
            <ul className="mt-3 space-y-2">
              <Bullet>Investment, trading, legal, or tax advice</Bullet>
              <Bullet>Buy or sell signals</Bullet>
              <Bullet>Trade execution or portfolio management</Bullet>
            </ul>
          </Section>

          <Section title="2. Educational & Risk Disclaimer">
            <p>
              All materials are provided for educational and informational purposes only.
              Trading and investing involve substantial risk, including the loss of capital.
              Past examples, illustrations, or explanations do not predict future results.
            </p>
          </Section>

          <Section title="3. User Responsibility">
            <ul className="mt-2 space-y-2">
              <Bullet>You make all decisions independently.</Bullet>
              <Bullet>You are responsible for your financial actions.</Bullet>
              <Bullet>You use REZIME at your own discretion and risk.</Bullet>
            </ul>
          </Section>

          <Section title="4. No Guarantees">
            <p>
              REZIME does not guarantee accuracy, profitability, risk reduction,
              or performance. Tools represent interpretive frameworks, not predictions.
            </p>
          </Section>

          <Section title="5. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, REZIME and its operators
              shall not be liable for trading losses, financial damages, or
              consequential losses resulting from use of the platform.
            </p>
          </Section>

          <Section title="6. Intellectual Property">
            <p>
              All REZIME materials, tools, visuals, and frameworks are protected
              intellectual property. You may not copy, redistribute, reverse engineer,
              or resell them without written permission.
            </p>
          </Section>

          <Section title="7. Accounts & Access">
            <ul className="mt-2 space-y-2">
              <Bullet>You are responsible for account security.</Bullet>
              <Bullet>Account sharing may result in suspension.</Bullet>
              <Bullet>Access may be revoked for misuse or abuse.</Bullet>
            </ul>
          </Section>

          <Section title="8. Subscriptions, Payments & Refunds">
            <p>
              Paid access grants digital use of educational and analytical tools.
              Due to the digital nature of the service, access is considered delivered
              once granted.
            </p>

            <p className="mt-3 font-semibold text-white">Refund Policy</p>
            <ul className="mt-2 space-y-2">
              <Bullet>No refunds are guaranteed once access is provided.</Bullet>
              <Bullet>Duplicate charges may be reviewed for correction.</Bullet>
              <Bullet>Cancellation stops future billing but does not refund past periods.</Bullet>
            </ul>

            <p className="mt-3">
              Pricing and features may change over time.
            </p>
          </Section>

          <Section title="9. Platform Dependency">
            <p>
              If REZIME tools operate through third-party platforms (e.g., charting
              platforms), REZIME is not responsible for outages, platform changes,
              or data inaccuracies.
            </p>
          </Section>

          <Section title="10. Modifications">
            <p>
              We may update these Terms at any time. Continued use means acceptance
              of updated Terms.
            </p>
          </Section>

          <Section title="11. Governing Law">
            <p>
              These Terms are governed by the laws of Indonesia, without regard
              to conflict-of-law principles.
            </p>
          </Section>

          <Section title="12. Contact">
            <p>
              Questions regarding these Terms may be sent to{" "}
              <span className="text-white">hello@rezimeengine.com</span>
            </p>
          </Section>

        </div>
      </Reveal>
    </main>
  );
}
