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
      {/* moving highlight (runs once on hover via .sheen-once) */}
      <span className="sheen-once absolute -left-1/2 top-[-30%] h-[160%] w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100" />
      {/* subtle edge glow */}
      <span className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
    </span>
  );
}
