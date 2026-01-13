export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-neutral-400 space-y-3">
        <p>
          Educational documentation only. Not financial advice. REZIME does not
          provide buy/sell signals.
        </p>
        <p className="text-neutral-500">
          © {new Date().getFullYear()} REZIME Engine. “REZIME by paeteon
          (dasMustr)”.
        </p>
      </div>
    </footer>
  );
}
