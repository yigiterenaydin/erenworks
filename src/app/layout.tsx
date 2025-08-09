import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Portfolio - Max Mustermann | Full-Stack Entwickler",
  description: "Portfolio von Max Mustermann - Full-Stack Entwickler mit Leidenschaft für moderne Webtechnologien. React, Next.js, TypeScript und mehr.",
  keywords: ["portfolio", "full-stack entwickler", "react", "next.js", "typescript", "webentwicklung", "frontend", "backend"],
  authors: [{ name: "Max Mustermann" }],
  openGraph: {
    title: "Portfolio - Max Mustermann | Full-Stack Entwickler",
    description: "Portfolio von Max Mustermann - Full-Stack Entwickler mit Leidenschaft für moderne Webtechnologien",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
