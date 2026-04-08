"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { IHero } from "@/types";

const defaultPortrait = "/images/profile/mine.jpeg";

const fallbackHero: IHero = {
  name: "Abhinandan",
  role: "MERN Stack Developer",
  availability: "Available for new opportunities",
  avatar: defaultPortrait,
  resumeUrl: "/resume.pdf",
  skills: "MERN Stack / Next.js / TypeScript",
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
  const portraitSrc =
    currentHero.avatar && currentHero.avatar !== "/unnamed.jpg"
      ? currentHero.avatar
      : defaultPortrait;

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-32 pb-12 text-center"
    >
      <div className="absolute inset-x-0 top-28 text-[4.5rem] font-semibold leading-none tracking-tight text-white/14 sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
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
          className="glass rounded-full px-5 py-2 text-[11px] uppercase tracking-[0.32em] text-[#5d4737]"
        >
          Full-stack developer crafting elegant digital products
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative mx-auto mt-6 h-[280px] w-[240px] sm:h-[360px] sm:w-[300px] md:h-[430px] md:w-[360px]"
        >
          <div className="absolute inset-x-6 inset-y-6 rounded-full bg-[#ad7649]/22 blur-3xl" />
          <div className="absolute inset-[18%] rounded-full border border-white/35" />
          <Image
            src={portraitSrc}
            alt={currentHero.name}
            fill
            className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
            priority
          />
        </motion.div>

        <div className="max-w-3xl space-y-4">
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl font-semibold tracking-tight text-[#1d1712] md:text-7xl"
          >
            {currentHero.role}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-px w-10 bg-[#7e624d]/35" />
            <p className="text-xs uppercase tracking-[0.35em] text-[#715948]">
              {currentHero.availability}
            </p>
            <div className="h-px w-10 bg-[#7e624d]/35" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="pt-1 text-[11px] uppercase tracking-[0.32em] text-[#6e5847] md:text-xs"
          >
            {currentHero.skills}
          </motion.p>
        </div>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-balance text-base leading-8 text-[#43362d] md:text-lg"
        >
          {currentHero.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="glass flex flex-wrap items-center justify-center gap-4 rounded-[1.75rem] px-6 py-4 text-sm text-[#4e3d31]"
        >
          <span className="rounded-full bg-white/45 px-4 py-2 uppercase tracking-[0.18em]">
            Clean UI systems
          </span>
          <span className="rounded-full bg-white/45 px-4 py-2 uppercase tracking-[0.18em]">
            Scalable MERN builds
          </span>
          <span className="rounded-full bg-white/45 px-4 py-2 uppercase tracking-[0.18em]">
            Motion with restraint
          </span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-2 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="rounded-xl border border-[#5c4636]/35 bg-[#241a15] px-8 py-3 text-sm tracking-[0.2em] text-[#fff5ec] transition-colors hover:bg-[#130d09]"
          >
            Contact
          </a>

          <a
            href="#about"
            className="group flex items-center gap-2 rounded-xl border border-[#6f5746]/22 bg-white/35 px-8 py-3 text-sm tracking-[0.2em] text-[#251b16] transition-colors hover:bg-white/55"
          >
            About Me
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
