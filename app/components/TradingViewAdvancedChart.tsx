"use client";

import { useEffect, useRef } from "react";

type Props = {
  symbol?: string; // e.g. "OANDA:XAUUSD", "BINANCE:BTCUSDT", "NASDAQ:AAPL"
  interval?: string; // "1", "5", "15", "60", "240", "D", "W"
  height?: number;
};

export default function TradingViewAdvancedChart({
  symbol = "OANDA:XAUUSD",
  interval = "60",
  height = 520,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous widget if hot-reloading / navigating back
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol,
      interval,
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      hide_top_toolbar: false,
      hide_legend: false,
      allow_symbol_change: true,
      save_image: false,
      calendar: false,
      support_host: "https://www.tradingview.com",
    });

    container.appendChild(script);
  }, [symbol, interval]);

  return (
    <div className="w-full">
      <div
        className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40"
        style={{ height }}
      >
        <div ref={containerRef} className="h-full w-full" />
      </div>
    </div>
  );
}
