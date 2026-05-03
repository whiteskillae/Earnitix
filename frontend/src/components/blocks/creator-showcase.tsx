"use client";

import { useState } from "react";
import { FlipReveal, FlipRevealItem } from "@/components/ui/flip-reveal";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const galleryItems = [
    { id: 1, type: "reels", src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600", alt: "Reel Creation" },
    { id: 2, type: "blogs", src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600", alt: "Blog Writing" },
    { id: 3, type: "affiliate", src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=600", alt: "Affiliate Marketing" },
    { id: 4, type: "reels", src: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=600", alt: "Video Editing" },
    { id: 5, type: "blogs", src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600", alt: "Creator Workspace" },
    { id: 6, type: "affiliate", src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600", alt: "Brand Collaboration" },
    { id: 7, type: "reels", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600", alt: "Team Collaboration" },
    { id: 8, type: "blogs", src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600", alt: "Writing Story" },
    { id: 9, type: "affiliate", src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600", alt: "Growth Analytics" },
];

export const CreatorShowcase = () => {
    const [key, setKey] = useState("all");

    return (
        <section className="py-20 bg-zinc-50 dark:bg-[#0F172A]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] dark:text-white tracking-tight">Earning <span className="text-primary">Categories</span></h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">Filter through our primary creator tracks and see where you fit in the Earnetix ecosystem.</p>
                </div>

                <div className="flex flex-col items-center gap-12">
                    <ToggleGroup
                        type="single"
                        className="bg-white dark:bg-slate-900 rounded-2xl border dark:border-white/10 p-2 shadow-xl"
                        value={key}
                        onValueChange={(e) => e && setKey(e)}>
                        <ToggleGroupItem value="all" className="px-6 py-2 rounded-xl data-[state=on]:bg-primary data-[state=on]:text-white transition-all">
                            All Tracks
                        </ToggleGroupItem>
                        <ToggleGroupItem value="reels" className="px-6 py-2 rounded-xl data-[state=on]:bg-primary data-[state=on]:text-white transition-all">
                            Reels
                        </ToggleGroupItem>
                        <ToggleGroupItem value="blogs" className="px-6 py-2 rounded-xl data-[state=on]:bg-primary data-[state=on]:text-white transition-all">
                            Blogs
                        </ToggleGroupItem>
                        <ToggleGroupItem value="affiliate" className="px-6 py-2 rounded-xl data-[state=on]:bg-primary data-[state=on]:text-white transition-all">
                            Affiliate
                        </ToggleGroupItem>
                    </ToggleGroup>

                    <FlipReveal className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl" keys={[key]} showClass="flex" hideClass="hidden">
                        {galleryItems.map((item) => (
                            <FlipRevealItem key={item.id} flipKey={item.type} className="relative group overflow-hidden rounded-3xl aspect-square shadow-lg border border-white/10">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-bold text-lg uppercase tracking-wider">{item.alt}</p>
                                </div>
                            </FlipRevealItem>
                        ))}
                    </FlipReveal>
                </div>
            </div>
        </section>
    );
};
