"use client";

import { Code2, Globe, Cpu, Smartphone, ShieldCheck, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { IService } from "@/types";

const iconMap: Record<string, any> = {
  Globe,
  Code2,
  Zap,
  Cpu,
  ShieldCheck,
  Smartphone,
};

const fallbackServices: IService[] = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end web applications built with the MERN stack, ensuring scalability and performance.",
    icon: "Code2",
  },
  {
    title: "Web Architecture",
    description:
      "Designing robust and maintainable system architectures for complex digital products.",
    icon: "Globe",
  },
  {
    title: "Performance Optimization",
    description:
      "Deep dive into application speed, Core Web Vitals, and server-side efficiency.",
    icon: "Zap",
  },
];

const Services = () => {
  const [services, setServices] = useState<IService[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/services");
        const data = await res.json();
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setServices(data.data);
        } else {
          setServices(fallbackServices);
        }
      } catch {
        setServices(fallbackServices);
      }
    };

    fetchServices();
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const currentServices = services.length > 0 ? services : fallbackServices;

  return (
    <section className="mx-auto max-w-6xl px-4 py-24" id="services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="section-title">Services</h2>
        <div className="section-rule" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {currentServices.slice(0, 3).map((service) => (
          <motion.article
            key={service.title}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="panel-card flex min-h-[280px] flex-col items-center justify-start p-10 text-center text-zinc-900"
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-black/5">
              {(() => {
                const Icon = iconMap[service.icon];
                return Icon ? (
                  <Icon className="h-8 w-8 text-zinc-800" />
                ) : (
                  <Globe className="h-8 w-8 text-zinc-800" />
                );
              })()}
            </div>

            <h3 className="font-serif text-3xl font-semibold">{service.title}</h3>

            <p className="mt-4 text-sm leading-7 text-zinc-700">
              {service.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
