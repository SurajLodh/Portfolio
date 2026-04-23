'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const workData = [
  {
    id: 'ani-news',
    role: 'PRODUCT DESIGNER',
    date: 'FEB 2026 - PRESENT',
    title: 'ANI News Platform Redesign',
    description: 'Led the full redesign of ANI\'s high-traffic news platform. Built a scalable design system supporting 3M+ monthly active users and a custom CMS dashboard to accelerate editorial workflows.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVkI4z17REN5LDFmk-b3w5ZotNSAm4SuS1_jdg1wjixKkw2W7BunfrwezsQPK_fiDtvcxSEB3WL2SFiC8KG8kQh1aPz5ncBsQOct7M0wo-LL6DY_A0d_b2v67G2EUip1Sg0muUM07Y31DtFLbLPj07G6knDirjhfNd5bvUVFjTf9NY4nBV-ftbMe-WOK2LsqGO1aWsu-RMcIz9zqv-HycnVX749Y7e_FC4zCIkMLywtj6s0zFgZ1RgrObHgZGkVRDmN8PctrSCK8Qi',
    reverse: false
  },
  {
    id: 'shriconnect',
    role: 'LEAD DESIGNER',
    date: 'JUL 2024 - PRESENT',
    title: 'ShriConnect ERP Ecosystem',
    description: 'Architected a large-scale ERP ecosystem serving 200,000+ students, parents, and staff with three distinct persona-based workflows.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJV58gIbu3UEn8NF4l5zdWWtvWk5glyaIj7MuuO5T-QDi9IXdMM8FZOY7zK7W_FUY3pNEsKAWKAMm-Ptfzds-mu4Tg3XsvAJ1rE2ESaLQKnkc6i-zW3ofWZxQGzUjztd5UwZY_av4RnKSkis_oph9oH-4wn6KK-tX-UbAt5SFZ8hLrtVsOS83Ser7_TdTOz3bQBZh1fu4PO7MZkmEnWGCREWUqD_nJo95OMB_l5RWm4eyqh0Uf_Us0HSRPlIny-rsJwHJbmatOt_0a',
    reverse: true
  },
  {
    id: 'wave-city',
    role: 'UX COLLABORATOR',
    date: 'SEP 2024 - DEC 2025',
    title: 'Wave City ERP & Billing Workflow',
    description: 'Revamped an internal ERP billing workflow for a global finance client, simplifying citywide billing flows and delivering a 25% reduction in administrative processing time.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDu4wvSpJA8kWvxJ712hnyQluhHtukoeA0nBW-K9YqDRD4QUEdCRuHKj4nRBMI-7GZ3tC-3mrf70iXkXdh0XmvmACGIzjEufWfGi1lWeeAgZrrY6tcrSeLJ8Kqhy5CECWdIpW6dwAbF0j3KN8K6TxJAJJ4FvPUKNplokd5Iw4m2IdUygwcZ7ERiE-pOCeYkI_ofAFvbinYFNrqYjrd3ikQfsHvVfcpingFNvUMj25FyCfHNs_RKHp-mAVCn9uryCU_duapSzRgVHAc',
    reverse: false
  },
  {
    id: 'ability-connect',
    role: 'LEAD DESIGNER',
    date: 'JUN 2024 - AUG 2024',
    title: 'Ability Connect Accessible Platform',
    description: 'Designed a fully accessible digital resource platform from the ground up, achieving WCAG 2.1 compliance with enhanced screen-reader and high-contrast mode support.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyPuqho1--zV6gwK2ySqRs-S-fa99GA1vORs5e3WIupUOywHppoJkGQg7SI8HNmb-R9UgBJZY3NFisd4lsGZ31L5-Vvn2oPOGlCJMAF1eG86xjEiDifpz1tv2-tQhGof_P1CFajXBxFDs9tGYXcBODmxnUBQe4ZtcGDey4I9irCmLvb-wbcZNIeI9eHPtMjKQ1Jjnv1W4KeB5XHoT4kqIg_i44Sq2u_xLBjYJXTHTr2grGdl05ve3yDbb7MHzHJWWLVPKZcX1tK6M5',
    reverse: true
  }
];

