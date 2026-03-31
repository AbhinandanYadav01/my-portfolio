"use client";

import Link from "next/link";
import { Github, Instagram, Linkedin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "@/hooks/useScroll";
import { IHero } from "@/types";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolled } = useScroll(50);
  const [hero, setHero] = useState<IHero | null>(null);

  useEffect(() => {
    fetch("/api/hero")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setHero(data.data);
      });
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 md:px-8 ${
        isScrolled ? "py-4" : "py-5"
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 px-5 py-3 transition-all duration-300 ${
          isScrolled
            ? "bg-black/35 shadow-[0_12px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            : "bg-black/20 backdrop-blur-md"
        }`}
      >
        <Link href="/" className="group" aria-label="Abhinandan Home">
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-zinc-200 transition-colors group-hover:text-white">
            abhinandan
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex" role="menubar">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs tracking-[0.18em] text-zinc-200/85 transition-colors hover:text-white"
              role="menuitem"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 text-zinc-200/80 md:flex">
          <a
            href="https://github.com/abhishekyadav-96"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.instagram.com/abhishekyadav___018/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-colors hover:text-white"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhinandan-yadav-644006378/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

        <button
          className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-200 transition-colors hover:text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 z-40 bg-black/75 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-white/10 p-8">
                <span className="text-sm uppercase tracking-[0.35em] text-zinc-100">
                  {hero?.name || "Abhinandan"}
                </span>
                <button
                  className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-200"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-8 p-8">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <Link
                      href={link.href}
                      className="font-serif text-4xl text-zinc-100 transition-colors hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto border-t border-white/10 p-8 text-sm text-zinc-300">
                Available for freelance and full-time work.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
