"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";

const BackToTop = () => {
  const { isScrolled: isVisible } = useScroll(500);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[90] rounded-2xl border border-[#b97d4c]/18 bg-[#c68b59] p-4 text-[#fff8f1] shadow-xl shadow-[#8e5f38]/20 transition-all hover:bg-[#b97d4c] active:scale-95"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
