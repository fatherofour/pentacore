"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: "healthfirst-azure-migration",
    client: "HealthFirst Group",
    industry: "Healthcare",
    title: "Migrating 2,000 Healthcare Users to Azure — In 6 Weeks",
    challenge: "HealthFirst needed to retire aging on-premises infrastructure and enable secure remote working for clinical and administrative staff following rapid expansion.",
    solution: "We designed and deployed an Azure landing zone, migrated Active Directory to Azure AD, and rolled out Microsoft 365 E3 with Intune device management across all sites.",
    results: [
      { metric: "40%", label: "Improvement in IT performance" },
      { metric: "6 weeks", label: "Delivery timeline" },
      { metric: "£180k", label: "Annual cost savings" },
      { metric: "Zero", label: "Downtime during migration" },
    ],
    tech: ["Azure", "Microsoft 365 E3", "Azure AD", "Intune", "Defender for Business"],
    accent: "from-rose-600/70",
    photo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=75&auto=format&fit=crop",
    logo: "HF",
  },
  {
    id: "meridian-financial-security",
    client: "Meridian Financial Services",
    industry: "Financial Services",
    title: "Building a Zero Trust Security Framework for a Regulated Firm",
    challenge: "A growing FinTech faced increasing cyber threats and upcoming FCA security audits. Their legacy perimeter-based security model was inadequate for a hybrid workforce.",
    solution: "We implemented Microsoft Sentinel SIEM, Defender for Endpoint, Conditional Access policies, and Azure AD Premium P2, creating a comprehensive Zero Trust environment.",
    results: [
      { metric: "98%", label: "Reduction in security incidents" },
      { metric: "100%", label: "FCA audit pass rate" },
      { metric: "12 weeks", label: "Full implementation" },
      { metric: "24/7", label: "Managed SOC coverage" },
    ],
    tech: ["Microsoft Sentinel", "Defender for Endpoint", "Azure AD P2", "Conditional Access", "Purview"],
    accent: "from-emerald-600/70",
    photo: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=75&auto=format&fit=crop",
    logo: "MF",
  },
  {
    id: "westgate-academy-m365",
    client: "Westgate Academy Trust",
    industry: "Education",
    title: "Digital Transformation of a Multi-Academy Trust with M365 Education",
    challenge: "A trust of 8 schools needed to modernise its disconnected, siloed IT infrastructure and create a unified digital learning environment for 3,000 students.",
    solution: "We deployed Microsoft 365 Education A3 across all 8 schools, implemented Teams for Education for hybrid learning, and provided staff training and change management.",
    results: [
      { metric: "3,000+", label: "Students onboarded" },
      { metric: "60%", label: "Increase in digital engagement" },
      { metric: "8 schools", label: "Unified under one platform" },
      { metric: "30%", label: "Reduction in IT spend" },
    ],
    tech: ["Microsoft 365 Education", "Teams for Education", "Intune for Education", "SharePoint", "Azure AD"],
    accent: "from-blue-600/70",
    photo: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=75&auto=format&fit=crop",
    logo: "WA",
  },
  {
    id: "lagos-trade-zoho",
    client: "Lagos Trade Solutions",
    industry: "Retail & Distribution",
    title: "Zoho CRM Plus Implementation Drives 60% Lead Conversion Uplift",
    challenge: "A growing trading company was managing sales across spreadsheets and disconnected systems, losing leads and unable to track customer interactions at scale.",
    solution: "We implemented Zoho CRM Plus with custom sales pipeline configuration, Zoho Campaigns integration, and SalesIQ for live chat, plus staff training and onboarding.",
    results: [
      { metric: "60%", label: "Lead conversion improvement" },
      { metric: "45%", label: "Reduction in sales cycle time" },
      { metric: "3x", label: "Increase in pipeline visibility" },
      { metric: "8 weeks", label: "From kickoff to go-live" },
    ],
    tech: ["Zoho CRM Plus", "Zoho Campaigns", "SalesIQ", "Zoho Analytics", "Zoho Desk"],
    accent: "from-orange-600/70",
    photo: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=900&q=75&auto=format&fit=crop",
    logo: "LT",
  },
  {
    id: "nexgen-manufacturing-ot",
    client: "NexGen Manufacturing",
    industry: "Manufacturing",
    title: "OT/IT Convergence and Industrial Cybersecurity for Smart Factory",
    challenge: "A manufacturing firm expanding into Industry 4.0 needed to safely connect operational technology (OT) with IT systems without exposing the factory floor to cyber threats.",
    solution: "We implemented Microsoft Defender for IoT for OT visibility, created segmented network architecture with Cisco industrial switches, and deployed 24/7 SOC monitoring.",
    results: [
      { metric: "Zero", label: "OT security incidents post-deployment" },
      { metric: "100%", label: "Factory floor asset visibility" },
      { metric: "25%", label: "Operational efficiency gains" },
      { metric: "Cyber Essentials+", label: "Certification achieved" },
    ],
    tech: ["Microsoft Defender for IoT", "Cisco Industrial Networking", "Azure Sentinel", "Fortinet", "SD-WAN"],
    accent: "from-violet-600/70",
    photo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=75&auto=format&fit=crop",
    logo: "NG",
  },
  {
    id: "council-cloud-migration",
    client: "Metropolitan District Council",
    industry: "Government",
    title: "Sovereign Cloud Migration for a UK Local Authority",
    challenge: "A local council needed to migrate to G-Cloud compliant infrastructure, retire its aging data centre, and enable modern collaboration for 800+ staff.",
    solution: "We migrated the council to Microsoft 365 Government and Azure Government, replacing legacy on-premises Exchange and file servers with compliant cloud equivalents.",
    results: [
      { metric: "800+", label: "Staff migrated" },
      { metric: "£250k", label: "5-year infrastructure savings" },
      { metric: "G-Cloud", label: "Compliance achieved" },
      { metric: "99.9%", label: "Uptime SLA maintained" },
    ],
    tech: ["Microsoft 365 Government", "Azure Government", "SharePoint", "Teams", "Azure AD"],
    accent: "from-slate-600/70",
    photo: "https://images.unsplash.com/photo-1590650046871-92c887180603?w=900&q=75&auto=format&fit=crop",
    logo: "MDC",
  },
];

