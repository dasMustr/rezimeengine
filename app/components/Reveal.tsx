"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

export default function Reveal({ children, className = "", delayMs = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  // ✅ Start visible by default (server + first paint)
  const [shown, setShown] = useState(true);

  // ✅ Only run reveal logic after hydration
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  useEffect(() => {
    if (!hydrated) return;

    const el = ref.current;
    if (!el) return;

    // If user prefers reduced motion, just show
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setShown(true);
      return;
    }

    // ✅ Now we can start hidden and reveal
    setShown(false);

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (delayMs > 0) {
            const t = setTimeout(() => setShown(true), delayMs);
            return () => clearTimeout(t);
          }
          setShown(true);
          obs.disconnect();
        }
      },
      {
        threshold: 0.1,
        // Helps iOS/Safari weirdness + makes it trigger earlier
        rootMargin: "0px 0px -10% 0px",
      }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delayMs, hydrated]);

  // ✅ Before hydration: render normally (never hidden)
  if (!hydrated) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        shown ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[1px]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
