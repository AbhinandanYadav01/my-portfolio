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
    <section className="mx-auto max-w-5xl px-4 py-10" id="tech">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <p className="text-center text-xs uppercase tracking-[0.35em] text-zinc-800">
          Core Stack
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {(categories.length > 0 ? categories : fallbackCategories).slice(0, 4).map((cat) => (
          <motion.div
            key={cat.title}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="panel-card flex min-h-[170px] flex-col items-center justify-center p-6 text-center text-zinc-900"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-black/5">
              {(() => {
                const Icon = iconMap[cat.icon];
                return Icon ? (
                  <Icon className="h-6 w-6 text-zinc-800" />
                ) : (
                  <Layout className="h-6 w-6 text-zinc-800" />
                );
              })()}
            </div>

            <h3 className="font-serif text-3xl font-semibold">{cat.title}</h3>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-zinc-700">
              {cat.skills.slice(0, 2).join(" · ")}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;
