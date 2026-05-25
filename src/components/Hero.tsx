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
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 tracking-tighter text-glow">
            UMAR ZIMAM
          </h1>
          
          <div className="h-12 md:h-16 flex items-center justify-center">
            <motion.p
              key={titleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-xl md:text-3xl text-neon-violet font-mono tracking-wide"
            >
              {titles[titleIndex]}
            </motion.p>
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
