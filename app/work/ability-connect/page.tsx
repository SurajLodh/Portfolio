"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function AbilityConnectPage() {
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
            Case Study
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-headline font-extrabold text-foreground mb-6 leading-[0.95] tracking-tighter max-w-4xl">
          Ability Connect Accessible Platform
        </h1>
        
        <div className="flex flex-wrap gap-6 mb-16 text-muted-foreground font-headline text-sm font-bold tracking-wide">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Lead Designer
          </div>
          <div className="hidden sm:block text-foreground/30">|</div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            Oct 2023 — Feb 2024
          </div>
        </div>

        {/* Hero Image Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-[2rem] border-4 border-foreground shadow-[12px_12px_0px_var(--color-shadow)] overflow-hidden bg-[#e2e8f0] flex flex-col items-center justify-center p-8"
        >
          {/* Abstract background text mimicking the screenshot */}
          <div className="absolute top-8 text-center w-full opacity-20 pointer-events-none">
             <div className="text-4xl md:text-6xl font-headline font-bold text-foreground blur-[2px]">Accessibility</div>
             <div className="text-2xl md:text-4xl font-headline font-bold text-foreground blur-[2px] mt-8">User Preferences</div>
          </div>
          
          {/* 3 Overlapping Cards */}
          <div className="relative z-10 w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-6 mt-12 md:mt-0">
            {/* Visual */}
            <div className="w-full max-w-[280px] bg-[#8b5cf6] border-[3px] border-foreground rounded-lg p-6 shadow-[8px_8px_0px_var(--color-shadow)] md:-rotate-3 md:translate-y-4 hover:-translate-y-2 hover:rotate-0 transition-transform duration-300">
              <div className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="text-xl font-headline font-bold text-white mb-2">Visual</h3>
              <p className="text-white/90 text-xs font-body leading-relaxed">High contrast UI & Screen reader optimization</p>
            </div>
            
            {/* Auditory */}
            <div className="w-full max-w-[280px] bg-[#FFD23F] border-[3px] border-foreground rounded-lg p-6 shadow-[8px_8px_0px_var(--color-shadow)] z-10 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-8 h-8 rounded-full border-2 border-foreground text-foreground flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18.5 10.5a8.5 8.5 0 0 0-13 0"/><path d="M15.5 13.5a4.5 4.5 0 0 0-7 0"/><path d="M12 16.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>
              </div>
              <h3 className="text-xl font-headline font-bold text-foreground mb-2">Auditory</h3>
              <p className="text-foreground/90 text-xs font-body leading-relaxed">Real-time captioning & Haptic feedback signals</p>
            </div>
            
            {/* Motor */}
            <div className="w-full max-w-[280px] bg-[#EE4266] border-[3px] border-foreground rounded-lg p-6 shadow-[8px_8px_0px_var(--color-shadow)] md:rotate-3 md:translate-y-4 hover:-translate-y-2 hover:rotate-0 transition-transform duration-300">
              <div className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17-5.17-5.17a2 2 0 0 1 2.83-2.83l1.34 1.34"/><path d="M14 11v6"/><path d="M17 11v6"/><path d="M20 11v6"/><path d="M11 6V2"/></svg>
              </div>
              <h3 className="text-xl font-headline font-bold text-white mb-2">Motor</h3>
              <p className="text-white/90 text-xs font-body leading-relaxed">Switch access & Eye-tracking navigation focus</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8 mt-8 relative z-10">
        
        {/* Top Grid Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Challenge Box */}
          <div className="lg:col-span-8 bg-card border-4 border-foreground rounded-[2rem] p-8 md:p-12 shadow-[8px_8px_0px_var(--color-shadow)] flex flex-col">
            <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-foreground mb-6">The Challenge</h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
              Designing for accessibility is often treated as an afterthought. Our mission was to build a platform where inclusive design was the core foundation, ensuring that users with visual, auditory, and motor impairments have a seamless digital experience without friction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
              <div className="border-l-4 border-[#8b5cf6] pl-6 py-2">
                <h3 className="text-sm font-headline font-bold text-[#8b5cf6] mb-2 uppercase tracking-wide">01: Compliance</h3>
                <p className="text-muted-foreground font-body text-xs leading-relaxed">Achieving 100% WCAG 2.1 Level AAA compliance across all modules.</p>
              </div>
              <div className="border-l-4 border-[#c084fc] pl-6 py-2">
                <h3 className="text-sm font-headline font-bold text-[#c084fc] mb-2 uppercase tracking-wide">02: Cognitive Load</h3>
                <p className="text-muted-foreground font-body text-xs leading-relaxed">Simplifying complex data structures for neurodivergent users.</p>
              </div>
            </div>
          </div>
          
          {/* Impact Box */}
          <div className="lg:col-span-4 bg-[#e0e7ff] border-4 border-foreground rounded-[2rem] p-8 md:p-12 shadow-[8px_8px_0px_var(--color-shadow)] flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-headline font-bold text-foreground mb-8">Impact</h2>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-7xl font-headline font-extrabold text-[#6d28d9] tracking-tighter">85%</span>
              <span className="text-sm font-headline font-bold text-[#6d28d9] uppercase">Ease of Use</span>
            </div>
            <p className="text-foreground/80 font-body text-sm leading-relaxed">
              User testing showed a significant reduction in task completion time for screen reader users.
            </p>
          </div>
        </div>

        {/* Bottom Grid Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Tech Stack Box */}
          <div className="lg:col-span-4 bg-[#FFD23F] border-4 border-foreground rounded-[2rem] p-8 md:p-12 shadow-[8px_8px_0px_var(--color-shadow)] flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-headline font-bold text-foreground mb-8">Tech Stack</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground flex-shrink-0"></div>
                <span className="font-body text-sm font-medium text-foreground">Figma (Accessible Design System)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground flex-shrink-0"></div>
                <span className="font-body text-sm font-medium text-foreground">Stark & Axe DevTools</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground flex-shrink-0"></div>
                <span className="font-body text-sm font-medium text-foreground">VoiceOver / TalkBack</span>
              </li>
            </ul>
          </div>
          
          {/* Inclusive Research Box */}
          <div className="lg:col-span-8 bg-card border-4 border-foreground rounded-[2rem] p-8 md:p-12 shadow-[8px_8px_0px_var(--color-shadow)] flex flex-col">
            <div className="w-full h-48 md:h-64 bg-[#0f766e] rounded-xl border-4 border-foreground overflow-hidden mb-8 relative shadow-inner">
               {/* Research Image Placeholder */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-screen grayscale"></div>
               <div className="absolute inset-0 border-8 border-[#0f766e]/50 mix-blend-overlay"></div>
               {/* Icons overlay mimicking the screenshot */}
               <div className="absolute inset-0 flex items-center justify-center opacity-60">
                 <svg width="200" height="100" viewBox="0 0 200 100" className="stroke-white stroke-2 fill-none">
                    <circle cx="50" cy="50" r="20" />
                    <circle cx="150" cy="50" r="20" />
                    <line x1="70" y1="50" x2="130" y2="50" />
                    <path d="M50 70 Q 100 100 150 70" />
                 </svg>
               </div>
            </div>
            <h2 className="text-xl md:text-2xl font-headline font-bold text-foreground mb-4">Inclusive Research</h2>
            <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">
              We conducted co-design workshops with users from various disability groups to understand their specific pain points in existing platform architectures.
            </p>
          </div>
        </div>

        {/* Design Process Timeline */}
        <section className="mt-32 pb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-foreground text-center mb-24 tracking-tight">Design Process</h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[4px] bg-foreground md:-translate-x-1/2"></div>
            
            <div className="space-y-16 md:space-y-24">
              
              {/* Phase 1 */}
              <div className="relative flex md:justify-start">
                <div className="hidden md:block w-1/2 pr-16 text-right relative">
                  <div className="absolute right-0 top-1/2 w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center font-headline font-bold translate-x-1/2 -translate-y-1/2 z-10 shadow-sm border-2 border-background">1</div>
                  <div className="inline-block bg-card border-4 border-foreground p-8 shadow-[8px_8px_0px_var(--color-shadow)] text-left w-full max-w-[400px]">
                    <div className="text-[10px] font-headline font-bold text-[#EE4266] uppercase tracking-widest mb-2">PHASE 1</div>
                    <h3 className="text-xl font-headline font-bold text-foreground mb-3">Empathy Discovery</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">Immersion sessions using screen readers and switch controls to experience current barriers firsthand.</p>
                  </div>
                </div>
                
                {/* Mobile Phase 1 */}
                <div className="md:hidden pl-20 relative w-full">
                  <div className="absolute left-0 top-1/2 w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center font-headline font-bold translate-x-3 -translate-y-1/2 z-10 shadow-sm border-2 border-background text-sm">1</div>
                  <div className="bg-card border-4 border-foreground p-6 shadow-[8px_8px_0px_var(--color-shadow)]">
                    <div className="text-[10px] font-headline font-bold text-[#EE4266] uppercase tracking-widest mb-2">PHASE 1</div>
                    <h3 className="text-xl font-headline font-bold text-foreground mb-2">Empathy Discovery</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">Immersion sessions using screen readers and switch controls to experience current barriers firsthand.</p>
                  </div>
                </div>
              </div>
              
              {/* Phase 2 */}
              <div className="relative flex md:justify-end">
                <div className="hidden md:block w-1/2 pl-16 relative">
                  <div className="absolute left-0 top-1/2 w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center font-headline font-bold -translate-x-1/2 -translate-y-1/2 z-10 shadow-sm border-2 border-background">2</div>
                  <div className="inline-block bg-card border-4 border-foreground p-8 shadow-[8px_8px_0px_var(--color-shadow)] w-full max-w-[400px]">
                    <div className="text-[10px] font-headline font-bold text-[#8b5cf6] uppercase tracking-widest mb-2">PHASE 2</div>
                    <h3 className="text-xl font-headline font-bold text-foreground mb-3">Architecture Mapping</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">Designing a non-linear navigation system that allows users to jump to main content instantly via keyboard shortcuts.</p>
                  </div>
                </div>
                
                {/* Mobile Phase 2 */}
                <div className="md:hidden pl-20 relative w-full">
                  <div className="absolute left-0 top-1/2 w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center font-headline font-bold translate-x-3 -translate-y-1/2 z-10 shadow-sm border-2 border-background text-sm">2</div>
                  <div className="bg-card border-4 border-foreground p-6 shadow-[8px_8px_0px_var(--color-shadow)]">
                    <div className="text-[10px] font-headline font-bold text-[#8b5cf6] uppercase tracking-widest mb-2">PHASE 2</div>
                    <h3 className="text-xl font-headline font-bold text-foreground mb-2">Architecture Mapping</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">Designing a non-linear navigation system that allows users to jump to main content instantly via keyboard shortcuts.</p>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative flex md:justify-start">
                <div className="hidden md:block w-1/2 pr-16 text-right relative">
                  <div className="absolute right-0 top-1/2 w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center font-headline font-bold translate-x-1/2 -translate-y-1/2 z-10 shadow-sm border-2 border-background">3</div>
                  <div className="inline-block bg-card border-4 border-foreground p-8 shadow-[8px_8px_0px_var(--color-shadow)] text-left w-full max-w-[400px]">
                    <div className="text-[10px] font-headline font-bold text-[#FFD23F] uppercase tracking-widest mb-2 text-foreground">PHASE 3</div>
                    <h3 className="text-xl font-headline font-bold text-foreground mb-3">The Component Lab</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">Developing 'Smart Cards' that auto-adjust their layout based on user-defined accessibility settings.</p>
                  </div>
                </div>
                
                {/* Mobile Phase 3 */}
                <div className="md:hidden pl-20 relative w-full">
                  <div className="absolute left-0 top-1/2 w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center font-headline font-bold translate-x-3 -translate-y-1/2 z-10 shadow-sm border-2 border-background text-sm">3</div>
                  <div className="bg-card border-4 border-foreground p-6 shadow-[8px_8px_0px_var(--color-shadow)]">
                    <div className="text-[10px] font-headline font-bold text-[#FFD23F] uppercase tracking-widest mb-2 text-foreground">PHASE 3</div>
                    <h3 className="text-xl font-headline font-bold text-foreground mb-2">The Component Lab</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">Developing 'Smart Cards' that auto-adjust their layout based on user-defined accessibility settings.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Accessible UI Tokens Section */}
        <section className="mt-16">
          <div className="bg-[#1E293B] rounded-[2rem] border-4 border-foreground shadow-[12px_12px_0px_var(--color-shadow)] p-8 md:p-12 lg:p-16">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-white mb-3">Accessible UI Tokens</h2>
                <p className="text-white/70 font-body text-sm md:text-base">A modular design system built for flexibility and readability.</p>
              </div>
              <Button className="!bg-[#FFD23F] !text-[#1E293B] hover:!bg-white text-sm px-6 border-2 border-foreground shadow-[4px_4px_0px_#000]">
                VIEW SYSTEM
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Token 1 */}
              <div className="bg-white/10 border-2 border-white/20 p-4 rounded-xl">
                <div className="bg-white border-[3px] border-foreground aspect-square mb-6 flex items-center justify-center">
                  <span className="text-6xl font-headline font-bold text-foreground">Aa</span>
                </div>
                <h3 className="text-xs font-headline font-bold text-white mb-2 uppercase tracking-wide">DYNAMIC TYPE</h3>
                <p className="text-white/60 font-body text-[10px] leading-relaxed">Support for up to 200% scaling without layout break.</p>
              </div>
              
              {/* Token 2 */}
              <div className="bg-white/10 border-2 border-white/20 p-4 rounded-xl">
                <div className="bg-[#8b5cf6] border-[3px] border-foreground aspect-square mb-6 flex items-center justify-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-foreground shadow-sm z-10"></div>
                  <div className="w-8 h-8 rounded-full bg-[#FFD23F] border-2 border-foreground shadow-sm -ml-4"></div>
                </div>
                <h3 className="text-xs font-headline font-bold text-white mb-2 uppercase tracking-wide">COLOR CONTRAST</h3>
                <p className="text-white/60 font-body text-[10px] leading-relaxed">7:1 ratio minimum for all text-based elements.</p>
              </div>

              {/* Token 3 */}
              <div className="bg-white/10 border-2 border-white/20 p-4 rounded-xl">
                <div className="bg-white border-[3px] border-foreground aspect-square mb-6 flex items-center justify-center">
                  <div className="w-12 h-6 border-2 border-foreground rounded-[2px] shadow-[0_0_0_2px_#38bdf8] flex items-center justify-center">
                    <div className="w-4 h-1 bg-foreground/30 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xs font-headline font-bold text-white mb-2 uppercase tracking-wide">FOCUS STATES</h3>
                <p className="text-white/60 font-body text-[10px] leading-relaxed">Ultra-visible focus rings for all interaction points.</p>
              </div>

              {/* Token 4 */}
              <div className="bg-white/10 border-2 border-white/20 p-4 rounded-xl">
                <div className="bg-[#FFD23F] border-[3px] border-foreground aspect-square mb-6 flex items-center justify-center">
                  <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center text-white">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17-5.17-5.17a2 2 0 0 1 2.83-2.83l1.34 1.34"/><path d="M14 11v6"/><path d="M17 11v6"/><path d="M20 11v6"/><path d="M11 6V2"/></svg>
                  </div>
                </div>
                <h3 className="text-xs font-headline font-bold text-white mb-2 uppercase tracking-wide">TAP TARGETS</h3>
                <p className="text-white/60 font-body text-[10px] leading-relaxed">Minimum 48x48px interactive areas for touch input.</p>
              </div>
            </div>
            
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-[#8b5cf6] rounded-[3rem] p-6 sm:p-10 md:p-16 lg:p-24 text-center mt-32 relative overflow-hidden border-4 border-foreground shadow-[16px_16px_0px_var(--color-shadow)]">
          <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-white/10 rounded-full border-4 border-white/20 -translate-y-1/2 translate-x-1/4 animate-wiggle"></div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold text-white mb-8 md:mb-10 max-w-3xl mx-auto leading-[0.95] tracking-tighter drop-shadow-md">
            Next Project
          </h2>

          <Link href="/work/ani-news">
            <Button className="!bg-white !text-[#1E293B] hover:!bg-accent hover:!text-white text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 border-2 border-foreground shadow-[4px_4px_0px_#1E293B]">
              ANI News Redesign
            </Button>
          </Link>

          <div className="absolute bottom-[-20px] left-6 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#FFD23F] border-4 border-foreground rounded-full hidden sm:block animate-bounce-in opacity-90 shadow-pop"></div>
        </div>
      </div>
    </div>
  );
}
