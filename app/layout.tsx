import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { NoiseTexture } from "@/components/signature/NoiseTexture";
import { CustomCursor } from "@/components/CustomCursor";
import { PageTransition } from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eleware AI | 20+ Qualified LinkedIn Calls in 50 Days",
  description:
    "Done-for-you LinkedIn appointment setting for executive consultants, coaches, and B2B founders. We book qualified calls. You close them. Guarantee: 20+ calls in 50 days, or we work free.",
  metadataBase: new URL("https://eleware.ai"),
  openGraph: {
    title: "Eleware AI | Done-for-you LinkedIn Appointment Setting",
    description: "20+ qualified calls in 50 days. Or we work free.",
    url: "https://eleware.ai",
    siteName: "Eleware AI",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eleware AI",
    description: "20+ qualified calls in 50 days. Or we work free.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Abdullah Hijazi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <PageTransition />
        <NoiseTexture opacity={0.035} />
        <CustomCursor />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
