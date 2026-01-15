import React from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: Props) {
  return (
    <section id={id} className="space-y-6 scroll-mt-24">
      <div className="space-y-2">
        {eyebrow && (
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        {subtitle && (
          <p className="max-w-3xl text-sm text-neutral-300 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
