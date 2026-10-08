"use client";

import { useRef } from "react";
import { ScrollText } from "@/components/ui/ScrollText";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Target, Eye, Heart } from "@/components/ui/icons";

const pillars = [
  { icon: Target, title: "Our Mission", desc: "To empower businesses across Nigeria and Africa with dependable, end-to-end IT and cloud solutions, built on five core pillars of excellence, that simplify technology, strengthen security, and accelerate growth." },
  { icon: Eye, title: "Our Vision", desc: "To be Africa's most trusted full-circle technology partner: the firm organizations turn to when they need not just a vendor, but a foundation." },
  { icon: Heart, title: "Our Values", desc: "Integrity, Excellence, Reliability, Innovation and Partnership. We do what we say, hold every deliverable to enterprise-grade standards, and measure success by our clients' outcomes." },
];

export function AboutSnippet() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="py-14 md:py-16 relative overflow-hidden">
      <div className="glow-orb glow-purple w-[460px] h-[460px] top-1/4 -right-60 opacity-70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ScrollText className="heading-secondary text-3xl sm:text-4xl lg:text-5xl text-ink mb-6 text-balance" text={"A decade of delivering"} accent={"technology excellence"} />
            <p className="text-body text-lg leading-relaxed mb-6">
              Founded with a clear vision to make enterprise-grade technology accessible to every
              business. The Crew Solutions has grown into a trusted advisor for organisations across
              healthcare, education, financial services, government, and beyond.
            </p>
            <p className="text-body text-lg leading-relaxed mb-8">
              Our team of certified engineers, architects, and consultants bring deep expertise
              in Microsoft, Azure, Cisco, and a broad ecosystem of technology platforms,
              delivering solutions that are secure, scalable, and always aligned with your goals.
            </p>

            {/* Photo — glass framed with parallax */}
            <div
              ref={imgRef}
              className="relative rounded-[2rem] overflow-hidden h-64 mb-8 border border-white/15 shadow-2xl shadow-black/40"
            >
              <motion.div style={{ y: imageY }} className="absolute inset-0 scale-125">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop"
                  alt="The Crew Solutions engineers collaborating on a client project"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-page/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 glass-chip">
                Certified engineers · Real outcomes
              </div>
            </div>

            <Link href="/about" className="btn-filled group">
              Learn Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 lg:mt-0 space-y-5"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card glass-card-hover flex gap-5 p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0078D4] to-[#06B6D4] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#0078D4]/30">
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-ink text-base mb-1.5">{pillar.title}</h3>
                  <p className="text-body text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
