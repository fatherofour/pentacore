/**
 * OEM catalogue and the products behind each service.
 * Every service must list at least one OEM (enforced by the OemUse[] tuple type).
 */

export type OemKey = "microsoft" | "zoho" | "oracle" | "cisco";

export const OEMS: Record<OemKey, { name: string; logo: string }> = {
  microsoft: { name: "Microsoft", logo: "/logos/microsoft.svg" },
  zoho: { name: "Zoho", logo: "/logos/zoho.svg" },
  oracle: { name: "Oracle", logo: "/logos/oracle-cloud.svg" },
  cisco: { name: "Cisco", logo: "/logos/cisco.svg" },
};

export type OemUse = { oem: OemKey; products: string[] };

export type ServiceContent = {
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  oems: [OemUse, ...OemUse[]];
};

/** OEM products for the services whose copy lives in the page file. */
export const oemsBySlug: Record<string, [OemUse, ...OemUse[]]> = {
  "microsoft-365": [
    {
      oem: "microsoft",
      products: [
        "Microsoft 365 Business Premium",
        "Microsoft 365 E3 / E5",
        "Exchange Online",
        "Microsoft Teams",
        "SharePoint & OneDrive",
        "Microsoft Intune",
        "Microsoft 365 Copilot",
      ],
    },
  ],
  azure: [
    {
      oem: "microsoft",
      products: [
        "Azure Virtual Machines",
        "Azure Kubernetes Service",
        "Azure SQL Database",
        "Azure Arc",
        "Azure Monitor",
        "Azure Policy",
      ],
    },
    { oem: "oracle", products: ["Oracle Database@Azure"] },
  ],
  cybersecurity: [
    {
      oem: "microsoft",
      products: [
        "Microsoft Defender XDR",
        "Defender for Endpoint",
        "Microsoft Sentinel",
        "Microsoft Entra ID",
        "Microsoft Purview",
      ],
    },
    { oem: "cisco", products: ["Cisco Duo", "Cisco Secure Firewall"] },
  ],
  "remote-it-support": [
    {
      oem: "microsoft",
      products: ["Microsoft Intune Remote Help", "Quick Assist", "Microsoft Teams", "Microsoft 365 admin center"],
    },
    { oem: "zoho", products: ["Zoho Assist", "Zoho Desk"] },
  ],
  "call-center-solution": [
    { oem: "microsoft", products: ["Dynamics 365 Contact Center", "Microsoft Teams Phone"] },
    { oem: "zoho", products: ["Zoho Voice", "Zoho Desk", "Zoho SalesIQ"] },
  ],
  "it-audit": [
    {
      oem: "microsoft",
      products: [
        "Microsoft Purview Compliance Manager",
        "Microsoft Defender for Cloud",
        "Microsoft Entra access reviews",
        "Microsoft Secure Score",
      ],
    },
  ],
  devops: [
    {
      oem: "microsoft",
      products: ["Azure DevOps", "GitHub Actions", "Azure Kubernetes Service", "Azure Bicep"],
    },
    { oem: "oracle", products: ["OCI DevOps", "Oracle Container Engine for Kubernetes", "OCI Resource Manager"] },
  ],
  "cybersecurity-gap-analysis": [
    {
      oem: "microsoft",
      products: [
        "Microsoft Secure Score",
        "Microsoft Purview Compliance Manager",
        "Defender for Cloud",
        "Defender Vulnerability Management",
      ],
    },
    { oem: "cisco", products: ["Cisco Vulnerability Management"] },
  ],
  "business-impact-analysis": [
    {
      oem: "microsoft",
      products: ["Azure Site Recovery", "Azure Backup", "Microsoft 365 Backup", "Azure Monitor"],
    },
    { oem: "oracle", products: ["OCI Full Stack Disaster Recovery"] },
  ],
  "custom-erp-solutions": [
    { oem: "oracle", products: ["Oracle NetSuite", "Oracle Fusion Cloud ERP", "Oracle Autonomous Database"] },
    { oem: "microsoft", products: ["Dynamics 365 Business Central", "Power Apps", "Power BI"] },
    { oem: "zoho", products: ["Zoho Creator", "Zoho Books", "Zoho Inventory"] },
  ],
  "web-development": [
    { oem: "microsoft", products: ["Azure App Service", "Azure Static Web Apps", "Azure Front Door", "Azure DevOps"] },
    { oem: "zoho", products: ["Zoho Sites", "Zoho PageSense", "Zoho Forms"] },
  ],
  "web-application": [
    { oem: "microsoft", products: ["Azure App Service", "Azure SQL Database", "Azure Functions", "Microsoft Entra ID"] },
    { oem: "oracle", products: ["Oracle APEX", "Oracle Autonomous Database"] },
    { oem: "zoho", products: ["Zoho Creator"] },
  ],
};

const P = {
  server: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&auto=format&fit=crop",
  m365: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format&fit=crop",
  security: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80&auto=format&fit=crop",
  lock: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&q=80&auto=format&fit=crop",
  analytics: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80&auto=format&fit=crop",
  cables: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80&auto=format&fit=crop",
  earth: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format&fit=crop",
  laptop: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80&auto=format&fit=crop",
  meeting: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80&auto=format&fit=crop",
  office: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1920&q=80&auto=format&fit=crop",
  team: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=1920&q=80&auto=format&fit=crop",
  school: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80&auto=format&fit=crop",
  retail: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1920&q=80&auto=format&fit=crop",
  storage: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1920&q=80&auto=format&fit=crop",
};

