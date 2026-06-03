"use client";

import { motion } from "framer-motion";
import { Terminal, Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, MessageCircle } from "lucide-react";

const GithubIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const InstagramIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const WhatsappIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/mgoqglve", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-32 relative" id="contact">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-glow mb-4 uppercase">Contact Node</h2>
          <p className="text-gray-400 font-mono text-sm mt-4 uppercase tracking-widest">Establish a secure connection</p>
          <div className="h-1 w-24 bg-neon-blue mx-auto mt-4 shadow-[0_0_10px_#00f3ff]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Transmission Form */}
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
                <div className="ml-auto flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-neon-crimson" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-5 flex-1">
                {/* Name */}
                <div>
                  <label className="text-neon-blue text-xs uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <span className="text-neon-crimson">{">"}</span> Sender ID
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name..."
                    className="w-full bg-white/5 border border-neon-blue/20 rounded px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,243,255,0.3)] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-neon-blue text-xs uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <span className="text-neon-crimson">{">"}</span> Return Channel
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email..."
                    className="w-full bg-white/5 border border-neon-blue/20 rounded px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,243,255,0.3)] transition-all"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="text-neon-blue text-xs uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <span className="text-neon-crimson">{">"}</span> Subject Protocol
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Enter subject..."
                    className="w-full bg-white/5 border border-neon-blue/20 rounded px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,243,255,0.3)] transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-neon-blue text-xs uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <span className="text-neon-crimson">{">"}</span> Encrypted Payload
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Type your message..."
                    className="w-full bg-white/5 border border-neon-blue/20 rounded px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,243,255,0.3)] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 border border-neon-blue text-neon-blue font-mono uppercase tracking-widest text-sm hover:bg-neon-blue/10 hover:shadow-[0_0_25px_rgba(0,243,255,0.4)] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed rounded"
                >
                  {status === "sending" ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-4 h-4 border-2 border-neon-blue border-t-transparent rounded-full"
                      />
                      ENCRYPTING & TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> TRANSMIT MESSAGE
                    </>
                  )}
                </button>

                {/* Status Feedback */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 text-xs p-3 bg-green-400/10 border border-green-400/30 rounded"
                  >
                    <CheckCircle size={16} />
                    MESSAGE TRANSMITTED SUCCESSFULLY. UMAR ZIMAM WILL RESPOND SHORTLY.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-neon-crimson text-xs p-3 bg-neon-crimson/10 border border-neon-crimson/30 rounded"
                  >
                    <AlertCircle size={16} />
                    TRANSMISSION FAILED. TRY AGAIN OR USE ALTERNATE CHANNEL.
                  </motion.div>
                )}
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
              <a href="https://wa.me/917380718077" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition-all p-4 border border-transparent hover:border-green-400/30 bg-white/5 rounded cyber-button">
                <span className="text-green-400"><WhatsappIcon size={24} /></span>
                <span>WhatsApp — +91 7380718077</span>
              </a>
              <a href="tel:+917380718077" className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-all p-4 border border-transparent hover:border-neon-blue/30 bg-white/5 rounded cyber-button">
                <Phone className="text-neon-blue" />
                <span>+91 7380718077</span>
              </a>
              <a href="https://www.google.com/maps/dir/?api=1&destination=Sultanpur,+Uttar+Pradesh,+India" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-all p-4 border border-transparent hover:border-neon-blue/30 bg-white/5 rounded cyber-button">
                <MapPin className="text-neon-blue" />
                <span>Sultanpur, Uttar Pradesh, India</span>
              </a>
              <a href="https://whatsapp.com/channel/0029VbDHi7iKGGGOxv131r1k" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition-all p-4 border border-transparent hover:border-green-400/30 bg-white/5 rounded cyber-button">
                <span className="text-green-400"><WhatsappIcon size={24} /></span>
                <span>WhatsApp Channel — X-celerate with Zimam</span>
              </a>
            </div>

            <h3 className="text-2xl font-heading text-neon-violet mt-6 mb-4">DIGITAL FOOTPRINT</h3>
            
            <div className="flex gap-4 flex-wrap">
              <a href="https://github.com/zimam436-create" target="_blank" rel="noreferrer" className="p-4 border border-neon-violet/30 rounded text-neon-violet hover:bg-neon-violet/10 hover:shadow-[0_0_15px_#bc13fe] transition-all">
                <GithubIcon size={24} />
              </a>
              <a href="https://www.linkedin.com/in/umar-zimam-148402376/" target="_blank" rel="noreferrer" className="p-4 border border-neon-blue/30 rounded text-neon-blue hover:bg-neon-blue/10 hover:shadow-[0_0_15px_#00f3ff] transition-all">
                <LinkedinIcon size={24} />
              </a>
              <a href="https://www.instagram.com/zimam_114/" target="_blank" rel="noreferrer" className="p-4 border border-neon-crimson/30 rounded text-neon-crimson hover:bg-neon-crimson/10 hover:shadow-[0_0_15px_#ff003c] transition-all">
                <InstagramIcon size={24} />
              </a>
              <a href="https://wa.me/917380718077" target="_blank" rel="noreferrer" className="p-4 border border-green-400/30 rounded text-green-400 hover:bg-green-400/10 hover:shadow-[0_0_15px_rgba(74,222,128,0.5)] transition-all">
                <MessageCircle size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
