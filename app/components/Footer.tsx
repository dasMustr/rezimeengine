export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-neutral-400 space-y-3">
        <p className="text-xs text-neutral-500">
          Educational documentation only. Not financial advice.
        </p>
        <p className="text-xs text-neutral-500">
          REZIME is a context layer. It can support many execution styles.
        </p>
        <p className="text-neutral-500">
          © {new Date().getFullYear()} REZIME Engine. “REZIME by paeteon
          (dasMustr)”.
        </p>
      </div>
    </footer>
  );
}
