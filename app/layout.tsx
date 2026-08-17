import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F7F3EE",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "OZNIOR — Haute Parfumerie & Extrait Concentré",
  description: "L'Essence de l'Elégance Pure. Exclusive Cambodian Oud, Ambergris, and rare perfume concentrates aged 90 days in copper vessels.",
  keywords: [
    "OZNIOR",
    "Haute Parfumerie",
    "Extrait de Parfum",
    "Cambodian Oud",
    "Luxury Perfume Bangladesh",
    "Dhaka Fragrances",
  ],
  openGraph: {
    title: "OZNIOR — Haute Parfumerie & Extrait Concentré",
    description: "Exclusive Cambodian Oud, Ambergris, and rare 30% Extrait de Parfum concentrates.",
    url: "https://oznior.com",
    siteName: "OZNIOR Parfums",
    images: [
      {
        url: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "OZNIOR Royale Oud Concentré",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OZNIOR — Haute Parfumerie & Extrait Concentré",
    description: "Exclusive Cambodian Oud, Ambergris, and rare 30% Extrait de Parfum concentrates.",
    images: ["https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F7F3EE] text-[#1A1A1A] antialiased selection:bg-[#B08D57] selection:text-[#F7F3EE]">
        {children}
      </body>
    </html>
  );
}
