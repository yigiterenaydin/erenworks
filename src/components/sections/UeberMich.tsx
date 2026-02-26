'use client';

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';
import { FlagIcon } from '@heroicons/react/24/outline';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface Skill {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

interface UeberMichProps {
  title: string;
  skills: Skill[];
}

export default function UeberMich({ title, skills }: UeberMichProps) {
  const prefersReducedMotion = useReducedMotion();
  
  // Background icons for each card
  const backgroundIcons = [
    <PencilIcon key="pencil" className="w-full h-full text-blue-400 dark:text-blue-500 opacity-30" />,
    <FlagIcon key="flag" className="w-full h-full text-purple-400 dark:text-purple-500 opacity-30" />,
    <RocketLaunchIcon key="rocket" className="w-full h-full text-green-400 dark:text-green-500 opacity-30" />
  ];

  return (
    <section id="about" className="relative pt-16 pb-16 bg-rose-50/60 dark:bg-slate-900/50 backdrop-blur-sm section-anchor overflow-hidden" style={{ scrollMarginTop: '120px' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/bilder/schule-bg.png" 
          alt="Schule Hintergrund" 
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-top opacity-5 sm:opacity-3 dark:opacity-3 sm:dark:opacity-2"
          priority={false}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={prefersReducedMotion ? false : { opacity: 0, y: 50 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
                     <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
             {title}
           </h3>
        </motion.div>
        
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 50 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
                                           <div className="space-y-6 text-left">
              <div>
                                 <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Wer bin ich & was mach ich? 🤔</h4>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Ich heisse <span className="text-blue-600 dark:text-blue-400 font-semibold">Eren</span>, bin <span className="text-green-600 dark:text-green-400 font-semibold">15 Jahre alt</span> und besuche die <span className="text-purple-600 dark:text-purple-400 font-semibold">Sekundarschule Zürich Rebhügel</span>. Ich gelte als <span className="text-indigo-600 dark:text-indigo-400 font-semibold">zuverlässig</span> und <span className="text-pink-600 dark:text-pink-400 font-semibold">offen</span> und sammle durch <span className="text-orange-600 dark:text-orange-400 font-semibold">Schnupperlehren</span> wertvolle <span className="text-teal-600 dark:text-teal-400 font-semibold">Erfahrungen</span> für meine berufliche Zukunft.
                </p>
              </div>
            </div>
        </motion.div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 50 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? undefined : { duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
                             whileHover={prefersReducedMotion ? undefined : { y: -12, scale: 1.05, rotateY: 5 }}
               className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:border-blue-300/50 dark:hover:border-blue-400/50"
            >
                             {/* Background Icon */}
                               <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-700">
                  {backgroundIcons[index]}
                </div>
              
                             {/* Content */}
               <div className="relative z-10">
                                   <div className="bg-slate-100/80 dark:bg-slate-700/60 backdrop-blur-sm rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-lg`}>
                        {skill.icon}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">{skill.title}</h4>
                    </div>
                  </div>
                 <p className="text-slate-600 dark:text-slate-300">{skill.description}</p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


