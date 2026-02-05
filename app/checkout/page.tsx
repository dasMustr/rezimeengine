"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

const plans: Record<string, { name: string; price: string }> = {
  engine: { name: "Engine", price: "$19.99 / month" },
  sync: { name: "Sync", price: "$29.99 / month" },
  battlelines: { name: "Battle Lines", price: "$34.99 / month" },
};

export default function CheckoutPage() {
  const params = useSearchParams();
  const planKey = params.get("plan") || "engine";
  const plan = plans[planKey];

  return (
    <main className="min-h-screen bg-black text-neutral-200 px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold text-white mb-6">Confirm Subscription</h1>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
        <div>
          <p className="text-sm text-white/50">Selected Plan</p>
          <p className="text-xl text-white font-semibold">{plan.name}</p>
          <p className="text-sm text-white/60">{plan.price}</p>
        </div>

        <div className="text-sm text-white/70 leading-relaxed">
          <p className="font-semibold text-white mb-2">Your subscription includes:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Access to educational documentation</li>
            <li>Research-based market structure materials</li>
            <li>Analytical chart tools & interpretation guides</li>
            <li>Framework-based decision support</li>
          </ul>
        </div>

        <div className="text-xs text-white/50 border-t border-white/10 pt-4 space-y-2">
          <p>REZIME provides educational and analytical tools only.</p>
          <p>Not financial advice. Not trading signals. No profit guarantees.</p>
          <p>By continuing, you agree to our{" "}
            <Link href="/terms" className="underline">Terms</Link>,{" "}
            <Link href="/privacy" className="underline">Privacy Policy</Link>, and{" "}
            <Link href="/refunds" className="underline">Refund Policy</Link>.
          </p>
        </div>

        {/* This button will later call Stripe or Xendit */}
        <button
          className="w-full rounded-xl bg-white text-black py-3 font-semibold hover:opacity-90"
          onClick={() => alert("Payment integration goes here")}
        >
          Proceed to Payment
        </button>
      </div>

      <p className="mt-6 text-xs text-white/40 text-center">
        Secure checkout will be handled by our payment provider.
      </p>
    </main>
  );
}