function CaseStudiesHero() {
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
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B1A]/70 via-[#060B1A]/85 to-[#060B1A]" />
      </motion.div>

      <div className="glow-orb glow-blue w-[480px] h-[480px] -top-32 -left-32" />
      <div className="glow-orb glow-cyan w-[380px] h-[380px] top-20 -right-32" />
      <div className="absolute inset-0 grid-lines pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <span className="tag-pill mb-6">
            Case Studies
          </span>
          <h1 className="heading-display text-white text-6xl sm:text-7xl lg:text-8xl mb-6">
            Real Results for{" "}
            <span className="gradient-text">Real Businesses</span>
          </h1>
          <p className="text-[#A6B3C9] text-xl max-w-2xl mx-auto">
            Explore how we&apos;ve helped organisations across every sector achieve measurable
            outcomes through technology transformation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />

      {/* Case studies grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="glow-orb glow-purple w-[460px] h-[460px] top-1/3 -right-56 opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="glass-card glass-card-hover overflow-hidden !rounded-3xl">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Left panel — photo with tinted glass overlay */}
                  <div className="relative p-8 text-white flex flex-col justify-between min-h-[320px] overflow-hidden">
                    <Image
                      src={cs.photo}
                      alt={cs.client}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b ${cs.accent} to-[#060B1A]/95`} />
                    <div className="absolute inset-0 backdrop-blur-[2px]" />

                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl glass flex items-center justify-center text-white font-bold text-lg mb-5">
                        {cs.logo}
                      </div>
                      <p className="label-mono text-white/70 mb-1">{cs.industry}</p>
                      <h3 className="font-bold text-xl leading-snug mb-3">{cs.client}</h3>
                      <p className="text-white/85 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="relative mt-6">
                      <p className="label-mono text-white/60 mb-2">Technologies Used</p>
                      <div className="flex flex-wrap gap-1.5">
                        {cs.tech.map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-medium">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right panel */}
                  <div className="lg:col-span-2 p-8">
                    <h2 className="heading-secondary text-xl text-white mb-4">{cs.title}</h2>
                    <p className="text-[#A6B3C9] text-sm leading-relaxed mb-6">{cs.solution}</p>

                    {/* Results — glass stat tiles */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                      {cs.results.map(({ metric, label }) => (
                        <div key={label} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                          <p className="text-2xl font-bold gradient-text">{metric}</p>
                          <p className="text-[#7C8AA5] text-xs mt-1 leading-tight">{label}</p>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/case-studies/${cs.id}`}
                      className="btn-filled text-sm !py-2.5 !px-5 group"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
