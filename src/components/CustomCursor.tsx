"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  // High-performance motion values for cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth out the movement with springs
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  
  // Delayed spring for the trailing effect
  const trailSpringConfig = { damping: 30, stiffness: 200, mass: 0.8 };
  const trailX = useSpring(cursorX, trailSpringConfig);
  const trailY = useSpring(cursorY, trailSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window === "undefined") return null;

  return (
    <>
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isVisible ? 1 : 0,
        }}
        className="fixed top-0 left-0 w-4 h-4 bg-neon-blue rounded-full pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_15px_#00f3ff]"
        transformTemplate={(_, generated) => `translate(-50%, -50%) ${generated}`}
      />
      <motion.div
        style={{
          x: trailX,
          y: trailY,
          opacity: isVisible ? 0.5 : 0,
        }}
        className="fixed top-0 left-0 w-10 h-10 border border-neon-violet rounded-full pointer-events-none z-[9998] mix-blend-screen shadow-[0_0_20px_#bc13fe]"
        transformTemplate={(_, generated) => `translate(-50%, -50%) ${generated}`}
      />
    </>
  );
}
