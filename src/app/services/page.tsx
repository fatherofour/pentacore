import type { Metadata } from "next";
import Link from "next/link";
import { ServicesHero } from "@/components/services/ServicesHero";
import { AllServices } from "@/components/services/AllServices";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "IT Services",
  description:
    "Explore Pentacore Systems' full portfolio of IT consulting services — Microsoft 365, Azure, cybersecurity, cloud migration, managed services, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <AllServices />
      <ServiceProcess />
      <CTA />
    </>
  );
}
