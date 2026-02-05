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

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setShown(true);
      return;
    }

    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(max-width: 768px)").matches;

    let t: number | null = null;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          if (delayMs > 0) {
            t = window.setTimeout(() => setShown(true), delayMs);
          } else {
            setShown(true);
          }
          obs.disconnect();
        }
      },
      {
        threshold: isMobile ? 0.01 : 0.1,
        rootMargin: isMobile ? "20% 0px 20% 0px" : "10% 0px 10% 0px",
      }
    );

    obs.observe(el);

    return () => {
      obs.disconnect();
      if (t) window.clearTimeout(t);
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={[
        "transition-all ease-out will-change-transform",
        "duration-500 sm:duration-700",
        shown ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-3 blur-[1px]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
