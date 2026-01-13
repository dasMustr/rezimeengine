"use client";

export default function Sheen({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={[
        "pointer-events-none absolute inset-0 overflow-hidden rounded-2xl",
        className,
      ].join(" ")}
    >
      {/* moving highlight */}
      <span className="absolute -left-1/2 top-[-30%] h-[160%] w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-sheen" />
      {/* subtle edge glow */}
      <span className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
    </span>
  );
}
