import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://atwaterstrategy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Atwater Strategy Group | 1-on-1 High Finance & Consulting Coaching",
    template: "%s | Atwater Strategy Group",
  },
  description:
    "Elite 1-on-1 coaching for students breaking into investment banking, private equity, asset management, and MBB consulting. 300+ offers secured at the world's top firms.",
  keywords: [
    "investment banking coaching",
    "private equity recruiting",
    "management consulting coaching",
    "high finance mentorship",
    "IB interview prep",
    "finance career coaching",
  ],
  openGraph: {
    title: "Atwater Strategy Group | 1-on-1 High Finance & Consulting Coaching",
    description:
      "Elite 1-on-1 coaching for students breaking into the world's most competitive finance and consulting roles. 300+ offers secured.",
    url: siteUrl,
    siteName: "Atwater Strategy Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atwater Strategy Group | 1-on-1 High Finance & Consulting Coaching",
    description:
      "Elite 1-on-1 coaching for students breaking into the world's most competitive finance and consulting roles.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-cream">
        {children}
      </body>
    </html>
  );
}
