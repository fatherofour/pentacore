"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  animate,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, Cloud, Play, Shield, Zap } from "@/components/ui/icons";

const rotatingWords = ["Intelligent", "Secure", "Scalable", "Cloud-First"];

const stats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

function RotatingWord() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % rotatingWords.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="relative inline-block align-bottom overflow-hidden pb-[0.08em]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={rotatingWords[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="gradient-text inline-block"
        >
          {rotatingWords[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Cursor spotlight
  const mx = useMotionValue(50);
  const my = useMotionValue(35);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mx}% ${my}%, rgba(64,163,224,0.16), transparent 60%)`;

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  return (
    <section ref={sectionRef} onMouseMove={handleMove} className="relative overflow-hidden">
      {/* Parallax background photo */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2400&q=80&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-photo object-cover object-[50%_75%] opacity-70 saturate-[1.3] hue-rotate-[8deg]"
        />
        {/* Brand blue tint so the photo sits inside the palette */}
        <div className="absolute inset-0 bg-[#0078D4]/25 mix-blend-color" />
        {/* Fade into the page: solid at the top (nav) and bottom (stats), open in the middle */}
        <div className="absolute inset-0 bg-gradient-to-b from-page via-page/30 to-page" />
        {/* Side vignette keeps the headline area clean */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,transparent_30%,rgba(6,11,26,0.75)_100%)]" />
      </motion.div>

      {/* Drifting aurora */}
      <div className="aurora aurora-1 w-[560px] h-[560px] -top-40 -left-32 bg-[radial-gradient(circle,rgba(0,120,212,0.55),transparent_70%)]" />
      <div className="aurora aurora-2 w-[500px] h-[500px] top-10 -right-32 bg-[radial-gradient(circle,rgba(124,58,237,0.5),transparent_70%)]" />
      <div className="aurora aurora-3 w-[460px] h-[460px] bottom-0 left-1/3 bg-[radial-gradient(circle,rgba(6,182,212,0.4),transparent_70%)]" />

      {/* Grid texture + scan line */}
      <div className="absolute inset-0 grid-lines pointer-events-none [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black,transparent)]" />

      {/* Cursor spotlight */}
      <motion.div style={{ background: spotlight }} className="absolute inset-0 pointer-events-none hidden md:block" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-14 lg:pt-44 lg:pb-16"
      >
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display text-ink text-[3.25rem] sm:text-7xl lg:text-7xl xl:text-[5.5rem] mb-8"
          >
            Empowering Business
            <br />
            Through <RotatingWord /> IT
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg sm:text-xl text-body leading-relaxed mb-10 max-w-2xl mx-auto text-balance"
          >
            Helping organisations modernise their workplace, migrate to the cloud, secure
            digital assets, and accelerate business growth through innovative technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className="btn-filled group px-7 py-4 text-base font-semibold">
              Book Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="btn-ghost group px-7 py-4 text-base font-semibold">
              <Play className="w-4 h-4 text-accent" />
              Explore Services
            </Link>
          </motion.div>

          {/* Floating live-status cards (wide screens only, flanking the copy) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="hidden xl:block absolute top-[14.375rem] -left-16 w-56"
          >
            <div className="glass-card animate-bob p-4 text-left [--bob-rot:-3deg]">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#0078D4]/20 flex items-center justify-center">
                  <Cloud className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm font-medium text-[#22c55e]">Live</span>
              </div>
              <p className="text-xs text-mute">Azure migration</p>
              <p className="text-ink font-semibold mb-2">87% complete</p>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "87%" }}
                  transition={{ duration: 1.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-[#0078D4] to-[#06B6D4]"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="hidden xl:block absolute top-[12.8rem] -right-16 w-56"
          >
            <div className="glass-card animate-bob p-4 text-left [--bob-rot:3deg] [animation-delay:-3s]">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-[#a78bfa]" />
                </div>
                <span className="label-mono text-[#a78bfa]">Secured</span>
              </div>
              <p className="text-xs text-mute">Threats blocked today</p>
              <p className="text-ink font-semibold">12,480</p>
              <svg viewBox="0 0 120 28" className="w-full h-7 mt-2" fill="none" aria-hidden>
                <motion.path
                  d="M0 22 L15 18 L30 20 L45 10 L60 14 L75 6 L90 12 L105 4 L120 8"
                  stroke="#a78bfa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, delay: 1.5, ease: "easeOut" }}
                />
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="hidden xl:block absolute top-[23.25rem] -right-2"
          >
            <div className="glass-chip animate-bob !rounded-2xl !px-4 !py-3 [--bob-rot:-2deg] [animation-delay:-5s]">
              <Zap className="w-4 h-4 text-[#F5A623]" />
              <span className="text-sm text-ink font-medium">99.99% uptime</span>
            </div>
          </motion.div>
        </div>

        {/* Stats row — glass tiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {stats.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
              className="text-center p-5 glass-card glass-card-hover"
            >
              <p className="heading-secondary text-3xl gradient-text">
                <CountUp to={value} suffix={suffix} />
              </p>
              <p className="text-mute text-sm mt-1">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
