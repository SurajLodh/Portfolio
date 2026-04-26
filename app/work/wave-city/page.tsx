"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function WaveCityPage() {
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
        
        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-headline font-extrabold text-foreground mb-8 leading-[0.95] tracking-tighter max-w-4xl">
          Wave City ERP & Billing Workflow
        </h1>
        
        <div className="flex flex-wrap gap-4 mb-16">
          <div className="inline-block px-4 py-2 rounded-full border-2 border-foreground bg-[#FFD23F] text-foreground font-headline font-bold text-xs tracking-widest uppercase shadow-[2px_2px_0px_var(--color-shadow)]">
            UX Collaborator
          </div>
          <div className="inline-block px-4 py-2 rounded-full border-2 border-foreground bg-[#E0B1CB] text-foreground font-headline font-bold text-xs tracking-widest uppercase shadow-[2px_2px_0px_var(--color-shadow)]">
            2023 - 2024
          </div>
          <div className="inline-block px-4 py-2 rounded-full border-2 border-foreground bg-[#CDB4DB] text-foreground font-headline font-bold text-xs tracking-widest uppercase shadow-[2px_2px_0px_var(--color-shadow)]">
            Financial Tech
          </div>
        </div>

        {/* Hero Image Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] border-4 border-foreground shadow-[12px_12px_0px_var(--color-shadow)] overflow-hidden bg-card flex items-center justify-center group"
        >
          {/* Abstract Wave Background Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] flex items-center justify-center opacity-90 overflow-hidden">
             <div className="w-[150%] h-[150%] bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-screen animate-pulse-slow"></div>
          </div>
          
          {/* Centered Floating Icon */}
          <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl md:rounded-3xl border-4 border-foreground shadow-pop flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6d28d9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 lg:space-y-16 mt-8 relative z-10">
        
        {/* Bento Grid 1: Challenge & Impact */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Challenge Box */}
          <div className="lg:col-span-7 bg-card border-4 border-foreground rounded-[2rem] p-8 md:p-12 shadow-[8px_8px_0px_var(--color-shadow)] flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-foreground mb-6">The Challenge</h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
                The existing ERP for Wave City was suffering from fragmented data silos and manual reconciliation processes. Users were navigating through multiple legacy screens to complete a single billing cycle, leading to high error rates and slow turnaround.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted/20 border-2 border-foreground rounded-xl p-6">
                <div className="w-8 h-8 text-[#6d28d9] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
                </div>
                <h3 className="text-sm font-headline font-bold text-foreground mb-2">Pain Point</h3>
                <p className="text-muted-foreground font-body text-xs">Manual data entry causing 15% revenue leakage.</p>
              </div>
              <div className="bg-muted/20 border-2 border-foreground rounded-xl p-6">
                <div className="w-8 h-8 text-[#EE4266] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h3 className="text-sm font-headline font-bold text-foreground mb-2">Latency</h3>
                <p className="text-muted-foreground font-body text-xs">5.5 days average to process monthly billing.</p>
              </div>
            </div>
          </div>
          
          {/* Impact Metrics Box */}
          <div className="lg:col-span-5 bg-[#FFD23F] border-4 border-foreground rounded-[2rem] p-8 md:p-12 shadow-[8px_8px_0px_var(--color-shadow)] flex flex-col">
            <h2 className="text-xl md:text-2xl font-headline font-bold text-foreground mb-12">Impact Metrics</h2>
            
            <div className="space-y-8 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-6">
                <div className="text-5xl md:text-6xl font-headline font-extrabold text-foreground w-32 tracking-tighter">-25%</div>
                <div className="text-xs font-headline font-bold tracking-widest uppercase text-foreground/80 leading-tight">PROCESSING<br/>TIME REDUCED</div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-5xl md:text-6xl font-headline font-extrabold text-foreground w-32 tracking-tighter">100%</div>
                <div className="text-xs font-headline font-bold tracking-widest uppercase text-foreground/80 leading-tight">FINANCIAL<br/>COMPLIANCE</div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-5xl md:text-6xl font-headline font-extrabold text-foreground w-32 tracking-tighter">14k+</div>
                <div className="text-xs font-headline font-bold tracking-widest uppercase text-foreground/80 leading-tight">INVOICES<br/>AUTOMATED</div>
              </div>
            </div>
          </div>
          
        </section>

        {/* Bento Grid 2: Solution & Timeline */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Solution Box */}
          <div className="lg:col-span-7 bg-card border-4 border-foreground rounded-[2rem] p-8 md:p-12 shadow-[8px_8px_0px_var(--color-shadow)] flex flex-col">
            <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-foreground mb-6">The Solution</h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
              We revamped the billing workflow by centralizing compliance checks and automating the invoice generation pipeline. A "Single Source of Truth" dashboard was introduced for real-time tracking.
            </p>
            
            <div className="mt-auto w-full rounded-xl border-4 border-foreground bg-muted/20 p-2 md:p-4 overflow-hidden shadow-inner">
              <div className="w-full aspect-video md:aspect-[16/10] bg-[#1E293B] rounded-lg border-2 border-foreground/20 overflow-hidden relative shadow-md">
                 <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                    alt="Dashboard Dashboard Placeholder" 
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/10 backdrop-blur-sm border border-white/20 rounded flex items-center justify-center">
                    <span className="text-white font-headline text-xl font-bold tracking-widest uppercase shadow-sm">Dashboard UI</span>
                  </div>
              </div>
            </div>
          </div>
          
          {/* Timeline Box */}
          <div className="lg:col-span-5 bg-card border-4 border-foreground rounded-[2rem] p-8 md:p-12 shadow-[8px_8px_0px_var(--color-shadow)] flex flex-col">
            <h2 className="text-xl md:text-2xl font-headline font-bold text-foreground mb-12">Process Timeline</h2>
            
            <div className="relative pl-8 space-y-10 flex-1 flex flex-col justify-center">
              <div className="absolute left-3 top-2 bottom-4 w-1 bg-foreground"></div>
              
              <div className="relative">
                <div className="absolute -left-8 top-1.5 w-6 h-6 rounded-full bg-[#6d28d9] border-[3px] border-foreground z-10 shadow-sm"></div>
                <h3 className="text-sm font-headline font-bold text-foreground mb-1">Phase 01: Audit</h3>
                <p className="text-muted-foreground font-body text-xs">Mapping legacy entry points.</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-8 top-1.5 w-6 h-6 rounded-full bg-[#FFD23F] border-[3px] border-foreground z-10 shadow-sm"></div>
                <h3 className="text-sm font-headline font-bold text-foreground mb-1">Phase 02: Design</h3>
                <p className="text-muted-foreground font-body text-xs">Interactive prototyping of automated cycles.</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-8 top-1.5 w-6 h-6 rounded-full bg-[#EE4266] border-[3px] border-foreground z-10 shadow-sm"></div>
                <h3 className="text-sm font-headline font-bold text-foreground mb-1">Phase 03: Launch</h3>
                <p className="text-muted-foreground font-body text-xs">Incremental rollout to finance teams.</p>
              </div>
            </div>
          </div>
          
        </section>

        {/* Feature Highlight Box */}
        <section className="mt-16">
          <div className="bg-[#6d28d9] rounded-[2rem] border-4 border-foreground shadow-[12px_12px_0px_var(--color-shadow)] overflow-hidden flex flex-col md:flex-row min-h-[400px]">
            
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-6 leading-tight">
                Financial Compliance at Core
              </h2>
              <p className="text-white/90 font-body text-lg leading-relaxed mb-10">
                Ensuring regulatory adherence was paramount. We integrated automated audit trails and multi-level approval hierarchies directly into the workflow, reducing risk exposure by 40% in the first quarter post-launch.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white text-[#6d28d9] flex items-center justify-center shadow-sm">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-white font-headline font-bold text-sm tracking-wide">Automated GST/Tax validation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white text-[#6d28d9] flex items-center justify-center shadow-sm">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-white font-headline font-bold text-sm tracking-wide">Immutable Audit Logging</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 bg-[#020617] border-t-4 md:border-t-0 md:border-l-4 border-foreground relative overflow-hidden flex items-center justify-center p-8">
               {/* Abstract Network Graph Placeholder */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-screen"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617] opacity-80"></div>
               <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617] opacity-80"></div>
               
               {/* Central glowing node */}
               <div className="relative z-10 w-3 h-3 bg-[#38bdf8] rounded-full shadow-[0_0_30px_10px_#38bdf8]"></div>
            </div>
            
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-[#E0B1CB] rounded-[3rem] p-6 sm:p-10 md:p-16 lg:p-24 text-center mt-32 relative overflow-hidden border-4 border-foreground shadow-[16px_16px_0px_var(--color-shadow)]">
          <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-foreground/10 rounded-full border-4 border-foreground/20 -translate-y-1/2 translate-x-1/4 animate-wiggle"></div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold text-foreground mb-8 md:mb-10 max-w-3xl mx-auto leading-[0.95] tracking-tighter drop-shadow-none">
            Next Project
          </h2>

          <Link href="/work/ability-connect">
            <Button className="!bg-white !text-[#1E293B] hover:!bg-accent hover:!text-white text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 border-2 border-foreground shadow-[4px_4px_0px_#1E293B]">
              Ability Connect Accessible Platform
            </Button>
          </Link>

          <div className="absolute bottom-[-20px] left-6 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-tertiary border-4 border-foreground rounded-full hidden sm:block animate-bounce-in opacity-70"></div>
        </div>
      </div>
    </div>
  );
}
