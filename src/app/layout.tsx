import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

/**
 * Self-hosted fonts, one per typographic role. Each exposes a CSS variable
 * that globals.css maps to --font-display / --font-heading / --font-body.
 * Swap a font here and the whole site follows.
 */
// Instrument Serif ships one weight (400) only, so `weight` must be pinned
// explicitly — unlike a variable font, there's no range to omit it from.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif", // h1, h2 (display)
  weight: "400",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight", // h3–h6 (sub-headings)
  subsets: ["latin"],
});

// Body text: on Apple platforms the OS system font (SF) is used directly (see
// --font-body in globals.css), so Switzer only ships as the fallback for
// Windows/Android/Linux where no comparable system UI font exists.
const switzer = localFont({
  variable: "--font-switzer",
  display: "swap",
  src: [
    { path: "./fonts/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Switzer-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Switzer-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Switzer-Bold.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Unipal — Your campus companion",
  description:
    "The all-in-one app that helps students find their people, plan their days, and get more out of university life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${interTight.variable} ${switzer.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
