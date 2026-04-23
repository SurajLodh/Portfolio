import type { Metadata } from "next";
import { Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/NavBar';
import Contacts from '@/components/Contacts';
import ScrollToTop from '@/components/ScrollToTop';

const kalam = Kalam({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["700"],
});

const patrickHand = Patrick_Hand({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400"],
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
      className={`${kalam.variable} ${patrickHand.variable} h-full scroll-smooth overflow-x-hidden`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="font-body min-h-full flex flex-col pt-24 overflow-x-hidden transition-colors duration-300 w-full relative max-w-[100vw] paper-texture bg-[var(--color-background)] text-[var(--color-foreground)] selection:bg-[#ff4d4d] selection:text-[#fdfbf7]" suppressHydrationWarning>
        <ScrollToTop />
        <NavBar />
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>
        <Contacts />
      </body>
    </html>
  );
}
