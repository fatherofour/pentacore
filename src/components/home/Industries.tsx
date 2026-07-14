"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  GraduationCap,
  Landmark,
  Factory,
  ShoppingBag,
  Briefcase,
  Building,
  Globe,
  ArrowRight,
} from "lucide-react";

const industries = [
  { icon: Heart, name: "Healthcare", desc: "HIPAA-compliant cloud infrastructure, patient data security, and telehealth enablement.", href: "/industries/healthcare", color: "bg-rose-600", clients: "12+ clients", photo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=500&fit=crop&q=75" },
  { icon: GraduationCap, name: "Education", desc: "Modern digital learning environments, Microsoft Teams for Education, and campus networking.", href: "/industries/education", color: "bg-blue-600", clients: "8+ clients", photo: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=500&fit=crop&q=75" },
  { icon: Landmark, name: "Financial Services", desc: "FCA-compliant security frameworks, data governance, and secure communication platforms.", href: "/industries/financial-services", color: "bg-emerald-600", clients: "15+ clients", photo: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=500&fit=crop&q=75" },
  { icon: Building, name: "Government", desc: "Secure, compliant IT infrastructure meeting government standards and data sovereignty requirements.", href: "/industries/government", color: "bg-slate-600", clients: "5+ clients", photo: "https://images.unsplash.com/photo-1590650046871-92c887180603?w=600&h=500&fit=crop&q=75" },
  { icon: Factory, name: "Manufacturing", desc: "IoT integration, operational technology security, and Industry 4.0 digital transformation.", href: "/industries/manufacturing", color: "bg-orange-600", clients: "10+ clients", photo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=500&fit=crop&q=75" },
  { icon: ShoppingBag, name: "Retail", desc: "Omnichannel solutions, PCI-DSS compliance, and integrated CRM for enhanced customer experience.", href: "/industries/retail", color: "bg-fuchsia-600", clients: "7+ clients", photo: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=500&fit=crop&q=75" },
  { icon: Briefcase, name: "Professional Services", desc: "Cloud-first workplace tools, CRM systems, and secure document management for professional firms.", href: "/industries/professional-services", color: "bg-violet-600", clients: "20+ clients", photo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=500&fit=crop&q=75" },
  { icon: Globe, name: "SMEs & NGOs", desc: "Affordable, scalable IT solutions helping small businesses and NGOs punch above their weight.", href: "/industries/smes", color: "bg-cyan-600", clients: "30+ clients", photo: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=500&fit=crop&q=75" },
];

export function Industries() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-dots pointer-events-none" />
      <div className="glow-orb glow-purple w-[500px] h-[500px] -top-40 right-0 opacity-70" />
      <div className="glow-orb glow-blue w-[440px] h-[440px] bottom-0 -left-40 opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4">
            Industries We Serve
          </span>
          <h2 className="heading-secondary text-3xl sm:text-4xl lg:text-5xl text-white text-balance mb-5">
            Deep expertise across{" "}
            <span className="gradient-text">every sector</span>
          </h2>
          <p className="text-[#A6B3C9] text-lg max-w-2xl mx-auto text-balance">
            We bring sector-specific knowledge to every engagement, ensuring our
            solutions meet the unique compliance, regulatory, and operational requirements
            of your industry.
          </p>
        </motion.div>

        {/* Industries grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <Link href={industry.href} className="group block h-full">
                <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden border border-white/10 hover:border-[#0078D4]/50 transition-colors duration-300 shadow-xl shadow-black/30">
                  {/* Photo */}
                  <Image
                    src={industry.photo}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060B1A] via-[#060B1A]/75 to-[#060B1A]/20 group-hover:via-[#060B1A]/60 transition-colors duration-300" />

                  {/* Content */}
                  <div className="relative h-full p-6 flex flex-col justify-end">
                    {/* Icon — glass chip */}
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#0078D4]/60 transition-all duration-300">
                      <industry.icon className="w-6 h-6 text-[#7CC3F2]" />
                    </div>

                    {/* Client count badge */}
                    <span className="glass-chip !text-[10px] !py-0.5 !px-2 mb-3 w-fit">
                      {industry.clients}
                    </span>

                    <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#40A3E0] transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-[#DCE3F0] text-sm leading-relaxed">{industry.desc}</p>

                    <div className="flex items-center gap-1 mt-4 text-[#7C8AA5] text-sm font-medium group-hover:text-[#40A3E0] transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
