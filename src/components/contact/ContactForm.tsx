"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const services = [
  "Microsoft 365",
  "Azure Cloud",
  "Dynamics 365",
  "Cybersecurity",
  "Cloud Migration",
  "Managed Services",
  "Zoho Solutions",
  "Networking",
  "IT Outsourcing",
  "General Enquiry",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card flex flex-col items-center justify-center py-16 px-8 text-center"
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-600/30 flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
        <p className="text-[#A6B3C9] text-lg max-w-sm">
          Thank you for reaching out. One of our consultants will be in touch within 2 business hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-filled mt-8 text-sm !py-3 !px-6"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card p-8"
    >
      <div className="mb-8">
        <h2 className="heading-secondary text-2xl text-white mb-2">Book a Consultation</h2>
        <p className="text-[#A6B3C9]">Fill in the form and we&apos;ll get back to you within 2 hours during business days.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#A6B3C9] mb-1.5">First Name *</label>
            <input
              {...register("firstName")}
              placeholder="John"
              className="glass-input"
            />
            {errors.firstName && <p className="text-rose-400 text-xs mt-1">{errors.firstName.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-[#A6B3C9] mb-1.5">Last Name *</label>
            <input
              {...register("lastName")}
              placeholder="Smith"
              className="glass-input"
            />
            {errors.lastName && <p className="text-rose-400 text-xs mt-1">{errors.lastName.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#A6B3C9] mb-1.5">Work Email *</label>
          <input
            {...register("email")}
            type="email"
            placeholder="john@company.com"
            className="glass-input"
          />
          {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#A6B3C9] mb-1.5">Company *</label>
            <input
              {...register("company")}
              placeholder="Acme Ltd"
              className="glass-input"
            />
            {errors.company && <p className="text-rose-400 text-xs mt-1">{errors.company.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-[#A6B3C9] mb-1.5">Phone</label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="+44 7700 000000"
              className="glass-input"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#A6B3C9] mb-1.5">Service of Interest *</label>
          <select
            {...register("service")}
            className="glass-input appearance-none [&>option]:bg-[#0B1226] [&>option]:text-white"
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && <p className="text-rose-400 text-xs mt-1">{errors.service.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#A6B3C9] mb-1.5">How can we help? *</label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Tell us about your IT challenges, current environment, or what you're looking to achieve..."
            className="glass-input resize-none"
          />
          {errors.message && <p className="text-rose-400 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-filled w-full text-base font-semibold !py-4 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-center text-xs text-[#7C8AA5]">
          By submitting, you agree to our Privacy Policy. We never share your data.
        </p>
      </form>
    </motion.div>
  );
}
