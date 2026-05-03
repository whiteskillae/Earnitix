'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Platform',
    links: [
      { title: 'How It Works', href: '/how-it-works' },
      { title: 'Earning Methods', href: '/earning-methods' },
      { title: 'Tasks', href: '/tasks' },
      { title: 'Benefits', href: '/benefits' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'FAQ', href: '/faq' },
      { title: 'Help & Contact', href: '/help' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { title: 'Privacy Policy', href: '#' },
      { title: 'Terms of Service', href: '#' },
    ],
  },
  {
    label: 'Social',
    links: [
      { title: 'Facebook', href: '#', icon: FaFacebook as React.ComponentType<{ className?: string }> },
      { title: 'Instagram', href: '#', icon: FaInstagram as React.ComponentType<{ className?: string }> },
      { title: 'YouTube', href: '#', icon: FaYoutube as React.ComponentType<{ className?: string }> },
      { title: 'LinkedIn', href: '#', icon: FaLinkedin as React.ComponentType<{ className?: string }> },
    ],
  },
];

export function FooterSection() {
  return (
    <footer className="md:rounded-t-[3rem] relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-[2rem] border-t border-white/10 bg-[radial-gradient(35%_128px_at_50%_0%,rgba(99,102,241,0.12),transparent)] px-6 py-12 lg:py-16">
      <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur bg-indigo-400/40" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <Link href="/" className="flex items-center gap-2.5 group w-fit">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
              <Zap className="w-4 h-4 fill-white text-white" />
            </div>
            <span className="text-lg font-black text-white font-heading">Earnetix</span>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs mt-2">
            A creator-driven earning platform. Make money by creating reels, writing blogs, and completing digital tasks.
          </p>
          <p className="text-slate-600 text-xs mt-4">
            © {new Date().getFullYear()} Earnetix. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{section.label}</h3>
                <ul className="text-slate-500 mt-4 space-y-2.5 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="hover:text-white inline-flex items-center gap-1.5 transition-colors duration-200"
                      >
                        {link.icon && <link.icon className="w-3.5 h-3.5" />}
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/5 w-full text-center">
        <p className="text-xs text-slate-600">
          Vision: <span className="text-slate-400">Earn Through Content. Grow with Skills.</span>
        </p>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
