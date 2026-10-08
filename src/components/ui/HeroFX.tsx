"use client";

import { useEffect, useRef } from "react";

/**
 * Animated backdrop layers for page heroes: drifting aurora, masked grid,
 * scan line, and a cursor spotlight. Drop inside a `relative overflow-hidden`
 * section, above the photo and below the content.
 */
export function HeroFX() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spot = spotRef.current;
    const section = spot?.parentElement;
    if (!spot || !section || window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      spot.style.background = `radial-gradient(560px circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(64,163,224,0.15), transparent 60%)`;
    };
    section.addEventListener("mousemove", onMove);
    return () => section.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div className="aurora aurora-1 w-[520px] h-[520px] -top-40 -left-32 bg-[radial-gradient(circle,rgba(0,120,212,0.5),transparent_70%)]" />
      <div className="aurora aurora-2 w-[460px] h-[460px] top-0 -right-32 bg-[radial-gradient(circle,rgba(124,58,237,0.42),transparent_70%)]" />
      <div className="aurora aurora-3 w-[400px] h-[400px] bottom-[-120px] left-1/3 bg-[radial-gradient(circle,rgba(6,182,212,0.35),transparent_70%)]" />
      <div className="absolute inset-0 grid-lines pointer-events-none [mask-image:radial-gradient(ellipse_80%_75%_at_50%_35%,black,transparent)]" />
      <div ref={spotRef} className="absolute inset-0 pointer-events-none hidden md:block" />
    </>
  );
}
