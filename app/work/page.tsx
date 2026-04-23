"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const categories = ['ALL', 'ERP', 'MEDIA', 'ACCESSIBILITY'];

  return (
    <div className="bg-transparent w-full min-h-screen pb-20 text-[var(--color-foreground)]">
      
      {/* Header Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-0 lg:pt-6 pb-12">
        <div className="inline-block bg-[var(--color-paper-yellow)] border-[3px] border-[var(--color-border)] shadow-hard text-[var(--color-foreground)] wobbly font-body font-bold text-lg uppercase tracking-widest px-4 py-2 transform -rotate-1 mb-6">
          PORTFOLIO 2024
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-headline font-bold text-[var(--color-foreground)] mb-8 leading-[1.1] transform rotate-1">
          Selected <br /> <span className="text-[var(--color-accent)] underline decoration-wavy decoration-[4px] underline-offset-8">Work</span>
        </h1>
        <p className="text-[var(--color-foreground)] font-body max-w-xl mb-10 leading-relaxed text-xl">
          A curated collection of digital experiences focusing on ERP ecosystems, media platforms, and inclusive design.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-4 mt-8">
          {categories.map((category, index) => {
            const isSelected = selectedCategory === category;
            const rotation = index % 2 === 0 ? 'rotate-1' : '-rotate-1';
            return (
            <span
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 font-body font-bold text-xl uppercase tracking-widest cursor-pointer transition-all transform hover:-translate-y-1 ${
                isSelected
                  ? `bg-[var(--color-paper-yellow)] text-[var(--color-foreground)] border-[3px] border-[var(--color-border)] shadow-hard wobbly ${rotation}`
                  : 'bg-white text-[var(--color-foreground)] border-[3px] border-dashed border-[var(--color-border)] wobbly hover:border-solid hover:shadow-hard-hover'
              }`}
            >
              {category}
            </span>
          )})}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-24 lg:space-y-32 mt-16">
        
        {/* Project 1 - ANI News */}
        <div className="group flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 w-full relative h-[300px] md:h-[450px] overflow-hidden bg-white border-[4px] border-[var(--color-border)] wobbly-md shadow-hard-emphasized p-3 transform -rotate-1 hover:rotate-0 transition-all duration-500 cursor-pointer">
            <div className="tack-decoration"></div>
            <div className="w-full h-full wobbly overflow-hidden border-[3px] border-[var(--color-border)]">
              <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                 className="w-full h-full object-cover"
                 alt="ANI News"
              />
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="font-body text-lg text-[var(--color-border)] font-bold">
              <span className="bg-[var(--color-paper-yellow)] border-[3px] border-[var(--color-border)] px-3 py-1 wobbly inline-block transform rotate-2 text-[var(--color-foreground)] mr-4">PRODUCT DESIGNER</span> 
              FEB 2026
            </div>
            <h2 className="text-4xl lg:text-6xl font-headline font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
              ANI News Platform Redesign
            </h2>
            <p className="text-[var(--color-foreground)] font-body leading-relaxed text-xl max-w-lg">
              Orchestrating a future-ready news consumption experience, balancing high-density information with cinematic editorial breathing room.
            </p>
            <div className="pt-4">
              <Link href="/work/ani-news" className="inline-flex items-center gap-2 bg-white border-[3px] border-[var(--color-border)] text-[var(--color-foreground)] font-body font-bold text-xl px-6 py-2 wobbly shadow-hard hover:bg-[var(--color-accent)] hover:text-white hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all transform rotate-1">
                VIEW CASE STUDY <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Projects 2 & 3 - Side by Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
          
          {/* ShriConnect */}
          <div className="space-y-6 group cursor-pointer transition-all duration-500 hover:-translate-y-2">
            <div className="w-full h-[300px] lg:h-[400px] overflow-hidden bg-[var(--color-muted)] border-[4px] border-[var(--color-border)] wobbly-md shadow-hard p-3 transform rotate-2 hover:-rotate-1 hover:shadow-hard-emphasized transition-all duration-500 relative">
              <div className="tape-decoration"></div>
              <div className="w-full h-full wobbly overflow-hidden border-[3px] border-[var(--color-border)]">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
                  alt="ShriConnect" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className="space-y-4 px-2">
              <div className="font-body text-lg text-[var(--color-border)] font-bold">
                <span className="bg-white border-[3px] border-[var(--color-border)] shadow-hard px-3 py-1 wobbly inline-block transform -rotate-2 text-[var(--color-foreground)] mr-4">LEAD DESIGNER</span> 
                JUL 2024
              </div>
              <h3 className="text-4xl font-headline font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors duration-300">ShriConnect ERP Ecosystem</h3>
              <p className="text-xl text-[var(--color-foreground)] font-body leading-relaxed pr-4">
                Systematizing complex educational workflows into a cohesive, human-centered digital infrastructure.
              </p>
            </div>
          </div>

          {/* Wave City */}
          <div className="space-y-6 group cursor-pointer transition-all duration-500 hover:-translate-y-2">
            <div className="w-full h-[300px] lg:h-[400px] overflow-hidden bg-[var(--color-muted)] border-[4px] border-[var(--color-border)] wobbly-md shadow-hard p-3 transform -rotate-1 hover:rotate-1 hover:shadow-hard-emphasized transition-all duration-500 relative">
              <div className="tack-decoration"></div>
              <div className="w-full h-full wobbly overflow-hidden border-[3px] border-[var(--color-border)]">
                <img 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
                  alt="Wave City" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className="space-y-4 px-2">
              <div className="font-body text-lg text-[var(--color-border)] font-bold">
                <span className="bg-white border-[3px] border-[var(--color-border)] shadow-hard px-3 py-1 wobbly inline-block transform rotate-1 text-[var(--color-foreground)] mr-4">UX COLLABORATOR</span> 
                SEP 2024
              </div>
              <h3 className="text-4xl font-headline font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors duration-300">Wave City ERP & Billing</h3>
              <p className="text-xl text-[var(--color-foreground)] font-body leading-relaxed pr-4">
                Streamlining financial transparency through intuitive data architecture and billing automation.
              </p>
            </div>
          </div>

        </div>

        {/* Project 4 - Full Width Card */}
        <div className="bg-white border-[4px] border-[var(--color-border)] wobbly-md p-8 md:p-12 lg:p-16 flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20 shadow-hard transform rotate-1 hover:-rotate-1 hover:shadow-hard-emphasized transition-all duration-500 relative">
          <div className="tape-decoration"></div>
          <div className="flex-1 space-y-8">
            <div className="inline-block px-4 py-2 bg-[var(--color-accent)] text-white font-body font-bold text-xl uppercase tracking-widest border-[3px] border-[var(--color-border)] shadow-hard wobbly transform -rotate-2">
              ACCESSIBILITY FIRST
            </div>
            <h2 className="text-5xl lg:text-6xl font-headline font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-secondary-accent)] transition-colors duration-300">Ability Connect</h2>
            <p className="text-[var(--color-foreground)] font-body leading-relaxed text-xl max-w-lg">
              Designing for the edge cases. A platform built with WCAG 2.1 compliance at its core, ensuring seamless navigation for users of all abilities.
            </p>
            <div className="flex items-center gap-16 pt-4">
              <div>
                <div className="text-lg text-[var(--color-border)] font-body font-bold mb-1">ROLE</div>
                <div className="text-2xl text-[var(--color-foreground)] font-headline font-bold">Lead Designer</div>
              </div>
              <div>
                <div className="text-lg text-[var(--color-border)] font-body font-bold mb-1">DATE</div>
                <div className="text-2xl text-[var(--color-foreground)] font-headline font-bold">Jun 2024</div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative h-[300px] md:h-[400px] overflow-hidden bg-[var(--color-muted)] border-[4px] border-[var(--color-border)] wobbly-md shadow-hard-emphasized p-3 transform -rotate-2">
             <div className="w-full h-full wobbly overflow-hidden border-[3px] border-[var(--color-border)]">
               <img 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                 className="w-full h-full object-cover" 
                 alt="Ability Connect"
               />
             </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[var(--color-paper-yellow)] border-[4px] border-[var(--color-border)] wobbly-md shadow-hard-emphasized p-8 md:p-16 lg:p-24 text-center mt-32 relative transform -rotate-1">
          <div className="tack-decoration"></div>
          <h2 className="text-5xl md:text-6xl lg:text-[72px] font-headline font-bold text-[var(--color-foreground)] mb-12 max-w-2xl mx-auto leading-[1.1] relative z-10">
            Ready to start a <br/> <span className="text-[var(--color-accent)] underline decoration-wavy decoration-[4px] underline-offset-8">new project?</span>
          </h2>
          <a href="mailto:gurushaa11@gmail.com" className="inline-block px-10 py-4 bg-[var(--color-accent)] border-[3px] border-[var(--color-border)] text-white font-body font-bold text-2xl wobbly shadow-hard hover:bg-[#ff3333] hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all transform rotate-2">
            Get in touch
          </a>
        </div>

      </div>
    </div>
  );
}
