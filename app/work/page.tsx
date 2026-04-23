"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const categories = ['ALL', 'ERP', 'MEDIA', 'ACCESSIBILITY'];

  const filterProject = (cat: string) => selectedCategory === 'ALL' || selectedCategory === cat;

  // Touch/hover helpers
  const cardHandlers = (id: string) => ({
    onMouseEnter: () => setActiveCard(id),
    onMouseLeave: () => setActiveCard(null),
    onTouchStart: () => setActiveCard(id),
    onTouchEnd:   () => setActiveCard(null),
    onTouchCancel:() => setActiveCard(null),
  });

  const isActive = (id: string) => activeCard === id;

  return (
    <div className="bg-swiss-muted border-t-4 border-black dark:border-white transition-none w-full min-h-screen pb-32 text-on-background">
      
      {/* Header Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-16 border-b-4 border-black dark:border-white">
        <div className="inline-block px-4 py-2 border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-black text-xs tracking-widest uppercase mb-8">
          PORTFOLIO 2024
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-[100px] font-headline font-black uppercase tracking-tighter leading-none mb-10">
          SELECTED<br />WORK.
        </h1>
        <p className="text-xl md:text-2xl font-medium max-w-2xl leading-relaxed border-l-4 border-black dark:border-white pl-6 mb-12">
          A curated collection of digital experiences focusing on functional ecosystems, media platforms, and unconditional accessibility.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-0 border-4 border-black dark:border-white bg-on-background w-max mt-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-4 font-black text-xs uppercase tracking-widest border-r-4 last:border-r-0 border-black dark:border-white transition-none ${
                selectedCategory === category
                  ? 'bg-[#FF3000] text-white'
                  : 'bg-background hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 space-y-8">
        
        {/* Project 1 - ANI News */}
        {filterProject('MEDIA') && (
          <div
            {...cardHandlers('ani-news')}
            className={`border-4 flex flex-col md:flex-row items-stretch transition-none cursor-pointer ${isActive('ani-news') ? 'bg-[#FF3000] border-[#FF3000]' : 'bg-white dark:bg-black border-black dark:border-white'}`}
          >
            <div className="flex-1 w-full bg-black border-b-4 md:border-b-0 md:border-r-4 border-inherit relative min-h-[400px]">
              <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                 className={`w-full h-full object-cover duration-300 ease-out ${isActive('ani-news') ? 'grayscale-0 opacity-100' : 'grayscale opacity-80'}`}
                 alt="ANI News"
              />
            </div>
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center space-y-8">
              <div className={`flex items-center gap-4 text-xs font-black uppercase tracking-widest ${isActive('ani-news') ? 'text-white' : 'text-black dark:text-white'}`}>
                <span className={`border-2 px-3 py-1 ${isActive('ani-news') ? 'border-white bg-white text-black' : 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black'}`}>MEDIA</span>
                <span>FEB 2026</span>
              </div>
              <h2 className={`text-5xl lg:text-7xl font-headline font-black uppercase tracking-tighter leading-none ${isActive('ani-news') ? 'text-white' : 'text-black dark:text-white'}`}>
                ANI News Platform Redesign
              </h2>
              <p className={`text-xl font-medium leading-relaxed border-l-4 pl-6 ${isActive('ani-news') ? 'text-white border-white' : 'text-black dark:text-white border-black dark:border-white'}`}>
                Orchestrating a future-ready news consumption experience, balancing high-density information with objective clarity.
              </p>
              <div className="pt-4">
                <Link
                  href="/work/ani-news"
                  className={`inline-flex items-center gap-3 px-8 py-4 border-2 font-black uppercase tracking-widest text-xs transition-none ${isActive('ani-news') ? 'border-white bg-white text-black' : 'border-black dark:border-white bg-transparent text-black dark:text-white'}`}
                >
                  VIEW CASE STUDY <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Projects 2 & 3 - Side by Side Grid */}
        {filterProject('ERP') && (
          <div className="border-4 border-black dark:border-white grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* ShriConnect */}
            {filterProject('ERP') && (
              <div
                {...cardHandlers('shriconnect')}
                className={`flex flex-col items-stretch border-b-4 lg:border-b-0 lg:border-r-4 transition-none cursor-pointer ${isActive('shriconnect') ? 'bg-[#FF3000] border-[#FF3000]' : 'bg-white dark:bg-black border-black dark:border-white'}`}
              >
                <div className="w-full bg-black border-b-4 border-inherit relative min-h-[350px]">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
                    alt="ShriConnect" 
                    className={`w-full h-full object-cover duration-300 ease-out ${isActive('shriconnect') ? 'grayscale-0 opacity-100' : 'grayscale opacity-80'}`}
                  />
                </div>
                <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center flex-1">
                  <div className={`flex items-center gap-4 text-xs font-black uppercase tracking-widest ${isActive('shriconnect') ? 'text-white' : 'text-black dark:text-white'}`}>
                    <span className={`border-2 px-3 py-1 ${isActive('shriconnect') ? 'border-white bg-white text-black' : 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black'}`}>ERP</span>
                    <span>JUL 2024</span>
                  </div>
                  <h3 className={`text-4xl font-headline font-black uppercase tracking-tighter leading-none ${isActive('shriconnect') ? 'text-white' : 'text-black dark:text-white'}`}>ShriConnect ERP Ecosystem</h3>
                  <p className={`text-lg font-medium leading-relaxed border-l-4 pl-4 ${isActive('shriconnect') ? 'text-white border-white' : 'text-black dark:text-white border-black dark:border-white'}`}>
                    Systematizing complex workflows into a functional, objective digital infrastructure.
                  </p>
                </div>
              </div>
            )}

            {/* Wave City */}
            {filterProject('ERP') && (
              <div
                {...cardHandlers('wave-city')}
                className={`flex flex-col items-stretch transition-none cursor-pointer ${isActive('wave-city') ? 'bg-[#FF3000]' : 'bg-white dark:bg-black'}`}
              >
                <div className="w-full bg-black border-b-4 border-black dark:border-white relative min-h-[350px]">
                  <img 
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
                    alt="Wave City" 
                    className={`w-full h-full object-cover duration-300 ease-out ${isActive('wave-city') ? 'grayscale-0 opacity-100' : 'grayscale opacity-80'}`}
                  />
                </div>
                <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center flex-1">
                  <div className={`flex items-center gap-4 text-xs font-black uppercase tracking-widest ${isActive('wave-city') ? 'text-white' : 'text-black dark:text-white'}`}>
                    <span className={`border-2 px-3 py-1 ${isActive('wave-city') ? 'border-white bg-white text-black' : 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black'}`}>ERP</span>
                    <span>SEP 2024</span>
                  </div>
                  <h3 className={`text-4xl font-headline font-black uppercase tracking-tighter leading-none ${isActive('wave-city') ? 'text-white' : 'text-black dark:text-white'}`}>Wave City ERP & Billing</h3>
                  <p className={`text-lg font-medium leading-relaxed border-l-4 pl-4 ${isActive('wave-city') ? 'text-white border-white' : 'text-black dark:text-white border-black dark:border-white'}`}>
                    Streamlining financial transparency through unembellished data architecture.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Project 4 - Full Width Card */}
        {filterProject('ACCESSIBILITY') && (
          <div
            {...cardHandlers('ability-connect')}
            className={`border-4 flex flex-col-reverse md:flex-row items-stretch transition-none cursor-pointer ${isActive('ability-connect') ? 'bg-[#FF3000] border-[#FF3000]' : 'bg-white dark:bg-black border-black dark:border-white'}`}
          >
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center space-y-8">
              <div className={`flex items-center gap-4 text-xs font-black uppercase tracking-widest ${isActive('ability-connect') ? 'text-white' : 'text-black dark:text-white'}`}>
                <span className={`border-2 px-3 py-1 ${isActive('ability-connect') ? 'border-white bg-white text-black' : 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black'}`}>ACCESSIBILITY</span>
                <span>JUN 2024</span>
              </div>
              <h2 className={`text-5xl lg:text-7xl font-headline font-black uppercase tracking-tighter leading-none ${isActive('ability-connect') ? 'text-white' : 'text-black dark:text-white'}`}>Ability Connect</h2>
              <p className={`text-xl font-medium leading-relaxed border-l-4 pl-6 ${isActive('ability-connect') ? 'text-white border-white' : 'text-black dark:text-white border-black dark:border-white'}`}>
                A platform built with WCAG 2.1 compliance at its core, ensuring seamless navigation for all.
              </p>
            </div>
            <div className="flex-1 w-full bg-black border-b-4 md:border-b-0 md:border-l-4 border-black dark:border-white relative min-h-[400px]">
               <img 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                 className={`w-full h-full object-cover duration-300 ease-out ${isActive('ability-connect') ? 'grayscale-0 opacity-100' : 'grayscale opacity-80'}`}
                 alt="Ability Connect"
               />
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-32 pb-10">
        <div className="bg-black dark:bg-white text-white dark:text-black border-4 border-black dark:border-white p-8 md:p-16 lg:p-24 relative overflow-hidden group hover:bg-[#FF3000] hover:text-white dark:hover:bg-[#FF3000] transition-none">
          <div className="text-center relative z-10 space-y-12 flex flex-col items-center">
            <h2 className="text-6xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-none max-w-3xl">
              INITIATE A NEW SYSTEM.
            </h2>
            <button className="px-12 py-6 bg-white dark:bg-black text-black dark:text-white border-4 border-black dark:border-white group-hover:border-white font-black uppercase tracking-widest text-sm transition-none group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
