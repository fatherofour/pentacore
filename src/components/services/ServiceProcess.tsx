"use client";

import { motion } from "framer-motion";
import { Search, FileText, Cog, Rocket, HeartHandshake } from "@/components/ui/icons";

const steps = [
  { icon: Search, step: "01", title: "Discovery & Assessment", desc: "We begin with a deep-dive assessment of your current IT environment, business goals, and technology gaps." },
  { icon: FileText, step: "02", title: "Strategy & Roadmap", desc: "We develop a tailored technology roadmap with clear milestones, timelines, and business outcomes." },
  { icon: Cog, step: "03", title: "Design & Architecture", desc: "Our architects design a solution that is secure, scalable, and perfectly aligned with your requirements." },
  { icon: Rocket, step: "04", title: "Implementation", desc: "Agile delivery with full project management, testing, and user adoption support throughout." },
  { icon: HeartHandshake, step: "05", title: "Support & Optimisation", desc: "Ongoing monitoring, optimisation, and support to ensure you continue to get maximum value." },
];

export function ServiceProcess() {
  return (
    <section className="py-14 md:py-16 relative overflow-hidden">
      <div className="glow-orb glow-cyan w-[440px] h-[440px] -top-52 left-1/2 -translate-x-1/2 opacity-60" />
      <div className="absolute inset-0 grid-dots pointer-events-none opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="heading-secondary text-3xl sm:text-4xl text-ink mb-4 text-balance">
            Our proven delivery process
          </h2>
          <p className="text-body max-w-xl mx-auto">
            A structured, client-centric methodology that consistently delivers results on time and within budget.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line — gradient */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-10 left-8 right-8 h-px origin-left bg-gradient-to-r from-[#0078D4]/0 via-accent to-[#7C3AED]/0 shadow-[0_0_12px_rgba(64,163,224,0.6)] hidden lg:block"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 32, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 140, damping: 16, delay: i * 0.14 }}
                className="relative text-center"
              >
                {/* Step icon — glass tile */}
                <div className="relative inline-flex flex-col items-center mb-5">
                  <div className="w-20 h-20 rounded-2xl glass-card glass-card-hover flex items-center justify-center relative z-10">
                    <step.icon className="w-8 h-8 text-accent-soft" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-[#0078D4] to-[#06B6D4] text-white text-sm font-bold flex items-center justify-center z-20 label-mono text-sm shadow-lg shadow-[#0078D4]/40">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-bold text-ink text-sm mb-2">{step.title}</h3>
                <p className="text-mute text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
