import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";

const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://pentacoresystems.com.ng").replace(/\/$/, "");

const serviceSlugs = [
  "microsoft-365",
  "azure",
  "cybersecurity",
  "remote-it-support",
  "call-center-solution",
  "it-audit",
  "devops",
  "cybersecurity-gap-analysis",
  "business-impact-analysis",
  "custom-erp-solutions",
  "web-development",
  "web-application",
  "microsoft-teams",
  "sharepoint",
  "intune",
  "exchange-online",
  "dynamics-365",
  "cloud-migration",
  "cloud-architecture",
  "infrastructure-deployment",
  "networking",
  "backup-recovery",
  "identity-management",
  "endpoint-management",
  "cloud-security",
  "consulting",
  "training",
  "zoho-workplace",
  "zoho-crm",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  });

  return [
    entry("/", 1),
    entry("/about", 0.8),
    entry("/services", 0.9),
    ...serviceSlugs.map((s) => entry(`/services/${s}`, 0.8)),
    entry("/industries", 0.7),
    entry("/case-studies", 0.7),
    ...caseStudies.map((c) => entry(`/case-studies/${c.id}`, 0.6)),
    entry("/contact", 0.8),
    entry("/privacy-policy", 0.3),
    entry("/terms-of-service", 0.3),
    entry("/cookie-policy", 0.3),
  ];
}
