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
      <div className="rounded-[2.7rem] border border-[#ffffff33] bg-[linear-gradient(135deg,rgba(232,213,191,0.58),rgba(192,146,108,0.18))] p-8 shadow-[0_35px_100px_rgba(79,49,25,0.12)] md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="section-kicker">What I Offer</p>
          <h2 className="section-title mt-3">Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5f4a3b]">
            Each service is shaped around practical product delivery, strong UX
            thinking, and maintainable engineering.
          </p>
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
              className="flex min-h-[300px] flex-col justify-between rounded-[2rem] border border-[#7c5d47]/12 bg-[rgba(255,249,244,0.8)] p-8 text-left text-[#211915] shadow-[0_18px_60px_rgba(68,40,18,0.08)]"
            >
              <div>
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#a66a3f]/14 bg-[#a66a3f]/10">
                  {(() => {
                    const Icon = iconMap[service.icon];
                    return Icon ? (
                      <Icon className="h-8 w-8 text-[#9c653d]" />
                    ) : (
                      <Globe className="h-8 w-8 text-[#9c653d]" />
                    );
                  })()}
                </div>

                <h3 className="font-serif text-3xl font-semibold">{service.title}</h3>

                <p className="mt-4 text-sm leading-7 text-[#5f4a3b]">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 border-t border-[#8f6f56]/14 pt-5 text-[11px] uppercase tracking-[0.26em] text-[#9d6b46]">
                Strategy / Design / Delivery
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
