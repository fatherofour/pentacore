"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

const team = [
  { name: "David Thompson", title: "Chief Executive Officer", photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop&crop=faces&q=80", bio: "20+ years in enterprise IT. Former Microsoft Solutions Architect with a passion for digital transformation." },
  { name: "Priya Sharma", title: "Chief Technology Officer", photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=faces&q=80", bio: "Azure Expert and cloud architect. Led 40+ enterprise cloud migrations across EMEA and Asia Pacific." },
  { name: "Michael Okafor", title: "Head of Cybersecurity", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces&q=80", bio: "CISSP certified with 15 years in enterprise security. Specialises in Zero Trust and compliance frameworks." },
  { name: "Emily Watson", title: "Head of Customer Success", photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces&q=80", bio: "Passionate about ensuring every client achieves measurable ROI from their technology investments." },
  { name: "James Adeyemi", title: "Solutions Architect", photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=faces&q=80", bio: "Microsoft-certified architect specialising in Dynamics 365, Power Platform and business applications." },
  { name: "Sophie Laurent", title: "Head of Operations", photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=faces&q=80", bio: "Drives operational excellence and agile project delivery across all Pentacore client engagements." },
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="glow-orb glow-blue w-[480px] h-[480px] bottom-0 -right-56 opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag-pill mb-4">
            Leadership Team
          </span>
          <h2 className="heading-secondary text-3xl sm:text-4xl text-white mb-4">
            Meet the experts behind{" "}
            <span className="gradient-text">Pentacore&apos;s success</span>
          </h2>
          <p className="text-[#A6B3C9] max-w-xl mx-auto">
            A team of certified professionals united by a shared passion for technology
            and an unwavering commitment to client success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass-card glass-card-hover p-7"
            >
              {/* Avatar — glass ring */}
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-5 ring-1 ring-white/20 group-hover:scale-105 group-hover:ring-[#0078D4]/50 transition-all">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              <h3 className="font-bold text-white text-lg leading-tight">{member.name}</h3>
              <p className="text-[#40A3E0] text-sm font-medium mt-0.5 mb-3">{member.title}</p>
              <p className="text-[#A6B3C9] text-sm leading-relaxed mb-5">{member.bio}</p>

              {/* Social links */}
              <div className="flex items-center gap-2">
                <a href="#" className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:border-[#0078D4]/60 hover:bg-[#0078D4]/15 transition-all">
                  <ExternalLink className="w-3.5 h-3.5 text-[#A6B3C9]" />
                </a>
                <a href="#" className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:border-[#0078D4]/60 hover:bg-[#0078D4]/15 transition-all">
                  <X className="w-3.5 h-3.5 text-[#A6B3C9]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
