"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IAbout } from "@/types";

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

  return (
    <section className="mx-auto max-w-5xl px-4 py-24" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-[2.5rem] bg-transparent"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title"
        >
          {about?.title || "About Me"}
        </motion.h2>
        <div className="section-rule" />
        <div className="mx-auto mt-14 max-w-3xl text-center text-lg leading-9 text-zinc-800">
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
      </motion.div>
    </section>
  );
};

export default About;
