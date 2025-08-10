"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";

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
  const prefersReducedMotion = useReducedMotion();
  const sorted = useMemo(() => [...items].sort((a, b) => sortValue(b.date) - sortValue(a.date)), [items]);
  const [openIndex, setOpenIndex] = useState<number | null>(null); // masaüstünde sağ panel var, listede varsayılan olarak kapalı
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // Hiçbir kart seçili değil

  const SelectedDetail = useMemo(() => {
    if (selectedIndex == null) return null;
    const item = sorted[selectedIndex];
    const company = (item.company || '').toLowerCase();
    const program = (item.program || '').toLowerCase();

    // Kita
    if (company.includes('kita')) {
      return dynamic(() => import('../experience/Kita'), { ssr: false });
    }

    // ZKB mappings with precise intent
    if (company.includes('zürcher kantonalbank')) {
      const isSchnupper = program.includes('schnupper');
      const hasKVBank = program.includes('kv branche bank');
      const hasInformatik = program.includes('informatik');
      const hasMediamatik = program.includes('mediamatik');
      const hasEDB = program.includes('entwicklung digitales business') || program.includes('edb');

      if (isSchnupper && hasKVBank) {
        return dynamic(() => import('../experience/ZkbParcoursKVBank'), { ssr: false });
      }
      if (isSchnupper && hasInformatik) {
        return dynamic(() => import('../experience/kantonalbankinfoschpark'), { ssr: false });
      }
      if (!isSchnupper && hasMediamatik) {
        return dynamic(() => import('../experience/KBInfoKVMediamatik'), { ssr: false });
      }
      if (!isSchnupper && (hasEDB || (hasInformatik && program.includes('&')))) {
        return dynamic(() => import('../experience/KBInforInformatikBus'), { ssr: false });
      }
    }

    // Other companies
    if (company.includes('ewz')) {
      return dynamic(() => import('../experience/Ewz'), { ssr: false });
    }
    if (company.includes('ubs')) {
      return dynamic(() => import('../experience/ubs'), { ssr: false });
    }
    if (company.includes('kornhaus')) {
      return dynamic(() => import('../experience/kornhaus'), { ssr: false });
    }
    if (company.includes('ergon smart software')) {
      return dynamic(() => import('../experience/ergon'), { ssr: false });
    }
    if (company.includes('e. weber & cie ag')) {
      return dynamic(() => import('../experience/weber'), { ssr: false });
    }
    if (company.includes('sunrise')) {
      return dynamic(() => import('../experience/sunrise'), { ssr: false });
    }
    if (company.includes('post immobilien')) {
      return dynamic(() => import('../experience/post'), { ssr: false });
    }
    return null;
  }, [selectedIndex, sorted]);

  return (
    <section id="experience" className="pt-16 md:pt-16 pb-16 bg-rose-50/60 dark:bg-slate-900/50 backdrop-blur-sm section-anchor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 50 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Erfahrungen und Schnupperlehren</h3>
        </motion.div>

        <div className="md:grid md:grid-cols-[340px,1fr] md:gap-6">
          {/* Sol: Liste */}
          <div className="space-y-3">
          {sorted.map((exp, idx) => {
            const isOpen = openIndex === idx;
            const isSelected = selectedIndex === idx;
            return (
              <div key={`${exp.company}-${idx}`} className="w-full rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow">
                {/* Header */}
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => { 
                    setOpenIndex(isOpen ? null : idx); 
                    setSelectedIndex(idx); 
                    
                    // Mobilde scroll pozisyonunu ayarla
                    if (window.innerWidth < 768) {
                      setTimeout(() => {
                        const button = document.activeElement as HTMLElement;
                        if (button) {
                          const rect = button.getBoundingClientRect();
                          const headerHeight = 80; // Header yüksekliği
                          const extraOffset = 20; // Ekstra boşluk
                          const targetScroll = window.scrollY + rect.top - headerHeight - extraOffset;
                          
                          window.scrollTo({
                            top: targetScroll,
                            behavior: 'smooth'
                          });
                        }
                      }, 100); // Kısa bir gecikme ile içeriğin açılmasını bekle
                    }
                  }}
                  className={`w-full text-left px-5 py-4 flex items-center justify-between gap-4 transition-colors duration-200 ${isSelected ? 'bg-rose-50/80 dark:bg-rose-900/25' : 'bg-white dark:bg-slate-800'} hover:bg-rose-50/60 dark:hover:bg-rose-900/20`}
                >
                  <div className="min-w-0 flex-1 flex items-center gap-3">
                    <span className="px-2 py-0.5 text-xs rounded bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-200">{exp.date}</span>
                    <span className="font-semibold text-slate-900 dark:text-white truncate flex-1">{exp.company}</span>
                  </div>
                  <div className="flex items-center justify-end gap-3 shrink-0">
                    <svg className={`w-4 h-4 ${isSelected ? 'text-rose-600 dark:text-rose-300' : 'text-slate-500'}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      {isSelected ? (
                        <path d="M13 5l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      ) : (
                        <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      )}
                    </svg>
                  </div>
                </button>
                {/* Mobile detail: show selected item's component under the header */}
                {selectedIndex === idx && SelectedDetail && (
                  <div className="md:hidden bg-white dark:bg-slate-900 px-5 pb-5">
                    <SelectedDetail />
                  </div>
                )}
              </div>
            );
          })}
          </div>
          {/* Sağ: Detay alanı */}
          <div className="hidden md:block">
            <div className="sticky top-28 rounded-xl border border-rose-200/70 dark:border-slate-700/70 bg-white/70 dark:bg-slate-900/40 backdrop-blur-sm min-h-[380px] p-5">
              {SelectedDetail ? (
                <SelectedDetail />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-slate-400">Platz frei</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


