"use client";

import { useEffect, useRef } from "react";

type SymbolItem = {
  proName: string;
  title?: string;
};

export default function TradingViewTickerTape({
  symbols = [
    { proName: "OANDA:XAUUSD", title: "Gold" },
    { proName: "OANDA:EURUSD", title: "EURUSD" },
    { proName: "OANDA:GBPUSD", title: "GBPUSD" },
    { proName: "CRYPTO:BTCUSD", title: "BTC" },
    { proName: "CRYPTO:ETHUSD", title: "ETH" },
    { proName: "NASDAQ:NVDA", title: "NVDA" },
    { proName: "SP:SPX", title: "S&P 500" },
  ] as SymbolItem[],
}: {
  symbols?: SymbolItem[];
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Prevent double-inject (React strict mode / route transitions)
    if (containerRef.current.querySelector("script[data-tv]")) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.setAttribute("data-tv", "true");

    script.innerHTML = JSON.stringify({
      symbols,
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en",
    });

    containerRef.current.appendChild(script);
  }, [symbols]);

  return (
    <div className="premium-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      {/* subtle top label */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
        <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">
          Live Markets
        </p>
        <p className="text-[11px] text-neutral-500">
          Data by TradingView
        </p>
      </div>

      {/* widget mount */}
      <div ref={containerRef} className="w-full" />

      {/* soft fade edges for premium feel */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/60 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/60 to-transparent" />
    </div>
  );
}
