// app/terms/page.tsx
import Link from "next/link";
import Reveal from "@/app/components/Reveal";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
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
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Terms of Use</h1>
          <p className="text-sm text-neutral-400">Last updated: 11 February 2026</p>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Welcome to REZIME ("REZIME", "we", "our", "us"). These Terms of Use govern your access to and use of our website,
            platform, documentation, and any tools or materials we provide (the "Service"). By using the Service, you agree to these Terms.
          </p>
        </header>
      </Reveal>

      {/* SUMMARY */}
      <Reveal delayMs={60}>
        <div className="calm-block rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3">
          <div className="text-sm font-semibold text-white">Summary (plain language)</div>
          <ul className="space-y-2 text-sm text-neutral-300 leading-relaxed">
            <Bullet>REZIME is education and analytical tools, not advice.</Bullet>
            <Bullet>You remain fully responsible for your decisions and risk.</Bullet>
            <Bullet>No signals. No guarantees. Markets involve loss risk.</Bullet>
            <Bullet>Subscriptions grant access/use rights, not ownership.</Bullet>
            <Bullet>We may update tools and documentation over time.</Bullet>
            <Bullet>We do not control third-party platforms.</Bullet>
          </ul>
        </div>
      </Reveal>

      <Reveal delayMs={110}>
        <div className="space-y-10">

          <Section title="1. Nature of the Service">
            <p>REZIME is an <strong>educational and analytical research platform</strong>.</p>
            <ul className="mt-3 space-y-2">
              <Bullet>Market regime mapping concepts</Bullet>
              <Bullet>Educational documentation and interpretation guides</Bullet>
              <Bullet>Chart tools, indicators, and visual frameworks</Bullet>
              <Bullet>Research-based models and observational structures</Bullet>
            </ul>

            <p className="mt-4 font-semibold text-white">REZIME does NOT provide:</p>
            <ul className="mt-3 space-y-2">
              <Bullet>Financial, investment, trading, legal, tax, accounting, or professional advice</Bullet>
              <Bullet>Personalized recommendations</Bullet>
              <Bullet>Buy/sell signals or guaranteed outcomes</Bullet>
              <Bullet>Trade execution, brokerage services, or portfolio management</Bullet>
            </ul>
          </Section>

          <Section title="2. Educational & Risk Disclaimer">
            <p>All materials are informational only. Trading and investing involve substantial risk, including total loss of capital.</p>
            <p className="mt-3">Past performance does not guarantee future results.</p>
          </Section>

          <Section title="3. User Responsibility">
            <ul className="space-y-2">
              <Bullet>You make all decisions independently</Bullet>
              <Bullet>You are responsible for your financial risk</Bullet>
              <Bullet>You will use the Service at your own discretion</Bullet>
              <Bullet>You will not rely solely on the Service</Bullet>
            </ul>
          </Section>

          <Section title="4. No Fiduciary Relationship">
            <p>No advisory, fiduciary, agency, or client relationship is created.</p>
          </Section>

          <Section title="5. Independent Verification">
            <p>You agree to independently verify information before making decisions.</p>
          </Section>

          <Section title="6. No Guarantees">
            <p>REZIME does not guarantee accuracy, completeness, or profitability.</p>
          </Section>

          <Section title="7. Eligibility">
            <p>You must be 18+ and legally capable of entering agreements.</p>
          </Section>

          <Section title="8. Jurisdictional Compliance">
            <p>You are responsible for ensuring compliance with local laws.</p>
          </Section>

          <Section title="9. Accounts & Access">
            <ul className="space-y-2">
              <Bullet>You must secure your account</Bullet>
              <Bullet>Access is personal and non-transferable</Bullet>
              <Bullet>We may suspend accounts for misuse</Bullet>
            </ul>
          </Section>

          <Section title="10. License & Acceptable Use">
            <p>Limited, non-exclusive, revocable license for personal use.</p>
            <ul className="mt-3 space-y-2">
              <Bullet>No reselling or sharing</Bullet>
              <Bullet>No reverse engineering</Bullet>
              <Bullet>No signal services</Bullet>
              <Bullet>No commercial use</Bullet>
            </ul>
          </Section>

          <Section title="11. Intellectual Property">
            <p>All materials are owned by REZIME.</p>
          </Section>

          <Section title="12. Subscriptions & Refunds">
            <p>Subscriptions may auto-renew. Refunds are generally not provided.</p>
          </Section>

          <Section title="13. Chargebacks & Payment Disputes">
            <p>Unjustified disputes may result in suspension and recovery of fees.</p>
          </Section>

          <Section title="14. Third-Party Platforms">
            <p>We are not responsible for outages or platform changes.</p>
          </Section>

          <Section title="15. Market Data Disclaimer">
            <p>Market data may be delayed or inconsistent.</p>
          </Section>

          <Section title="16. Updates & Availability">
            <p>We may modify or discontinue features at any time.</p>
          </Section>

          <Section title="17. Force Majeure">
            <p>We are not liable for events beyond our control.</p>
          </Section>

          <Section title="18. Effect of Termination">
            <p>Access rights end upon cancellation.</p>
          </Section>

          <Section title="19. Limitation of Liability">
            <p>We are not liable for trading losses or indirect damages.</p>
          </Section>

          <Section title="20. Indemnification">
            <p>You agree to indemnify REZIME against claims arising from your use.</p>
          </Section>

          <Section title="21. Dispute Resolution (Arbitration)">
            <p>Disputes shall be resolved through binding arbitration where permitted by law.</p>
          </Section>

          <Section title="22. Governing Law">
            <p>These Terms are governed by Indonesian law.</p>
          </Section>

          <Section title="23. Changes to Terms">
            <p>Continued use means acceptance of updated Terms.</p>
          </Section>

          <Section title="24. Contact">
            <p>Email: <span className="text-white">hello@rezimeengine.com</span></p>
            <p className="text-xs text-neutral-500 mt-2">
              Related: <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>
            </p>
          </Section>

        </div>
      </Reveal>
    </main>
  );
}
