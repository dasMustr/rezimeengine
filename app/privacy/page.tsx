export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-200 px-6 py-20 max-w-3xl mx-auto leading-relaxed">
      <h1 className="text-4xl font-bold mb-10 text-white">Privacy Policy</h1>

      <p className="mb-6 text-sm text-neutral-400">Last updated: [Insert date]</p>

      <p className="mb-6">
        REZIME Engine ("REZIME", "we", "our", "us") respects your privacy. This Privacy Policy
        explains how we collect, use, and protect your information when you use our website and services.
      </p>

      <Section title="1. Information We Collect">
        We may collect the following types of information:
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Email address (for accounts, communication, and access)</li>
          <li>Basic account information</li>
          <li>Payment-related metadata provided by payment processors</li>
          <li>Usage data such as pages visited and interactions</li>
        </ul>
      </Section>

      <Section title="2. How We Use Information">
        We use collected information to:
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Provide access to educational and analytical materials</li>
          <li>Maintain user accounts</li>
          <li>Process payments through third-party providers</li>
          <li>Improve platform functionality and user experience</li>
          <li>Communicate important updates or service information</li>
        </ul>
      </Section>

      <Section title="3. Payment Processing">
        Payments are handled by third-party payment providers. We do not store full card details.
        Payment processors may collect information according to their own privacy policies.
      </Section>

      <Section title="4. Data Protection">
        We take reasonable measures to protect your data against unauthorized access,
        misuse, or disclosure. However, no internet transmission is completely secure.
      </Section>

      <Section title="5. Data Sharing">
        We do not sell your personal data. Information may be shared only with:
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Service providers necessary to operate the platform</li>
          <li>Legal authorities if required by law</li>
        </ul>
      </Section>

      <Section title="6. Cookies & Analytics">
        We may use cookies or analytics tools to understand platform usage and improve the experience.
        These tools collect general usage data, not financial information.
      </Section>

      <Section title="7. User Rights">
        You may request to access, correct, or delete your personal information by contacting us.
      </Section>

      <Section title="8. Data Retention">
        We retain information as long as necessary to provide the service or comply with legal obligations.
      </Section>

      <Section title="9. Changes to This Policy">
        We may update this Privacy Policy. Continued use of REZIME means you accept the updated version.
      </Section>

      <Section title="10. Contact">
        For privacy-related questions:
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
