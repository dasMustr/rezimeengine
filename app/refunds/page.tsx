export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-200 px-6 py-20 max-w-3xl mx-auto leading-relaxed">
      <h1 className="text-4xl font-bold mb-10 text-white">Refund & Cancellation Policy</h1>

      <p className="mb-6 text-sm text-neutral-400">Last updated: [Insert date]</p>

      <p className="mb-6">
        This policy explains how refunds, cancellations, and billing are handled for REZIME Engine
        ("REZIME", "we", "our", "us").
      </p>

      <Section title="1. Nature of Digital Access">
        REZIME provides access to digital educational documentation, research materials,
        and analytical tools. Once access is granted, the service is considered delivered.
      </Section>

      <Section title="2. Refund Policy">
        Due to the digital and educational nature of REZIME:
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Payments are generally non-refundable once access has been granted.</li>
          <li>Refunds are not provided for user misunderstanding of the platform.</li>
          <li>Refunds are not based on trading outcomes or expectations.</li>
        </ul>

        <p className="mt-4">
          Exceptional cases (such as technical errors or duplicate charges) may be reviewed at our discretion.
        </p>
      </Section>

      <Section title="3. Subscription Cancellations">
        If subscription billing is offered:
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>You may cancel future billing at any time.</li>
          <li>Cancellations stop future charges but do not retroactively refund past payments.</li>
          <li>Access remains available until the end of the current billing period.</li>
        </ul>
      </Section>

      <Section title="4. Chargebacks & Disputes">
        Initiating a payment dispute or chargeback without contacting us first may result in
        suspension of access. We encourage users to contact us to resolve billing issues directly.
      </Section>

      <Section title="5. Billing Issues">
        If you believe there was an error in billing, contact us within 7 days of the charge.
      </Section>

      <Section title="6. Changes to This Policy">
        We may update this policy at any time. Continued use of REZIME indicates acceptance of updates.
      </Section>

      <Section title="7. Contact">
        For billing or refund questions:
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
