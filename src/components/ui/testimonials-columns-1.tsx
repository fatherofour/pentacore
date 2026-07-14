"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="glass-card p-6 max-w-xs w-full"
                  key={i}
                >
                  <Quote className="w-5 h-5 text-[#40A3E0] mb-3" />
                  <p className="text-[#A6B3C9] text-sm leading-relaxed">{text}</p>
                  <div className="flex items-center gap-3 mt-5">
                    <Image
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover flex-shrink-0 ring-2 ring-white/15"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold text-white text-sm leading-5">{name}</div>
                      <div className="text-[#7C8AA5] text-xs leading-5">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
