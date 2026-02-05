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

export const metadata = {
  title: "कारोbaar | Modern Accounting for Wholesalers",
  description: "Simplify your wholesale business with कारोbaar. Master units, GST invoices, and real-time inventory management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppBubble />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
