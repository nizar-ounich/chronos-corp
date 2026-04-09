import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const francy = localFont({
  src: [
    {
      path: "../../public/fonts/Francy.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/Francy.woff",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/Francy.ttf",
      style: "normal",
      weight: "400",
    },
  ],
  variable: "--font-francy",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chronos-corp.com'),
  title: "Chronos Corp. | Production, Digital et Talent",
  description: "Contenu visuel, image de marque et management. Production audiovisuelle, management de talents et stratégies digitales.",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Chronos Corp. | Production, Digital et Talent",
    description: "Contenu visuel, image de marque et management.",
    images: ['/opengraph-image.png'],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Chronos Corp. | Production, Digital et Talent",
    description: "Contenu visuel, image de marque et management.",
    images: ['/twitter-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${francy.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
