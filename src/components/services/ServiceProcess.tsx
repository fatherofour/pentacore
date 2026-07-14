"use client";

import { motion } from "framer-motion";
import { Search, FileText, Cog, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Discovery & Assessment", desc: "We begin with a deep-dive assessment of your current IT environment, business goals, and technology gaps." },
  { icon: FileText, step: "02", title: "Strategy & Roadmap", desc: "We develop a tailored technology roadmap with clear milestones, timelines, and business outcomes." },
  { icon: Cog, step: "03", title: "Design & Architecture", desc: "Our architects design a solution that is secure, scalable, and perfectly aligned with your requirements." },
  { icon: Rocket, step: "04", title: "Implementation", desc: "Agile delivery with full project management, testing, and user adoption support throughout." },
  { icon: HeartHandshake, step: "05", title: "Support & Optimisation", desc: "Ongoing monitoring, optimisation, and support to ensure you continue to get maximum value." },
];

export function ServiceProcess() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="glow-orb glow-cyan w-[440px] h-[440px] -top-52 left-1/2 -translate-x-1/2 opacity-60" />
      <div className="absolute inset-0 grid-dots pointer-events-none opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4">
            How We Work
          </span>
          <h2 className="heading-secondary text-3xl sm:text-4xl text-white mb-4 text-balance">
            Our proven delivery process
          </h2>
          <p className="text-[#A6B3C9] max-w-xl mx-auto">
            A structured, client-centric methodology that consistently delivers results on time and within budget.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line — gradient */}
          <div className="absolute top-10 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#0078D4]/50 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center"
              >
                {/* Step icon — glass tile */}
                <div className="relative inline-flex flex-col items-center mb-5">
                  <div className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center relative z-10">
                    <step.icon className="w-8 h-8 text-[#7CC3F2]" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-[#0078D4] to-[#06B6D4] text-white text-[10px] font-bold flex items-center justify-center z-20 label-mono !text-[10px] shadow-lg shadow-[#0078D4]/40">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-bold text-white text-sm mb-2">{step.title}</h3>
                <p className="text-[#7C8AA5] text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
