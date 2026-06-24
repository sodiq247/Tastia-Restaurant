import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Tastia Restaurant & Bakery",
  description:
    "Learn about Tastia Restaurant & Bakery — Abuja's premier dining destination with 230+ seats, ₦500M+ investment, and 4 years of culinary excellence. Discover our mission, vision, and values.",
  keywords: [
    "about Tastia Restaurant",
    "Tastia story",
    "restaurant Abuja",
    "Nigerian dining",
    "Tastia mission",
    "Tastia vision",
    "culinary excellence Nigeria",
  ],
  openGraph: {
    title: "About Us – Tastia Restaurant & Bakery",
    description:
      "Discover the story behind Abuja's largest restaurant — 4 years of tenacity, growth, and culinary excellence.",
    url: "https://tastiarestaurantng.com/about",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Tastia Restaurant About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us – Tastia Restaurant & Bakery",
    description:
      "Discover the story behind Abuja's largest restaurant — 4 years of tenacity, growth, and culinary excellence.",
  },
  alternates: {
    canonical: "https://tastiarestaurantng.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
