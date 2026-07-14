import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export const BRAND_LOGOS: Record<string, string> = {
  "microsoft-365": "/logos/microsoft-365.svg",
  azure: "/logos/azure.svg",
  "exchange-online": "/logos/outlook.svg",
  "microsoft-teams": "/logos/microsoft-teams.svg",
  sharepoint: "/logos/sharepoint.svg",
  networking: "/logos/cisco.svg",
  "cloud-security": "/logos/defender.svg",
  "zoho-workplace": "/logos/zoho.svg",
  "zoho-crm": "/logos/zoho.svg",
};

type BrandIconProps = {
  slug: string;
  name: string;
  fallback: LucideIcon;
  fallbackColor: string;
  size?: "sm" | "md";
};

export function BrandIcon({ slug, name, fallback: Fallback, fallbackColor, size = "md" }: BrandIconProps) {
  const logo = BRAND_LOGOS[slug];
  const box = size === "sm" ? "w-11 h-11" : "w-12 h-12";
  const iconSize = size === "sm" ? "w-5 h-5" : "w-6 h-6";

  if (logo) {
    return (
      <div className={`${box} rounded-xl bg-white/90 backdrop-blur-md border border-white/30 shadow-lg shadow-black/20 flex items-center justify-center p-2`}>
        <Image src={logo} alt={name} width={32} height={32} className="w-full h-full object-contain" />
      </div>
    );
  }

  return (
    <div className={`${box} rounded-xl ${fallbackColor} border border-white/20 shadow-lg shadow-black/25 flex items-center justify-center`}>
      <Fallback className={`${iconSize} text-white`} />
    </div>
  );
}
