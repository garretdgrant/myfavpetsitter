import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToasterProvider } from "@/components/ToasterProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://myfavpetsitter.org";

  return {
    metadataBase: new URL(baseUrl),
    title: "MyFavPetSitter - Trusted Pet Sitting Services in Folsom, CA",
    description:
      "Loving in-home pet sitting services in Folsom, CA. Trusted by local families for drop-ins, dog walks, overnight stays, and more.",
    alternates: {
      canonical: `${baseUrl}`,
    },
    openGraph: {
      title: "MyFavPetSitter - Folsom’s Favorite In-Home Pet Sitter",
      description:
        "Experienced pet sitter offering compassionate care for dogs, cats, and small animals in Folsom and surrounding areas. Daily visits, overnight care, and more.",
      url: baseUrl,
      siteName: "MyFavPetSitter",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.webp`,
          width: 735,
          height: 490,
          alt: "Golden retriever smiling in the sun",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "MyFavPetSitter - Loving Pet Care in Folsom, CA",
      description:
        "In-home pet sitting trusted by families in Folsom, CA. Caring for pets like family with every visit.",
      images: [`${baseUrl}/og-image.webp`],
    },
    other: {
      "script:ld+json": JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${baseUrl}/#localbusiness`,
          name: "MyFavPetSitter",
          url: baseUrl,
          logo: `${baseUrl}/favicon.ico`,
          image: `${baseUrl}/og-image.webp`,
          description:
            "MyFavPetSitter offers reliable in-home pet sitting services for dogs, cats, and small animals in Folsom, CA and nearby communities.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Folsom",
            addressRegion: "CA",
            postalCode: "95630",
            addressCountry: "US",
          },
          areaServed: {
            "@type": "Place",
            name: "Folsom, CA",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-530-391-7473",
            contactType: "Customer Service",
            areaServed: "US",
            availableLanguage: "English",
          },
          sameAs: [],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "08:00",
              closes: "20:00",
            },
          ],
          priceRange: "$$",
          serviceType: [
            "Dog Walking",
            "Overnight Pet Sitting",
            "Cat Sitting",
            "Pet Medication Administration",
          ],
        },
      ]),
    },
  };
}

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
        <ToasterProvider />
      </body>
    </html>
  );
}
