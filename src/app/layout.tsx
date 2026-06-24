import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { CartProvider } from "@/lib/cart-context";
import CartSidebar from "@/components/layout/CartSidebar";

export const metadata: Metadata = {
  title: {
    default: "Tastia Restaurant – Nigeria's Premier Dining Experience",
    template: "%s | Tastia Restaurant",
  },
  description:
    "Tastia Restaurant & Bakery — Abuja's largest restaurant with 230+ seats and ₦500M+ investment. Enjoy world-class Nigerian cuisine, online ordering, catering, and VIP lounge experiences.",
  keywords: [
    "Tastia Restaurant",
    "restaurant Abuja",
    "Nigerian food",
    "jollof rice Abuja",
    "catering Nigeria",
    "online food order Abuja",
    "best restaurant Nigeria",
    "VIP lounge Abuja",
  ],
  authors: [{ name: "Tastia Restaurant" }],
  creator: "Tastia Restaurant",
  publisher: "Tastia Restaurant",
  metadataBase: new URL("https://tastiarestaurantng.com"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://tastiarestaurantng.com",
    siteName: "Tastia Restaurant",
    title: "Tastia Restaurant – Nigeria's Premier Dining Experience",
    description:
      "Abuja's largest restaurant with authentic Nigerian cuisine, catering, VIP lounge, and online ordering.",
    images: [
      {
        url: "/Tastia-Restaurant-Logo.webp",
        width: 512,
        height: 200,
        alt: "Tastia Restaurant Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tastia Restaurant – Nigeria's Premier Dining Experience",
    description:
      "Abuja's largest restaurant with authentic Nigerian cuisine, catering, VIP lounge, and online ordering.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/Tastia-Restaurant-Logo.webp",
    apple: "/Tastia-Restaurant-Logo.webp",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#b52026",
};

import { Josefin_Sans, Poppins } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${josefin.variable} ${poppins.variable} font-sans`}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}

