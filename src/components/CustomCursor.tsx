"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface GlitterParticle {
  id: number;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  color: string;
  size: number;
}

const NEON_COLORS = ["#00f3ff", "#bc13fe", "#ff003c", "#ffffff"];

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<GlitterParticle[]>([]);
  
  // Real-time cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Quick spring for the main cursor dot
  const springConfig = { damping: 25, stiffness: 600, mass: 0.1 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    
    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      
      // Spawn neon glitter particles
      const newParticles: GlitterParticle[] = Array.from({ length: 12 }).map((_, i) => {
        const angle = (Math.random() * Math.PI * 2); // Random angle
        const velocity = Math.random() * 80 + 30; // Random distance (30px to 110px)
        return {
          id: Date.now() + i,
          startX: e.clientX,
          startY: e.clientY,
          targetX: e.clientX + Math.cos(angle) * velocity,
          targetY: e.clientY + Math.sin(angle) * velocity + 20, // Add slight gravity to Y
          color: NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)],
          size: Math.random() * 4 + 2, // 2px to 6px
        };
      });
      
      setParticles((prev) => [...prev, ...newParticles]);
      
      // Cleanup particles after animation finishes (800ms)
      setTimeout(() => {
        const idsToRemove = newParticles.map(p => p.id);
        setParticles((prev) => prev.filter((p) => !idsToRemove.includes(p.id)));
      }, 800);
    };
    
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!mounted) return null;

  return (
    <>
      {/* Sleek Neon Ring Cursor */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.8 : 1,
        }}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-neon-blue rounded-full pointer-events-none z-[10000] mix-blend-screen transition-transform duration-75 flex items-center justify-center shadow-[0_0_15px_#00f3ff,inset_0_0_5px_#00f3ff]"
        transformTemplate={(_, generated) => `translate(-50%, -50%) ${generated}`}
      >
        <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#ffffff]" />
      </motion.div>

      {/* Glitter particles spawned on click */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ 
            opacity: 1, 
            scale: 1, 
            x: p.startX, 
            y: p.startY 
          }}
          animate={{ 
            opacity: 0, 
            scale: 0, 
            x: p.targetX, 
            y: p.targetY,
            rotate: Math.random() * 360 // Spin the glitter
          }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut" 
          }}
          style={{
            backgroundColor: p.color,
            width: p.size,
            height: p.size,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
          transformTemplate={(_, generated) => `translate(-50%, -50%) ${generated}`}
        />
      ))}
    </>
  );
}
