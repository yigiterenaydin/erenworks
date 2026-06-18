"use client";

import { useMemo, useState, useRef, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import DetailCard from "@/components/experience/DetailCard";
import type { ExperienceItem } from "@/data/experienceItems";

interface Props {
  items: ExperienceItem[];
}

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

function ExperienceDetail({ item }: { item: ExperienceItem }) {
  if (!item.imageUrl) {
    return (
      <div className="text-sm text-slate-600 dark:text-slate-300">
        <p className="font-semibold text-slate-900 dark:text-white">{item.company}</p>
        {item.program && <p className="text-slate-500 dark:text-slate-400">{item.program}</p>}
        <p className="mt-3">{item.description}</p>
      </div>
    );
  }

  return (
    <DetailCard
      title={item.detailTitle || item.company}
      subtitle={item.detailSubtitle || item.program || "Erfahrungsbericht"}
      imageUrl={item.imageUrl}
      docUrl={item.pdfUrl}
    >
      {item.description}
    </DetailCard>
  );
}

export default function ExperienceAccordion({ items }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const sorted = useMemo(() => [...items].sort((a, b) => sortValue(b.date) - sortValue(a.date)), [items]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectedItem = selectedIndex != null ? sorted[selectedIndex] : null;

  const scrollToItem = useCallback((idx: number) => {
    if (typeof window === "undefined" || window.innerWidth >= 768) return;

    setTimeout(() => {
      const button = buttonRefs.current[idx];
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const headerHeight = 80;
      const extraOffset = 20;
      const targetScroll = window.scrollY + rect.top - headerHeight - extraOffset;

      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }, 150);
  }, []);

  const handleSelect = useCallback(
    (idx: number) => {
      const isOpen = openIndex === idx;
      setOpenIndex(isOpen ? null : idx);
      setSelectedIndex(idx);
      scrollToItem(idx);
    },
    [openIndex, scrollToItem]
  );

  return (
    <section
      id="experience"
      className="pt-16 md:pt-16 pb-16 bg-rose-50/60 dark:bg-slate-900/50 backdrop-blur-sm section-anchor"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 50 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            Erfahrungen und Schnupperlehren
          </h3>
        </motion.div>

        <div className="md:grid md:grid-cols-[340px,1fr] md:gap-6">
          <div className="space-y-3">
            {sorted.map((exp, idx) => {
              const isOpen = openIndex === idx;
              const isSelected = selectedIndex === idx;

              return (
                <div
                  key={`${exp.company}-${exp.program}-${idx}`}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow"
                >
                  <button
                    ref={(el) => {
                      buttonRefs.current[idx] = el;
                    }}
                    type="button"
                    aria-expanded={isOpen}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleSelect(idx);
                    }}
                    className={`w-full text-left px-5 py-4 flex items-center justify-between gap-4 transition-colors duration-200 ${
                      isSelected
                        ? "bg-rose-50/80 dark:bg-rose-900/25"
                        : "bg-white dark:bg-slate-800"
                    } hover:bg-rose-50/60 dark:hover:bg-rose-900/20`}
                  >
                    <div className="min-w-0 flex-1 flex items-center gap-3">
                      <span className="px-2 py-0.5 text-xs rounded bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-200">
                        {exp.date}
                      </span>
                      <span className="font-semibold text-slate-900 dark:text-white truncate flex-1">
                        {exp.company}
                      </span>
                    </div>
                    <div className="flex items-center justify-end gap-3 shrink-0">
                      <svg
                        className={`w-4 h-4 ${
                          isSelected ? "text-rose-600 dark:text-rose-300" : "text-slate-500"
                        }`}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        {isSelected ? (
                          <path
                            d="M13 5l-5 5 5 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        ) : (
                          <path
                            d="M7 5l5 5-5 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        )}
                      </svg>
                    </div>
                  </button>

                  {selectedIndex === idx && selectedItem && (
                    <div className="md:hidden bg-white dark:bg-slate-900 px-5 pb-5">
                      <ExperienceDetail item={selectedItem} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="hidden md:block">
            <div className="sticky top-28 rounded-xl border border-rose-200/70 dark:border-slate-700/70 bg-white/70 dark:bg-slate-900/40 backdrop-blur-sm min-h-[380px] p-5">
              {selectedItem ? (
                <ExperienceDetail item={selectedItem} />
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
