"use client";

import { motion } from "framer-motion";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Cloud, Cpu, Lock, Shield, Zap, Database } from "@/components/ui/icons";

const rings = [
  { size: 250, duration: 28, reverse: false, chips: [Cloud, Shield] },
  { size: 370, duration: 44, reverse: true, chips: [Lock, Zap, Database] },
  { size: 480, duration: 62, reverse: false, chips: [Cpu] },
];

/** Decorative orbiting-icons visual for service page heroes. Hidden below lg. */
export function ServiceOrbit({ title, slug }: { title: string; slug: string }) {
  return (
    <div
      aria-hidden
      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px] pointer-events-none"
    >
      {/* Core glow */}
      <div className="absolute inset-0 m-auto w-40 h-40 rounded-full bg-[radial-gradient(circle,rgba(0,120,212,0.55),transparent_70%)] blur-xl" />

      {rings.map((ring, ri) => (
        <motion.div
          key={ring.size}
          className="absolute rounded-full border border-white/10"
          style={{
            width: ring.size,
            height: ring.size,
            top: "50%",
            left: "50%",
            marginTop: -ring.size / 2,
            marginLeft: -ring.size / 2,
          }}
          animate={{ rotate: ring.reverse ? -360 : 360 }}
          transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
        >
          {ring.chips.map((Icon, ci) => {
            const angle = (360 / ring.chips.length) * ci + ri * 40;
            return (
              <div
                key={ci}
                className="absolute top-1/2 left-1/2"
                style={{ transform: `rotate(${angle}deg) translateX(${ring.size / 2}px)` }}
              >
                {/* counter-rotate so icons stay upright */}
                <motion.div
                  className="-translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-xl glass-strong flex items-center justify-center shadow-lg shadow-[#0078D4]/20"
                  style={{ rotate: -angle }}
                  animate={{ rotate: ring.reverse ? 360 - angle : -360 - angle }}
                  transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
                >
                  <Icon className="w-5 h-5 text-accent-soft" />
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      ))}

      {/* Centre tile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 m-auto w-36 h-36 rounded-3xl glass-card animate-float flex items-center justify-center text-center p-4"
      >
        <div className="flex flex-col items-center gap-2"><BrandIcon slug={slug} name={title} size="lg" /><span className="text-sm font-medium text-ink leading-tight">{title}</span></div>
      </motion.div>
    </div>
  );
}
