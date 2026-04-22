'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-background border-b-4 border-black dark:border-white transition-colors">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8 h-24">
        {/* Logo */}
        <Link href="/" className="text-3xl font-headline font-black text-on-background uppercase tracking-tighter">
          Gurusha Arora
        </Link>
        
        {/* Desktop Navigation Links & Button */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/work"
            className={`${(pathname === '/work' || pathname.startsWith('/work/')) ? 'border-b-4 border-black dark:border-white' : 'border-b-4 border-transparent hover:text-white hover:bg-[#FF3000]'} pb-1 font-label text-sm font-bold uppercase tracking-widest transition-none`}
          >
            Work
          </Link>
          <Link 
            href="/about"
            className={`${pathname === '/about' || pathname.startsWith('/about/')  ? 'border-b-4 border-black dark:border-white' : 'border-b-4 border-transparent hover:text-white hover:bg-[#FF3000]'} pb-1 font-label text-sm font-bold uppercase tracking-widest transition-none`}
          >
            About
          </Link>
          <Link 
            href="/contacts"
            className={`${pathname === '/contacts' || pathname.startsWith('/contacts/') ? 'border-b-4 border-black dark:border-white' : 'border-b-4 border-transparent hover:text-white hover:bg-[#FF3000]'} pb-1 font-label text-sm font-bold uppercase tracking-widest transition-none`}
          >
            Contact
          </Link>
          
          <a 
            href="mailto:gurushaa11@gmail.com"
            className="ml-6 px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-widest text-xs rounded-none border-2 border-transparent hover:bg-[#FF3000] hover:text-white hover:border-[#FF3000] transition-none"
          >
            Hire Me
          </a>
          
          <ThemeToggle />
        </div>

        {/* Mobile — Theme toggle + Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <MobileMenu pathname={pathname} />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  React.useEffect(() => { setOpen(false); }, [pathname]);

  const linkClass = (active: boolean) =>
    `block w-full text-left px-4 py-4 rounded-none font-label text-sm font-black uppercase tracking-widest border-b-2 border-black dark:border-white transition-none ${
      active
        ? 'bg-[#FF3000] text-white'
        : 'text-on-background hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
    }`;

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="p-2 border-2 border-black dark:border-white text-on-background transition-none hover:bg-[#FF3000] hover:text-white hover:border-[#FF3000]"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+0.5rem)] w-64 bg-background border-4 border-black dark:border-white rounded-none shadow-none overflow-hidden">
          <div className="flex flex-col">
            <Link href="/" onClick={() => setOpen(false)} className={linkClass(pathname === '/')}>Home</Link>
            <Link href="/work" onClick={() => setOpen(false)} className={linkClass(pathname === '/work' || pathname.startsWith('/work/'))}>Work</Link>
            <Link href="/about" onClick={() => setOpen(false)} className={linkClass(pathname === '/about' || pathname.startsWith('/about/'))}>About</Link>
            <Link href="/contacts" onClick={() => setOpen(false)} className={linkClass(pathname === '/contacts' || pathname.startsWith('/contacts/'))}>Contact</Link>
            <a
              href="mailto:gurushaa11@gmail.com"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-4 py-4 bg-black dark:bg-white text-white dark:text-black font-black text-sm uppercase tracking-widest rounded-none hover:bg-[#FF3000] hover:text-white transition-none"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
