// app/components/VisualBlocks.tsx
import React from "react";

export function VisualSlot({
  label = "Screenshot Slot",
  caption,
  height = 320,
  badge = "placeholder",
}: {
  label?: string;
  caption?: string;
  height?: number;
  badge?: string;
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-black/30 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white">{label}</p>
          {caption ? (
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              {caption}
            </p>
          ) : null}
        </div>
        <span className="text-xs text-neutral-500">{badge}</span>
      </div>

      <div
        className="mt-4 grid place-items-center rounded-xl border border-dashed border-white/15 bg-black/40"
        style={{ height }}
      >
        <div className="text-center">
          <div className="text-sm text-neutral-200">Drop image here later</div>
          <div className="mt-1 text-xs text-neutral-500">
            Keep the slot. It makes the page feel real.
          </div>
        </div>
      </div>
    </div>
  );
}

export function RuleTiles({
  title,
  subtitle,
  rules,
}: {
  title: string;
  subtitle?: string;
  rules: { title: string; desc: string; tone?: "soft" | "hard" }[];
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="space-y-2">
        <p className="text-sm font-semibold text-white">{title}</p>
        {subtitle ? (
          <p className="text-sm text-neutral-300 leading-relaxed">{subtitle}</p>
        ) : null}
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {rules.map((r, idx) => (
          <div
            key={idx}
            className={[
              "rounded-xl border p-4",
              r.tone === "hard"
                ? "border-white/15 bg-white/10"
                : "border-white/10 bg-black/30",
            ].join(" ")}
          >
            <p className="text-sm font-semibold text-white">{r.title}</p>
            <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
              {r.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RegimeStripDemo({
  title = "Regime Strip (demo)",
  subtitle = "This is your signature UI: a calm map of who rules, when conflict forms, and when the regime flips.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="calm-block rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white">{title}</p>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            {subtitle}
          </p>
        </div>
        <span className="text-xs text-neutral-500">visual</span>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/30">
        <div className="grid grid-cols-12">
          <div className="col-span-6 p-4">
            <p className="text-[11px] uppercase tracking-widest text-neutral-400">
              Empire
            </p>
            <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
              Stable rule. Cleaner behavior. Boring is good.
            </p>
          </div>

          <div className="col-span-3 border-l border-white/10 p-4">
            <p className="text-[11px] uppercase tracking-widest text-neutral-400">
              Siege
            </p>
            <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
              Compression / conflict. Lower confidence.
            </p>
          </div>

          <div className="col-span-3 border-l border-white/10 p-4">
            <p className="text-[11px] uppercase tracking-widest text-neutral-400">
              Revolution
            </p>
            <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
              Regime flips. Old assumptions invalid.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 p-4">
          <div className="flex h-8 overflow-hidden rounded-lg border border-white/10">
            <div className="w-[58%] bg-white/10" />
            <div className="w-[22%] bg-white/5" />
            <div className="w-[20%] bg-white/15" />
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-neutral-500">
            <span>calm</span>
            <span>unclear</span>
            <span>change</span>
          </div>
        </div>
      </div>

      <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
        REZIME teaches a simple habit: <span className="text-neutral-300">name the regime first</span>, then decide behavior.
      </p>
    </div>
  );
}
