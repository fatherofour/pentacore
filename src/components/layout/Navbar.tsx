"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Cloud,
  Shield,
  Monitor,
  Server,
  Globe,
  Briefcase,
  Users,
  Headphones,
  Database,
  Lock,
  Cpu,
  BarChart3,
  Phone,
  Building2,
  Code2,
  AppWindow,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
  {
    category: "Microsoft Solutions",
    items: [
      { name: "Microsoft 365", icon: Monitor, href: "/services/microsoft-365", desc: "Full M365 deployment & management" },
      { name: "Azure Cloud", icon: Cloud, href: "/services/azure", desc: "Azure architecture & migration" },
      { name: "Dynamics 365", icon: BarChart3, href: "/services/dynamics-365", desc: "CRM & ERP solutions" },
      { name: "Exchange Online", icon: Globe, href: "/services/exchange-online", desc: "Enterprise email platform" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "Cloud Migration", icon: Server, href: "/services/cloud-migration", desc: "Seamless cloud transition" },
      { name: "Networking (LAN/WAN)", icon: Cpu, href: "/services/networking", desc: "Enterprise network infrastructure" },
      { name: "Backup & Recovery", icon: Database, href: "/services/backup-recovery", desc: "Data protection & continuity" },
    ],
  },
  {
    category: "Software Development",
    items: [
      { name: "Custom ERP Solutions", icon: Building2, href: "/services/custom-erp-solutions", desc: "Tailored ERP systems built for your workflows" },
      { name: "Web Development", icon: Code2, href: "/services/web-development", desc: "Fast, modern, and scalable websites" },
      { name: "Web Application", icon: AppWindow, href: "/services/web-application", desc: "Bespoke web apps for your business needs" },
    ],
  },
  {
    category: "Security & Management",
    items: [
      { name: "Cybersecurity", icon: Shield, href: "/services/cybersecurity", desc: "End-to-end security solutions" },
      { name: "Identity Management", icon: Lock, href: "/services/identity-management", desc: "IAM & Zero Trust access" },
      { name: "Endpoint Management", icon: Monitor, href: "/services/endpoint-management", desc: "Device management & MDM" },
      { name: "Managed Services", icon: Headphones, href: "/services/managed-services", desc: "24/7 IT support & monitoring" },
    ],
  },
  {
    category: "Business Solutions",
    items: [
      { name: "Zoho Workplace", icon: Briefcase, href: "/services/zoho-workplace", desc: "Integrated business suite" },
      { name: "Zoho CRM Plus", icon: Users, href: "/services/zoho-crm", desc: "Customer relationship management" },
      { name: "IT Outsourcing", icon: Users, href: "/services/it-outsourcing", desc: "Dedicated IT teams" },
      { name: "IT Consulting", icon: BarChart3, href: "/services/consulting", desc: "Strategic technology advisory" },
    ],
  },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
        )}
      >
        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX: progress }}
          className="absolute top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[#0078D4] via-[#06B6D4] to-[#7C3AED]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(
            "flex items-center justify-between transition-all duration-300",
            isScrolled ? "h-16 lg:h-20" : "h-20 lg:h-28"
          )}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="w-9 h-9 rounded-lg glass flex items-center justify-center p-1">
                <Image
                  src="/pentacore-icon.png"
                  alt="Pentacore Systems"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-base tracking-tight text-white">
                  Pentacore
                </span>
                <span className="label-mono text-[#40A3E0]">
                  Systems
                </span>
              </div>
            </Link>

            {/* Desktop Navigation — floating glass pill */}
            <nav className="hidden lg:flex items-center nav-pill px-2 py-2 gap-1" ref={dropdownRef}>
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-[#A6B3C9] hover:text-white hover:bg-white/10 transition-colors duration-150",
                        servicesOpen && "bg-white/10 text-white"
                      )}
                    >
                      {link.label}
                      <motion.span animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 12, scale: 0.98 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[1040px] glass-strong rounded-3xl overflow-hidden shadow-2xl shadow-black/50"
                        >
                          <div className="p-2">
                            <div className="grid grid-cols-5 gap-0">
                              {services.map((cat) => (
                                <div key={cat.category} className="p-4">
                                  <p className="label-mono text-[#40A3E0] mb-3">
                                    {cat.category}
                                  </p>
                                  <div className="space-y-1">
                                    {cat.items.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setServicesOpen(false)}
                                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/8 group/item transition-colors"
                                      >
                                        <div className="w-7 h-7 rounded-lg glass flex items-center justify-center flex-shrink-0 group-hover/item:border-[#0078D4]/50 transition-colors mt-0.5">
                                          <item.icon className="w-3.5 h-3.5 text-[#40A3E0]" />
                                        </div>
                                        <div>
                                          <p className="text-sm font-medium text-white group-hover/item:text-[#40A3E0] transition-colors leading-tight">
                                            {item.name}
                                          </p>
                                          <p className="text-[11px] text-[#7C8AA5] mt-0.5 leading-tight">{item.desc}</p>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="mx-4 mb-3 mt-1 p-3 rounded-xl glass flex items-center justify-between">
                              <div>
                                <p className="text-white font-semibold text-sm">Need a custom solution?</p>
                                <p className="text-[#A6B3C9] text-xs mt-0.5">Talk to our experts about your requirements</p>
                              </div>
                              <Link
                                href="/contact"
                                onClick={() => setServicesOpen(false)}
                                className="btn-filled text-sm !py-2 !px-4 flex-shrink-0"
                              >
                                Book Consultation
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-4 py-2 rounded-full text-sm font-medium text-[#A6B3C9] hover:text-white hover:bg-white/10 transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="tel:+2348137996917"
                className="flex items-center gap-1.5 text-sm font-medium text-[#A6B3C9] hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+234 8137996917</span>
              </Link>
              <Link href="/contact" className="btn-filled text-sm !py-2.5 !px-5">
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg glass text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#060B1A]/70 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] glass-strong z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                  <Image
                    src="/pentacore-icon.png"
                    alt="Pentacore Systems"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                  <span className="font-bold text-white">Pentacore Systems</span>
                </Link>
                <button onClick={() => setMobileOpen(false)} className="p-1.5 rounded-lg hover:bg-white/10">
                  <X className="w-5 h-5 text-[#A6B3C9]" />
                </button>
              </div>

              <nav className="p-4 space-y-1">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[#A6B3C9] font-medium hover:bg-white/8 hover:text-white transition-colors"
                      >
                        {link.label}
                        <motion.span animate={{ rotate: mobileServicesOpen ? 180 : 0 }}>
                          <ChevronDown className="w-4 h-4" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-1 ml-3 space-y-3 pb-2">
                              {services.map((cat) => (
                                <div key={cat.category}>
                                  <p className="label-mono text-[#40A3E0] px-3 py-1">
                                    {cat.category}
                                  </p>
                                  {cat.items.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-[#A6B3C9] hover:text-white hover:bg-white/8 transition-colors"
                                    >
                                      <item.icon className="w-4 h-4 text-[#40A3E0] flex-shrink-0" />
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 rounded-xl text-[#A6B3C9] font-medium hover:bg-white/8 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>

              <div className="p-4 border-t border-white/10 space-y-3">
                <a
                  href="tel:+2348137996917"
                  className="flex items-center gap-2 px-3 py-2.5 text-[#A6B3C9] hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">+234 8137996917</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-filled w-full text-sm"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
