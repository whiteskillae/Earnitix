"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Hero2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0F172A] flex flex-col font-sans">
      {/* Premium Background Layer */}
      <div className="absolute inset-0 bg-mesh opacity-40 z-0"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.03] z-0 pointer-events-none"></div>
      
      {/* Animated Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="container mx-auto flex items-center justify-between px-6 py-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl mt-4 max-w-7xl">
          <Link href="/" className="flex items-center group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
              <Zap className="size-6 fill-white" />
            </div>
            <span className="ml-3 text-2xl font-bold text-white tracking-tight font-heading">Earnetix</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <Link href="/how-it-works" className={cn("text-sm font-medium transition-colors hover:text-primary", pathname === "/how-it-works" ? "text-primary" : "text-slate-300")}>How it Works</Link>
              <Link href="/tasks" className={cn("text-sm font-medium transition-colors hover:text-primary", pathname === "/tasks" ? "text-primary" : "text-slate-300")}>Earning Tasks</Link>
              <Link href="/success-stories" className={cn("text-sm font-medium transition-colors hover:text-primary", pathname === "/success-stories" ? "text-primary" : "text-slate-300")}>Success Stories</Link>
              <Link href="/about" className={cn("text-sm font-medium transition-colors hover:text-primary", pathname === "/about" ? "text-primary" : "text-slate-300")}>About Us</Link>
            </div>
            <div className="h-6 w-px bg-white/10 mx-2"></div>
            <div className="flex items-center space-x-4">
              <button className="text-sm font-medium text-white hover:text-primary transition-colors">Login</button>
              <button className="px-6 py-2.5 rounded-xl bg-white text-black text-sm font-bold hover:bg-slate-200 transition-all active:scale-95 shadow-xl">
                Join Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex flex-col p-6 bg-[#0F172A]/98 backdrop-blur-xl lg:hidden"
            >
              <div className="flex items-center justify-between mb-12">
                <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                    <Zap className="size-6 fill-white" />
                  </div>
                  <span className="ml-3 text-2xl font-bold text-white tracking-tight font-heading">Earnetix</span>
                </Link>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-xl bg-white/5">
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="flex flex-col space-y-8">
                <MobileLink href="/how-it-works" label="How it Works" onClick={() => setMobileMenuOpen(false)} />
                <MobileLink href="/tasks" label="Earning Tasks" onClick={() => setMobileMenuOpen(false)} />
                <MobileLink href="/success-stories" label="Success Stories" onClick={() => setMobileMenuOpen(false)} />
                <MobileLink href="/about" label="About Us" onClick={() => setMobileMenuOpen(false)} />
                
                <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
                  <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold">Login</button>
                  <button className="w-full py-4 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/20">Join Creator Hub</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center container mx-auto px-6 pt-12 pb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-fit mx-auto mb-8 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm flex items-center gap-2"
          >
            <div className="size-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">v2.0 Now Live</span>
            <div className="w-px h-3 bg-white/20 mx-1"></div>
            <span className="text-xs font-medium text-slate-300 uppercase tracking-widest">Join 10k+ Creators</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-5xl text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-tighter font-heading mb-8"
          >
            Monetize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-emerald-400">Creative</span> Potential.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-12 font-sans"
          >
            Earnetix transforms your content into a high-yield asset. Complete tasks, build your blog, and earn from real skills in the creator economy.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary text-white text-lg font-bold shadow-2xl shadow-primary/30 hover:scale-105 transition-transform active:scale-95 flex items-center justify-center gap-2 group">
              Start Earning Now
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white text-lg font-bold backdrop-blur-md hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              Explore Roadmap
            </button>
          </motion.div>

          {/* Floating Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative mt-24 w-full max-w-6xl mx-auto group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-emerald-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-[16/9]">
              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2070&auto=format&fit=crop"
                alt="Earnetix Dashboard"
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
              
              {/* Floating Stat Cards */}
              <div className="absolute bottom-8 left-8 right-8 flex flex-wrap justify-center gap-6 md:justify-between items-end">
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-2xl flex flex-col items-start min-w-[160px]">
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Total Payouts</span>
                  <span className="text-2xl font-bold text-white font-heading">$1.2M+</span>
                </div>
                <div className="hidden md:flex bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-2xl flex flex-col items-start min-w-[160px]">
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Active Tasks</span>
                  <span className="text-2xl font-bold text-white font-heading">450+</span>
                </div>
                <div className="bg-emerald-500/20 backdrop-blur-xl p-6 rounded-2xl border border-emerald-500/40 shadow-2xl flex flex-col items-start min-w-[160px]">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">Live Creators</span>
                  <span className="text-2xl font-bold text-white font-heading">12,482</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

function MobileLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="flex items-center justify-between text-2xl font-bold text-white hover:text-primary transition-colors font-heading"
    >
      {label}
      <ArrowRight className="size-6 text-slate-600" />
    </Link>
  );
}

export { Hero2 };