export const extraPhotos: Record<string, string> = {
  intune: P.laptop,
  "microsoft-teams": P.office,
  sharepoint: P.team,
  "exchange-online": P.m365,
  "dynamics-365": P.analytics,
  "cloud-migration": P.earth,
  "cloud-architecture": P.server,
  "infrastructure-deployment": P.server,
  networking: P.cables,
  "backup-recovery": P.storage,
  "identity-management": P.security,
  "endpoint-management": P.laptop,
  "cloud-security": P.lock,
  consulting: P.meeting,
  training: P.school,
  "zoho-workplace": P.team,
  "zoho-crm": P.retail,
};

/** Services that are linked from the site but were missing detail pages. */
export const extraServices: Record<string, ServiceContent> = {
  intune: {
    title: "Microsoft Intune",
    tagline: "Secure, manage and support every device from the cloud",
    description:
      "Microsoft Intune lets you manage laptops, desktops, phones and apps from one cloud console, wherever your people work. The Crew Solutions plans, deploys and runs Intune so every device is configured, compliant and protected, and new starters are productive from the moment they sign in.",
    benefits: [
      "Zero-touch provisioning with Windows Autopilot, so devices ship straight to staff ready to use",
      "Compliance policies tied to Conditional Access, so only healthy devices can reach company data",
      "App protection for Outlook, Teams and Office on personal phones without managing the whole device",
      "Patch and update control with Windows Update for Business and update rings",
      "Built-in protection with Microsoft Defender for Endpoint and security baselines",
      "Remote Help, remote wipe and Endpoint analytics for faster support and fewer issues",
    ],
    process: [
      { step: "01", title: "Assess", desc: "Review devices, platforms, apps and current management tools." },
      { step: "02", title: "Design", desc: "Plan enrolment, compliance, configuration and app policies." },
      { step: "03", title: "Pilot", desc: "Enrol a pilot group and refine policies with real users." },
      { step: "04", title: "Roll Out", desc: "Bring all devices under management in phases." },
      { step: "05", title: "Operate", desc: "Monitor compliance, apply updates and support users." },
    ],
    faqs: [
      { q: "Is Intune included in our Microsoft 365 licence?", a: "Intune is included in Microsoft 365 Business Premium and Microsoft 365 E3 and E5, as well as Enterprise Mobility + Security plans. We check your current licences and tell you exactly what you already have." },
      { q: "Can Intune manage Mac, iPhone and Android devices?", a: "Yes. Intune manages Windows, macOS, iOS, iPadOS and Android, so you can apply consistent security and configuration across your whole fleet." },
      { q: "Can we protect company data on staff-owned phones?", a: "Yes. App protection policies secure company data inside apps such as Outlook and Teams, and can wipe just that data if needed, without touching personal photos or apps." },
      { q: "We already use another tool. Can you migrate us to Intune?", a: "Yes. We plan a phased move from tools such as Configuration Manager or third-party MDM, including co-management where it helps, so devices stay protected throughout." },
    ],
    oems: [
      {
        oem: "microsoft",
        products: [
          "Microsoft Intune",
          "Windows Autopilot",
          "Microsoft Defender for Endpoint",
          "Intune Remote Help",
          "Endpoint analytics",
          "Microsoft Entra ID",
        ],
      },
    ],
  },
  "microsoft-teams": {
    title: "Microsoft Teams",
    tagline: "One place for chat, meetings, calling and teamwork",
    description:
      "Microsoft Teams brings conversations, video meetings, files and business apps into a single workspace. The Crew Solutions plans, deploys and governs Teams so your people collaborate easily from any location, while keeping your information secure and your environment tidy.",
    benefits: [
      "Teams deployment and governance design: naming, ownership, lifecycle and guest access",
      "Cloud calling with Teams Phone, replacing or extending your traditional phone system",
      "Meeting room setups with Microsoft Teams Rooms devices and certified peripherals",
      "Integration with SharePoint, OneDrive, Planner and line-of-business apps",
      "Security, retention and compliance policies applied through Microsoft Purview",
      "Adoption support and training so teams actually use what you invest in",
    ],
    process: [
      { step: "01", title: "Assess", desc: "Review how your teams work and what tools are in use today." },
      { step: "02", title: "Design", desc: "Plan the Teams structure, governance, calling and room requirements." },
      { step: "03", title: "Deploy", desc: "Configure Teams, migrate content and set up calling and meeting rooms." },
      { step: "04", title: "Adopt", desc: "Train users and champions, and support the switch from old tools." },
      { step: "05", title: "Govern", desc: "Monitor usage and keep the environment secure and well organised." },
    ],
    faqs: [
      { q: "Do we need Microsoft 365 to use Teams?", a: "Teams is included in most Microsoft 365 business and enterprise plans. We review your current licences and recommend the plan that gives you the Teams features you need without paying for what you will not use." },
      { q: "Can Teams replace our office phone system?", a: "Yes. With Teams Phone your staff can make and receive calls from the Teams app or desk phones. We handle number setup, call routing, auto-attendants and migration from your existing system." },
      { q: "How do you prevent Teams from becoming messy?", a: "We set up governance from day one: naming conventions, who can create teams, ownership and expiry rules, and sensible guest access. This keeps your environment organised as it grows." },
      { q: "Is Teams secure enough for confidential conversations?", a: "Teams inherits the security and compliance capabilities of Microsoft 365, including encryption, multi-factor authentication, data-loss prevention and retention policies, which we configure to match your requirements." },
    ],
    oems: [
      {
        oem: "microsoft",
        products: ["Microsoft Teams", "Teams Phone", "Microsoft Teams Rooms", "Microsoft Purview", "Microsoft Entra ID"],
      },
    ],
  },
  sharepoint: {
    title: "SharePoint Online",
    tagline: "Intranets, document management and collaboration portals",
    description:
      "SharePoint Online gives your organisation a secure home for documents, knowledge and team sites. The Crew Solutions designs and builds intranets and document libraries that are easy to search, well governed and integrated with the tools your people already use every day.",
    benefits: [
      "Intranet and portal design that keeps staff informed and connected",
      "Document management with versioning, approvals, retention and metadata",
      "Migration of file servers and legacy portals into SharePoint and OneDrive",
      "Workflow automation with Power Automate and forms with Power Apps",
      "Permission and sharing models that protect sensitive information",
      "Search and navigation that helps people find what they need quickly",
    ],
    process: [
      { step: "01", title: "Discover", desc: "Understand content, users, and how information flows today." },
      { step: "02", title: "Design", desc: "Plan site structure, permissions, metadata and navigation." },
      { step: "03", title: "Build", desc: "Create sites, libraries and automated workflows." },
      { step: "04", title: "Migrate", desc: "Move content from file shares and old portals with permissions intact." },
      { step: "05", title: "Support", desc: "Train site owners and provide ongoing improvements." },
    ],
    faqs: [
      { q: "What is the difference between SharePoint and OneDrive?", a: "OneDrive is a personal storage space for an individual's files, while SharePoint holds shared team and organisational content. They work together, and we design how each should be used in your organisation." },
      { q: "Can we migrate our existing file server?", a: "Yes. We assess and clean your file shares, map them to a sensible SharePoint structure and migrate content with permissions and folder history preserved wherever possible." },
      { q: "Can SharePoint automate our approval processes?", a: "Yes. With Power Automate and Power Apps we can build approvals, request forms and notifications that replace email chains and paper processes." },
      { q: "How do you keep sensitive documents protected?", a: "We use least-privilege permissions, sensitivity labels, sharing restrictions and data-loss prevention policies from Microsoft Purview to make sure information is only available to the right people." },
    ],
    oems: [
      {
        oem: "microsoft",
        products: ["SharePoint Online", "OneDrive for Business", "Power Automate", "Power Apps", "Microsoft Purview", "Viva Connections"],
      },
    ],
  },
  "exchange-online": {
    title: "Exchange Online",
    tagline: "Reliable, secure enterprise email in the cloud",
    description:
      "Email is still the backbone of business communication. The Crew Solutions migrates and manages Exchange Online so your mail is secure, always available and protected against phishing and data loss, without the cost and upkeep of running your own mail servers.",
    benefits: [
      "Migration from on-premises Exchange, Google Workspace or other mail platforms with minimal disruption",
      "Anti-phishing, anti-malware and safe-links protection with Microsoft Defender for Office 365",
      "Shared mailboxes, distribution groups and resource booking configured to fit your teams",
      "Retention, archiving and legal hold policies for compliance",
      "Mobile and desktop access with modern authentication and multi-factor sign-in",
      "Email authentication (SPF, DKIM, DMARC) set up to protect your domain reputation",
    ],
    process: [
      { step: "01", title: "Assess", desc: "Inventory mailboxes, data volumes and dependencies." },
      { step: "02", title: "Plan", desc: "Choose migration method and schedule to suit your business." },
      { step: "03", title: "Secure", desc: "Configure protection, authentication and compliance policies." },
      { step: "04", title: "Migrate", desc: "Move mailboxes in batches, with user communications." },
      { step: "05", title: "Support", desc: "Provide post-migration support and ongoing administration." },
    ],
    faqs: [
      { q: "Will we lose email during the migration?", a: "No. Mail continues to flow throughout. We migrate mailboxes in batches, keep old and new systems coordinated, and validate each batch before moving on." },
      { q: "Can we keep our existing email addresses?", a: "Yes. Your domain and email addresses stay the same. We update the necessary DNS records at the right moment so that mail routing switches smoothly." },
      { q: "How does Exchange Online help against phishing?", a: "Exchange Online Protection and Microsoft Defender for Office 365 scan messages, links and attachments, and can block or quarantine threats before they reach your users." },
      { q: "Can we run a hybrid setup for a while?", a: "Yes. A hybrid deployment lets some mailboxes stay on-premises while others move to the cloud, with shared calendars and a common address book during the transition." },
    ],
    oems: [
      {
        oem: "microsoft",
        products: ["Exchange Online", "Exchange Online Protection", "Microsoft Defender for Office 365", "Microsoft Purview", "Microsoft Entra ID"],
      },
    ],
  },
  "dynamics-365": {
    title: "Dynamics 365",
    tagline: "Connected CRM and ERP to run your business on one platform",
    description:
      "Dynamics 365 unites sales, customer service, finance and operations in a single connected platform. The Crew Solutions implements and tailors Dynamics 365 so your teams share the same data, automate routine work and get the insight they need to make faster decisions.",
    benefits: [
      "Dynamics 365 Sales and Customer Service implementation for a full view of every customer",
      "Dynamics 365 Business Central for finance, inventory and operations in growing businesses",
      "Integration with Microsoft 365, Teams and Outlook so people work where they already are",
      "Dashboards and analytics with Power BI for real-time visibility",
      "Process automation with Power Automate and low-code apps with Power Apps",
      "Data migration, training and post-go-live support",
    ],
    process: [
      { step: "01", title: "Discover", desc: "Map your processes and define what success looks like." },
      { step: "02", title: "Design", desc: "Fit-gap analysis and solution design around your workflows." },
      { step: "03", title: "Configure", desc: "Build, configure and integrate with your existing systems." },
      { step: "04", title: "Migrate & Test", desc: "Move data, test thoroughly and prepare users." },
      { step: "05", title: "Go Live", desc: "Launch with hands-on support and continuous improvement." },
    ],
    faqs: [
      { q: "Which Dynamics 365 application is right for us?", a: "It depends on your priorities. Sales and Customer Service suit customer-facing teams, while Business Central suits small and mid-sized companies that want finance and operations in one system. We help you choose in a discovery workshop." },
      { q: "Can Dynamics 365 connect to our existing systems?", a: "Yes. Dynamics 365 integrates with Microsoft 365 and Power Platform out of the box, and we build connectors to other systems using APIs and integration tools." },
      { q: "How long does an implementation take?", a: "Timelines vary with scope. A focused CRM deployment can go live in weeks, while a full finance and operations implementation takes longer. We phase the work so you see value early." },
      { q: "Do you help our team learn the system?", a: "Yes. We provide role-based training, documentation and floor-walking support at go-live, so people feel confident using the system from day one." },
    ],
    oems: [
      {
        oem: "microsoft",
        products: [
          "Dynamics 365 Sales",
          "Dynamics 365 Customer Service",
          "Dynamics 365 Business Central",
          "Power BI",
          "Power Apps",
          "Power Automate",
        ],
      },
    ],
  },
  "cloud-migration": {
    title: "Cloud Migration",
    tagline: "Move to the cloud with a plan, not a leap of faith",
    description:
      "Moving applications and data to the cloud is easier when it is planned properly. The Crew Solutions assesses your workloads, chooses the right target, and migrates in controlled stages, so you gain the flexibility and resilience of the cloud without disrupting the business.",
    benefits: [
      "Discovery and dependency mapping of servers, applications and data",
      "Right-sizing and cost estimates before you commit",
      "Rehost, refactor or replace decisions made application by application",
      "Migration to Microsoft Azure or Oracle Cloud Infrastructure, or a hybrid of both",
      "Testing, cut-over planning and rollback options for every wave",
      "Post-migration optimisation to control cost and improve performance",
    ],
    process: [
      { step: "01", title: "Discover", desc: "Inventory workloads and map dependencies." },
      { step: "02", title: "Plan", desc: "Select target platforms, sequence waves and estimate cost." },
      { step: "03", title: "Prepare", desc: "Build the landing zone and secure connectivity." },
      { step: "04", title: "Migrate", desc: "Move workloads in waves with testing and rollback plans." },
      { step: "05", title: "Optimise", desc: "Tune performance and cost after go-live." },
    ],
    faqs: [
      { q: "Which cloud should we migrate to?", a: "It depends on your applications. Azure is a natural fit for Microsoft-centric estates, while Oracle Cloud Infrastructure is often preferred for Oracle databases and applications. We assess each workload and recommend the best fit." },
      { q: "Will there be downtime?", a: "We aim for minimal or no downtime by using replication and scheduled cut-overs. Where a brief outage is unavoidable, we agree the window with you in advance." },
      { q: "Can we keep some systems on-premises?", a: "Yes. Many organisations run a hybrid model. We design secure connectivity and management so on-premises and cloud systems work together." },
      { q: "How do you keep cloud costs under control?", a: "We estimate costs up front, right-size resources, and set up budgets, tagging and monitoring so you can see where money is going and reduce waste after the move." },
    ],
    oems: [
      {
        oem: "microsoft",
        products: ["Azure Migrate", "Azure Site Recovery", "Azure Database Migration Service", "Azure Arc"],
      },
      { oem: "oracle", products: ["Oracle Cloud Infrastructure", "Oracle Cloud Migrations", "Oracle Database@Azure"] },
    ],
  },
  "cloud-architecture": {
    title: "Cloud Architecture",
    tagline: "Well-architected cloud design that is secure, resilient and cost-aware",
    description:
      "A cloud environment is only as good as its design. The Crew Solutions' architects review and design cloud platforms against proven frameworks, so your workloads are secure, reliable, fast and efficient, and so they can grow without costly redesign.",
    benefits: [
      "Architecture reviews against the Azure Well-Architected Framework and Oracle's cloud best practices",
      "Landing zone design covering identity, networking, governance and security",
      "Resilience and disaster recovery design matched to your recovery objectives",
      "Cost optimisation through right-sizing, reservations and tagging",
      "Governance with policies, budgets and role-based access",
      "Clear documentation and reference architectures your team can reuse",
    ],
    process: [
      { step: "01", title: "Review", desc: "Assess the current environment and business requirements." },
      { step: "02", title: "Design", desc: "Create target architecture and landing zone." },
      { step: "03", title: "Validate", desc: "Test the design against reliability, security and cost pillars." },
      { step: "04", title: "Implement", desc: "Build with infrastructure as code for consistency." },
      { step: "05", title: "Review Regularly", desc: "Repeat reviews as workloads and needs evolve." },
    ],
    faqs: [
      { q: "What is a landing zone?", a: "A landing zone is a pre-configured, secure foundation in the cloud covering networking, identity, policy and governance, so new workloads can be deployed quickly and safely on top of it." },
      { q: "Can you review an environment we already built?", a: "Yes. A well-architected review examines your existing environment for gaps in security, reliability, performance and cost, and gives you a prioritised list of improvements." },
      { q: "How does architecture affect our cloud bill?", a: "Design choices such as sizing, storage tiers, redundancy and scaling rules have a big effect on cost. Good architecture matches capacity to demand so you only pay for what you need." },
      { q: "Do you design for more than one cloud?", a: "Yes. We design for Azure and Oracle Cloud Infrastructure, including hybrid and multi-cloud patterns where they make sense for your applications." },
    ],
    oems: [
      {
        oem: "microsoft",
        products: ["Azure Well-Architected Framework", "Azure Landing Zones", "Azure Policy", "Azure Cost Management", "Microsoft Defender for Cloud"],
      },
      { oem: "oracle", products: ["OCI Landing Zones", "OCI Well-Architected Framework", "OCI Identity and Access Management"] },
    ],
  },
  "infrastructure-deployment": {
    title: "Infrastructure Deployment",
    tagline: "Physical and virtual infrastructure deployed right the first time",
    description:
      "Whether you need new servers on site, a virtualised platform or a hybrid setup linked to the cloud, The Crew Solutions designs and deploys infrastructure that is reliable, secure and ready to grow, with clear documentation and a smooth handover.",
    benefits: [
      "Server, storage and virtualisation design sized to your workloads",
      "Windows Server and Hyper-V deployments, including clustering for high availability",
      "Hybrid infrastructure managed alongside Azure with Azure Arc and Azure Local",
      "Data centre and server room compute using Cisco UCS and Nexus networking",
      "Hardening, patching and monitoring built in from the start",
      "Full documentation, testing and handover to your team or our support desk",
    ],
    process: [
      { step: "01", title: "Requirements", desc: "Capture capacity, availability and growth needs." },
      { step: "02", title: "Design", desc: "Specify servers, storage, network and virtualisation." },
      { step: "03", title: "Build", desc: "Install, configure and harden the platform." },
      { step: "04", title: "Test", desc: "Validate performance, failover and security." },
      { step: "05", title: "Handover", desc: "Document, train and support ongoing operations." },
    ],
    faqs: [
      { q: "Should we buy servers or use the cloud?", a: "It depends on the workload. Some applications run best on site because of latency, licensing or regulation, while others suit the cloud. We help you compare costs and risks and design a mix that fits." },
      { q: "Can you deploy a hybrid environment?", a: "Yes. With Azure Arc and Azure Local we can manage on-premises servers alongside Azure resources, using the same tools, policies and security controls." },
      { q: "How do you make sure the platform is highly available?", a: "We design for redundancy at every layer: clustered hosts, resilient storage and networking, and tested failover, so a single component failure does not bring services down." },
      { q: "Do you support the infrastructure after deployment?", a: "Yes. We can provide monitoring, patching and remote support through our Remote IT Support service, or hand over fully to your own team with training." },
    ],
    oems: [
      { oem: "microsoft", products: ["Windows Server", "Hyper-V", "Azure Local", "Azure Arc"] },
      { oem: "cisco", products: ["Cisco UCS", "Cisco Nexus"] },
    ],
  },
  networking: {
    title: "Networking (LAN/WAN)",
    tagline: "Fast, secure and resilient networks for every site",
    description:
      "Your network carries everything your business does. The Crew Solutions designs and deploys wired, wireless and wide-area networks that are fast, secure and easy to manage, from a single office to many branches linked together.",
    benefits: [
      "LAN and Wi-Fi design and installation with Cisco Catalyst and Meraki",
      "SD-WAN to connect branches securely and cost-effectively",
      "Network segmentation and firewalls to contain threats and protect sensitive systems",
      "Secure access control with Cisco Identity Services Engine and Cisco Duo",
      "Private connectivity to the cloud with Azure ExpressRoute and Azure Virtual WAN",
      "Monitoring, documentation and ongoing support",
    ],
    process: [
      { step: "01", title: "Survey", desc: "Assess sites, coverage, traffic and existing equipment." },
      { step: "02", title: "Design", desc: "Plan topology, addressing, security and capacity." },
      { step: "03", title: "Deploy", desc: "Install and configure switches, wireless, firewalls and WAN." },
      { step: "04", title: "Test", desc: "Validate performance, failover and security." },
      { step: "05", title: "Manage", desc: "Monitor and support with clear reporting." },
    ],
    faqs: [
      { q: "What is SD-WAN and do we need it?", a: "SD-WAN links your offices over the internet and private links using software-defined rules to pick the best path for each application. It often lowers cost and improves performance for organisations with multiple sites." },
      { q: "Can you fix slow or patchy Wi-Fi?", a: "Yes. We start with a survey to find coverage gaps and interference, then redesign or extend the wireless network with properly placed access points and the right configuration." },
      { q: "How do you secure the network?", a: "We segment traffic into zones, apply firewall policies, control who and what can connect, and monitor for unusual activity, so a problem in one area cannot spread easily." },
      { q: "Do you manage the network after installation?", a: "We can. Cloud-managed platforms like Cisco Meraki make it straightforward for us to monitor, update and support your network remotely." },
    ],
    oems: [
      {
        oem: "cisco",
        products: [
          "Cisco Catalyst switching and wireless",
          "Cisco Meraki",
          "Cisco Catalyst SD-WAN",
          "Cisco Secure Firewall",
          "Cisco Identity Services Engine",
        ],
      },
      { oem: "microsoft", products: ["Azure Virtual WAN", "Azure ExpressRoute", "Azure Firewall"] },
    ],
  },
  "backup-recovery": {
    title: "Backup & Recovery",
    tagline: "Protect your data and recover quickly when something goes wrong",
    description:
      "Hardware failures, human error and ransomware can all take data away in minutes. The Crew Solutions designs automated backup and tested disaster recovery so you can restore what you need, quickly, and keep the business running.",
    benefits: [
      "Automated, encrypted backups for servers, databases and Microsoft 365 data",
      "Disaster recovery to the cloud with replication and orchestrated failover",
      "Recovery time and recovery point objectives set from your business needs",
      "Immutable and offsite copies that ransomware cannot easily reach",
      "Regular recovery tests with documented results",
      "Monitoring and reporting so you know backups are working",
    ],
    process: [
      { step: "01", title: "Assess", desc: "Identify critical data, systems and current protection." },
      { step: "02", title: "Design", desc: "Set objectives and choose backup and recovery approach." },
      { step: "03", title: "Implement", desc: "Deploy backup, replication and monitoring." },
      { step: "04", title: "Test", desc: "Run recovery tests and refine the plan." },
      { step: "05", title: "Maintain", desc: "Monitor, report and test on a schedule." },
    ],
    faqs: [
      { q: "Is Microsoft 365 data backed up automatically?", a: "Microsoft keeps the service running, but you remain responsible for protecting your data from accidental deletion, malicious changes and ransomware. A dedicated backup of email, files and Teams data closes that gap." },
      { q: "What is the difference between backup and disaster recovery?", a: "Backup keeps copies of your data so you can restore it. Disaster recovery goes further, providing a way to bring entire systems back online, often in another location, within an agreed time." },
      { q: "How do you protect backups from ransomware?", a: "We use immutable storage and separate credentials so attackers cannot delete or encrypt backup copies, and we keep offsite copies that are isolated from your main network." },
      { q: "How often should recovery be tested?", a: "At least once or twice a year for critical systems, and after major changes. Untested backups are a risk, so we schedule and document tests as part of the service." },
    ],
    oems: [
      {
        oem: "microsoft",
        products: ["Azure Backup", "Azure Site Recovery", "Microsoft 365 Backup", "Azure Recovery Services vault"],
      },
      { oem: "oracle", products: ["OCI Full Stack Disaster Recovery", "OCI Block Volume backups"] },
    ],
  },
  "identity-management": {
    title: "Identity Management",
    tagline: "Secure access for the right people, to the right things, every time",
    description:
      "Most breaches begin with stolen or misused credentials. The Crew Solutions builds identity and access management around Zero Trust principles, so people can sign in easily while attackers and over-privileged accounts are kept out.",
    benefits: [
      "Single sign-on across Microsoft 365, cloud apps and on-premises systems",
      "Multi-factor authentication with Microsoft Entra ID and Cisco Duo",
      "Conditional Access policies based on user, device, location and risk",
      "Privileged Identity Management for just-in-time administrator access",
      "Joiner-mover-leaver automation and periodic access reviews",
      "Hybrid identity synchronisation for organisations with on-premises Active Directory",
    ],
    process: [
      { step: "01", title: "Assess", desc: "Review directories, accounts, privileges and risks." },
      { step: "02", title: "Design", desc: "Plan the identity architecture and Conditional Access model." },
      { step: "03", title: "Implement", desc: "Deploy single sign-on, MFA and access policies." },
      { step: "04", title: "Protect", desc: "Add privileged access controls and risk detection." },
      { step: "05", title: "Govern", desc: "Automate lifecycle and review access regularly." },
    ],
    faqs: [
      { q: "What is Zero Trust?", a: "Zero Trust means never assuming a request is safe just because it comes from inside your network. Every sign-in is verified using identity, device health and context before access is granted." },
      { q: "Will multi-factor authentication annoy our staff?", a: "Done well, it is barely noticeable. We use modern methods such as authenticator app approvals and passwordless sign-in, and apply conditional rules so extra prompts appear only when risk is higher." },
      { q: "Can identity work with our existing Active Directory?", a: "Yes. We connect on-premises Active Directory to Microsoft Entra ID so users keep one identity across both worlds, and you can retire legacy components at your own pace." },
      { q: "How do you control administrator accounts?", a: "We limit standing admin rights and use just-in-time elevation with approval and logging, which greatly reduces the damage an attacker can do if an account is compromised." },
    ],
    oems: [
      {
        oem: "microsoft",
        products: [
          "Microsoft Entra ID P1 / P2",
          "Conditional Access",
          "Privileged Identity Management",
          "Microsoft Entra ID Governance",
        ],
      },
      { oem: "cisco", products: ["Cisco Duo"] },
    ],
  },
  "endpoint-management": {
    title: "Endpoint Management",
    tagline: "Every device managed, secured and up to date",
    description:
      "Laptops, desktops and phones are where your people work and where attackers strike. The Crew Solutions sets up centrally managed, secure and consistent devices, so new staff get productive on day one and lost or stolen devices are not a data risk.",
    benefits: [
      "Zero-touch device provisioning with Windows Autopilot and Microsoft Intune",
      "Consistent security baselines, encryption and patch management",
      "Mobile device and app management for company and personal devices",
      "Endpoint detection and response with Microsoft Defender for Endpoint",
      "Software deployment and inventory across the fleet",
      "Remote wipe and lock for lost or stolen devices",
    ],
    process: [
      { step: "01", title: "Inventory", desc: "Catalogue devices, operating systems and applications." },
      { step: "02", title: "Design", desc: "Define compliance policies, baselines and enrolment model." },
      { step: "03", title: "Enrol", desc: "Bring devices under management in phases." },
      { step: "04", title: "Secure", desc: "Apply protection, encryption and update rings." },
      { step: "05", title: "Support", desc: "Monitor compliance and handle the device lifecycle." },
    ],
    faqs: [
      { q: "What is Intune?", a: "Microsoft Intune is a cloud service for managing devices and apps. It lets you enforce security settings, deploy software and protect company data on laptops, phones and tablets from a single console." },
      { q: "Can we manage staff-owned phones without owning them?", a: "Yes. App protection policies secure company data inside apps like Outlook and Teams without controlling the whole device, which respects staff privacy while protecting your information." },
      { q: "Can you manage devices that are not on Windows?", a: "Yes. We manage macOS, iOS and Android devices, and for mixed environments we can also use ManageEngine Endpoint Central from Zoho to cover additional platforms and software deployment needs." },
      { q: "How do new employees get their devices?", a: "With Autopilot a new laptop can ship straight to the employee, who signs in and has it configured automatically with the right apps and security settings, without IT touching the device." },
    ],
    oems: [
      {
        oem: "microsoft",
        products: ["Microsoft Intune", "Windows Autopilot", "Microsoft Defender for Endpoint", "Microsoft Configuration Manager"],
      },
      { oem: "zoho", products: ["ManageEngine Endpoint Central"] },
    ],
  },
  "cloud-security": {
    title: "Cloud Security",
    tagline: "Continuous protection for everything you run in the cloud",
    description:
      "Moving to the cloud changes where the risks are. The Crew Solutions secures your cloud environments with continuous posture management, threat detection and strong access controls, so you can use the cloud confidently and stay in control of your data.",
    benefits: [
      "Cloud security posture management to find and fix misconfigurations",
      "Threat detection and response with Microsoft Sentinel and Microsoft Defender for Cloud",
      "Network protection with web application firewalls and Azure Firewall",
      "Secrets and key management with Azure Key Vault and OCI Vault",
      "Security controls for Oracle Cloud Infrastructure using Cloud Guard and Security Zones",
      "Compliance reporting mapped to recognised standards",
    ],
    process: [
      { step: "01", title: "Assess", desc: "Review cloud accounts, configuration and exposure." },
      { step: "02", title: "Harden", desc: "Fix misconfigurations and apply security baselines." },
      { step: "03", title: "Protect", desc: "Deploy detection, firewalling and key management." },
      { step: "04", title: "Monitor", desc: "Bring signals into a central view with alerting." },
      { step: "05", title: "Respond", desc: "Investigate incidents and improve continuously." },
    ],
    faqs: [
      { q: "Isn't the cloud provider responsible for security?", a: "Providers secure the underlying platform, but you remain responsible for how you configure and use it, including identities, data and network settings. Most cloud incidents come from misconfiguration on the customer side." },
      { q: "How do you find misconfigurations?", a: "We use cloud security posture tools such as Microsoft Defender for Cloud and OCI Cloud Guard to continuously scan for risky settings and provide guided remediation." },
      { q: "Can you monitor our cloud around the clock?", a: "Yes. Alerts from your cloud environment can feed into Microsoft Sentinel, and our team can monitor, triage and respond to them as part of a managed security service." },
      { q: "Do you cover more than one cloud?", a: "Yes. We secure Azure and Oracle Cloud Infrastructure environments, including hybrid connections back to your on-premises network." },
    ],
    oems: [
      {
        oem: "microsoft",
        products: ["Microsoft Defender for Cloud", "Microsoft Sentinel", "Azure Firewall", "Azure Key Vault", "Azure Web Application Firewall"],
      },
      { oem: "oracle", products: ["OCI Cloud Guard", "OCI Security Zones", "OCI Vault", "OCI Web Application Firewall"] },
    ],
  },
  consulting: {
    title: "IT Consulting",
    tagline: "Strategic technology advice that ties IT to business outcomes",
    description:
      "Good technology decisions start with a clear view of what the business needs. The Crew Solutions' consultants help you set direction, choose the right platforms and build a practical roadmap, so your IT investment supports growth rather than adding complexity.",
    benefits: [
      "Technology strategy and roadmaps aligned to your business goals",
      "Digital transformation planning using the Microsoft Cloud Adoption Framework",
      "Platform selection across Microsoft, Zoho and Oracle for CRM, ERP and productivity",
      "Cloud readiness and AI readiness assessments, including Microsoft 365 Copilot",
      "Vendor and licensing reviews to reduce waste",
      "Programme oversight and independent advice through delivery",
    ],
    process: [
      { step: "01", title: "Understand", desc: "Learn your business goals, constraints and current technology." },
      { step: "02", title: "Assess", desc: "Evaluate gaps, risks and opportunities." },
      { step: "03", title: "Recommend", desc: "Present options with cost, benefit and risk." },
      { step: "04", title: "Roadmap", desc: "Agree a phased plan with owners and milestones." },
      { step: "05", title: "Guide", desc: "Support and review delivery against the plan." },
    ],
    faqs: [
      { q: "When should we bring in an IT consultant?", a: "Typically before a major decision: moving to the cloud, replacing a core system, or planning several years of IT spend. An independent view early on can prevent expensive mistakes." },
      { q: "Are your recommendations vendor-neutral?", a: "We recommend what fits your needs. We work closely with Microsoft, Zoho, Oracle and Cisco, and we will tell you plainly when a different approach is the better choice." },
      { q: "What will we receive at the end?", a: "A clear written assessment, prioritised recommendations and a roadmap with timelines and indicative costs, presented to your leadership team." },
      { q: "Can you also deliver what you recommend?", a: "Yes, if you want us to. Many clients continue with us to implement the roadmap, though the advice stands on its own if you prefer to deliver it another way." },
    ],
    oems: [
      {
        oem: "microsoft",
        products: ["Microsoft Cloud Adoption Framework", "Azure Well-Architected Framework", "Microsoft 365 Copilot", "Power BI"],
      },
      { oem: "zoho", products: ["Zoho One"] },
      { oem: "oracle", products: ["Oracle NetSuite", "Oracle Cloud Infrastructure"] },
    ],
  },
  training: {
    title: "Training",
    tagline: "Help your people get the most from the technology you own",
    description:
      "Technology only pays off when people use it well. The Crew Solutions delivers practical, role-based training in Microsoft 365, Zoho, and security awareness, so staff work more confidently, adopt new tools faster and become your first line of defence.",
    benefits: [
      "Role-based Microsoft 365 training for Outlook, Teams, SharePoint, OneDrive and Excel",
      "Microsoft 365 Copilot training on using AI effectively and responsibly",
      "Zoho Workplace and Zoho CRM training for daily users and administrators",
      "Security awareness sessions and simulated phishing with Attack Simulation Training",
      "Onsite, virtual and recorded delivery, with materials to keep",
      "Champion programmes and follow-up sessions to embed the change",
    ],
    process: [
      { step: "01", title: "Needs Analysis", desc: "Identify who needs what skills and how they learn best." },
      { step: "02", title: "Plan", desc: "Build a schedule and content around real tasks." },
      { step: "03", title: "Deliver", desc: "Run live or virtual sessions with hands-on practice." },
      { step: "04", title: "Reinforce", desc: "Provide guides, recordings and drop-in clinics." },
      { step: "05", title: "Measure", desc: "Track adoption and adjust the programme." },
    ],
    faqs: [
      { q: "Can training be tailored to our own setup?", a: "Yes. We build sessions around your actual tenant, templates and processes, so people practise on what they will really use rather than a generic demo." },
      { q: "Do you offer training for administrators as well as end users?", a: "Yes. We train IT administrators on managing Microsoft 365, Intune and Zoho, as well as end users on getting the most out of the tools." },
      { q: "How does security awareness training work?", a: "We combine short interactive sessions with simulated phishing campaigns, using Attack Simulation Training in Microsoft Defender for Office 365, and report on improvements over time." },
      { q: "Can training be delivered remotely?", a: "Yes. We deliver live virtual sessions on Microsoft Teams, and provide recordings and guides so staff can revisit the material any time." },
    ],
    oems: [
      {
        oem: "microsoft",
        products: ["Microsoft 365 apps", "Microsoft 365 Copilot", "Microsoft Learn", "Attack Simulation Training"],
      },
      { oem: "zoho", products: ["Zoho Workplace", "Zoho CRM"] },
    ],
  },
  "zoho-workplace": {
    title: "Zoho Workplace",
    tagline: "An affordable all-in-one suite for email, documents and collaboration",
    description:
      "Zoho Workplace combines business email, file storage, document editing, chat and meetings in a single suite. The Crew Solutions sets it up, migrates your data and trains your team, giving growing businesses a cost-effective way to work together.",
    benefits: [
      "Business email on your own domain with Zoho Mail",
      "Secure file storage and sharing with Zoho WorkDrive",
      "Online document editing with Zoho Writer, Sheet and Show",
      "Team chat, channels and calls with Zoho Cliq, plus video meetings with Zoho Meeting",
      "Company intranet and social collaboration with Zoho Connect",
      "Migration from existing email and file systems, with admin setup and training",
    ],
    process: [
      { step: "01", title: "Plan", desc: "Understand users, domains and data to be moved." },
      { step: "02", title: "Configure", desc: "Set up the organisation, users, email and security policies." },
      { step: "03", title: "Migrate", desc: "Move email and files with minimal disruption." },
      { step: "04", title: "Train", desc: "Show staff how to use email, WorkDrive, Cliq and Meeting." },
      { step: "05", title: "Support", desc: "Provide ongoing administration and help." },
    ],
    faqs: [
      { q: "Who is Zoho Workplace best suited to?", a: "Small and growing businesses that want a complete set of collaboration tools at a predictable, lower cost. Larger organisations that rely heavily on Microsoft applications may prefer Microsoft 365, and we will advise honestly." },
      { q: "Can we use our own domain for email?", a: "Yes. Your staff keep addresses on your own domain, and we take care of the DNS setup so mail flows correctly to Zoho Mail." },
      { q: "Can we move our existing mail and files across?", a: "Yes. We migrate mailboxes, contacts, calendars and files from platforms such as Gmail, Outlook and on-premises servers." },
      { q: "Does Zoho Workplace work with other Zoho products?", a: "Yes. It integrates naturally with Zoho CRM, Zoho Books and other Zoho apps, so your email and documents connect to your business processes." },
    ],
    oems: [
      {
        oem: "zoho",
        products: [
          "Zoho Workplace",
          "Zoho Mail",
          "Zoho WorkDrive",
          "Zoho Cliq",
          "Zoho Meeting",
          "Zoho Connect",
        ],
      },
    ],
  },
  "zoho-crm": {
    title: "Zoho CRM Plus",
    tagline: "One platform for sales, marketing and customer support",
    description:
      "Zoho CRM Plus gives your sales, marketing and support teams a single view of every customer. The Crew Solutions implements and customises Zoho CRM Plus around how you actually sell and serve, so no lead is lost and every customer conversation is on record.",
    benefits: [
      "Custom sales pipelines, lead scoring and automation in Zoho CRM",
      "Email marketing and campaign tracking with Zoho Campaigns",
      "Website live chat and visitor tracking with Zoho SalesIQ",
      "Customer support ticketing with Zoho Desk",
      "Dashboards and reporting with Zoho Analytics",
      "Data import, integrations and training for every team",
    ],
    process: [
      { step: "01", title: "Map", desc: "Document your sales, marketing and support processes." },
      { step: "02", title: "Configure", desc: "Build pipelines, automation and integrations." },
      { step: "03", title: "Import", desc: "Clean and migrate existing customer and lead data." },
      { step: "04", title: "Train", desc: "Role-based training for each team." },
      { step: "05", title: "Optimise", desc: "Review results and refine after go-live." },
    ],
    faqs: [
      { q: "What is included in Zoho CRM Plus?", a: "Zoho CRM Plus bundles Zoho CRM with tools for email marketing, live chat, customer support, social media and analytics, so your customer-facing teams share one platform." },
      { q: "How long does an implementation take?", a: "A typical implementation for a small or mid-sized team takes a few weeks, depending on how many processes and integrations are involved. We phase the work so you start seeing benefits early." },
      { q: "Can we bring in data from spreadsheets?", a: "Yes. We clean, de-duplicate and import your existing contacts, accounts and deals so you start with accurate, usable data rather than a blank system." },
      { q: "Can Zoho CRM connect to our other systems?", a: "Yes. Zoho CRM integrates with Zoho Books, Zoho Workplace, Microsoft 365 and many other tools, and we build custom integrations where needed." },
    ],
    oems: [
      {
        oem: "zoho",
        products: [
          "Zoho CRM Plus",
          "Zoho CRM",
          "Zoho Campaigns",
          "Zoho SalesIQ",
          "Zoho Desk",
          "Zoho Analytics",
        ],
      },
    ],
  },
};
