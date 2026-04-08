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
    githubUrl: "https://github.com/AbhinandanYadav01",
    liveUrl: "https://github.com/AbhinandanYadav01",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Task Management SaaS",
    description: "Collaborative platform for teams with real-time updates and analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    githubUrl: "https://github.com/AbhinandanYadav01",
    liveUrl: "https://github.com/AbhinandanYadav01",
    tags: ["React", "Node.js", "Socket.io"],
  },
  {
    title: "Portfolio CMS Dashboard",
    description: "Personal portfolio admin panel for managing hero content, projects, services, and messages.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    githubUrl: "https://github.com/AbhinandanYadav01",
    liveUrl: "https://github.com/AbhinandanYadav01",
    tags: ["Next.js", "MongoDB", "Admin"],
  },
  {
    title: "Restaurant Ordering Platform",
    description: "Online ordering experience with menu browsing, cart flow, and order tracking for local food businesses.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    githubUrl: "https://github.com/AbhinandanYadav01",
    liveUrl: "https://github.com/AbhinandanYadav01",
    tags: ["React", "Express", "Payments"],
  },
  {
    title: "Real Estate Listing App",
    description: "Property discovery platform with advanced filtering, listing detail pages, and lead capture forms.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    githubUrl: "https://github.com/AbhinandanYadav01",
    liveUrl: "https://github.com/AbhinandanYadav01",
    tags: ["Next.js", "Node.js", "UI/UX"],
  },
  {
    title: "Learning Management Portal",
    description: "Course platform with structured lessons, progress tracking, and role-based access for students and admins.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    githubUrl: "https://github.com/AbhinandanYadav01",
    liveUrl: "https://github.com/AbhinandanYadav01",
    tags: ["TypeScript", "MongoDB", "Dashboard"],
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
        <p className="section-kicker">Selected Work</p>
        <h2 className="section-title mt-3">Projects</h2>
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
            className="group relative overflow-hidden rounded-[1.8rem] border border-[#7f624d]/12 bg-[rgba(255,249,243,0.72)] shadow-[0_28px_90px_rgba(71,43,21,0.1)]"
          >
            <div className="group/img relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover/img:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#160f0b]/82 via-[#160f0b]/18 to-transparent" />

              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/85 backdrop-blur-md">
                Featured Build
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={
                    hoveredIndex === index
                      ? { y: 0, opacity: 1 }
                      : { y: 20, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="flex gap-3"
                >
                  <a
                    href={project.liveUrl}
                    className="rounded-full bg-white px-4 py-3 text-black transition-all hover:bg-[#f0e5d8]"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="rounded-full border border-white/30 bg-black/35 px-4 py-3 text-white transition-all hover:bg-black/60"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </motion.div>
              </div>
            </div>

            <div className="space-y-4 p-6 text-[#211915]">
              <h3 className="font-serif text-3xl font-semibold">{project.title}</h3>
              <p className="min-h-16 text-sm leading-7 text-[#59493f]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#8d6b54]/18 bg-white/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#7c5b45]"
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
