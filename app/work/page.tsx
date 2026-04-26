"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const workData = [
  {
    id: 'ani-news',
    role: 'PRODUCT DESIGNER',
    date: 'FEB 2026 - PRESENT',
    title: 'ANI News Platform Redesign',
    description: 'Modernizing South Asia\'s leading news wire. A full redesign focused on speed, high-contrast readability, and a sophisticated editorial layout for millions of daily readers.',
    image: '/ani-news/image8.png',
    category: 'MEDIA',
    color: 'bg-accent'
  },
  {
    id: 'shriconnect',
    role: 'LEAD DESIGNER',
    date: 'JUL 2024',
    title: 'ShriConnect ERP Ecosystem',
    description: 'Systematizing complex educational workflows into a cohesive, human-centered digital infrastructure.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    category: 'ERP',
    color: 'bg-secondary'
  },
  {
    id: 'wave-city',
    role: 'UX COLLABORATOR',
    date: 'SEP 2024',
    title: 'Wave City ERP & Billing Workflow',
    description: 'Streamlining financial transparency through intuitive data architecture and billing automation.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    category: 'ERP',
    color: 'bg-tertiary'
  },
  {
    id: 'ability-connect',
    role: 'LEAD DESIGNER',
    date: 'JUN 2024',
    title: 'Ability Connect',
    description: 'Designing for the edge cases. A platform built with WCAG 2.1 compliance at its core, ensuring seamless navigation for users of all abilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    category: 'ACCESSIBILITY',
    color: 'bg-quaternary'
  }
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const categories = ['ALL', 'ERP', 'MEDIA', 'ACCESSIBILITY'];

  const filteredWork = selectedCategory === 'ALL' 
    ? workData 
    : workData.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-background transition-colors duration-300 w-full min-h-screen pb-20 text-foreground overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-40 right-[-5%] w-64 h-64 border-8 border-accent rounded-full border-dashed opacity-10 animate-spin-slow -z-10"></div>
      <div className="absolute top-[600px] left-[-5%] w-96 h-96 bg-dot-pattern opacity-10 -z-10"></div>

      {/* Header Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 lg:pt-20 pb-12 relative z-10">
        <div className="inline-block px-4 py-2 rounded-full border-2 border-foreground bg-card text-foreground font-headline font-bold text-xs tracking-widest uppercase shadow-[2px_2px_0px_var(--color-shadow)] mb-6">
          PORTFOLIO 2024
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[100px] font-headline font-extrabold text-foreground mb-8 leading-[0.9] tracking-tighter">
          Selected <br /> <span className="text-accent text-pop">Work</span>
        </h1>
        
        <p className="text-muted-foreground max-w-lg mb-12 font-body font-medium text-lg lg:text-xl leading-relaxed">
          A curated collection of digital experiences focusing on ERP ecosystems, media platforms, and inclusive design.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-headline font-bold uppercase tracking-widest transition-all border-2 ${
                selectedCategory === category
                  ? 'bg-foreground text-background border-foreground shadow-[4px_4px_0px_#FFB800]'
                  : 'bg-card text-foreground border-foreground shadow-pop hover:-translate-y-1'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-24 lg:space-y-32 mt-16 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-24 lg:space-y-32"
          >
            {filteredWork.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card 
                  className="group flex flex-col md:flex-row gap-8 lg:gap-16 p-8 lg:p-12 border-4 bg-card items-center"
                  hoverEffect={true}
                >
                  <div className="flex-1 w-full relative">
                    <div className="absolute -inset-2 bg-foreground rounded-[2rem] -z-10 rotate-1 group-hover:rotate-0 transition-transform"></div>
                    <div className="w-full aspect-[16/10] overflow-hidden rounded-[1.5rem] border-4 border-foreground shadow-pop">
                      <img 
                        src={project.image} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        alt={project.title}
                      />
                    </div>
                    {/* Category tag floating on image */}
                    <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full border-2 border-foreground ${project.color} ${project.color === 'bg-tertiary' || project.color === 'bg-quaternary' ? 'text-[#1E293B]' : 'text-white'} font-headline font-bold text-[10px] uppercase tracking-widest shadow-[2px_2px_0px_var(--color-shadow)]`}>
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4 text-xs font-headline font-bold uppercase tracking-widest">
                      <span className="bg-foreground text-background px-3 py-1 rounded shadow-[2px_2px_0px_#FFB800]">{project.role}</span>
                      <span className="text-foreground bg-card border-2 border-foreground px-3 py-1 rounded shadow-[2px_2px_0px_var(--color-shadow)]">{project.date}</span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-headline font-extrabold text-foreground leading-tight group-hover:-translate-y-1 transition-transform">
                      {project.title}
                    </h2>
                    
                    <p className="text-foreground/80 font-body font-medium leading-relaxed text-lg">
                      {project.description}
                    </p>
                    
                    <div className="pt-4">
                      <Link href={`/work/${project.id}`} passHref>
                        <Button className="text-sm px-8">
                          VIEW CASE STUDY 
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="bg-secondary rounded-[3rem] p-8 md:p-16 lg:p-24 text-center mt-32 relative overflow-hidden border-4 border-foreground shadow-[16px_16px_0px_var(--color-shadow)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-foreground/10 rounded-full border-4 border-white/20 -translate-y-1/2 translate-x-1/4 animate-wiggle"></div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold text-white mb-10 max-w-3xl mx-auto leading-[0.95] tracking-tighter drop-shadow-[4px_4px_0px_var(--color-shadow)]">
            Ready to start a <br/> <span className="text-accent underline decoration-4 underline-offset-8">new project?</span>
          </h2>
          
          <Link href="/contacts">
            <Button className="!bg-[#b1f288] !text-foreground hover:!bg-accent hover:!text-white text-lg px-10 py-5">
              Get in touch
            </Button>
          </Link>
          
          <div className="absolute bottom-[-20px] left-10 w-24 h-24 bg-tertiary border-4 border-foreground rounded-full shadow-pop hidden md:block animate-bounce-in"></div>
        </div>
      </div>
    </div>
  );
}
