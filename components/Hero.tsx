'use client';

import React from 'react';

export default function Hero() {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('work');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative py-2 md:py-4 overflow-hidden bg-background flex items-center min-h-[calc(100vh-6rem)]" id="about">
      <div className="absolute inset-0 swiss-grid-pattern pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-stretch gap-8 lg:gap-12 w-full relative z-10">
        <div className="flex-1 space-y-6 z-10 w-full mt-4 md:mt-0 pt-10">
          <div className="inline-block px-4 py-2 border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white font-black text-xs tracking-widest uppercase transition-none">
            UI/UX DESIGNER
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-headline font-black text-on-background uppercase tracking-tighter leading-[0.9]">
            <span className="block pb-2">HELLO, MY</span>
            <span className="block pb-2">NAME IS</span>
            <span className="block pb-2">GURUSHA</span>
            <span className="block text-[#FF3000]">ARORA.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-background max-w-xl font-medium leading-tight pb-4 pt-4 border-l-4 border-black dark:border-white pl-6">
            Designer crafting intuitive, data-informed interfaces. Brutal precision, objective structure, and undeniable clarity across ERP and media platforms.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-widest text-xs border-2 border-black dark:border-white hover:bg-[#FF3000] hover:text-white hover:border-[#FF3000] transition-none flex items-center gap-3 cursor-pointer" 
              href="#work"
              onClick={scrollToWork}
            >
              Work
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a 
              className="px-8 py-4 bg-transparent text-on-background font-black uppercase tracking-widest text-xs border-2 border-black dark:border-white hover:bg-[#FF3000] hover:text-white hover:border-[#FF3000] transition-none flex items-center gap-3"
              href="/media/Gurusha_Arora_UX_UI_Designer.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><path d="M21 15v4h-16v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Resume
            </a>
            <a 
              className="px-8 py-4 bg-transparent text-on-background font-black uppercase tracking-widest text-xs border-2 border-black dark:border-white hover:bg-[#FF3000] hover:text-white hover:border-[#FF3000] transition-none" 
              href="https://linkedin.com/in/gurushaarora1611" 
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex-1 relative flex justify-center items-center mt-12 md:mt-0 p-8 border-l-0 md:border-l-4 border-black dark:border-white">
          <div className="relative w-full aspect-square max-w-[400px]">
            <div className="w-full h-full border-4 border-black dark:border-white bg-on-background overflow-hidden relative group">
              <img 
                alt="Gurusha Arora" 
                className="w-full h-full object-cover grayscale dark:grayscale-0 opacity-90 dark:opacity-100 group-hover:grayscale-0 group-hover:opacity-100 transition-none" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkUg3TOQLHfUIypLJPqCXzfn4-mvBrP-bF4oLeBOwvaHCCZUs_RdK_ucoiMj1qV9F-u_x7_qxroqJSpL7MnGExzPcTUOiJKn8miXum5BwcXJsxhZqNsW1J-LIpddt3bUDGCSVm2DzT7Ok098JaXDkIdc09IpY58FDzqXNkHtRxOLk4hYmpUTAmLMt90TrioLy9dz4N1vPD6pP665baImdLLifezwePxLkyhGWyW5MqqIwGCOyIW3umnpgNv_EL-EEkuTGfHaEEVohk"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
