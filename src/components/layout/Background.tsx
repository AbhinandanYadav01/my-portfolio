"use client";

import { useEffect, useState } from "react";

const Background = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 768) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <div
        className="absolute inset-0 z-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(520px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.1), transparent 78%)`,
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_24%),radial-gradient(circle_at_bottom,rgba(0,0,0,0.66),transparent_30%)]" />
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none contrast-150 brightness-100"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
};

export default Background;
