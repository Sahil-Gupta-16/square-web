import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";
import WhatsAppBubble from "@/components/ui/WhatsAppBubble";
import { BRAND } from "@/constants/brand";

export const metadata = {
  // Set NEXT_PUBLIC_SITE_URL in the deploy env so OG images resolve absolutely.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: `${BRAND.fullName} | Modern Accounting for Wholesalers`,
    template: `%s | ${BRAND.name}`,
  },
  description: `${BRAND.tagline}. Simplify your wholesale business with ${BRAND.name} — master units, professional invoicing, and real-time inventory management.`,
  applicationName: BRAND.name,
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: BRAND.fullName,
    description: BRAND.tagline,
    siteName: BRAND.name,
    images: ["/logo512.png"],
    type: "website",
  },
};

export const viewport = {
  themeColor: BRAND.themeColor,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppBubble />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
