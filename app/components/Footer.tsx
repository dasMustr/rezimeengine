import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12 text-sm text-neutral-400 flex flex-col md:flex-row justify-between gap-8">
        
        <div className="space-y-2">
          <p className="text-white font-semibold tracking-[0.18em]">REZIME</p>
          <p>A calm market survival framework — education and analytical tools.</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white font-semibold">Legal</p>
          <Link href="/terms" className="hover:text-white transition">
            Terms of Use
          </Link>
          <Link href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white font-semibold">Scope</p>
          <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
            REZIME provides educational and analytical tools only. Not financial
            advice. Not signals. No guarantees.
          </p>
        </div>

      </div>

      <div className="text-center text-xs text-neutral-600 py-4 border-t border-neutral-800">
        © {new Date().getFullYear()} REZIME. All rights reserved.
      </div>
    </footer>
  );
}
