"use client";

import Link from "next/link";
import { Video, FileText, Link2, Share2, Users, CheckCircle2, Zap, ArrowRight } from "lucide-react";

// Earning method icons for orbit rings (lucide-react instead of react-icons)
const orbitIcons = [
  { Icon: Video, color: "#EF4444" },
  { Icon: FileText, color: "#3B82F6" },
  { Icon: Link2, color: "#10B981" },
  { Icon: Share2, color: "#8B5CF6" },
  { Icon: Users, color: "#F59E0B" },
  { Icon: CheckCircle2, color: "#6366F1" },
  { Icon: Zap, color: "#06B6D4" },
  { Icon: ArrowRight, color: "#EC4899" },
];

export default function StackFeatureSection() {
  const orbitCount = 2;
  const orbitGap = 10;
  const iconsPerOrbit = Math.ceil(orbitIcons.length / orbitCount);

  return (
    <section className="relative max-w-6xl mx-auto my-20 px-6 flex items-center justify-between min-h-[24rem] border border-white/10 bg-[#0A0F1E] overflow-hidden rounded-3xl">
      {/* Left side */}
      <div className="w-1/2 z-10 py-12">
        <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">Creator Economy</p>
        <h2 className="text-4xl sm:text-5xl font-black font-heading text-white mb-4 tracking-tighter">
          Create.<br />Earn.<br />Grow.
        </h2>
        <p className="text-slate-400 mb-8 max-w-xs leading-relaxed text-sm">
          Earnetix combines reels, blogs, affiliate marketing, and referrals — all in one creator-first platform.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <Link href="/how-it-works" className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-indigo-600/20">
            How It Works
          </Link>
          <Link href="/earning-methods" className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 font-bold text-sm hover:bg-white/10 transition-colors">
            Earning Methods
          </Link>
        </div>
      </div>

      {/* Right side: orbit animation */}
      <div className="relative w-1/2 h-full flex items-center justify-start overflow-hidden min-h-[24rem]">
        <div className="relative w-[40rem] h-[40rem] translate-x-[30%] flex items-center justify-center">
          {/* Center icon */}
          <div className="w-20 h-20 rounded-full bg-indigo-600/20 border-2 border-indigo-500/40 shadow-lg flex items-center justify-center z-10">
            <Zap className="w-10 h-10 fill-indigo-400 text-indigo-400" />
          </div>

          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${14 + orbitGap * (orbitIdx + 1)}rem`;
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border border-dashed border-indigo-500/20"
                style={{
                  width: size,
                  height: size,
                  animation: `spin ${14 + orbitIdx * 8}s linear infinite`,
                }}
              >
                {orbitIcons
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={iconIdx}
                        className="absolute bg-[#0F172A] rounded-full p-2 border border-white/10"
                        style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                      >
                        <cfg.Icon className="w-5 h-5" style={{ color: cfg.color }} />
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
