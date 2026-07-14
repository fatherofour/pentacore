import type { Metadata } from "next";
import { CaseStudiesPage } from "@/components/case-studies/CaseStudiesPage";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore how Pentacore Systems has helped organisations across healthcare, financial services, education, and more achieve their technology goals.",
};

export default function CaseStudies() {
  return (
    <>
      <CaseStudiesPage />
      <CTA />
    </>
  );
}
