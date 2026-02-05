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
      {/* gentle sweep */}
      <span className="sheen-once absolute -left-1/2 top-[-40%] h-[180%] w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 group-hover:opacity-100" />
      {/* subtle boundary */}
      <span className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
    </span>
  );
}
