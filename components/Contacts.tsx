import React from 'react';
import Link from 'next/link';
import CopyrightYear from './CopyrightYear';

export default function Contacts() {
  return (
    <footer className="w-full bg-background border-t-4 border-black dark:border-white mt-auto" id="contacts">
      <div className="flex flex-col md:flex-row justify-between items-stretch max-w-7xl mx-auto border-b-4 border-black dark:border-white">
        {/* Left: Name + availability */}
        <div className="flex-1 p-8 md:p-16 space-y-8 bg-background border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white">
          <div className="text-4xl md:text-5xl font-headline font-black text-black dark:text-white uppercase tracking-tighter">
            Gurusha Arora
          </div>
          <p className="text-black dark:text-white max-w-sm font-medium text-lg leading-tight border-l-4 border-black dark:border-white pl-4">
            Available for new opportunities in Product Design and UX Research.
          </p>
        </div>

        {/* Right: Email */}
        <div className="flex-[0.8] flex flex-col justify-center p-8 md:p-16 bg-black dark:bg-white">
          <span className="text-xs font-black uppercase tracking-widest mb-4 text-white dark:text-black">INQUIRIES</span>
          <a
            className="text-3xl md:text-4xl lg:text-5xl font-headline font-black uppercase tracking-tighter hover:text-[#FF3000] transition-none break-all text-white dark:text-black"
            href="mailto:gurushaa11@gmail.com"
          >
            gurushaa11@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-black uppercase tracking-widest text-black dark:text-white bg-background">
        <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white w-full md:w-auto">
          <span>GURUSHA ARORA <CopyrightYear />. CURATED WITH INTENTION</span>
        </div>
        <div className="flex w-full md:w-auto">
          <Link
            className="flex-1 text-center p-8 border-r-4 border-black dark:border-white hover:bg-[#FF3000] hover:text-white transition-none"
            href="/"
          >
            INSTAGRAM
          </Link>
          <a
            className="flex-1 text-center p-8 hover:bg-[#FF3000] hover:text-white transition-none"
            href="https://linkedin.com/in/gurushaarora1611"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  );
}
