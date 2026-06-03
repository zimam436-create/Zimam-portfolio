"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NeonLine {
  id: number;
  x: number;
  height: number;
  delay: number;
  duration: number;
  color: string;
  opacity: number;
  width: number;
}

const NEON_COLORS = [
  "#00f3ff", // neon-blue
  "#bc13fe", // neon-violet
  "#ff003c", // neon-crimson
  "#00f3ff",
  "#00f3ff", // Weight toward blue
  "#bc13fe",
];

export default function CosmicBackground() {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);
  const [neonLines, setNeonLines] = useState<NeonLine[]>([]);

  useEffect(() => {
    // Generate static stars
    const generatedStars = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setStars(generatedStars);

    // Generate neon rain lines (reduced count for performance)
    const generatedLines: NeonLine[] = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      height: Math.random() * 120 + 30,
      delay: Math.random() * 8,
      duration: Math.random() * 4 + 3,
      color: NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)],
      opacity: Math.random() * 0.3 + 0.1,
      width: Math.random() * 1.5 + 0.5,
    }));
    setNeonLines(generatedLines);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-black">
      {/* Deep cosmic gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/10 via-black to-black opacity-60" />
      
      {/* Starfield with pure CSS animation for performance */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            animation: `star-twinkle ${star.duration}s infinite ease-in-out`,
          }}
        />
      ))}

      {/* Neon Rain Lines with pure CSS animation for performance */}
      {neonLines.map((line) => (
        <div
          key={`neon-${line.id}`}
          className="absolute rounded-full"
          style={{
            left: `${line.x}%`,
            top: "-10%",
            width: line.width,
            height: line.height,
            background: `linear-gradient(to bottom, transparent, ${line.color}, transparent)`,
            boxShadow: `0 0 6px ${line.color}, 0 0 12px ${line.color}`,
            opacity: line.opacity,
            animation: `neon-fall ${line.duration}s infinite linear ${line.delay}s`,
          }}
        />
      ))}

      {/* Global Glitch Effect Overlay */}
      <motion.div
        className="absolute inset-0 mix-blend-overlay opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        animate={{
          x: ["0%", "-1%", "1%", "0%"],
          y: ["0%", "1%", "-1%", "0%"],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
          repeatDelay: 8,
        }}
      />
      
      {/* Subtle chromatic aberration scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-[-1]" />
    </div>
  );
}
