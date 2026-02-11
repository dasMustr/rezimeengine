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
            Welcome to REZIME (&quot;REZIME&quot;, &quot;we&quot;, &quot;our&quot;,
            &quot;us&quot;). These Terms of Use govern your access to and use of our
            website, platform, documentation, and any tools or materials we provide
            (collectively, the &quot;Service&quot;). By accessing or using the Service,
            you agree to these Terms. If you do not agree, you must not use the Service.
          </p>

          <div className="calm-block rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              Operator
            </p>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              REZIME is operated by <span className="text-white">[Your Legal Name / Entity]</span>{" "}
              (Indonesia). If you have not formed an entity yet, use your legal name for now
              and update later.
            </p>
          </div>
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
            <Bullet>Subscriptions grant access/use rights, not ownership.</Bullet>
            <Bullet>We may update tools, visuals, and documentation over time.</Bullet>
            <Bullet>We do not control third-party platforms (payments, charting, hosting).</Bullet>
          </ul>
        </div>
      </Reveal>

      <Reveal delayMs={110}>
        <div className="space-y-10">
          <Section title="1. Nature of the Service">
            <p>
              REZIME is an <strong>educational and analytical research platform</strong>.
              The Service may include:
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
              <Bullet>Personalized recommendations</Bullet>
              <Bullet>Buy/sell signals or guaranteed outcomes</Bullet>
              <Bullet>Trade execution, brokerage services, or portfolio management</Bullet>
            </ul>
          </Section>

          <Section title="2. Educational & Risk Disclaimer">
            <p>
              All materials are provided for educational and informational purposes only.
              Trading and investing involve substantial risk, including the loss of capital.
              You are solely responsible for any decisions you make.
            </p>
            <p className="mt-3">
              Any examples, charts, explanations, or demonstrations are illustrative and
              do not predict future performance. Past results do not guarantee future results.
            </p>
          </Section>

          <Section title="3. User Responsibility">
            <p>You acknowledge and agree that:</p>
            <ul className="mt-3 space-y-2">
              <Bullet>You make all decisions independently.</Bullet>
              <Bullet>You are responsible for your financial actions and risk.</Bullet>
              <Bullet>You will use the Service at your own discretion and risk.</Bullet>
              <Bullet>
                You will not rely on the Service as the sole basis for any financial decision.
              </Bullet>
            </ul>
          </Section>

          <Section title="4. No Guarantees">
            <p>
              REZIME does not guarantee accuracy, completeness, timeliness, profitability,
              risk reduction, or performance. Tools represent interpretive frameworks and
              context labels — not predictions.
            </p>
          </Section>

          <Section title="5. Accounts & Access">
            <ul className="mt-2 space-y-2">
              <Bullet>You are responsible for maintaining account confidentiality and security.</Bullet>
              <Bullet>You must notify us promptly of any suspected unauthorized access.</Bullet>
              <Bullet>
                Access is personal and non-transferable; account sharing may result in suspension or termination.
              </Bullet>
              <Bullet>
                We may refuse, suspend, or terminate access if we believe there is misuse, abuse, fraud, or violations
                of these Terms (including redistribution or sharing).
              </Bullet>
            </ul>
          </Section>

          <Section title="6. License & Acceptable Use">
            <p>
              Subject to these Terms and your active subscription (if applicable), we grant you a limited,
              non-exclusive, non-transferable, revocable license to access and use the Service for your personal
              educational and analytical use.
            </p>
            <p className="mt-3 font-semibold text-white">You may not:</p>
            <ul className="mt-2 space-y-2">
              <Bullet>Share, resell, sublicense, rent, or transfer access to the Service</Bullet>
              <Bullet>Copy, redistribute, publish, or publicly display Service content without permission</Bullet>
              <Bullet>Reverse engineer, decompile, or attempt to extract source/logic from our tools</Bullet>
              <Bullet>Use REZIME to provide signals, alerts-as-a-service, or paid &quot;calls&quot; to others</Bullet>
              <Bullet>Bypass or attempt to bypass access controls, paywalls, or security mechanisms</Bullet>
            </ul>
          </Section>

          <Section title="7. Intellectual Property">
            <p>
              The Service and all associated materials (including scripts, logic, calculations, visuals,
              documentation, branding, and design) are owned by REZIME and/or its licensors and are protected
              by intellectual property laws. Except for the limited license granted above, no rights are transferred
              to you.
            </p>
          </Section>

          <Section title="8. Subscriptions, Payments, Cancellation & Refunds">
            <p>
              If the Service includes paid subscriptions, your subscription may renew automatically unless cancelled.
              You can cancel anytime to stop future billing. Unless otherwise stated at checkout, access continues
              until the end of the current billing period after cancellation.
            </p>

            <p className="mt-3">
              Payments are processed by third-party providers. We do not store full payment card details on our servers.
            </p>

            <p className="mt-4 font-semibold text-white">Refund Policy</p>
            <ul className="mt-2 space-y-2">
              <Bullet>
                Because access is digital and delivered immediately (or upon activation), refunds are generally not provided
                once access is granted.
              </Bullet>
              <Bullet>
                Duplicate charges may be reviewed and corrected at our discretion where supported by processor records.
              </Bullet>
              <Bullet>
                Cancelling stops future billing, but does not refund prior periods or partially used time.
              </Bullet>
            </ul>

            <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
              If you believe you were billed incorrectly, contact{" "}
              <span className="text-white">hello@rezimeengine.com</span> with your invoice/receipt details.
            </p>
          </Section>

          <Section title="9. Platform Dependency & Third-Party Services">
            <p>
              The Service may rely on third-party platforms and services (for example: hosting, analytics, email delivery,
              payment processors, or charting platforms). We do not control these third parties and are not responsible for:
            </p>
            <ul className="mt-3 space-y-2">
              <Bullet>Outages, downtime, interruptions, or service degradation</Bullet>
              <Bullet>Data delays, pricing feed differences, or platform calculation differences</Bullet>
              <Bullet>Feature removals, policy changes, or product changes by third parties</Bullet>
            </ul>
          </Section>

          <Section title="10. Updates, Changes & Availability">
            <p>
              We may update, modify, improve, or discontinue any part of the Service at any time (including features,
              visuals, documentation, pricing, and access tiers). We do not guarantee continuous availability of any
              specific feature set.
            </p>
          </Section>

          <Section title="11. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, REZIME and its operators, affiliates, and service providers will not
              be liable for any trading losses, lost profits, missed opportunities, data loss, indirect damages, or
              consequential damages arising from or related to your use of the Service.
            </p>
            <p className="mt-3">
              Your sole and exclusive remedy for dissatisfaction with the Service is to stop using it.
            </p>
          </Section>

          <Section title="12. Indemnification">
            <p>
              You agree to indemnify and hold harmless REZIME and its operators from any claims, losses, liabilities,
              damages, and expenses (including reasonable legal fees) arising from your use of the Service, your violation
              of these Terms, or your violation of any law or the rights of any third party.
            </p>
          </Section>

          <Section title="13. Governing Law">
            <p>
              These Terms are governed by the laws of Indonesia, without regard to conflict-of-law principles.
            </p>
          </Section>

          <Section title="14. Changes to These Terms">
            <p>
              We may update these Terms from time to time. The &quot;Last updated&quot; date at the top indicates when the
              latest changes were made. Continued use of the Service after changes means you accept the updated Terms.
            </p>
          </Section>

          <Section title="15. Contact">
            <p>
              Questions regarding these Terms may be sent to{" "}
              <span className="text-white">hello@rezimeengine.com</span>.
            </p>
            <p className="mt-3 text-xs text-neutral-500">
              Related links:{" "}
              <Link href="/privacy" className="underline hover:text-white">
                Privacy Policy
              </Link>
            </p>
          </Section>
        </div>
      </Reveal>
    </main>
  );
}
