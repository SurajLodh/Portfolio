import React from 'react';
import Link from 'next/link';
import CopyrightYear from './CopyrightYear';

export default function Contacts() {
  return (
    <footer className="w-full relative overflow-hidden mt-auto pt-24 pb-10" id="contacts">
      
      {/* Playful background squiggles/shapes */}
      <div className="absolute top-0 left-0 w-full h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMjBRMTAgMCAyMCAyMFQ0MCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRTJFOEYwIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 md:px-8 py-12 gap-10 relative z-10 bg-card border-4 border-foreground rounded-3xl shadow-pop mb-12">
        <div className="space-y-4 text-center md:text-left">
          <div className="text-2xl font-headline font-extrabold text-foreground flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-accent border-2 border-foreground shadow-[2px_2px_0px_var(--color-shadow)] animate-wiggle"></div>
            Let's Talk!
          </div>
          <p className="text-muted-foreground max-w-xs font-body font-medium leading-relaxed">
            Available for new opportunities in Product Design and UX Research.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6 text-right">
          <a 
            className="text-2xl md:text-4xl font-headline font-extrabold text-foreground hover:text-accent transition-colors hover:-rotate-1 inline-block" 
            href="mailto:gurushaa11@gmail.com"
          >
            gurushaa11@gmail.com
          </a>
          <div className="flex gap-4 font-headline text-xs font-bold text-foreground uppercase tracking-widest">
            <Link className="px-4 py-2 rounded-full border-2 border-foreground hover:bg-secondary transition-colors shadow-[2px_2px_0px_var(--color-shadow)]" href="/">IG</Link>
            <a className="px-4 py-2 rounded-full border-2 border-foreground hover:bg-tertiary transition-colors shadow-[2px_2px_0px_var(--color-shadow)]" href="https://linkedin.com/in/gurushaarora1611" target="_blank" rel="noopener noreferrer">IN</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-headline font-bold uppercase tracking-widest text-muted-foreground pt-8 border-t-2 border-foreground border-dashed">
        <span className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-quaternary border border-foreground"></div>
          GURUSHA ARORA <CopyrightYear />
        </span>
        <span className="flex items-center gap-2">
          CURATED WITH INTENTION
          <div className="w-2 h-2 rounded-full bg-secondary border border-foreground"></div>
        </span>
      </div>
    </footer>
  );
}
