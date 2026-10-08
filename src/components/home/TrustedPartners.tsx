"use client";

import Image from "next/image";
import { ScrollText } from "@/components/ui/ScrollText";
import { motion } from "framer-motion";

const partners = [
  { name: "Microsoft", src: "/logos/microsoft.svg" },
  { name: "Microsoft Azure", src: "/logos/azure.svg" },
  { name: "Microsoft 365", src: "/logos/microsoft-365.svg" },
  { name: "Zoho", src: "/logos/zoho.svg" },
  { name: "Oracle Cloud", src: "/logos/oracle-cloud.svg" },
];

function PartnerLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex items-center justify-center px-8 py-4 rounded-2xl bg-white/85 backdrop-blur-md border border-white/20 shadow-lg shadow-black/20 hover:bg-white transition-colors duration-300 flex-shrink-0 h-15 min-w-[160px]">
      <Image
        src={src}
        alt={name}
        width={120}
        height={36}
        className="h-8 w-auto max-w-[130px] object-contain"
      />
    </div>
  );
}

export function TrustedPartners() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="glow-orb glow-blue w-[400px] h-[400px] -top-52 left-1/2 -translate-x-1/2 opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* <ScrollText className="heading-secondary text-2xl sm:text-3xl text-ink" text={"OEMs we"} accent={"Deliver"} /> */}
        </motion.div>
      </div>

      {/* Marquee with fade-masked edges */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="marquee-track hover:[animation-play-state:paused]">
          {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
            <PartnerLogo key={`${partner.name}-${i}`} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
