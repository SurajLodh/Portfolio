'use client';

import React from 'react';
import { Button } from './ui/Button';

export default function Hero() {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('work');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative py-12 md:py-24 overflow-hidden flex items-center min-h-[calc(100vh-6rem)]" id="about">
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 -left-10 w-48 h-48 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-wiggle" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-tertiary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-wiggle" style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12 lg:gap-20 w-full relative z-10">
        
        {/* Text Section */}
        <div className="flex-1 space-y-8 w-full mt-8 md:mt-0 relative">
          {/* Decorative Circle behind text */}
          <div className="hidden lg:block absolute -top-12 -left-12 w-32 h-32 bg-tertiary rounded-full -z-10 border-2 border-foreground animate-bounce-in" style={{ animationDelay: '0.2s' }}></div>
          
          <div className="inline-block px-4 py-2 rounded-full border-2 border-foreground bg-white text-foreground font-headline font-bold text-xs tracking-widest uppercase shadow-pop animate-bounce-in">
            UI/UX DESIGNER
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-headline font-extrabold text-foreground leading-[1.05]">
            <span className="block overflow-hidden">
              <span className="block animate-reveal-text" style={{ animationDelay: '0.1s' }}>Hello, my</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-reveal-text" style={{ animationDelay: '0.2s' }}>name is</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block text-accent text-pop animate-reveal-text" style={{ animationDelay: '0.3s' }}>Gurusha</span>
            </span>
            <span className="block overflow-hidden pb-4">
              <span className="block text-tertiary text-pop animate-reveal-text" style={{ animationDelay: '0.4s' }}>Arora.</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-body animate-reveal-text" style={{ animationDelay: '0.5s' }}>
            UX/UI Designer with 2+ years of experience crafting intuitive, data-informed digital experiences. Blending user empathy with business outcomes across ERP, media, and accessibility platforms.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 animate-reveal-text" style={{ animationDelay: '0.6s' }}>
            <Button onClick={scrollToWork} icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            }>
              Work
            </Button>
            
            <a 
              className="inline-flex items-center justify-center font-headline font-bold rounded-full border-2 border-foreground transition-all duration-300 bg-white text-foreground shadow-pop hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-pop-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-pop-active px-6 py-3 text-base gap-2"
              href="/media/Gurusha_Arora_UX_UI_Designer.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Resume
            </a>
            
            <Button variant="secondary" asChild>
              <a href="https://linkedin.com/in/gurushaarora1611" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="flex-1 relative flex justify-center items-center mt-12 md:mt-0 animate-bounce-in" style={{ animationDelay: '0.3s' }}>
          
          {/* Decorative background blocks */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-tertiary rounded-full -z-20 border-2 border-foreground translate-x-4 translate-y-4 hidden md:block"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-white rounded-full -z-10 border-2 border-foreground bg-dot-pattern hidden md:block"></div>
          
          <div className="relative w-72 h-72 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
            <div className="w-full h-full border-4 border-foreground shadow-[12px_12px_0px_#1E293B] overflow-hidden bg-white" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}>
              <img 
                alt="Gurusha Arora" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkUg3TOQLHfUIypLJPqCXzfn4-mvBrP-bF4oLeBOwvaHCCZUs_RdK_ucoiMj1qV9F-u_x7_qxroqJSpL7MnGExzPcTUOiJKn8miXum5BwcXJsxhZqNsW1J-LIpddt3bUDGCSVm2DzT7Ok098JaXDkIdc09IpY58FDzqXNkHtRxOLk4hYmpUTAmLMt90TrioLy9dz4N1vPD6pP665baImdLLifezwePxLkyhGWyW5MqqIwGCOyIW3umnpgNv_EL-EEkuTGfHaEEVohk"
              />
            </div>
          </div>
          
          {/* Floating shapes */}
          <div className="absolute top-0 -right-4 w-12 h-12 bg-secondary rounded-full border-2 border-foreground shadow-pop animate-bounce-in" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute -bottom-8 left-10 w-16 h-16 bg-quaternary border-2 border-foreground shadow-pop animate-bounce-in rotate-12" style={{ animationDelay: '0.8s', borderRadius: '4px' }}></div>
        </div>
      </div>
    </header>
  );
}
