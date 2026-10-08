import type { Metadata } from "next";
import { IndustriesPage } from "@/components/industries/IndustriesPage";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "The Crew Solutions serves healthcare, education, financial services, government, manufacturing, retail, and more with tailored IT solutions.",
};

export default function Industries() {
  return (
    <>
      <IndustriesPage />
      <CTA />
    </>
  );
}
