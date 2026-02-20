import React from "react";
import LangToggle from "./_components/LangToggle";
import PortalMenu from "@/app/components/PortalMenu";

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Top-right controls */}
      <div className="fixed right-4 top-4 z-50 flex items-center gap-2">
        <PortalMenu />
        <LangToggle />
      </div>

      {/* Page shell */}
      <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:py-14">
        {children}
      </div>
    </>
  );
}