"use client";

import { Navbar } from "@/components/ui/navbar";
import { FooterSection } from "@/components/ui/footer-section";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const TASK_TYPES = [
  "Reel Creation Tasks",
  "Blog Writing Tasks",
  "Promotion Tasks",
  "Affiliate Tasks",
  "Social Share Tasks",
];

const ASSIGNMENT_CRITERIA = [
  { label: "Creator Skill", desc: "Tasks are matched based on your demonstrated abilities in a content category." },
  { label: "Past Performance", desc: "Your task history and approval rate influence which tasks are made available to you." },
  { label: "Task Availability", desc: "Available tasks depend on current active campaigns and brand requirements." },
  { label: "Brand Requirements", desc: "Specific brands may define criteria for the type of creator they work with." },
];

const VERIFICATION_CHECKS = [
  { label: "Originality", desc: "Submitted content must be original and not copied from other sources." },
  { label: "Quality", desc: "The work must meet the quality standard defined in the task brief." },
  { label: "Completion Accuracy", desc: "The task must be completed as described â€” partial work will not be approved." },
  { label: "Engagement (if applicable)", desc: "For performance-based tasks, engagement metrics may be tracked." },
];

const PAYMENT_MODELS = [
  { label: "Fixed Per Task", desc: "A pre-defined amount paid on successful verification." },
  { label: "Performance-Based", desc: "Earnings are tied to views, clicks, or conversions generated." },
  { label: "Bonus-Based for Top Creators", desc: "Outstanding work may qualify for additional bonuses beyond the base task payment." },
];

export default function TasksPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 border-b border-white/5">
        <div aria-hidden className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-4">Task System</p>
          <h1 className="text-5xl md:text-6xl font-black font-heading tracking-tighter text-white mb-5">
            How Tasks Work
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every task on Earnetix is structured, assigned based on your profile, verified for quality, and paid fairly.
          </p>
        </div>
      </section>

      {/* Task Types */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">Available Task Types</p>
          <h2 className="text-2xl font-black font-heading tracking-tight text-white mb-8">Five Categories of Tasks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TASK_TYPES.map((type, i) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/5 border border-white/8 hover:border-indigo-500/25 hover:bg-indigo-500/5 transition-all"
              >
                <span className="text-2xl font-black text-indigo-500/30 font-heading w-6 flex-shrink-0 text-center">{i + 1}</span>
                <span className="text-sm font-semibold text-slate-200">{type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Task Assignment */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">Assignment Logic</p>
          <h2 className="text-2xl font-black font-heading tracking-tight text-white mb-8">How Tasks Are Assigned to Creators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ASSIGNMENT_CRITERIA.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/8"
              >
                <ChevronRight className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-sm mb-1">{c.label}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Task Verification */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-3">Quality Control</p>
          <h2 className="text-2xl font-black font-heading tracking-tight text-white mb-4">Task Verification</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-2xl">
            Earnetix verifies every submission to ensure authenticity and quality. Verification exists to protect creators and brands alike â€” ensuring fair pay for genuine work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VERIFICATION_CHECKS.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-5 rounded-2xl bg-white/5 border border-white/8"
              >
                <h3 className="text-yellow-400 font-bold text-sm mb-2">{v.label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Models */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-3">Payment Structure</p>
          <h2 className="text-2xl font-black font-heading tracking-tight text-white mb-8">Task Payment Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PAYMENT_MODELS.map((pm, i) => (
              <motion.div
                key={pm.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/8 hover:border-violet-500/25 transition-colors"
              >
                <h3 className="text-white font-bold font-heading mb-3">{pm.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pm.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-8"><FooterSection /></div>
    </div>
  );
}

