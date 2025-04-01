import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://myfavpetsitter.org",
  ),
  title: "MyFavPetSitter - Trusted Pet Sitting Services in Folsom, CA",
  description:
    "Reliable, loving in-home pet care in Folsom and surrounding areas. Dogs, cats, and small pets cared for with compassion and experience.",
  openGraph: {
    title: "MyFavPetSitter - Folsom’s Favorite In-Home Pet Sitter",
    description:
      "Expert pet sitting services in Folsom, CA. Daily visits, overnight care, and drop-ins with a personal touch. Serving families who love their pets like family.",
    url: "https://myfavpetsitter.org",
    siteName: "MyFavPetSitter",
    images: [
      {
        url: "/og-image.webp",
        width: 735,
        height: 490,
        alt: "Golden retriever smiling in the sun",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyFavPetSitter - Loving Pet Care in Folsom, CA",
    description:
      "In-home pet sitting trusted by local families in Folsom. Daily drop-ins and overnight stays for dogs, cats, and small pets.",
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
