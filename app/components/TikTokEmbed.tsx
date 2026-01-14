"use client";

import { useEffect, useId, useRef } from "react";

declare global {
  interface Window {
    // TikTok embed.js sometimes exposes this helper
    tiktokEmbedLoad?: () => void;
  }
}

function ensureTikTokScript() {
  const id = "tiktok-embed-script";
  const existing = document.getElementById(id) as HTMLScriptElement | null;
  if (existing) return;

  const s = document.createElement("script");
  s.id = id;
  s.async = true;
  s.src = "https://www.tiktok.com/embed.js";
  document.body.appendChild(s);
}

export default function TikTokEmbed({
  url,
  caption,
}: {
  url: string;
  caption?: string;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const uid = useId();

  useEffect(() => {
    ensureTikTokScript();

    // If TikTok script already loaded, ask it to rescan embeds.
    // If not loaded yet, it will scan once it finishes downloading.
    const t = window.setTimeout(() => {
      window.tiktokEmbedLoad?.();
    }, 50);

    return () => window.clearTimeout(t);
  }, [url]);

  return (
    <div
      ref={wrapRef}
      className="premium-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5"
    >
      {caption ? (
        <div className="mb-3 text-xs text-neutral-400">{caption}</div>
      ) : null}

      {/* TikTok official embed format */}
      <blockquote
        key={uid + url}
        className="tiktok-embed"
        cite={url}
        data-video-id="" // optional (leave empty; cite is enough)
        style={{ maxWidth: "100%", minWidth: "0" }}
      >
        <section>
          <a target="_blank" rel="noreferrer" href={url}>
            View on TikTok
          </a>
        </section>
      </blockquote>
    </div>
  );
}
