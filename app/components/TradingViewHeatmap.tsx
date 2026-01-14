"use client";

import { useEffect, useRef } from "react";

export default function TradingViewHeatmap({ height = 520 }: { height?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (ref.current.querySelector("script[data-tv]")) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-heatmap.js";
    script.async = true;
    script.setAttribute("data-tv", "true");

    script.innerHTML = JSON.stringify({
      exchanges: [],
      dataSource: "SPX500",
      grouping: "sector",
      blockSize: "market_cap_basic",
      blockColor: "change",
      locale: "en",
      symbolUrl: "",
      colorTheme: "dark",
      hasTopBar: true,
      isDataSetEnabled: true,
      isZoomEnabled: true,
      hasSymbolLogo: true,
      isMonoSize: false,
      width: "100%",
      height,
    });

    ref.current.appendChild(script);
  }, [height]);

  return (
    <div className="premium-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">
          Market Heatmap
        </p>
        <p className="text-[11px] text-neutral-500">TradingView</p>
      </div>
      <div ref={ref} className="w-full" />
    </div>
  );
}
