"use client";

import { Navbar } from "@/components/ui/navbar";
import { FooterSection } from "@/components/ui/footer-section";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

const STEPS = [
  {
    num: "01",
    title: "Sign Up & Get a Creator Dashboard",
    body: "Create your Earnetix account. Once registered, you get access to your creator dashboard where all your tasks, earnings, and wallet are managed in one place.",
  },
  {
    num: "02",
    title: "Tasks Appear Based on Your Category",
    body: "Tasks are assigned based on your creator category â€” Reel Creator, Blogger, or Promoter. You only see tasks relevant to your skills and profile.",
  },
  {
    num: "03",
    title: "Complete the Task",
    body: "Complete the task as instructed. This could be creating a reel, writing a blog post, promoting a product, or any other creator activity defined in the task.",
  },
  {
    num: "04",
    title: "Earnetix Verifies Your Work",
    body: "Your submission is reviewed for originality and quality. Earnetix checks completion accuracy and engagement where applicable, ensuring fair payouts for quality work.",
  },
  {
    num: "05",
    title: "Payment Added to Your Wallet",
    body: "Once verified, payment is added directly to your Earnetix wallet. You can track all credited earnings from within your creator dashboard.",
  },
  {
    num: "06",
    title: "Withdraw Your Earnings",
    body: "When you reach the minimum payout threshold, you can withdraw your earnings. Withdrawal options and thresholds are defined within the platform.",
  },
];

const ASSIGNMENT_CRITERIA = [
  "Creator skill level",
  "Past performance and task history",
  "Task availability at the time",
  "Brand or campaign requirements",
];

const VERIFICATION_CRITERIA = [
  "Originality of the submitted content",
  "Quality of the work",
  "Completion accuracy relative to task requirements",
  "Engagement metrics (if applicable to the task)",
];

const PAYMENT_TYPES = [
  { label: "Fixed per Task", desc: "A set amount paid on successful verification of the task." },
  { label: "Performance-Based", desc: "Earnings tied to views, clicks, or conversion metrics." },
  { label: "Bonus-Based", desc: "Additional rewards for top creators who exceed expectations." },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 border-b border-white/5">
        <div aria-hidden className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Platform Workflow</p>
          <h1 className="text-5xl md:text-6xl font-black font-heading tracking-tighter text-white mb-5">
            How Earnetix Works
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Earnetix operates as a task marketplace for creators. Brands, campaigns, or the Earnetix team publish tasks â€” and creators complete them to earn money.
          </p>
        </div>
      </section>

      {/* 6-step workflow */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-black font-heading tracking-tight text-white mb-12">The Workflow</h2>
          <ol className="space-y-5" role="list">
            {STEPS.map((s, i) => (
              <motion.li
                key={s.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/8 hover:border-white/15 transition-colors"
              >
                <span aria-hidden className="text-4xl font-black text-white/8 font-heading leading-none flex-shrink-0 pt-1 w-10 text-right">{s.num}</span>
                <div>
                  <h3 className="text-white font-bold font-heading text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Task Assignment */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-3">Task Assignment</p>
              <h2 className="text-2xl font-black font-heading tracking-tight text-white mb-3">How Tasks Are Assigned</h2>
              <p className="text-slate-500 text-sm leading-relaxed">Tasks are matched to creators based on these criteria:</p>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 gap-3">
              {ASSIGNMENT_CRITERIA.map((c, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white/5 border border-white/8">
                  <ChevronRight className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="text-slate-200 text-sm">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Task Verification */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">Verification</p>
              <h2 className="text-2xl font-black font-heading tracking-tight text-white mb-3">How Earnetix Verifies Work</h2>
              <p className="text-slate-500 text-sm leading-relaxed">Every submission is checked for:</p>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 gap-3">
              {VERIFICATION_CRITERIA.map((c, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white/5 border border-white/8">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-200 text-sm">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Types */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-3">Task Payments</p>
          <h2 className="text-2xl font-black font-heading tracking-tight text-white mb-8">How Payments Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PAYMENT_TYPES.map((pt, i) => (
              <motion.div
                key={pt.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/8 hover:border-white/15 transition-colors"
              >
                <h3 className="text-white font-bold font-heading mb-2">{pt.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Earning Methods */}
      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-black font-heading text-white mb-4">Ready to understand how you earn?</h2>
          <p className="text-slate-400 mb-8">Explore all five earning methods available on the platform.</p>
          <Link href="/earning-methods" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all hover:scale-105 shadow-xl shadow-indigo-600/20">
            Explore Earning Methods <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <div className="pb-8"><FooterSection /></div>
    </div>
  );
}

