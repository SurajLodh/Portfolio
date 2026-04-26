'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  
  return (
    <nav 
      className="fixed top-0 w-full z-50 transition-all dark:bg-[#0f172a]/90 bg-background/90 backdrop-blur-xl border-b-2 border-foreground"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8 h-24">
        {/* Logo */}
        <Link href="/" className="text-3xl font-headline font-extrabold text-foreground hover:text-accent transition-colors tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-tertiary border-2 border-foreground flex items-center justify-center -rotate-6">
            <span className="text-foreground text-sm">G</span>
          </div>
          Gurusha
        </Link>
        
        {/* Desktop Navigation Links & Button */}
        <div className="hidden md:flex items-center gap-10">
          <Link 
            href="/work"
            className={`${(pathname === '/work' || pathname.startsWith('/work/')) ? 'text-accent border-b-4 border-tertiary font-bold' : 'text-muted-foreground hover:text-foreground hover:-translate-y-1 border-b-4 border-transparent'} pb-1 font-headline text-sm uppercase tracking-widest font-bold transition-all`}
          >
            Work
          </Link>
          <Link 
            href="/about"
            className={`${pathname === '/about' || pathname.startsWith('/about/')  ? 'text-accent border-b-4 border-secondary font-bold' : 'text-muted-foreground hover:text-foreground hover:-translate-y-1 border-b-4 border-transparent'} pb-1 font-headline text-sm uppercase tracking-widest font-bold transition-all`}
          >
            About
          </Link>
          <Link 
            href="/contacts"
            className={`${pathname === '/contacts' || pathname.startsWith('/contacts/') ? 'text-accent border-b-4 border-quaternary font-bold' : 'text-muted-foreground hover:text-foreground hover:-translate-y-1 border-b-4 border-transparent'} pb-1 font-headline text-sm uppercase tracking-widest font-bold transition-all`}
          >
            Contact
          </Link>
          
          <a 
            href="mailto:gurushaa11@gmail.com"
            className="ml-4 inline-flex items-center justify-center font-headline font-bold rounded-full border-2 border-foreground transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-accent text-white shadow-pop hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-pop-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-pop-active px-6 py-2.5 text-sm"
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

  // Close when clicking outside
  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  // Close on route change
  React.useEffect(() => { setOpen(false); }, [pathname]);

  const linkClass = (active: boolean, colorClass: string) =>
    `block w-full text-left px-4 py-3 rounded-lg font-headline text-sm uppercase tracking-widest font-bold transition-all border-2 ${
      active
        ? `bg-card border-foreground shadow-pop ${colorClass}`
        : 'text-muted-foreground border-transparent hover:bg-muted dark:hover:bg-card'
    }`;

  return (
    <div ref={menuRef} className="relative z-50">
      {/* Hamburger / Close button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-lg border-2 border-foreground bg-card text-foreground shadow-pop active:shadow-pop-active active:translate-y-[2px] transition-all"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? (
          /* X icon */
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          /* Hamburger icon */
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute right-0 top-[calc(100%+1rem)] w-64 bg-card border-2 border-foreground rounded-2xl shadow-pop overflow-hidden p-3 flex flex-col gap-2">
          <Link href="/" onClick={() => setOpen(false)} className={linkClass(pathname === '/', 'text-accent')}>Home</Link>
          <Link href="/work" onClick={() => setOpen(false)} className={linkClass(pathname === '/work' || pathname.startsWith('/work/'), 'text-tertiary')}>Work</Link>
          <Link href="/about" onClick={() => setOpen(false)} className={linkClass(pathname === '/about' || pathname.startsWith('/about/'), 'text-secondary')}>About</Link>
          <Link href="/contacts" onClick={() => setOpen(false)} className={linkClass(pathname === '/contacts' || pathname.startsWith('/contacts/'), 'text-quaternary')}>Contact</Link>
          <div className="mt-2 pt-3 border-t-2 border-foreground border-dashed">
            <a
              href="mailto:gurushaa11@gmail.com"
              onClick={() => setOpen(false)}
              className="block w-full text-center inline-flex items-center justify-center font-headline font-bold rounded-full border-2 border-foreground transition-all duration-300 bg-accent text-white shadow-pop active:translate-x-[2px] active:translate-y-[2px] active:shadow-pop-active px-4 py-3 text-sm"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
