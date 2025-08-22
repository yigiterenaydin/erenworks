'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FaUtensils, FaMusic, FaTree, FaCamera, FaFileWord, FaFileExcel, FaSwimmer } from 'react-icons/fa';
import { FaPersonWalking } from 'react-icons/fa6';
import { MdSportsMartialArts } from 'react-icons/md';
import { FiCode } from 'react-icons/fi';
import { toast } from 'react-hot-toast';

interface LanguageItem {
  code: string;
  name: string;
  note: string;
  level: number; // 0-100
}

interface ReferenceItem {
  name: string;
  title: string;
  email: string;
  phone?: string;
}

interface PortfolioColumnsProps {
  languages: LanguageItem[];
  references: ReferenceItem[];
}

export default function PortfolioColumns({ languages, references }: PortfolioColumnsProps) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="projects" className="pt-16 pb-16 bg-rose-50/60 dark:bg-slate-800/30 backdrop-blur-sm section-anchor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Hier sind meine Fähigkeiten und Kompetenzen.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sprachkenntnisse */}
          <div
            className="rounded-2xl border border-pink-900 bg-gradient-to-br from-pink-400 to-pink-700 p-6 text-white shadow"
          >
            <h3 className="text-2xl font-bold mb-6">Sprachkenntnisse</h3>
            <div className="space-y-6">
              {languages.map((lang, idx) => (
                <div key={lang.code} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-10 text-sm font-semibold text-slate-300">{lang.code}</span>
                    <span className="text-lg font-semibold">{lang.name}</span>
                    <span className="text-sm text-slate-300">{lang.note}</span>
                  </div>
                    <div className="relative h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-rose-300 via-fuchsia-300 to-indigo-300 dark:from-rose-400 dark:via-fuchsia-400 dark:to-indigo-400"
                      style={{ width: `${Math.max(0, Math.min(100, lang.level))}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interessen */}
          <div
            className="rounded-2xl border border-blue-900 bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white shadow"
          >
            <h3 className="text-2xl font-bold mb-6">Interessen</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {(
                [
                  { title: 'Kochen', icon: <FaUtensils size={28} /> },
                  { title: 'Kung‑Fu', icon: <MdSportsMartialArts size={28} /> },
                  { title: 'Schwimmen', icon: <FaSwimmer size={28} /> },
                  { title: 'Musik hören', icon: <FaMusic size={28} /> },
                  { title: 'Natur', icon: <FaTree size={28} /> },
                  { title: 'Fotografieren', icon: <FaCamera size={28} /> },
                  { title: 'Spazieren', icon: <FaPersonWalking size={28} /> },
                  { title: 'Word', icon: <FaFileWord size={28} /> },
                  { title: 'Excel', icon: <FaFileExcel size={28} /> },
                  { title: 'Programmieren', icon: <FiCode size={28} /> },
                ] as const
              ).map((item, i) => (
                <button
                  key={i}
                  type="button"
                  title={item.title}
                  aria-label={item.title}
                  onClick={() =>
                    toast.success(item.title.toUpperCase(), {
                      icon: '🔥',
                      style: {
                        border: '1px solid #3e3e3e',
                        background: '#111',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        textTransform: 'uppercase',
                      },
                    })
                  }
                  className="flex items-center justify-center rounded-xl border border-slate-800 bg-black/60 p-4 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 hover:border-gray-700 transition"
                >
                  <span className="text-slate-200 hover:text-white">{item.icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Referenzen */}
          <div
            className="rounded-2xl border border-emerald-900 bg-gradient-to-br from-emerald-600 to-emerald-800 p-6 text-white shadow"
          >
            <h3 className="text-2xl font-bold mb-6">Referenzen</h3>
            <div className="space-y-4">
              {references.map((ref) => (
                <div
                  key={ref.name}
                  className="group border border-slate-800 bg-black/60 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/50 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 transform hover:scale-105"
                >
                  <h4 className="text-lg font-bold mb-1 text-white group-hover:text-white">{ref.name}</h4>
                  <p className="text-slate-300 mb-2 group-hover:text-white">{ref.title}</p>
                  <div className="space-y-2 pt-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-200">E‑Mail:</span>
                      <a 
                        className="text-blue-400 hover:text-blue-300 text-sm break-all transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        href={`mailto:${ref.email}`}
                      >
                        {ref.email}
                      </a>
                    </div>
                    {ref.phone && (
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-200">Telefon:</span>
                        <span className="text-gray-300 text-sm group-hover:text-white">{ref.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


