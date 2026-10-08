"use client";

import { motion } from "framer-motion";
import { Shield, Award, Server, Lightbulb, HeartHandshake } from "@/components/ui/icons";

const values = [
  { icon: Shield, title: "Integrity", desc: "We do what we say. Every recommendation is honest, every engagement transparent.", color: "from-blue-500 to-blue-700" },
  { icon: Award, title: "Excellence", desc: "Good enough is not enough. We hold every deliverable to enterprise-grade standards.", color: "from-emerald-500 to-emerald-700" },
  { icon: Server, title: "Reliability", desc: "We are the core our clients can build on: consistent, dependable, always available.", color: "from-cyan-500 to-cyan-700" },
  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of the technology curve so our clients don't have to.", color: "from-amber-500 to-amber-700" },
  { icon: HeartHandshake, title: "Partnership", desc: "We measure success by our clients' outcomes, not just our contracts.", color: "from-violet-500 to-violet-700" },
];

export function ValuesSection() {
  return (
    <section className="py-14 md:py-16 relative overflow-hidden">
      <div className="glow-orb glow-purple w-[460px] h-[460px] -top-40 right-10 opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="heading-secondary text-3xl sm:text-4xl text-ink mb-4">
            Our core values
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card glass-card-hover p-6 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} border border-white/20 shadow-lg shadow-black/25 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-ink text-lg mb-2">{value.title}</h3>
              <p className="text-body text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
