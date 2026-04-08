import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Services />
        <Contact />
      </div>

      <footer className="mt-24 border-t border-[#8d6e58]/16 bg-[linear-gradient(180deg,#f7efe6_0%,#ead8c7_100%)] text-[#3b2d24]">
        <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
            <div>
              <div className="text-3xl font-black uppercase tracking-[0.24em]">
                <span className="text-[#c68b59]">Abhi</span>
                <span className="text-[#241b16]">nandan</span>
              </div>
              <p className="mt-6 max-w-md text-base leading-8 text-[#5c493d]">
                Building thoughtful full-stack experiences with clean interfaces,
                reliable systems, and a strong focus on visual polish.
              </p>
              <div className="mt-8 flex items-center gap-5 text-[#7a614f]">
                <a
                  href="https://github.com/AbhinandanYadav01"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="transition-colors hover:text-[#1b1410]"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/abhishekyadav___018/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition-colors hover:text-[#1b1410]"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhinandan-yadav-644006378/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="transition-colors hover:text-[#1b1410]"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b97d4c]">
                Navigation
              </p>
              <div className="mt-6 flex flex-col gap-4 text-base text-[#43352c]">
                <a
                  href="#home"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-[#b97d4c]"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-[#b97d4c]"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-[#b97d4c]"
                >
                  Projects
                </a>
                <a
                  href="#services"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-[#b97d4c]"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="transition-all duration-200 hover:translate-x-1 hover:text-[#b97d4c]"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b97d4c]">
                Services
              </p>
              <div className="mt-6 flex flex-col gap-4 text-base text-[#43352c]">
                <p className="cursor-default transition-all duration-200 hover:translate-x-1 hover:text-[#b97d4c]">
                  Portfolio Websites
                </p>
                <p className="cursor-default transition-all duration-200 hover:translate-x-1 hover:text-[#b97d4c]">
                  Full Stack Apps
                </p>
                <p className="cursor-default transition-all duration-200 hover:translate-x-1 hover:text-[#b97d4c]">
                  Admin Dashboards
                </p>
                <p className="cursor-default transition-all duration-200 hover:translate-x-1 hover:text-[#b97d4c]">
                  UI Refinement
                </p>
                <p className="cursor-default transition-all duration-200 hover:translate-x-1 hover:text-[#b97d4c]">
                  Performance Optimization
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b97d4c]">
                Contact
              </p>
              <div className="mt-6 flex flex-col gap-5 text-base text-[#43352c]">
                <a
                  href="mailto:abhinan888@gmail.com"
                  className="flex items-center gap-3 transition-all duration-200 hover:translate-x-1 hover:text-[#b97d4c]"
                >
                  <Mail className="h-5 w-5 text-[#c68b59] transition-colors duration-200 hover:text-[#b97d4c]" />
                  abhinan888@gmail.com
                </a>
                <p className="flex cursor-default items-center gap-3 transition-all duration-200 hover:translate-x-1 hover:text-[#b97d4c]">
                  <Phone className="h-5 w-5 text-[#c68b59]" />
                  +977 9762451762
                </p>
                <p className="flex cursor-default items-center gap-3 transition-all duration-200 hover:translate-x-1 hover:text-[#b97d4c]">
                  <MapPin className="h-5 w-5 text-[#c68b59]" />
                  Nepal, Kathmandu
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#8d6e58]/18 pt-7 text-sm text-[#6a584b] md:flex-row">
            <p>Copyright 2024 Abhinandan. All rights reserved.</p>
            <p>Designed and developed as a complete personal portfolio website.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
