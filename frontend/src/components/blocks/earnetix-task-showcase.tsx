"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, FileText, Share2, Users, ArrowRight, CheckCircle2, Clock, Wallet, Star, IndianRupee } from "lucide-react";
import Link from "next/link";

const TASK_TYPES = [
  {
    icon: Video,
    color: "text-red-400 bg-red-500/20",
    borderColor: "border-red-500/20",
    badge: "Most Popular",
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
    title: "Reel Creator",
    desc: "Create short-form videos for brands. Post on Instagram or YouTube Shorts with a tracked link.",
    earn: "₹500 – ₹5,000",
    time: "2–4 hours",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=500&h=300&fit=crop&auto=format",
    perks: ["Flexible schedule", "Reuse content", "Bonus on viral"],
  },
  {
    icon: FileText,
    color: "text-blue-400 bg-blue-500/20",
    borderColor: "border-blue-500/20",
    badge: "High Payout",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    title: "Blog Writer",
    desc: "Write SEO-optimized articles published to your personal Earnetix blog page. Brands pay per read.",
    earn: "₹800 – ₹8,000",
    time: "3–6 hours",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop&auto=format",
    perks: ["Personal blog page", "Long-term income", "SEO visibility"],
  },
  {
    icon: Share2,
    color: "text-emerald-400 bg-emerald-500/20",
    borderColor: "border-emerald-500/20",
    badge: "Passive Income",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    title: "Affiliate Marketer",
    desc: "Share unique product links through any platform. Earn a commission on every verified purchase.",
    earn: "10–25% Commission",
    time: "Anytime",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=300&fit=crop&auto=format",
    perks: ["No content required", "Multiple campaigns", "Daily payouts"],
  },
  {
    icon: Users,
    color: "text-purple-400 bg-purple-500/20",
    borderColor: "border-purple-500/20",
    badge: "Community",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    title: "Referral Agent",
    desc: "Invite creators to join Earnetix. Earn a bonus for every friend who completes their first task.",
    earn: "₹200 per Referral",
    time: "5 minutes",
    difficulty: "Easiest",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=300&fit=crop&auto=format",
    perks: ["Unlimited referrals", "Track in real-time", "Instant credit"],
  },
];

export function EarnetixTaskShowcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-4">Earning Categories</p>
          <h2 className="text-4xl md:text-5xl font-black text-white font-heading tracking-tight mb-4">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">Earning Style</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From video creators to bloggers — every skill set has a matching task on Earnetix.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TASK_TYPES.map((task, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group rounded-3xl border ${task.borderColor} bg-white/5 backdrop-blur-md overflow-hidden hover:bg-white/8 transition-all duration-300`}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={task.image}
                  alt={task.title}
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${task.badgeColor}`}>{task.badge}</span>
                </div>
                <div className={`absolute bottom-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center ${task.color}`}>
                  <task.icon className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-black text-white font-heading mb-2">{task.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{task.desc}</p>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-3 flex flex-col items-center text-center">
                    <IndianRupee className="w-3.5 h-3.5 text-emerald-400 mb-1" />
                    <span className="text-xs text-white font-bold">{task.earn}</span>
                    <span className="text-[10px] text-slate-500">Earnings</span>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-3 flex flex-col items-center text-center">
                    <Clock className="w-3.5 h-3.5 text-indigo-400 mb-1" />
                    <span className="text-xs text-white font-bold">{task.time}</span>
                    <span className="text-[10px] text-slate-500">Time</span>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-3 flex flex-col items-center text-center">
                    <Star className="w-3.5 h-3.5 text-yellow-400 mb-1" />
                    <span className="text-xs text-white font-bold">{task.difficulty}</span>
                    <span className="text-[10px] text-slate-500">Level</span>
                  </div>
                </div>

                <div className="space-y-1.5 mb-5">
                  {task.perks.map((p, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="text-xs text-slate-400">{p}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/tasks"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm font-bold hover:bg-white/20 transition-colors group/btn"
                >
                  Start This Task
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
