export type CaseStudy = {
  id: string;
  client: string;
  industry: string;
  title: string;
  /** Short challenge / solution used on the listing card */
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  tech: string[];
  accent: string;
  photo: string;
  logo: string;

  /* ---- Full case study content ---- */
  /** One-paragraph summary shown under the detail hero */
  overview: string;
  glance: { label: string; value: string }[];
  background: string[];
  painPoints: { title: string; desc: string }[];
  approach: { title: string; timing: string; desc: string; points: string[] }[];
  outcomes: string[];
  closing: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "healthfirst-azure-migration",
    client: "HealthFirst Group",
    industry: "Healthcare",
    title: "Migrating 2,000 Healthcare Users to Azure in 6 Weeks",
    challenge:
      "HealthFirst needed to retire aging on-premises infrastructure and enable secure remote working for clinical and administrative staff following rapid expansion.",
    solution:
      "We designed and deployed an Azure landing zone, migrated Active Directory to Azure AD, and rolled out Microsoft 365 E3 with Intune device management across all sites.",
    results: [
      { metric: "40%", label: "Improvement in IT performance" },
      { metric: "6 weeks", label: "Delivery timeline" },
      { metric: "₦360M", label: "Annual cost savings" },
      { metric: "Zero", label: "Downtime during migration" },
    ],
    tech: ["Azure", "Microsoft 365 E3", "Azure AD", "Intune", "Defender for Business"],
    accent: "from-rose-600/70",
    photo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=75&auto=format&fit=crop",
    logo: "HF",

    overview:
      "HealthFirst Group had outgrown the servers it was running its clinics on. The Crew Solutions moved 2,000 clinical and administrative users to a secure Azure and Microsoft 365 environment in six weeks, without interrupting patient services.",
    glance: [
      { label: "Sector", value: "Healthcare" },
      { label: "Users migrated", value: "2,000" },
      { label: "Timeline", value: "6 weeks" },
      { label: "Scope", value: "Cloud, identity & devices" },
    ],
    background: [
      "HealthFirst Group is a multi-site healthcare provider that had grown quickly through expansion. Each new site had been connected to the core network in whatever way was fastest at the time, which left the group with ageing on-premises servers, inconsistent device builds and a patchwork of remote access tools.",
      "With clinicians increasingly working across sites and from home, leadership wanted a single, secure platform that would let staff sign in from any approved device, while keeping patient data protected and auditable.",
    ],
    painPoints: [
      {
        title: "Ageing infrastructure",
        desc: "Core servers were approaching end of life, with rising maintenance costs and growing risk of unplanned outages.",
      },
      {
        title: "Insecure remote access",
        desc: "Remote working relied on legacy VPN connections that were slow for clinicians and difficult to monitor.",
      },
      {
        title: "Inconsistent devices",
        desc: "Laptops and workstations varied by site, with no central way to enforce encryption, patching or security policy.",
      },
      {
        title: "Zero tolerance for disruption",
        desc: "Clinical teams could not lose access to systems during the move, so the migration had to be invisible to patients and staff.",
      },
    ],
    approach: [
      {
        title: "Assess & design",
        timing: "Weeks 1–2",
        desc: "We audited the existing environment, mapped every application and dependency, and designed a secure Azure landing zone aligned to healthcare compliance requirements.",
        points: [
          "Application and data-flow discovery across all sites",
          "Azure landing zone with network segmentation and policy guardrails",
          "Migration runbook with rollback plans for every wave",
        ],
      },
      {
        title: "Identity & security foundation",
        timing: "Weeks 2–3",
        desc: "Active Directory was extended to Azure AD, with multi-factor authentication and Conditional Access policies enforced before any user was moved.",
        points: [
          "Hybrid identity with single sign-on",
          "Multi-factor authentication for all staff",
          "Defender for Business protection on every endpoint",
        ],
      },
      {
        title: "Phased migration",
        timing: "Weeks 3–5",
        desc: "Users and workloads moved in scheduled waves, site by site, outside clinical peak hours. Each wave was validated by on-site champions before the next began.",
        points: [
          "Mailbox and file migration to Microsoft 365 E3",
          "Workloads lifted into Azure with no service interruption",
          "Devices enrolled and standardised through Intune",
        ],
      },
      {
        title: "Adoption & handover",
        timing: "Week 6",
        desc: "We finished with hands-on training, floor-walking support at each site and a documented handover to the HealthFirst IT team, with ongoing managed support available.",
        points: [
          "Role-based training for clinical and admin teams",
          "Runbooks and admin documentation delivered",
          "Hypercare support through the first weeks of live running",
        ],
      },
    ],
    outcomes: [
      "All 2,000 users migrated in six weeks with zero downtime for clinical systems.",
      "A 40% improvement in IT performance, measured across sign-in times and application responsiveness.",
      "Around ₦360M in annual savings from retiring hardware, maintenance contracts and legacy licences.",
      "Every device now managed, encrypted and patched centrally, with consistent security policy across all sites.",
    ],
    closing:
      "With the foundation in place, HealthFirst is now building on the same Azure environment, adding new sites in days rather than months and exploring further automation for clinical and administrative workflows.",
  },
  {
    id: "meridian-financial-security",
    client: "Meridian Financial Services",
    industry: "Financial Services",
    title: "Building a Zero Trust Security Framework for a Regulated Firm",
    challenge:
      "A growing FinTech faced increasing cyber threats and upcoming FCA security audits. Their legacy perimeter-based security model was inadequate for a hybrid workforce.",
    solution:
      "We implemented Microsoft Sentinel SIEM, Defender for Endpoint, Conditional Access policies, and Azure AD Premium P2, creating a comprehensive Zero Trust environment.",
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

    overview:
      "Meridian Financial Services needed to prove to its regulator that client data was protected, and to do it for a workforce that no longer sat behind a single office firewall. The Crew Solutions replaced the perimeter model with a Zero Trust framework and 24/7 monitoring in twelve weeks.",
    glance: [
      { label: "Sector", value: "Financial Services" },
      { label: "Regulator", value: "FCA" },
      { label: "Timeline", value: "12 weeks" },
      { label: "Scope", value: "Security & compliance" },
    ],
    background: [
      "Meridian is a fast-growing FinTech handling sensitive customer and transaction data. As the team became more distributed, the traditional model of trusting anyone inside the office network no longer matched how people actually worked.",
      "A scheduled FCA security review meant the firm had a fixed deadline to evidence strong identity controls, endpoint protection and incident response, and it had no internal security operations team to run them.",
    ],
    painPoints: [
      {
        title: "Perimeter-only security",
        desc: "Controls assumed a trusted office network, leaving remote and hybrid users far less protected.",
      },
      {
        title: "Limited visibility",
        desc: "Logs were scattered across systems, so suspicious activity was hard to spot and slow to investigate.",
      },
      {
        title: "Audit deadline",
        desc: "The FCA review required documented, testable controls, not just good intentions.",
      },
      {
        title: "No security operations team",
        desc: "Without round-the-clock monitoring, alerts could sit unread outside working hours.",
      },
    ],
    approach: [
      {
        title: "Risk assessment & roadmap",
        timing: "Weeks 1–2",
        desc: "We assessed Meridian's current posture against FCA expectations and Zero Trust principles, then prioritised a roadmap that would close the largest gaps first.",
        points: [
          "Gap analysis against regulatory requirements",
          "Asset, identity and data-flow inventory",
          "Prioritised remediation plan with owners and dates",
        ],
      },
      {
        title: "Identity & access",
        timing: "Weeks 3–5",
        desc: "Identity became the new perimeter. Access decisions were tied to who the user is, the health of their device and the sensitivity of what they were requesting.",
        points: [
          "Azure AD Premium P2 with Privileged Identity Management",
          "Conditional Access policies and enforced MFA",
          "Least-privilege role design and access reviews",
        ],
      },
      {
        title: "Endpoint & data protection",
        timing: "Weeks 6–8",
        desc: "Every device was brought under management and protected, and sensitive data was classified so policies could follow it wherever it went.",
        points: [
          "Defender for Endpoint with automated response",
          "Device compliance policies for hybrid working",
          "Purview labelling and data-loss prevention",
        ],
      },
      {
        title: "Detection & response",
        timing: "Weeks 9–12",
        desc: "Microsoft Sentinel pulled signals from across the estate into one view. Our managed SOC took over monitoring, triage and response around the clock.",
        points: [
          "Sentinel SIEM with tuned analytics rules",
          "Incident response playbooks and escalation paths",
          "24/7 managed SOC coverage and monthly reporting",
        ],
      },
    ],
    outcomes: [
      "A 98% reduction in security incidents once controls and monitoring were live.",
      "A 100% pass rate on the FCA audit, with evidence packs produced directly from the platform.",
      "24/7 managed SOC coverage without the cost of building an in-house team.",
      "A consistent, documented security model that scales as Meridian adds staff and products.",
    ],
    closing:
      "Meridian now treats security as a continuing service rather than a one-off project. Quarterly reviews with our team keep the framework aligned with new products, new regulation and a changing threat landscape.",
  },
  {
    id: "westgate-academy-m365",
    client: "Westgate Academy Trust",
    industry: "Education",
    title: "Digital Transformation of a Multi-Academy Trust with M365 Education",
    challenge:
      "A trust of 8 schools needed to modernise its disconnected, siloed IT infrastructure and create a unified digital learning environment for 3,000 students.",
    solution:
      "We deployed Microsoft 365 Education A3 across all 8 schools, implemented Teams for Education for hybrid learning, and provided staff training and change management.",
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

    overview:
      "Westgate Academy Trust ran eight schools on eight different sets of systems. The Crew Solutions brought them onto a single Microsoft 365 Education platform, giving 3,000 students and their teachers one place to learn, collaborate and be supported.",
    glance: [
      { label: "Sector", value: "Education" },
      { label: "Schools", value: "8" },
      { label: "Students", value: "3,000+" },
      { label: "Scope", value: "Platform, training & change" },
    ],
    background: [
      "Westgate Academy Trust grew by welcoming schools that each arrived with their own IT setup: different email systems, different logins and different ways of sharing work. Staff moving between schools had to relearn tools, and the central team supported eight environments instead of one.",
      "The trust wanted a shared digital learning environment that worked equally well in the classroom and at home, that teachers would actually want to use, and that would reduce, rather than add to, the cost of IT.",
    ],
    painPoints: [
      {
        title: "Eight separate environments",
        desc: "Each school had its own accounts, tools and support routines, which made shared working almost impossible.",
      },
      {
        title: "Uneven digital learning",
        desc: "Hybrid and remote learning depended on which school a student attended and how confident their teachers felt.",
      },
      {
        title: "Rising IT costs",
        desc: "Duplicate licences and separate support arrangements were absorbing budget that should have gone to teaching.",
      },
      {
        title: "Stretched teaching staff",
        desc: "Any new platform had to be simple to adopt, with real training rather than a manual and a deadline.",
      },
    ],
    approach: [
      {
        title: "Discovery across all schools",
        timing: "Phase 1",
        desc: "We visited every school to understand what was in use, what teachers relied on and where the biggest frustrations were, before designing a single tenant for the whole trust.",
        points: [
          "Inventory of accounts, devices and licences per school",
          "Interviews with teachers, IT staff and school leaders",
          "One tenant design with school-level administration",
        ],
      },
      {
        title: "Platform build & identity",
        timing: "Phase 2",
        desc: "We built the Microsoft 365 Education A3 tenant, with structured identity for staff and students, safeguarding controls and consistent device management.",
        points: [
          "Azure AD structure for staff, students and year groups",
          "Intune for Education device policies",
          "Content filtering and safeguarding configuration",
        ],
      },
      {
        title: "Phased school rollout",
        timing: "Phase 3",
        desc: "Schools moved in waves, timed around the school calendar to avoid exam periods. Each school had a named lead and on-site support during go-live week.",
        points: [
          "Mail, files and Teams classes migrated per school",
          "SharePoint intranet for staff communications",
          "Student and parent guidance for home learning",
        ],
      },
      {
        title: "Training & change management",
        timing: "Ongoing",
        desc: "We trained staff in short, practical sessions built around real lessons, and set up digital champions in each school to keep momentum going.",
        points: [
          "Hands-on Teams for Education workshops",
          "Champion network across all eight schools",
          "Follow-up clinics and drop-in support",
        ],
      },
    ],
    outcomes: [
      "More than 3,000 students onboarded onto one consistent learning platform.",
      "A 60% increase in digital engagement across classes, homework and staff collaboration.",
      "Eight schools unified under a single tenant, with one support model instead of eight.",
      "A 30% reduction in IT spend through consolidated licensing and simpler support.",
    ],
    closing:
      "Westgate now uses the platform as the foundation for further work, from shared curriculum resources across schools to analytics that help teachers see where students need extra support.",
  },
  {
    id: "lagos-trade-zoho",
    client: "Lagos Trade Solutions",
    industry: "Retail & Distribution",
    title: "Zoho CRM Plus Implementation Drives 60% Lead Conversion Uplift",
    challenge:
      "A growing trading company was managing sales across spreadsheets and disconnected systems, losing leads and unable to track customer interactions at scale.",
    solution:
      "We implemented Zoho CRM Plus with custom sales pipeline configuration, Zoho Campaigns integration, and SalesIQ for live chat, plus staff training and onboarding.",
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

    overview:
      "Lagos Trade Solutions was winning business but losing track of it. The Crew Solutions replaced spreadsheets and scattered inboxes with a single Zoho CRM Plus platform, so every lead, conversation and deal is now visible and followed up.",
    glance: [
      { label: "Sector", value: "Retail & Distribution" },
      { label: "Location", value: "Lagos, Nigeria" },
      { label: "Timeline", value: "8 weeks" },
      { label: "Scope", value: "CRM, marketing & support" },
    ],
    background: [
      "Lagos Trade Solutions is a growing trading and distribution company with an active sales team and a rising number of enquiries arriving by phone, email, social media and its website. Each salesperson tracked their own leads, mostly in personal spreadsheets.",
      "As volume grew, the cracks showed: enquiries went unanswered, managers could not forecast, and there was no reliable record of what had been promised to which customer.",
    ],
    painPoints: [
      {
        title: "Leads slipping through",
        desc: "Without a shared system, follow-ups depended on individual memory and enquiries were regularly missed.",
      },
      {
        title: "No pipeline visibility",
        desc: "Management could not see which deals were live, at what stage, or how much revenue to expect.",
      },
      {
        title: "Disconnected channels",
        desc: "Website chat, email campaigns and customer support all lived in separate tools with no shared customer history.",
      },
      {
        title: "Manual reporting",
        desc: "Weekly reports were assembled by hand from several spreadsheets and were out of date as soon as they were finished.",
      },
    ],
    approach: [
      {
        title: "Sales process mapping",
        timing: "Weeks 1–2",
        desc: "We sat with the sales team to map how a lead actually becomes a customer, then designed a pipeline that matched reality rather than forcing a generic template.",
        points: [
          "Lead sources, stages and hand-offs documented",
          "Custom fields, scoring and assignment rules",
          "Data cleanup and structure for existing contacts",
        ],
      },
      {
        title: "Platform configuration",
        timing: "Weeks 3–5",
        desc: "We configured Zoho CRM Plus with the agreed pipeline and connected the tools that touch the customer, so every interaction is logged in one place.",
        points: [
          "Custom sales pipelines, automations and reminders",
          "Zoho Campaigns for email marketing tied to CRM segments",
          "SalesIQ live chat on the website feeding new leads directly",
        ],
      },
      {
        title: "Reporting & support",
        timing: "Weeks 5–6",
        desc: "Dashboards replaced manual reports, and Zoho Desk gave customers a single place to raise issues that the whole team could see.",
        points: [
          "Zoho Analytics dashboards for pipeline and performance",
          "Zoho Desk for support tickets and service history",
          "Forecasting views for management",
        ],
      },
      {
        title: "Training & go-live",
        timing: "Weeks 7–8",
        desc: "Every user was trained on their own role and workflow before go-live, with our team on hand through the first weeks to fix small issues quickly.",
        points: [
          "Role-based training for sales, marketing and support",
          "Guided data import and cut-over",
          "Post-launch review and tuning",
        ],
      },
    ],
    outcomes: [
      "A 60% improvement in lead conversion, driven by faster response and consistent follow-up.",
      "A 45% reduction in sales cycle time, as deals stopped stalling between hand-offs.",
      "Three times the pipeline visibility for management, with live dashboards replacing manual reports.",
      "Go-live in eight weeks, with the team using the system daily from the first week.",
    ],
    closing:
      "Lagos Trade Solutions is now extending the platform with more automation and customer segmentation, using the data they finally have to decide where to focus their sales effort.",
  },
  {
    id: "nexgen-manufacturing-ot",
    client: "NexGen Manufacturing",
    industry: "Manufacturing",
    title: "OT/IT Convergence and Industrial Cybersecurity for Smart Factory",
    challenge:
      "A manufacturing firm expanding into Industry 4.0 needed to safely connect operational technology (OT) with IT systems without exposing the factory floor to cyber threats.",
    solution:
      "We implemented Microsoft Defender for IoT for OT visibility, created segmented network architecture with Cisco industrial switches, and deployed 24/7 SOC monitoring.",
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

    overview:
      "NexGen Manufacturing wanted to connect its production line to business systems and cloud analytics, without opening a door for attackers. The Crew Solutions gave the factory floor full visibility, a segmented network and round-the-clock monitoring.",
    glance: [
      { label: "Sector", value: "Manufacturing" },
      { label: "Focus", value: "OT / IT security" },
      { label: "Certification", value: "Cyber Essentials Plus" },
      { label: "Scope", value: "Network, visibility & SOC" },
    ],
    background: [
      "NexGen Manufacturing was moving toward a smart-factory model, using data from machines and sensors to improve efficiency and reduce downtime. That meant connecting equipment that had never been designed to be online to the corporate network and the cloud.",
      "Much of the production equipment could not be patched or run security software, and nobody had a complete picture of what was actually connected. Leadership needed the benefits of connectivity without putting production at risk.",
    ],
    painPoints: [
      {
        title: "Unknown assets",
        desc: "There was no reliable inventory of the controllers, sensors and machines attached to the factory network.",
      },
      {
        title: "Flat network",
        desc: "Office and production systems shared the same network, so a compromise in one could reach the other.",
      },
      {
        title: "Unpatchable equipment",
        desc: "Industrial equipment ran legacy software that could not be updated or protected with standard tools.",
      },
      {
        title: "No monitoring of production networks",
        desc: "Security tools watched the office, but no one was watching the factory floor.",
      },
    ],
    approach: [
      {
        title: "Discover & map",
        timing: "Phase 1",
        desc: "We deployed passive sensors that observed factory network traffic without disturbing production, building a complete inventory of devices, protocols and communication paths.",
        points: [
          "Microsoft Defender for IoT sensors on key network points",
          "Asset inventory with firmware and vulnerability insight",
          "Risk assessment of every connection between OT and IT",
        ],
      },
      {
        title: "Segment the network",
        timing: "Phase 2",
        desc: "We redesigned the network into zones so that each part of the factory can only talk to what it genuinely needs, with strict controls between production and corporate systems.",
        points: [
          "Cisco industrial switches and zone-based architecture",
          "Fortinet firewalls between OT and IT",
          "SD-WAN connectivity for multi-site resilience",
        ],
      },
      {
        title: "Monitor & respond",
        timing: "Phase 3",
        desc: "OT alerts were connected to Azure Sentinel alongside IT signals, and our SOC began watching both environments together, 24 hours a day.",
        points: [
          "Unified OT and IT detection in Sentinel",
          "Response playbooks agreed with plant engineers",
          "24/7 SOC monitoring and monthly reporting",
        ],
      },
      {
        title: "Certify & hand over",
        timing: "Phase 4",
        desc: "We documented the controls, prepared the evidence and supported NexGen through Cyber Essentials Plus certification, then trained the operations team on the new tooling.",
        points: [
          "Cyber Essentials Plus assessment support",
          "Joint OT and IT security procedures",
          "Training for plant and IT teams",
        ],
      },
    ],
    outcomes: [
      "Zero OT security incidents since deployment.",
      "100% visibility of assets on the factory floor, where previously there was none.",
      "A 25% gain in operational efficiency, unlocked by safely connecting production data to analytics.",
      "Cyber Essentials Plus certification, giving NexGen a credential customers increasingly ask for.",
    ],
    closing:
      "With a secure foundation, NexGen is rolling out further connected lines and predictive maintenance, confident that each new machine joins a network that is monitored and segmented by design.",
  },
  {
    id: "council-cloud-migration",
    client: "Metropolitan District Council",
    industry: "Government",
    title: "Sovereign Cloud Migration for a UK Local Authority",
    challenge:
      "A local council needed to migrate to G-Cloud compliant infrastructure, retire its aging data centre, and enable modern collaboration for 800+ staff.",
    solution:
      "We migrated the council to Microsoft 365 Government and Azure Government, replacing legacy on-premises Exchange and file servers with compliant cloud equivalents.",
    results: [
      { metric: "800+", label: "Staff migrated" },
      { metric: "₦500M", label: "5-year infrastructure savings" },
      { metric: "G-Cloud", label: "Compliance achieved" },
      { metric: "99.9%", label: "Uptime SLA maintained" },
    ],
    tech: ["Microsoft 365 Government", "Azure Government", "SharePoint", "Teams", "Azure AD"],
    accent: "from-slate-600/70",
    photo: "https://images.unsplash.com/photo-1590650046871-92c887180603?w=900&q=75&auto=format&fit=crop",
    logo: "MDC",

    overview:
      "Metropolitan District Council needed to leave an ageing data centre and give more than 800 staff modern tools, while meeting the strict standards that apply to public-sector data. The Crew Solutions delivered a compliant move to the cloud that saves the council ₦500M over five years.",
    glance: [
      { label: "Sector", value: "Government" },
      { label: "Staff migrated", value: "800+" },
      { label: "Standard", value: "G-Cloud compliant" },
      { label: "Scope", value: "Data centre exit & collaboration" },
    ],
    background: [
      "Metropolitan District Council delivers services to residents across its district, from housing and planning to waste and social care. Its systems ran from an on-site data centre that was costly to keep cool, secure and staffed, and that was reaching the end of its supported life.",
      "Staff were also working with tools that made collaboration hard, particularly for mobile and field teams. Any change had to protect resident data, meet public-sector assurance requirements and keep frontline services running throughout.",
    ],
    painPoints: [
      {
        title: "End-of-life data centre",
        desc: "Hardware, cooling and support contracts were expensive and a growing source of risk.",
      },
      {
        title: "Strict compliance",
        desc: "Public-sector data required G-Cloud compliant hosting and clear evidence of controls.",
      },
      {
        title: "Legacy email and file servers",
        desc: "On-premises Exchange and file shares limited mobile working and made sharing across teams clumsy.",
      },
      {
        title: "Services that cannot pause",
        desc: "Residents depend on council services every day, so the migration could not cause visible disruption.",
      },
    ],
    approach: [
      {
        title: "Assurance & planning",
        timing: "Phase 1",
        desc: "We worked with the council's information governance and security teams to agree the compliance requirements up front, and planned a migration that fitted around service peaks.",
        points: [
          "Data classification and hosting requirements agreed",
          "Application and dependency mapping across departments",
          "Wave-based migration plan with rollback",
        ],
      },
      {
        title: "Compliant foundation",
        timing: "Phase 2",
        desc: "We built the Microsoft 365 Government and Azure Government environments with the identity, security and logging controls needed to satisfy assurance requirements.",
        points: [
          "Azure AD with MFA and Conditional Access",
          "Network, logging and policy baselines in Azure Government",
          "Retention and information-protection policies",
        ],
      },
      {
        title: "Migrate mail, files & workloads",
        timing: "Phase 3",
        desc: "Departments moved in waves. Exchange mailboxes and file shares went to Microsoft 365, while remaining applications were rehosted in Azure ahead of decommissioning the data centre.",
        points: [
          "Exchange migrated to Exchange Online",
          "File servers moved to SharePoint and OneDrive",
          "Legacy applications rehosted in Azure Government",
        ],
      },
      {
        title: "Collaborate & decommission",
        timing: "Phase 4",
        desc: "With Teams and SharePoint in place, we trained staff and supported departments as they changed how they worked, then safely retired the data centre.",
        points: [
          "Teams and SharePoint adoption programme",
          "Secure decommissioning and data destruction",
          "Ongoing managed service with a 99.9% uptime SLA",
        ],
      },
    ],
    outcomes: [
      "More than 800 staff migrated with frontline services running throughout.",
      "An estimated ₦500M in infrastructure savings over five years.",
      "G-Cloud compliance achieved and evidenced for the council's assurance process.",
      "A 99.9% uptime SLA maintained, with modern collaboration for office, mobile and field teams.",
    ],
    closing:
      "Freed from running its own data centre, the council can now focus its IT budget on services for residents, and is planning further digital services on the same secure Azure platform.",
  },
];

export const getCaseStudy = (id: string) => caseStudies.find((c) => c.id === id);
