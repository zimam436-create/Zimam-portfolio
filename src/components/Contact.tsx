"use client";

import { motion } from "framer-motion";
import { Terminal, Mail, Phone, MapPin } from "lucide-react";

const GithubIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const InstagramIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
import { useState } from "react";

export default function Contact() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "system", text: "SECURE COMMUNICATION CHANNEL ESTABLISHED." },
    { sender: "system", text: "ENTER MESSAGE OR SELECT A NODE TO TRANSMIT DATA." }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { sender: "user", text: input }]);
    setInput("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "system", text: "MESSAGE ENCRYPTED AND TRANSMITTED TO UMAR ZIMAM. AWAITING RESPONSE..." }]);
    }, 1000);
  };

  return (
    <section className="py-32 relative bg-black" id="contact">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-glow mb-4 uppercase">Contact Node</h2>
          <div className="h-1 w-24 bg-neon-blue mx-auto shadow-[0_0_10px_#00f3ff]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Terminal Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-1 rounded-md"
          >
            <div className="bg-black/80 h-full rounded flex flex-col font-mono text-sm">
              <div className="flex items-center gap-2 p-3 border-b border-neon-blue/30 bg-neon-blue/5">
                <Terminal size={16} className="text-neon-blue" />
                <span className="text-neon-blue">transmission_protocol.exe</span>
              </div>
              
              <div className="p-4 flex-1 overflow-y-auto max-h-[300px] space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-2 ${msg.sender === 'user' ? 'text-neon-violet' : 'text-neon-blue'}`}>
                      {msg.sender === 'system' ? '> ' : ''}{msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSend} className="p-4 border-t border-neon-blue/30 flex gap-4">
                <span className="text-neon-blue font-bold">{">"}</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-transparent border-none outline-none flex-1 text-white"
                  placeholder="TYPE MESSAGE..."
                />
                <button type="submit" className="text-neon-blue hover:text-white transition-colors">
                  [SEND]
                </button>
              </form>
            </div>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 justify-center"
          >
            <h3 className="text-2xl font-heading text-neon-blue mb-4">IDENTIFICATION DATA</h3>
            
            <div className="space-y-4 font-mono">
              <a href="mailto:zimam436@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-all p-4 border border-transparent hover:border-neon-blue/30 bg-white/5 rounded cyber-button">
                <Mail className="text-neon-blue" />
                <span>zimam436@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-gray-300 p-4 border border-transparent bg-white/5 rounded">
                <Phone className="text-neon-blue" />
                <span>+91 7380718077</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 p-4 border border-transparent bg-white/5 rounded">
                <MapPin className="text-neon-blue" />
                <span>Sultanpur, Uttar Pradesh, India</span>
              </div>
            </div>

            <h3 className="text-2xl font-heading text-neon-violet mt-6 mb-4">DIGITAL FOOTPRINT</h3>
            
            <div className="flex gap-4">
              <a href="https://github.com/zimam436-create" target="_blank" rel="noreferrer" className="p-4 border border-neon-violet/30 rounded text-neon-violet hover:bg-neon-violet/10 hover:shadow-[0_0_15px_#bc13fe] transition-all">
                <GithubIcon size={24} />
              </a>
              <a href="https://www.linkedin.com/in/umar-zimam-148402376/" target="_blank" rel="noreferrer" className="p-4 border border-neon-blue/30 rounded text-neon-blue hover:bg-neon-blue/10 hover:shadow-[0_0_15px_#00f3ff] transition-all">
                <LinkedinIcon size={24} />
              </a>
              <a href="https://www.instagram.com/zimam_114/" target="_blank" rel="noreferrer" className="p-4 border border-neon-crimson/30 rounded text-neon-crimson hover:bg-neon-crimson/10 hover:shadow-[0_0_15px_#ff003c] transition-all">
                <InstagramIcon size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
