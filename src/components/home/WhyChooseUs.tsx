"use client";

import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Building2,
  Shield,
  TrendingDown,
  Cloud,
  Zap,
  HeartHandshake,
  Star,
} from "lucide-react";

const features = [
  { icon: Award, title: "Certified Experts", desc: "Our team holds 50+ Microsoft, Cisco, and AWS certifications, ensuring best-in-class delivery." },
  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock monitoring and support with guaranteed response times and SLA commitments." },
  { icon: Building2, title: "Enterprise Solutions", desc: "Scalable architectures designed for enterprises, from SMEs to large multinational organisations." },
  { icon: Shield, title: "Security First", desc: "Every solution is built with security at its core—Zero Trust, GDPR compliant, and audit-ready." },
  { icon: TrendingDown, title: "Cost Optimisation", desc: "We analyse your infrastructure and identify savings opportunities without compromising performance." },
  { icon: Cloud, title: "Cloud Specialists", desc: "Expert architects with deep expertise in Azure, AWS, and hybrid cloud environments." },
  { icon: Zap, title: "Fast Deployment", desc: "Agile project delivery methodology ensures rapid implementation without disrupting your business." },
  { icon: HeartHandshake, title: "Customer Success", desc: "Dedicated account managers and CSM teams ensure you get maximum value from your investments." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="glow-orb glow-blue w-[480px] h-[480px] top-10 -left-64 opacity-60" />
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-0 lg:sticky lg:top-32"
          >
            <span className="tag-pill mb-4">
              Why Pentacore
            </span>
            <h2 className="heading-secondary text-3xl sm:text-4xl lg:text-5xl text-white mb-6 text-balance">
              The trusted partner for{" "}
              <span className="gradient-text">enterprise technology</span>
            </h2>
            <p className="text-[#A6B3C9] text-lg leading-relaxed mb-8 text-balance">
              We don&apos;t just implement technology—we transform how your business
              operates, competes, and grows in the digital era.
            </p>

            {/* Stars — glass badge */}
            <div className="flex items-center gap-2 p-4 glass-card w-fit">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#F5A623] fill-[#F5A623]" />
                ))}
              </div>
              <p className="text-sm text-white font-medium">
                4.9/5 from 200+ verified client reviews
              </p>
            </div>
          </motion.div>

          {/* Right: Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="glass-card glass-card-hover p-5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0078D4] to-[#06B6D4] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-[#0078D4]/25">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-white text-sm mb-1.5">{feature.title}</h3>
                <p className="text-[#A6B3C9] text-xs leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
