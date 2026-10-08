"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

function Word({
  children,
  progress,
  range,
  accent,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  accent: boolean;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, ["0.18em", "0em"]);
  return (
    <motion.span style={{ opacity, y }} className={`inline-block ${accent ? "gradient-text" : ""}`}>
      {children}
    </motion.span>
  );
}

/**
 * Heading whose words light up one by one as it scrolls into view.
 * `accent` words are rendered in the serif-italic gradient style.
 */
export function ScrollText({
  text,
  accent,
  as = "h2",
  className = "",
}: {
  text: string;
  accent?: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.92", "start 0.42"] });

  const words = [
    ...text.split(/\s+/).map((w) => ({ w, a: false })),
    ...(accent ? accent.split(/\s+/).map((w) => ({ w, a: true })) : []),
  ].filter((x) => x.w);

  const Tag = as;
  if (reduce) {
    return (
      <Tag className={className}>
        {text} {accent && <span className="gradient-text">{accent}</span>}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={className} aria-label={accent ? `${text} ${accent}` : text}>
      {words.map((x, i) => {
        // Each word fades over 1.6 "slots"; slots are sized so the last word ends exactly at 1.
        const slot = 1 / (words.length + 0.6);
        const start = i * slot;
        return (
          <span key={i} aria-hidden>
            <Word progress={scrollYProgress} range={[start, start + 1.6 * slot]} accent={x.a}>
              {x.w}
            </Word>
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </Tag>
  );
}
