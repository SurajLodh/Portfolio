"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function AniNewsPage() {
  return (
    <div className="bg-background transition-colors duration-300 w-full min-h-screen pb-20 text-foreground overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-40 right-[-5%] w-64 h-64 border-8 border-accent rounded-full border-dashed opacity-10 animate-spin-slow -z-10"></div>
      <div className="absolute top-[600px] left-[-5%] w-96 h-96 bg-dot-pattern opacity-10 -z-10"></div>

      {/* Hero Header Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 lg:pt-20 pb-12 relative z-10">
        <Link href="/work" className="inline-flex items-center gap-2 font-headline font-bold text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          BACK TO WORK
        </Link>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="inline-block px-4 py-2 rounded-full border-2 border-foreground bg-accent text-white font-headline font-bold text-xs tracking-widest uppercase shadow-[2px_2px_0px_var(--color-shadow)]">
            PRODUCT DESIGNER
          </div>
          <div className="inline-block px-4 py-2 rounded-full border-2 border-foreground bg-card text-foreground font-headline font-bold text-xs tracking-widest uppercase shadow-[2px_2px_0px_var(--color-shadow)]">
            MEDIA
          </div>
          <div className="inline-block px-4 py-2 rounded-full border-2 border-foreground bg-secondary text-foreground font-headline font-bold text-xs tracking-widest uppercase shadow-[2px_2px_0px_var(--color-shadow)]">
            FEB 2026
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[90px] font-headline font-extrabold text-foreground mb-8 leading-[0.95] tracking-tighter max-w-5xl">
          ANI 2.0: Speed and Scalability for South Asia&apos;s{" "}
          <span className="text-accent text-pop underline decoration-4 underline-offset-8">Leading News Feed.</span>
        </h1>
        
        <p className="text-muted-foreground max-w-3xl mb-16 font-body font-medium text-lg lg:text-2xl leading-relaxed border-l-4 border-foreground pl-6">
          &quot;Modernizing South Asia&apos;s leading news wire. I redesigned the digital experience for millions of daily readers, focusing on speed, high-contrast readability, and a sophisticated editorial layout.&quot;
        </p>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] border-4 border-foreground shadow-[12px_12px_0px_var(--color-shadow)] overflow-hidden bg-card"
        >
          <img 
            src="/ani-news/image1.png" 
            alt="ANI News Redesign Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-tertiary border-4 border-foreground rounded-full shadow-pop flex items-center justify-center animate-bounce-in z-20">
            <div className="w-8 h-8 bg-foreground rounded-full"></div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-24 lg:space-y-32 mt-16 relative z-10">
        
        {/* Intro / Challenge Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-headline font-extrabold text-foreground leading-tight">
              The Challenge
            </h2>
            <div className="w-16 h-2 bg-accent"></div>
          </div>
          <div className="md:col-span-7 space-y-6">
            <p className="text-foreground font-body font-medium leading-relaxed text-xl bg-card p-8 rounded-2xl border-4 border-foreground shadow-pop">
              &quot;The existing ANI website was stuck in 2011. It suffered from massive information clutter, low-contrast text, and a layout that felt more like a directory than a news agency. My task was to take this high-volume content and wrap it in a premium, structured system that feels authoritative and effortless to scan.&quot;
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed pt-4">
              I grew up seeing ANI snippets on the morning news while having tea, so getting to redesign their platform was huge. My goal was to simply make it fast and clean enough for millions of people to get their news and get on with their day.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              My approach was that as a user, I want to feel like I&apos;m reading the most reliable source in the room, where the design is so clean that the news is the only thing that matters. I wanted to move ANI away from that &quot;busy&quot; digital look and toward something much more structured and sophisticated.
            </p>
          </div>
        </section>

        {/* Section 01: Typography */}
        <section className="bg-tertiary border-4 border-foreground rounded-[3rem] p-8 md:p-16 shadow-[16px_16px_0px_var(--color-shadow)] relative overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 border-4 border-foreground rounded-full opacity-20 bg-dot-pattern"></div>
          
          <div className="max-w-3xl mb-12 relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full border-2 border-foreground bg-card text-foreground font-headline font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
              Section 01
            </div>
            <h2 className="text-4xl lg:text-6xl font-headline font-extrabold text-[#1E293B] mb-8 leading-tight">
              Focus on Typography &amp; Grid
            </h2>
            <p className="text-[#1E293B]/90 font-body font-medium text-xl leading-relaxed">
              &quot;News is 90% reading. I implemented a strict typographic scale to fix the &apos;Visual Fatigue&apos; of the old site. By using bold, high-contrast headlines and a modular grid, I ensured that whether it&apos;s a budget session or a sports update, the news is always the hero.&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="rounded-2xl border-4 border-foreground shadow-pop overflow-hidden bg-card aspect-video">
              <img src="/ani-news/image2.png" alt="Typography Scale" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl border-4 border-foreground shadow-pop overflow-hidden bg-card aspect-video">
              <img src="/ani-news/image3.png" alt="Grid System" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Section 02: Scale & Versatility */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl border-4 border-foreground shadow-pop overflow-hidden bg-card aspect-square">
                <img src="/ani-news/image4.png" alt="Scale 1" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl border-4 border-foreground shadow-pop overflow-hidden bg-card aspect-square translate-y-8">
                <img src="/ani-news/image5.png" alt="Scale 2" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border-2 border-foreground bg-quaternary text-foreground font-headline font-bold text-xs tracking-widest uppercase mb-2 shadow-pop">
              Section 02
            </div>
            <h2 className="text-4xl lg:text-5xl font-headline font-extrabold text-foreground leading-tight">
              Scale &amp; Versatility
            </h2>
            <div className="p-6 bg-card border-4 border-foreground rounded-2xl shadow-pop relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent border-2 border-foreground rounded-full"></div>
              <p className="text-foreground font-body font-medium leading-relaxed text-lg">
                &quot;ANI handles thousands of stories daily. I designed a flexible &apos;Block System&apos;&mdash;whether a story has a video, a single image, or just text, the layout adapts without breaking. This allows the editorial team to publish breaking news instantly without worrying about the design falling apart.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Before vs After */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-6xl font-headline font-extrabold text-foreground leading-tight">
              Before vs. <span className="text-secondary text-pop">After</span>
            </h2>
            <p className="text-muted-foreground font-body text-xl">
              Moving away from low-contrast, cluttered directory views towards a structured, highly legible editorial format.
            </p>
          </div>
          <div className="rounded-[2rem] border-4 border-foreground shadow-[12px_12px_0px_var(--color-shadow)] overflow-hidden bg-card">
            <img src="/ani-news/image8.png" alt="Before vs After Comparison" className="w-full h-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="rounded-[2rem] border-4 border-foreground shadow-pop overflow-hidden bg-card">
              <img src="/ani-news/image6.png" alt="Comparison Detail 1" className="w-full h-auto" />
            </div>
            <div className="rounded-[2rem] border-4 border-foreground shadow-pop overflow-hidden bg-card">
              <img src="/ani-news/image7.png" alt="Comparison Detail 2" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Micro-Win Section */}
        <section className="bg-secondary border-4 border-foreground rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-[16px_16px_0px_var(--color-shadow)] relative">
          <div className="absolute -top-6 right-20 w-12 h-12 bg-accent border-4 border-foreground rounded-sm rotate-12"></div>
          
          <h2 className="text-4xl lg:text-5xl font-headline font-extrabold text-[#1E293B] mb-12 leading-tight max-w-4xl">
            The Micro-Win: Redesigning for the &quot;10-Minute Grazer&quot;
          </h2>
          
          <div className="bg-card border-4 border-foreground rounded-2xl p-8 shadow-pop mb-16 max-w-4xl relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-quaternary border-b-4 border-l-4 border-foreground rounded-bl-2xl"></div>
            <p className="text-foreground font-body font-medium leading-relaxed text-xl">
              &quot;The old site made you work to find the news. There was almost no difference in visual weight between a budget alert and a recipe recommendation. For the new design, I focused on &apos;Typographic Anchors.&apos; I increased the headline scale and contrast, and added precise spacing between elements. Now, you can scan 10 headlines in under a minute without getting a headache. It&apos;s a tiny detail, but it makes the whole experience feel calmer and more reliable.&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Visual Noise vs. Clarity",
                desc: "The old site uses blue hyperlinked text and dense borders, which feels like a directory from 2011. The redesign uses Black & White minimalism, letting images and bold headlines act as the primary interface."
              },
              {
                title: "Information Density",
                desc: "The old site is cramped (low padding). The redesign uses Systematic Spacing. Content is not removed, but breathing room is added around the text, reducing the Information Overload headache for the user."
              },
              {
                title: "Authority",
                desc: "The old design looks like a blog. The new design looks like a News Product. By using a structured grid and a Big Story focal point, you give the user a clear starting point for their eyes."
              },
              {
                title: "Standardization",
                desc: "Everything from the navigation, standard news cards, and even complex multimedia blocks have a uniform structure. This solves the core problem of a legacy site: unpredictability."
              },
              {
                title: "Aesthetic",
                desc: "The design is neutral, reliable, and trustworthy. It correctly allows the news content to take priority without distracting visual clutter."
              },
              {
                title: "Metadata",
                desc: "Metadata on the cards (author, date, Latest tags) using Figtree is correctly prioritized. This is highly functional for both general users seeking updates and professionals sourcing content."
              }
            ].map((item, i) => (
              <div key={i} className="bg-card/90 border-2 border-foreground rounded-xl p-6 shadow-[4px_4px_0px_var(--color-shadow)] hover:-translate-y-2 transition-transform">
                <h3 className="text-xl font-headline font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Final Mockup */}
        <section className="py-8">
          <div className="rounded-[2rem] border-4 border-foreground shadow-[12px_12px_0px_var(--color-shadow)] overflow-hidden bg-card">
            <img src="/ani-news/image10.png" alt="ANI News Final Mockup" className="w-full h-auto" />
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-[#7FFF00] rounded-[3rem] p-6 sm:p-10 md:p-16 lg:p-24 text-center mt-32 relative overflow-hidden border-4 border-foreground shadow-[16px_16px_0px_var(--color-shadow)]">
          <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-foreground/10 rounded-full border-4 border-foreground/20 -translate-y-1/2 translate-x-1/4 animate-wiggle"></div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold text-foreground mb-8 md:mb-10 max-w-3xl mx-auto leading-[0.95] tracking-tighter drop-shadow-none">
            Next Project
          </h2>

          <Link href="/work/shriconnect">
            <Button className="!bg-white !text-[#1E293B] hover:!bg-accent hover:!text-white text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 border-2 border-foreground shadow-[4px_4px_0px_#1E293B]">
              ShriConnect ERP Ecosystem
            </Button>
          </Link>

          <div className="absolute bottom-[-20px] left-6 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-accent border-4 border-foreground rounded-full hidden sm:block animate-bounce-in opacity-70"></div>
        </div>
      </div>
    </div>
  );
}
