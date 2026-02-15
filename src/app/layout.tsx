import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} | Phoenix Plumber | 24/7 Emergency Service`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  keywords: [
    "plumber phoenix",
    "phoenix plumbing",
    "emergency plumber phoenix",
    "drain cleaning phoenix",
    "water heater repair phoenix",
    "slab leak repair phoenix",
    "commercial plumber phoenix",
  ],
  authors: [{ name: COMPANY.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Phoenix Plumber`,
    description: COMPANY.description,
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY.name,
    description: COMPANY.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* Skip to Content Link - WCAG 2.4.1 */}
        <a
          href="#main-content"
          className="skip-to-content"
        >
          Skip to main content
        </a>

        <Header />
        
        {/* Main Content - with landmark and id for skip link */}
        <main id="main-content" className="min-h-screen" role="main">
          {children}
        </main>
        
        <Footer />

        {/* Structured Data - Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `https://${COMPANY.website}`,
              name: COMPANY.name,
              image: `https://${COMPANY.website}/logo.png`,
              telephone: COMPANY.phone,
              email: COMPANY.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "17230 N 32nd Pl",
                addressLocality: "Phoenix",
                addressRegion: "AZ",
                postalCode: "85032",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.6126,
                longitude: -112.0216,
              },
              openingHoursSpecification: {
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
                opens: "00:00",
                closes: "23:59",
              },
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: COMPANY.googleRating,
                reviewCount: COMPANY.googleReviews,
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
