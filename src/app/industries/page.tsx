import type { Metadata } from "next";
import { IndustriesPage } from "@/components/industries/IndustriesPage";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Pentacore Systems serves healthcare, education, financial services, government, manufacturing, retail, and more with tailored IT solutions.",
};

export default function Industries() {
  return (
    <>
      <IndustriesPage />
      <CTA />
    </>
  );
}
