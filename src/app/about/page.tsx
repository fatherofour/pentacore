import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { CompanyStory } from "@/components/about/CompanyStory";
import { TeamSection } from "@/components/about/TeamSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Pentacore Systems — our story, mission, values, and the team behind our award-winning IT consulting and digital transformation services.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <ValuesSection />
      <TeamSection />
      <CTA />
    </>
  );
}
