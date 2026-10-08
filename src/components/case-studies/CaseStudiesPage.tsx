"use client";

import { useRef } from "react";
import { HeroFX } from "@/components/ui/HeroFX";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "@/components/ui/icons";
import { caseStudies } from "@/data/case-studies";

function CaseStudiesHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={sectionRef} className="relative pt-40 pb-12 overflow-hidden">
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80&auto=format&fit=crop"
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
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <h1 className="heading-display text-ink text-6xl sm:text-7xl lg:text-7xl mb-6">
            Real Results for{" "}
            <span className="gradient-text">Real Businesses</span>
          </h1>
          <p className="text-body text-xl max-w-2xl mx-auto">
            Explore how we&apos;ve helped organisations across every sector achieve measurable
            outcomes through technology transformation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />

      {/* Case studies grid */}
      <section className="py-12 md:py-14 relative overflow-hidden">
        <div className="glow-orb glow-purple w-[460px] h-[460px] top-1/3 -right-56 opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="glass-card glass-card-hover overflow-hidden !rounded-3xl">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Left panel — photo with tinted glass overlay */}
                  <div className="relative p-8 text-white flex flex-col justify-between min-h-[320px] overflow-hidden">
                    <Image
                      src={cs.photo}
                      alt={cs.client}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b ${cs.accent} to-[#060B1A]/95`} />
                    <div className="absolute inset-0 backdrop-blur-[2px]" />

                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl glass-dark flex items-center justify-center text-white font-bold text-lg mb-5">
                        {cs.logo}
                      </div>
                      <p className="label-mono text-white/70 mb-1">{cs.industry}</p>
                      <h3 className="font-bold text-xl leading-snug mb-3">{cs.client}</h3>
                      <p className="text-white/85 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="relative mt-6">
                      <p className="label-mono text-white/60 mb-2">Technologies Used</p>
                      <div className="flex flex-wrap gap-1.5">
                        {cs.tech.map((t) => (
                          <span key={t} className="px-2.5 py-1 rounded-lg bg-[rgba(255,255,255,0.15)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] text-white text-xs font-medium">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right panel */}
                  <div className="lg:col-span-2 p-8">
                    <h2 className="heading-secondary text-xl text-ink mb-4">{cs.title}</h2>
                    <p className="text-body text-sm leading-relaxed mb-6">{cs.solution}</p>

                    {/* Results — glass stat tiles */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                      {cs.results.map(({ metric, label }) => (
                        <div key={label} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                          <p className="text-2xl font-bold gradient-text">{metric}</p>
                          <p className="text-mute text-xs mt-1 leading-tight">{label}</p>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/case-studies/${cs.id}`}
                      className="btn-filled text-sm !py-2.5 !px-5 group"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
