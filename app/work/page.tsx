"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const categories = ['ALL', 'ERP', 'MEDIA', 'ACCESSIBILITY'];

  const filterProject = (cat: string) => selectedCategory === 'ALL' || selectedCategory === cat;

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
          <div className="border-4 border-black dark:border-white group flex flex-col md:flex-row items-stretch bg-white dark:bg-black hover:bg-[#FF3000] transition-none cursor-pointer">
            <div className="flex-1 w-full bg-black border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white relative min-h-[400px]">
              <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                 className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-none"
                 alt="ANI News"
              />
            </div>
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center space-y-8">
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-black dark:text-white group-hover:text-white">
                <span className="border-2 border-black dark:border-white group-hover:border-white px-3 py-1 bg-black text-white dark:bg-white dark:text-black group-hover:bg-white group-hover:text-black">MEDIA</span>
                <span>FEB 2026</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-headline font-black uppercase tracking-tighter text-black dark:text-white group-hover:text-white leading-none">
                ANI News Platform Redesign
              </h2>
              <p className="text-xl font-medium leading-relaxed border-l-4 border-black dark:border-white group-hover:border-white pl-6 text-black dark:text-white group-hover:text-white">
                Orchestrating a future-ready news consumption experience, balancing high-density information with objective clarity.
              </p>
              <div className="pt-4">
                <Link href="/work/ani-news" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-black dark:border-white bg-transparent text-black dark:text-white group-hover:border-white group-hover:text-black group-hover:bg-white font-black uppercase tracking-widest text-xs transition-none">
                  VIEW CASE STUDY <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Projects 2 & 3 - Side by Side Grid */}
        {(filterProject('ERP')) && (
          <div className="border-4 border-black dark:border-white grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* ShriConnect */}
            {filterProject('ERP') && (
              <div className="group flex flex-col items-stretch bg-white dark:bg-black border-b-4 lg:border-b-0 lg:border-r-4 border-black dark:border-white hover:bg-[#FF3000] transition-none cursor-pointer">
                <div className="w-full bg-black border-b-4 border-black dark:border-white relative min-h-[350px]">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
                    alt="ShriConnect" 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-none" 
                  />
                </div>
                <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-black dark:text-white group-hover:text-white">
                    <span className="border-2 border-black dark:border-white group-hover:border-white px-3 py-1 bg-black text-white dark:bg-white dark:text-black group-hover:bg-white group-hover:text-black">ERP</span>
                    <span>JUL 2024</span>
                  </div>
                  <h3 className="text-4xl font-headline font-black uppercase tracking-tighter text-black dark:text-white group-hover:text-white leading-none">ShriConnect ERP Ecosystem</h3>
                  <p className="text-lg font-medium leading-relaxed border-l-4 border-black dark:border-white group-hover:border-white pl-4 text-black dark:text-white group-hover:text-white">
                    Systematizing complex workflows into a functional, objective digital infrastructure.
                  </p>
                </div>
              </div>
            )}

            {/* Wave City */}
            {filterProject('ERP') && (
              <div className="group flex flex-col items-stretch bg-white dark:bg-black hover:bg-[#FF3000] transition-none cursor-pointer">
                <div className="w-full bg-black border-b-4 border-black dark:border-white relative min-h-[350px]">
                  <img 
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
                    alt="Wave City" 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-none" 
                  />
                </div>
                <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-black dark:text-white group-hover:text-white">
                    <span className="border-2 border-black dark:border-white group-hover:border-white px-3 py-1 bg-black text-white dark:bg-white dark:text-black group-hover:bg-white group-hover:text-black">ERP</span>
                    <span>SEP 2024</span>
                  </div>
                  <h3 className="text-4xl font-headline font-black uppercase tracking-tighter text-black dark:text-white group-hover:text-white leading-none">Wave City ERP & Billing</h3>
                  <p className="text-lg font-medium leading-relaxed border-l-4 border-black dark:border-white group-hover:border-white pl-4 text-black dark:text-white group-hover:text-white">
                    Streamlining financial transparency through unembellished data architecture.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Project 4 - Full Width Card */}
        {filterProject('ACCESSIBILITY') && (
          <div className="border-4 border-black dark:border-white group flex flex-col-reverse md:flex-row items-stretch bg-white dark:bg-black hover:bg-[#FF3000] transition-none cursor-pointer">
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center space-y-8">
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-black dark:text-white group-hover:text-white">
                <span className="border-2 border-black dark:border-white group-hover:border-white px-3 py-1 bg-black text-white dark:bg-white dark:text-black group-hover:bg-white group-hover:text-black">ACCESSIBILITY</span>
                <span>JUN 2024</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-headline font-black uppercase tracking-tighter text-black dark:text-white group-hover:text-white leading-none">Ability Connect</h2>
              <p className="text-xl font-medium leading-relaxed border-l-4 border-black dark:border-white group-hover:border-white pl-6 text-black dark:text-white group-hover:text-white">
                A platform built with WCAG 2.1 compliance at its core, ensuring seamless navigation for all.
              </p>
            </div>
            <div className="flex-1 w-full bg-black border-b-4 md:border-b-0 md:border-l-4 border-black dark:border-white relative min-h-[400px]">
               <img 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                 className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-none" 
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
            <button className="px-12 py-6 bg-white dark:bg-black text-black dark:text-white border-4 border-black dark:border-white group-hover:border-white font-black uppercase tracking-widest text-sm hover:empty transition-none group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
