"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Monitor, Cloud, BarChart3, Globe, Server, Shield, Database, Lock,
  Cpu, Users, Headphones, Briefcase, GraduationCap, Zap, ArrowRight,
  Building2, Code2, AppWindow, PhoneCall, GitBranch, SearchCheck, Activity, ClipboardCheck,
} from "@/components/ui/icons";
import { BrandIcon } from "@/components/ui/BrandIcon";

const categories = [
  {
    name: "Microsoft Solutions",
    services: [
      { icon: Monitor, name: "Microsoft 365", slug: "microsoft-365", desc: "Complete M365 deployment, migration, licensing, and end-user training." },
      { icon: Cloud, name: "Azure Cloud", slug: "azure", desc: "Azure IaaS/PaaS architecture design, deployment, and ongoing management." },
      { icon: BarChart3, name: "Dynamics 365", slug: "dynamics-365", desc: "ERP and CRM implementation for sales, finance, operations, and customer service." },
      { icon: Globe, name: "Exchange Online", slug: "exchange-online", desc: "Enterprise email platform migration and administration." },
      { icon: Users, name: "Microsoft Teams", slug: "microsoft-teams", desc: "Unified communications, collaboration, and meeting room solutions." },
      { icon: Server, name: "SharePoint Online", slug: "sharepoint", desc: "Intranet, document management, and collaboration portals." },
      { icon: Monitor, name: "Microsoft Intune", slug: "intune", desc: "Cloud device and app management with Autopilot, compliance and app protection." },
    ],
    color: "bg-blue-600",
  },
  {
    name: "Cloud & Infrastructure",
    services: [
      { icon: Server, name: "Cloud Migration", slug: "cloud-migration", desc: "Risk-managed migration from on-prem to Azure, Oracle Cloud, or hybrid environments." },
      { icon: Cpu, name: "Networking (LAN/WAN)", slug: "networking", desc: "Enterprise network design and deployment with Cisco and leading vendors." },
      { icon: Database, name: "Backup & Recovery", slug: "backup-recovery", desc: "Automated backup strategies and tested disaster recovery plans." },
      { icon: Cloud, name: "Cloud Architecture", slug: "cloud-architecture", desc: "Well-architected cloud design reviews and optimisation." },
      { icon: Zap, name: "Infrastructure Deployment", slug: "infrastructure-deployment", desc: "Physical and virtual server infrastructure setup and management." },
    ],
    color: "bg-emerald-600",
  },
  {
    name: "Software Development",
    services: [
      { icon: Building2, name: "Custom ERP Solutions", slug: "custom-erp-solutions", desc: "Bespoke ERP systems tailored to your operations, finance, and reporting needs." },
      { icon: Code2, name: "Web Development", slug: "web-development", desc: "Fast, modern, SEO-friendly websites built for growth and conversions." },
      { icon: AppWindow, name: "Web Application", slug: "web-application", desc: "Scalable custom web applications built around your business workflows." },
      { icon: GitBranch, name: "DevOps", slug: "devops", desc: "CI/CD pipelines, infrastructure as code and cloud automation." },
    ],
    color: "bg-amber-600",
  },
  {
    name: "Security & Compliance",
    services: [
      { icon: Shield, name: "Cybersecurity", slug: "cybersecurity", desc: "Comprehensive security strategy, threat detection, and incident response." },
      { icon: Lock, name: "Identity Management", slug: "identity-management", desc: "Azure AD, SSO, MFA, and privileged access management." },
      { icon: Monitor, name: "Endpoint Management", slug: "endpoint-management", desc: "Intune MDM/MAM, device compliance, and remote management." },
      { icon: Shield, name: "Cloud Security", slug: "cloud-security", desc: "Microsoft Defender, Sentinel SIEM, and cloud-native security controls." },
      { icon: SearchCheck, name: "Cybersecurity Gap Analysis", slug: "cybersecurity-gap-analysis", desc: "Benchmark your security against a recognised framework and close the gaps." },
      { icon: Activity, name: "Business Impact Analysis", slug: "business-impact-analysis", desc: "Understand critical processes and downtime costs to guide recovery planning." },
      { icon: ClipboardCheck, name: "IT Audit", slug: "it-audit", desc: "Independent review of IT controls, systems and processes." },
    ],
    color: "bg-rose-600",
  },
  {
    name: "Business & Productivity",
    services: [
      { icon: Briefcase, name: "Zoho Workplace", slug: "zoho-workplace", desc: "All-in-one productivity suite with email, docs, and collaboration." },
      { icon: Users, name: "Zoho CRM Plus", slug: "zoho-crm", desc: "Unified customer experience platform across sales and support." },
      { icon: Headphones, name: "Remote IT Support", slug: "remote-it-support", desc: "Remote helpdesk and on-demand support to keep your people productive." },
      { icon: PhoneCall, name: "Call Center Solution", slug: "call-center-solution", desc: "Cloud contact centre for voice, WhatsApp, email and chat customer care." },
      { icon: GraduationCap, name: "Training", slug: "training", desc: "Microsoft 365, security awareness, and technology adoption training." },
      { icon: BarChart3, name: "IT Consulting", slug: "consulting", desc: "Strategic technology advisory and digital transformation roadmaps." },
    ],
    color: "bg-violet-600",
  },
];

export function AllServices() {
  return (
    <section className="py-14 md:py-16 relative overflow-hidden">
      <div className="glow-orb glow-blue w-[460px] h-[460px] top-40 -left-56 opacity-50" />
      <div className="glow-orb glow-purple w-[460px] h-[460px] bottom-40 -right-56 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {categories.map((cat, catIdx) => (
            <div key={cat.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className={`w-10 h-10 rounded-lg ${cat.color} border border-white/20 shadow-lg shadow-black/25 flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-sm">{catIdx + 1}</span>
                </div>
                <div>
                  <h2 className="heading-secondary text-xl text-ink">{cat.name}</h2>
                  <div className={`h-0.5 w-16 rounded-full ${cat.color} mt-1`} />
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.services.map((service, i) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <Link href={`/services/${service.slug}`} className="group block h-full">
                      <div className="glass-card glass-card-hover h-full p-6">
                        <div className="mb-4 group-hover:scale-110 transition-transform inline-block">
                          <BrandIcon
                            slug={service.slug}
                            name={service.name}
                            fallback={service.icon}
                            fallbackColor={cat.color}
                            size="sm"
                          />
                        </div>
                        <h3 className="font-bold text-ink text-base mb-2 group-hover:text-accent transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-mute text-sm leading-relaxed mb-4">{service.desc}</p>
                        <div className="flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>Learn more</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
