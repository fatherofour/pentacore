"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "@/components/ui/icons";
import { ScrollText } from "@/components/ui/ScrollText";

const statements = [
  {
    icon: Target,
    label: "Our Mission",
    text: "To empower businesses across Nigeria and Africa with dependable, end-to-end IT and cloud solutions, built on five core pillars of excellence, that simplify technology, strengthen security, and accelerate growth.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    text: "To be Africa's most trusted full-circle technology partner: the firm organizations turn to when they need not just a vendor, but a foundation.",
  },
];

export function MissionVision() {
  return (
    <section className="py-14 md:py-16 relative overflow-hidden">
      <div className="glow-orb glow-blue w-[460px] h-[460px] top-10 -right-56 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <ScrollText
            className="heading-secondary text-3xl sm:text-4xl text-ink text-balance"
            text="Why we exist and"
            accent="where we're headed"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {statements.map(({ icon: Icon, label, text }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card glass-card-hover p-8 sm:p-10 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0078D4] to-[#06B6D4] border border-white/20 shadow-lg shadow-[#0078D4]/25 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-ink text-xl font-semibold">{label}</h3>
              </div>
              <p className="text-ink text-xl sm:text-2xl leading-snug tracking-tight">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
