import Link from 'next/link';
import { Zap, Mail, ArrowRight, MessageCircle, Camera, SendHorizontal, Video, Briefcase } from 'lucide-react';

const LINKS = {
  platform: [
    { label: 'How it Works', href: '/how-it-works' },
    { label: 'Earning Tasks', href: '/tasks' },
    { label: 'Success Stories', href: '/success-stories' },
    { label: 'About Us', href: '/about' },
  ],
  resources: [
    { label: 'Creator Blog', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Creator Guidelines', href: '#' },
    { label: 'Community Discord', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Security', href: '#' },
  ],
};

const SOCIALS = [
  { icon: MessageCircle, label: 'Discord', href: 'https://discord.com/invite/earnetix' },
  { icon: Camera, label: 'Instagram', href: 'https://instagram.com/earnetix' },
  { icon: SendHorizontal, label: 'Telegram', href: 'https://t.me/earnetix' },
  { icon: Video, label: 'YouTube', href: 'https://youtube.com/@earnetix' },
  { icon: Briefcase, label: 'LinkedIn', href: 'https://linkedin.com/company/earnetix' },
];

export function EarnetixFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0F1E] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* CTA Banner */}
        <div className="py-16 border-b border-white/5">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600/20 to-emerald-500/10 border border-indigo-500/20 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-white font-heading tracking-tight mb-3">
                Ready to start earning today?
              </h3>
              <p className="text-slate-400 text-lg max-w-xl">
                Join 12,400+ Indian creators who are already cashing out from Earnetix. It's free to join.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link
                href="/tasks"
                className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base transition-all hover:scale-105 shadow-xl shadow-indigo-600/30 flex items-center gap-2 justify-center"
              >
                Browse Tasks <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/how-it-works"
                className="px-8 py-4 rounded-2xl border border-white/10 text-white font-bold text-base hover:bg-white/5 transition-all flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 fill-white text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-heading uppercase">EARNETIX</span>
            </Link>

            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              India's premier creator-earning platform. Post content. Complete tasks. Get paid. It's that simple.
            </p>

            <div className="flex gap-3 flex-wrap">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Weekly Creator Tips</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-l-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 min-w-0"
                />
                <button aria-label="Subscribe to newsletter" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 rounded-r-xl transition-colors flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          {[
            { heading: 'Platform', links: LINKS.platform },
            { heading: 'Resources', links: LINKS.resources },
            { heading: 'Legal', links: LINKS.legal },
          ].map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-5">{col.heading}</p>
              <div className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="text-sm text-slate-500 hover:text-white transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">© {year} Earnetix Creator Hub. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-xs text-slate-600">Payouts are live · 24/7 Support</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
