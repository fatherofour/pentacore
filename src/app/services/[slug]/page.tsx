import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle, ArrowRight, ArrowLeft, Phone } from "lucide-react";
import { CTA } from "@/components/home/CTA";

const heroPhotos: Record<string, string> = {
  "microsoft-365": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format&fit=crop",
  azure: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&auto=format&fit=crop",
  cybersecurity: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80&auto=format&fit=crop",
  "custom-erp-solutions": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80&auto=format&fit=crop",
  "web-development": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80&auto=format&fit=crop",
  "web-application": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80&auto=format&fit=crop",
};

const services: Record<
  string,
  {
    title: string;
    tagline: string;
    description: string;
    benefits: string[];
    process: { step: string; title: string; desc: string }[];
    faqs: { q: string; a: string }[];
  }
> = {
  "microsoft-365": {
    title: "Microsoft 365",
    tagline: "The complete modern workplace platform",
    description:
      "Microsoft 365 is far more than just email and Office apps. It's an integrated platform for communication, collaboration, security, and compliance. Pentacore Systems helps you unlock its full potential—from initial planning and licensing through migration, deployment, and ongoing managed support.",
    benefits: [
      "Seamless migration from G Suite, on-premises Exchange, or legacy email platforms",
      "Right-sized licensing strategy to minimise spend without losing capability",
      "Secure, compliant deployment with Conditional Access and MFA",
      "Fully managed, monitored M365 environment with 24/7 support",
      "User adoption training to maximise productivity from day one",
      "Integration with Azure AD, Intune, Defender, and the full Microsoft ecosystem",
    ],
    process: [
      { step: "01", title: "Assessment", desc: "We audit your current environment, user base, and requirements." },
      { step: "02", title: "Licensing", desc: "We design the optimal M365 licensing structure for your organisation." },
      { step: "03", title: "Migration Plan", desc: "A detailed migration runbook with zero-downtime approach." },
      { step: "04", title: "Deployment", desc: "Phased rollout with full testing and rollback procedures." },
      { step: "05", title: "Training & Support", desc: "User training and ongoing managed support post go-live." },
    ],
    faqs: [
      { q: "How long does a Microsoft 365 migration typically take?", a: "For most SMEs (under 200 users), we complete migrations within 2–4 weeks. Larger enterprises may take 6–12 weeks depending on complexity, number of mailboxes, and data volumes." },
      { q: "Will there be any downtime during migration?", a: "Our migration methodology is designed for zero downtime. We use hybrid coexistence approaches where users continue to receive and send email throughout the migration process." },
      { q: "Which M365 licence tier do we need?", a: "This depends on your specific needs. We provide a free licensing assessment and recommend the right plan—from Microsoft 365 Business Basic to E5—based on your security requirements, user count, and features needed." },
      { q: "Do you provide training for staff?", a: "Yes. We include user adoption training as part of every Microsoft 365 deployment, covering Teams, Outlook, SharePoint, and OneDrive with role-specific training tracks." },
    ],
  },
  azure: {
    title: "Azure Cloud",
    tagline: "Enterprise cloud architecture and managed services",
    description:
      "Microsoft Azure powers some of the world's largest organisations. Pentacore Systems is an Azure Expert MSP, helping businesses design, migrate to, and optimise their Azure environments for performance, cost efficiency, and security.",
    benefits: [
      "Azure Well-Architected Framework reviews and implementation",
      "Landing zone design for secure, scalable cloud adoption",
      "Cost optimisation—average 30% reduction in Azure spend for new clients",
      "24/7 Azure monitoring and managed operations",
      "Hybrid Azure Arc deployments for mixed environments",
      "Azure DevOps and CI/CD pipeline implementation",
    ],
    process: [
      { step: "01", title: "Cloud Assessment", desc: "Evaluate workloads, dependencies, and cloud readiness." },
      { step: "02", title: "Architecture Design", desc: "Design a secure, resilient Azure landing zone." },
      { step: "03", title: "Pilot Migration", desc: "Migrate non-critical workloads first to validate approach." },
      { step: "04", title: "Full Migration", desc: "Phased migration of all workloads with continuous testing." },
      { step: "05", title: "Optimise & Manage", desc: "Ongoing cost optimisation, monitoring, and managed services." },
    ],
    faqs: [
      { q: "How much does Azure cloud cost?", a: "Azure costs vary significantly based on workloads. We conduct a TCO analysis and Azure pricing estimate as part of our free discovery session, typically identifying 20–35% cost optimisation opportunities for businesses already on Azure." },
      { q: "Is Azure secure enough for regulated industries?", a: "Yes. Azure holds 90+ compliance certifications including ISO 27001, SOC 1/2, GDPR, and sector-specific standards like HIPAA and G-Cloud. We configure Azure environments to meet your specific regulatory requirements." },
      { q: "Can we have a hybrid setup with some services on-premises?", a: "Absolutely. Many of our clients operate hybrid environments. We design and manage Azure Arc and Azure Stack deployments that seamlessly connect on-premises and cloud resources." },
      { q: "What is an Azure Expert MSP?", a: "Azure Expert MSPs are a select group of Microsoft partners that have passed rigorous audits of their Azure technical capabilities, customer success track record, and managed service practices." },
    ],
  },
  cybersecurity: {
    title: "Cybersecurity",
    tagline: "Protecting your business in an evolving threat landscape",
    description:
      "Cyber threats are more sophisticated, frequent, and damaging than ever. Pentacore Systems provides comprehensive cybersecurity services—from initial risk assessments through 24/7 managed security operations—to protect your people, data, and reputation.",
    benefits: [
      "Comprehensive security risk assessment and gap analysis",
      "Zero Trust security architecture design and implementation",
      "Microsoft Sentinel SIEM deployment and 24/7 SOC management",
      "Endpoint protection with Microsoft Defender for Endpoint",
      "Security awareness training and phishing simulation programmes",
      "Incident response planning and cyber crisis management",
    ],
    process: [
      { step: "01", title: "Risk Assessment", desc: "Identify vulnerabilities, threats, and security gaps." },
      { step: "02", title: "Strategy", desc: "Develop a prioritised security roadmap aligned to your risk appetite." },
      { step: "03", title: "Implementation", desc: "Deploy security controls, tools, and monitoring capabilities." },
      { step: "04", title: "Testing", desc: "Penetration testing and red team exercises to validate defences." },
      { step: "05", title: "Manage & Respond", desc: "24/7 SOC monitoring with rapid incident response." },
    ],
    faqs: [
      { q: "Do we need cybersecurity services if we're a small business?", a: "Absolutely. Small and medium businesses are increasingly targeted by cybercriminals precisely because they often have weaker defences. A successful attack can be catastrophic for an SME. Our SME-specific security packages are designed to be affordable and effective." },
      { q: "What is a Security Operations Centre (SOC)?", a: "A SOC is a team and platform that monitors your IT environment 24/7 for security threats. Our managed SOC service uses Microsoft Sentinel to detect, investigate, and respond to threats in real time." },
      { q: "How long does a security assessment take?", a: "A standard security risk assessment typically takes 5–10 business days, depending on the size and complexity of your environment. We provide a detailed report with prioritised remediation recommendations." },
      { q: "What certifications do you help businesses achieve?", a: "We commonly help businesses achieve Cyber Essentials, Cyber Essentials Plus, ISO 27001, and SOC 2 Type II certifications, as well as sector-specific standards like PCI-DSS and HIPAA." },
    ],
  },
  "custom-erp-solutions": {
    title: "Custom ERP Solutions",
    tagline: "ERP systems built around how your business actually works",
    description:
      "Off-the-shelf ERP software often forces you to bend your processes to fit the tool. Pentacore Systems designs and builds custom ERP solutions—covering finance, inventory, HR, procurement, and reporting—so the system fits your business, not the other way around.",
    benefits: [
      "Requirements discovery mapped to your real operational workflows",
      "Custom modules for finance, inventory, procurement, and HR",
      "Role-based dashboards and real-time reporting",
      "Integration with existing tools, accounting software, and databases",
      "Scalable architecture that grows with your headcount and transaction volume",
      "Ongoing support, training, and iterative enhancement post-launch",
    ],
    process: [
      { step: "01", title: "Discovery", desc: "We map your current processes, pain points, and data flows." },
      { step: "02", title: "System Design", desc: "We design the data model, modules, and user roles for your ERP." },
      { step: "03", title: "Build", desc: "Iterative development with regular demos and feedback cycles." },
      { step: "04", title: "Migration & Testing", desc: "Data migration from legacy systems and thorough UAT." },
      { step: "05", title: "Launch & Support", desc: "Go-live support, staff training, and ongoing enhancements." },
    ],
    faqs: [
      { q: "Why build a custom ERP instead of buying an off-the-shelf one?", a: "Off-the-shelf ERPs are built for the average business, not yours. A custom ERP maps directly to your workflows, avoids paying for unused modules, and can integrate cleanly with the tools you already run." },
      { q: "How long does a custom ERP build take?", a: "Most SME-scale ERP builds take 3–6 months from discovery to launch, depending on the number of modules and integrations required. We deliver in phases so you see working software early." },
      { q: "Can it integrate with our existing accounting or CRM software?", a: "Yes. We design integrations with common accounting platforms, CRMs, and payment systems as part of the ERP build, using APIs or direct database integration where appropriate." },
      { q: "Who maintains the system after launch?", a: "We offer ongoing support and enhancement retainers, but you also own the full source code and documentation, so you're never locked in to us." },
    ],
  },
  "web-development": {
    title: "Web Development",
    tagline: "Fast, modern websites built to convert",
    description:
      "Your website is often the first interaction a customer has with your business. Pentacore Systems designs and builds fast, responsive, SEO-friendly websites—from marketing sites to content-driven platforms—engineered for performance and growth.",
    benefits: [
      "Custom design aligned to your brand, not a generic template",
      "Built on modern frameworks for speed, SEO, and reliability",
      "Fully responsive across desktop, tablet, and mobile",
      "Content management systems for easy self-service updates",
      "On-page SEO best practices baked in from the start",
      "Analytics, tracking, and conversion optimisation setup",
    ],
    process: [
      { step: "01", title: "Discovery", desc: "We clarify goals, audience, and content requirements." },
      { step: "02", title: "Design", desc: "Wireframes and visual design aligned to your brand." },
      { step: "03", title: "Development", desc: "Build with modern, performant web frameworks." },
      { step: "04", title: "Content & SEO", desc: "Populate content and implement on-page SEO fundamentals." },
      { step: "05", title: "Launch & Support", desc: "Go-live, monitoring, and ongoing maintenance." },
    ],
    faqs: [
      { q: "How long does a website build take?", a: "A typical marketing website takes 3–6 weeks from design to launch. Larger, content-heavy sites can take 8–12 weeks depending on scope." },
      { q: "Will I be able to update the website myself?", a: "Yes. We build on content management systems that let your team update text, images, and pages without needing a developer for routine changes." },
      { q: "Do you handle hosting and domains?", a: "We can manage hosting, domain configuration, SSL, and ongoing maintenance, or hand over full access if you prefer to manage it in-house." },
      { q: "Is SEO included?", a: "On-page SEO fundamentals—site structure, metadata, performance, and accessibility—are included in every build. We also offer ongoing SEO and content services separately." },
    ],
  },
  "web-application": {
    title: "Web Application",
    tagline: "Custom web apps built around your business logic",
    description:
      "When off-the-shelf software can't handle your business logic, we build it. Pentacore Systems designs and develops custom web applications—internal tools, customer portals, booking systems, and more—that are secure, scalable, and built to last.",
    benefits: [
      "Custom features mapped directly to your business logic",
      "Secure authentication, role-based access, and data protection",
      "Scalable cloud-hosted architecture built to handle growth",
      "API integrations with third-party services and internal systems",
      "Clean, maintainable codebase with full documentation",
      "Ongoing support, monitoring, and feature development",
    ],
    process: [
      { step: "01", title: "Discovery", desc: "We define the core workflows, users, and success criteria." },
      { step: "02", title: "Architecture", desc: "We design the data model, API structure, and tech stack." },
      { step: "03", title: "Build", desc: "Iterative development with regular demos and feedback cycles." },
      { step: "04", title: "Testing", desc: "Functional, security, and performance testing before launch." },
      { step: "05", title: "Launch & Support", desc: "Go-live support and ongoing feature development." },
    ],
    faqs: [
      { q: "What kinds of web applications do you build?", a: "Internal operations tools, customer portals, booking and scheduling systems, marketplaces, dashboards, and other bespoke platforms tailored to specific business logic." },
      { q: "How long does a custom web app take to build?", a: "Simple applications can launch in 6–8 weeks. More complex, multi-role platforms typically take 3–6 months, delivered in phases so you get working software early." },
      { q: "Can you build on top of our existing systems?", a: "Yes. We regularly integrate new applications with existing databases, ERPs, CRMs, and third-party APIs rather than starting from scratch." },
      { q: "Do we own the code?", a: "Yes, you own the full source code, infrastructure, and documentation. We also offer ongoing support retainers if you'd like us to continue maintaining it." },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  return {
    title: service.title,
    description: service.tagline,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src={heroPhotos[slug] ?? "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&auto=format&fit=crop"}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060B1A]/70 via-[#060B1A]/85 to-[#060B1A]" />
        </div>
        <div className="glow-orb glow-blue w-[480px] h-[480px] -top-32 -left-32" />
        <div className="absolute inset-0 grid-lines pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#7C8AA5] hover:text-white transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <span className="tag-pill mb-4">
              {service.tagline}
            </span>
            <h1 className="heading-display text-white text-5xl sm:text-6xl lg:text-7xl mb-6">
              {service.title}
            </h1>
            <p className="text-[#A6B3C9] text-xl leading-relaxed mb-8">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-filled group px-7 py-4 font-semibold">
                Get a Free Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:+2348137996917" className="btn-ghost px-7 py-4 font-semibold">
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative overflow-hidden">
        <div className="glow-orb glow-cyan w-[420px] h-[420px] top-20 -right-52 opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-secondary text-3xl text-white mb-6">
                What&apos;s included in our{" "}
                <span className="gradient-text">{service.title} service</span>
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#40A3E0] flex-shrink-0 mt-0.5" />
                    <span className="text-[#A6B3C9]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-5">Our Delivery Process</h3>
              {service.process.map((p) => (
                <div key={p.step} className="glass-card flex gap-4 p-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0078D4] to-[#06B6D4] shadow-lg shadow-[#0078D4]/25 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    {p.step}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{p.title}</p>
                    <p className="text-[#7C8AA5] text-sm mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 relative overflow-hidden">
        <div className="glow-orb glow-purple w-[400px] h-[400px] bottom-0 -left-52 opacity-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-secondary text-3xl text-white mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map(({ q, a }) => (
              <div key={q} className="glass-card p-6">
                <h4 className="font-bold text-white text-base mb-3">{q}</h4>
                <p className="text-[#A6B3C9] text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
