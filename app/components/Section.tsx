"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  /** Safety: if IO never fires (mobile quirks), force show after N ms */
  fallbackMs?: number;
};

export default function Reveal({
  children,
  className = "",
  delayMs = 0,
  fallbackMs = 900,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Respect prefers-reduced-motion
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;

    const apply = () => setReduceMotion(!!mq.matches);
    apply();

    // Safari/iOS compatibility: addListener/removeListener fallback
    if (mq.addEventListener) {
      mq.addEventListener("change", apply);
      return () => mq.removeEventListener("change", apply);
    } else {
      mq.addListener(apply);
      return () => mq.removeListener(apply);
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If user prefers reduced motion, don't gate visibility behind IO.
    if (reduceMotion) {
      setShown(true);
      return;
    }

    // If IO not supported, show immediately (never brick content).
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }

    let timeoutId: number | null = null;
    let fallbackId: number | null = null;
    let didTrigger = false;

    const show = () => {
      if (didTrigger) return;
      didTrigger = true;
      setShown(true);
    };

    // Fail-safe: if IO never fires, force show.
    fallbackId = window.setTimeout(show, Math.max(0, fallbackMs));

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          // Stop observing ASAP to avoid repeated work
          obs.disconnect();

          // Optional stagger
          if (delayMs > 0) {
            timeoutId = window.setTimeout(show, delayMs);
          } else {
            show();
          }
        }
      },
      {
        threshold: 0.12,
        // Start revealing a little before it fully enters (helps mobile)
        rootMargin: "80px 0px 80px 0px",
      }
    );

    obs.observe(el);

    return () => {
      obs.disconnect();
      if (timeoutId) window.clearTimeout(timeoutId);
      if (fallbackId) window.clearTimeout(fallbackId);
    };
  }, [delayMs, fallbackMs, reduceMotion]);

  // If reduced motion, don’t animate (also reduces mobile jank)
  const base =
    reduceMotion
      ? ""
      : "transition-all duration-700 ease-out will-change-transform";

  const state = shown
    ? "opacity-100 translate-y-0 blur-0"
    : "opacity-0 translate-y-4 blur-[1px]";

  return (
    <div ref={ref} className={[base, state, className].join(" ")}>
      {children}
    </div>
  );
}
