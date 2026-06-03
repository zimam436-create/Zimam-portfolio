"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "//01. ABOUT", href: "#about" },
  { name: "//02. SKILLS", href: "#skills" },
  { name: "//03. PROJECTS", href: "#projects" },
  { name: "//04. CAREER", href: "#experience" },
  { name: "//05. CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" } // Triggers when element is in the top 20-40% of the screen
    );

    links.forEach((link) => {
      const el = document.getElementById(link.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-neon-blue/20 shadow-[0_0_20px_rgba(0,243,255,0.1)]" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-heading text-xl font-bold text-glow cursor-pointer">
            UZ_SYS
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-mono text-xs tracking-widest">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors relative group ${
                  activeSection === link.href.replace("#", "")
                    ? "text-neon-blue text-glow"
                    : "text-gray-400 hover:text-neon-blue"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-neon-blue transition-all shadow-[0_0_8px_#00f3ff] ${
                    activeSection === link.href.replace("#", "")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-neon-blue"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 z-30 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 font-mono text-lg md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-neon-blue text-glow font-bold"
                  : "text-gray-300 hover:text-neon-blue hover:text-glow"
              }`}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
}
