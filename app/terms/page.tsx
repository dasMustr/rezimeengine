export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-200 px-6 py-20 max-w-3xl mx-auto leading-relaxed">
      <h1 className="text-4xl font-bold mb-10 text-white">Terms of Use</h1>

      <p className="mb-6 text-sm text-neutral-400">Last updated: [Insert date]</p>

      <p className="mb-6">
        Welcome to REZIME Engine ("REZIME", "we", "our", "us"). By accessing or using this website,
        platform, tools, or materials, you agree to these Terms of Use. If you do not agree, do not use the service.
      </p>

      <Section title="1. Nature of the Service">
        REZIME is an <strong>educational and analytical research platform</strong>.
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Market regime mapping concepts</li>
          <li>Educational documentation</li>
          <li>Research-based chart tools and indicators</li>
          <li>Framework explanations and observational models</li>
        </ul>

        <p className="mt-4 font-semibold">REZIME does NOT provide:</p>
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>Investment advice</li>
          <li>Trade recommendations</li>
          <li>Buy/sell signals</li>
          <li>Portfolio management</li>
          <li>Account handling</li>
          <li>Financial planning</li>
        </ul>
        <p className="mt-4">All content is informational and educational only.</p>
      </Section>

      <Section title="2. No Financial Advice">
        Nothing on this platform constitutes investment, financial, legal, or tax advice.
        You are solely responsible for any financial decisions you make. Markets involve risk,
        including loss of capital. REZIME does not guarantee results, performance, or outcomes.
      </Section>

      <Section title="3. User Responsibility">
        You acknowledge that:
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Markets contain uncertainty and risk</li>
          <li>You make all decisions independently</li>
          <li>You use REZIME at your own discretion</li>
          <li>You are responsible for how you interpret and apply information</li>
        </ul>
        <p className="mt-4">REZIME is a decision-support education tool, not a decision-maker.</p>
      </Section>

      <Section title="4. No Guarantees">
        REZIME does not promise profits, accuracy of future market behavior, reduction of losses,
        or strategy performance. Past examples or documentation are illustrative, not predictive.
      </Section>

      <Section title="5. Limitation of Liability">
        To the maximum extent permitted by law, REZIME and its operator shall not be liable for
        financial losses, trading losses, or consequential damages resulting from use of this platform.
        Your use of REZIME is at your own risk.
      </Section>

      <Section title="6. Educational Nature of Tools">
        Indicators, charts, and analytical tools are interpretive frameworks and visual mapping aids.
        They are not automated trading systems or signal engines.
      </Section>

      <Section title="7. Access & Accounts">
        If access-controlled features exist:
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>You are responsible for account security</li>
          <li>Access may be revoked for misuse</li>
          <li>Account sharing may lead to suspension</li>
        </ul>
      </Section>

      <Section title="8. Payments & Digital Access">
        Payments grant access to educational and analytical materials.
        Due to the digital nature of the service, access may be non-refundable once granted (see Refund Policy).
        Pricing and features may change over time.
      </Section>

      <Section title="9. Intellectual Property">
        All platform content and framework materials are the intellectual property of REZIME.
        You may not resell, redistribute, repackage, or claim authorship without permission.
      </Section>

      <Section title="10. Governing Law">
        These Terms are governed by the laws of Indonesia, without regard to conflict-of-law principles.
      </Section>

      <Section title="11. Changes to Terms">
        We may update these Terms at any time. Continued use of REZIME after changes means you accept them.
      </Section>

      <Section title="12. Contact">
        For questions regarding these Terms:
        <br />
        <span className="text-white">hello@rezimeengine.com</span>
      </Section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3 text-white">{title}</h2>
      <div className="text-neutral-300">{children}</div>
    </section>
  );
}
