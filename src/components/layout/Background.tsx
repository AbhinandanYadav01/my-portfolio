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
          background: `radial-gradient(480px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 244, 228, 0.34), transparent 76%)`,
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(103,76,51,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(103,76,51,0.18) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(255,246,233,0.7),transparent_24%),radial-gradient(circle_at_15%_20%,rgba(178,123,75,0.2),transparent_20%),radial-gradient(circle_at_bottom,rgba(34,24,18,0.74),transparent_32%)]" />
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
