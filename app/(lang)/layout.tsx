import React from "react";
import LangToggle from "./_components/LangToggle";

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed right-4 top-4 z-50">
        <LangToggle />
      </div>
      {children}
    </>
  );
}