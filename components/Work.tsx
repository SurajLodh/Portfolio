'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

const workData = [
  {
    id: 'ani-news',
    role: 'PRODUCT DESIGNER',
    date: 'FEB 2026 - PRESENT',
    title: 'ANI News Platform Redesign',
    description: 'Led the full redesign of ANI\'s high-traffic news platform. Built a scalable design system supporting 3M+ monthly active users and a custom CMS dashboard to accelerate editorial workflows.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVkI4z17REN5LDFmk-b3w5ZotNSAm4SuS1_jdg1wjixKkw2W7BunfrwezsQPK_fiDtvcxSEB3WL2SFiC8KG8kQh1aPz5ncBsQOct7M0wo-LL6DY_A0d_b2v67G2EUip1Sg0muUM07Y31DtFLbLPj07G6knDirjhfNd5bvUVFjTf9NY4nBV-ftbMe-WOK2LsqGO1aWsu-RMcIz9zqv-HycnVX749Y7e_FC4zCIkMLywtj6s0zFgZ1RgrObHgZGkVRDmN8PctrSCK8Qi',
    reverse: false,
    color: 'bg-accent'
  },
  {
    id: 'shriconnect',
    role: 'LEAD DESIGNER',
    date: 'JUL 2024 - PRESENT',
    title: 'ShriConnect ERP Ecosystem',
    description: 'Architected a large-scale ERP ecosystem 13 custom mobile apps and 40+ modules across 100+ schools serving 200,000+ students, parents, and staff with three distinct persona-based workflows.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJV58gIbu3UEn8NF4l5zdWWtvWk5glyaIj7MuuO5T-QDi9IXdMM8FZOY7zK7W_FUY3pNEsKAWKAMm-Ptfzds-mu4Tg3XsvAJ1rE2ESaLQKnkc6i-zW3ofWZxQGzUjztd5UwZY_av4RnKSkis_oph9oH-4wn6KK-tX-UbAt5SFZ8hLrtVsOS83Ser7_TdTOz3bQBZh1fu4PO7MZkmEnWGCREWUqD_nJo95OMB_l5RWm4eyqh0Uf_Us0HSRPlIny-rsJwHJbmatOt_0a',
    reverse: true,
    color: 'bg-secondary'
  },
  {
    id: 'wave-city',
    role: 'UX COLLABORATOR',
    date: 'SEP 2024 - DEC 2025',
    title: 'Wave City ERP & Billing Workflow',
    description: 'Revamped an internal ERP billing workflow for a global finance client, simplifying citywide billing flows and delivering a 25% reduction in administrative processing time. Designed secure wheelchair billing modules meeting financial compliance standards.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDu4wvSpJA8kWvxJ712hnyQluhHtukoeA0nBW-K9YqDRD4QUEdCRuHKj4nRBMI-7GZ3tC-3mrf70iXkXdh0XmvmACGIzjEufWfGi1lWeeAgZrrY6tcrSeLJ8Kqhy5CECWdIpW6dwAbF0j3KN8K6TxJAJJ4FvPUKNplokd5Iw4m2IdUygwcZ7ERiE-pOCeYkI_ofAFvbinYFNrqYjrd3ikQfsHvVfcpingFNvUMj25FyCfHNs_RKHp-mAVCn9uryCU_duapSzRgVHAc',
    reverse: false,
    color: 'bg-tertiary'
  },
  {
    id: 'ability-connect',
    role: 'LEAD DESIGNER',
    date: 'JUN 2024 - AUG 2024',
    title: 'Ability Connect Accessible Platform',
    description: 'Designed a fully accessible digital resource platform from the ground up, achieving WCAG 2.1 compliance with enhanced screen-reader and high-contrast mode support for users with diverse disabilities.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyPuqho1--zV6gwK2ySqRs-S-fa99GA1vORs5e3WIupUOywHppoJkGQg7SI8HNmb-R9UgBJZY3NFisd4lsGZ31L5-Vvn2oPOGlCJMAF1eG86xjEiDifpz1tv2-tQhGof_P1CFajXBxFDs9tGYXcBODmxnUBQe4ZtcGDey4I9irCmLvb-wbcZNIeI9eHPtMjKQ1Jjnv1W4KeB5XHoT4kqIg_i44Sq2u_xLBjYJXTHTr2grGdl05ve3yDbb7MHzHJWWLVPKZcX1tK6M5',
    reverse: true,
    color: 'bg-quaternary'
  }
];

export default function Work() {
  return (
    <main className="py-24 relative overflow-hidden" id="work">
      {/* Background dotted connection line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 border-l-4 border-foreground border-dashed -translate-x-1/2 opacity-20 hidden lg:block -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-20 text-center relative inline-block left-1/2 -translate-x-1/2">
          <div className="absolute -inset-2 bg-tertiary -rotate-2 rounded-xl -z-10 border-2 border-foreground"></div>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-foreground px-6 py-2">
            Selected Work
          </h2>
        </div>

        <div className="space-y-32">
          {workData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring", 
                damping: 15, 
                stiffness: 100, 
                delay: 0.1 
              }}
            >
              <Card
                className={`group flex flex-col ${project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-0 lg:gap-12 p-8 lg:p-12 relative overflow-visible`}
                hoverEffect={true}
              >
                {/* Floating Confetti Shapes */}
                <div className={`absolute -top-6 ${project.reverse ? '-right-6' : '-left-6'} w-12 h-12 ${project.color} rounded-lg border-2 border-foreground rotate-12 -z-10 shadow-pop`}></div>
                
                <div className="flex-1 space-y-6 z-10 w-full mb-8 md:mb-0">
                  <div className="flex flex-wrap items-center gap-4 font-headline text-[10px] uppercase tracking-widest font-bold">
                    <span className={`border-2 border-foreground px-4 py-1.5 rounded-full ${project.color} text-foreground shadow-[2px_2px_0px_#1E293B]`}>
                      {project.role}
                    </span>
                    <span className="text-foreground bg-white border-2 border-foreground px-4 py-1.5 rounded-full shadow-[2px_2px_0px_#1E293B]">{project.date}</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-headline font-extrabold text-foreground group-hover:-translate-y-1 transition-transform duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground font-body leading-relaxed font-medium">
                    {project.description}
                  </p>
                  
                  <div className="pt-4">
                    <Link href={project.id === 'ani-news' ? '/work/ani-news' : ''} passHref legacyBehavior>
                      <Button asChild>
                        <a>View Project</a>
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="flex-1 w-full relative z-10 group-hover:-rotate-2 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                  <div className="w-full aspect-[4/3] rounded-2xl border-4 border-foreground overflow-hidden shadow-pop">
                    <img
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={project.image}
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
