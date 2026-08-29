import type { Metadata } from "next";
import { Big_Shoulders, Newsreader, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bigShoulders = Big_Shoulders({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const newsreader = Newsreader({
  variable: "--font-body",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flossatech.com"),
  title: {
    default: "Flossatech — Gadget Reviews Built on Real Specs",
    template: "%s | Flossatech",
  },
  description:
    "Gadget and consumer tech buying guides that check every claim against real manufacturer data, pricing, and sourced benchmarks. Written by Flossa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${newsreader.variable} ${plexMono.variable} h-full`}
    >
      <head>
        {/* AdSense: loads the ad-serving script site-wide. Auto ads are
            controlled from the AdSense dashboard once the site is
            approved — this tag alone doesn't place any ad units, it
            just makes ad-serving possible. Publisher ID matches the
            ads.txt entry in /public/ads.txt. */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5005193604152812"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
