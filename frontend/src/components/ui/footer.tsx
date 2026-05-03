import Link from "next/link";
import { Zap } from "lucide-react";

const LINKS = {
  platform: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Earning Methods", href: "/earning-methods" },
    { label: "Tasks", href: "/tasks" },
  ],
  company: [
    { label: "Benefits", href: "/benefits" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-[#0A0F1E]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 w-fit group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 fill-white text-white" />
              </div>
              <span className="text-xl font-black text-white font-heading tracking-tight">Earnetix</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              A creator-driven earning platform that empowers users to make money by creating reels, writing blogs, and promoting digital content.
            </p>
            <p className="text-xs text-slate-600 mt-2">
              Vision: <span className="text-slate-400">Earn Through Content. Grow with Skills.</span>
            </p>
          </div>

          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">Platform</p>
            <div className="flex flex-col gap-3">
              {LINKS.platform.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-slate-500 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">Company</p>
            <div className="flex flex-col gap-3">
              {LINKS.company.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-slate-500 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">© {year} Earnetix. All rights reserved.</p>
          <p className="text-xs text-slate-600">
            App coming soon · Currently available as a <span className="text-slate-400">Web App</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
