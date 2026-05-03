"use client";

import { Navbar } from "@/components/ui/navbar";
import { FooterSection } from "@/components/ui/footer-section";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const CREATOR_BENEFITS = [
  "Earn money by creating content",
  "Build a portfolio of reels and blogs",
  "Get a personal blog page on Earnetix",
  "Access brand campaigns",
  "Grow as a digital creator",
  "Access multiple income streams",
];

const BEGINNER_BENEFITS = [
  "No need for a large following",
  "Tasks are simple and structured",
  "Easy to start earning immediately",
];

const BRAND_BENEFITS = [
  "Affordable creator marketing",
  "Real user-generated content",
  "Scalable promotion across creators",
  "Access to micro-creators with engaged audiences",
];

const UNIQUE_POINTS = [
  { title: "100% Creator-Focused", desc: "Earnetix is built for creators who produce content â€” not viewers who consume it. There are no passive watch-to-earn mechanics." },
  { title: "Personal Blog Page", desc: "Every creator on Earnetix gets their own dedicated blog page. Your content lives in one place and builds your digital presence." },
  { title: "Multi-Format Earning", desc: "Earn across reels, blog writing, affiliate links, social engagement, and referrals â€” all in one platform." },
  { title: "Web App First", desc: "Earnetix is available as a web app today, with a mobile app launching soon. No downloads required to start." },
  { title: "Original Content Only", desc: "Earnetix verifies submissions for originality. Only authentic, quality work earns â€” protecting the value for all creators and brands." },
  { title: "Full Creator Economy", desc: "Earnetix is building an ecosystem where creators can grow their skills, their portfolio, and their income simultaneously." },
];

const BenefitItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3">
    <ChevronRight className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
    <span className="text-slate-300 text-sm leading-relaxed">{text}</span>
  </li>
);

export default function BenefitsPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 border-b border-white/5">
        <div aria-hidden className="absolute top-0 right-0 w-[500px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-4">Platform Value</p>
          <h1 className="text-5xl md:text-6xl font-black font-heading tracking-tighter text-white mb-5">
            Benefits of Joining Earnetix
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Earnetix is designed to deliver value to creators at every stage â€” from beginners just starting out to experienced content producers.
          </p>
        </div>
      </section>

      {/* Three benefit columns */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* For Creators */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/8 hover:border-indigo-500/25 transition-colors"
            >
              <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">For Creators</p>
              <h2 className="text-xl font-black font-heading text-white mb-6">If you create content</h2>
              <ul className="space-y-3" role="list">
                {CREATOR_BENEFITS.map((b) => <BenefitItem key={b} text={b} />)}
              </ul>
            </motion.div>

            {/* For Beginners */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20"
            >
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">For Beginners</p>
              <h2 className="text-xl font-black font-heading text-white mb-6">Just getting started?</h2>
              <ul className="space-y-3" role="list">
                {BEGINNER_BENEFITS.map((b) => <BenefitItem key={b} text={b} />)}
              </ul>
            </motion.div>

            {/* For Brands */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/8 hover:border-violet-500/25 transition-colors"
            >
              <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-3">For Brands</p>
              <h2 className="text-xl font-black font-heading text-white mb-6">If you need promotion</h2>
              <ul className="space-y-3" role="list">
                {BRAND_BENEFITS.map((b) => <BenefitItem key={b} text={b} />)}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Unique */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-3">What Sets Us Apart</p>
            <h2 className="text-3xl font-black font-heading tracking-tight text-white">Why Earnetix Is Unique</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {UNIQUE_POINTS.map((pt, i) => (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/8 hover:border-yellow-500/25 transition-colors"
              >
                <h3 className="text-white font-bold font-heading mb-2">{pt.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-8"><FooterSection /></div>
    </div>
  );
}

