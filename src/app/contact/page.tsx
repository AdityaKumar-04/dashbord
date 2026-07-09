"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";
import Pagetitle from "@/components/Pagetitle";
import { Mail, Send, AlertCircle, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      if (formData.email.includes("error")) {
        setStatus("error");
      } else {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-8 w-full relative z-10 min-h-screen py-4 pb-20">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-2"
      >
        <Pagetitle
          title="Contact"
          className="tracking-tight text-3xl font-bold text-white mb-1"
        />
        <p className="text-slate-400 text-sm max-w-2xl">
          Get in touch with me for freelance opportunities, consulting, or just to say hi.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="show"
        className="max-w-2xl w-full"
      >
        <div className="p-6 sm:p-8 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Mail className="text-cyan-400 w-5 h-5" /> Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-medium text-slate-400 uppercase tracking-wider">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-medium text-slate-400 uppercase tracking-wider">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs font-medium text-slate-400 uppercase tracking-wider">Subject</label>
              <input
                id="subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                placeholder="How can I help you?"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-medium text-slate-400 uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                placeholder="Write your message here..."
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div>
                {status === "success" && (
                  <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-emerald-400 text-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Message sent successfully!
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-rose-400 text-sm flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" /> Failed to send message.
                  </motion.p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex items-center gap-2 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors ml-auto"
              >
                {status === "loading" ? "Sending..." : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
