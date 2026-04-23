'use client';

import React from 'react';

export default function Hero() {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('work');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative py-2 md:py-4 overflow-hidden bg-transparent flex items-center min-h-[calc(100vh-6rem)]" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12 lg:gap-16 w-full">
        <div className="flex-1 space-y-6 z-10 w-full mt-4 md:mt-0">
          <div className="inline-block px-4 py-2 wobbly bg-[var(--color-paper-yellow)] border-[3px] border-[var(--color-border)] shadow-hard text-[var(--color-foreground)] font-body font-bold text-lg tracking-widest uppercase transform -rotate-2">
            UI/UX DESIGNER
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-headline font-bold text-[var(--color-foreground)] leading-[1.1]">
            <span className="block overflow-hidden pb-2 -mb-2">
              <span className="block transform rotate-1" style={{ animation: 'revealText 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both' }}>Hello, my</span>
            </span>
            <span className="block overflow-hidden pb-2 -mb-2">
              <span className="block" style={{ animation: 'revealText 1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both' }}>name is</span>
            </span>
            <span className="block overflow-hidden pb-2 -mb-2">
              <span className="block transform -rotate-1" style={{ animation: 'revealText 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both' }}>Gurusha</span>
            </span>
            <span className="block overflow-hidden pb-2 -mb-2">
              <span className="block text-[var(--color-accent)] transform rotate-2" style={{ animation: 'revealText 1s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both' }}>Arora!</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-foreground)] max-w-lg leading-relaxed font-body">
            UX/UI Designer with 2+ years of experience crafting intuitive, data-informed digital experiences. Blending user empathy with business outcomes across ERP, media, and accessibility platforms.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <a 
              className="px-8 py-3 bg-[var(--color-paper-yellow)] border-[3px] border-[var(--color-border)] text-[var(--color-foreground)] font-body font-bold text-xl wobbly shadow-hard hover:bg-[var(--color-accent)] hover:text-white hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all flex items-center gap-2 cursor-pointer transform -rotate-1" 
              href="#work"
              onClick={scrollToWork}
            >
              Work
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a 
              className="px-8 py-3 bg-white border-[3px] border-[var(--color-border)] text-[var(--color-foreground)] font-body font-bold text-xl wobbly shadow-hard hover:bg-[var(--color-muted)] hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all flex items-center gap-2 transform rotate-1"
              href="/media/Gurusha_Arora_UX_UI_Designer.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Resume
            </a>
            <a 
              className="px-8 py-3 bg-white border-[3px] border-[var(--color-border)] text-[var(--color-foreground)] font-body font-bold text-xl wobbly shadow-hard hover:bg-[var(--color-secondary-accent)] hover:text-white hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all flex items-center gap-2 transform -rotate-2" 
              href="https://linkedin.com/in/gurushaarora1611" 
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex-1 relative flex justify-center items-center mt-8 md:mt-0">
          <div className="relative w-72 h-72 md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="tape-decoration"></div>
            <div className="w-full h-full wobbly-md overflow-hidden border-[4px] border-[var(--color-border)] shadow-hard-emphasized bg-white p-2">
              <img 
                alt="Gurusha Arora" 
                className="w-full h-full object-cover wobbly" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkUg3TOQLHfUIypLJPqCXzfn4-mvBrP-bF4oLeBOwvaHCCZUs_RdK_ucoiMj1qV9F-u_x7_qxroqJSpL7MnGExzPcTUOiJKn8miXum5BwcXJsxhZqNsW1J-LIpddt3bUDGCSVm2DzT7Ok098JaXDkIdc09IpY58FDzqXNkHtRxOLk4hYmpUTAmLMt90TrioLy9dz4N1vPD6pP665baImdLLifezwePxLkyhGWyW5MqqIwGCOyIW3umnpgNv_EL-EEkuTGfHaEEVohk"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
