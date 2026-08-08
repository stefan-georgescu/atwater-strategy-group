import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://atwaterstrategygroup.com";

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

export const viewport: Viewport = {
  themeColor: "#05080f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-cream">
        {children}
      </body>
    </html>
  );
}
