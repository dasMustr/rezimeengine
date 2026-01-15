"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

export default function Reveal({ children, className = "", delayMs = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (shown) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;

        // IMPORTANT: disconnect immediately so we only trigger once
        obs.disconnect();

        if (delayMs > 0) {
          timeoutRef.current = window.setTimeout(() => {
            setShown(true);
            timeoutRef.current = null;
          }, delayMs);
        } else {
          setShown(true);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px", // helps mobile trigger earlier & smoother
      }
    );

    obs.observe(el);

    return () => {
      obs.disconnect();
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [delayMs, shown]);

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        shown ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-3 blur-[1px]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
