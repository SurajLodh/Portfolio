'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AniNewsCaseStudy() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handlers = (id: string) => ({
    onMouseEnter:  () => setActiveCard(id),
    onMouseLeave:  () => setActiveCard(null),
    onTouchStart:  () => setActiveCard(id),
    onTouchEnd:    () => setActiveCard(null),
    onTouchCancel: () => setActiveCard(null),
  });

  const on = (id: string) => activeCard === id;
  return (
    <div className="bg-swiss-muted border-t-4 border-black dark:border-white transition-none w-full min-h-screen pb-32 text-on-background">
      
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-16">
        <div className="flex flex-col lg:flex-row gap-0 border-4 border-black dark:border-white bg-on-background">
          <div className="flex-[2] p-8 md:p-16 bg-background border-b-4 lg:border-b-0 lg:border-r-4 border-black dark:border-white flex flex-col justify-center">
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-headline font-black uppercase tracking-tighter leading-none mb-10 text-on-background">
              ANI NEWS<br />
              <span className="text-[#FF3000]">REDESIGN.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-2xl leading-relaxed border-l-4 border-black dark:border-white pl-6 text-on-background">
              A digital evolution for a premier news agency, transforming content delivery for over 3 million monthly active users through a unified structural logic.
            </p>
          </div>

          <div className="flex-1 bg-background p-8 md:p-16 flex flex-col justify-center">
            <div className="space-y-8">
               <div className="space-y-2">
                 <div className="text-xs font-black uppercase tracking-widest text-[#FF3000]">ROLE</div>
                 <div className="text-xl font-black uppercase tracking-tighter text-on-background">PRODUCT DESIGNER</div>
               </div>
               <div className="space-y-2">
                 <div className="text-xs font-black uppercase tracking-widest text-[#FF3000]">TIMELINE</div>
                 <div className="text-xl font-black uppercase tracking-tighter text-on-background">FEB 2026 — PRESENT</div>
               </div>
               <div className="space-y-2">
                 <div className="text-xs font-black uppercase tracking-widest text-[#FF3000]">CLIENT</div>
                 <div className="text-xl font-black uppercase tracking-tighter text-on-background">ANI NEWS / VOXTURRLABS</div>
               </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] border-b-4 border-l-4 border-r-4 border-black dark:border-white bg-black overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop" 
            alt="ANI News Hero" 
            className="w-full h-full object-cover grayscale opacity-80"
          />
        </div>
      </div>

      {/* The Challenge Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-0 border-4 border-black dark:border-white bg-on-background">
          <div className="flex-1 p-8 md:p-16 bg-background border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white space-y-12">
            <span className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-xs uppercase font-black tracking-widest">
              THE CHALLENGE
            </span>
            <h2 className="text-5xl lg:text-7xl font-headline font-black uppercase tracking-tighter leading-none text-on-background">
              FRAGMENTED<br />WORKFLOWS &<br />BOTTLENECKS
            </h2>
          </div>
          <div className="flex-1 p-8 md:p-16 bg-background flex flex-col justify-center space-y-8 font-medium text-lg md:text-xl text-on-background">
            <p className="border-l-4 border-black dark:border-white pl-4">
              ANI News operates at massive scale. The legacy platform suffered from a fragmented methodology that made updates critically slow.
            </p>
            <p className="border-l-4 border-black dark:border-white pl-4">
              The primary goal was to create a scalable design system and a custom CMS dashboard that prioritizes brutal editorial speed without compromising on objective layout quality.
            </p>
          </div>
        </div>
      </div>

      {/* The Editorial Approach */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 pb-32">
        <div className="mb-16 border-b-4 border-black dark:border-white pb-6">
          <h2 className="text-6xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-none text-on-background">
            EDITORIAL<br />
            APPROACH
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-4 border-black dark:border-white bg-on-background">
          
          {/* Card 1 */}
          <div
            {...handlers('approach-01')}
            className={`border-b-4 lg:border-b-0 lg:border-r-4 border-black dark:border-white p-8 md:p-12 lg:col-span-2 flex flex-col justify-between space-y-16 transition-none cursor-pointer ${on('approach-01') ? 'bg-[#FF3000] text-white' : 'bg-background'}`}
          >
            <div className="space-y-8">
              <div className="text-6xl font-black opacity-20">01</div>
              <h3 className="text-4xl lg:text-5xl font-headline font-black uppercase tracking-tighter leading-none">STRUCTURAL DESIGN SYSTEM</h3>
              <p className={`text-lg font-medium leading-relaxed border-l-4 pl-4 ${on('approach-01') ? 'border-white' : 'border-black dark:border-white'}`}>
                We developed a highly systemic component library focusing on unembellished information density. The architecture utilizes precise typographic scales maintaining strict authority.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-0 border-4 border-black dark:border-white bg-black">
               <div className="h-48 border-r-4 border-black dark:border-white">
                 <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-80" alt="UI" />
               </div>
               <div className="h-48">
                 <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-80" alt="Typography" />
               </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            {...handlers('approach-02')}
            className={`border-b-4 lg:border-b-0 border-black dark:border-white p-8 md:p-12 flex flex-col space-y-16 transition-none cursor-pointer ${on('approach-02') ? 'bg-[#FF3000] text-white' : 'bg-background'}`}
          >
            <div className="space-y-8">
              <div className="text-6xl font-black opacity-20">02</div>
              <h3 className="text-4xl lg:text-5xl font-headline font-black uppercase tracking-tighter leading-none">CMS REDESIGN</h3>
              <p className={`text-lg font-medium leading-relaxed border-l-4 pl-4 ${on('approach-02') ? 'border-white' : 'border-black dark:border-white'}`}>
                Creating an objective dashboard for editors that reduced time-to-publish by 40% through rigorous UI architecture.
              </p>
            </div>
          </div>

          {/* Card 3 - Full width */}
          <div
            {...handlers('approach-03')}
            className={`p-8 md:p-12 lg:col-span-3 flex flex-col md:flex-row items-stretch gap-0 transition-none border-t-0 lg:border-t-4 border-black dark:border-white cursor-pointer ${on('approach-03') ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-background'}`}
          >
            <div className="flex-[1.5] space-y-8 pr-0 md:pr-12 py-8">
              <div className="text-6xl font-black opacity-20">03</div>
              <h3 className="text-5xl lg:text-6xl font-headline font-black uppercase tracking-tighter leading-none">USER-CENTRIC DATA FEED</h3>
              <p className={`text-xl font-medium leading-relaxed border-l-4 pl-6 ${on('approach-03') ? 'border-white dark:border-black' : 'border-black dark:border-white'}`}>
                Reimagining the news consumer model. Deployed immediate discovery experiences without visual friction.
              </p>
            </div>
            <div className={`flex-1 w-full bg-black border-l-4 flex justify-center items-center p-12 relative min-h-[400px] ${on('approach-03') ? 'border-white dark:border-black' : 'border-black dark:border-white'}`}>
               <div className="w-64 h-[400px] border-4 border-white dark:border-black overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-80" alt="Mobile UI" />
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* The Impact */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-32">
        <div className="bg-[#FF3000] text-white border-4 border-black dark:border-white p-8 md:p-20 relative overflow-hidden">
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-black dark:border-white bg-on-background mb-16">
              <div className="bg-[#FF3000] border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white p-8 md:p-12 text-center space-y-4">
                 <div className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-white">40%</div>
                 <div className="text-xs uppercase font-black tracking-widest text-black">FASTER PUBLISHING</div>
              </div>
              <div className="bg-[#FF3000] border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white p-8 md:p-12 text-center space-y-4">
                 <div className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-white">3M+</div>
                 <div className="text-xs uppercase font-black tracking-widest text-black">MONTHLY USERS</div>
              </div>
              <div className="bg-[#FF3000] p-8 md:p-12 text-center space-y-4">
                 <div className="text-6xl md:text-8xl font-headline font-black tracking-tighter text-white">100%</div>
                 <div className="text-xs uppercase font-black tracking-widest text-black">CONSISTENCY</div>
              </div>
           </div>

           <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-black dark:bg-white text-white dark:text-black border-4 border-black dark:border-white p-8 md:p-16">
              <div className="max-w-xl">
                 <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter leading-none mb-6">THE IMPACT</h2>
                 <p className="font-medium text-lg leading-relaxed border-l-4 border-white dark:border-black pl-4">
                   The redesign fundamentally altered the way News operates, scaling in digital environments with undeniable clarity and force.
                 </p>
              </div>
              <div>
                 <Link href="/work" className="inline-flex items-center gap-3 px-10 py-6 border-4 border-white dark:border-black bg-transparent text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white font-black uppercase tracking-widest text-sm transition-none text-center">
                   VIEW NEXT
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                 </Link>
              </div>
           </div>

        </div>
      </div>

    </div>
  );
}
