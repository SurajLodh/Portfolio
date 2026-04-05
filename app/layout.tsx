import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/NavBar';
import Contacts from '@/components/Contacts';

const notoSerif = Noto_Serif({
  variable: "--font-headline",
  subsets: ["latin"],
});

const manrope = Manrope({
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
      className={`${notoSerif.variable} ${manrope.variable} h-full scroll-smooth`}
    >
      <body className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-full flex flex-col pt-24 overflow-x-hidden">
        <NavBar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Contacts />
      </body>
    </html>
  );
}
