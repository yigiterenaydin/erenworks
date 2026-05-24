import type { Metadata, Viewport } from "next";
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
  title: "Eren Aydin | Schueler Portfolio aus Zuerich",
  description:
    "Persoenliches Profil, schulische Unterlagen (PDF), Erfahrungen, Schnupperlehren, Sprachkenntnisse, Interessen, Referenzen und Kontakt. Portfolio von Eren Aydin aus Zuerich.",
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
    "react",
    "tailwind css",
    "javascript",
    "zuerich",
    "schweiz",
    "schueler",
    "entwickler",
    "programmierer",
  ],
  authors: [{ name: "Eren Aydin" }],
  creator: "Eren Aydin",
  publisher: "Eren Aydin",
  category: "Portfolio",
  classification: "Personal Website",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Eren Aydin | Portfolio",
    description:
      "Persoenliches Profil, schulische Unterlagen, Erfahrungen, Sprachkenntnisse und Projekte.",
    url: "https://erenworks.vercel.app",
    siteName: "Eren Aydin Portfolio",
    type: "website",
    locale: "de_CH",
    images: [
      {
        url: "/assets/bilder/eren-photo.png",
        width: 1200,
        height: 630,
        alt: "Eren Aydin Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eren Aydin | Portfolio",
    description:
      "Persoenliches Profil, schulische Unterlagen, Erfahrungen und Projekte.",
    images: ["/assets/bilder/eren-photo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://erenworks.vercel.app",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
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
        <script
          id="ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Eren Aydin",
              url: "https://erenworks.vercel.app",
              image: "https://erenworks.vercel.app/assets/bilder/eren-photo.png",
              description:
                "Portfolio website showcasing profile, school documents, projects and experiences.",
              jobTitle: "Schueler",
              inLanguage: "de-CH",
              sameAs: [
                "https://github.com/yigiterenaydin",
                "https://www.instagram.com/eren_zhhh/"
              ],
              knowsAbout: [
                "Next.js",
                "TypeScript",
                "React",
                "Tailwind CSS",
                "JavaScript",
                "HTML",
                "CSS"
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "CH",
                addressLocality: "Zuerich"
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Sekundarschule"
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://erenworks.vercel.app"
              }
            })
          }}
        ></script>

        <script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Eren Aydin Portfolio",
              url: "https://erenworks.vercel.app",
              description:
                "Personal portfolio website with projects, experiences and school documents.",
              inLanguage: "de-CH",
              author: {
                "@type": "Person",
                name: "Eren Aydin"
              }
            })
          }}
        ></script>

        <a
          href="#home"
          className="sr-only focus:not-sr-only fixed top-3 left-3 z-[100] rounded-md bg-indigo-600 px-4 py-2 text-white shadow focus:outline-none focus:ring-2 focus:ring-indigo-400/80"
        >
          Zum Inhalt springen
        </a>

        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
