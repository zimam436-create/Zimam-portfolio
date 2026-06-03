"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const bootLogs = [
  "INITIALIZING AI CORE...",
  "LOADING NEURAL NETWORK MODULES...",
  "ESTABLISHING SECURE CONNECTION...",
  "BYPASSING FIREWALL PROXY...",
  "ACCESS GRANTED.",
  "SYSTEM ONLINE.",
  "WELCOME, UMAR ZIMAM."
];

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentLog = 0;
    
    const logInterval = setInterval(() => {
      if (currentLog < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentLog]]);
        setProgress(Math.floor(((currentLog + 1) / bootLogs.length) * 100));
        currentLog++;
      } else {
        clearInterval(logInterval);
        setTimeout(() => {
          onComplete(); // Trigger exit immediately so layout transition works
        }, 500);
      }
    }, 400);

    return () => clearInterval(logInterval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-neon-blue font-mono p-6"
    >
      <div className="w-full max-w-3xl flex flex-col items-center">
        <motion.img 
          layoutId="site-logo" 
          src="/logo.png" 
          alt="Umar Zimam Logo" 
          className="w-32 h-32 md:w-40 md:h-40 mb-10 rounded-full shadow-[0_0_30px_rgba(0,243,255,0.4)]"
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <div className="w-full mb-8 space-y-2 text-sm md:text-base text-glow">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <span className="text-neon-crimson">{">"}</span> {log}
            </motion.div>
          ))}
          {logs.length < bootLogs.length && (
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="h-5 w-3 bg-neon-blue inline-block ml-2 align-middle"
            />
          )}
        </div>
        
        <div className="w-full h-1 bg-dark-surface rounded-full overflow-hidden border border-neon-blue/20">
          <motion.div
            className="h-full bg-neon-blue shadow-[0_0_10px_#00f3ff]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <div className="mt-2 text-right text-xs text-neon-blue/70">
          {progress}% / 100%
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none scanlines" />
    </motion.div>
  );
}
