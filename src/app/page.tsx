import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

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

        <footer className="mt-20 border-t border-black/20 py-8 text-zinc-800">
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
            <p>© 2026 Abhinandan.</p>
            <div className="flex gap-6">
              <a
                href="https://github.com/abhishekyadav-96"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-black"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abhinandan-yadav-644006378/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-black"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/abhishekyadav___018/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-black"
              >
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
