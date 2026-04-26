"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function ContactsPage() {
  const [selectedInterest, setSelectedInterest] = useState('UI/UX Design');
  const interests = ['UI/UX Design', 'Visual Identity', 'User Research'];

  return (
    <div className="bg-background transition-colors duration-300 w-full min-h-screen text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 pt-12 lg:pt-20 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20 lg:mb-32">
          
          {/* Left Column */}
          <div className="flex-1 space-y-10 relative">
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-secondary rounded-full border-4 border-foreground -z-10 animate-wiggle hidden md:block"></div>
            
            <div className="space-y-4">
              <span className="text-foreground bg-card border-2 border-foreground px-4 py-1.5 rounded-full text-xs font-headline font-bold shadow-[2px_2px_0px_var(--color-shadow)] uppercase tracking-[0.2em] inline-block mb-4">Get in Touch</span>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-foreground leading-[1.05] tracking-tight">
                Let's craft <br />
                your next <br />
                <span className="text-tertiary text-pop">story.</span>
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-md font-body font-medium leading-relaxed">
              I specialize in weaving data into compelling digital narratives. Whether you have a specific project in mind or just want to explore possibilities, my inbox is always open.
            </p>

            <div className="space-y-4 pt-2">
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-card border-2 border-foreground rounded-full text-foreground shadow-pop font-headline font-bold text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                hello@gurusha.design
              </div>
              <br />
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-card border-2 border-foreground rounded-full text-foreground shadow-pop font-headline font-bold text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-quaternary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Based in New Delhi
              </div>
            </div>

            <div className="relative pt-12 max-w-sm hidden lg:block">
              <div className="absolute top-8 left-0 right-0 h-64 bg-dot-pattern rounded-[2rem] border-4 border-foreground -z-10 translate-x-4 translate-y-4"></div>
              <div className="border-4 border-foreground rounded-[2rem] overflow-hidden shadow-pop bg-card">
                <img 
                  src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop" 
                  alt="Workspace" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-12 bg-accent border-4 border-foreground px-6 py-4 rounded-2xl shadow-pop max-w-[240px] rotate-3">
                <p className="font-headline font-bold text-white text-lg leading-snug drop-shadow-[1px_1px_0px_var(--color-shadow)]">
                  "Design is intelligence made visible."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex-1 lg:mt-0 mt-20 relative">
            <div className="absolute -inset-4 bg-tertiary border-4 border-foreground rounded-[3rem] rotate-2 -z-10 shadow-[12px_12px_0px_var(--color-shadow)]"></div>
            
            <div className="bg-card rounded-[2.5rem] p-8 md:p-12 shadow-sm border-4 border-foreground relative z-10">
              
              <form className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-2">
                    <label className="text-xs uppercase tracking-widest text-foreground font-headline font-bold block">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Gurusha Arora" 
                      className="w-full px-4 py-3 border-2 border-foreground rounded-lg focus:outline-none focus:ring-4 focus:ring-accent/30 focus:border-accent transition-all text-foreground bg-background placeholder:text-muted-foreground shadow-[2px_2px_0px_var(--color-shadow)]"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <label className="text-xs uppercase tracking-widest text-foreground font-headline font-bold block">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="email@example.com" 
                      className="w-full px-4 py-3 border-2 border-foreground rounded-lg focus:outline-none focus:ring-4 focus:ring-accent/30 focus:border-accent transition-all text-foreground bg-background placeholder:text-muted-foreground shadow-[2px_2px_0px_var(--color-shadow)]"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs uppercase tracking-widest text-foreground font-headline font-bold block">Interest</label>
                  <div className="flex flex-wrap gap-4">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => setSelectedInterest(interest)}
                        className={`px-5 py-2.5 font-headline font-bold text-sm rounded-full transition-all border-2 ${
                          selectedInterest === interest
                            ? 'bg-quaternary border-foreground text-[#1E293B] shadow-[2px_2px_0px_var(--color-shadow)] translate-y-[2px]'
                            : 'bg-card border-foreground text-foreground shadow-pop hover:-translate-y-1 hover:shadow-[6px_6px_0px_var(--color-shadow)]'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-foreground font-headline font-bold block">Message</label>
                  <textarea 
                    placeholder="Tell me about your project or vision..." 
                    className="w-full px-4 py-4 border-2 border-foreground rounded-lg focus:outline-none focus:ring-4 focus:ring-accent/30 focus:border-accent transition-all resize-none text-foreground bg-background placeholder:text-muted-foreground shadow-pop"
                    rows={4}
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-6">
                  <span className="text-xs uppercase tracking-widest text-foreground font-headline font-bold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-quaternary border border-foreground animate-pulse"></div>
                    Response Time: {'<'} 24h
                  </span>
                  <Button type="button" className="w-full sm:w-auto px-8 py-4 text-lg">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-20 relative">
          {/* Decorative dashed line */}
          <div className="absolute top-10 left-0 w-full border-t-4 border-foreground border-dashed opacity-20 hidden md:block"></div>
          
          <div className="bg-card border-4 border-foreground rounded-2xl p-8 shadow-pop relative z-10 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 rounded-full bg-tertiary border-2 border-foreground flex items-center justify-center shadow-pop mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#1E293B]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="9" x2="15" y1="10" y2="10"></line><line x1="12" x2="12" y1="7" y2="13"></line></svg>
            </div>
            <h3 className="text-2xl font-headline font-extrabold text-foreground mb-4">Discovery Call</h3>
            <p className="text-base text-muted-foreground font-body font-medium leading-relaxed">
              A 30-minute deep dive to understand your business goals, user needs, and the impact you want to create.
            </p>
          </div>
          
          <div className="bg-card border-4 border-foreground rounded-2xl p-8 shadow-pop relative z-10 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 rounded-full bg-secondary border-2 border-foreground flex items-center justify-center shadow-pop mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#1E293B]"><circle cx="12" cy="5" r="2"></circle><path d="M4 22 10.5 8.5"></path><path d="M20 22 13.5 8.5"></path><path d="M6 16h12"></path></svg>
            </div>
            <h3 className="text-2xl font-headline font-extrabold text-foreground mb-4">Strategic Blueprint</h3>
            <p className="text-base text-muted-foreground font-body font-medium leading-relaxed">
              Translating insights into a curated design roadmap with defined milestones and success metrics.
            </p>
          </div>

          <div className="bg-card border-4 border-foreground rounded-2xl p-8 shadow-pop relative z-10 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 rounded-full bg-quaternary border-2 border-foreground flex items-center justify-center shadow-pop mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#1E293B]"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
            </div>
            <h3 className="text-2xl font-headline font-extrabold text-foreground mb-4">Refined Execution</h3>
            <p className="text-base text-muted-foreground font-body font-medium leading-relaxed">
              Polished, accessible, and high-converting interfaces that feel as good as they look.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
