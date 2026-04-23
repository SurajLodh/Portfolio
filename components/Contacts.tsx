import React from 'react';
import Link from 'next/link';
import CopyrightYear from './CopyrightYear';

export default function Contacts() {
  return (
    <footer className="w-full bg-[var(--color-muted)] border-t-[3px] border-[var(--color-border)] mt-auto pb-10" id="contacts">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 md:px-8 py-16 gap-10">
        <div className="space-y-4 text-center md:text-left">
          <div className="text-3xl font-headline font-bold text-[var(--color-foreground)] transform -rotate-1">Gurusha Arora</div>
          <p className="text-[var(--color-foreground)] font-body text-xl max-w-xs leading-relaxed">Available for new opportunities in Product Design and UX Research.</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6 text-right">
          <a className="text-3xl font-headline font-bold text-[var(--color-accent)] hover:text-[#ff3333] hover:underline decoration-wavy decoration-[3px] underline-offset-4 transition-all transform rotate-1" href="mailto:gurushaa11@gmail.com">
            gurushaa11@gmail.com
          </a>
          <div className="flex gap-8 font-body text-xl font-bold text-[var(--color-foreground)] uppercase tracking-widest">
            <Link className="hover:line-through decoration-[3px] decoration-[var(--color-accent)] transition-all" href="/">INSTAGRAM</Link>
            <a className="hover:line-through decoration-[3px] decoration-[var(--color-accent)] transition-all" href="https://linkedin.com/in/gurushaarora1611" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 font-body text-lg font-bold uppercase tracking-widest text-[var(--color-foreground)] pt-8 border-t-[3px] border-dashed border-[var(--color-border)]">
        <span>GURUSHA ARORA <CopyrightYear /></span>
        <span className="transform rotate-1">CURATED WITH INTENTION</span>
      </div>
    </footer>
  );
}
