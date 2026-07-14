"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function AboutHero() {
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
          src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=1920&q=80&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B1A]/70 via-[#060B1A]/85 to-[#060B1A]" />
      </motion.div>

      <div className="glow-orb glow-blue w-[480px] h-[480px] -top-32 -left-32" />
      <div className="glow-orb glow-purple w-[400px] h-[400px] top-10 -right-32" />
      <div className="absolute inset-0 grid-lines pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="tag-pill mb-6">
            About Pentacore Systems
          </span>
          <h1 className="heading-display text-white text-6xl sm:text-7xl lg:text-8xl mb-6 text-balance">
            The Story Behind{" "}
            <span className="gradient-text">Pentacore Systems</span>
          </h1>
          <p className="text-[#A6B3C9] text-xl max-w-2xl mx-auto leading-relaxed text-balance">
            A decade of innovation, expertise, and unwavering commitment to helping
            businesses thrive in the digital age.
          </p>
        </motion.div>

        {/* Breadcrumb bar — glass chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-10 text-sm"
        >
          {["Founded 2014", "London, UK", "50+ Clients", "Microsoft Partner"].map((label) => (
            <span key={label} className="glass-chip">
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
