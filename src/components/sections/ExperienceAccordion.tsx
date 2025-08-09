"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFileText } from "react-icons/fi";

interface ExperienceItem {
  date: string; // e.g. 05/2025
  city: string;
  company: string; // e.g. Zürcher Kantonalbank
  program: string; // e.g. Kaufmann EFZ
  description: string;
  pdfUrl?: string;
}

interface Props { items: ExperienceItem[]; }

function sortValue(dateString: string): number {
  const raw = dateString.trim();
  const endPart = raw.includes("-") ? raw.split("-").slice(-1)[0].trim() : raw;
  const mmYYYY = endPart.match(/^(\d{1,2})\/(\d{4})$/);
  if (mmYYYY) return parseInt(mmYYYY[2], 10) * 100 + parseInt(mmYYYY[1], 10);
  const yyyyOnly = endPart.match(/^(\d{4})$/);
  if (yyyyOnly) return parseInt(yyyyOnly[1], 10) * 100 + 12;
  const anyMMYYYY = raw.match(/(\d{1,2})\/(\d{4})/);
  if (anyMMYYYY) return parseInt(anyMMYYYY[2], 10) * 100 + parseInt(anyMMYYYY[1], 10);
  const anyYYYY = raw.match(/(\d{4})/);
  return anyYYYY ? parseInt(anyYYYY[1], 10) * 100 : 0;
}

export default function ExperienceAccordion({ items }: Props) {
  const sorted = useMemo(() => [...items].sort((a, b) => sortValue(b.date) - sortValue(a.date)), [items]);
  const [openIndex, setOpenIndex] = useState<number | null>(0); // ilk öğe açık

  return (
    <section id="experience" className="pt-16 md:pt-16 pb-16 bg-rose-50/60 dark:bg-slate-900/50 backdrop-blur-sm section-anchor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Erfahrungen und Schnupperlehren</h3>
        </motion.div>

        <div className="space-y-3">
          {sorted.map((exp, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={`${exp.company}-${idx}`} className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow">
                {/* Header */}
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left bg-white dark:bg-slate-800 px-5 py-4 grid grid-cols-1 md:grid-cols-2 items-center gap-4 transition-colors duration-200 hover:bg-rose-50/60 dark:hover:bg-rose-900/20"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-2 py-0.5 text-xs rounded bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-200">{exp.date}</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{exp.company}</span>
                    <span className="text-sm text-slate-600 dark:text-slate-300">{exp.program}</span>
                  </div>
                  <div className="flex items-center justify-end gap-3">
                    {exp.pdfUrl ? (
                      <span className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs hover:bg-rose-50/60 dark:hover:bg-rose-900/20">
                        <FiFileText className="w-4 h-4" /> PDF
                      </span>
                    ) : (
                      <span className="hidden md:inline-flex h-8 min-w-[120px] items-center justify-center rounded-full border border-dashed border-slate-300/70 dark:border-slate-700/70 text-slate-400 text-xs">
                        Platz frei
                      </span>
                    )}
                    <span className={`transition-transform ${isOpen ? 'rotate-180' : ''} text-slate-500`}>⌄</span>
                  </div>
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="bg-white dark:bg-slate-900 px-5 pb-5"
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-2 text-slate-600 dark:text-slate-300">
                        <span>{exp.city}</span>
                        {exp.pdfUrl && (
                          <a href={exp.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-300 hover:underline ml-2">
                            <FiFileText /> PDF
                          </a>
                        )}
                      </div>
                      <p className="text-slate-700 dark:text-slate-200 leading-relaxed">{exp.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


