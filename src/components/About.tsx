"use client";

import { motion } from "framer-motion";
import { Scan, ShieldAlert, Cpu } from "lucide-react";

export default function About() {
  return (
    <section className="py-32 relative overflow-hidden" id="about">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neon-blue/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <Scan className="text-neon-blue w-10 h-10 animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-glow uppercase">Subject File: <span className="text-white">Umar Zimam</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Holographic Profile Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 relative"
          >
            <div className="glass-panel p-2 rounded-lg aspect-[3/4] relative overflow-hidden border border-neon-blue/40 shadow-[0_0_30px_rgba(0,243,255,0.15)]">
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,243,255,0.05)_50%)] bg-[length:100%_4px] pointer-events-none z-10" />
              
              {/* Image placeholder - a glowing abstract core or portrait */}
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                {/* Profile Photo with Holo-glitch effect */}
                <div className="relative w-4/5 h-4/5 rounded-lg border border-neon-blue/40 flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-0 bg-neon-blue/20 mix-blend-overlay z-10" />
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img 
                     src="/profile.png" 
                     alt="Umar Zimam" 
                     className="w-full h-full object-cover filter contrast-125 brightness-90 grayscale-[0.3]"
                   />
                </div>
                
                <div className="absolute top-4 left-4 text-xs font-mono text-neon-blue">ID: UZ-2080</div>
                <div className="absolute bottom-4 right-4 text-xs font-mono text-neon-crimson">CLASS: ARCHITECT</div>
              </div>

              {/* HUD Elements */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-blue m-4 z-20" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-blue m-4 z-20" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-blue m-4 z-20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-blue m-4 z-20" />
            </div>
          </motion.div>

          {/* Cinematic Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 flex flex-col justify-center font-mono space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-crimson/10 border border-neon-crimson/30 text-neon-crimson rounded-full w-max text-xs uppercase tracking-widest">
              <ShieldAlert size={14} /> Security Clearance Level 5 Required
            </div>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              A rare, self-taught <span className="text-neon-blue font-bold">genius</span> obsessed with dismantling the boundaries between human intuition and machine intelligence. 
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Currently engineering the architecture of tomorrow through B.Tech in Computer Science, Umar is a visionary builder researching <span className="text-neon-violet">AI</span>, <span className="text-neon-blue">cyber defense</span>, and advanced automation systems. He doesn't just write code; he constructs digital ecosystems capable of redefining global infrastructure.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              His mission: to forge secure, intelligent, and autonomous technologies that feel like they belong in 2080.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-1">
                <span className="text-neon-blue text-sm uppercase tracking-wider">Status</span>
                <span className="text-white font-heading text-xl">Active</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-neon-blue text-sm uppercase tracking-wider">Focus</span>
                <span className="text-white font-heading text-xl">Neural AI</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-neon-blue text-sm uppercase tracking-wider">Origin</span>
                <span className="text-white font-heading text-xl">India</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-neon-blue text-sm uppercase tracking-wider">Threat Lvl</span>
                <span className="text-neon-crimson font-heading text-xl text-glow-crimson">Extreme</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
