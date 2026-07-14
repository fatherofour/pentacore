import type { Metadata } from "next";
import { BlogPage } from "@/components/blog/BlogPage";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Expert insights on cloud computing, cybersecurity, Microsoft 365, digital transformation, networking, and IT strategy from the Pentacore Systems team.",
};

export default function Blog() {
  return <BlogPage />;
}
