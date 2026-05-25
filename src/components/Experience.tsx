"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Neural Systems Researcher",
    company: "Classified Division",
    period: "2025 - PRESENT",
    desc: "Architecting advanced neural networks and developing predictive cyber-defense models for next-generation infrastructure."
  },
  {
    role: "Cloud Infrastructure Consultant",
    company: "Enterprise Sector",
    period: "2024 - 2025",
    desc: "Designed highly available, scalable multicloud architectures utilizing advanced DevOps pipelines and container orchestration."
  },
  {
    role: "Cybersecurity Analyst",
    company: "Defense Systems Group",
    period: "2023 - 2024",
    desc: "Conducted deep penetration testing and vulnerability assessments on secure encrypted networks."
  },
  {
    role: "AI Research Intern",
    company: "Advanced Tech Labs",
    period: "2023",
    desc: "Assisted in the development of generative AI models and automation scripts for intelligence analysis."
  }
];

const certifications = [
  { name: "Oracle Cloud Data Science Professional", type: "REAL", file: "/certificates/Data Science Professional Oracle Cloud Infrastructure 2025 Certified.pdf" },
  { name: "Oracle Cloud Multicloud Architect Professional", type: "REAL", file: "/certificates/Multicloud Architect Professional Oracle Cloud Infrastructure 2025 Certified.pdf" },
  { name: "Oracle Cloud DevOps Professional", type: "REAL", file: "/certificates/DevOps Professional Oracle Cloud Infrastructure 2025 Certified.pdf" },
  { name: "Oracle Cloud Generative AI Professional", type: "REAL", file: "/certificates/Generative AI Professional Oracle Cloud Infrastructure 2025 Certified.pdf" },
  { name: "Oracle Cloud AI Foundations Associate", type: "REAL", file: "/certificates/AI Foundations Associate Oracle Cloud Infrastructure 2025 Certified.pdf" },
  { name: "Advanced Neural Systems Engineering", type: "FICTIONAL" },
  { name: "Cyber Defense Architecture", type: "FICTIONAL" },
  { name: "Quantum Infrastructure Simulation", type: "FICTIONAL" },
];

export default function Experience() {
  return (
    <section className="py-32 relative overflow-hidden" id="experience">
      <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-neon-violet/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Experience Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <Briefcase className="text-neon-blue w-8 h-8" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-glow uppercase">Career Log</h2>
            </motion.div>

            <div className="relative border-l border-neon-blue/30 ml-4 space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-black border-2 border-neon-blue shadow-[0_0_10px_#00f3ff]" />
                  
                  <div className="mb-1 text-sm font-mono text-neon-blue">{exp.period}</div>
                  <h3 className="text-xl font-heading text-white mb-1">{exp.role}</h3>
                  <div className="text-neon-violet text-sm font-mono mb-4 uppercase tracking-widest">{exp.company}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <Award className="text-neon-violet w-8 h-8" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-glow-crimson text-neon-violet uppercase text-shadow-neon-violet">Clearances & Badges</h2>
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {cert.type === 'REAL' ? (
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-panel p-4 rounded flex items-center justify-between border-l-4 border-l-neon-blue hover:bg-neon-blue/5"
                    >
                      <div className="flex items-center gap-3">
                        <ChevronRight className="text-neon-blue" size={18} />
                        <span className="text-gray-200 font-mono text-sm">{cert.name}</span>
                      </div>
                      <span className="text-[10px] text-neon-blue border border-neon-blue/30 px-2 py-0.5 rounded tracking-widest uppercase bg-neon-blue/10">
                        VIEW
                      </span>
                    </a>
                  ) : (
                    <div className="glass-panel p-4 rounded flex items-center justify-between border-l-4 border-l-neon-crimson hover:bg-neon-crimson/5">
                      <div className="flex items-center gap-3">
                        <ChevronRight className="text-neon-crimson" size={18} />
                        <span className="text-gray-200 font-mono text-sm">{cert.name}</span>
                      </div>
                      <span className="text-[10px] text-neon-crimson border border-neon-crimson/30 px-2 py-0.5 rounded tracking-widest uppercase bg-neon-crimson/10">
                        LEVEL 5
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