export default function Work() {
  // Tracks which card is currently "active" (hovered on desktop OR touched on mobile)
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <main className="py-32 bg-swiss-muted border-t-4 border-black dark:border-white transition-none" id="work">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-24 flex items-end justify-between border-b-4 border-black dark:border-white pb-6">
          <h2 className="text-6xl md:text-8xl font-headline font-black text-on-background uppercase tracking-tighter leading-none">
            01. Work
          </h2>
          <span className="hidden md:inline-block font-black tracking-widest uppercase text-sm">CASE STUDIES</span>
        </div>

        <div className="space-y-16">
          {workData.map((project, index) => {
            const isActive = activeId === project.id;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeOut",
                  delay: index * 0.1 
                }}
              >
                <section
                  className={`group flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch border-4 border-black dark:border-white transition-none cursor-pointer overflow-hidden ${isActive ? 'bg-[#FF3000] border-[#FF3000]' : 'bg-white dark:bg-black hover:bg-[#FF3000] hover:border-[#FF3000]'}`}
                  // Desktop mouse events
                  onMouseEnter={() => setActiveId(project.id)}
                  onMouseLeave={() => setActiveId(null)}
                  // Mobile touch events — show while finger is held, revert on release
                  onTouchStart={() => setActiveId(project.id)}
                  onTouchEnd={() => setActiveId(null)}
                  onTouchCancel={() => setActiveId(null)}
                >
                  <div className="flex-[1.5] p-8 md:p-16 flex flex-col justify-center space-y-8">
                    <div className={`flex items-center gap-4 text-xs font-black uppercase tracking-widest transition-none ${isActive ? 'text-white' : 'text-black dark:text-white group-hover:text-white'}`}>
                      <span className={`border-2 px-3 py-1 transition-none ${isActive ? 'border-white bg-white text-black' : 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black group-hover:border-white group-hover:bg-white group-hover:text-black'}`}>{project.role}</span>
                      <span>{project.date}</span>
                    </div>
                    <h3 className={`text-4xl md:text-5xl lg:text-6xl font-headline font-black leading-[1.1] uppercase tracking-tighter transition-none ${isActive ? 'text-white' : 'text-black dark:text-white group-hover:text-white'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-lg md:text-xl font-body font-medium leading-relax border-l-4 pl-6 transition-none ${isActive ? 'text-white border-white' : 'text-black dark:text-white border-black dark:border-white group-hover:text-white group-hover:border-white'}`}>
                      {project.description}
                    </p>
                    <div className="pt-4">
                      <Link href={project.id === 'ani-news' ? '/work/ani-news' : ''}>
                        <button className={`px-8 py-4 border-2 font-black uppercase tracking-widest text-xs rounded-none transition-none flex items-center gap-3 ${isActive ? 'border-white bg-white text-black' : 'border-black dark:border-white bg-white dark:bg-black text-black dark:text-white group-hover:border-white group-hover:bg-white group-hover:text-black'}`}>
                          View Details
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Image Container */}
                  <div className={`flex-1 w-full border-t-4 lg:border-t-0 lg:border-l-4 lg:group-even:border-l-0 lg:group-even:border-r-4 bg-black relative min-h-[300px] lg:min-h-full transition-none p-4 ${isActive ? 'border-[#FF3000]' : 'border-black dark:border-white group-hover:border-[#FF3000]'}`}>
                    <div className={`w-full h-full border-2 overflow-hidden relative bg-black transition-none ${isActive ? 'border-white' : 'border-black dark:border-white group-hover:border-white'}`}>
                      <img
                        alt={project.title}
                        className={`w-full h-full object-cover duration-300 ease-out ${isActive ? 'grayscale-0 opacity-100' : 'grayscale opacity-85'}`}
                        src={project.image}
                      />
                    </div>
                  </div>
                </section>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
