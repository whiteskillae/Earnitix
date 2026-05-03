"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, Zap, TrendingUp, Users, DollarSign, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "How it Works", href: "/how-it-works" },
  { label: "Earning Tasks", href: "/tasks" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "About Us", href: "/about" },
];

const STATS = [
  { icon: DollarSign, value: "₹1.2Cr+", label: "Total Payouts" },
  { icon: Users, value: "12,400+", label: "Active Creators" },
  { icon: TrendingUp, value: "450+", label: "Live Tasks" },
  { icon: Star, value: "4.9 / 5", label: "Creator Rating" },
];

export function EarnetixHero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen bg-[#0F172A] overflow-hidden flex flex-col">
      {/* Background mesh + blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-indigo-600/20 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-indigo-400/10 blur-[100px]" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Navbar */}
      <nav className="relative z-20 w-full">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 fill-white text-white" />
            </div>
            <span className="text-xl font-black text-white tracking-tight font-heading">Earnetix</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-150",
                  pathname === l.href ? "text-indigo-400" : "text-slate-400 hover:text-white"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm text-slate-300 hover:text-white transition-colors font-medium">Login</button>
            <Link
              href="/tasks"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              Start Earning <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2.5 rounded-xl border border-white/10 bg-white/5 text-white"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 z-50 h-full w-[280px] bg-[#0F172A] border-l border-white/10 p-6 flex flex-col gap-8 lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center">
                    <Zap className="w-4 h-4 fill-white text-white" />
                  </div>
                  <span className="text-lg font-black text-white font-heading">Earnetix</span>
                </Link>
                <button onClick={() => setMobileOpen(false)} className="p-1.5 rounded-lg border border-white/10">
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between",
                      pathname === l.href
                        ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/20"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {l.label}
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </Link>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <button className="w-full py-3 rounded-xl border border-white/10 text-white font-bold text-sm">Login</button>
                <Link
                  href="/tasks"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm text-center shadow-lg"
                >
                  Start Earning →
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Creators Already Earning · Join Now</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tighter font-heading"
        >
          Turn Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
            Content
          </span>{" "}
          Into Real Income.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed"
        >
          Earnetix is India's top creator-earning platform. Post Reels, write Blogs, run Affiliate campaigns — and get paid fast. Real tasks, verified payouts, zero gatekeeping.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/tasks"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-base font-bold shadow-2xl shadow-indigo-600/30 hover:scale-105 transition-transform active:scale-95 flex items-center gap-2 group"
          >
            Browse Earning Tasks
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/how-it-works"
            className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-base font-bold backdrop-blur-md hover:bg-white/10 transition-all"
          >
            How It Works →
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl"
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1.5 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <s.icon className="w-5 h-5 text-indigo-400 mb-1" />
              <span className="text-2xl font-black text-white font-heading">{s.value}</span>
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-20 w-full max-w-5xl relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/30 via-purple-600/20 to-emerald-500/20 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000" />
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2070&auto=format&fit=crop"
              alt="Earnetix Creator Dashboard"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />

            {/* Floating earnings card */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex items-center gap-3 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">This Week</p>
                <p className="text-lg font-black text-white font-heading">+₹8,240</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute top-6 right-6 bg-indigo-600/20 backdrop-blur-xl border border-indigo-500/30 rounded-full px-4 py-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-white">Live Payouts Active</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
