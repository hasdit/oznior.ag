import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OZNIOR — Haute Parfumerie & Luxury Fragrances",
  description: "L'Essence de l'Elégance Pure. Exclusive Cambodian Oud, Ambergris, and rare perfume concentrates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-obsidian text-alabaster antialiased selection:bg-gold-champagne selection:text-obsidian">
        {children}
      </body>
    </html>
  );
}
