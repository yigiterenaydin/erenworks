'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Konsola logla; prod'da Sentry/Log service entegre edilebilir
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-screen bg-rose-50/60 dark:bg-slate-900/50 backdrop-blur-sm flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full bg-white/80 dark:bg-slate-800/80 border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl p-8 text-center"
      >
        <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-pink-600 flex items-center justify-center text-white text-2xl font-bold">
          !
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">Etwas ist schiefgelaufen</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut oder kehre zur Startseite zurück.
        </p>
        {error?.digest && (
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Fehler‑ID: {error.digest}</p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={reset}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow"
          >
            Erneut versuchen
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#home"
            className="px-6 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold"
          >
            Zur Startseite
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}



