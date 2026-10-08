"use client";

import Link from "next/link";
import Image from "next/image";
import { FacebookIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import {
  Mail,
  Phone,
  MapPin,
} from "@/components/ui/icons";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Microsoft 365", href: "/services/microsoft-365" },
    { label: "Azure Cloud", href: "/services/azure" },
    { label: "Cybersecurity", href: "/services/cybersecurity" },
    { label: "Custom ERP Solutions", href: "/services/custom-erp-solutions" },
    { label: "Web Development", href: "/services/web-development" },
    { label: "Web Application", href: "/services/web-application" },
  ],
  industries: [
    { label: "Healthcare", href: "/industries#healthcare" },
    { label: "Education", href: "/industries#education" },
    { label: "Financial Services", href: "/industries#financial-services" },
    { label: "Government", href: "/industries#government" },
    { label: "Manufacturing", href: "/industries#manufacturing" },
    { label: "Retail", href: "/industries#retail" },
  ],
};

const socials = [
  { icon: LinkedInIcon, href: "#", label: "LinkedIn", hover: "hover:text-[#0A66C2]" },
  { icon: FacebookIcon, href: "#", label: "Facebook", hover: "hover:text-[#1877F2]" },
];

// On phones: Company + Industries share a row, Services spans the full width below
// with its links in two columns. From sm up: three equal columns in reading order.
const footerColumns = [
  { title: "Company", links: footerLinks.company, col: "", list: "space-y-3" },
  {
    title: "Services",
    links: footerLinks.services,
    col: "order-3 col-span-2 sm:order-none sm:col-span-1",
    list: "grid grid-cols-2 gap-x-8 gap-y-3 sm:block sm:space-y-3",
  },
  { title: "Industries", links: footerLinks.industries, col: "order-2 sm:order-none", list: "space-y-3" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 text-mute">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-dots opacity-30 pointer-events-none" />
      <div className="glow-orb glow-blue w-[500px] h-[500px] -bottom-72 left-1/4 opacity-50" />

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-5 xl:col-span-4 max-w-md">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl glass flex items-center justify-center p-1.5">
                <Image
                  src="/pentacore-icon.png"
                  alt="The Crew Solutions"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-ink font-bold text-lg block leading-tight">The Crew Solutions</span>
              </div>
            </Link>
            <p className="text-body text-sm leading-relaxed mb-6">
              Empowering businesses through intelligent IT solutions. We help organisations modernise,
              secure, and scale through innovative technology partnerships.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-7">
              <a href="tel:+2348137996917" className="flex items-center gap-3 text-body hover:text-accent transition-colors text-sm group">
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center group-hover:border-[#0078D4]/50 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                +234 8137996917
              </a>
              <a href="mailto:info@pentacoresystems.com.ng" className="flex items-center gap-3 text-body hover:text-accent transition-colors text-sm group">
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center group-hover:border-[#0078D4]/50 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                info@pentacoresystems.com.ng
              </a>
              <div className="flex items-start gap-3 text-body text-sm">
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>123 Technology Drive, Innovation Quarter, London, UK EC2A 4NE</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label, hover }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg glass hover:border-[#0078D4]/60 hover:bg-[#0078D4]/15 flex items-center justify-center text-body transition-all duration-200 ${hover}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns: flush-left under each heading */}
          <nav aria-label="Footer" className="lg:col-span-7 xl:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10 lg:flex lg:justify-between lg:gap-x-12">
            {footerColumns.map(({ title, links, col, list }) => (
              <div key={title} className={col}>
                <h4 className="text-ink text-sm font-semibold mb-5">{title}</h4>
                <ul className={list}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-block text-sm text-body hover:text-accent hover:translate-x-0.5 transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 bg-white/[0.02] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-36 md:pb-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-mute text-sm">
            © {new Date().getFullYear()} The Crew Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-mute hover:text-accent transition-colors text-sm"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
