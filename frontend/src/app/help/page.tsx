"use client";

import { Navbar } from "@/components/ui/navbar";
import { FooterSection } from "@/components/ui/footer-section";
import { motion } from "framer-motion";
import { Mail, HelpCircle, FileText, MessageSquare, ChevronRight, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const HELP_TOPICS = [
  { icon: HelpCircle, title: "Platform Questions", desc: "Questions about how Earnetix works, task types, or the creator dashboard.", href: "/faq" },
  { icon: FileText, title: "Task & Earning Queries", desc: "Issues with task assignments, submission verification, or payment credits.", href: "/tasks" },
  { icon: MessageSquare, title: "General Contact", desc: "Any other enquiries, feedback, or partnership requests.", href: "#contact-form" },
];

export default function HelpPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would call an API endpoint
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 border-b border-white/5">
        <div aria-hidden className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Support</p>
          <h1 className="text-5xl md:text-6xl font-black font-heading tracking-tighter text-white mb-5">Help & Contact</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Have a question or need support? Browse our help topics or send us a message.
          </p>
        </div>
      </section>

      {/* Help topics */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Browse by Topic</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {HELP_TOPICS.map((topic, i) => (
              <motion.a
                key={topic.title}
                href={topic.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/8 hover:border-indigo-500/25 hover:bg-indigo-500/3 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                  <topic.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold font-heading mb-2 flex items-center gap-2">
                    {topic.title}
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{topic.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact form */}
          <div id="contact-form">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Send a Message</p>
            {submitted ? (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center text-center p-16 rounded-3xl bg-emerald-500/5 border border-emerald-500/20"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-black font-heading text-white mb-2">Message Sent</h3>
                <p className="text-slate-400">We'll get back to you as soon as possible. Check our <a href="/faq" className="text-indigo-400 hover:underline">FAQ</a> for quick answers.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. John Creator"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="What is your query about?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Describe your question or issue in detail..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
                  />
                </div>
                <div className="md:col-span-2 flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-xs text-slate-600">We aim to respond within 1–2 business days.</p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all hover:scale-105 shadow-xl shadow-indigo-600/20"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Email fallback */}
          <div className="mt-12 flex items-center gap-4 p-6 rounded-2xl bg-white/3 border border-white/5">
            <Mail className="w-5 h-5 text-slate-500 flex-shrink-0" />
            <div>
              <p className="text-white font-bold text-sm">Prefer to email directly?</p>
              <p className="text-slate-500 text-xs mt-0.5">Reach us at <a href="mailto:support@earnetix.com" className="text-indigo-400 hover:underline">support@earnetix.com</a></p>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-8"><FooterSection /></div>
    </div>
  );
}
