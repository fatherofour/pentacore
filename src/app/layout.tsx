import type { Metadata } from "next";
import { Space_Grotesk, Bebas_Neue, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pentacore Systems | IT Consulting & Digital Transformation",
    template: "%s | Pentacore Systems",
  },
  description:
    "Pentacore Systems is a premium IT Consulting and Digital Transformation company helping organisations modernise their workplace, migrate to the cloud, secure digital assets, and accelerate business growth.",
  keywords: [
    "IT Consulting",
    "Digital Transformation",
    "Microsoft 365",
    "Cloud Migration",
    "Azure",
    "Cybersecurity",
    "Dynamics 365",
    "Zoho CRM",
    "Managed Services",
    "IT Outsourcing",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Pentacore Systems",
    title: "Pentacore Systems | IT Consulting & Digital Transformation",
    description:
      "Empowering businesses through intelligent IT solutions. Cloud migration, cybersecurity, Microsoft 365, and managed services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${bebasNeue.variable} ${ibmPlexMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
