import "./globals.css";
import type { Metadata } from "next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LivingBackground from "./components/LivingBackground";

export const metadata: Metadata = {
  title: "REZIME",
  description:
    "A calm framework for understanding market environments, managing risk, and staying in the game long enough to learn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-neutral-100 overflow-x-hidden antialiased">
        {/* Ambient system background */}
        <LivingBackground />

        {/* Top navigation */}
        <Nav />

        {/* Global philosophy line */}
        <div className="text-center text-xs tracking-wide text-neutral-400 border-b border-neutral-800 py-2">
          Learn safely. Move slowly. Stay in the game.
        </div>

        {/* Page content */}
        <main className="mx-auto max-w-5xl px-6 py-16 leading-relaxed">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
