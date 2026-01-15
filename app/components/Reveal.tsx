"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

export default function Reveal({ children, className = "", delayMs = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion (nice polish)
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setShown(true);
      return;
    }

    // Mobile tends to be stricter; reveal earlier to avoid "blank page" feeling
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(max-width: 768px)").matches;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          if (delayMs > 0) {
            const t = window.setTimeout(() => setShown(true), delayMs);
            return () => window.clearTimeout(t);
          }
          setShown(true);
          obs.disconnect();
        }
      },
      {
        // Trigger sooner
        threshold: isMobile ? 0.01 : 0.1,
        // Reveal *before* it enters fully (prevents blank blocks)
        rootMargin: isMobile ? "20% 0px 20% 0px" : "10% 0px 10% 0px",
      }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={[
        "transition-all ease-out will-change-transform",
        // slightly faster on mobile feels better
        "duration-500 sm:duration-700",
        shown
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-0 translate-y-3 blur-[1px]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
