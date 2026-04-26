import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden pb-20">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 lg:pt-20 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <div className="flex-1 space-y-8 z-10 w-full relative">
            
            {/* Abstract squiggle */}
            <div className="absolute -top-10 -left-10 w-24 h-24 border-4 border-tertiary rounded-full border-dashed animate-wiggle -z-10"></div>
            
            <div className="inline-block px-4 py-2 rounded-full border-2 border-foreground bg-quaternary text-foreground font-headline font-bold text-xs tracking-widest uppercase shadow-pop">
              The Editorial Curator
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-headline font-extrabold text-foreground leading-[1.05] tracking-tight">
              Designing data-<br />informed stories <br />
              with a <span className="text-accent text-pop">human pulse.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg font-body font-medium leading-relaxed">
              I am Gurusha Arora, a multidisciplinary designer focused on creating high-end gallery-like digital experiences. My approach balances the authority of a boutique agency with the intimacy of a solo practitioner.
            </p>
          </div>
          
          <div className="flex-1 relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary rounded-full border-2 border-foreground bg-dot-pattern -z-10"></div>
            <div className="border-4 border-foreground shadow-[12px_12px_0px_var(--color-shadow)] rounded-[2rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="Gurusha Arora Portrait"
                className="w-full max-w-[400px] h-auto object-cover"
                style={{ aspectRatio: '4/5' }}
              />
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-tertiary border-2 border-foreground rounded-full shadow-pop flex items-center justify-center animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-6 h-6 border-2 border-foreground rounded-sm rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Expertise */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-32 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-foreground pb-4 mb-12 gap-4">
          <h2 className="text-4xl font-headline font-extrabold text-foreground">Core Expertise</h2>
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Strategic Problem Solving</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-8 flex flex-col justify-between space-y-12 border-4 bg-card">
            <div className="w-16 h-16 rounded-full bg-accent border-2 border-foreground flex items-center justify-center shadow-pop">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-headline text-foreground font-bold">Product Architecture</h3>
              <p className="text-base text-muted-foreground font-body font-medium leading-relaxed">
                Synthesizing complex data into intuitive navigation flows and scalable design systems that evolve with your user base.
              </p>
            </div>
          </Card>

          <Card className="p-8 flex flex-col justify-between space-y-12 border-4 bg-tertiary">
            <div className="w-16 h-16 rounded-full bg-card border-2 border-foreground flex items-center justify-center shadow-pop">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-headline text-[#1E293B] font-bold">Editorial UI</h3>
              <p className="text-base text-[#1E293B]/80 font-body font-medium leading-relaxed">
                Crafting high-contrast layouts that prioritize content through intentional white space and premium typography.
              </p>
            </div>
          </Card>

          <Card className="p-8 lg:col-span-1 md:col-span-2 flex flex-col justify-between space-y-12 border-4 bg-quaternary">
            <div className="w-16 h-16 rounded-full bg-card border-2 border-foreground flex items-center justify-center shadow-pop">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-headline text-[#1E293B] font-bold">User Research</h3>
              <p className="text-base text-[#1E293B]/80 font-body font-medium leading-relaxed">
                Qualitative insights translated into quantitative wins, ensuring every pixel serves a human-centric purpose.
              </p>
            </div>
          </Card>

          <Card className="p-8 lg:col-span-3 flex flex-col md:flex-row items-center justify-between gap-10 border-4 bg-secondary">
            <div className="flex-1 space-y-4">
              <h3 className="text-3xl font-headline text-[#1E293B] font-bold">Visual Storytelling</h3>
              <p className="text-lg text-[#1E293B]/90 font-body font-medium leading-relaxed max-w-2xl">
                Moving beyond aesthetics to build brand narratives that resonate on an emotional level with high-value audiences.
              </p>
            </div>
            <div className="w-[180px] h-[100px] bg-card rounded-xl border-4 border-foreground shadow-pop flex items-center justify-center -rotate-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="m18 15-6-6-6 6"></path><path d="m18 21-6-6-6 6"></path></svg>
            </div>
          </Card>
        </div>
      </div>

      {/* The Toolkit & Academic Journey */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-32 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">

          {/* The Toolkit */}
          <div className="flex-1">
            <h2 className="text-4xl font-headline font-extrabold text-foreground mb-12 flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-accent border-2 border-foreground"></div>
              The Toolkit
            </h2>
            <div className="space-y-6">
              {[
                { tool: "Figma & FigJam", role: "VISUAL MASTER", color: "bg-tertiary" },
                { tool: "Adobe Creative Suite", role: "ASSET CREATION", color: "bg-secondary" },
                { tool: "AI Agent", role: "IMPLEMENTATION", color: "bg-quaternary" },
                { tool: "Notion & Jira", role: "STRATEGY & OPS", color: "bg-accent" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b-2 border-foreground pb-4 group">
                  <div className="flex items-center gap-4 text-foreground text-lg font-headline font-bold group-hover:translate-x-2 transition-transform">
                    <div className={`w-4 h-4 ${item.color} border-2 border-foreground rounded-full shadow-[2px_2px_0px_var(--color-shadow)]`}></div>
                    {item.tool}
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold bg-card px-3 py-1 rounded-full border-2 border-foreground">
                    {item.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Journey */}
          <div className="flex-1">
            <h2 className="text-4xl font-headline font-extrabold text-foreground mb-12 flex items-center gap-4">
              <div className="w-8 h-8 bg-quaternary border-2 border-foreground rotate-45"></div>
              Academic Journey
            </h2>
            <div className="space-y-12 relative border-l-4 border-foreground ml-4">
              <div className="relative pl-10">
                <div className="absolute top-0 -left-4 w-7 h-7 bg-card border-4 border-foreground rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
                <div className="inline-block bg-tertiary px-3 py-1 rounded-full border-2 border-foreground text-[10px] font-bold text-foreground uppercase tracking-widest mb-4 shadow-[2px_2px_0px_var(--color-shadow)]">
                  2018 — 2020
                </div>
                <h3 className="text-2xl font-headline text-foreground font-bold">Master of Human-Computer Interaction</h3>
                <div className="text-sm font-bold text-muted-foreground mb-2 mt-1 uppercase tracking-wider">Parsons School of Design, New York</div>
                <p className="text-base font-body font-medium text-foreground bg-card p-4 rounded-xl border-2 border-foreground shadow-pop mt-4">
                  Focused on ethical AI and sensory interface design.
                </p>
              </div>

              <div className="relative pl-10">
                <div className="absolute top-0 -left-4 w-7 h-7 bg-card border-4 border-foreground rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                </div>
                <div className="inline-block bg-tertiary px-3 py-1 rounded-full border-2 border-foreground text-[10px] font-bold text-foreground uppercase tracking-widest mb-4 shadow-[2px_2px_0px_var(--color-shadow)]">
                  2014 — 2018
                </div>
                <h3 className="text-2xl font-headline text-foreground font-bold">Bachelor of Communication Design</h3>
                <div className="text-sm font-bold text-muted-foreground mb-2 mt-1 uppercase tracking-wider">National Institute of Design (NID)</div>
                <p className="text-base font-body font-medium text-foreground bg-card p-4 rounded-xl border-2 border-foreground shadow-pop mt-4">
                  Specialization in typography and visual storytelling systems.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer CTA Box */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-accent rounded-[2.5rem] p-8 md:p-12 lg:p-20 border-4 border-foreground shadow-[16px_16px_0px_#FBBF24] relative overflow-hidden text-center md:text-left">
          {/* Decorative pattern fill */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMjBRMTAgMCAyMCAyMFQ0MCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] opacity-20"></div>

          <div className="max-w-2xl relative z-10 mx-auto md:mx-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold text-white leading-tight mb-6 drop-shadow-[2px_2px_0px_var(--color-shadow)]">
              Ready to curate your next digital exhibition?
            </h2>
            <p className="text-white/90 text-lg font-body font-medium leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
              I am currently accepting select project inquiries for late 2024. Let's create something that transcends the ordinary.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a href="mailto:gurushaa11@gmail.com">
                <Button className="bg-tertiary text-foreground hover:bg-card text-lg px-8 py-4">
                  Start a Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Button>
              </a>
              <a href="/media/Gurusha_Arora_UX_UI_Designer.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="bg-card hover:bg-muted text-foreground text-lg px-8 py-4">
                  View Full Resume
                </Button>
              </a>
            </div>
          </div>
          
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary border-4 border-foreground rounded-full -rotate-12 shadow-pop hidden md:block"></div>
        </div>
      </div>

    </div>
  );
}
