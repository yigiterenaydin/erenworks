'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Enhanced error logging
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    
    // Console log for development
    console.error('Enhanced Error Details:', errorInfo);
    
    // In production, you could send to error tracking service
    // Example: Sentry, LogRocket, etc.
  }, [error]);

  // Enhanced error type detection
  const getErrorType = () => {
    if (error.message.includes('fetch') || error.message.includes('network')) {
      return 'network';
    }
    if (error.message.includes('API') || error.message.includes('server')) {
      return 'api';
    }
    if (error.message.includes('component') || error.message.includes('render')) {
      return 'component';
    }
    return 'general';
  };

  const getErrorMessage = () => {
    const errorType = getErrorType();
    
    switch (errorType) {
      case 'network':
        return {
          title: 'Verbindungsproblem',
          description: 'Es gab ein Problem mit der Internetverbindung. Bitte überprüfen Sie Ihre Verbindung und versuchen Sie es erneut.',
          solution: 'Internetverbindung prüfen und Seite neu laden'
        };
      case 'api':
        return {
          title: 'Server Problem',
          description: 'Der Server ist momentan nicht erreichbar. Das Problem liegt nicht bei Ihnen.',
          solution: 'In einigen Minuten erneut versuchen'
        };
      case 'component':
        return {
          title: 'Anzeigefehler',
          description: 'Es gab ein Problem beim Laden dieser Seite. Das sollte sich schnell beheben lassen.',
          solution: 'Seite neu laden oder zur Startseite zurückkehren'
        };
      default:
        return {
          title: 'Unerwarteter Fehler',
          description: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
          solution: 'Seite neu laden oder zur Startseite zurückkehren'
        };
    }
  };

  const errorInfo = getErrorMessage();

  return (
    <section className="min-h-screen bg-rose-50/60 dark:bg-slate-900/50 backdrop-blur-sm flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full bg-white/80 dark:bg-slate-800/80 border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl p-8 text-center"
      >
        <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center text-white text-2xl font-bold">
          ⚠️
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">{errorInfo.title}</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          {errorInfo.description}
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            <strong>Lösung:</strong> {errorInfo.solution}
          </p>
        </div>
        {error?.digest && (
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Fehler‑ID: {error.digest}</p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={reset}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow hover:shadow-lg transition-shadow"
          >
            🔄 Erneut versuchen
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#home"
            className="px-6 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold transition-colors"
          >
            🏠 Zur Startseite
          </motion.a>
        </div>
        
        {/* Developer info - only visible in development */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
              🔧 Entwickler-Details (nur in Entwicklung)
            </summary>
            <div className="mt-2 p-3 bg-slate-100 dark:bg-slate-700 rounded text-xs font-mono text-slate-600 dark:text-slate-300 overflow-auto">
              <p><strong>Error:</strong> {error.message}</p>
              <p><strong>Type:</strong> {getErrorType()}</p>
              <p><strong>Time:</strong> {new Date().toLocaleString('de-CH')}</p>
            </div>
          </details>
        )}
      </motion.div>
    </section>
  );
}



