"use client";

import { Navbar } from "@/components/ui/navbar";
import { FooterSection } from "@/components/ui/footer-section";
import { motion } from "framer-motion";
import { Video, FileText, Link2, Share2, Users, ChevronRight } from "lucide-react";

const METHODS = [
  {
    id: "reels",
    icon: Video,
    color: "text-red-400",
    border: "border-red-500/20",
    accent: "bg-red-500/5",
    label: "A. Reel Creation Income",
    intro: "This is a high-value task because brands pay more for original video content.",
    items: [
      "Making reels for Earnetix campaigns",
      "Making reels for partner brands",
      "Posting reels on their Earnetix profile",
      "Driving engagement (if performance bonuses apply)",
    ],
  },
  {
    id: "blogs",
    icon: FileText,
    color: "text-blue-400",
    border: "border-blue-500/20",
    accent: "bg-blue-500/5",
    label: "B. Blog Writing Income",
    intro: "Every creator gets a personal Earnetix blog page where published content can earn based on task payment or engagement metrics.",
    items: [
      "Write blogs on any approved topic",
      "Publish them on your personal Earnetix blog page",
      "Earn based on task payment or engagement metrics",
    ],
  },
  {
    id: "affiliate",
    icon: Link2,
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    accent: "bg-emerald-500/5",
    label: "C. Affiliate-Style Promotion",
    intro: "This mirrors affiliate marketing models widely used in the creator economy. Creators promote products and earn per result.",
    items: [
      "Receive a unique tracking link",
      "Promote a product or service through your content",
      "Earn per click, signup, or conversion",
    ],
  },
  {
    id: "social",
    icon: Share2,
    color: "text-purple-400",
    border: "border-purple-500/20",
    accent: "bg-purple-500/5",
    label: "D. Social Engagement Tasks",
    intro: "Creators earn for driving measurable actions â€” not just for creating content, but for the impact it generates.",
    items: [
      "Sharing content across platforms",
      "Posting promotional reels",
      "Adding Earnetix links in your bio",
      "Driving traffic to campaigns",
    ],
  },
  {
    id: "referral",
    icon: Users,
    color: "text-yellow-400",
    border: "border-yellow-500/20",
    accent: "bg-yellow-500/5",
    label: "E. Referral Income",
    intro: "Grow the Earnetix creator community and earn bonuses for every active creator you bring in.",
    items: [
      "Invite new users to the platform",
      "Earn a bonus when invited users complete tasks",
    ],
  },
];

export default function EarningMethodsPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 border-b border-white/5">
        <div aria-hidden className="absolute top-0 right-0 w-[500px] h-[400px] bg-emerald-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-4">How You Earn</p>
          <h1 className="text-5xl md:text-6xl font-black font-heading tracking-tighter text-white mb-5">
            Earning Methods
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Earnetix offers five distinct earning streams. Every method is based on active creation and contribution â€” not passive viewing.
          </p>
        </div>
      </section>

      {/* Methods */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 space-y-10">
          {METHODS.map((m, i) => (
            <motion.article
              key={m.id}
              id={m.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-3xl border ${m.border} ${m.accent} p-8`}
              aria-label={m.label}
            >
              <div className="flex items-start gap-5 mb-5">
                <div className={`w-12 h-12 rounded-2xl bg-white/8 flex items-center justify-center flex-shrink-0 ${m.color}`}>
                  <m.icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black font-heading text-white tracking-tight">{m.label}</h2>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">{m.intro}</p>
                </div>
              </div>

              <ul className="space-y-2.5 ml-0" role="list">
                {m.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ChevronRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${m.color}`} />
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <div className="pb-8"><FooterSection /></div>
    </div>
  );
}

