import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap, Video, FileText, TrendingUp, ShieldCheck, Users, Code } from 'lucide-react'

export function Features4() {
    return (
        <section className="py-12 md:py-20 bg-white dark:bg-[#0F172A] relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[10rem] rounded-full"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 blur-[10rem] rounded-full"></div>

            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 relative z-10">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-bold lg:text-6xl tracking-tight text-[#0F172A] dark:text-white">
                        Everything you need to <span className="text-primary">monetize</span> your creativity
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        Earnetix is more than just a task platform. It's a complete ecosystem designed to help you grow your digital presence while building a sustainable income stream through content.
                    </p>
                </div>

                <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border dark:border-white/10 rounded-3xl overflow-hidden *:p-10 sm:grid-cols-2 lg:grid-cols-3 bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-2xl">
                    <div className="space-y-4 hover:bg-primary/5 transition-colors group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all">
                                <Zap className="size-5 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">Fast Payouts</h3>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            No waiting for months. Once your task is verified, earnings hit your wallet instantly.
                        </p>
                    </div>
                    <div className="space-y-4 hover:bg-emerald-500/5 transition-colors group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-all">
                                <Video className="size-5 text-emerald-500" />
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">Originality First</h3>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            We value creativity over passive viewing. Earn more for original reels and blogs.
                        </p>
                    </div>
                    <div className="space-y-4 hover:bg-indigo-500/5 transition-colors group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-all">
                                <ShieldCheck className="size-5 text-indigo-500" />
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">Verified Secure</h3>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Multi-layer task verification ensures authenticity and protects the creator ecosystem.
                        </p>
                    </div>
                    <div className="space-y-4 hover:bg-amber-500/5 transition-colors group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-all">
                                <FileText className="size-5 text-amber-500" />
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">Personal Blog</h3>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Every creator gets a dedicated blog page to publish content and build their portfolio.
                        </p>
                    </div>
                    <div className="space-y-4 hover:bg-pink-500/5 transition-colors group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-pink-500/10 rounded-lg group-hover:bg-pink-500/20 transition-all">
                                <Users className="size-5 text-pink-500" />
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">Referral Bonuses</h3>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Invite fellow creators and earn bonuses when they complete their first tasks.
                        </p>
                    </div>
                    <div className="space-y-4 hover:bg-sky-500/5 transition-colors group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-sky-500/10 rounded-lg group-hover:bg-sky-500/20 transition-all">
                                <TrendingUp className="size-5 text-sky-500" />
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">Growth Hub</h3>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Access brand campaigns and grow from a micro-creator to a professional influencer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
