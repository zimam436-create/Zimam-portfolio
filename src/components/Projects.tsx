"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, ShieldCheck, Activity, Cpu, Eye, Lock, Globe } from "lucide-react";

const projects = [
  {
    title: "MILITARY-GRADE ENCRYPTED MESSENGER",
    description: "A hyper-secure encrypted communication platform inspired by defense-grade cyber infrastructure with advanced privacy architecture and real-time secure transmission protocols.",
    tech: ["Python", "Cryptography", "Socket"],
    status: "ACTIVE",
    icon: <Lock className="w-6 h-6" />,
    color: "neon-crimson"
  },
  {
    title: "AI-POWERED STUDENT MANAGEMENT SYSTEM",
    description: "An intelligent educational data ecosystem capable of predictive analysis, automated record management, and smart academic optimization.",
    tech: ["Python", "SQL", "Machine Learning"],
    status: "DEPLOYED",
    icon: <Activity className="w-6 h-6" />,
    color: "neon-blue"
  },
  {
    title: "NEXT-GEN PET ADOPTION PLATFORM",
    description: "A futuristic responsive adoption ecosystem powered by intelligent recommendation systems and emotional UI/UX interaction design.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    status: "ONLINE",
    icon: <Globe className="w-6 h-6" />,
    color: "neon-violet"
  },
  {
    title: "AI SURVEILLANCE DETECTION SYSTEM",
    description: "Autonomous real-time threat detection utilizing advanced computer vision and neural networking to identify anomalies in secure sectors.",
    tech: ["OpenCV", "TensorFlow", "C++"],
    status: "CLASSIFIED",
    icon: <Eye className="w-6 h-6" />,
    color: "neon-crimson"
  },
  {
    title: "AUTONOMOUS DRONE MONITORING DASHBOARD",
    description: "Live telemetry and spatial mapping interface for swarms of autonomous drones, featuring 3D route prediction.",
    tech: ["React", "Three.js", "WebSockets"],
    status: "BETA",
    icon: <Activity className="w-6 h-6" />,
    color: "neon-blue"
  },
  {
    title: "QUANTUM ENCRYPTION TOOLKIT",
    description: "Experimental cryptographic library simulating quantum key distribution algorithms for post-quantum defense.",
    tech: ["Rust", "Python", "Math"],
    status: "PROTOTYPE",
    icon: <Cpu className="w-6 h-6" />,
    color: "neon-violet"
  }
];

export default function Projects() {
  return (
    <section className="py-32 relative bg-transparent" id="projects">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-neon-blue pl-6"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-wider">
            Operational <span className="text-glow">Archives</span>
          </h2>
          <p className="text-gray-400 font-mono mt-2 text-sm uppercase tracking-widest">Select project for telemetry data</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass-panel rounded-xl p-6 relative overflow-hidden group border-t-2 ${
                project.color === 'neon-crimson' ? 'border-t-neon-crimson hover:shadow-[0_0_30px_rgba(255,0,60,0.2)]' 
                : project.color === 'neon-violet' ? 'border-t-neon-violet hover:shadow-[0_0_30px_rgba(188,19,254,0.2)]'
                : 'border-t-neon-blue hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]'
              }`}
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] pointer-events-none transition-opacity opacity-20 group-hover:opacity-50 ${
                project.color === 'neon-crimson' ? 'bg-neon-crimson' 
                : project.color === 'neon-violet' ? 'bg-neon-violet'
                : 'bg-neon-blue'
              }`} />

              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-lg bg-black/50 border ${
                  project.color === 'neon-crimson' ? 'border-neon-crimson/30 text-neon-crimson' 
                  : project.color === 'neon-violet' ? 'border-neon-violet/30 text-neon-violet'
                  : 'border-neon-blue/30 text-neon-blue'
                }`}>
                  {project.icon}
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FolderGit2 size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-glow transition-all">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed min-h-[80px]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-gray-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 w-full p-4 border-t border-white/5 bg-black/40 flex justify-between items-center font-mono text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className={project.status === 'CLASSIFIED' ? 'text-neon-crimson' : 'text-neon-blue'} />
                  <span className={project.status === 'CLASSIFIED' ? 'text-neon-crimson' : 'text-gray-400'}>
                    SYS: {project.status}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                    project.color === 'neon-crimson' ? 'bg-neon-crimson' 
                    : project.color === 'neon-violet' ? 'bg-neon-violet'
                    : 'bg-neon-blue'
                  }`} />
                  LIVE
                </div>
              </div>
              
              {/* Padding for absolute bottom bar */}
              <div className="h-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
