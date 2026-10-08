import { Hero } from "@/components/home/Hero";
import { TrustedPartners } from "@/components/home/TrustedPartners";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedPartners />
      <AboutSnippet />
      <ServicesOverview />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
