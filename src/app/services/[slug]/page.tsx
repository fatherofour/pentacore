import type { Metadata } from "next";
import { ScrollText } from "@/components/ui/ScrollText";
import { HeroFX } from "@/components/ui/HeroFX";
import { ServiceOrbit } from "@/components/ui/ServiceOrbit";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle, ArrowRight, ArrowLeft, Phone } from "@/components/ui/icons";
import { CTA } from "@/components/home/CTA";
import { OEMS, extraPhotos, extraServices, oemsBySlug, type OemUse } from "@/data/services";

const heroPhotos: Record<string, string> = {
  "microsoft-365": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format&fit=crop",
  azure: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&auto=format&fit=crop",
  cybersecurity: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80&auto=format&fit=crop",
  "remote-it-support": "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80&auto=format&fit=crop",
  "call-center-solution": "https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=1920&q=80&auto=format&fit=crop",
  "it-audit": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80&auto=format&fit=crop",
  devops: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1920&q=80&auto=format&fit=crop",
  "cybersecurity-gap-analysis": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&q=80&auto=format&fit=crop",
  "business-impact-analysis": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80&auto=format&fit=crop",
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
      "Microsoft 365 is far more than just email and Office apps. It's an integrated platform for communication, collaboration, security, and compliance. The Crew Solutions helps you unlock its full potential, from initial planning and licensing through migration, deployment, and ongoing managed support.",
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
      { q: "Which M365 licence tier do we need?", a: "This depends on your specific needs. We provide a free licensing assessment and recommend the right plan, from Microsoft 365 Business Basic to E5, based on your security requirements, user count, and features needed." },
      { q: "Do you provide training for staff?", a: "Yes. We include user adoption training as part of every Microsoft 365 deployment, covering Teams, Outlook, SharePoint, and OneDrive with role-specific training tracks." },
    ],
  },
  azure: {
    title: "Azure Cloud",
    tagline: "Enterprise cloud architecture and ongoing support",
    description:
      "Microsoft Azure powers some of the world's largest organisations. The Crew Solutions is an Azure Expert MSP, helping businesses design, migrate to, and optimise their Azure environments for performance, cost efficiency, and security.",
    benefits: [
      "Azure Well-Architected Framework reviews and implementation",
      "Landing zone design for secure, scalable cloud adoption",
      "Cost optimisation: average 30% reduction in Azure spend for new clients",
      "24/7 Azure monitoring and operational support",
      "Hybrid Azure Arc deployments for mixed environments",
      "Azure DevOps and CI/CD pipeline implementation",
    ],
    process: [
      { step: "01", title: "Cloud Assessment", desc: "Evaluate workloads, dependencies, and cloud readiness." },
      { step: "02", title: "Architecture Design", desc: "Design a secure, resilient Azure landing zone." },
      { step: "03", title: "Pilot Migration", desc: "Migrate non-critical workloads first to validate approach." },
      { step: "04", title: "Full Migration", desc: "Phased migration of all workloads with continuous testing." },
      { step: "05", title: "Optimise & Manage", desc: "Ongoing cost optimisation, monitoring, and support." },
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
      "Cyber threats are more sophisticated, frequent, and damaging than ever. The Crew Solutions provides comprehensive cybersecurity services, from initial risk assessments through 24/7 managed security operations, to protect your people, data, and reputation.",
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
  "remote-it-support": {
    title: "Remote IT Support",
    tagline: "Fast, secure help for your people, wherever they work",
    description:
      "When a laptop will not connect, an account is locked or an app stops working, your team needs help now. The Crew Solutions' Remote IT Support gives your staff a single, responsive helpdesk that fixes most issues in minutes, securely and remotely, without waiting for an engineer to visit.",
    benefits: [
      "Responsive helpdesk reachable by phone, WhatsApp, email and a ticket portal",
      "Secure remote access to diagnose and fix issues on laptops, desktops and servers",
      "User account, password, email and Microsoft 365 administration handled for you",
      "Proactive monitoring, patching and security updates to prevent problems before they start",
      "New joiner and leaver onboarding, including device setup and access provisioning",
      "Clear service levels, ticket tracking and monthly reporting so you always know where you stand",
    ],
    process: [
      { step: "01", title: "Onboard & Assess", desc: "We document your users, devices and systems and agree service levels." },
      { step: "02", title: "Connect Securely", desc: "Deploy secure remote-access and monitoring tools across your devices." },
      { step: "03", title: "Log & Triage", desc: "Requests are logged, prioritised and routed to the right engineer." },
      { step: "04", title: "Resolve Remotely", desc: "Most issues are diagnosed and fixed remotely, often within minutes." },
      { step: "05", title: "Report & Improve", desc: "Regular reviews spot recurring issues and reduce future tickets." },
    ],
    faqs: [
      { q: "What kinds of issues can be fixed remotely?", a: "The large majority of everyday issues: software and email problems, account and password resets, printer and network faults, Microsoft 365 questions, slow devices and security alerts. For hardware faults that need hands-on attention, we coordinate a repair or replacement." },
      { q: "How do we contact the support team?", a: "You can reach us by phone, WhatsApp, email or through the ticket portal. Every request is logged so nothing gets lost, and you can follow progress from raising to resolution." },
      { q: "Is remote access to our devices secure?", a: "Yes. We use encrypted, audited remote-access tools with multi-factor authentication, only connect when a request is raised or with user permission, and keep a record of every session." },
      { q: "Do we need a long-term contract?", a: "We offer flexible plans, from a fixed monthly support package to pay-as-you-go help for occasional needs. We will recommend the option that fits your team size and how much support you typically need." },
    ],
  },
  "call-center-solution": {
    title: "Call Center Solution",
    tagline: "A modern cloud contact centre for exceptional customer care",
    description:
      "Great customer service starts with never missing a conversation. The Crew Solutions designs and deploys cloud call centre solutions that bring voice calls, WhatsApp, email and web chat into one platform, so your agents can respond faster, your managers can see everything, and your customers feel looked after.",
    benefits: [
      "Cloud-based inbound and outbound calling with smart call routing and IVR menus",
      "Omnichannel inbox that brings voice, WhatsApp, email and live chat into a single agent screen",
      "CRM integration so agents see the full customer history the moment a call connects",
      "Call recording, monitoring and quality scoring to keep service standards high",
      "Live dashboards and reports on wait times, call volumes, agent performance and satisfaction",
      "Flexible seats and remote-ready agents, so you can scale up or down as demand changes",
    ],
    process: [
      { step: "01", title: "Discover Your Needs", desc: "Understand call volumes, channels, teams and customer journeys." },
      { step: "02", title: "Design the Solution", desc: "Plan call flows, routing rules, integrations and reporting." },
      { step: "03", title: "Build & Integrate", desc: "Configure the platform and connect your numbers, CRM and channels." },
      { step: "04", title: "Train & Go Live", desc: "Train agents and supervisors, then launch with hands-on support." },
      { step: "05", title: "Optimise", desc: "Use call data and feedback to refine routing, scripts and performance." },
    ],
    faqs: [
      { q: "Do we need special equipment to run a cloud call centre?", a: "No. Agents work from a computer with a headset and an internet connection, whether in your office or working remotely. There is no on-site telephone exchange to buy or maintain." },
      { q: "Can we keep our existing phone numbers?", a: "In most cases yes. We can connect your current business numbers or set up new local and toll-free numbers, depending on your carrier and the numbers you use today." },
      { q: "Can the call centre work with our CRM?", a: "Yes. We integrate with popular CRMs, including Zoho CRM and Dynamics 365, so customer records appear automatically during calls and every interaction is logged against the customer." },
      { q: "Can customers reach us on WhatsApp as well as by phone?", a: "Yes. Voice, WhatsApp, email and website chat can all be handled from one agent workspace, so customers can contact you the way they prefer and your team never has to switch tools." },
    ],
  },
  "it-audit": {
    title: "IT Audit",
    tagline: "An independent, evidence-based review of your IT environment",
    description:
      "How confident are you that your IT systems are secure, well run and compliant? The Crew Solutions' IT Audit gives you an independent, evidence-based view of your infrastructure, applications, access controls and processes, with clear findings, risk ratings and a practical plan to fix what matters most.",
    benefits: [
      "Review of IT governance, policies, procedures and how well they are followed in practice",
      "Assessment of infrastructure, networks, cloud environments and endpoint devices",
      "Access control, user privilege and identity management review",
      "Data backup, recovery and change-management control testing",
      "Alignment with recognised standards and regulatory expectations such as ISO 27001 and NDPA",
      "Prioritised findings report with risk ratings, recommendations and an executive summary",
    ],
    process: [
      { step: "01", title: "Scope & Plan", desc: "Agree audit objectives, systems in scope and the standards to test against." },
      { step: "02", title: "Gather Evidence", desc: "Interviews, documentation review and technical testing of key controls." },
      { step: "03", title: "Assess & Rate", desc: "Analyse findings and rate each risk by likelihood and business impact." },
      { step: "04", title: "Report", desc: "Deliver a clear report with findings, priorities and recommendations." },
      { step: "05", title: "Support Remediation", desc: "Help you act on the findings and re-test the fixes if needed." },
    ],
    faqs: [
      { q: "Why do we need an IT audit?", a: "An audit shows whether your IT controls actually work, uncovers hidden risks before they cause an incident, and gives your leadership, auditors and regulators evidence that technology is being managed responsibly." },
      { q: "How long does an IT audit take?", a: "It depends on the size and complexity of your environment. A focused audit of a small or mid-sized organisation can often be completed in a few weeks. We will agree scope and timing with you up front." },
      { q: "Will the audit disrupt our business?", a: "No. Most of the work is document review, interviews and read-only technical checks. We schedule any testing around your operations to avoid disruption." },
      { q: "What do we receive at the end?", a: "A written report containing an executive summary, detailed findings with risk ratings, and a prioritised action plan. We also walk your team through the results and answer questions." },
    ],
  },
  devops: {
    title: "DevOps",
    tagline: "Ship software faster, safer and more reliably",
    description:
      "DevOps brings development and operations together so you can release improvements quickly without breaking things. The Crew Solutions designs the pipelines, automation and cloud foundations that turn slow, manual releases into a smooth, repeatable and secure process.",
    benefits: [
      "CI/CD pipelines that build, test and deploy your applications automatically",
      "Infrastructure as code so environments are consistent, versioned and easy to recreate",
      "Cloud automation on Azure and other platforms to cut manual effort and errors",
      "Containers and orchestration for scalable, portable applications",
      "Monitoring, logging and alerting so you spot and fix issues quickly",
      "Security built into the pipeline (DevSecOps) with automated scanning and secrets management",
    ],
    process: [
      { step: "01", title: "Assess", desc: "Review your current delivery process, tooling and pain points." },
      { step: "02", title: "Design", desc: "Plan the target pipeline, environments and automation approach." },
      { step: "03", title: "Build", desc: "Implement CI/CD, infrastructure as code and monitoring." },
      { step: "04", title: "Migrate", desc: "Move your applications onto the new pipeline in stages." },
      { step: "05", title: "Improve", desc: "Train your team and continuously tune for speed and reliability." },
    ],
    faqs: [
      { q: "What is DevOps in simple terms?", a: "It is a way of working, supported by tooling, that lets teams build, test and release software in small, frequent and automated steps, rather than in big, risky, manual releases." },
      { q: "Which tools do you work with?", a: "We work with the tools that suit your stack, including Azure DevOps, GitHub Actions, Docker, Kubernetes and Terraform, and integrate with what you already use rather than forcing a change." },
      { q: "Do we need to be in the cloud to use DevOps?", a: "No. DevOps practices such as automated builds, testing and deployment work on-premises, in the cloud or in a hybrid setup, and they often make a later move to the cloud easier." },
      { q: "Can you work with our in-house developers?", a: "Yes. We usually work alongside your team, setting up the foundations, transferring knowledge and coaching your developers so that you can run and evolve the pipeline yourselves." },
    ],
  },
  "cybersecurity-gap-analysis": {
    title: "Cybersecurity Gap Analysis",
    tagline: "Know exactly where your security falls short, and what to fix first",
    description:
      "A gap analysis measures your current security controls against a recognised framework, so you can see the distance between where you are and where you need to be. The Crew Solutions delivers a clear, prioritised roadmap that focuses your time and budget on the gaps that reduce the most risk.",
    benefits: [
      "Assessment against recognised frameworks such as ISO 27001, NIST CSF and CIS Controls",
      "Review of policies, technical controls, people and processes",
      "Identification of vulnerabilities and weaknesses across networks, cloud, identity and endpoints",
      "Maturity scoring so you can see progress over time",
      "Risk-ranked findings with quick wins separated from longer-term improvements",
      "A costed, prioritised remediation roadmap you can take straight into planning",
    ],
    process: [
      { step: "01", title: "Define Scope", desc: "Choose the framework and the business areas to be assessed." },
      { step: "02", title: "Assess Controls", desc: "Interview stakeholders and test current controls and settings." },
      { step: "03", title: "Identify Gaps", desc: "Compare against the framework and score maturity per area." },
      { step: "04", title: "Prioritise", desc: "Rank gaps by risk and effort to separate quick wins from projects." },
      { step: "05", title: "Roadmap", desc: "Deliver an actionable plan and support you through remediation." },
    ],
    faqs: [
      { q: "What is a cybersecurity gap analysis?", a: "It is a structured comparison of your existing security controls against a chosen standard or framework. The result shows what you already do well, where you fall short and what to address first." },
      { q: "How is it different from a penetration test?", a: "A penetration test tries to break into specific systems to find technical weaknesses. A gap analysis is broader: it reviews policy, process, people and technology against a framework. The two complement each other." },
      { q: "Which framework should we use?", a: "It depends on your industry, customers and regulators. We can help you choose, often starting with ISO 27001, NIST CSF or CIS Controls, and tailor the assessment to your goals." },
      { q: "Can this help us prepare for certification or an audit?", a: "Yes. It is one of the most effective first steps toward certifications such as ISO 27001 and Cyber Essentials, and toward regulator or customer security reviews, because it shows exactly what needs to be done." },
    ],
  },
  "business-impact-analysis": {
    title: "Business Impact Analysis",
    tagline: "Understand what matters most when things go wrong",
    description:
      "A Business Impact Analysis (BIA) shows which of your processes, systems and people are critical, and what an outage would really cost. It is the foundation of any effective business continuity and disaster recovery plan, ensuring your recovery investment goes where it protects the business most.",
    benefits: [
      "Identification of critical business processes and the systems and people they depend on",
      "Analysis of financial, operational, legal and reputational impact of disruption over time",
      "Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) for each critical function",
      "Mapping of dependencies on suppliers, applications and data",
      "Risk and single-point-of-failure identification",
      "A clear report that feeds directly into your continuity and disaster recovery planning",
    ],
    process: [
      { step: "01", title: "Plan", desc: "Agree scope, stakeholders and the processes to be assessed." },
      { step: "02", title: "Gather Data", desc: "Workshops and questionnaires with business and IT owners." },
      { step: "03", title: "Analyse Impact", desc: "Quantify the effect of disruption on each process over time." },
      { step: "04", title: "Set Objectives", desc: "Define recovery priorities, RTOs and RPOs." },
      { step: "05", title: "Report", desc: "Deliver findings and recommendations for continuity planning." },
    ],
    faqs: [
      { q: "What is a business impact analysis?", a: "It is a structured way of working out which business activities are most critical, how quickly they need to be restored after a disruption, and what a disruption would cost you in money, service and reputation." },
      { q: "Why does a BIA come before a disaster recovery plan?", a: "Without knowing what is most critical and how much downtime you can tolerate, recovery plans tend to protect the wrong things. A BIA makes sure your investment is proportionate and focused." },
      { q: "Who needs to be involved?", a: "Leaders and process owners from across the business, along with IT. Their input on how the business actually works is what makes the analysis accurate. We facilitate the sessions and do the analysis." },
      { q: "How often should we repeat it?", a: "At least annually, and whenever there is a significant change such as a new system, office, supplier or line of business, so your continuity plans stay in step with the organisation." },
    ],
  },
  "custom-erp-solutions": {
    title: "Custom ERP Solutions",
    tagline: "ERP systems built around how your business actually works",
    description:
      "Off-the-shelf ERP software often forces you to bend your processes to fit the tool. The Crew Solutions designs and builds custom ERP solutions (covering finance, inventory, HR, procurement, and reporting) so the system fits your business, not the other way around.",
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
      "Your website is often the first interaction a customer has with your business. The Crew Solutions designs and builds fast, responsive, SEO-friendly websites, from marketing sites to content-driven platforms, engineered for performance and growth.",
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
      { q: "Is SEO included?", a: "On-page SEO fundamentals (site structure, metadata, performance, and accessibility) are included in every build. We also offer ongoing SEO and content services separately." },
    ],
  },
  "web-application": {
    title: "Web Application",
    tagline: "Custom web apps built around your business logic",
    description:
      "When off-the-shelf software can't handle your business logic, we build it. The Crew Solutions designs and develops custom web applications (internal tools, customer portals, booking systems, and more) that are secure, scalable, and built to last.",
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

type BaseService = (typeof services)[string];

function getService(slug: string): (BaseService & { oems: OemUse[] }) | undefined {
  const extra = extraServices[slug];
  if (extra) return extra;
  const base = services[slug];
  return base ? { ...base, oems: oemsBySlug[slug] ?? [] } : undefined;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
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
  const service = getService(slug);

  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-12 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src={heroPhotos[slug] ?? extraPhotos[slug] ?? "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&auto=format&fit=crop"}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-photo object-cover opacity-40 saturate-[1.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-page/70 via-page/85 to-page" />
        </div>
        <HeroFX />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceOrbit title={service.title} slug={slug} />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-mute hover:text-ink transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <p className="text-accent text-lg font-medium mb-3">{service.tagline}</p>
            <h1 className="heading-display text-ink text-5xl sm:text-6xl lg:text-7xl mb-6">
              {service.title}
            </h1>
            <p className="text-body text-xl leading-relaxed mb-8">{service.description}</p>
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
      <section className="py-12 md:py-14 relative overflow-hidden">
        <div className="glow-orb glow-cyan w-[420px] h-[420px] top-20 -right-52 opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-secondary text-3xl text-ink mb-6">
                What&apos;s included in our{" "}
                <span className="gradient-text">{service.title} service</span>
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-body">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-ink mb-5">Our Delivery Process</h3>
              {service.process.map((p) => (
                <div key={p.step} className="glass-card flex gap-4 p-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0078D4] to-[#06B6D4] shadow-lg shadow-[#0078D4]/25 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    {p.step}
                  </div>
                  <div>
                    <p className="font-bold text-ink text-sm">{p.title}</p>
                    <p className="text-mute text-sm mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OEM products */}
      <section className="py-12 md:py-14 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollText className="heading-secondary text-3xl text-ink mb-3 text-balance" text={"Delivered with"} accent={"leading OEM products"} />
            <p className="text-body max-w-2xl mx-auto">
              We design, deploy and support {service.title} using products from the OEMs we partner with.
            </p>
          </div>
          <div className={`grid grid-cols-1 gap-6 ${service.oems.length > 1 ? "md:grid-cols-2" : "max-w-2xl mx-auto"} ${service.oems.length > 2 ? "lg:grid-cols-3" : ""}`}>
            {service.oems.map(({ oem, products }) => (
              <div key={oem} className="glass-card glass-card-hover p-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-12 min-w-[96px] px-4 rounded-xl bg-white/90 border border-white/30 shadow-lg shadow-black/20 flex items-center justify-center">
                    <Image src={OEMS[oem].logo} alt={OEMS[oem].name} width={120} height={32} className="h-7 w-auto max-w-[120px] object-contain" />
                  </div>
                  <div>
                    <p className="font-bold text-ink">{OEMS[oem].name}</p>
                    <p className="label-mono text-mute">{products.length} product{products.length === 1 ? "" : "s"}</p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {products.map((p) => (
                    <li key={p} className="glass-chip !text-xs">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-14 relative overflow-hidden">
        <div className="glow-orb glow-purple w-[400px] h-[400px] bottom-0 -left-52 opacity-50" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-secondary text-3xl text-ink mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map(({ q, a }) => (
              <div key={q} className="glass-card p-6">
                <h4 className="font-bold text-ink text-base mb-3">{q}</h4>
                <p className="text-body text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
