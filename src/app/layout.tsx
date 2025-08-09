import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://erenworks.vercel.app"),
  title: "Eren Aydin – Portfolio",
  description:
    "Persönliches Profil, Schulische Unterlagen (PDF), Erfahrungen & Schnupperlehren, Sprachkenntnisse, Interessen, Referenzen und Kontakt.",
  keywords: [
    "portfolio",
    "lebenslauf",
    "schulische unterlagen",
    "zeugnisse",
    "erfahrungen",
    "schnupperlehren",
    "sprachkenntnisse",
    "next.js",
    "typescript",
  ],
  authors: [{ name: "Eren Aydin" }],
  openGraph: {
    title: "Eren Aydin – Portfolio",
    description:
      "Persönliches Profil, Schulische Unterlagen (PDF), Erfahrungen & Schnupperlehren, Sprachkenntnisse, Interessen, Referenzen und Kontakt.",
    url: "https://erenworks.vercel.app",
    siteName: "Eren Aydin – Portfolio",
    type: "website",
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eren Aydin – Portfolio",
    description:
      "Persönliches Profil, Schulische Unterlagen (PDF), Erfahrungen & Schnupperlehren, Sprachkenntnisse, Interessen, Referenzen und Kontakt.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://erenworks.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Toast container */}
        <div id="toast-root" />
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
