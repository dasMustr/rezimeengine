import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 text-sm text-neutral-400 flex flex-col md:flex-row justify-between gap-6">
        
        <div className="space-y-2">
          <p className="text-white font-semibold">REZIME Engine</p>
          <p>Market survival framework. Education and analytical tools.</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white font-semibold">Legal</p>
          <Link href="/terms" className="hover:text-white transition">Terms of Use</Link>
          <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/refunds" className="hover:text-white transition">Refund Policy</Link>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white font-semibold">Contact</p>
          <a href="mailto:hello@rezimeengine.com" className="hover:text-white transition">
            hello@rezimeengine.com
          </a>
          <p className="text-xs text-neutral-500">
            REZIME provides educational and analytical tools only. Not financial advice.
          </p>
        </div>

      </div>

      <div className="text-center text-xs text-neutral-600 py-4 border-t border-neutral-800">
        © {new Date().getFullYear()} REZIME Engine. All rights reserved.
      </div>
    </footer>
  )
}
