"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Cpu, Download } from "lucide-react";
import { useEffect, useState } from "react";

const titles = [
  "AI Engineer",
  "Cybersecurity Specialist",
  "Neural Systems Architect",
  "Quantum Tech Explorer",
  "Futuristic Software Engineer",
  "Automation Architect"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grids */}
      <div className="absolute inset-0 bg-grid-cyber opacity-20" />
      <div className="absolute inset-0 bg-grid-radial opacity-60" />
      
      {/* 3D abstract object placeholder or dynamic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/10 backdrop-blur-sm text-neon-blue text-sm font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(0,243,255,0.2)]">
            Neural Link Established
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 tracking-tighter text-glow flex justify-center space-x-2">
            {"UMAR ZIMAM".split(" ").map((word, wIdx) => (
              <span key={wIdx} className="flex">
                {word.split("").map((char, cIdx) => (
                  <motion.span
                    key={`${wIdx}-${cIdx}`}
                    initial={{ opacity: 0, x: -5, filter: "blur(4px)" }}
                    animate={{ 
                      opacity: [0, 1, 0.2, 1, 0.5, 1], 
                      x: [-5, 2, -2, 3, -1, 0],
                      filter: ["blur(4px)", "blur(0px)", "blur(2px)", "blur(0px)"],
                      color: ["#ffffff", "#00f3ff", "#bc13fe", "#ff003c", "#ffffff"]
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.5 + (wIdx * 5 + cIdx) * 0.12,
                      ease: "linear"
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
          
          <div className="h-24 md:h-32 flex items-center justify-center" style={{ perspective: 1000 }}>
            <motion.div
              key={titleIndex}
              initial={{ opacity: 0, rotateX: 90, rotateY: 15, scale: 0.8, filter: "blur(10px) hue-rotate(90deg)" }}
              animate={{ 
                opacity: 1, 
                rotateX: 0, 
                rotateY: 0,
                scale: 1,
                filter: ["blur(10px) hue-rotate(90deg)", "blur(0px) hue-rotate(0deg)", "blur(2px) contrast(150%)", "blur(0px)"]
              }}
              exit={{ opacity: 0, rotateX: -90, rotateY: -15, scale: 0.8, filter: "blur(10px) hue-rotate(-90deg)" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              className="relative px-8 md:px-12 py-4 bg-neon-crimson/5 border border-neon-crimson/50 rounded shadow-[0_0_20px_rgba(255,0,60,0.3),inset_0_0_15px_rgba(255,0,60,0.1)] backdrop-blur-md overflow-hidden group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(255,0,60,0.1)_3px,rgba(255,0,60,0.1)_3px)] group-hover:animate-[scanline_2s_infinite] pointer-events-none opacity-60" />
              
              <motion.h2 
                className="text-xl md:text-3xl font-mono tracking-widest font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-crimson via-white to-neon-violet uppercase text-center relative"
                style={{ filter: "drop-shadow(0 0 10px rgba(255,0,60,0.8))", transform: "translateZ(30px)" }}
                animate={{ x: [-2, 2, -1, 1, 0], y: [1, -1, 1, -1, 0] }}
                transition={{ duration: 0.2, repeat: 2, delay: 0.15 }}
              >
                {titles[titleIndex]}
                
                {/* Chromatic aberration layers */}
                <motion.span 
                  className="absolute inset-0 text-neon-blue opacity-70 mix-blend-screen pointer-events-none"
                  animate={{ x: [-5, 5, -3, 0], opacity: [0, 0.9, 0.3, 0] }}
                  transition={{ duration: 0.25, repeat: 2, delay: 0.1 }}
                  style={{ zIndex: -1, textShadow: "none" }}
                >
                  {titles[titleIndex]}
                </motion.span>
                <motion.span 
                  className="absolute inset-0 text-neon-violet opacity-70 mix-blend-screen pointer-events-none"
                  animate={{ x: [5, -5, 3, 0], opacity: [0, 0.9, 0.3, 0] }}
                  transition={{ duration: 0.25, repeat: 2, delay: 0.1 }}
                  style={{ zIndex: -2, textShadow: "none" }}
                >
                  {titles[titleIndex]}
                </motion.span>
              </motion.h2>

              {/* Cyberpunk corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-crimson shadow-[0_0_8px_#ff003c]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-crimson shadow-[0_0_8px_#ff003c]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-crimson shadow-[0_0_8px_#ff003c]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-crimson shadow-[0_0_8px_#ff003c]" />
            </motion.div>
          </div>
          
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Engineering intelligent systems for the cybernetic future.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="cyber-button px-8 py-4 bg-transparent border border-neon-blue text-neon-blue font-mono uppercase tracking-widest text-sm hover:text-white hover:border-white hover:shadow-[0_0_20px_#00f3ff] transition-all flex items-center gap-2">
              <Terminal size={18} /> Enter the System
            </button>
            <a href="#projects" className="cyber-button px-8 py-4 bg-transparent border border-neon-violet text-neon-violet font-mono uppercase tracking-widest text-sm hover:text-white hover:border-white hover:shadow-[0_0_20px_#bc13fe] transition-all flex items-center gap-2">
              <Code size={18} /> View Projects
            </a>
            <a href="/cv.pdf" target="_blank" className="cyber-button px-8 py-4 bg-transparent border border-neon-crimson text-neon-crimson font-mono uppercase tracking-widest text-sm hover:text-white hover:border-white hover:shadow-[0_0_20px_#ff003c] transition-all flex items-center gap-2">
              <Download size={18} /> Download CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* Futuristic decorative elements */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="flex flex-col gap-2 font-mono text-xs text-neon-blue/50">
          <span>SYS.STAT: OPTIMAL</span>
          <span>MEM: 64TB / 128TB</span>
          <span>NET: SECURE</span>
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 hidden md:block animate-spin-slow">
        <Cpu className="text-neon-blue/30 w-12 h-12" />
      </div>
    </section>
  );
}
