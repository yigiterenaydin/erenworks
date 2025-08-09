'use client';

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from 'react';

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
  return (
    <section id="about" className="pt-16 pb-16 bg-rose-50/60 dark:bg-slate-900/50 backdrop-blur-sm section-anchor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={prefersReducedMotion ? false : { opacity: 0, y: 50 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
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
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Über mich</h4>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Ich bin Eren und besuche die dritte Sekundarstufe an der Sekundarschule Zürich Rebhügel. Ich arbeite gern im Team, bin zuverlässig und organisiere mich gut.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Interessen & Motivation</h4>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Ich absolviere aktuell Schnupperlehren, aktualisiere meinen Lebenslauf und verschaffe mir ein klares Bild von verschiedenen Berufen.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Ziel</h4>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Besonders interessiert mich die KV‑Branche – idealerweise in einer Bank. Mein Ziel ist es, dort eine Lehrstelle zu finden und mich Schritt für Schritt weiterzuentwickeln.
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
              whileHover={prefersReducedMotion ? undefined : { y: -10, scale: 1.02 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mb-6 text-2xl`}>
                {skill.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{skill.title}</h4>
              <p className="text-slate-600 dark:text-slate-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


