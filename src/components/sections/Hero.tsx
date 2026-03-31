"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { IHero } from "@/types";

const fallbackHero: IHero = {
  name: "Abhinandan",
  role: "MERN Stack Developer",
  availability: "Available for new opportunities",
  avatar: "/unnamed.jpg",
  resumeUrl: "/resume.pdf",
  skills: "MERN Stack · Next.js · TypeScript",
  description:
    "I build refined web experiences with modern full-stack architecture, smooth interfaces, and a strong focus on usability.",
};

const Hero = () => {
  const [hero, setHero] = useState<IHero | null>(null);

  useEffect(() => {
    fetch("/api/hero")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setHero(data.data);
        } else {
          setHero(fallbackHero);
        }
      })
      .catch(() => {
        setHero(fallbackHero);
      });
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const currentHero = hero || fallbackHero;

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-32 pb-12 text-center"
    >
      <div className="absolute inset-x-0 top-28 text-[4.5rem] font-semibold leading-none tracking-tight text-white/18 sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
        <div className="mx-auto max-w-6xl text-balance">
          Hi! I&apos;m {currentHero.name}
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-8"
      >
        <motion.div
          variants={itemVariants}
          className="relative mx-auto mt-12 h-[280px] w-[240px] sm:h-[360px] sm:w-[300px] md:h-[430px] md:w-[360px]"
        >
          <div className="absolute inset-x-6 inset-y-6 rounded-full bg-black/25 blur-3xl" />
          <Image
            src={currentHero.avatar || "/unnamed.jpg"}
            alt={currentHero.name}
            fill
            className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
            priority
          />
        </motion.div>

        <div className="max-w-3xl space-y-4">
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl font-semibold tracking-tight text-zinc-900 md:text-7xl"
          >
            {currentHero.role}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-px w-10 bg-black/30" />
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-700">
              {currentHero.availability}
            </p>
            <div className="h-px w-10 bg-black/30" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="pt-1 text-[11px] uppercase tracking-[0.32em] text-zinc-700 md:text-xs"
          >
            {currentHero.skills}
          </motion.p>
        </div>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-balance text-base leading-8 text-zinc-800 md:text-lg"
        >
          {currentHero.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-2 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="rounded-xl border border-black/30 px-8 py-3 text-sm tracking-[0.2em] text-zinc-900 transition-colors hover:bg-black hover:text-white"
          >
            Contact
          </a>

          <a
            href="#about"
            className="group flex items-center gap-2 rounded-xl border border-black/20 bg-white/25 px-8 py-3 text-sm tracking-[0.2em] text-zinc-900 transition-colors hover:bg-white/40"
          >
            Who I&apos;m
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
