import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/NavBar';
import Contacts from '@/components/Contacts';
import ScrollToTop from '@/components/ScrollToTop';
import { ThemeWrapper } from "@/components/ThemeWrapper";

const outfit = Outfit({
  variable: "--font-headline",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gurusha Arora | Portfolio",
  description: "UX/UI Designer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} h-full scroll-smooth overflow-x-hidden`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-body min-h-full flex flex-col pt-24 overflow-x-hidden transition-colors duration-300 w-full relative max-w-[100vw] bg-dot-pattern dark:bg-dot-pattern-dark" suppressHydrationWarning>
        <ThemeWrapper attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <NavBar />
          <main className="flex-1 flex flex-col w-full relative z-10">
            {children}
          </main>
          <Contacts />
        </ThemeWrapper>
      </body>
    </html>
  );
}
