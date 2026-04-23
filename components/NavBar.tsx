'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  
  return (
    <nav 
      className="fixed top-0 w-full z-50 transition-all bg-[var(--color-background)] border-b-[3px] border-[var(--color-border)]"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8 h-24">
        {/* Logo */}
        <Link href="/" className="text-3xl font-headline font-bold text-[var(--color-foreground)] hover:-rotate-2 transition-transform">
          Gurusha Arora
        </Link>
        
        {/* Desktop Navigation Links & Button */}
        <div className="hidden md:flex items-center gap-10">
          <Link 
            href="/work"
            className={`${(pathname === '/work' || pathname.startsWith('/work/')) ? 'text-[var(--color-accent)] border-b-[3px] border-[var(--color-accent)]' : 'text-[var(--color-foreground)] hover:text-[var(--color-accent)] border-b-[3px] border-transparent'} pb-1 font-body text-xl tracking-wide font-bold transition-all hover:-rotate-2`}
          >
            Work
          </Link>
          <Link 
            href="/about"
            className={`${pathname === '/about' || pathname.startsWith('/about/')  ? 'text-[var(--color-accent)] border-b-[3px] border-[var(--color-accent)]' : 'text-[var(--color-foreground)] hover:text-[var(--color-accent)] border-b-[3px] border-transparent'} pb-1 font-body text-xl tracking-wide font-bold transition-all hover:-rotate-2`}
          >
            About
          </Link>
          <Link 
            href="/contacts"
            className={`${pathname === '/contacts' || pathname.startsWith('/contacts/') ? 'text-[var(--color-accent)] border-b-[3px] border-[var(--color-accent)]' : 'text-[var(--color-foreground)] hover:text-[var(--color-accent)] border-b-[3px] border-transparent'} pb-1 font-body text-xl tracking-wide font-bold transition-all hover:-rotate-2`}
          >
            Contact
          </Link>
          
          <a 
            href="mailto:gurushaa11@gmail.com"
            className="ml-4 px-6 py-2.5 bg-white border-[3px] border-[var(--color-border)] text-[var(--color-foreground)] font-body font-bold text-xl wobbly shadow-hard hover:bg-[var(--color-accent)] hover:text-white hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile — Hamburger */}
        <div className="md:hidden flex items-center gap-2">
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

  const linkClass = (active: boolean) =>
    `block w-full text-left px-4 py-3 font-body text-xl tracking-wide font-bold transition-all wobbly mb-2 ${
      active
        ? 'bg-[var(--color-paper-yellow)] text-[var(--color-foreground)] border-2 border-[var(--color-border)] shadow-hard-hover'
        : 'text-[var(--color-foreground)] hover:bg-[var(--color-muted)] border-2 border-transparent hover:border-[var(--color-border)]'
    }`;

  return (
    <div ref={menuRef} className="relative">
      {/* Hamburger / Close button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="p-2 bg-white border-[3px] border-[var(--color-border)] wobbly shadow-hard text-[var(--color-foreground)] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
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
        <div className="absolute right-0 top-[calc(100%+1rem)] w-56 bg-white border-[3px] border-[var(--color-border)] wobbly-md shadow-hard-emphasized overflow-hidden">
          <div className="p-4 flex flex-col gap-1 relative">
            <div className="tack-decoration"></div>
            <Link href="/" onClick={() => setOpen(false)} className={linkClass(pathname === '/')}>Home</Link>
            <Link href="/work" onClick={() => setOpen(false)} className={linkClass(pathname === '/work' || pathname.startsWith('/work/'))}>Work</Link>
            <Link href="/about" onClick={() => setOpen(false)} className={linkClass(pathname === '/about' || pathname.startsWith('/about/'))}>About</Link>
            <Link href="/contacts" onClick={() => setOpen(false)} className={linkClass(pathname === '/contacts' || pathname.startsWith('/contacts/'))}>Contact</Link>
            <div className="mt-2 pt-4 border-t-[3px] border-dashed border-[var(--color-border)]">
              <a
                href="mailto:gurushaa11@gmail.com"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-4 py-3 bg-[var(--color-accent)] border-[3px] border-[var(--color-border)] text-white font-body font-bold text-xl wobbly shadow-hard hover:bg-[#ff3333] hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
