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
            of Use. If you do not agree, do not use the service.
          </p>
        </header>
      </Reveal>

      <Reveal delayMs={60}>
        <div className="calm-block rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7 space-y-3">
          <div className="text-sm font-semibold text-white">
            Summary (plain language)
          </div>
          <ul className="space-y-2 text-sm text-neutral-300 leading-relaxed">
            <Bullet>REZIME is education + analytical tools. Not advice.</Bullet>
            <Bullet>You remain fully responsible for decisions and risk.</Bullet>
            <Bullet>No signals. No guarantees. Markets can lose you money.</Bullet>
            <Bullet>Paid access grants digital access to materials and tools.</Bullet>
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
              <Bullet>Educational documentation and interpretation notes</Bullet>
              <Bullet>Research-based chart tools and indicators</Bullet>
              <Bullet>Framework explanations and observational models</Bullet>
            </ul>

            <p className="mt-4 font-semibold text-white">REZIME does NOT provide:</p>
            <ul className="mt-3 space-y-2">
              <Bullet>Investment advice or financial advice</Bullet>
              <Bullet>Trade recommendations or buy/sell signals</Bullet>
              <Bullet>Portfolio management or account handling</Bullet>
              <Bullet>Financial planning, legal advice, or tax advice</Bullet>
            </ul>

            <p className="mt-4">
              All content is informational and educational only.
            </p>
          </Section>

          <Section title="2. No Financial Advice">
            <p>
              Nothing on this platform constitutes investment, financial, legal,
              or tax advice. You are solely responsible for any decisions you
              make. Markets involve risk, including loss of capital. REZIME does
              not guarantee results, performance, or outcomes.
            </p>
          </Section>

          <Section title="3. User Responsibility">
            <p>You acknowledge that:</p>
            <ul className="mt-3 space-y-2">
              <Bullet>Markets contain uncertainty and risk</Bullet>
              <Bullet>You make all decisions independently</Bullet>
              <Bullet>You use REZIME at your own discretion</Bullet>
              <Bullet>
                You are responsible for how you interpret and apply information
              </Bullet>
            </ul>
            <p className="mt-4">
              REZIME is a decision-support education tool, not a decision-maker.
            </p>
          </Section>

          <Section title="4. No Guarantees">
            <p>
              REZIME does not promise profits, accuracy of future market behavior,
              reduction of losses, or strategy performance. Past examples,
              documentation, or “proof” materials are illustrative and educational,
              not predictive.
            </p>
          </Section>

          <Section title="5. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, REZIME and its operator(s)
              shall not be liable for trading losses, financial losses, or
              consequential damages resulting from use of the platform. Your use
              of REZIME is at your own risk.
            </p>
          </Section>

          <Section title="6. Educational Nature of Tools">
            <p>
              Indicators, charts, and analytical tools are interpretive frameworks
              and visual mapping aids. They are not automated trading systems and
              are not presented as “signals.”
            </p>
          </Section>

          <Section title="7. Access & Accounts">
            <p>If access-controlled features exist:</p>
            <ul className="mt-3 space-y-2">
              <Bullet>You are responsible for account security</Bullet>
              <Bullet>Access may be revoked for misuse or abuse</Bullet>
              <Bullet>Account sharing may lead to suspension</Bullet>
            </ul>
          </Section>

          <Section title="8. Payments & Digital Access">
            <p>
              Payments (if applicable) grant access to educational and analytical
              materials and tools. Due to the digital nature of access, refunds
              may be limited once access is granted. See the{" "}
              <Link href="/refunds" className="underline hover:text-white">
                Refund Policy
              </Link>
              .
            </p>
            <p className="mt-3">
              Pricing, tiers, and features may change over time.
            </p>
          </Section>

          <Section title="9. Intellectual Property">
            <p>
              All platform content and framework materials are the intellectual
              property of REZIME or its licensors. You may not resell,
              redistribute, repackage, or claim authorship without written
              permission.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms are governed by the laws of Indonesia, without regard
              to conflict-of-law principles.
            </p>
          </Section>

          <Section title="11. Changes to Terms">
            <p>
              We may update these Terms at any time. Continued use of REZIME after
              changes means you accept the updated Terms.
            </p>
          </Section>

          <Section title="12. Contact">
            <p>
              For questions regarding these Terms, contact:{" "}
              <span className="text-white">hello@rezimeengine.com</span>
            </p>
          </Section>
        </div>
      </Reveal>
    </main>
  );
}
