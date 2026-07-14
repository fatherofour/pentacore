"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/2348137996917"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="w-12 h-12 rounded-xl bg-[#25D366]/90 backdrop-blur-md border border-white/20 shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:bg-[#25D366] hover:scale-110 transition-transform"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl glass-strong shadow-lg shadow-black/30 flex items-center justify-center hover:border-[#0078D4]/60 hover:scale-110 transition-transform"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
