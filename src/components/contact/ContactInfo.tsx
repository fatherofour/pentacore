"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+234 8137996917", href: "tel:+2348137996917" },
  { icon: Mail, label: "Email", value: "info@pentacoresystems.com.ng", href: "mailto:info@pentacoresystems.com.ng" },
  { icon: MapPin, label: "Office", value: "123 Technology Drive, London EC2A 4NE", href: "#" },
  { icon: Clock, label: "Working Hours", value: "Mon–Fri, 8:00 AM – 6:00 PM GMT", href: null },
];

const officeHours = [
  { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 1:00 PM" },
  { day: "Sunday", hours: "Emergency Only" },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="space-y-8"
    >
      {/* Quick contact cards */}
      <div>
        <h2 className="heading-secondary text-2xl text-white mb-6">Contact Information</h2>
        <div className="space-y-4">
          {contactDetails.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="glass-card flex items-start gap-4 p-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0078D4] to-[#06B6D4] shadow-lg shadow-[#0078D4]/25 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="label-mono text-[#7C8AA5] mb-0.5">{label}</p>
                {href && href !== "#" ? (
                  <a href={href} className="text-white font-medium hover:text-[#40A3E0] transition-colors text-sm">
                    {value}
                  </a>
                ) : (
                  <p className="text-white font-medium text-sm">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Office hours — strong glass panel */}
      <div className="p-6 rounded-2xl glass-strong text-white">
        <h3 className="font-bold text-base mb-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#40A3E0]" />
          Office Hours
        </h3>
        <div className="space-y-2.5">
          {officeHours.map(({ day, hours }) => (
            <div key={day} className="flex justify-between text-sm">
              <span className="text-[#7C8AA5]">{day}</span>
              <span className="text-white font-medium">{hours}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xs text-[#7C8AA5]">
            24/7 support available for Managed Service clients.{" "}
            <a href="tel:+2348137996917" className="text-[#40A3E0] hover:underline">Emergency: +234 8137996917</a>
          </p>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-3">
        <a
          href="https://wa.me/2348137996917"
          className="glass-card glass-card-hover flex flex-col items-center gap-2 p-5 group text-center"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-600/25 flex items-center justify-center group-hover:scale-110 transition-transform">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-semibold text-white">WhatsApp Chat</span>
          <span className="text-xs text-[#7C8AA5]">Instant response</span>
        </a>
        <a
          href="/contact"
          className="glass-card glass-card-hover flex flex-col items-center gap-2 p-5 group text-center"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0078D4] to-[#06B6D4] shadow-lg shadow-[#0078D4]/25 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-semibold text-white">Book a Meeting</span>
          <span className="text-xs text-[#7C8AA5]">Schedule online</span>
        </a>
      </div>

      {/* Map placeholder — glass */}
      <div className="w-full h-48 rounded-2xl glass-strong flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 grid-dots opacity-40" />
        <div className="glow-orb glow-blue w-[200px] h-[200px] top-0 right-0 opacity-70" />
        <div className="relative text-center">
          <MapPin className="w-8 h-8 text-[#40A3E0] mx-auto mb-2" />
          <p className="text-white font-semibold text-sm">London, United Kingdom</p>
          <p className="text-[#7C8AA5] text-xs mt-1">123 Technology Drive, EC2A 4NE</p>
        </div>
      </div>
    </motion.div>
  );
}
