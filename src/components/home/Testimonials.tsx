"use client";

import { motion } from "framer-motion";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "Pentacore Systems transformed our entire IT infrastructure. The Microsoft 365 migration was flawless, and their team was on hand every step of the way. Our staff productivity has increased by over 40% since implementation.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&q=80",
    name: "Sarah Mitchell",
    role: "CTO, HealthFirst Group · Healthcare",
  },
  {
    text: "The Azure cloud migration Pentacore delivered was exceptional. They came in under budget and ahead of schedule, with zero downtime. Their security-first approach meant we passed our ISO 27001 audit with flying colours.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces&q=80",
    name: "James Okonkwo",
    role: "Head of IT, Meridian Financial · Financial Services",
  },
  {
    text: "As a school district with limited internal IT capacity, Pentacore's managed services have been a game-changer. Their 24/7 support ensures our 3,000 students have reliable access to digital learning tools at all times.",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=faces&q=80",
    name: "Dr. Amelia Chen",
    role: "Director of Technology, Westgate Academy Trust · Education",
  },
  {
    text: "Pentacore's Zoho CRM Plus implementation revolutionised how we manage customer relationships. Lead conversion improved by 60% in the first quarter alone. The onboarding and training support was outstanding.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces&q=80",
    name: "Robert Adeyemi",
    role: "Sales Director, Lagos Trade Solutions · Retail",
  },
  {
    text: "Their cybersecurity team identified critical vulnerabilities in our network that we hadn't noticed. The remediation was swift and comprehensive. I wouldn't trust any other partner with our security posture.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces&q=80",
    name: "Emma Osei",
    role: "CISO, NexGen Manufacturing · Manufacturing",
  },
  {
    text: "Pentacore rebuilt our backup and disaster recovery strategy from the ground up. Every requirement around data sovereignty and compliance was met without slowing our teams down. Genuinely impressive delivery.",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&crop=faces&q=80",
    name: "David Chen",
    role: "IT Director, Ashford City Council · Government",
  },
  {
    text: "We needed a document and case management system that fit how our lawyers actually work, not a generic template. Pentacore's custom web application nailed it, and adoption across the firm was immediate.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces&q=80",
    name: "Priya Nair",
    role: "Managing Partner, Blackwood Legal Partners · Professional Services",
  },
  {
    text: "As a small nonprofit, we assumed enterprise-grade cloud infrastructure was out of reach. Pentacore proved otherwise, migrating us to Azure at a price point that actually worked for our budget.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=faces&q=80",
    name: "Grace Fatunde",
    role: "Executive Director, Bright Future Foundation · SMEs & NGOs",
  },
  {
    text: "Outsourcing our entire IT helpdesk to Pentacore let our small team focus on growth instead of firefighting tickets. Response times are faster than when we ran it in-house.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces&q=80",
    name: "Michael Torres",
    role: "Operations Director, Coastal Logistics Group · SMEs & NGOs",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="glow-orb glow-cyan w-[460px] h-[460px] top-0 -right-52 opacity-60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="tag-pill mb-4">
            Client Success Stories
          </span>
          <h2 className="heading-secondary text-3xl sm:text-4xl lg:text-5xl text-white text-balance">
            Trusted by leaders across{" "}
            <span className="gradient-text">every industry</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[620px] overflow-hidden"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
        </motion.div>
      </div>
    </section>
  );
}
