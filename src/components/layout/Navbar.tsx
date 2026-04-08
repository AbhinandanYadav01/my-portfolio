"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "@/hooks/useScroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolled } = useScroll(50);
  const whatsappUrl = "https://wa.me/9779819062257?text=Hi%20Abhinandan%2C%20I%27d%20like%20to%20connect.";

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
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 ${
          isScrolled
            ? "border-white/10 bg-[#1b1411]/72 shadow-[0_20px_60px_rgba(28,18,13,0.24)] backdrop-blur-xl"
            : "border-white/12 bg-[#281d17]/44 backdrop-blur-md"
        }`}
      >
        <Link href="/" className="group" aria-label="Abhinandan Home">
          <span className="text-[1.12rem] font-black uppercase tracking-[0.24em] transition-colors duration-300 sm:text-[1.2rem]">
            <span className="text-[#d79a63] transition-colors duration-300 group-hover:text-[#efb685]">
              Abhi
            </span>
            <span className="text-[#241b16] transition-colors duration-300 group-hover:text-[#120d0a]">
              nandan
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <div className="hidden items-center gap-6 border-l border-white/10 pl-8 lg:flex" role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm tracking-[0.18em] text-[#efdfd0]/82 transition-colors hover:text-white"
                role="menuitem"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[#d79a63]/24 bg-[#d79a63] px-5 py-2.5 text-sm font-semibold tracking-[0.08em] text-[#1c140f] transition-all hover:bg-[#efb685]"
          >
            <MessageCircle className="h-4 w-4" />
            Get In Touch
          </a>
        </div>

        <button
          className="rounded-full border border-white/10 bg-white/5 p-3 text-[#f4e8db] transition-colors hover:text-white md:hidden"
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
            className="fixed inset-0 top-0 z-40 bg-[#1c1411]/88 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-white/10 p-8">
                <span className="text-[1.12rem] font-black uppercase tracking-[0.24em]">
                  <span className="text-[#d79a63]">Abhi</span>
                  <span className="text-[#f3ede6]">nandan</span>
                </span>
                <button
                  className="rounded-full border border-white/10 bg-white/5 p-3 text-[#f4e8db]"
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
                      className="font-serif text-4xl text-[#fff4ea] transition-colors hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-fit items-center gap-3 rounded-full bg-[#d79a63] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#1c140f]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Get In Touch
                </motion.a>
              </div>
              <div className="mt-auto border-t border-white/10 p-8 text-sm text-[#ead8c7]">
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
