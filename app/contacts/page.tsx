"use client";

import React, { useState } from 'react';

export default function ContactsPage() {
  const [selectedInterest, setSelectedInterest] = useState('UI/UX Design');
  const interests = ['UI/UX Design', 'Visual Identity', 'User Research'];

  return (
    <div className="bg-swiss-muted border-t-4 border-black dark:border-white transition-none w-full min-h-screen pb-32 text-on-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-20">
        
        {/* Massive Header */}
        <div className="border-b-4 border-black dark:border-white pb-10 mb-16">
          <div className="inline-block px-4 py-2 border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-black text-xs tracking-widest uppercase mb-10">
            GET IN TOUCH
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[100px] font-headline font-black uppercase tracking-tighter leading-none">
            LET'S CRAFT<br />
            YOUR NEXT<br />
            <span className="text-[#FF3000]">STORY.</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 border-4 border-black dark:border-white bg-on-background">
          
          {/* Left Column */}
          <div className="flex-1 bg-background border-b-4 lg:border-b-0 lg:border-r-4 border-black dark:border-white p-8 md:p-16 flex flex-col justify-between">
            <div className="space-y-12">
              <p className="text-xl md:text-2xl font-medium leading-relaxed border-l-4 border-black dark:border-white pl-6">
                I specialize in weaving data into compelling digital systems. Whether you have a specific objective or want to explore possibilities, my inbox is unconditionally open.
              </p>
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-4 px-6 py-4 border-4 border-black dark:border-white text-on-background font-black uppercase tracking-widest text-xs w-full bg-white dark:bg-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><rect width="20" height="16" x="2" y="4" rx="0"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  HELLO@GURUSHA.DESIGN
                </div>
                <div className="inline-flex items-center gap-4 px-6 py-4 border-4 border-black dark:border-white text-on-background font-black uppercase tracking-widest text-xs w-full bg-white dark:bg-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  BASED IN NEW DELHI
                </div>
              </div>
            </div>

            <div className="mt-16 w-full border-4 border-black dark:border-white overflow-hidden relative min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop" 
                alt="Workspace" 
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute bottom-6 right-6 border-4 border-black dark:border-white bg-[#FF3000] px-8 py-6 max-w-[240px]">
                <p className="font-headline font-black text-white uppercase tracking-tighter text-2xl leading-none">
                  DESIGN IS INTELLIGENCE MADE VISIBLE.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex-[1.2] bg-background p-8 md:p-16">
            <form className="space-y-16">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 border-b-4 border-black dark:border-white bg-on-background p-1 group focus-within:border-[#FF3000]">
                  <div className="bg-background w-full h-full p-4">
                    <label className="text-xs uppercase tracking-widest font-black block mb-4">FULL NAME</label>
                    <input 
                      type="text" 
                      placeholder="GURUSHA ARORA" 
                      className="w-full outline-none transition-none text-xl md:text-2xl font-headline font-black uppercase bg-transparent placeholder-black/20 dark:placeholder-white/20"
                    />
                  </div>
                </div>
                <div className="flex-1 border-b-4 border-black dark:border-white bg-on-background p-1 group focus-within:border-[#FF3000]">
                  <div className="bg-background w-full h-full p-4">
                    <label className="text-xs uppercase tracking-widest font-black block mb-4">EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      placeholder="EMAIL@EXAMPLE.COM" 
                      className="w-full outline-none transition-none text-xl md:text-2xl font-headline font-black uppercase bg-transparent placeholder-black/50 dark:placeholder-white/50"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <label className="text-xs uppercase tracking-widest font-black block">INTEREST</label>
                <div className="flex flex-wrap gap-4">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => setSelectedInterest(interest)}
                      className={`px-8 py-4 font-black text-xs uppercase tracking-widest border-4 border-black dark:border-white transition-none ${
                        selectedInterest === interest
                          ? 'bg-[#FF3000] text-white border-[#FF3000]'
                          : 'bg-transparent text-on-background hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-b-4 border-black dark:border-white bg-on-background p-1 group focus-within:border-[#FF3000]">
                <div className="bg-background w-full h-full p-4">
                  <label className="text-xs uppercase tracking-widest font-black block mb-4">MESSAGE</label>
                  <textarea 
                    placeholder="INITIATE THE DISCOURSE..." 
                    className="w-full outline-none transition-none resize-none text-xl md:text-3xl font-headline font-black uppercase bg-transparent placeholder-black/50 dark:placeholder-white/50"
                    rows={3}
                  ></textarea>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-8 py-4">
                <span className="text-xs uppercase tracking-widest font-black border-l-4 border-black dark:border-white pl-4">
                  AVG RESPONSE: &lt;24H
                </span>
                <button type="button" className="w-full sm:w-auto px-12 py-6 bg-black dark:bg-white text-white dark:text-black font-black text-sm uppercase tracking-widest border-4 border-black dark:border-white hover:bg-[#FF3000] hover:text-white hover:border-[#FF3000] transition-none flex items-center justify-center gap-3">
                  SEND DISPATCH
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-black dark:border-white bg-on-background mt-8">
          <div className="bg-background border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white p-12 space-y-8 group hover:bg-[#FF3000] hover:text-white transition-none">
            <div className="w-16 h-16 border-4 border-black dark:border-white group-hover:border-white flex items-center justify-center bg-black dark:bg-white text-white dark:text-black group-hover:bg-white group-hover:text-[#FF3000]">
              <span className="text-xl font-black">01</span>
            </div>
            <h3 className="text-4xl font-headline font-black uppercase tracking-tighter">DISCOVERY CALL</h3>
            <p className="text-lg font-medium leading-relaxed border-l-4 border-black dark:border-white group-hover:border-white pl-4">
              A decisive deep dive to understand your business objectives and the impact required.
            </p>
          </div>
          
          <div className="bg-background border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white p-12 space-y-8 group hover:bg-[#FF3000] hover:text-white transition-none">
            <div className="w-16 h-16 border-4 border-black dark:border-white group-hover:border-white flex items-center justify-center bg-black dark:bg-white text-white dark:text-black group-hover:bg-white group-hover:text-[#FF3000]">
              <span className="text-xl font-black">02</span>
            </div>
            <h3 className="text-4xl font-headline font-black uppercase tracking-tighter">STRATEGIC BLUEPRINT</h3>
            <p className="text-lg font-medium leading-relaxed border-l-4 border-black dark:border-white group-hover:border-white pl-4">
              Translating insights into a rigorous roadmap with defined operational success metrics.
            </p>
          </div>

          <div className="bg-background p-12 space-y-8 group hover:bg-[#FF3000] hover:text-white transition-none">
            <div className="w-16 h-16 border-4 border-black dark:border-white group-hover:border-white flex items-center justify-center bg-black dark:bg-white text-white dark:text-black group-hover:bg-white group-hover:text-[#FF3000]">
              <span className="text-xl font-black">03</span>
            </div>
            <h3 className="text-4xl font-headline font-black uppercase tracking-tighter">REFINED EXECUTION</h3>
            <p className="text-lg font-medium leading-relaxed border-l-4 border-black dark:border-white group-hover:border-white pl-4">
              Brutal, accessible, and highly-converting functional interfaces.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
