import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, DM_Mono } from "next/font/google";
import Script from "next/script";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--next-font-bebas",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--next-font-sans",
  display: "swap",
  preload: true,
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--next-font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quazarrsecurity.com"),
  title: {
    default: "QuaZarR Security | AI Risk Assessments for UK SMBs",
    template: "%s | QuaZarR Security",
  },
  description:
    "AI risk assessments for UK SMBs in recruitment, legal, finance, HR, and accountancy. Dual expert sign-off. Board-ready reports. From £750.",
  keywords: [
    "AI risk assessment UK",
    "EU AI Act compliance",
    "GDPR AI compliance",
    "AI governance UK SMB",
    "NIST AI RMF",
    "AI cybersecurity consultancy",
    "AI compliance assessment",
    "UK AI regulation",
    "OWASP LLM",
    "OWASP LLM Top 10 2026",
    "MITRE ATLAS",
    "Equality Act AI recruitment",
    "AI bias recruitment UK",
  ],
  openGraph: {
    siteName: "QuaZarR Security",
    locale: "en_GB",
    type: "website",
    url: "https://quazarrsecurity.com",
    title: "QuaZarR Security | AI Risk Assessments for UK SMBs",
    description:
      "AI risk assessments for UK SMBs. Dual expert sign-off. Board-ready reports. From £750.",
    images: [
      {
        url: "https://quazarrsecurity.com/og-image.png",
        width: 1080,
        height: 1080,
        alt: "QuaZarR Security",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuaZarR Security | AI Risk Assessments for UK SMBs",
    description:
      "AI risk assessments for UK SMBs. Dual expert sign-off. From £750.",
    images: ["https://quazarrsecurity.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="flex flex-col min-h-screen w-full overflow-x-hidden">
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="b1efc722-213a-4f5a-8fdc-4f1874054662"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
        <JsonLd />
        <Nav />
        <main className="flex-1 w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
