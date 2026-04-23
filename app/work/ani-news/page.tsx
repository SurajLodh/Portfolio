import React from 'react';
import Link from 'next/link';

export default function AniNewsCaseStudy() {
  return (
    <div className="bg-transparent w-full min-h-screen pb-20 text-[var(--color-foreground)] overflow-hidden">
      
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-0 lg:pt-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16">
          <div className="flex-[2] space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-[84px] font-headline font-bold text-[var(--color-foreground)] leading-[1.1] transform rotate-1">
              ANI News <br />
              <span className="text-[var(--color-accent)] underline decoration-wavy decoration-[4px] underline-offset-8">Platform Redesign</span>
            </h1>
            <p className="text-[var(--color-foreground)] font-body max-w-xl leading-relaxed text-xl transform -rotate-1">
              A digital evolution for India's premier news agency, transforming content delivery for over 3 million monthly active users through a unified, expressive design language.
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="border-l-[4px] border-dashed border-[var(--color-border)] pl-8 space-y-8 transform rotate-1">
               <div className="space-y-1">
                 <div className="font-body text-lg font-bold uppercase tracking-widest text-[var(--color-border)]">ROLE</div>
                 <div className="text-2xl font-headline font-bold text-[var(--color-foreground)]">Product Designer</div>
               </div>
               <div className="space-y-1">
                 <div className="font-body text-lg font-bold uppercase tracking-widest text-[var(--color-border)]">TIMELINE</div>
                 <div className="text-2xl font-headline font-bold text-[var(--color-foreground)]">Feb 2026 — Present</div>
               </div>
               <div className="space-y-1">
                 <div className="font-body text-lg font-bold uppercase tracking-widest text-[var(--color-border)]">CLIENT</div>
                 <div className="text-2xl font-headline font-bold text-[var(--color-foreground)]">ANI News / VoxturrLabs</div>
               </div>
            </div>
          </div>
        </div>

        <div className="w-full relative h-[400px] md:h-[600px] lg:h-[700px] bg-[var(--color-muted)] border-[4px] border-[var(--color-border)] wobbly-md shadow-hard-emphasized p-4 transform -rotate-1">
          <div className="tack-decoration"></div>
          <div className="tack-decoration" style={{ left: 'auto', right: '1rem', top: '1rem' }}></div>
          <div className="w-full h-full wobbly overflow-hidden border-[3px] border-[var(--color-border)]">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop" 
              alt="ANI News Hero" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* The Challenge Section */}
      <div className="w-full py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto bg-[var(--color-paper-yellow)] border-[4px] border-[var(--color-border)] wobbly-md shadow-hard-emphasized p-8 md:p-16 transform rotate-1 relative">
          <div className="tape-decoration"></div>
          <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
            <div className="flex-1 space-y-8">
              <span className="inline-block px-4 py-2 bg-white border-[3px] border-[var(--color-border)] text-[var(--color-foreground)] font-body font-bold text-lg uppercase tracking-widest wobbly shadow-hard transform -rotate-2">
                THE CHALLENGE
              </span>
              <h2 className="text-5xl lg:text-6xl font-headline font-bold text-[var(--color-foreground)] leading-tight transform rotate-1">
                Fragmented workflows <br />
                and editorial <br />
                bottlenecks.
              </h2>
            </div>
            <div className="flex-1 space-y-6 text-[var(--color-foreground)] font-body leading-relaxed text-xl pt-2 md:pt-16 transform -rotate-1">
              <p>
                ANI News operates at a massive scale, serving millions of viewers and thousands of media partners. However, the legacy platform suffered from a fragmented design language that made updates slow and inconsistent across web and mobile.
              </p>
              <p>
                The editorial team was bogged down by an aging CMS that lacked intuitive workflows, making it difficult to publish breaking news with the speed required in the modern 24/7 news cycle. The primary goal was to create a scalable design system and a custom CMS dashboard that prioritizes editorial speed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Editorial Approach */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <h2 className="text-5xl lg:text-6xl font-headline font-bold text-[var(--color-foreground)] mb-6 border-b-[4px] border-[var(--color-border)] inline-block pb-2 transform -rotate-1 wobbly-md rounded-none">
            The Editorial Approach
          </h2>
          <p className="text-[var(--color-foreground)] font-body leading-relaxed text-2xl transform rotate-1">
            Architecting a system that balances journalistic authority with expressive, human-centric design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="bg-white border-[4px] border-[var(--color-border)] wobbly-md shadow-hard p-10 lg:col-span-2 flex flex-col justify-between space-y-8 transform rotate-1 hover:-rotate-1 hover:shadow-hard-hover transition-all relative">
            <div className="tape-decoration"></div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border-[3px] border-[var(--color-border)] bg-[var(--color-paper-yellow)] wobbly flex items-center justify-center text-[var(--color-foreground)] font-headline font-bold text-2xl transform -rotate-2">
                  1
                </div>
                <h3 className="text-3xl font-headline font-bold text-[var(--color-foreground)]">Foundation: 'News-First' Design System</h3>
              </div>
              <p className="text-[var(--color-foreground)] font-body leading-relaxed text-xl">
                We developed a comprehensive component library focusing on high-density information display. The system utilizes a hybrid typographic scale, combining structural clarity with wobbly, hand-drawn elements to keep the interface engaging.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
               <div className="h-40 bg-[var(--color-muted)] border-[3px] border-[var(--color-border)] wobbly overflow-hidden transform -rotate-1">
                 <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="UI Element" />
               </div>
               <div className="h-40 bg-white border-[3px] border-[var(--color-border)] wobbly overflow-hidden transform rotate-2">
                 <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover" alt="Typography" />
               </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[var(--color-secondary-accent)] border-[4px] border-[var(--color-border)] wobbly-md shadow-hard p-10 flex flex-col space-y-8 transform -rotate-2 hover:rotate-1 hover:shadow-hard-hover transition-all relative">
            <div className="tack-decoration"></div>
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border-[3px] border-[var(--color-border)] bg-white wobbly flex items-center justify-center text-[var(--color-foreground)] font-headline font-bold text-2xl transform rotate-2">
                  2
                </div>
                <h3 className="text-3xl font-headline font-bold text-[var(--color-foreground)]">CMS Redesign</h3>
              </div>
              <p className="text-[var(--color-foreground)] font-body leading-relaxed text-xl">
                Creating a custom dashboard for editors that reduced time-to-publish by 40% through intuitive UI architecture and real-time collaboration tools, sketched out for maximum simplicity.
              </p>
            </div>
          </div>

          {/* Card 3 - Full width */}
          <div className="bg-white border-[4px] border-[var(--color-border)] wobbly-md p-10 lg:p-12 shadow-hard lg:col-span-3 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative transform rotate-1 hover:-rotate-1 hover:shadow-hard-hover transition-all">
            <div className="tape-decoration"></div>
            
            <div className="flex-1 space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border-[3px] border-[var(--color-border)] bg-[var(--color-accent)] text-white wobbly flex items-center justify-center font-headline font-bold text-2xl transform -rotate-2">
                  3
                </div>
                <h3 className="text-4xl font-headline font-bold text-[var(--color-foreground)]">User-Centric News Feed</h3>
              </div>
              <p className="text-[var(--color-foreground)] font-body leading-relaxed text-xl max-w-lg">
                Reimagining the news consumer UI model. We implemented gesture-based discovery experiences that allow users to swipe through breaking stories without leaving the context of their current category.
              </p>
            </div>
            
            <div className="flex-1 w-full flex justify-end relative z-10 md:pr-10">
               <div className="w-64 h-[400px] bg-white wobbly border-[4px] border-[var(--color-border)] shadow-hard overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" alt="Mobile UI" />
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* Interface Explorations */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-headline font-bold text-[var(--color-foreground)] inline-block pb-2 border-b-[4px] border-[var(--color-border)] transform -rotate-2 wobbly-md rounded-none">
            Interface Explorations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Huge Left Image */}
           <div className="md:col-span-2 md:row-span-2 h-[400px] md:h-[620px] bg-white border-[4px] border-[var(--color-border)] wobbly-md shadow-hard overflow-hidden group transform rotate-1 relative">
             <div className="tack-decoration"></div>
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Dashboard UI" />
           </div>

           {/* Top Right Box */}
           <div className="bg-[var(--color-paper-yellow)] border-[4px] border-[var(--color-border)] wobbly-md shadow-hard p-8 space-y-6 flex flex-col justify-center h-[300px] transform -rotate-1 relative">
             <div className="tape-decoration"></div>
             <span className="font-body text-lg uppercase tracking-widest font-bold text-[var(--color-border)]">DESIGN SYSTEM</span>
             <p className="text-[var(--color-foreground)] font-body text-xl leading-relaxed">
               The new CMS dashboard provides a modular block-based editor, allowing journalists to build complex stories up to 40% faster.
             </p>
           </div>
           
           {/* Mid Right Image */}
           <div className="h-[300px] bg-white border-[4px] border-[var(--color-border)] wobbly-md shadow-hard overflow-hidden group transform rotate-2 relative">
             <div className="tack-decoration"></div>
             <img src="https://images.unsplash.com/photo-1481481600674-e9a5c88b64a2?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover p-2 group-hover:scale-105 transition-transform duration-700" alt="Article Mockup" />
           </div>

           {/* Bottom Left Image */}
           <div className="h-[300px] bg-[var(--color-muted)] border-[4px] border-[var(--color-border)] wobbly-md shadow-hard overflow-hidden group flex items-center justify-center transform -rotate-2 relative">
             <div className="tape-decoration"></div>
             <img src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" alt="Code/Data" />
           </div>

           {/* Bottom Mid Image */}
           <div className="h-[300px] bg-white border-[4px] border-[var(--color-border)] wobbly-md shadow-hard overflow-hidden group flex items-center justify-center p-6 transform rotate-1 relative">
             <div className="tack-decoration"></div>
             <div className="w-32 h-[90%] bg-white border-[3px] border-[var(--color-border)] wobbly shadow-hard group-hover:scale-105 transition-transform duration-500"></div>
           </div>

           {/* Bottom Right Image */}
           <div className="h-[300px] bg-[var(--color-muted)] border-[4px] border-[var(--color-border)] wobbly-md shadow-hard overflow-hidden group transform -rotate-1 relative">
             <div className="tape-decoration"></div>
             <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="User Portrait" />
           </div>
        </div>
      </div>

      {/* The Impact */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-32">
        <div className="bg-[var(--color-accent)] border-[4px] border-[var(--color-border)] wobbly-md shadow-hard-emphasized p-12 md:p-20 relative overflow-hidden transform rotate-1">
           <div className="tack-decoration"></div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white mb-24 relative z-10 border-b-[4px] border-dashed border-white pb-16">
              <div className="text-center md:text-left space-y-4 transform -rotate-2">
                 <div className="text-6xl md:text-8xl font-headline font-bold tracking-tighter">40%</div>
                 <div className="font-body text-xl uppercase tracking-widest font-bold text-white">reduction in publish time</div>
              </div>
              <div className="text-center md:text-left space-y-4 transform rotate-1">
                 <div className="text-6xl md:text-8xl font-headline font-bold tracking-tighter">3M+</div>
                 <div className="font-body text-xl uppercase tracking-widest font-bold text-white">monthly active users</div>
              </div>
              <div className="text-center md:text-left space-y-4 transform -rotate-1">
                 <div className="text-6xl md:text-8xl font-headline font-bold tracking-tighter">100%</div>
                 <div className="font-body text-xl uppercase tracking-widest font-bold text-white">visual consistency</div>
              </div>
           </div>

           <div className="flex flex-col md:flex-row items-end justify-between gap-10 relative z-10">
              <div className="max-w-xl">
                 <h2 className="text-5xl font-headline font-bold text-white mb-6 transform -rotate-1">The Impact</h2>
                 <p className="text-white font-body leading-relaxed text-2xl transform rotate-1">
                   The redesign fundamentally altered the way News operates, allowing their team to scale in digital environments faster than ever before, all while maintaining a human touch.
                 </p>
              </div>
              <div>
                 <Link href="/work" className="inline-flex items-center gap-3 px-8 py-3 bg-white border-[3px] border-[var(--color-border)] text-[var(--color-foreground)] font-body font-bold text-xl wobbly shadow-hard hover:bg-[var(--color-paper-yellow)] hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all transform rotate-2">
                   View Next Project
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                 </Link>
              </div>
           </div>

        </div>
      </div>

    </div>
  );
}
