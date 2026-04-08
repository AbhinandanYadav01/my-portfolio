"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IAbout } from "@/types";

const defaultAboutImage = "/images/profile/mine.jpeg";

const About = () => {
  const [about, setAbout] = useState<IAbout | null>(null);

  useEffect(() => {
    fetch("/api/about")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setAbout(data.data);
        }
      })
      .catch(() => {
        return;
      });
  }, []);

  const aboutImage =
    about?.image && !about.image.includes("images.unsplash.com")
      ? about.image
      : defaultAboutImage;

  return (
    <section className="mx-auto max-w-5xl px-4 py-24" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-[2.5rem] border border-white/20 bg-[linear-gradient(135deg,rgba(255,247,239,0.58),rgba(242,224,206,0.28))] p-8 shadow-[0_30px_100px_rgba(74,46,24,0.12)] md:p-12"
      >
        <div className="text-center">
          <p className="section-kicker">Who I Am</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title mt-3"
          >
            {about?.title || "About Me"}
          </motion.h2>
          <div className="section-rule" />
        </div>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/35 bg-white/55 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.12)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-zinc-200">
              <Image
                src={aboutImage}
                alt="Portrait of Abhinandan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 28rem"
              />
            </div>
          </motion.div>

          <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-[#7f624d]/12 bg-white/36 p-6 text-center text-lg leading-9 text-[#342821] lg:text-left">
            {about?.description ? (
              about.description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 + index * 0.12 }}
                  className={index > 0 ? "mt-6" : ""}
                >
                  {paragraph}
                </motion.p>
              ))
            ) : (
              <>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                >
                  I am a dedicated MERN Stack Developer with a passion for crafting calm,
                  expressive interfaces backed by reliable full-stack systems. I enjoy
                  shaping products that feel thoughtful in motion, responsive in behavior,
                  and clear in structure.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-6"
                >
                  My focus is combining clean frontend design with practical backend
                  architecture so every project is both visually polished and genuinely
                  useful.
                </motion.p>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
