"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={sectionRef} className="relative pt-40 pb-20 overflow-hidden">
      {/* Parallax background photo */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B1A]/70 via-[#060B1A]/85 to-[#060B1A]" />
      </motion.div>

      <div className="glow-orb glow-blue w-[500px] h-[500px] -top-40 left-1/4" />
      <div className="glow-orb glow-cyan w-[380px] h-[380px] top-20 -right-32" />
      <div className="absolute inset-0 grid-lines pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="tag-pill mb-6">
            Our Services
          </span>
          <h1 className="heading-display text-white text-6xl sm:text-7xl lg:text-8xl mb-6 text-balance">
            End-to-End IT Solutions{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">for Modern Business</span>
          </h1>
          <p className="text-[#A6B3C9] text-xl max-w-2xl mx-auto leading-relaxed text-balance">
            From cloud infrastructure to cybersecurity, from Microsoft 365 to managed
            services—we deliver technology that works for your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
