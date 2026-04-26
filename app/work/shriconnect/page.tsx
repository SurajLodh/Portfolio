"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function ShriConnectPage() {
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
        
        <div className="mb-6">
          <div className="inline-block px-4 py-2 rounded border-2 border-foreground bg-[#FFD23F] text-foreground font-headline font-bold text-xs tracking-widest uppercase shadow-[2px_2px_0px_var(--color-shadow)]">
            CASE STUDY
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[90px] font-headline font-extrabold text-foreground mb-8 leading-[0.95] tracking-tighter">
          ShriConnect ERP Ecosystem
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t-4 border-foreground pt-8 mb-16 max-w-4xl">
          <div>
            <div className="text-xs font-headline font-bold text-muted-foreground uppercase tracking-widest mb-2">ROLE</div>
            <div className="text-xl font-headline font-bold text-foreground">Lead Designer</div>
          </div>
          <div>
            <div className="text-xs font-headline font-bold text-muted-foreground uppercase tracking-widest mb-2">DURATION</div>
            <div className="text-xl font-headline font-bold text-foreground">2022 — 2024</div>
          </div>
          <div>
            <div className="text-xs font-headline font-bold text-muted-foreground uppercase tracking-widest mb-2">SCOPE</div>
            <div className="text-xl font-headline font-bold text-foreground">13 Apps / 40+ Modules</div>
          </div>
        </div>

        {/* Hero Image Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full rounded-[1rem] border-4 border-foreground shadow-[12px_12px_0px_var(--color-shadow)] overflow-hidden bg-white p-2 md:p-4"
        >
          <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-lg bg-[#2D3748] border-2 border-foreground/20 overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
              alt="ShriConnect Dashboard Placeholder" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
            />
            {/* Overlay hint since we lack the actual image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1a202c]/80 to-transparent flex items-center justify-center pointer-events-none">
              <span className="text-white/50 font-headline text-2xl md:text-4xl font-bold tracking-widest uppercase">Dashboard View</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-24 lg:space-y-32 mt-16 relative z-10">
        
        {/* Challenge Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-card border-4 border-foreground p-8 md:p-12 shadow-[8px_8px_0px_var(--color-shadow)] flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-foreground mb-6">The Massive Challenge</h2>
            <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed mb-6">
              Designing for scale isn't just about technical architecture; it's about human empathy at high volume. ShriConnect needed to unify the academic, financial, and administrative journeys of over 200,000 active users.
            </p>
            <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed">
              The goal was to replace fragmented legacy systems with a cohesive, modular ecosystem that felt personal to a 1st-grade parent while remaining powerful for a University Registrar.
            </p>
          </div>
          <div className="space-y-8 flex flex-col justify-between">
            <div className="flex-1 bg-[#FFD23F] border-4 border-foreground p-8 flex flex-col justify-center items-center text-center shadow-[8px_8px_0px_var(--color-shadow)] transition-transform hover:-translate-y-1 hover:-translate-x-1">
              <div className="text-5xl lg:text-6xl font-headline font-extrabold text-foreground mb-2">200K+</div>
              <div className="text-sm font-headline font-bold tracking-widest uppercase text-foreground">ACTIVE STUDENTS & PARENTS</div>
            </div>
            <div className="flex-1 bg-[#EE4266] border-4 border-foreground p-8 flex flex-col justify-center items-center text-center shadow-[8px_8px_0px_var(--color-shadow)] transition-transform hover:-translate-y-1 hover:-translate-x-1">
              <div className="text-5xl lg:text-6xl font-headline font-extrabold text-white mb-2 drop-shadow-md">13</div>
              <div className="text-sm font-headline font-bold tracking-widest uppercase text-white/90">SPECIALIZED MOBILE APPS</div>
            </div>
          </div>
        </section>

        {/* The Ecosystem Architecture */}
        <section className="mt-32">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-foreground text-center mb-24">The Ecosystem Architecture</h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[4px] bg-foreground -translate-x-1/2"></div>
            
            <div className="space-y-16 md:space-y-24">
              {/* Node 1 */}
              <div className="relative flex items-center md:justify-start">
                <div className="hidden md:block w-1/2 pr-16 text-right relative">
                  <div className="absolute right-0 top-1/2 w-5 h-5 rounded-full bg-foreground border-[3px] border-background translate-x-1/2 -translate-y-1/2 z-10 shadow-sm"></div>
                  <div className="inline-block bg-card border-4 border-foreground p-8 shadow-[8px_8px_0px_var(--color-shadow)] text-left w-full max-w-[360px] hover:-translate-y-1 transition-transform">
                    <div className="w-8 h-8 text-[#9b5de5] mb-4">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 8H9L12 2Z"/><path d="M22 12L16 15V9L22 12Z"/><path d="M12 22L9 16H15L12 22Z"/><path d="M2 12L8 9V15L2 12Z"/></svg>
                    </div>
                    <h3 className="text-xl font-headline font-bold text-foreground mb-3">Centralized Core</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">A unified database architecture managing 40+ modular extensions across HR, Finance, and Admissions.</p>
                  </div>
                </div>
                
                {/* Mobile view node 1 */}
                <div className="md:hidden pl-16 relative w-full">
                  <div className="absolute left-0 top-1/2 w-5 h-5 rounded-full bg-foreground border-[3px] border-background -translate-x-[2px] -translate-y-1/2 z-10 shadow-sm"></div>
                  <div className="bg-card border-4 border-foreground p-6 shadow-[8px_8px_0px_var(--color-shadow)] hover:-translate-y-1 transition-transform">
                    <div className="w-8 h-8 text-[#9b5de5] mb-4">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 8H9L12 2Z"/><path d="M22 12L16 15V9L22 12Z"/><path d="M12 22L9 16H15L12 22Z"/><path d="M2 12L8 9V15L2 12Z"/></svg>
                    </div>
                    <h3 className="text-xl font-headline font-bold text-foreground mb-2">Centralized Core</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">A unified database architecture managing 40+ modular extensions across HR, Finance, and Admissions.</p>
                  </div>
                </div>
              </div>
              
              {/* Node 2 */}
              <div className="relative flex items-center md:justify-end">
                <div className="hidden md:block w-1/2 pl-16 relative">
                  <div className="absolute left-0 top-1/2 w-5 h-5 rounded-full bg-foreground border-[3px] border-background -translate-x-1/2 -translate-y-1/2 z-10 shadow-sm"></div>
                  <div className="inline-block bg-card border-4 border-foreground p-8 shadow-[8px_8px_0px_var(--color-shadow)] w-full max-w-[360px] hover:-translate-y-1 transition-transform">
                    <div className="w-5 h-8 bg-[#EE4266] mb-4 rounded-sm"></div>
                    <h3 className="text-xl font-headline font-bold text-foreground mb-3">Omni-Channel Access</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">13 custom mobile applications tailored for faculty, administrators, parents, and students on both platforms.</p>
                  </div>
                </div>
                
                {/* Mobile view node 2 */}
                <div className="md:hidden pl-16 relative w-full">
                  <div className="absolute left-0 top-1/2 w-5 h-5 rounded-full bg-foreground border-[3px] border-background -translate-x-[2px] -translate-y-1/2 z-10 shadow-sm"></div>
                  <div className="bg-card border-4 border-foreground p-6 shadow-[8px_8px_0px_var(--color-shadow)] hover:-translate-y-1 transition-transform">
                    <div className="w-5 h-8 bg-[#EE4266] mb-4 rounded-sm"></div>
                    <h3 className="text-xl font-headline font-bold text-foreground mb-2">Omni-Channel Access</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">13 custom mobile applications tailored for faculty, administrators, parents, and students on both platforms.</p>
                  </div>
                </div>
              </div>

              {/* Node 3 */}
              <div className="relative flex items-center md:justify-start">
                <div className="hidden md:block w-1/2 pr-16 text-right relative">
                  <div className="absolute right-0 top-1/2 w-5 h-5 rounded-full bg-foreground border-[3px] border-background translate-x-1/2 -translate-y-1/2 z-10 shadow-sm"></div>
                  <div className="inline-block bg-card border-4 border-foreground p-8 shadow-[8px_8px_0px_var(--color-shadow)] text-left w-full max-w-[360px] hover:-translate-y-1 transition-transform">
                    <div className="w-8 h-8 bg-[#d4a373] mb-4 border-2 border-foreground flex items-center justify-center text-xs font-bold font-headline text-foreground rounded-sm">d</div>
                    <h3 className="text-xl font-headline font-bold text-foreground mb-3">Decision Intelligence</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">Real-time data visualization layers for stakeholders to monitor institutional health and student progress.</p>
                  </div>
                </div>
                
                {/* Mobile view node 3 */}
                <div className="md:hidden pl-16 relative w-full">
                  <div className="absolute left-0 top-1/2 w-5 h-5 rounded-full bg-foreground border-[3px] border-background -translate-x-[2px] -translate-y-1/2 z-10 shadow-sm"></div>
                  <div className="bg-card border-4 border-foreground p-6 shadow-[8px_8px_0px_var(--color-shadow)] hover:-translate-y-1 transition-transform">
                    <div className="w-8 h-8 bg-[#d4a373] mb-4 border-2 border-foreground flex items-center justify-center text-xs font-bold font-headline text-foreground rounded-sm">d</div>
                    <h3 className="text-xl font-headline font-bold text-foreground mb-2">Decision Intelligence</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">Real-time data visualization layers for stakeholders to monitor institutional health and student progress.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complexity & Scale Section */}
        <section className="mt-32 border-4 border-foreground p-8 md:p-12 lg:p-16 bg-card shadow-[12px_12px_0px_var(--color-shadow)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-foreground leading-tight">Complexity & Scale</h2>
              <p className="text-muted-foreground font-body text-xl">How we mapped 40+ modules into a single mental model for users.</p>
              
              <div className="space-y-4">
                {[
                  'Unified Identity Auth', 
                  'Component-Based Design', 
                  'Enterprise Data Security'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-muted/20 p-4 border-[3px] border-foreground rounded">
                    <div className="w-6 h-6 flex-shrink-0 bg-foreground text-background rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="font-headline font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-3 sm:gap-4 h-full">
              {[
                { name: 'LMS', color: 'bg-[#FFD23F]' },
                { name: 'Admissions', color: 'bg-[#E0B1CB]' },
                { name: 'Fees', color: 'bg-[#FFCDB2]' },
                { name: 'Exams', color: 'bg-[#CDB4DB]' },
                
                { name: 'Transport', color: 'bg-[#CDB4DB]' },
                { name: 'HRMS', color: 'bg-[#FFD23F]' },
                { name: 'Inventory', color: 'bg-[#E0B1CB]' },
                { name: 'Library', color: 'bg-[#FFCDB2]' },
                
                { name: 'Hostel', color: 'bg-[#FFCDB2]' },
                { name: 'Attendance', color: 'bg-[#CDB4DB]' },
                { name: 'Events', color: 'bg-[#FFD23F]' },
                { name: 'Alumni', color: 'bg-[#E0B1CB]' }
              ].map((block, i) => (
                <div key={i} className={`${block.color} border-[3px] border-foreground aspect-square flex items-center justify-center p-1 sm:p-2 text-center shadow-[4px_4px_0px_var(--color-shadow)] transition-transform hover:-translate-y-1`}>
                  <span className="text-[10px] sm:text-xs md:text-sm font-headline font-bold text-foreground break-words">{block.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Quote Section */}
        <section className="mt-32">
          <div className="bg-[#1E293B] rounded-[2rem] p-12 md:p-24 text-center border-4 border-foreground shadow-[16px_16px_0px_var(--color-shadow)] relative overflow-hidden h-[450px] flex items-center justify-center">
            {/* Subtle glow / backdrop */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]"></div>
            
            {/* Character Illustration Placeholder */}
            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 z-0 w-64 h-64 opacity-50 flex flex-col items-center justify-end">
              {/* Head */}
              <div className="w-24 h-24 bg-[#E0B1CB] rounded-full border-4 border-foreground z-10 translate-y-4"></div>
              {/* Shoulders */}
              <div className="w-48 h-32 bg-foreground/20 rounded-t-[4rem] border-t-4 border-l-4 border-r-4 border-foreground backdrop-blur-sm"></div>
            </div>

            {/* Gradient overlay to make text readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent z-10"></div>

            <h3 className="relative z-20 text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-white italic max-w-4xl drop-shadow-lg leading-tight">
              "Building the backbone of modern education management."
            </h3>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-[#FFB800] rounded-[3rem] p-6 sm:p-10 md:p-16 lg:p-24 text-center mt-32 relative overflow-hidden border-4 border-foreground shadow-[16px_16px_0px_var(--color-shadow)]">
          <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-foreground/10 rounded-full border-4 border-foreground/20 -translate-y-1/2 translate-x-1/4 animate-wiggle"></div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold text-foreground mb-8 md:mb-10 max-w-3xl mx-auto leading-[0.95] tracking-tighter drop-shadow-none">
            Next Project
          </h2>

          <Link href="/work/wave-city">
            <Button className="!bg-white !text-[#1E293B] hover:!bg-accent hover:!text-white text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 border-2 border-foreground shadow-[4px_4px_0px_#1E293B]">
              Wave City ERP & Billing
            </Button>
          </Link>

          <div className="absolute bottom-[-20px] left-6 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-secondary border-4 border-foreground rounded-full hidden sm:block animate-bounce-in opacity-70"></div>
        </div>
      </div>
    </div>
  );
}
