"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Video, FileText, Link2, Share2, Users, CheckCircle2,
  Award, Zap, TrendingUp, Globe, ArrowRight, Sparkles, Star, CheckCircle,
} from "lucide-react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";

const services = [
  {
    icon: <Video className="w-6 h-6" />,
    secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-indigo-400" />,
    title: "Reel Creation",
    description: "Earn by making reels for Earnetix campaigns and partner brands. High-value because brands pay more for original video content.",
    position: "left",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-indigo-400" />,
    title: "Blog Writing",
    description: "Write blogs and publish on your personal Earnetix blog page. Every creator gets their own blog space to build their digital presence.",
    position: "left",
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-emerald-400" />,
    title: "Affiliate Promotion",
    description: "Receive a unique link, promote a product or service, and earn per click, signup, or conversion.",
    position: "left",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-indigo-400" />,
    title: "Social Engagement",
    description: "Share content, post promotional reels, add Earnetix links in your bio, and drive traffic to campaigns.",
    position: "right",
  },
  {
    icon: <Users className="w-6 h-6" />,
    secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-emerald-400" />,
    title: "Referral Income",
    description: "Invite new users and earn bonuses when they complete tasks. Grow the creator community and get rewarded.",
    position: "right",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-indigo-400" />,
    title: "Task Verification",
    description: "Every submission is verified for originality, quality, and completion accuracy. Fair payouts for genuine work.",
    position: "right",
  },
];

const stats = [
  { icon: <Zap />, value: 5, label: "Earning Methods", suffix: "" },
  { icon: <Award />, value: 6, label: "Workflow Steps", suffix: "" },
  { icon: <TrendingUp />, value: 100, label: "Creator Focused", suffix: "%" },
  { icon: <Globe />, value: 1, label: "Blog Page Per Creator", suffix: "" },
];

export default function EarnetixAboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section ref={sectionRef} className="w-full py-24 px-4 bg-gradient-to-b from-[#0A0F1E] to-[#0F172A] text-white overflow-hidden relative">
      <motion.div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-indigo-600/8 blur-3xl" style={{ y: y1, rotate: rotate1 }} />
      <motion.div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-emerald-500/6 blur-3xl" style={{ y: y2, rotate: rotate2 }} />

      <motion.div className="container mx-auto max-w-6xl relative z-10" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <span className="text-indigo-400 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-widest">
            <Zap className="w-4 h-4" /> Platform Overview
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading mb-4 text-center tracking-tighter">About Earnetix</h2>
          <motion.div className="h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full" initial={{ width: 0 }} animate={{ width: 96 }} transition={{ duration: 1, delay: 0.5 }} />
        </motion.div>

        <motion.p className="text-center max-w-2xl mx-auto mb-16 text-slate-400 leading-relaxed" variants={itemVariants}>
          Earnetix is a creator-driven earning platform that empowers users to make money by creating reels, writing blogs, and promoting digital content. Our mission is to build a transparent and rewarding ecosystem where creators of all levels can earn from their skills.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="space-y-16">
            {services.filter((s) => s.position === "left").map((service, index) => (
              <ServiceItem key={`left-${index}`} icon={service.icon} secondaryIcon={service.secondaryIcon} title={service.title} description={service.description} variants={itemVariants} delay={index * 0.2} direction="left" />
            ))}
          </div>

          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} whileHover={{ scale: 1.03 }}>
                <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=800&fit=crop&auto=format" alt="Creator using Earnetix" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 to-transparent flex items-end justify-center p-4">
                  <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold">
                    <Zap className="w-3.5 h-3.5 fill-indigo-400 text-indigo-400" /> Earn Through Content
                  </span>
                </div>
              </motion.div>
              <motion.div className="absolute inset-0 border-2 border-indigo-500/20 rounded-2xl -m-3 z-[-1]" initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }} />
            </motion.div>
          </div>

          <div className="space-y-16">
            {services.filter((s) => s.position === "right").map((service, index) => (
              <ServiceItem key={`right-${index}`} icon={service.icon} secondaryIcon={service.secondaryIcon} title={service.title} description={service.description} variants={itemVariants} delay={index * 0.2} direction="right" />
            ))}
          </div>
        </div>

        <motion.div ref={statsRef} className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" animate={isStatsInView ? "visible" : "hidden"} variants={containerVariants}>
          {stats.map((stat, index) => (
            <StatCounter key={index} icon={stat.icon} value={stat.value} label={stat.label} suffix={stat.suffix} delay={index * 0.1} />
          ))}
        </motion.div>

        <motion.div className="mt-20 bg-gradient-to-r from-indigo-600/20 to-emerald-500/10 border border-indigo-500/20 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6" initial={{ opacity: 0, y: 30 }} animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <div>
            <h3 className="text-2xl font-black font-heading text-white mb-2">Earn Through Content. Grow with Skills.</h3>
            <p className="text-slate-400 text-sm">A transparent, rewarding ecosystem for creators at every level.</p>
          </div>
          <a href="/how-it-works" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-bold transition-all hover:scale-105 flex-shrink-0">
            How It Works <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: { icon: React.ReactNode; secondaryIcon?: React.ReactNode; title: string; description: string; variants: any; delay: number; direction: "left" | "right" }) {
  return (
    <motion.div className="flex flex-col group" variants={variants} transition={{ delay }} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
      <motion.div className="flex items-center gap-3 mb-3" initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: delay + 0.2 }}>
        <motion.div className="text-indigo-400 bg-indigo-500/10 p-3 rounded-xl group-hover:bg-indigo-500/20 relative transition-colors" whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}>
          {icon}{secondaryIcon}
        </motion.div>
        <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors font-heading">{title}</h3>
      </motion.div>
      <p className="text-sm text-slate-500 leading-relaxed pl-14">{description}</p>
    </motion.div>
  );
}

function StatCounter({ icon, value, label, suffix, delay }: { icon: React.ReactNode; value: number; label: string; suffix: string; delay: number }) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: false });
  const [hasAnimated, setHasAnimated] = useState(false);
  const springValue = useSpring(0, { stiffness: 50, damping: 10 });

  useEffect(() => {
    if (isInView && !hasAnimated) { springValue.set(value); setHasAnimated(true); }
    else if (!isInView && hasAnimated) { springValue.set(0); setHasAnimated(false); }
  }, [isInView, value, springValue, hasAnimated]);

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  return (
    <motion.div className="bg-white/5 border border-white/8 p-6 rounded-2xl flex flex-col items-center text-center group hover:border-indigo-500/25 transition-all" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } } }} whileHover={{ y: -5 }}>
      <motion.div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors" whileHover={{ rotate: 360, transition: { duration: 0.8 } }}>
        {icon}
      </motion.div>
      <div ref={countRef} className="text-3xl font-black text-white font-heading flex items-center">
        <motion.span>{displayValue}</motion.span><span>{suffix}</span>
      </div>
      <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider">{label}</p>
      <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-emerald-500 mt-3 group-hover:w-14 transition-all duration-300 rounded-full" />
    </motion.div>
  );
}
