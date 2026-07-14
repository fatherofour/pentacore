"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Shield, type LucideIcon } from "lucide-react";

const badges: { text: string; logo?: string; icon?: LucideIcon }[] = [
  { logo: "/logos/microsoft.svg", text: "Microsoft Gold Partner" },
  { icon: Shield, text: "ISO 27001 Certified" },
  { logo: "/logos/azure.svg", text: "Azure Expert MSP" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Parallax background photo */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1920&q=80&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B1A]/70 via-[#060B1A]/85 to-[#060B1A]" />
      </motion.div>

      {/* Ambient glow orbs */}
      <div className="glow-orb glow-blue w-[520px] h-[520px] -top-40 -left-40 animate-pulse-slow" />
      <div className="glow-orb glow-purple w-[420px] h-[420px] top-20 -right-32 animate-pulse-slow" />
      <div className="glow-orb glow-cyan w-[380px] h-[380px] bottom-0 left-1/3" />

      {/* Grid texture */}
      <div className="absolute inset-0 grid-lines pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 lg:pt-48 lg:pb-28"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display text-white text-[3.25rem] sm:text-7xl lg:text-8xl xl:text-[8.125rem] mb-8"
          >
            Empowering Business
            <br />
            Through <span className="gradient-text">Intelligent</span> IT
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg sm:text-xl text-[#A6B3C9] leading-relaxed mb-10 max-w-2xl mx-auto text-balance"
          >
            Helping organisations modernise their workplace, migrate to the cloud, secure
            digital assets, and accelerate business growth through innovative technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <Link href="/contact" className="btn-filled group px-7 py-4 text-base font-semibold">
              Book Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="btn-ghost group px-7 py-4 text-base font-semibold">
              <Play className="w-4 h-4 text-[#40A3E0]" />
              Explore Services
            </Link>
          </motion.div>

          {/* Partner badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.text} className="glass-chip normal-case">
                  {badge.logo ? (
                    <Image src={badge.logo} alt="" width={14} height={14} className="w-3.5 h-3.5 object-contain" />
                  ) : Icon ? (
                    <Icon className="w-3.5 h-3.5 text-[#40A3E0]" />
                  ) : null}
                  {badge.text}
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats row — glass tiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { value: "100+", label: "Projects Delivered" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "50+", label: "Enterprise Clients" },
            { value: "10+", label: "Years Experience" },
          ].map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
              className="text-center p-5 glass-card glass-card-hover"
            >
              <p className="heading-secondary text-3xl gradient-text">{value}</p>
              <p className="text-[#7C8AA5] text-sm mt-1">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
