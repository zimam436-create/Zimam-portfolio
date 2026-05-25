"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isFinished, setIsFinished] = useState(false);

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
          setIsFinished(true);
          setTimeout(onComplete, 800); // Wait for exit animation
        }, 500);
      }
    }, 400);

    return () => clearInterval(logInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-neon-blue font-mono p-6"
        >
          <div className="w-full max-w-3xl">
            <div className="mb-8 space-y-2 text-sm md:text-base text-glow">
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
      )}
    </AnimatePresence>
  );
}
