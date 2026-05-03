"use client";

import { Navbar } from "@/components/ui/navbar";
import { FooterSection } from "@/components/ui/footer-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, Shield, Video, FileText, Smartphone, BookOpen, Link2 } from "lucide-react";
import Link from "next/link";

const PLATFORM_FAQS = [
  { id: "1", icon: Video, q: "Do users watch reels to earn?", a: "No. Earnetix is a content creation platform, not a reel-watching platform. You earn by creating reels, not by watching them." },
  { id: "2", icon: HelpCircle, q: "How do I get tasks?", a: "Tasks appear in your dashboard based on your creator category — Reel Creator, Blogger, or Promoter." },
  { id: "3", icon: FileText, q: "How do I earn money?", a: "By creating reels, writing blogs, promoting content, or completing affiliate tasks. There are five distinct earning methods on the platform." },
  { id: "4", icon: HelpCircle, q: "How much can I earn?", a: "Earnings depend on task type and performance. Fixed-rate tasks pay a set amount; performance-based tasks may pay more based on views, clicks, or conversions." },
  { id: "5", icon: HelpCircle, q: "When can I withdraw?", a: "After reaching the minimum payout threshold. Withdrawal options are accessible from your creator dashboard." },
  { id: "6", icon: HelpCircle, q: "Do I need followers?", a: "No, beginners can earn through tasks. A large following is not required to get started on Earnetix." },
  { id: "7", icon: Smartphone, q: "Is there an app?", a: "The app is coming soon. Currently, Earnetix works as a web app. You can access all features from any modern browser." },
  { id: "8", icon: BookOpen, q: "Do I get my own blog page?", a: "Yes, every creator gets a personal blog page to publish content. This is a dedicated space to build your digital presence." },
];

const TRUST_FAQS = [
  { id: "t1", icon: HelpCircle, q: "Is Earnetix a random earning app?", a: "No. We are a skill-based platform where creators perform structured work to earn. Tasks require real content creation — not passive activity." },
  { id: "t2", icon: Shield, q: "Is my payment secure?", a: "Yes, Earnetix uses secure payment infrastructure to process all transactions. Your earnings and withdrawal data are protected." },
  { id: "t3", icon: Link2, q: "What types of content are accepted?", a: "Reels (video content), blog articles, affiliate promotions, social engagement tasks, and referral activities are all accepted on the platform." },
  { id: "t4", icon: HelpCircle, q: "Can I do multiple task types?", a: "Yes. You can work across Reel Creation, Blog Writing, Affiliate Promotion, Social Engagement, and Referral tasks based on availability and your profile category." },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <Navbar />

      <section className="relative overflow-hidden pt-20 pb-16 border-b border-white/5">
        <div aria-hidden className="absolute -top-20 right-0 w-[500px] h-[400px] bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-3xl px-6 text-center relative z-10">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Frequently Asked Questions</p>
          <h1 className="text-5xl md:text-6xl font-black font-heading tracking-tighter text-white mb-5">FAQ</h1>
          <p className="text-slate-400 text-lg leading-relaxed">Clear answers to the most common questions about how Earnetix works.</p>
        </div>
      </section>

      {/* Platform FAQs */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6" itemScope itemType="https://schema.org/FAQPage">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Platform Questions</p>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {PLATFORM_FAQS.map((faq, i) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
              >
                <AccordionItem
                  value={faq.id}
                  className="rounded-2xl bg-white/5 border border-white/8 data-[state=open]:border-indigo-500/25 data-[state=open]:bg-indigo-500/3 px-4 transition-colors"
                >
                  <AccordionTrigger className="text-white text-sm hover:no-underline py-4" itemProp="name">
                    <span className="flex items-center gap-3">
                      <faq.icon size={15} className="text-indigo-400 flex-shrink-0 opacity-70" aria-hidden />
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 leading-relaxed pb-4 pl-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <span itemProp="text">{faq.a}</span>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Trust FAQs */}
      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6" itemScope itemType="https://schema.org/FAQPage">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Trust & Platform</p>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {TRUST_FAQS.map((faq, i) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
              >
                <AccordionItem
                  value={faq.id}
                  className="rounded-2xl bg-white/5 border border-white/8 data-[state=open]:border-violet-500/25 data-[state=open]:bg-violet-500/3 px-4 transition-colors"
                >
                  <AccordionTrigger className="text-white text-sm hover:no-underline py-4" itemProp="name">
                    <span className="flex items-center gap-3">
                      <faq.icon size={15} className="text-violet-400 flex-shrink-0 opacity-70" aria-hidden />
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 leading-relaxed pb-4 pl-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <span itemProp="text">{faq.a}</span>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-black font-heading text-white mb-3">Still have questions?</h2>
          <p className="text-slate-400 mb-6 text-sm">Reach out via our Help & Contact page.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/how-it-works" className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold hover:bg-white/10 transition-colors">How It Works</Link>
            <Link href="/help" className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition-colors">Help & Contact</Link>
          </div>
        </div>
      </section>

      <div className="pb-8"><FooterSection /></div>
    </div>
  );
}
