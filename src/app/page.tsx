"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BootSequence from "@/components/BootSequence";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <main className="bg-transparent min-h-screen z-10 relative">
      <AnimatePresence>
        {!booted && <BootSequence key="boot" onComplete={() => setBooted(true)} />}
      </AnimatePresence>
      
      {booted && (
        <motion.div key="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </motion.div>
      )}
    </main>
  );
}
