"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Heart, GraduationCap, Landmark, Factory, ShoppingBag, Briefcase, Building, Globe, CheckCircle, ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: Heart,
    name: "Healthcare",
    slug: "healthcare",
    tagline: "Technology that improves patient outcomes",
    desc: "We help healthcare providers adopt HIPAA-compliant cloud solutions, secure patient data, enable telehealth, and streamline clinical workflows—so clinicians can focus on care.",
    challenges: ["Patient data security & HIPAA/GDPR compliance", "Telehealth infrastructure", "EHR system integration", "Medical device management"],
    solutions: ["Microsoft 365 for Healthcare", "Azure Health Data Services", "Endpoint security for clinical devices", "Secure video consultation platforms"],
    color: "from-rose-500 to-rose-700",
    photo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: GraduationCap,
    name: "Education",
    slug: "education",
    tagline: "Empowering the next generation of learners",
    desc: "From primary schools to universities, we design modern digital learning environments that engage students, support teachers, and meet the highest security standards.",
    challenges: ["Remote and hybrid learning", "Student data protection (FERPA/GDPR)", "Legacy infrastructure modernisation", "Budgetary constraints"],
    solutions: ["Microsoft Teams for Education", "Campus Wi-Fi & networking", "Student device management (Intune)", "Cloud-based LMS integration"],
    color: "from-blue-500 to-blue-700",
    photo: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Landmark,
    name: "Financial Services",
    slug: "financial-services",
    tagline: "Secure, compliant IT for regulated industries",
    desc: "We help banks, insurers, and financial firms meet FCA/SEC regulations, protect customer data, and drive digital innovation without compromising compliance.",
    challenges: ["FCA/SEC regulatory compliance", "Data sovereignty and residency", "Fraud and cyber threat prevention", "Legacy system modernisation"],
    solutions: ["Microsoft Purview for compliance", "Azure landing zones for financial data", "Zero Trust security framework", "Dynamics 365 for financial services"],
    color: "from-emerald-500 to-emerald-700",
    photo: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Building,
    name: "Government",
    slug: "government",
    tagline: "Modernising public services through technology",
    desc: "We support public sector organisations with compliant, sovereign cloud infrastructure, secure communications, and digital service delivery platforms.",
    challenges: ["Government cloud compliance (G-Cloud, FedRAMP)", "Citizen data protection", "Legacy system replacement", "Cross-agency collaboration"],
    solutions: ["Microsoft Government Cloud", "Azure Government landing zones", "Secure collaboration with Teams", "Identity and access management"],
    color: "from-slate-500 to-slate-700",
    photo: "https://images.unsplash.com/photo-1590650046871-92c887180603?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    slug: "manufacturing",
    tagline: "Industry 4.0 transformation for the factory floor",
    desc: "We connect operational and information technology, enabling smart factories, predictive maintenance, and connected supply chains through secure IoT and cloud platforms.",
    challenges: ["OT/IT convergence and security", "Supply chain visibility", "Predictive maintenance at scale", "Real-time production analytics"],
    solutions: ["Azure IoT Hub integration", "OT security with Microsoft Defender", "Dynamics 365 Supply Chain Management", "Teams for frontline workers"],
    color: "from-orange-500 to-orange-700",
    photo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    slug: "retail",
    tagline: "Omnichannel experiences powered by technology",
    desc: "We help retailers create seamless shopping experiences, optimise supply chains, and build loyal customer relationships through modern CRM, analytics, and secure IT.",
    challenges: ["PCI-DSS compliance for payments", "Omnichannel customer experience", "Inventory and supply chain management", "Customer data and loyalty"],
    solutions: ["Zoho CRM Plus for retail", "PCI-DSS compliant cloud infrastructure", "Dynamics 365 Commerce", "Microsoft Azure analytics"],
    color: "from-fuchsia-500 to-fuchsia-700",
    photo: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    slug: "professional-services",
    tagline: "Technology that scales with your practice",
    desc: "Law firms, consultancies, and accounting practices trust Pentacore to deliver secure document management, client collaboration platforms, and compliant IT infrastructure.",
    challenges: ["Client confidentiality and data security", "Remote working and collaboration", "Document management and eDiscovery", "Business continuity"],
    solutions: ["Microsoft 365 Business Premium", "SharePoint for document management", "Azure Information Protection", "Managed security and compliance"],
    color: "from-violet-500 to-violet-700",
    photo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Globe,
    name: "SMEs & NGOs",
    slug: "smes",
    tagline: "Enterprise-grade IT, built for smaller budgets",
    desc: "We make world-class technology accessible to SMEs and NGOs, offering cost-effective Microsoft 365, Zoho, and cloud solutions that grow with your organisation.",
    challenges: ["Limited IT budget and resources", "Keeping up with technology changes", "Cybersecurity for small teams", "Scalable solutions without high CapEx"],
    solutions: ["Microsoft 365 Business", "Zoho Workplace for SMEs", "Managed IT services for cost efficiency", "Cloud-first infrastructure"],
    color: "from-cyan-500 to-cyan-700",
    photo: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=80&auto=format&fit=crop",
  },
];

function IndustriesHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={sectionRef} className="relative pt-40 pb-20 overflow-hidden">
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B1A]/70 via-[#060B1A]/85 to-[#060B1A]" />
      </motion.div>

      <div className="glow-orb glow-blue w-[480px] h-[480px] -top-40 left-1/3" />
      <div className="glow-orb glow-purple w-[380px] h-[380px] top-10 -right-32" />
      <div className="absolute inset-0 grid-lines pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <span className="tag-pill mb-6">
            Industries We Serve
          </span>
          <h1 className="heading-display text-white text-6xl sm:text-7xl lg:text-8xl mb-6 text-balance">
            Sector-Specific Expertise,{" "}
            <span className="gradient-text">Universal Excellence</span>
          </h1>
          <p className="text-[#A6B3C9] text-xl max-w-2xl mx-auto">
            Deep industry knowledge combined with enterprise technology expertise to deliver
            solutions that meet your sector&apos;s unique requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function IndustriesPage() {
  return (
    <>
      <IndustriesHero />

      {/* Industries list */}
      <section className="py-24 relative overflow-hidden">
        <div className="glow-orb glow-cyan w-[460px] h-[460px] top-1/4 -left-56 opacity-50" />
        <div className="glow-orb glow-blue w-[460px] h-[460px] bottom-1/4 -right-56 opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Content */}
              <div>
                {/* Photo — glass framed */}
                <div className="relative rounded-[2rem] overflow-hidden h-52 mb-6 border border-white/15 shadow-2xl shadow-black/40 group">
                  <Image
                    src={ind.photo}
                    alt={ind.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060B1A]/70 via-transparent to-transparent" />
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${ind.color} border border-white/25 shadow-lg flex items-center justify-center`}>
                    <ind.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <span className="label-mono text-[#40A3E0]">{ind.tagline}</span>
                <h2 className="heading-secondary text-2xl sm:text-3xl text-white mt-2 mb-4">{ind.name}</h2>
                <p className="text-[#A6B3C9] text-base leading-relaxed mb-6">{ind.desc}</p>
                <Link href={`/industries/${ind.slug}`} className="btn-filled group">
                  Explore {ind.name} Solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Challenges & Solutions — glass panels */}
              <div className="space-y-5">
                <div className="glass-card p-6">
                  <h4 className="label-mono text-white mb-3">Key Challenges We Solve</h4>
                  <ul className="space-y-2">
                    {ind.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-sm text-[#A6B3C9]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#40A3E0] mt-1.5 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card p-6">
                  <h4 className="label-mono text-white mb-3">Our Solutions</h4>
                  <ul className="space-y-2">
                    {ind.solutions.map((s) => (
                      <li key={s} className="flex items-start gap-2.5 text-sm text-[#A6B3C9]">
                        <CheckCircle className="w-4 h-4 text-[#40A3E0] flex-shrink-0 mt-0.5" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
