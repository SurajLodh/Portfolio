"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function AniNewsCaseStudy() {
  return (
    <div className="bg-background transition-colors duration-300 w-full min-h-screen pb-20 text-foreground overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-20 left-[-5%] w-64 h-64 bg-accent/10 rounded-full border-4 border-foreground -z-10 animate-wiggle"></div>
      <div className="absolute top-[800px] right-[-5%] w-96 h-96 bg-dot-pattern opacity-10 -z-10"></div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-8 pt-12 lg:pt-20 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16 items-start">
          <div className="flex-[2] space-y-8">
            <div className="inline-block px-4 py-2 rounded-full border-2 border-foreground bg-accent text-foreground font-headline font-bold text-xs tracking-widest uppercase shadow-[2px_2px_0px_#1E293B]">
              Case Study
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-headline font-extrabold text-foreground leading-[0.9] tracking-tighter">
              ANI News <br />
              <span className="text-secondary text-pop">Platform Redesign</span>
            </h1>
            
            <p className="text-muted-foreground max-w-xl leading-relaxed font-body font-medium text-lg lg:text-xl">
              A digital evolution for India's premier news agency, transforming content delivery for over 3 million monthly active users through a unified design language.
            </p>
          </div>

          <div className="flex-1 w-full">
            <Card className="p-8 border-4 bg-white shadow-pop rotate-1">
              <div className="space-y-6">
                 <div className="space-y-1">
                   <div className="text-[10px] text-muted-foreground font-headline font-bold uppercase tracking-widest">ROLE</div>
                   <div className="text-lg font-headline font-extrabold text-foreground">Product Designer</div>
                 </div>
                 <div className="space-y-1">
                   <div className="text-[10px] text-muted-foreground font-headline font-bold uppercase tracking-widest">TIMELINE</div>
                   <div className="text-lg font-headline font-extrabold text-foreground">Feb 2026 — Present</div>
                 </div>
                 <div className="space-y-1">
                   <div className="text-[10px] text-muted-foreground font-headline font-bold uppercase tracking-widest">CLIENT</div>
                   <div className="text-lg font-headline font-extrabold text-foreground">ANI News — VoxturrLabs</div>
                 </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-foreground rounded-[3rem] -z-10 -rotate-1"></div>
          <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] rounded-[2.5rem] overflow-hidden border-4 border-foreground shadow-pop">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop" 
              alt="ANI News Hero" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* The Challenge Section */}
      <div className="bg-tertiary/10 py-24 md:py-32 w-full relative">
        <div className="absolute top-0 left-0 w-full h-4 bg-foreground/10 border-b-2 border-foreground border-dashed"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
            <div className="flex-1 space-y-8">
              <div className="inline-block px-6 py-2 bg-foreground text-white font-headline font-extrabold text-xs uppercase tracking-widest rounded-lg shadow-[4px_4px_0px_#FFB800]">
                THE CHALLENGE
              </div>
              <h2 className="text-4xl lg:text-6xl font-headline font-extrabold text-foreground leading-[1.1] tracking-tight">
                Fragmented workflows <br />
                and editorial <br />
                <span className="text-accent">bottlenecks.</span>
              </h2>
            </div>
            <div className="flex-1 space-y-6 text-foreground font-body font-medium leading-relaxed text-lg pt-2 md:pt-16">
              <p>
                ANI News operates as a massive scale, serving millions of viewers and thousands of media partners. However, the legacy platform suffered from a fragmented design language that made updates slow and inconsistent across web and mobile.
              </p>
              <p>
                The editorial team was bogged down by an aging CMS that lacked intuitive workflows, making it difficult to publish breaking news with the speed required in modern 24/7 news cycle. The primary goal was to create a scalable design system and a custom CMS dashboard that prioritizes editorial speed without compromising on design quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Editorial Approach */}
      <div className="max-w-7xl mx-auto px-8 py-24 md:py-32">
        <div className="max-w-2xl mb-16 relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-accent rounded-full -z-10 animate-bounce-in"></div>
          <h2 className="text-4xl lg:text-6xl font-headline font-extrabold text-foreground mb-6">
            The Editorial Approach
          </h2>
          <p className="text-muted-foreground font-body font-medium leading-relaxed text-lg lg:text-xl">
            Architecting a system that balances journalistic authority with modern digital efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <Card className="p-10 lg:col-span-2 flex flex-col justify-between space-y-8 bg-white border-4">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent border-4 border-foreground flex items-center justify-center text-foreground font-headline font-extrabold text-xl shadow-[4px_4px_0px_#1E293B]">
                  01
                </div>
                <h3 className="text-3xl font-headline font-extrabold text-foreground">Foundation: The 'News-First' Design System</h3>
              </div>
              <p className="text-muted-foreground font-body font-medium leading-relaxed text-lg">
                We developed a comprehensive component library focusing on high-density information display. The system utilizes a hybrid typographic scale—Noto Serif for headlines to maintain ANI's heritage authority, and Manrope for data-heavy editorial dashboards.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-4">
               <div className="h-48 rounded-2xl overflow-hidden border-4 border-foreground shadow-pop rotate-1">
                 <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="UI Element" />
               </div>
               <div className="h-48 rounded-2xl overflow-hidden border-4 border-foreground shadow-pop -rotate-2">
                 <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover" alt="Typography" />
               </div>
            </div>
          </Card>

          {/* Card 2 */}
          <Card className="p-10 flex flex-col space-y-8 bg-secondary border-4 relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/20 rounded-full border-4 border-white/30 group-hover:scale-110 transition-transform"></div>
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white border-4 border-foreground flex items-center justify-center text-foreground font-headline font-extrabold text-xl shadow-[4px_4px_0px_#1E293B]">
                  02
                </div>
                <h3 className="text-3xl font-headline font-extrabold text-white drop-shadow-[2px_2px_0px_#1E293B]">CMS Redesign</h3>
              </div>
              <p className="text-white/90 font-body font-medium leading-relaxed text-lg">
                Creating a custom dashboard for editors that reduced time-to-publish by 40% through intuitive UI architecture and real-time collaboration tools.
              </p>
            </div>
          </Card>

          {/* Card 3 - Full width */}
          <Card className="p-10 lg:col-span-3 flex flex-col md:flex-row items-center gap-12 border-4 bg-white hover:bg-quaternary transition-colors group">
            <div className="flex-1 space-y-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent border-4 border-foreground flex items-center justify-center text-foreground font-headline font-extrabold text-xl shadow-[4px_4px_0px_#1E293B]">
                  03
                </div>
                <h3 className="text-3xl md:text-4xl font-headline font-extrabold text-foreground group-hover:text-white transition-colors">User-Centric News Feed</h3>
              </div>
              <p className="text-muted-foreground group-hover:text-white/90 transition-colors font-body font-medium leading-relaxed text-lg max-w-xl">
                Reimagining the news consumer UI model. We implemented gesture-based discovery experiences that allow users to swipe through breaking stories without leaving the context of their current category.
              </p>
            </div>
            
            <div className="flex-1 w-full flex justify-center md:justify-end relative z-10">
               <div className="w-64 h-[450px] rounded-[2.5rem] border-8 border-foreground shadow-pop overflow-hidden rotate-2 group-hover:rotate-0 transition-transform duration-500">
                  <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" alt="Mobile UI" />
               </div>
            </div>
          </Card>

        </div>
      </div>

      {/* Interface Explorations */}
      <div className="max-w-7xl mx-auto px-8 pb-32">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-foreground -z-10 hidden md:block"></div>
          <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-foreground bg-background px-10 inline-block">
            Interface Explorations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Huge Left Image */}
           <div className="md:col-span-2 md:row-span-2 h-[400px] md:h-[650px] rounded-[3rem] overflow-hidden border-8 border-foreground shadow-pop group">
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Dashboard UI" />
           </div>

           {/* Top Right Box */}
           <Card className="p-8 space-y-6 flex flex-col justify-center border-4 bg-tertiary h-[310px]">
             <span className="inline-block px-3 py-1 bg-foreground text-white font-headline font-bold text-[10px] uppercase tracking-widest rounded shadow-[2px_2px_0px_#FFB800]">DESIGN SYSTEM</span>
             <p className="text-foreground font-body font-bold text-lg leading-relaxed">
               The new CMS dashboard provides a modular block-based editor, allowing journalists to build complex stories up to 40% faster.
             </p>
           </Card>
           
           {/* Mid Right Image */}
           <div className="h-[310px] rounded-[2.5rem] overflow-hidden border-4 border-foreground shadow-pop group">
             <img src="https://images.unsplash.com/photo-1481481600674-e9a5c88b64a2?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Article Mockup" />
           </div>
        </div>
      </div>

      {/* The Impact */}
      <div className="max-w-7xl mx-auto px-8 pb-32 relative z-10">
        <div className="bg-foreground rounded-[4rem] p-12 md:p-20 shadow-[16px_16px_0px_#FFB800] relative overflow-hidden">
           {/* Abstract grid pattern */}
           <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white mb-24 relative z-10 border-b-4 border-white/10 pb-16">
              <div className="text-center md:text-left space-y-2 group">
                 <div className="text-7xl md:text-9xl font-headline font-extrabold text-accent text-pop group-hover:scale-110 transition-transform">40%</div>
                 <div className="text-xs uppercase tracking-[0.2em] font-headline font-bold text-white/60">reduction in publish time</div>
              </div>
              <div className="text-center md:text-left space-y-2 group">
                 <div className="text-7xl md:text-9xl font-headline font-extrabold text-tertiary text-pop group-hover:scale-110 transition-transform">3M+</div>
                 <div className="text-xs uppercase tracking-[0.2em] font-headline font-bold text-white/60">monthly active users</div>
              </div>
              <div className="text-center md:text-left space-y-2 group">
                 <div className="text-7xl md:text-9xl font-headline font-extrabold text-quaternary text-pop group-hover:scale-110 transition-transform">100%</div>
                 <div className="text-xs uppercase tracking-[0.2em] font-headline font-bold text-white/60">visual consistency</div>
              </div>
           </div>

           <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
              <div className="max-w-xl text-center md:text-left">
                 <h2 className="text-4xl font-headline font-extrabold text-white mb-6">The Impact</h2>
                 <p className="text-white/80 font-body font-medium leading-relaxed text-lg">
                   The redesign didn't just change the visuals, it fundamentally altered the way ANI News operates, allowing their team to scale in digital environments faster than ever before.
                 </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                 <Button asChild className="bg-accent text-foreground hover:bg-white text-lg px-8 py-4">
                    <Link href="/work">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-2 rotate-180"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      Back to Work
                    </Link>
                 </Button>
                 <Button variant="secondary" asChild className="bg-white text-foreground hover:bg-tertiary text-lg px-8 py-4">
                    <Link href="/work/shriconnect">
                      Next Project
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                 </Button>
              </div>
           </div>
        </div>
      </div>

    </div>
  );
}
