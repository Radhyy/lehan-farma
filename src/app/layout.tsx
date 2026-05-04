import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const SITE_URL = "https://lehanfarma.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lehan Farma | Apotek Modern & Terpercaya",
    template: "%s | Lehan Farma",
  },
  description:
    "Apotek modern dan terpercaya yang menyediakan obat resep, obat bebas, suplemen, konsultasi apoteker profesional, dan layanan antar obat ke rumah Anda.",
  keywords: [
    "apotek",
    "apotek online",
    "beli obat",
    "obat resep",
    "konsultasi apoteker",
    "Lehan Farma",
    "apotek terpercaya",
    "suplemen kesehatan",
    "obat demam",
    "vitamin",
  ],
  authors: [{ name: "Lehan Farma" }],
  creator: "Lehan Farma",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Lehan Farma",
    title: "Lehan Farma | Apotek Modern & Terpercaya",
    description:
      "Apotek modern dan terpercaya yang menyediakan obat resep, obat bebas, suplemen, konsultasi apoteker profesional, dan layanan antar obat ke rumah Anda.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Lehan Farma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lehan Farma | Apotek Modern & Terpercaya",
    description:
      "Apotek modern dan terpercaya yang menyediakan obat resep, obat bebas, suplemen, konsultasi apoteker profesional, dan layanan antar obat.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
