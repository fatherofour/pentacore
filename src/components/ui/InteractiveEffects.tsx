"use client";

import { useEffect } from "react";

/**
 * Site-wide pointer effects, delegated from one listener:
 *  - .glass-card        → cursor spotlight (sets --mx / --my)
 *  - .glass-card-hover  → subtle 3D tilt (sets --rx / --ry)
 *  - .btn-filled/.btn-ghost → magnetic pull (sets --tx / --ty)
 * Skipped entirely on touch devices; tilt/magnetism skipped for reduced motion.
 */
export function InteractiveEffects() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let card: HTMLElement | null = null;
    let button: HTMLElement | null = null;

    const resetCard = (el: HTMLElement) => {
      el.style.removeProperty("--rx");
      el.style.removeProperty("--ry");
    };
    const resetButton = (el: HTMLElement) => {
      el.style.removeProperty("--tx");
      el.style.removeProperty("--ty");
    };

    const onMove = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (!target?.closest) return;

      const nextCard = target.closest<HTMLElement>(".glass-card");
      if (card && card !== nextCard) resetCard(card);
      card = nextCard;
      if (card) {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        card.style.setProperty("--mx", `${x}px`);
        card.style.setProperty("--my", `${y}px`);
        if (!reduce && card.classList.contains("glass-card-hover") && r.width < 700) {
          card.style.setProperty("--rx", `${(0.5 - y / r.height) * 6}deg`);
          card.style.setProperty("--ry", `${(x / r.width - 0.5) * 6}deg`);
        }
      }

      if (reduce) return;
      const nextButton = target.closest<HTMLElement>(".btn-filled, .btn-ghost");
      if (button && button !== nextButton) resetButton(button);
      button = nextButton;
      if (button) {
        const r = button.getBoundingClientRect();
        button.style.setProperty("--tx", `${(e.clientX - (r.left + r.width / 2)) * 0.12}px`);
        button.style.setProperty("--ty", `${(e.clientY - (r.top + r.height / 2)) * 0.2}px`);
      }
    };

    const onLeave = () => {
      if (card) resetCard(card);
      if (button) resetButton(button);
      card = button = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return null;
}
