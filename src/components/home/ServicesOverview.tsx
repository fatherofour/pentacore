"use client";

import { useState } from "react";
import { ScrollText } from "@/components/ui/ScrollText";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Monitor,
  Cloud,
  BarChart3,
  Server,
  Shield,
  Database,
  Lock,
  Cpu,
  Users,
  Headphones,
  Briefcase,
  ArrowRight,
  Building2,
  Code2,
  AppWindow,
  PhoneCall,
  FileText,
  GitBranch,
  SearchCheck,
  Activity,
  ClipboardCheck,
} from "@/components/ui/icons";
import { BrandIcon } from "@/components/ui/BrandIcon";

type Service = {
  icon: typeof Monitor;
  name: string;
  desc: string;
  href: string;
  color: string;
  tag?: string;
};

const categories: { label: string; services: Service[] }[] = [
  {
    label: "Microsoft & Cloud",
    services: [
      { icon: Monitor, name: "Microsoft 365", desc: "Full deployment, migration, and management of the complete Microsoft 365 suite for your organisation.", href: "/services/microsoft-365", color: "bg-[#0078D4]", tag: "Most Popular" },
      { icon: Cloud, name: "Azure Cloud", desc: "Design, deploy, and optimise Microsoft Azure infrastructure tailored to your business needs.", href: "/services/azure", color: "bg-sky-600" },
      { icon: BarChart3, name: "Dynamics 365", desc: "Unify ERP and CRM capabilities to streamline operations and accelerate sales cycles.", href: "/services/dynamics-365", color: "bg-violet-600" },
      { icon: FileText, name: "SharePoint Online", desc: "Intranets, document management and collaboration portals that keep teams connected and information secure.", href: "/services/sharepoint", color: "bg-teal-600" },
      { icon: Monitor, name: "Microsoft Intune", desc: "Cloud device and app management that keeps every laptop and phone secure, compliant and up to date.", href: "/services/intune", color: "bg-sky-600" },
      { icon: Server, name: "Cloud Migration", desc: "Seamless, risk-managed migration of applications and infrastructure to the cloud.", href: "/services/cloud-migration", color: "bg-emerald-600" },
    ],
  },
  {
    label: "Security & Infrastructure",
    services: [
      { icon: Shield, name: "Cybersecurity", desc: "End-to-end security strategy, threat detection, and response to protect your digital assets.", href: "/services/cybersecurity", color: "bg-rose-600", tag: "Critical" },
      { icon: Lock, name: "Identity Management", desc: "Zero Trust security framework with robust IAM, SSO, and privileged access management.", href: "/services/identity-management", color: "bg-slate-700" },
      { icon: Database, name: "Backup & Recovery", desc: "Business continuity solutions with automated backups, disaster recovery planning and testing.", href: "/services/backup-recovery", color: "bg-teal-600" },
      { icon: Cpu, name: "Networking", desc: "Design and deployment of enterprise-grade LAN/WAN, SD-WAN, and wireless networks.", href: "/services/networking", color: "bg-indigo-600" },
    ],
  },
  {
    label: "Audit & Risk",
    services: [
      { icon: ClipboardCheck, name: "IT Audit", desc: "Independent review of your IT controls, systems and processes against best practice and compliance needs.", href: "/services/it-audit", color: "bg-indigo-600", tag: "New" },
      { icon: SearchCheck, name: "Cybersecurity Gap Analysis", desc: "Measure your security posture against a recognised framework and get a prioritised plan to close the gaps.", href: "/services/cybersecurity-gap-analysis", color: "bg-rose-600", tag: "New" },
      { icon: Activity, name: "Business Impact Analysis", desc: "Identify critical processes and the real cost of downtime, so recovery plans match what matters most.", href: "/services/business-impact-analysis", color: "bg-teal-600", tag: "New" },
    ],
  },
  {
    label: "Support & Contact Centre",
    services: [
      { icon: Headphones, name: "Remote IT Support", desc: "Fast, secure remote helpdesk and on-demand technical support for your staff and systems, wherever they are.", href: "/services/remote-it-support", color: "bg-cyan-600", tag: "Popular" },
      { icon: PhoneCall, name: "Call Center Solution", desc: "Cloud contact centre with voice, WhatsApp, email and chat in one place, built for great customer care.", href: "/services/call-center-solution", color: "bg-orange-600", tag: "New" },
      { icon: Building2, name: "Custom ERP Solutions", desc: "Bespoke ERP systems tailored to your operations, finance, and reporting needs.", href: "/services/custom-erp-solutions", color: "bg-amber-600", tag: "New" },
    ],
  },
  {
    label: "Zoho & Web",
    services: [
      { icon: Briefcase, name: "Zoho Workplace", desc: "All-in-one business productivity suite with email, collaboration, and communication tools.", href: "/services/zoho-workplace", color: "bg-rose-500" },
      { icon: Users, name: "Zoho CRM Plus", desc: "Unified customer experience platform with sales, marketing, and support capabilities.", href: "/services/zoho-crm", color: "bg-fuchsia-600" },
      { icon: Code2, name: "Web Development", desc: "Fast, modern, SEO-friendly websites built for growth and conversions.", href: "/services/web-development", color: "bg-amber-600", tag: "New" },
      { icon: AppWindow, name: "Web Application", desc: "Scalable custom web applications built around your business workflows.", href: "/services/web-application", color: "bg-amber-600", tag: "New" },
      { icon: GitBranch, name: "DevOps", desc: "CI/CD pipelines, infrastructure as code and cloud automation for faster, safer releases.", href: "/services/devops", color: "bg-emerald-600", tag: "New" },
    ],
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export function ServicesOverview() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-14 md:py-16 relative overflow-hidden">
      <div className="glow-orb glow-cyan w-[500px] h-[500px] -bottom-60 -left-60 opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <ScrollText className="heading-secondary text-3xl sm:text-4xl lg:text-5xl text-ink text-balance mb-5" text={"Comprehensive IT Solutions"} accent={"for Every Business Need"} />
          <p className="text-body text-lg max-w-2xl mx-auto text-balance">
            From cloud migration to cybersecurity, we deliver end-to-end technology services
            that drive measurable business outcomes.
          </p>
        </motion.div>

        {/* Category tabs — glass pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActive(i)}
              className={`label-mono px-4 py-2.5 rounded-full border transition-all duration-200 ${
                i === active
                  ? "bg-[#0078D4]/20 border-[#0078D4]/50 text-accent-soft shadow-lg shadow-[#0078D4]/20"
                  : "bg-white/5 border-white/10 text-body hover:bg-white/10 hover:text-ink"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Services grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-5 ${categories[active].services.length % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
          >
            {categories[active].services.map((service) => (
              <motion.div key={service.name} variants={item}>
                <Link href={service.href} className="group block h-full">
                  <div className="glass-card glass-card-hover h-full p-6 relative overflow-hidden">
                    {/* Tag */}
                    {/* Icon */}
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                      <BrandIcon
                        slug={service.href.split("/").pop() ?? ""}
                        name={service.name}
                        fallback={service.icon}
                        fallbackColor={service.color}
                      />
                    </div>

                    <h3 className="font-bold text-ink text-base mb-2 group-hover:text-accent transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-mute text-sm leading-relaxed">{service.desc}</p>

                    {/* Learn more arrow */}
                    <div className="flex items-center gap-1 mt-4 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Learn more</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Hover accent glow line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0078D4] via-[#06B6D4] to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-ghost group">
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
