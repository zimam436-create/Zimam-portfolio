"use client";

import { motion } from "framer-motion";
import { Database, Layout, Server, Shield, Brain, Workflow, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Core Programming & Logic",
    icon: <CodeIcon />,
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 95 },
      { name: "C", level: 85 },
      { name: "Data Structures & Alg", level: 92 },
      { name: "System Design", level: 88 }
    ]
  },
  {
    title: "Web & Full Stack",
    icon: <Layout className="w-5 h-5 text-neon-violet" />,
    skills: [
      { name: "JavaScript/TypeScript", level: 94 },
      { name: "React & Next.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "HTML5/CSS3", level: 98 },
      { name: "MongoDB & SQL", level: 88 }
    ]
  },
  {
    title: "Cyber Intelligence & Defense",
    icon: <Shield className="w-5 h-5 text-neon-crimson" />,
    skills: [
      { name: "Cybersecurity", level: 92 },
      { name: "Penetration Testing", level: 85 },
      { name: "Ethical Hacking", level: 88 },
      { name: "Encryption Systems", level: 95 },
      { name: "Linux Systems", level: 90 }
    ]
  },
  {
    title: "Neural & Futuristic Systems",
    icon: <Brain className="w-5 h-5 text-neon-blue" />,
    skills: [
      { name: "AI Engineering", level: 96 },
      { name: "Machine Learning", level: 90 },
      { name: "Neural Networks", level: 88 },
      { name: "Generative AI", level: 95 },
      { name: "Quantum Computing (Sim)", level: 75 }
    ]
  },
  {
    title: "Infrastructure & Automation",
    icon: <Server className="w-5 h-5 text-neon-blue" />,
    skills: [
      { name: "Cloud Computing", level: 92 },
      { name: "DevOps & Docker", level: 88 },
      { name: "Kubernetes", level: 82 },
      { name: "Automation Systems", level: 94 },
      { name: "Autonomous Systems", level: 85 }
    ]
  }
];

function CodeIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-blue"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
}

export default function Skills() {
  return (
    <section className="py-32 relative bg-transparent" id="skills">
      {/* Background Matrix/Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-2">
            <Zap className="text-neon-violet" />
            <span className="font-mono text-neon-violet tracking-widest text-sm uppercase">Capability Matrix</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">Neural <span className="text-glow">Skillset</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 rounded-lg relative overflow-hidden group"
            >
              {/* Hover sweep effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="p-2 bg-white/5 rounded border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                  {category.icon}
                </div>
                <h3 className="text-xl font-heading text-gray-200">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between font-mono text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-neon-blue">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-dark-surface rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1) }}
                        className={`h-full relative ${
                          category.title.includes("Cyber") ? "bg-neon-crimson shadow-[0_0_8px_#ff003c]" 
                          : category.title.includes("Web") ? "bg-neon-violet shadow-[0_0_8px_#bc13fe]"
                          : "bg-neon-blue shadow-[0_0_8px_#00f3ff]"
                        }`}
                      >
                        <div className="absolute right-0 top-0 h-full w-2 bg-white blur-[2px]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          
          {/* Live System Analytics Widget */}
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="glass-panel p-6 rounded-lg border-neon-blue/50 flex flex-col justify-center items-center font-mono text-center relative overflow-hidden"
          >
             <div className="absolute top-2 left-2 flex gap-1">
               <div className="w-2 h-2 rounded-full bg-neon-crimson animate-pulse" />
               <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse delay-75" />
             </div>
             <Workflow className="w-16 h-16 text-neon-blue/50 mb-4" />
             <h3 className="text-lg text-neon-blue mb-2">SYSTEM ARCHITECTURE OPTIMIZED</h3>
             <p className="text-gray-400 text-sm max-w-xs">All neural pathways and logical constructs are currently functioning at peak efficiency.</p>
             <div className="mt-4 px-4 py-2 border border-neon-blue/30 text-neon-blue text-xs rounded animate-pulse">
               UPTIME: 99.999%
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
