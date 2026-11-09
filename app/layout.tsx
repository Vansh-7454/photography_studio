import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { siteContent } from "@/content/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteContent.brand.name} — ${siteContent.brand.legalName} | Meerut`,
    template: `%s | ${siteContent.brand.name}`,
  },
  description: siteContent.brand.metaDescription,
  keywords: [
    "Indian wedding photography",
    "wedding photographers in Meerut",
    "royal wedding films",
    "cinematic wedding videography India",
    "Udaipur destination wedding photographer",
    "candid wedding photography Delhi NCR",
    "Rangrez wedding stories",
  ],
  authors: [{ name: siteContent.brand.legalName }],
  creator: siteContent.brand.legalName,
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: `${siteContent.brand.name} — Indian Wedding Stories & Cinematic Films`,
    description: siteContent.brand.tagline + " " + siteContent.brand.metaDescription,
    url: "https://rangrezweddings.com",
    siteName: siteContent.brand.legalName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Rangrez Indian Wedding Stories & Cinematic Films",
      },
    ],
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
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col bg-warm-ivory text-deep-aubergine antialiased selection:bg-muted-marigold selection:text-aubergine-dark">
        {/* Skip to Content for Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Global Sticky Navigation Header */}
        <Header />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Mobile Sticky Quick Action Bar */}
        <MobileCallBar />
      </body>
    </html>
  );
}

