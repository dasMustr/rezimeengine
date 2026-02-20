import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 pt-8 pb-12 text-sm text-neutral-400">
      <div className="mx-auto max-w-6xl px-6 space-y-6">

        {/* Navigation meta */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <Link href="/faq" className="hover:text-white transition">
            FAQ
          </Link>
          <span className="text-neutral-700">•</span>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
          <span className="text-neutral-700">•</span>
          <Link href="/terms" className="hover:text-white transition">
            Terms
          </Link>
          <span className="text-neutral-700">•</span>
          <Link href="/privacy" className="hover:text-white transition">
            Privacy
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[11px] text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          Educational framework only. Not financial advice. No signals. No predictions. No guarantees.
        </p>

        {/* Identity */}
        <p className="text-center text-[11px] text-neutral-600">
          © {new Date().getFullYear()} REZIME
        </p>

      </div>
    </footer>
  );
}