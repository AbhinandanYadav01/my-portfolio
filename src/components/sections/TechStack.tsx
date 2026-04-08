"use client";

import { Layout, Server, Database, Wrench } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { ITech } from "@/types";

const iconMap: Record<string, any> = {
  Layout,
  Server,
  Database,
  Wrench,
};

const fallbackCategories: ITech[] = [
  {
    title: "Frontend",
    icon: "Layout",
    description: "Building responsive and interactive user interfaces with modern frameworks.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: "Server",
    description: "Developing robust server-side logic and scalable API architectures.",
    skills: ["Node.js", "Express", "Python", "GraphQL", "REST APIs"],
  },
  {
    title: "Database",
    icon: "Database",
    description: "Designing and optimizing data models for high-performance applications.",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma", "Mongoose"],
  },
  {
    title: "DevOps",
    icon: "Wrench",
    description: "Streamlining deployment pipelines and managing cloud infrastructure.",
    skills: ["Docker", "AWS", "CI/CD", "Vercel", "Git"],
  },
];

const TechStack = () => {
  const [categories, setCategories] = useState<ITech[]>([]);

  useEffect(() => {
    const fetchTech = async () => {
      try {
        const res = await fetch("/api/tech");
        const data = await res.json();
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setCategories(data.data);
        } else {
          setCategories(fallbackCategories);
        }
      } catch {
        setCategories(fallbackCategories);
      }
    };

    fetchTech();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16" id="tech">
      <div className="overflow-hidden rounded-[2.5rem] border border-[#2d221b]/20 bg-[#211915] px-6 py-10 text-[#fff8f1] shadow-[0_40px_120px_rgba(20,12,8,0.22)] md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left"
        >
          <div>
            <p className="section-kicker text-[#c99361]">Core Stack</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#fff5eb] md:text-5xl">
              Technologies I build with every day
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#d7c7b9]">
            A compact view of the systems, tools, and platforms I rely on to ship
            polished full-stack products.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {(categories.length > 0 ? categories : fallbackCategories).slice(0, 4).map((cat) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="rounded-[1.8rem] border border-white/10 bg-white/6 p-6 text-left backdrop-blur-md"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#c28958]/12">
                {(() => {
                  const Icon = iconMap[cat.icon];
                  return Icon ? (
                    <Icon className="h-6 w-6 text-[#d59d6a]" />
                  ) : (
                    <Layout className="h-6 w-6 text-[#d59d6a]" />
                  );
                })()}
              </div>

              <h3 className="font-serif text-3xl font-semibold text-[#fff7ef]">
                {cat.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#d1c0b2]">
                {cat.description}
              </p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[#c99361]">
                {cat.skills.slice(0, 3).join(" / ")}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
