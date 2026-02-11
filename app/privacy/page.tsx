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

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-xs text-neutral-500 leading-relaxed">{children}</p>
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
            REZIME ("REZIME", "we", "our", "us") respects your privacy. This
            Privacy Policy explains what information we collect, why we collect
            it, how we use it, and the choices you have when you use our website
            and services.
          </p>
        </header>
      </Reveal>

      {/* SUMMARY */}
      <Reveal delayMs={60}>
        <div className="calm-block rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7 space-y-3">
          <div className="text-sm font-semibold text-white">Summary</div>
          <ul className="space-y-2 text-sm text-neutral-300 leading-relaxed">
            <Bullet>We collect only what we need to run and secure the service.</Bullet>
            <Bullet>We do not sell your personal data.</Bullet>
            <Bullet>
              Payments are processed by third parties (we don’t store full card
              details).
            </Bullet>
            <Bullet>
              You can request access, correction, or deletion of your data.
            </Bullet>
          </ul>
        </div>
      </Reveal>

      <Reveal delayMs={110}>
        <div className="space-y-10">
          <Section title="1. Scope">
            <p>
              This policy applies to information collected through the REZIME
              website and any services, tools, gated materials, or support
              channels we operate (collectively, the “Service”).
            </p>
            <Note>
              For how you may use the Service, please see{" "}
              <Link href="/terms" className="underline hover:text-white">
                Terms
              </Link>
              .
            </Note>
          </Section>

          <Section title="2. Information We Collect">
            <p>We may collect the following categories of information:</p>

            <ul className="mt-3 space-y-2">
              <Bullet>
                <strong>Account data</strong> (e.g., email address, login
                identifiers, access status)
              </Bullet>
              <Bullet>
                <strong>Service communications</strong> (messages you send us for
                support, feedback, or questions)
              </Bullet>
              <Bullet>
                <strong>Payment metadata</strong> from payment processors (e.g.,
                payment status, billing history, the last 4 digits or payment
                method type as provided by the processor — we do not store full
                card numbers)
              </Bullet>
              <Bullet>
                <strong>Usage and device data</strong> (e.g., pages viewed,
                approximate timestamps, device/browser type, basic diagnostic
                logs)
              </Bullet>
            </ul>

            <Note>
              We do not intentionally collect sensitive personal data (for
              example: government IDs, biometric identifiers, health data, or
              precise geolocation). Please do not send sensitive data via support
              messages.
            </Note>
          </Section>

          <Section title="3. How We Use Information">
            <p>We use information to:</p>
            <ul className="mt-3 space-y-2">
              <Bullet>Provide access to the Service, tools, and documentation</Bullet>
              <Bullet>Maintain accounts and authenticate users</Bullet>
              <Bullet>Process subscriptions and billing through third-party providers</Bullet>
              <Bullet>
                Send important service notices (access, policy, security,
                downtime)
              </Bullet>
              <Bullet>Respond to support requests and improve support quality</Bullet>
              <Bullet>Improve reliability, performance, and user experience</Bullet>
              <Bullet>Detect, prevent, and investigate abuse, fraud, or security issues</Bullet>
              <Bullet>Comply with legal obligations and enforce our terms</Bullet>
            </ul>
          </Section>

          <Section title="4. Legal Basis (plain language)">
            <p>
              Depending on where you live, privacy laws may require a “legal
              basis” for processing personal information. In simple terms, we
              process information because it is necessary to:
            </p>
            <ul className="mt-3 space-y-2">
              <Bullet>
                <strong>Provide the Service</strong> (create accounts, grant
                access, deliver paid features)
              </Bullet>
              <Bullet>
                <strong>Run and protect the Service</strong> (security, abuse
                prevention, troubleshooting)
              </Bullet>
              <Bullet>
                <strong>Communicate with you</strong> (support and important
                notices)
              </Bullet>
              <Bullet>
                <strong>Comply with law</strong> (tax, accounting, regulatory,
                or lawful requests)
              </Bullet>
            </ul>
          </Section>

          <Section title="5. Payments">
            <p>
              If you purchase a subscription, payments are processed by
              third-party payment providers. We do not store full payment card
              details on our servers. Payment providers may collect and process
              information under their own privacy policies.
            </p>
            <Note>
              If a payment fails or is disputed, we may receive limited metadata
              needed to resolve the issue (for example: payment status, reference
              ID, and timestamps).
            </Note>
          </Section>

          <Section title="6. Cookies & Analytics">
            <p>
              We may use cookies and analytics tools to understand how the site
              is used and to improve performance. This typically includes general
              usage signals (like page views, session duration, and device type),
              not personal financial data.
            </p>

            <p className="mt-3">
              You can usually control cookies in your browser settings. Some
              site features may not work properly if cookies are disabled.
            </p>
          </Section>

          <Section title="7. Sharing of Information">
            <p>
              We do <strong>not</strong> sell your personal data. We share
              information only in limited cases:
            </p>

            <ul className="mt-3 space-y-2">
              <Bullet>
                <strong>Service providers</strong> that help run the platform
                (hosting, authentication, email delivery, analytics, payment
                processing)
              </Bullet>
              <Bullet>
                <strong>Legal requirements</strong> if we must comply with law,
                regulation, or valid legal process
              </Bullet>
              <Bullet>
                <strong>Security and abuse prevention</strong> to protect the
                Service, users, and our rights
              </Bullet>
              <Bullet>
                <strong>Business changes</strong> (e.g., reorganization, merger,
                acquisition) where information may be transferred as part of a
                transaction, subject to appropriate safeguards
              </Bullet>
            </ul>
          </Section>

          <Section title="8. Data Security">
            <p>
              We use reasonable administrative and technical measures to protect
              information. However, no online service can guarantee absolute
              security.
            </p>
            <p className="mt-3">
              You are responsible for keeping your login credentials private and
              using a strong password. If you believe your account has been
              compromised, contact us.
            </p>
          </Section>

          <Section title="9. Data Retention">
            <p>
              We retain personal information only as long as necessary to provide
              the Service, maintain accounts, comply with legal obligations,
              resolve disputes, and enforce our agreements.
            </p>
            <Note>
              If you request deletion, we will delete or anonymize information
              where feasible, subject to required retention (for example:
              accounting/tax records or fraud prevention logs).
            </Note>
          </Section>

          <Section title="10. Your Choices & Rights">
            <p>You may request to:</p>
            <ul className="mt-3 space-y-2">
              <Bullet>Access the personal information we hold about you</Bullet>
              <Bullet>Correct inaccurate information</Bullet>
              <Bullet>Delete your information (where feasible)</Bullet>
              <Bullet>Opt out of non-essential communications</Bullet>
            </ul>

            <p className="mt-3">
              To make a request, contact us at{" "}
              <span className="text-white">hello@rezimeengine.com</span>.
            </p>

            <Note>
              We may need to verify your request (for example, by confirming you
              control the account email) to protect your privacy and prevent
              unauthorized access.
            </Note>
          </Section>

          <Section title="11. Children">
            <p>
              REZIME is not intended for children under 18 (or the age of legal
              majority in your jurisdiction). If you are under the legal age in
              your jurisdiction, do not use the Service or submit personal
              information.
            </p>
            <p className="mt-3">
              If we learn we collected data from a child, we will take steps to
              delete it.
            </p>
          </Section>

          <Section title="12. International Users">
            <p>
              If you access REZIME from outside Indonesia, you understand that
              your information may be processed in countries where our service
              providers operate. Processing locations may vary.
            </p>
            <Note>
              We use reputable providers and reasonable safeguards, but the
              internet is global by default.
            </Note>
          </Section>

          <Section title="13. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will post
              the updated version on this page and update the “Last updated”
              date. Continued use of REZIME after an update means you accept the
              updated policy.
            </p>
          </Section>

          <Section title="14. Contact">
            <p>
              For privacy-related questions, contact:{" "}
              <span className="text-white">hello@rezimeengine.com</span>
            </p>

            <p className="mt-3 text-xs text-neutral-500">
              Related links:{" "}
              <Link href="/terms" className="underline hover:text-white">
                Terms
              </Link>
            </p>
          </Section>
        </div>
      </Reveal>
    </main>
  );
}
