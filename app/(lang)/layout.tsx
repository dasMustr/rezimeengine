import React from "react";

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:py-14">
      {children}
    </div>
  );
}