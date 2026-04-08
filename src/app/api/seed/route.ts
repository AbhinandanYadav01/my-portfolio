import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Hero from '@/models/Hero';
import About from '@/models/About';
import Experience from '@/models/Experience';
import Project from '@/models/Project';
import Service from '@/models/Service';
import Tech from '@/models/Tech';

export async function GET() {
  await dbConnect();
  
  try {
    // 1. Seed Hero
    await Hero.findOneAndUpdate(
      { name: "Abhinandan" },
      {
        name: "Abhinandan",
        role: "MERN Stack Developer",
        availability: "Available for new opportunities",
        avatar: "/images/profile/mine.jpeg",
        resumeUrl: "/resume.pdf",
        skills: "MERN Stack | Next.js | TypeScript",
        description: "Passionate about building high-performance web applications with modern technologies."
      },
      { upsert: true, new: true }
    );

    // 2. Seed About
    const aboutCount = await About.countDocuments();
    if (aboutCount === 0) {
      await About.create({
        title: "About Me",
        description: [
          "I am a dedicated MERN Stack Developer with a passion for creating high-performance, scalable web applications. With a strong foundation in MongoDB, Express, React, and Node.js, I bridge the gap between complex back-end logic and intuitive front-end interfaces.",
          "My journey into full-stack development was driven by a desire to build complete products from the ground up. I thrive in environments that challenge me to think critically and solve problems efficiently."
        ],
        image: "/images/profile/mine.jpeg"
      });
    }

    // 3. Seed Experience
    const expCount = await Experience.countDocuments();
    if (expCount === 0) {
      await Experience.create([
        {
          title: "Senior MERN Stack Developer",
          company: "flowerage.pvt.ltd",
          period: "2023 - Present",
          description: "Architecting scalable web applications using MongoDB, Express, React, and Node.js. Leading a team of 5 developers to deliver high-quality products.",
          tags: ["MongoDB", "Express", "React", "Node.js", "Redux"],
          image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
        },
        {
          title: "Full Stack Developer",
          company: "Digital Innovations",
          period: "2021 - 2023",
          description: "Developed and maintained complex web systems. Implemented real-time features using Socket.io and optimized database performance.",
          tags: ["JavaScript", "TypeScript", "Next.js", "PostgreSQL", "AWS"],
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
        }
      ]);
    }

    // 4. Seed Projects
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      await Project.create([
        {
          title: "Modern E-Commerce Platform",
          description: "A high-performance storefront with real-time inventory and secure payments.",
          image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
          githubUrl: "https://github.com/AbhinandanYadav01",
          liveUrl: "https://github.com/AbhinandanYadav01",
          tags: ["Next.js", "Stripe", "MongoDB"]
        },
        {
          title: "Task Management SaaS",
          description: "Collaborative platform for teams with real-time updates and analytics.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
          githubUrl: "https://github.com/AbhinandanYadav01",
          liveUrl: "https://github.com/AbhinandanYadav01",
          tags: ["React", "Node.js", "Socket.io"]
        },
        {
          title: "Portfolio CMS Dashboard",
          description: "Admin-powered portfolio setup for editing hero content, projects, services, and incoming messages.",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
          githubUrl: "https://github.com/AbhinandanYadav01",
          liveUrl: "https://github.com/AbhinandanYadav01",
          tags: ["Next.js", "MongoDB", "Dashboard"]
        },
        {
          title: "Restaurant Ordering Platform",
          description: "Food ordering application with responsive menu browsing, cart handling, and order management.",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
          githubUrl: "https://github.com/AbhinandanYadav01",
          liveUrl: "https://github.com/AbhinandanYadav01",
          tags: ["React", "Express", "Payments"]
        },
        {
          title: "Real Estate Listing App",
          description: "Property listing experience with filtered discovery, inquiry forms, and focused mobile usability.",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
          githubUrl: "https://github.com/AbhinandanYadav01",
          liveUrl: "https://github.com/AbhinandanYadav01",
          tags: ["Next.js", "Node.js", "UI/UX"]
        },
        {
          title: "Learning Management Portal",
          description: "Role-based learning platform with lesson progress tracking, structured content, and admin control.",
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
          githubUrl: "https://github.com/AbhinandanYadav01",
          liveUrl: "https://github.com/AbhinandanYadav01",
          tags: ["TypeScript", "MongoDB", "Platform"]
        }
      ]);
    }

    // 5. Seed Services
    const serviceCount = await Service.countDocuments();
    if (serviceCount === 0) {
      await Service.create([
        {
          title: "Full Stack Development",
          description: "End-to-end web applications built with the MERN stack, ensuring scalability and performance.",
          icon: "Code2"
        },
        {
          title: "Web Architecture",
          description: "Designing robust and maintainable system architectures for complex digital products.",
          icon: "Globe"
        },
        {
          title: "Performance Optimization",
          description: "Deep dive into application speed, Core Web Vitals, and server-side efficiency.",
          icon: "Zap"
        }
      ]);
    }

    // 6. Seed Tech Stack
    const techCount = await Tech.countDocuments();
    if (techCount === 0) {
      await Tech.create([
        {
          title: "Frontend",
          icon: "Layout",
          description: "Building responsive and interactive user interfaces with modern frameworks.",
          skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
        },
        {
          title: "Backend",
          icon: "Server",
          description: "Developing robust server-side logic and scalable API architectures.",
          skills: ["Node.js", "Express", "Python", "GraphQL", "REST APIs"]
        },
        {
          title: "Database",
          icon: "Database",
          description: "Designing and optimizing data models for high-performance applications.",
          skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma", "Mongoose"]
        },
        {
          title: "DevOps",
          icon: "Wrench",
          description: "Streamlining deployment pipelines and managing cloud infrastructure.",
          skills: ["Docker", "AWS", "CI/CD", "Vercel", "Git"]
        }
      ]);
    }

    return NextResponse.json({ success: true, message: "Database seeded successfully" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
