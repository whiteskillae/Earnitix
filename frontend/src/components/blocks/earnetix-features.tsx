'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Target, CalendarCheck, Sparkles, DollarSign, TrendingUp, Shield, ArrowRight, Play, Globe, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

const MESCHAC_AVATAR = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop'
const BERNARD_AVATAR = 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop'
const THEO_AVATAR = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
const GLODIE_AVATAR = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'

const card =
  'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col'
const cardInner = 'rounded-xl border border-white/10 bg-white/5'

function FeatureCard({
  icon: Icon,
  iconColor,
  title,
  desc,
  children,
}: {
  icon: React.ElementType
  iconColor: string
  title: string
  desc: string
  children?: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={card}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${iconColor}`}>
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-white font-bold text-lg font-heading mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">{desc}</p>
      {children}
    </motion.div>
  )
}

const MeetingCard = () => (
  <div className={`${cardInner} p-4 mt-auto`}>
    <div className="text-sm font-semibold text-white mb-1">Live Creator Session</div>
    <div className="text-slate-500 text-xs mb-4">Today · 6:30 – 7:45 PM IST</div>
    <div className="flex -space-x-2 mb-2">
      {[MESCHAC_AVATAR, BERNARD_AVATAR, THEO_AVATAR, GLODIE_AVATAR].map((src, i) => (
        <img
          key={i}
          src={src}
          alt="creator"
          className="w-7 h-7 rounded-full object-cover border-2 border-[#0F172A]"
        />
      ))}
    </div>
    <div className="text-xs text-slate-500">Reel Strategy Workshop</div>
  </div>
)

const ReviewCard = () => (
  <div className="relative mt-auto">
    <div className={`${cardInner} w-4/5 p-3 transition-transform duration-200 hover:-rotate-2`}>
      <div className="flex items-center gap-2 mb-3">
        <img src={MESCHAC_AVATAR} alt="reviewer" className="w-6 h-6 rounded-full object-cover border border-white/10" />
        <span className="text-slate-400 text-xs font-medium">Aryan Sharma</span>
        <span className="text-slate-600 text-xs ml-auto">2m ago</span>
      </div>
      <div className="space-y-1.5 ml-8">
        <div className="h-2 rounded-full bg-white/10 w-full" />
        <div className="h-2 rounded-full bg-white/10 w-3/5" />
        <div className="h-2 rounded-full bg-white/10 w-1/2" />
      </div>
      <div className="ml-8 mt-3 flex gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <span key={s} className="text-yellow-400 text-xs">★</span>
        ))}
      </div>
    </div>
    <div className={`${cardInner} absolute -top-4 right-0 w-2/5 aspect-square flex items-center justify-center hover:rotate-2 transition-transform duration-200`}>
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
        <Play className="w-4 h-4 fill-white/60 text-white/60" />
      </div>
    </div>
  </div>
)

const AICard = () => (
  <div className={`${cardInner} mt-auto translate-y-2 hover:translate-y-0 transition-transform duration-200 p-4`}>
    <div className="w-fit mb-2">
      <Sparkles className="w-3.5 h-3.5 fill-indigo-300 text-indigo-300" />
    </div>
    <p className="text-slate-300 text-sm mb-3">How do I maximize earnings from Reel tasks with under 5K followers?</p>
    <div className="bg-white/5 -mx-2 -mb-2 rounded-lg p-3">
      <div className="text-slate-500 text-xs mb-3">Ask AI Earning Coach</div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="size-7 rounded-xl bg-transparent shadow-none border-white/10 text-white">
            <Plus className="w-3.5 h-3.5" />
          </Button>
          <Button variant="outline" size="icon" className="size-7 rounded-xl bg-transparent shadow-none border-white/10 text-white">
            <Globe className="w-3.5 h-3.5" />
          </Button>
        </div>
        <Button size="icon" className="size-7 rounded-xl bg-indigo-600 hover:bg-indigo-500">
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
        </Button>
      </div>
    </div>
  </div>
)

export function EarnetixFeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Why Earnetix</p>
          <h2 className="text-white max-w-2xl text-4xl md:text-5xl font-black font-heading tracking-tight">
            Built for creators who want to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">earn more, faster.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Target}
            iconColor="bg-indigo-500/20 text-indigo-400"
            title="Verified Task Marketplace"
            desc="Browse hundreds of creator tasks across Reels, Blogs, Affiliate, and Referral. Every task is pre-verified and has a fixed earning potential."
          >
            <MeetingCard />
          </FeatureCard>

          <FeatureCard
            icon={CalendarCheck}
            iconColor="bg-emerald-500/20 text-emerald-400"
            title="Smart Content Review"
            desc="Our AI-powered review system validates your content submissions within hours — no waiting days for a human reviewer."
          >
            <ReviewCard />
          </FeatureCard>

          <FeatureCard
            icon={Sparkles}
            iconColor="bg-purple-500/20 text-purple-400"
            title="AI Earning Coach"
            desc="Get personalized guidance on which tasks to take, how to improve content quality, and maximize your weekly earnings."
          >
            <AICard />
          </FeatureCard>
        </div>

        {/* Second row - stats */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            { icon: DollarSign, color: 'text-emerald-400 bg-emerald-500/20', title: 'Instant Withdrawals', desc: 'Withdraw earnings to UPI, bank, or wallet any time — no minimum balance or waiting period.' },
            { icon: TrendingUp, color: 'text-indigo-400 bg-indigo-500/20', title: 'Creator Growth Analytics', desc: 'Track your performance, see which task types earn the most, and get weekly growth reports.' },
            { icon: Shield, color: 'text-yellow-400 bg-yellow-500/20', title: '100% Fraud-Free', desc: 'Every payout is backed by our Earnetix Guarantee. Creators are never shortchanged.' },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md items-start"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${f.color}`}>
                <f.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base font-heading mb-1">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
