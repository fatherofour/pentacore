"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const milestones = [
  { year: "2014", title: "Founded", desc: "Pentacore Systems founded in London by technology veterans with a mission to democratise enterprise IT." },
  { year: "2016", title: "Microsoft Partnership", desc: "Achieved Microsoft Gold Partner status, enabling us to deliver certified Microsoft solutions at scale." },
  { year: "2018", title: "Cloud Division", desc: "Launched our Cloud Migration practice, helping 15 organisations move to Azure in year one." },
  { year: "2020", title: "Security Practice", desc: "Established our dedicated Cybersecurity division, growing rapidly amid increased cyber threats." },
  { year: "2022", title: "International Growth", desc: "Expanded services to cover clients across 15+ countries with a distributed team of 80+ specialists." },
  { year: "2024", title: "AI & Automation", desc: "Launched AI-powered managed services and digital transformation advisory practice." },
];

export function CompanyStory() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="glow-orb glow-cyan w-[440px] h-[440px] top-1/3 -left-56 opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-0"
          >
            <span className="tag-pill mb-4">
              Our Story
            </span>
            <h2 className="heading-secondary text-3xl sm:text-4xl text-white mb-6 text-balance">
              Built on expertise,{" "}
              <span className="gradient-text">driven by outcomes</span>
            </h2>
            <p className="text-[#A6B3C9] text-lg leading-relaxed mb-6">
              Pentacore Systems was born from a simple belief: that every business, regardless
              of size, deserves access to the same quality of technology solutions used by
              the world&apos;s largest enterprises.
            </p>
            <p className="text-[#A6B3C9] text-lg leading-relaxed mb-8">
              Over the past decade, we&apos;ve built a team of passionate technologists,
              strategists, and engineers who live and breathe digital transformation. Our
              clients trust us not just to implement technology, but to be their long-term
              partner in navigating the rapidly evolving technology landscape.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Microsoft Gold Partner & Azure Expert MSP",
                "ISO 27001 and Cyber Essentials certified",
                "GDPR and data compliance specialists",
                "Independent, vendor-agnostic advisory approach",
                "Dedicated customer success team for every client",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#40A3E0] flex-shrink-0" />
                  <span className="text-[#A6B3C9] text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Photo — glass framed */}
            <div className="relative rounded-[2rem] overflow-hidden h-56 border border-white/15 shadow-2xl shadow-black/40">
              <Image
                src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=1000&q=80&auto=format&fit=crop"
                alt="Pentacore Systems office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B1A]/50 to-transparent" />
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              {/* Timeline line — gradient */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#0078D4]/60 via-[#06B6D4]/40 to-transparent" />

              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex gap-6 relative pl-20"
                  >
                    {/* Year chip — glass */}
                    <div className="absolute left-0 top-1 w-16 h-16 rounded-2xl glass-strong flex items-center justify-center shadow-lg shadow-black/30">
                      <span className="gradient-text font-bold text-xs">{m.year}</span>
                    </div>

                    <div className="glass-card p-5 flex-1">
                      <h3 className="font-bold text-white text-base mb-1">{m.title}</h3>
                      <p className="text-[#A6B3C9] text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
