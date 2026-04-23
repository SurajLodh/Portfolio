"use client";

import React, { useState } from 'react';

export default function ContactsPage() {
  const [selectedInterest, setSelectedInterest] = useState('UI/UX Design');
  const interests = ['UI/UX Design', 'Visual Identity', 'User Research'];

  return (
    <div className="bg-transparent w-full min-h-screen text-[var(--color-foreground)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-2 lg:pt-4 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20 lg:mb-32">
          
          {/* Left Column */}
          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <span className="inline-block bg-[var(--color-paper-yellow)] border-[3px] border-[var(--color-border)] shadow-hard text-[var(--color-foreground)] wobbly font-body font-bold text-lg uppercase tracking-widest px-4 py-2 transform -rotate-2">
                Get in Touch
              </span>
              <h1 className="text-5xl md:text-7xl font-headline font-bold text-[var(--color-foreground)] leading-[1.1] transform rotate-1">
                Let's craft <br />
                your next <br />
                <span className="text-[var(--color-accent)] underline decoration-wavy decoration-[4px] underline-offset-8">story.</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-[var(--color-foreground)] max-w-md font-body leading-relaxed transform -rotate-1">
              I specialize in weaving data into compelling, human-centric narratives. Whether you have a specific project in mind or just want to explore possibilities, my inbox is always open.
            </p>

            <div className="space-y-4 pt-2">
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-white border-[3px] border-[var(--color-border)] wobbly shadow-hard text-[var(--color-foreground)] font-body text-xl font-bold transform rotate-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent)]"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                hello@gurusha.design
              </div>
              <br />
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-white border-[3px] border-[var(--color-border)] wobbly shadow-hard text-[var(--color-foreground)] font-body text-xl font-bold transform -rotate-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-secondary-accent)]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Based in New Delhi
              </div>
            </div>

            <div className="relative pt-12 max-w-sm transform rotate-2">
              <div className="tack-decoration"></div>
              <div className="bg-white border-[4px] border-[var(--color-border)] wobbly-md shadow-hard-emphasized p-3">
                <div className="w-full h-full wobbly overflow-hidden border-[3px] border-[var(--color-border)]">
                  <img 
                    src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop" 
                    alt="Workspace" 
                    className="w-full h-80 object-cover grayscale"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 md:-right-12 bg-[var(--color-paper-yellow)] border-[3px] border-[var(--color-border)] wobbly shadow-hard px-8 py-6 max-w-[240px] transform -rotate-4">
                <p className="font-headline font-bold text-[var(--color-foreground)] text-2xl leading-snug">
                  "Design is intelligence made visible."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex-1 lg:mt-0 mt-20">
            <div className="bg-[var(--color-muted)] border-[4px] border-[var(--color-border)] wobbly-md p-10 md:p-14 shadow-hard-emphasized relative transform -rotate-1">
              <div className="tape-decoration"></div>
              
              <form className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-3">
                    <label className="font-body text-xl font-bold block text-[var(--color-foreground)]">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Gurusha Arora" 
                      className="w-full p-4 border-[3px] border-[var(--color-border)] wobbly bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:outline-none focus:border-[var(--color-accent)] transition-colors text-[var(--color-foreground)] font-body text-xl placeholder:text-[var(--color-border)]"
                    />
                  </div>
                  <div className="flex-1 space-y-3">
                    <label className="font-body text-xl font-bold block text-[var(--color-foreground)]">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="email@example.com" 
                      className="w-full p-4 border-[3px] border-[var(--color-border)] wobbly bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:outline-none focus:border-[var(--color-accent)] transition-colors text-[var(--color-foreground)] font-body text-xl placeholder:text-[var(--color-border)]"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="font-body text-xl font-bold block text-[var(--color-foreground)]">Interest</label>
                  <div className="flex flex-wrap gap-4">
                    {interests.map((interest, index) => {
                      const isSelected = selectedInterest === interest;
                      const rotation = index % 2 === 0 ? 'rotate-1' : '-rotate-1';
                      return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => setSelectedInterest(interest)}
                        className={`px-5 py-3 font-body font-bold text-xl uppercase tracking-widest transition-all transform hover:-translate-y-1 ${
                          isSelected
                            ? `bg-[var(--color-accent)] text-white border-[3px] border-[var(--color-border)] shadow-hard wobbly ${rotation}`
                            : 'bg-white text-[var(--color-foreground)] border-[3px] border-dashed border-[var(--color-border)] wobbly hover:border-solid hover:shadow-hard-hover'
                        }`}
                      >
                        {interest}
                      </button>
                    )})}
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <label className="font-body text-xl font-bold block text-[var(--color-foreground)]">Message</label>
                  <textarea 
                    placeholder="Tell me about your project or vision..." 
                    className="w-full p-4 pb-12 border-[3px] border-[var(--color-border)] wobbly bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none text-[var(--color-foreground)] font-body text-xl placeholder:text-[var(--color-border)] mt-2"
                    rows={4}
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-6">
                  <span className="font-body text-lg uppercase tracking-widest text-[var(--color-border)] font-bold transform rotate-1">
                    Response Time: {'<'} 24h
                  </span>
                  <button type="submit" className="w-full sm:w-auto px-8 py-4 bg-[var(--color-paper-yellow)] text-[var(--color-foreground)] border-[3px] border-[var(--color-border)] font-body font-bold text-xl wobbly shadow-hard hover:bg-[var(--color-accent)] hover:text-white hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all flex items-center justify-center gap-3 transform -rotate-1">
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t-[4px] border-dashed border-[var(--color-border)] pt-20 mt-10">
          <div className="space-y-6 bg-white border-[3px] border-[var(--color-border)] wobbly shadow-hard p-8 transform rotate-1 hover:-rotate-1 hover:shadow-hard-hover transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent)]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="9" x2="15" y1="10" y2="10"></line><line x1="12" x2="12" y1="7" y2="13"></line></svg>
            <h3 className="text-3xl font-headline font-bold text-[var(--color-foreground)]">Discovery Call</h3>
            <p className="text-xl text-[var(--color-foreground)] font-body leading-relaxed">
              A 30-minute deep dive to understand your business goals, user needs, and the impact you want to create.
            </p>
          </div>
          
          <div className="space-y-6 bg-[var(--color-paper-yellow)] border-[3px] border-[var(--color-border)] wobbly shadow-hard p-8 transform -rotate-2 hover:rotate-1 hover:shadow-hard-hover transition-all relative">
            <div className="tack-decoration"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-secondary-accent)] relative z-10"><circle cx="12" cy="5" r="2"></circle><path d="M4 22 10.5 8.5"></path><path d="M20 22 13.5 8.5"></path><path d="M6 16h12"></path></svg>
            <h3 className="text-3xl font-headline font-bold text-[var(--color-foreground)] relative z-10">Strategic Blueprint</h3>
            <p className="text-xl text-[var(--color-foreground)] font-body leading-relaxed relative z-10">
              Translating insights into a curated design roadmap with defined milestones and success metrics.
            </p>
          </div>

          <div className="space-y-6 bg-white border-[3px] border-[var(--color-border)] wobbly shadow-hard p-8 transform rotate-1 hover:-rotate-1 hover:shadow-hard-hover transition-all relative">
            <div className="tape-decoration"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent)] relative z-10"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
            <h3 className="text-3xl font-headline font-bold text-[var(--color-foreground)] relative z-10">Refined Execution</h3>
            <p className="text-xl text-[var(--color-foreground)] font-body leading-relaxed relative z-10">
              Polished, wonderfully imperfect, and high-converting interfaces that feel as authentic as they look.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
