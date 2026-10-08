"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "@/components/ui/icons";

const subscribe = (notify: () => void) => {
  const observer = new MutationObserver(notify);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
};
const isLight = () => document.documentElement.classList.contains("light");

/** Switches between dark (default) and light mode; choice is remembered. */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const light = useSyncExternalStore(subscribe, isLight, () => false);

  const toggle = () => {
    const next = !light;
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      title={light ? "Dark mode" : "Light mode"}
      className={`w-10 h-10 rounded-xl glass flex items-center justify-center text-body hover:text-ink hover:border-[#0078D4]/50 transition-colors ${className}`}
    >
      {light ? <Moon className="w-[18px] h-[18px]" /> : <Sun className="w-[18px] h-[18px]" />}
    </button>
  );
}
