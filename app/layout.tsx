import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, DM_Mono } from "next/font/google";
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
    "AI risk assessments for UK SMBs in recruitment, legal, finance, HR, and accountancy. 7 frameworks. Dual expert sign-off. Board-ready reports. From £750.",
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
    "MITRE ATLAS",
  ],
  openGraph: {
    siteName: "QuaZarR Security",
    locale: "en_GB",
    type: "website",
    url: "https://quazarrsecurity.com",
    title: "QuaZarR Security | AI Risk Assessments for UK SMBs",
    description:
      "AI risk assessments for UK SMBs. 7 frameworks. Dual expert sign-off. Board-ready reports. From £750.",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuaZarR Security | AI Risk Assessments for UK SMBs",
    description:
      "AI risk assessments for UK SMBs. 7 frameworks. Dual expert sign-off. From £750.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://quazarrsecurity.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="flex flex-col min-h-screen w-full overflow-x-hidden">
        <JsonLd />
        <Nav />
        <main className="flex-1 w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
