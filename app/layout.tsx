import "./globals.css";
import type { Metadata } from "next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LivingBackground from "./components/LivingBackground";

export const metadata: Metadata = {
  title: "REZIME Engine",
  description: "Regime mapping for holding through market cycles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white overflow-x-hidden">
        <LivingBackground />
        <Nav />
        <main className="mx-auto max-w-6xl px-6 py-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
