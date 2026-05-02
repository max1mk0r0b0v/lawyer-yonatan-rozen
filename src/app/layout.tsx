import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "עו\"ד יונתן רוזן | ליווי משפטי בעסקאות מקרקעין",
    template: "%s | עו\"ד יונתן רוזן",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "עו\"ד יונתן רוזן" }],
  creator: "עו\"ד יונתן רוזן",
  openGraph: {
    title: "עו\"ד יונתן רוזן | ליווי משפטי בעסקאות מקרקעין",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "עו\"ד יונתן רוזן | ליווי משפטי בעסקאות מקרקעין",
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1118",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
