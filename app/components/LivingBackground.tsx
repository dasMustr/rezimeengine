export default function LivingBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Subtle top glow */}
      <div className="absolute -top-32 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-white/6 blur-3xl rezime-float" />

      {/* Diagonal soft wash */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_10%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(700px_450px_at_80%_20%,rgba(255,255,255,0.04),transparent_55%),radial-gradient(900px_700px_at_50%_90%,rgba(255,255,255,0.03),transparent_60%)]" />

      {/* Vignette */}
      <div className="absolute inset-0 rezime-vignette" />

      {/* Film grain */}
      <div className="absolute inset-0 rezime-grain" />
    </div>
  );
}
