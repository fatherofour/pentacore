"use client";

import { useRef } from "react";
import { HeroFX } from "@/components/ui/HeroFX";
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
    <section ref={sectionRef} className="relative pt-40 pb-12 overflow-hidden">
      {/* Parallax background photo */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=1920&q=80&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-photo object-cover opacity-40 saturate-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-page/70 via-page/85 to-page" />
      </motion.div>

      <HeroFX />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="heading-display text-ink text-6xl sm:text-7xl lg:text-7xl mb-6 text-balance">
            The Story Behind{" "}
            <span className="gradient-text">The Crew Solutions</span>
          </h1>
          <p className="text-body text-xl max-w-2xl mx-auto leading-relaxed text-balance">
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
