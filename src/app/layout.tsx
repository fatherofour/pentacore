import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { InteractiveEffects } from "@/components/ui/InteractiveEffects";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Crew Solutions | IT Consulting & Digital Transformation",
    template: "%s | The Crew Solutions",
  },
  description:
    "The Crew Solutions is a premium IT Consulting and Digital Transformation company helping organisations modernise their workplace, migrate to the cloud, secure digital assets, and accelerate business growth.",
  keywords: [
    "IT Consulting",
    "Digital Transformation",
    "Microsoft 365",
    "Cloud Migration",
    "Azure",
    "Cybersecurity",
    "Dynamics 365",
    "Zoho CRM",
    "Remote IT Support",
    "Call Center Solution",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "The Crew Solutions",
    title: "The Crew Solutions | IT Consulting & Digital Transformation",
    description:
      "Empowering businesses through intelligent IT solutions. Cloud migration, cybersecurity, Microsoft 365, remote IT support, and call center solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${instrumentSans.variable} ${instrumentSerif.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}",
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <InteractiveEffects />
      </body>
    </html>
  );
}
