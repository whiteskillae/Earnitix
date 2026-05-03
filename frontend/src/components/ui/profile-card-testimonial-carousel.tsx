"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CodeXml,
  SendHorizontal,
  Video,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Quote
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Michael Chen",
    title: "Reel Creator & Tech Blogger",
    description:
      "Earnetix completely changed how I look at content creation. I used to just post for fun, but now I have a structured way to earn while building my portfolio. The task verification is fair and the payouts are fast.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=600&auto=format&fit=crop",
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Jessica Roberts",
    title: "Brand Promoter & Micro-Influencer",
    description:
      "The affiliate-style tasks on Earnetix are so much easier than traditional platforms. I get my own link, promote original content, and see my earnings grow in real-time. It's the best platform for micro-creators.",
    imageUrl:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80",
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "William Carter",
    title: "Freelance Copywriter & Blogger",
    description:
      "Having my own personal blog page on Earnetix has helped me showcase my work to brands I never thought I'd reach. It's not just an earning app; it's a professional growth hub for creators.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
];

export interface TestimonialCarouselProps {
  className?: string;
}

export function TestimonialCarousel({ className }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % testimonials.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + testimonials.length) % testimonials.length
    );

  const currentTestimonial = testimonials[currentIndex];

  const socialIcons = [
    { icon: CodeXml, url: currentTestimonial.githubUrl, label: "GitHub" },
    { icon: SendHorizontal, url: currentTestimonial.twitterUrl, label: "Twitter" },
    { icon: Video, url: currentTestimonial.youtubeUrl, label: "YouTube" },
    { icon: Briefcase, url: currentTestimonial.linkedinUrl, label: "LinkedIn" },
  ];

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4 py-20", className)}>
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] dark:text-white tracking-tight">What our <span className="text-primary">creators</span> say</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">Join thousands of creators who are already earning on Earnetix.</p>
      </div>

      {/* Desktop layout */}
      <div className='hidden md:flex relative items-center justify-center'>
        {/* Avatar */}
        <div className='w-[400px] h-[500px] rounded-[2rem] overflow-hidden bg-gray-200 dark:bg-neutral-800 flex-shrink-0 shadow-2xl relative z-20 border-8 border-white dark:border-slate-800'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: "anticipate" }}
              className='w-full h-full'
            >
              <Image
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                width={470}
                height={470}
                className='w-full h-full object-cover'
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card */}
        <div className='bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl p-12 ml-[-100px] z-10 max-w-xl flex-1 border border-slate-100 dark:border-white/5 relative'>
          <div className="absolute top-10 right-10 opacity-10">
            <Quote className="size-24 text-primary" />
          </div>
          
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className='mb-8'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight'>
                  {currentTestimonial.name}
                </h2>

                <p className='text-sm font-bold text-primary uppercase tracking-widest'>
                  {currentTestimonial.title}
                </p>
              </div>

              <p className='text-[#0F172A] dark:text-slate-300 text-lg leading-relaxed mb-10 font-medium italic'>
                "{currentTestimonial.description}"
              </p>

              <div className='flex space-x-3'>
                {socialIcons.map(({ icon: IconComponent, url, label }) => (
                  <Link
                    key={label}
                    href={url || "#"}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-[#0F172A] dark:bg-white rounded-xl flex items-center justify-center transition-all hover:bg-primary dark:hover:bg-primary group hover:scale-110 cursor-pointer'
                    aria-label={label}
                  >
                    <IconComponent className='w-4 h-4 text-white dark:text-[#0F172A] group-hover:text-white' />
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile layout */}
      <div className='md:hidden max-w-sm mx-auto text-center'>
        {/* Avatar */}
        <div className='w-full aspect-[4/5] bg-gray-200 dark:bg-gray-700 rounded-3xl overflow-hidden mb-8 shadow-xl border-4 border-white dark:border-slate-800'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <Image
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                width={400}
                height={400}
                className='w-full h-full object-cover'
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card content */}
        <div className='px-4 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-white/5 shadow-xl'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-1'>
                {currentTestimonial.name}
              </h2>
              
              <p className='text-xs font-bold text-primary uppercase tracking-widest mb-6'>
                {currentTestimonial.title}
              </p>
              
              <p className='text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-8 italic'>
                "{currentTestimonial.description}"
              </p>
              
              <div className='flex justify-center space-x-3'>
                {socialIcons.map(({ icon: IconComponent, url, label }) => (
                  <Link
                    key={label}
                    href={url || "#"}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-[#0F172A] dark:bg-white rounded-xl flex items-center justify-center transition-all hover:bg-primary dark:hover:bg-primary group cursor-pointer'
                    aria-label={label}
                  >
                    <IconComponent className='w-4 h-4 text-white dark:text-[#0F172A] group-hover:text-white' />
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className='flex justify-center items-center gap-8 mt-12'>
        {/* Previous */}
        <button
          onClick={handlePrevious}
          aria-label='Previous testimonial'
          className='w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 shadow-lg flex items-center justify-center hover:bg-primary hover:text-white dark:hover:bg-primary transition-all cursor-pointer group'
        >
          <ChevronLeft className='w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-white' />
        </button>

        {/* Dots */}
        <div className='flex gap-3'>
          {testimonials.map((_, testimonialIndex) => (
            <button
              key={testimonialIndex}
              onClick={() => setCurrentIndex(testimonialIndex)}
              className={cn(
                "w-3 h-3 rounded-full transition-all cursor-pointer",
                testimonialIndex === currentIndex
                  ? "bg-primary w-8"
                  : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
              )}
              aria-label={`Go to testimonial ${testimonialIndex + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label='Next testimonial'
          className='w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 shadow-lg flex items-center justify-center hover:bg-primary hover:text-white dark:hover:bg-primary transition-all cursor-pointer group'
        >
          <ChevronRight className='w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-white' />
        </button>
      </div>
    </div>
  );
}
