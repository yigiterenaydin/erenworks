import type { Metadata } from "next";
import Script from "next/script";
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
    images: [
      {
        url: "/assets/bilder/eren-photo.png",
        width: 1200,
        height: 630,
        alt: "Eren Aydin – Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eren Aydin – Portfolio",
    description:
      "Persönliches Profil, Schulische Unterlagen (PDF), Erfahrungen & Schnupperlehren, Sprachkenntnisse, Interessen, Referenzen und Kontakt.",
    images: ["/assets/bilder/eren-photo.png"],
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
        {/* JSON-LD Person */}
        <Script id="ld-person" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Eren Aydin",
            url: "https://erenworks.vercel.app",
            sameAs: [
              "https://github.com/yigiterenaydin",
              "https://www.instagram.com/eren_zhhh/"
            ],
            jobTitle: "Schüler",
            image: "https://erenworks.vercel.app/assets/bilder/eren-photo.png"
          })}
        </Script>
        {/* Skip to content */}
        <a
          href="#home"
          className="sr-only focus:not-sr-only fixed top-3 left-3 z-[100] px-4 py-2 rounded-md bg-indigo-600 text-white shadow focus:outline-none focus:ring-2 focus:ring-indigo-400/80"
        >
          Zum Inhalt springen
        </a>
        {/* Toast container */}
        <div id="toast-root" />
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
