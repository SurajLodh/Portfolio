'use client';

import React from 'react';

export default function Hero() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative py-4 md:py-8 overflow-hidden bg-white flex items-center" id="about">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-10 lg:gap-16 w-full">
        <div className="flex-1 space-y-6 z-10 w-full mt-4 md:mt-0">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#fcf1c5] text-[#8e6e14] font-bold text-[10px] tracking-widest uppercase">
            UI/UX DESIGNER
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-headline font-extrabold text-gray-900 leading-[1.1]">
            Hello, my<br className="hidden md:block"/> name is<br/>
            <span className="italic font-normal">Gurusha<br className="hidden md:block"/> Arora.</span>
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-lg leading-relaxed font-light pb-2">
            UX/UI Designer with 2+ years of experience crafting intuitive, data-informed digital experiences. Blending user empathy with business outcomes across ERP, media, and accessibility platforms.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              className="px-8 py-3 bg-[#cf9a17] text-white font-semibold rounded shadow hover:bg-[#b08210] transition-colors flex items-center gap-2 text-sm cursor-pointer" 
              href="#projects"
              onClick={scrollToProjects}
            >
              Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a 
              className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-50 transition-colors text-sm" 
              href="https://linkedin.com/in/gurushaarora1611" 
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex-1 relative flex justify-center items-center mt-12 md:mt-0">
          {/* Subtle yellow glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#fbf5dc] rounded-full blur-3xl -z-10"></div>
          
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#e9c766] shadow-xl">
              <img 
                alt="Gurusha Arora" 
                className="w-full h-full object-cover grayscale opacity-90" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkUg3TOQLHfUIypLJPqCXzfn4-mvBrP-bF4oLeBOwvaHCCZUs_RdK_ucoiMj1qV9F-u_x7_qxroqJSpL7MnGExzPcTUOiJKn8miXum5BwcXJsxhZqNsW1J-LIpddt3bUDGCSVm2DzT7Ok098JaXDkIdc09IpY58FDzqXNkHtRxOLk4hYmpUTAmLMt90TrioLy9dz4N1vPD6pP665baImdLLifezwePxLkyhGWyW5MqqIwGCOyIW3umnpgNv_EL-EEkuTGfHaEEVohk"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
