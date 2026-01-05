import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ExecutiveAid - Virtual Assistant Services",
  description: "Empower your business with customizable virtual assistant solutions. Virtual Support, Real Results.",
  keywords: "virtual assistant, executive support, business assistance, remote work, productivity",
  authors: [{ name: "ExecutiveAid" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "ExecutiveAid - Virtual Assistant Services",
    description: "Empower your business with customizable virtual assistant solutions. Virtual Support, Real Results.",
    url: "https://executiveaid.org",
    siteName: "ExecutiveAid",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ExecutiveAid - Virtual Assistant Services",
    description: "Empower your business with customizable virtual assistant solutions. Virtual Support, Real Results.",
    creator: "@executiveaidltd",
  },
  alternates: {
    canonical: "https://executiveaid.org",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code when you get it
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/person-office-work-day.jpg"
          fetchPriority="high"
        />
      </head>
      <body className={`${inter.className} font-mono`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
