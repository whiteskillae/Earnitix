"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/ui/navbar";
import { FooterSection } from "@/components/ui/footer-section";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import StackFeatureSection from "@/components/ui/stack-feature-section";
import { motion } from "framer-motion";
import { Video, FileText, Link2, Share2, Users, ChevronRight, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const EARNING_TYPES = [
  { icon: Video, color: "text-red-400", bg: "bg-red-500/10 border-red-500/15", label: "Reel Creation", desc: "Make reels for campaigns and partner brands. High-value original video content.", href: "/earning-methods#reels" },
  { icon: FileText, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/15", label: "Blog Writing", desc: "Write blogs on your personal Earnetix blog page. Every creator gets their own space.", href: "/earning-methods#blogs" },
  { icon: Link2, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/15", label: "Affiliate Promotion", desc: "Get a unique link, promote a product or service, earn per click or conversion.", href: "/earning-methods#affiliate" },
  { icon: Share2, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/15", label: "Social Engagement", desc: "Share content, post promotional reels, add Earnetix links, drive campaign traffic.", href: "/earning-methods#social" },
  { icon: Users, color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/15", label: "Referral Income", desc: "Invite new users and earn bonuses when they complete tasks on the platform.", href: "/earning-methods#referral" },
];

const WORKFLOW_STEPS = [
  { num: "01", title: "Sign Up", desc: "Create your account and get access to your creator dashboard." },
  { num: "02", title: "Get Tasks", desc: "Tasks appear based on your category — Reel Creator, Blogger, or Promoter." },
  { num: "03", title: "Complete Task", desc: "Create a reel, write a blog, or complete any assigned creator task." },
  { num: "04", title: "Verification", desc: "Earnetix verifies your work for originality and quality." },
  { num: "05", title: "Wallet Credit", desc: "Payment is added to your Earnetix wallet after verification." },
  { num: "06", title: "Withdraw", desc: "Withdraw earnings once you reach the minimum payout threshold." },
];

const FAQS = [
  { q: "Do users watch reels to earn?", a: "No. Earnetix is a content creation platform, not a reel-watching platform." },
  { q: "Do I need followers to join?", a: "No, beginners can earn through tasks. No large following required." },
  { q: "Do I get my own blog page?", a: "Yes, every creator gets a personal blog page to publish content." },
  { q: "Is there a mobile app?", a: "The app is coming soon. Currently, Earnetix works as a web app." },
];

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (t: number) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <Navbar />

      {/* ── HERO with Animated Gradient ─────────────── */}
      <section className="relative overflow-hidden pt-20 pb-32 min-h-[90vh] flex items-center">
        <AnimatedGradientBackground
          startingGap={110}
          Breathing
          breathingRange={8}
          animationSpeed={0.015}
          gradientColors={["#0A0F1E", "#312E81", "#0A0F1E", "#064E3B", "#0A0F1E"]}
          gradientStops={[30, 50, 65, 82, 100]}
        />
        {/* subtle grid overlay */}
        <div aria-hidden className="absolute inset-0 pointer-events-none z-[1]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "80px 80px" }}
        />
        
        {/* 3D-like SVG Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] z-[2] opacity-80 hidden md:block"
        >
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 bg-indigo-500 rounded-2xl rotate-12 blur-md opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-violet-600 rounded-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_10px_20px_rgba(0,0,0,0.5)] border border-white/20 flex items-center justify-center">
              <Zap className="w-12 h-12 text-white drop-shadow-md" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[10%] z-[2] opacity-80 hidden md:block"
        >
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 bg-emerald-500 rounded-full -rotate-12 blur-md opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_10px_20px_rgba(0,0,0,0.5)] border border-white/20 flex items-center justify-center">
              <Video className="w-10 h-10 text-white drop-shadow-md" />
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center w-full">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8 text-xs font-bold text-indigo-300 uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Creator-First Earning Platform
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tighter font-heading mb-6"
          >
            Earn Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400">
              Content.
            </span>
            <br />Grow with Skills.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.16 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-4"
          >
            Earnetix is a creator-driven earning platform where you generate income by completing digital tasks — creating reels, writing blogs, and promoting content.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}
            className="text-slate-500 text-sm mb-10"
          >
            Unlike typical earning apps, Earnetix is creator-first, not viewer-first.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.32 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/how-it-works" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-xl shadow-indigo-600/25 transition-all hover:scale-105 group">
              How It Works <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/earning-methods" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
              Earning Methods
            </Link>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-10 text-xs text-slate-600 flex items-center justify-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available as a Web App · Mobile App Coming Soon
          </motion.p>
        </div>
      </section>

      {/* ── WHAT IS EARNETIX ─────────────── */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div aria-hidden className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">What is Earnetix?</p>
              <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-white mb-6">A task marketplace for creators.</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Earnetix operates as a task marketplace for creators. Brands, campaigns, or the Earnetix team publish tasks — and creators complete them to earn money.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Unlike typical earning apps where users watch videos, <strong className="text-white">Earnetix focuses on content creation, not passive viewing.</strong>
              </p>
              <Link href="/how-it-works" className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors group">
                See the full workflow <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {["Reel Creation Tasks", "Blog Writing Tasks", "Promotion Tasks", "Affiliate Tasks", "Social Share Tasks"].map((task, i) => (
                <motion.div key={task} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/8 transition-colors"
                >
                  <Zap className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-200">{task}</span>
                  <span className="ml-auto text-xs text-slate-600">Task type {i + 1}/5</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EARNING METHODS ─────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-4">Earning Methods</p>
            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-white mb-4">Five ways to earn.</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">Every income stream is based on active content creation — not passive consumption.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EARNING_TYPES.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className={`group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col gap-5 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)] transition-all duration-300 relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 transition-opacity group-hover:opacity-40 ${item.bg.split(' ')[0]}`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-inner flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 drop-shadow-lg" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl text-white font-black font-heading mb-2 tracking-tight group-hover:text-indigo-300 transition-colors">{item.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <Link href={item.href} className={`text-xs font-bold uppercase tracking-widest ${item.color} hover:opacity-70 transition-opacity flex items-center gap-1 mt-auto relative z-10`}>
                  Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}
              className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6 sm:col-span-2 lg:col-span-2"
            >
              <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Why Earnetix Is Unique</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["100% creator-focused — no watching reels", "Every creator gets their own blog page", "Combines reels + blogs + affiliate marketing", "Works as a web app first, app coming later", "Encourages original content creation", "Builds a full creator economy ecosystem"].map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ORBIT FEATURE SECTION ─────────────── */}
      <div className="px-6">
        <StackFeatureSection />
      </div>

      {/* ── WORKFLOW ─────────────── */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div aria-hidden className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-4">Workflow</p>
            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-white mb-4">From sign-up to payout.</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">Six clear steps. No complexity.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WORKFLOW_STEPS.map((s, i) => (
              <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group flex flex-col gap-5 p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-violet-500/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.2)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-colors" />
                <span className="text-5xl font-black text-white/5 font-heading leading-none group-hover:text-violet-500/20 transition-colors">{s.num}</span>
                <div className="relative z-10">
                  <h3 className="text-xl text-white font-black font-heading mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/how-it-works" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all hover:scale-105 shadow-xl shadow-indigo-600/20">
              Full How It Works <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ PREVIEW ─────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Quick Answers</p>
            <h2 className="text-3xl font-black font-heading tracking-tight text-white mb-3">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group rounded-2xl bg-white/5 border border-white/8 open:border-indigo-500/25 transition-colors">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-white text-sm select-none">
                  {q}
                  <ChevronRight className="w-4 h-4 text-slate-500 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1">
              View all FAQs <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────── */}
      <div className="pb-8">
        <FooterSection />
      </div>
    </div>
  );
}
