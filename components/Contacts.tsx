import React from 'react';
import Link from 'next/link';

export default function Contacts() {
  return (
    <footer className="w-full bg-[#f8f9fa] mt-auto pb-10" id="contacts">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 py-16 gap-10">
        <div className="space-y-4 text-center md:text-left">
          <div className="text-lg font-headline font-bold text-gray-900">Gurusha Arora</div>
          <p className="text-gray-500 max-w-xs font-light text-sm leading-relaxed">Available for new opportunities in Product Design and UX Research.</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6 text-right">
          <a className="text-2xl font-bold text-[#b08210] hover:text-[#8e6e14] transition-colors" href="mailto:gurushaa11@gmail.com">
            gurushaa11@gmail.com
          </a>
          <div className="flex gap-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <Link className="hover:text-gray-700 transition-colors" href="/">INSTAGRAM</Link>
            <a className="hover:text-gray-700 transition-colors" href="https://linkedin.com/in/gurushaarora1611" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-400 pt-8 border-t border-gray-200">
        <span>GURUSHA ARORA {new Date().getFullYear()}</span>
        <span>CURATED WITH INTENTION</span>
      </div>
    </footer>
  );
}
