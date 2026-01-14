"use client";

import Link from "next/link";

type ProofLinks = Partial<{
  youtube: string;
  instagram: string;
  tiktok: string;
  x: string;
  tradingview: string;
  substack: string;
  notion: string;
  pdf: string;
}>;

export default function ProofCard({
  week,
  date,
  title,
  summary,
  tags = [],
  links = {},
}: {
  week: number;
  date: string;
  title: string;
  summary: string;
  tags?: string[];
  links?: ProofLinks;
}) {
  const items: { k: keyof ProofLinks; label: string; href?: string }[] = [
    { k: "youtube", label: "YouTube", href: links.youtube },
    { k: "instagram", label: "Instagram", href: links.instagram },
    { k: "x", label: "X", href: links.x },
    { k: "tradingview", label: "TradingView", href: links.tradingview },
    { k: "substack", label: "Substack", href: links.substack },
    { k: "notion", label: "Lab", href: links.notion },
    { k: "pdf", label: "PDF", href: links.pdf },
    // keep tiktok optional, but not required / not embedded
    { k: "tiktok", label: "TikTok", href: links.tiktok },
  ].filter((x) => !!x.href);

  return (
    <div className="premium-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-neutral-400">
            Week {week} • {date}
          </div>
          <h3 className="mt-2 text-base font-semibold text-white">{title}</h3>
        </div>

        <span className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-neutral-300">
          Proof
        </span>
      </div>

      <p className="mt-3 text-sm text-neutral-300 leading-relaxed">{summary}</p>

      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-neutral-300"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((it) => (
          <Link
            key={it.k}
            href={it.href!}
            target="_blank"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-neutral-200 hover:bg-white/10 transition"
          >
            {it.label} →
          </Link>
        ))}

        {items.length === 0 && (
          <span className="text-xs text-neutral-500">
            Links pending — will populate after Week 1 post.
          </span>
        )}
      </div>
    </div>
  );
}
