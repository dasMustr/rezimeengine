// app/privacy/page.tsx
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

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-14 space-y-10">
      <Reveal delayMs={0}>
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-400">Last updated: [Insert date]</p>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            REZIME ("REZIME", "we", "our", "us") respects your privacy. This Privacy
            Policy explains how we collect, use, and protect information when you
            use our website and services.
          </p>
        </header>
      </Reveal>

      <Reveal delayMs={60}>
        <div className="calm-block rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7 space-y-3">
          <div className="text-sm font-semibold text-white">Summary</div>
          <ul className="space-y-2 text-sm text-neutral-300 leading-relaxed">
            <Bullet>We collect only what we need to run the service.</Bullet>
            <Bullet>We do not sell your personal data.</Bullet>
            <Bullet>Payments are processed by third parties (we don’t store full card details).</Bullet>
            <Bullet>You can request access, correction, or deletion of your data.</Bullet>
          </ul>
        </div>
      </Reveal>

      <Reveal delayMs={110}>
        <div className="space-y-10">
          <Section title="1. Information We Collect">
            <p>We may collect the following types of information:</p>
            <ul className="mt-3 space-y-2">
              <Bullet>Email address (accounts, communication, access)</Bullet>
              <Bullet>Basic account information (e.g., login identifiers)</Bullet>
              <Bullet>
                Payment-related metadata provided by payment processors (not full card details)
              </Bullet>
              <Bullet>Usage data (pages visited, interactions) to improve the product</Bullet>
            </ul>
          </Section>

          <Section title="2. How We Use Information">
            <p>We use collected information to:</p>
            <ul className="mt-3 space-y-2">
              <Bullet>Provide access to educational and analytical materials</Bullet>
              <Bullet>Maintain user accounts and provide customer support</Bullet>
              <Bullet>Process payments through third-party providers</Bullet>
              <Bullet>Improve platform functionality and user experience</Bullet>
              <Bullet>Communicate updates or important service information</Bullet>
            </ul>
          </Section>

          <Section title="3. Payment Processing">
            <p>
              Payments (if applicable) are handled by third-party payment providers.
              We do not store full card details on our servers. Payment processors
              may collect information according to their own privacy policies.
            </p>
          </Section>

          <Section title="4. Cookies & Analytics">
            <p>
              We may use cookies or analytics tools to understand usage and improve
              the experience. These tools collect general usage data, not financial
              information.
            </p>
          </Section>

          <Section title="5. Data Sharing">
            <p>We do not sell your personal data. Information may be shared only with:</p>
            <ul className="mt-3 space-y-2">
              <Bullet>Service providers needed to operate the platform (hosting, analytics, payment)</Bullet>
              <Bullet>Legal authorities if required by law</Bullet>
            </ul>
          </Section>

          <Section title="6. Data Protection">
            <p>
              We take reasonable measures to protect your data against unauthorized access,
              misuse, or disclosure. However, no internet transmission is completely secure.
            </p>
          </Section>

          <Section title="7. Data Retention">
            <p>
              We retain information as long as necessary to provide the service, maintain accounts,
              resolve disputes, or comply with legal obligations.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>
              You may request to access, correct, or delete your personal information by contacting us.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy. Continued use of REZIME means you accept the updated version.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>
              For privacy-related questions, contact:{" "}
              <span className="text-white">hello@rezimeengine.com</span>
            </p>
            <p className="mt-3 text-xs text-neutral-500">
              Related links:{" "}
              <Link href="/terms" className="underline hover:text-white">
                Terms
              </Link>{" "}
              •{" "}
              <Link href="/refunds" className="underline hover:text-white">
                Refunds
              </Link>
            </p>
          </Section>
        </div>
      </Reveal>
    </main>
  );
}
