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
  title: "Eren Aydin – Portfolio | Schüler Portfolio",
  description:
    "Persönliches Profil, Schulische Unterlagen (PDF), Erfahrungen & Schnupperlehren, Sprachkenntnisse, Interessen, Referenzen und Kontakt. Portfolio von Eren Aydin aus Zürich.",
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
    "zürich",
    "schweiz",
    "schüler",
    "entwickler",
    "programmierer"
  ],
  authors: [{ name: "Eren Aydin" }],
  creator: "Eren Aydin",
  publisher: "Eren Aydin",
  category: "Portfolio",
  classification: "Personal Website",
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
        {/* Enhanced JSON-LD Person */}
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
            description: "Portfolio website showcasing personal profile, school documents, experiences, language skills, and projects.",
            image: "https://erenworks.vercel.app/assets/bilder/eren-photo.png",
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
              "addressCountry": "CH",
              "addressLocality": "Zürich"
            },
            alumniOf: {
              "@type": "EducationalOrganization",
              "name": "Sekundarschule"
            }
          })}
        </Script>
        
        {/* JSON-LD Website */}
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Eren Aydin Portfolio",
            url: "https://erenworks.vercel.app",
            description: "Personal portfolio website with school documents, experiences, and projects.",
            author: {
              "@type": "Person",
              name: "Eren Aydin"
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://erenworks.vercel.app/#projects",
              "query-input": "required name=search_term_string"
            }
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
        
        {/* Image Preloading - Removed to fix console warning */}
        
        {/* Performance Monitoring Script */}
        <Script id="performance-monitor" strategy="afterInteractive">
          {`
            // Performance monitoring
            if (typeof window !== 'undefined') {
              // Measure bundle load time
              const startTime = performance.now();
              
              window.addEventListener('load', () => {
                const loadTime = performance.now() - startTime;
                console.log('🚀 Bundle load time:', loadTime.toFixed(2) + 'ms');
                
                // Check code splitting
                const scripts = document.querySelectorAll('script[src]');
                const dynamicChunks = Array.from(scripts).filter(s => 
                  s.getAttribute('src')?.includes('chunk')
                );
                console.log('📦 Dynamic chunks loaded:', dynamicChunks.length);
                
                // Memory usage (if available)
                if ('memory' in performance) {
                  const memory = performance.memory;
                  console.log('💾 Memory usage:', {
                    used: Math.round(memory.usedJSHeapSize / 1048576) + 'MB',
                    total: Math.round(memory.totalJSHeapSize / 1048576) + 'MB'
                  });
                }
              });

              // Memory leak prevention - global cleanup on page unload
              window.addEventListener('beforeunload', () => {
                // Clear all timeouts
                const highestTimeoutId = setTimeout(() => {}, 0);
                for (let i = 0; i < highestTimeoutId; i++) {
                  clearTimeout(i);
                }

                // Clear all intervals
                const highestIntervalId = setInterval(() => {}, 0);
                for (let i = 0; i < highestIntervalId; i++) {
                  clearInterval(i);
                }

                console.log('🧹 Global cleanup completed on page unload');
              });
            }
          `}
        </Script>
        
        {children}
      </body>
    </html>
  );
}
