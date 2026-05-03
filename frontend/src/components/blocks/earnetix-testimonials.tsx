"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    name: "Aryan Mehta",
    title: "Reel Creator · Mumbai",
    earnings: "₹42,000 this month",
    rating: 5,
    quote: "I was skeptical at first, but Earnetix genuinely pays. I made ₹42K last month just from Reel tasks during my weekends. The review system is super fair.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=500&fit=crop&auto=format",
    tag: "Top Reel Creator",
    tagColor: "bg-red-500/10 text-red-400 border-red-500/20",
  },
  {
    name: "Priya Joshi",
    title: "Blog Writer · Delhi",
    earnings: "₹28,500 this month",
    rating: 5,
    quote: "My personal blog on Earnetix has 3,000 monthly readers and brands pay me to write. It's not just a side hustle anymore — it's my main income.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&auto=format",
    tag: "Featured Blogger",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    name: "Vikram Patel",
    title: "Affiliate Marketer · Bangalore",
    earnings: "₹61,000 this month",
    rating: 5,
    quote: "Affiliate campaigns on Earnetix are unreal. I share one link, go about my day, and watch earnings come in. ₹61K last month with zero content creation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&auto=format",
    tag: "Affiliate Pro",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
];

export function EarnetixTestimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">Social Proof</p>
          <h2 className="text-4xl md:text-5xl font-black text-white font-heading tracking-tight mb-4">
            Real creators. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Real income.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">Join thousands of Indian creators who've turned their skills into a reliable monthly income.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Image */}
          <div className="relative flex-shrink-0 w-full lg:w-[360px]">
            <div className="absolute -inset-1 bg-gradient-to-b from-indigo-600/20 to-emerald-500/10 rounded-[2.5rem] blur-xl" />
            <div className="relative h-[440px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <motion.img
                key={t.image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className={cn("px-3 py-1 rounded-full text-xs font-bold border", t.tagColor)}>{t.tag}</span>
              </div>
            </div>
          </div>

          {/* Content card */}
          <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 lg:p-10 relative">
            <Quote className="absolute top-8 right-8 w-16 h-16 text-indigo-500/10" />

            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed italic mb-8">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-white font-bold text-lg font-heading">{t.name}</p>
                  <p className="text-slate-500 text-sm">{t.title}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-0.5">Earnings</p>
                  <p className="text-2xl font-black text-emerald-400 font-heading">{t.earnings}</p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-10 pt-8 border-t border-white/10">
              <button
                onClick={() => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2 flex-1">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === idx ? "bg-indigo-400 w-8" : "bg-white/20 w-4"
                    )}
                  />
                ))}
              </div>

              <button
                onClick={() => setIdx((i) => (i + 1) % TESTIMONIALS.length)}
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
