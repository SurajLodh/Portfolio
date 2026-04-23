import React from 'react';

export default function AboutPage() {
  return (
    <div className="w-full pb-20 text-[var(--color-foreground)] bg-transparent">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-2 lg:pt-4 pb-20">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <div className="flex-1 space-y-8 z-10 w-full">
            <div className="inline-block bg-[var(--color-paper-yellow)] border-[3px] border-[var(--color-border)] shadow-hard text-[var(--color-foreground)] wobbly font-body font-bold text-lg uppercase tracking-widest px-4 py-2 transform rotate-2">
              The Creative Explorer
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-headline font-bold text-[var(--color-foreground)] leading-[1.1]">
              Designing data-<br />informed stories <br />
              with a <span className="text-[var(--color-accent)] underline decoration-wavy decoration-[4px] underline-offset-4">human pulse.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-foreground)] max-w-lg font-body leading-relaxed transform -rotate-1">
              I am Gurusha Arora, a multidisciplinary designer focused on creating authentic, playful digital experiences. My approach rejects clinical perfection in favor of organic, human-centered design.
            </p>
          </div>
          <div className="flex-1 relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-full max-w-[450px] transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="tape-decoration"></div>
              <div className="w-full h-full bg-white border-[4px] border-[var(--color-border)] wobbly-md shadow-hard-emphasized p-3">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                  alt="Gurusha Arora Portrait"
                  className="w-full h-auto object-cover wobbly border-[3px] border-[var(--color-border)]"
                  style={{ aspectRatio: '4/5' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Expertise */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-[4px] border-dashed border-[var(--color-border)] pb-4 mb-12 gap-4">
          <h2 className="text-5xl font-headline font-bold text-[var(--color-foreground)] transform -rotate-2">Core Expertise</h2>
          <span className="font-body text-xl uppercase tracking-widest text-[var(--color-border)] font-bold">Strategic Problem Solving</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white wobbly-md border-[3px] border-[var(--color-border)] shadow-hard p-8 flex flex-col justify-between space-y-10 transform -rotate-1 hover:rotate-1 hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            <div className="tack-decoration"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent)]"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
            <div className="space-y-4">
              <h3 className="text-3xl font-headline font-bold text-[var(--color-foreground)]">Product Architecture</h3>
              <p className="text-xl font-body text-[var(--color-foreground)] leading-relaxed">
                Synthesizing complex data into intuitive navigation flows and scalable design systems that evolve with your user base.
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-paper-yellow)] wobbly-md border-[3px] border-[var(--color-border)] shadow-hard p-8 flex flex-col justify-between space-y-10 transform rotate-1 hover:-rotate-1 hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            <div className="tape-decoration"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-secondary-accent)]"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
            <div className="space-y-4">
              <h3 className="text-3xl font-headline font-bold text-[var(--color-foreground)]">Authentic UI</h3>
              <p className="text-xl font-body text-[var(--color-foreground)] leading-relaxed">
                Crafting playful layouts that prioritize human connection through intentional asymmetry and handwritten typography.
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-muted)] wobbly-md border-[3px] border-[var(--color-border)] shadow-hard p-8 lg:col-span-1 md:col-span-2 flex flex-col justify-between space-y-10 transform -rotate-1 hover:rotate-1 hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            <div className="tack-decoration"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent)]"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            <div className="space-y-4">
              <h3 className="text-3xl font-headline font-bold text-[var(--color-foreground)]">User Research</h3>
              <p className="text-xl font-body text-[var(--color-foreground)] leading-relaxed">
                Qualitative insights translated into quantitative wins, ensuring every sketch serves a human-centric purpose.
              </p>
            </div>
          </div>

          <div className="bg-white wobbly-md border-[3px] border-[var(--color-border)] shadow-hard p-8 lg:col-span-3 flex flex-col md:flex-row items-center justify-between gap-10 transform rotate-1 hover:-rotate-1 hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all relative">
            <div className="flex-1 space-y-4">
              <h3 className="text-3xl font-headline font-bold text-[var(--color-foreground)]">Visual Storytelling</h3>
              <p className="text-xl font-body text-[var(--color-foreground)] leading-relaxed max-w-2xl">
                Moving beyond aesthetics to build brand narratives that resonate on an emotional level with high-value audiences, using playful and wobbly design language.
              </p>
            </div>
            <div className="w-[180px] h-[100px] bg-white border-[3px] border-[var(--color-border)] shadow-hard wobbly flex items-center justify-center transform -rotate-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent)]"><path d="m18 15-6-6-6 6"></path><path d="m18 21-6-6-6 6"></path></svg>
            </div>
          </div>
        </div>
      </div>

      {/* The Toolkit & Academic Journey */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-32">
        <div className="flex flex-col lg:flex-row gap-20">

          {/* The Toolkit */}
          <div className="flex-1">
            <h2 className="text-5xl font-headline font-bold text-[var(--color-foreground)] mb-12 border-b-[4px] border-[var(--color-border)] inline-block pb-2 transform rotate-1 wobbly-md rounded-none">The Toolkit</h2>
            <div className="space-y-6">
              {[
                { tool: "Figma & FigJam", role: "VISUAL MASTER" },
                { tool: "Adobe Creative Suite", role: "ASSET CREATION" },
                { tool: "AI Agent", role: "IMPLEMENTATION" },
                { tool: "Notion & Jira", role: "STRATEGY & OPS" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b-[3px] border-dashed border-[var(--color-border)] pb-4">
                  <div className="flex items-center gap-4 text-[var(--color-foreground)] font-body text-2xl font-bold">
                    <div className="w-4 h-4 bg-white border-[3px] border-[var(--color-border)] wobbly transform -rotate-1"></div>
                    {item.tool}
                  </div>
                  <span className="font-body text-lg uppercase tracking-widest font-bold text-[var(--color-border)]">
                    {item.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Journey */}
          <div className="flex-1">
            <h2 className="text-5xl font-headline font-bold text-[var(--color-foreground)] mb-12 border-b-[4px] border-[var(--color-border)] inline-block pb-2 transform -rotate-1 wobbly-md rounded-none">Academic Journey</h2>
            <div className="space-y-12 relative border-l-[4px] border-dashed border-[var(--color-border)] ml-4">
              <div className="relative pl-10">
                <div className="absolute top-1 -left-[14px] w-6 h-6 bg-[var(--color-paper-yellow)] border-[3px] border-[var(--color-border)] wobbly flex items-center justify-center transform rotate-12">
                </div>
                <div className="font-body text-lg font-bold text-[var(--color-border)] uppercase tracking-widest mb-1">
                  2018 — 2020
                </div>
                <h3 className="text-3xl font-headline text-[var(--color-foreground)] font-bold">Master of Human-Computer Interaction</h3>
                <div className="text-xl font-body text-[var(--color-foreground)] mb-2 mt-1">Parsons School of Design, New York</div>
                <p className="text-xl font-body font-bold text-[var(--color-accent)] mt-2 transform rotate-1">
                  Focused on ethical AI and sensory interface design.
                </p>
              </div>

              <div className="relative pl-10">
                <div className="absolute top-1 -left-[14px] w-6 h-6 bg-[var(--color-secondary-accent)] border-[3px] border-[var(--color-border)] wobbly flex items-center justify-center transform -rotate-12">
                </div>
                <div className="font-body text-lg font-bold text-[var(--color-border)] uppercase tracking-widest mb-1">
                  2014 — 2018
                </div>
                <h3 className="text-3xl font-headline text-[var(--color-foreground)] font-bold">Bachelor of Communication Design</h3>
                <div className="text-xl font-body text-[var(--color-foreground)] mb-2 mt-1">National Institute of Design (NID)</div>
                <p className="text-xl font-body font-bold text-[var(--color-accent)] mt-2 transform -rotate-1">
                  Specialization in typography and visual storytelling systems.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer CTA Box */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-[var(--color-paper-yellow)] border-[4px] border-[var(--color-border)] wobbly-md shadow-hard-emphasized p-8 md:p-12 lg:p-20 relative transform rotate-1">
          <div className="tack-decoration"></div>
          
          <div className="max-w-2xl relative z-10">
            <h2 className="text-5xl md:text-6xl font-headline font-bold text-[var(--color-foreground)] leading-tight mb-6 transform -rotate-1">
              Ready to sketch out your next project?
            </h2>
            <p className="text-[var(--color-foreground)] font-body text-xl md:text-2xl leading-relaxed mb-10 max-w-lg">
              I am currently accepting select project inquiries. Let's create something wonderfully imperfect and undeniably human.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="mailto:gurushaa11@gmail.com" className="px-8 py-3 bg-[var(--color-accent)] border-[3px] border-[var(--color-border)] text-white font-body font-bold text-xl wobbly shadow-hard hover:bg-[#ff3333] hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all flex items-center gap-2 transform -rotate-2">
                Start a Project
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
              <a href="/media/Gurusha_Arora_UX_UI_Designer.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white border-[3px] border-[var(--color-border)] text-[var(--color-foreground)] font-body font-bold text-xl wobbly shadow-hard hover:bg-[var(--color-muted)] hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all flex items-center gap-2 transform rotate-1">
                View Full Resume
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
