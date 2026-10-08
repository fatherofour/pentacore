import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { AllServices } from "@/components/services/AllServices";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "IT Services",
  description:
    "Explore The Crew Solutions' full portfolio of IT consulting services: Microsoft 365, Azure, cybersecurity, cloud migration, remote IT support, call center solutions, and more.",
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
