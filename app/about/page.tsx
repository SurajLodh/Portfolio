import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-swiss-muted border-t-4 border-black dark:border-white transition-none w-full pb-32 text-on-background">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-20 border-b-4 border-black dark:border-white">
        <div className="flex flex-col lg:flex-row items-stretch gap-0 border-4 border-black dark:border-white bg-on-background overflow-hidden relative group">
          <div className="flex-1 space-y-12 p-8 md:p-16 bg-background border-b-4 lg:border-b-0 lg:border-r-4 border-black dark:border-white">
            <div className="inline-block px-4 py-2 border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-black text-xs tracking-widest uppercase transition-none">
              THE EDITORIAL CURATOR
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-[80px] font-headline font-black text-on-background uppercase tracking-tighter leading-none">
              DESIGNING DATA-<br />INFORMED STORIES<br />
              <span className="text-[#FF3000]">WITH A HUMAN PULSE.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-lg leading-relaxed border-l-4 border-black dark:border-white pl-6">
              I am Gurusha Arora, a multidisciplinary designer focused on creating high-end, objective digital experiences. My approach balances functional authority with uncompromising clarity.
            </p>
          </div>
          <div className="flex-1 relative w-full bg-black min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
              alt="Gurusha Arora Portrait"
              className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity group-hover:opacity-100 group-hover:grayscale-0 transition-none"
            />
          </div>
        </div>
      </div>

      {/* Core Expertise */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 pb-32 border-b-4 border-black dark:border-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-black dark:border-white pb-6 mb-16 gap-4">
          <h2 className="text-6xl md:text-8xl font-headline font-black uppercase tracking-tighter text-on-background">CORE EXPERTISE</h2>
          <span className="text-xs font-black tracking-widest uppercase mb-4">STRATEGIC PROBLEM SOLVING</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-black dark:border-white bg-on-background">
          <div className="bg-background border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white p-8 md:p-12 flex flex-col space-y-16 group hover:bg-[#FF3000] hover:text-white transition-none">
            <span className="text-6xl font-black opacity-20">01</span>
            <div className="space-y-6">
              <h3 className="text-3xl font-headline font-black uppercase tracking-tighter">Product Architecture</h3>
              <p className="text-lg font-medium leading-relaxed border-l-4 border-black dark:border-white group-hover:border-white pl-4">
                Synthesizing complex data into intuitive navigation flows and scalable design systems that evolve with your user base.
              </p>
            </div>
          </div>

          <div className="bg-background border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white p-8 md:p-12 flex flex-col space-y-16 group hover:bg-[#FF3000] hover:text-white transition-none">
            <span className="text-6xl font-black opacity-20">02</span>
            <div className="space-y-6">
              <h3 className="text-3xl font-headline font-black uppercase tracking-tighter">Editorial UI</h3>
              <p className="text-lg font-medium leading-relaxed border-l-4 border-black dark:border-white group-hover:border-white pl-4">
                Crafting high-contrast layouts that prioritize content through intentional white space and premium typography.
              </p>
            </div>
          </div>

          <div className="bg-background p-8 md:p-12 flex flex-col space-y-16 group hover:bg-[#FF3000] hover:text-white transition-none">
            <span className="text-6xl font-black opacity-20">03</span>
            <div className="space-y-6">
              <h3 className="text-3xl font-headline font-black uppercase tracking-tighter">User Research</h3>
              <p className="text-lg font-medium leading-relaxed border-l-4 border-black dark:border-white group-hover:border-white pl-4">
                Qualitative insights translated into quantitative wins, ensuring every pixel serves a strictly objective purpose.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Toolkit & Academic Journey */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 pb-32">
        <div className="flex flex-col lg:flex-row gap-0 border-4 border-black dark:border-white bg-on-background">

          {/* The Toolkit */}
          <div className="flex-1 bg-background border-b-4 lg:border-b-0 lg:border-r-4 border-black dark:border-white p-8 md:p-16">
            <h2 className="text-5xl md:text-6xl font-headline font-black uppercase tracking-tighter mb-16">THE TOOLKIT</h2>
            <div className="space-y-0 border-t-4 border-black dark:border-white">
              {[
                { tool: "Figma & FigJam", role: "VISUAL MASTER" },
                { tool: "Adobe Creative Suite", role: "ASSET CREATION" },
                { tool: "AI Agent", role: "IMPLEMENTATION" },
                { tool: "Notion & Jira", role: "STRATEGY & OPS" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b-4 border-black dark:border-white py-6 group hover:bg-[#FF3000] hover:text-white px-4 -mx-4 transition-none cursor-pointer">
                  <div className="flex items-center gap-4 text-xl font-black uppercase tracking-widest">
                    {item.tool}
                  </div>
                  <span className="text-xs uppercase tracking-widest font-black border-2 border-black dark:border-white group-hover:border-white px-3 py-1">
                    {item.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Journey */}
          <div className="flex-1 bg-background p-8 md:p-16">
            <h2 className="text-5xl md:text-6xl font-headline font-black uppercase tracking-tighter mb-16">ACADEMIC JOURNEY</h2>
            <div className="space-y-16 border-l-4 border-black dark:border-white ml-2 pl-8">
              <div className="relative group">
                <div className="absolute top-[10px] -left-[42px] w-6 h-6 border-4 border-black dark:border-white bg-white group-hover:bg-[#FF3000] transition-none"></div>
                <div className="text-xs font-black uppercase tracking-widest mb-2">
                  2018 — 2020
                </div>
                <h3 className="text-3xl font-headline font-black uppercase tracking-tighter leading-none mb-4">Master of Human-Computer Interaction</h3>
                <div className="text-sm font-bold tracking-widest uppercase mb-4">Parsons School of Design, New York</div>
                <p className="text-lg font-medium border-l-4 border-black dark:border-white pl-4">
                  Focused on ethical AI and sensory interface design.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute top-[10px] -left-[42px] w-6 h-6 border-4 border-black dark:border-white bg-white group-hover:bg-[#FF3000] transition-none"></div>
                <div className="text-xs font-black uppercase tracking-widest mb-2">
                  2014 — 2018
                </div>
                <h3 className="text-3xl font-headline font-black uppercase tracking-tighter leading-none mb-4">Bachelor of Communication Design</h3>
                <div className="text-sm font-bold tracking-widest uppercase mb-4">National Institute of Design (NID)</div>
                <p className="text-lg font-medium border-l-4 border-black dark:border-white pl-4">
                  Specialization in typography and visual storytelling systems.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer CTA Box */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-10">
        <div className="bg-black dark:bg-white text-white dark:text-black border-4 border-black dark:border-white p-8 md:p-16 lg:p-24 relative overflow-hidden group hover:bg-[#FF3000] hover:text-white transition-none">
          <div className="max-w-3xl relative z-10">
            <h2 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-none mb-8">
              CURATE YOUR NEXT DIGITAL EXHIBITION.
            </h2>
            <p className="text-xl font-medium leading-relaxed mb-12 border-l-4 border-white dark:border-black group-hover:border-white pl-6">
              Currently accepting select project inquiries. Architecting systemic solutions that transcend the ordinary.
            </p>
            <div className="flex flex-wrap items-stretch gap-0 border-4 border-white dark:border-black group-hover:border-white w-max bg-on-background">
              <a href="mailto:gurushaa11@gmail.com" className="px-10 py-6 bg-white dark:bg-black text-black dark:text-white font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-none flex items-center gap-3">
                START A PROJECT
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
              <a href="/media/Gurusha_Arora_UX_UI_Designer.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-6 bg-black dark:bg-white text-white dark:text-black border-l-4 border-white dark:border-black group-hover:border-white font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-none text-center">
                VIEW FULL RESUME
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
