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
            Welcome to REZIME ("REZIME", "we", "our", "us"). These Terms govern your access to and use of our website, tools,
            documentation, and materials (the "Service"). By using the Service, you agree to these Terms.
          </p>
        </header>
      </Reveal>

      <Reveal delayMs={60}>
        <div className="calm-block rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3">
          <div className="text-sm font-semibold text-white">Summary (plain language)</div>
          <ul className="space-y-2 text-sm text-neutral-300 leading-relaxed">
            <Bullet>REZIME provides education and analytical tools — not advice.</Bullet>
            <Bullet>You are fully responsible for your decisions and risk.</Bullet>
            <Bullet>No signals. No guarantees. Markets involve loss.</Bullet>
            <Bullet>Subscriptions grant access rights, not ownership.</Bullet>
            <Bullet>Tools and visuals may evolve over time.</Bullet>
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
              <Bullet>Educational documentation</Bullet>
              <Bullet>Chart tools and visual frameworks</Bullet>
              <Bullet>Research models and observational structures</Bullet>
            </ul>
            <p className="mt-4 font-semibold text-white">REZIME does NOT provide:</p>
            <ul className="mt-3 space-y-2">
              <Bullet>Financial, investment, trading, legal, tax, accounting, or professional advice</Bullet>
              <Bullet>Personalized recommendations</Bullet>
              <Bullet>Buy/sell signals</Bullet>
              <Bullet>Trade execution or portfolio management</Bullet>
            </ul>
          </Section>

          <Section title="2. Educational & Risk Disclaimer">
            <p>Trading and investing involve substantial risk, including total loss of capital. All material is informational only.</p>
            <p className="mt-3">Past performance does not predict future results.</p>
          </Section>

          <Section title="3. User Responsibility">
            <ul className="mt-2 space-y-2">
              <Bullet>You make decisions independently</Bullet>
              <Bullet>You assume full financial risk</Bullet>
              <Bullet>You use the Service at your own discretion</Bullet>
            </ul>
          </Section>

          <Section title="3A. No Fiduciary Relationship">
            <p>No advisory or fiduciary relationship is created. We do not manage funds or owe a duty of care.</p>
          </Section>

          <Section title="3B. Independent Verification & No Reliance">
            <p>You agree not to rely solely on the Service and will verify information independently.</p>
          </Section>

          <Section title="4. No Guarantees">
            <p>We do not guarantee accuracy, completeness, timeliness, or profitability.</p>
          </Section>

          <Section title="5. Eligibility">
            <p>You must be 18+ and legally capable of entering agreements.</p>
          </Section>

          <Section title="5A. Jurisdictional Compliance">
            <p>You are responsible for complying with laws in your jurisdiction.</p>
          </Section>

          <Section title="6. Accounts & Access">
            <ul className="space-y-2">
              <Bullet>You must secure your account</Bullet>
              <Bullet>Access is personal and non-transferable</Bullet>
              <Bullet>We may suspend accounts for misuse</Bullet>
            </ul>
          </Section>

          <Section title="7. License & Acceptable Use">
            <p>You receive a limited, revocable license for personal use only.</p>
            <ul className="mt-3 space-y-2">
              <Bullet>No reselling or sharing access</Bullet>
              <Bullet>No reverse engineering</Bullet>
              <Bullet>No signal services using REZIME</Bullet>
              <Bullet>No commercial use of tools</Bullet>
            </ul>
          </Section>

          <Section title="8. Intellectual Property">
            <p>All materials are owned by REZIME. No ownership is transferred.</p>
          </Section>

          <Section title="9. Subscriptions & Refunds">
            <p>Subscriptions may auto-renew. Refunds are generally not provided once access is granted.</p>
          </Section>

          <Section title="9A. Chargebacks & Payment Disputes">
            <p>Unjustified chargebacks may result in suspension and recovery of fees.</p>
          </Section>

          <Section title="10. Third-Party Platforms">
            <p>We are not responsible for outages or policy changes of third-party services.</p>
          </Section>

          <Section title="10A. Market Data Disclaimer">
            <p>Market data may be delayed or inconsistent across platforms.</p>
          </Section>

          <Section title="11. Updates & Availability">
            <p>We may modify or discontinue features at any time.</p>
          </Section>

          <Section title="11A. Force Majeure">
            <p>We are not liable for failures beyond our control.</p>
          </Section>

          <Section title="11B. Effect of Termination">
            <p>Access rights end upon cancellation.</p>
          </Section>

          <Section title="12. Limitation of Liability">
            <p>We are not liable for trading losses or indirect damages.</p>
          </Section>

          <Section title="13. Indemnification">
            <p>You agree to indemnify REZIME against claims arising from your use.</p>
          </Section>

          <Section title="13A. Dispute Resolution (Arbitration)">
            <p>Disputes shall be resolved through binding arbitration where permitted by law.</p>
          </Section>

          <Section title="14. Governing Law">
            <p>These Terms are governed by Indonesian law.</p>
          </Section>

          <Section title="15. Changes to Terms">
            <p>Continued use means acceptance of updated Terms.</p>
          </Section>

          <Section title="16. Contact">
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
