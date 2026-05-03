"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { UpgradeBanner } from "@/components/ui/upgrade-banner";

import { Home, Lightbulb, Wallet, CheckSquare, Gift, Info, HelpCircle } from "lucide-react";

const NAV = [
  { label: "Home", href: "/", icon: Home },
  { label: "How It Works", href: "/how-it-works", icon: Lightbulb },
  { label: "Earning Methods", href: "/earning-methods", icon: Wallet },
  { label: "Tasks", href: "/tasks", icon: CheckSquare },
  { label: "Benefits", href: "/benefits", icon: Gift },
  { label: "About", href: "/about", icon: Info },
  { label: "FAQ", href: "/faq", icon: HelpCircle },
  { label: "Help", href: "/help", icon: HelpCircle },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const pathname = usePathname();

  return (
    <>
      {/* Announcement Banner */}
      <AnimatePresence>
        {bannerVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <UpgradeBanner
              buttonText="App Coming Soon"
              description="Mobile app launching for iOS & Android — Stay tuned"
              onClose={() => setBannerVisible(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 w-full">
        {/* Floating pill wrapper on desktop */}
        <div className="hidden lg:flex justify-center px-6 pt-3 pb-2 bg-[#0F172A]/60 backdrop-blur-xl border-b border-white/5">
          <nav className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 shadow-2xl shadow-black/20 relative w-auto max-w-[1200px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mr-3 pr-3 border-r border-white/10 group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-md shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                <Zap className="w-3.5 h-3.5 fill-white text-white" />
              </div>
              <span className="text-sm font-black text-white font-heading tracking-tight">Earnetix</span>
            </Link>

            {/* Nav links with sliding indicator */}
            <div className="relative flex items-center gap-2">
              {NAV.map((l) => {
                const isActive = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "relative px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-200 z-10 flex items-center gap-1.5",
                      isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navbar-pill"
                        className="absolute inset-0 rounded-full bg-indigo-600/80 border border-indigo-500/40"
                        transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
                      />
                    )}
                    <l.icon className="w-3.5 h-3.5 relative z-10" />
                    <span className="relative z-10">{l.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right side spacer if needed, removed Web App indicator */}
          </nav>
        </div>

        {/* Mobile header */}
        <div className="flex lg:hidden items-center justify-between px-5 py-3 bg-[#0F172A]/90 backdrop-blur-xl border-b border-white/5">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <Zap className="w-4 h-4 fill-white text-white" />
            </div>
            <span className="text-base font-black text-white font-heading">Earnetix</span>
          </Link>
          <button
            aria-label="Open menu"
            className="p-2 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white transition-colors"
            onClick={() => setOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 z-50 h-full w-[300px] bg-[#0A0F1E] border-l border-white/10 flex flex-col p-6 gap-4 lg:hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center">
                    <Zap className="w-4 h-4 fill-white text-white" />
                  </div>
                  <span className="text-base font-black text-white font-heading">Earnetix</span>
                </Link>
                <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg border border-white/10 text-white" aria-label="Close">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {NAV.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors",
                        pathname === l.href
                          ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/20"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <l.icon className="w-4 h-4" />
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto">
                {/* Mobile bottom spacer */}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
