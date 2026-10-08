import Image from "next/image";
import { Lightbulb, type IconType } from "@/components/ui/icons";

/** Official OEM product icon for each service (Microsoft, Zoho, Cisco). */
export const BRAND_LOGOS: Record<string, string> = {
  // Microsoft 365 & Dynamics
  "microsoft-365": "/logos/microsoft-365.svg",
  "microsoft-teams": "/logos/microsoft-teams.svg",
  sharepoint: "/logos/sharepoint.svg",
  intune: "/logos/products/endpoint-management.svg",
  "exchange-online": "/logos/outlook.svg",
  "dynamics-365": "/logos/products/dynamics-365.svg",
  "custom-erp-solutions": "/logos/products/custom-erp-solutions.svg",
  "call-center-solution": "/logos/products/call-center-solution.svg",
  training: "/logos/products/training.svg",
  // Azure & infrastructure
  azure: "/logos/azure.svg",
  "cloud-migration": "/logos/products/cloud-migration.svg",
  "cloud-architecture": "/logos/products/cloud-architecture.svg",
  "infrastructure-deployment": "/logos/products/infrastructure-deployment.svg",
  "backup-recovery": "/logos/products/backup-recovery.svg",
  "business-impact-analysis": "/logos/products/business-impact-analysis.svg",
  devops: "/logos/products/devops.svg",
  "web-development": "/logos/products/web-development.svg",
  "web-application": "/logos/products/web-application.svg",
  // Security, identity & compliance
  cybersecurity: "/logos/defender.svg",
  "cloud-security": "/logos/products/cloud-security.svg",
  "cybersecurity-gap-analysis": "/logos/products/cybersecurity-gap-analysis.svg",
  "identity-management": "/logos/products/identity-management.svg",
  "endpoint-management": "/logos/products/endpoint-management.svg",
  "remote-it-support": "/logos/products/remote-it-support.svg",
  "it-audit": "/logos/products/it-audit.svg",
  // Other OEMs
  networking: "/logos/cisco.svg",
  "zoho-workplace": "/logos/zoho.svg",
  "zoho-crm": "/logos/zoho.svg",
};

type BrandIconProps = {
  slug: string;
  name: string;
  fallback?: IconType;
  fallbackColor?: string;
  size?: "xs" | "sm" | "md" | "lg";
};

const SIZES = {
  xs: { box: "w-8 h-8 rounded-lg p-1.5", icon: "w-4 h-4" },
  sm: { box: "w-11 h-11 rounded-xl p-2", icon: "w-5 h-5" },
  md: { box: "w-12 h-12 rounded-xl p-2", icon: "w-6 h-6" },
  lg: { box: "w-20 h-20 rounded-2xl p-3.5", icon: "w-9 h-9" },
};

export function BrandIcon({ slug, name, fallback: Fallback = Lightbulb, fallbackColor = "bg-[#0078D4]", size = "md" }: BrandIconProps) {
  const logo = BRAND_LOGOS[slug];
  const s = SIZES[size];

  if (logo) {
    return (
      <div className={`${s.box} flex-shrink-0 bg-white border border-black/[0.06] shadow-[0_4px_14px_-4px_rgba(2,6,23,0.35)] flex items-center justify-center`}>
        <Image src={logo} alt={name} width={64} height={64} className="w-full h-full object-contain" />
      </div>
    );
  }

  return (
    <div className={`${s.box} flex-shrink-0 ${fallbackColor} border border-white/20 shadow-lg shadow-black/25 flex items-center justify-center`}>
      <Fallback className={`${s.icon} text-white`} />
    </div>
  );
}
