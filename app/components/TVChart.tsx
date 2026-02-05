"use client";

import { useEffect, useRef } from "react";

export default function TVChart() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "NASDAQ:GOOG",
      interval: "D",
      timezone: "exchange",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: false,
      hide_top_toolbar: false,
      hide_legend: true,
      save_image: false,
      studies: [],
      backgroundColor: "#0a0a0a",
      gridColor: "#1f1f1f",
      withdateranges: true,
      range: "12M",
    });

    container.current.appendChild(script);
  }, []);

  return (
    <div className="mt-10">
      <div className="rounded-2xl border border-white/10 overflow-hidden">
        <div ref={container} style={{ height: "520px", width: "100%" }} />
      </div>

      <p className="mt-3 text-xs text-neutral-500">
        This is a real market chart. You are seeing the same price movement everyone sees.
      </p>
    </div>
  );
}
