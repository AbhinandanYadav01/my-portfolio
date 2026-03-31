"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { IProject } from "@/types";

const fallbackProjects: IProject[] = [
  {
    title: "Modern E-Commerce Platform",
    description: "A high-performance storefront with real-time inventory and secure payments.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
    githubUrl: "https://github.com/abhishekyadav-96",
    liveUrl: "https://github.com/abhishekyadav-96",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Task Management SaaS",
    description: "Collaborative platform for teams with real-time updates and analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    githubUrl: "https://github.com/abhishekyadav-96",
    liveUrl: "https://github.com/abhishekyadav-96",
    tags: ["React", "Node.js", "Socket.io"],
  },
];

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setProjects(data.data);
        } else {
          setProjects(fallbackProjects);
        }
      } catch {
        setProjects(fallbackProjects);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const currentProjects = projects.length > 0 ? projects : fallbackProjects;

  return (
    <section className="mx-auto max-w-6xl px-4 py-24" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="section-title">Project</h2>
        <div className="section-rule" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {currentProjects.map((project, index) => (
          <motion.article
            key={`${project.title}-${index}`}
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="panel-card group relative overflow-hidden rounded-[1.5rem] bg-white/55"
          >
            <div className="group/img relative aspect-[16/10] overflow-hidden rounded-t-[1.5rem]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover/img:scale-105"
              />

              <div className="absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/65 via-black/10 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover/img:opacity-100">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={
                    hoveredIndex === index
                      ? { y: 0, opacity: 1 }
                      : { y: 20, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="rounded-full bg-white p-3 text-black transition-all hover:bg-zinc-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="rounded-full border border-white/30 bg-black/45 p-3 text-white transition-all hover:bg-black/70"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="space-y-4 p-6 text-zinc-900">
              <h3 className="font-serif text-3xl font-semibold">{project.title}</h3>
              <p className="min-h-16 text-sm leading-7 text-zinc-700">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
