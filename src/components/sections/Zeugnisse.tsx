'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { DocumentArrowDownIcon, EyeIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface ReportItem {
  term: string;
  date: string;
  file: string; // public path starting with '/'
  available?: boolean; // if false, show overlay and disable actions
  comingText?: string; // optional overlay text when not available
}

interface ZeugnisseProps {
  title: string;
  reports: ReportItem[];
}

export default function Zeugnisse({ title, reports }: ZeugnisseProps) {
  const prefersReducedMotion = useReducedMotion();
  const [openFile, setOpenFile] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenFile(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="reports" className="pt-16 pb-16 bg-rose-50/60 dark:bg-slate-800/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 50 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">{title}</h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Schulzeugnisse nach Semester mit direktem Download als PDF
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <motion.div
              key={`${report.term}-${report.date}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? undefined : { duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/50 overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">{report.term}</h4>
                  <p className="text-slate-600 dark:text-slate-300">{report.date}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                  <span className="text-lg font-semibold">PDF</span>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <motion.button
                  type="button"
                  onClick={() => (report.available === false ? null : setOpenFile(report.file))}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={report.available === false}
                  className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold shadow-sm transition ${
                    report.available === false
                      ? 'bg-slate-200 text-slate-500 dark:bg-slate-700/60 dark:text-slate-400 cursor-not-allowed opacity-60'
                      : 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-white hover:shadow'
                  }`}
                >
                  <EyeIcon className="w-5 h-5" /> Anzeigen
                </motion.button>

                {report.available === false ? (
                  <button
                    type="button"
                    disabled
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-300 text-slate-600 dark:bg-slate-700/60 dark:text-slate-400 font-semibold cursor-not-allowed opacity-60"
                  >
                    <DocumentArrowDownIcon className="w-5 h-5" /> Herunterladen
                  </button>
                ) : (
                  <motion.a
                    href={report.file}
                    download
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-sm hover:shadow transition"
                  >
                    <DocumentArrowDownIcon className="w-5 h-5" /> Herunterladen
                  </motion.a>
                )}
              </div>

              {/* Overlay for not available */}
              {report.available === false && (
                <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px] flex items-center justify-center">
                  <span className="px-4 py-2 text-sm font-semibold tracking-wide text-white rounded-lg border border-white/20 bg-white/10">
                    {report.comingText || 'Bald verfügbar'}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">
          Hinweis: Lege deine PDFs unter <code>/public/assets/pdfs/</code> ab und passe die Dateinamen bei Bedarf an.
        </div>
      </div>

      {openFile && (
        <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full h-[90vh] max-w-6xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden">
            <button
              aria-label="Schliessen"
              onClick={() => setOpenFile(null)}
              className="absolute top-3 right-3 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-white shadow hover:scale-105 transition"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <iframe
              title="PDF Preview"
              src={openFile}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}


