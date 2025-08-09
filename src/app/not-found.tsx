'use client';

import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <section className="min-h-screen bg-rose-50/60 dark:bg-slate-900/50 backdrop-blur-sm flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full bg-white/80 dark:bg-slate-800/80 border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl p-8 text-center"
      >
        <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-pink-600 flex items-center justify-center text-white text-2xl font-bold">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">Seite nicht gefunden</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <motion.a
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          href="#home"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow"
        >
          Zur Startseite
        </motion.a>
      </motion.div>
    </section>
  );
}



