"use client";

import { Navbar } from "@/components/ui/navbar";
import { FooterSection } from "@/components/ui/footer-section";
import EarnetixAboutSection from "@/components/ui/about-us-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <Navbar />
      <EarnetixAboutSection />
      <div className="pb-8"><FooterSection /></div>
    </div>
  );
}
