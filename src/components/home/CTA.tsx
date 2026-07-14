"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Phone, MessageCircle } from "lucide-react";

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Parallax background photo */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B1A] via-[#060B1A]/80 to-[#060B1A]" />
      </motion.div>

      {/* Glow orbs */}
      <div className="glow-orb glow-blue w-[560px] h-[560px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80" />
      <div className="absolute inset-0 grid-dots pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-pill mb-6">
              Ready to Transform?
            </span>

            <h2 className="heading-display text-white text-5xl sm:text-6xl lg:text-7xl mb-6 text-balance">
              Let&apos;s Transform Your
              <br />
              <span className="gradient-text">Business Together</span>
            </h2>

            <p className="text-[#A6B3C9] text-lg leading-relaxed mb-10 text-balance">
              Whether you&apos;re modernising your workplace, migrating to the cloud,
              or strengthening your security posture—we&apos;re here to guide you every step of the way.
            </p>

            {/* Action cards — glass */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                {
                  icon: Calendar,
                  title: "Book a Meeting",
                  desc: "Schedule a 30-min discovery call",
                  href: "/contact",
                  primary: true,
                },
                {
                  icon: Phone,
                  title: "Call Us Now",
                  desc: "+234 8137996917",
                  href: "tel:+2348137996917",
                  primary: false,
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp Chat",
                  desc: "Chat with us directly",
                  href: "#",
                  primary: false,
                },
              ].map(({ icon: Icon, title, desc, href, primary }) => (
                <Link
                  key={title}
                  href={href}
                  className={`group flex flex-col items-center p-6 rounded-2xl transition-all duration-300 border backdrop-blur-xl ${
                    primary
                      ? "bg-[#0078D4]/25 border-[#0078D4]/50 hover:bg-[#0078D4]/35 shadow-lg shadow-[#0078D4]/20"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/25"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 border border-white/15 ${
                    primary ? "bg-[#0078D4]/40" : "bg-white/8"
                  }`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-bold text-base mb-1">{title}</p>
                  <p className="text-[#A6B3C9] text-xs text-center">{desc}</p>
                </Link>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-filled group px-8 py-4 font-bold text-base">
                Book Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="btn-ghost px-8 py-4 font-semibold text-base">
                Explore Services
              </Link>
            </div>

            <p className="text-[#7C8AA5] text-sm mt-6">
              No commitment required · Free initial assessment · Response within 2 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
