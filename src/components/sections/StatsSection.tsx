'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';



// Animated Counter Component
function AnimatedCounter({ value, isInView }: { value: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <motion.span
      className="inline-block"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {count}
    </motion.span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  // Burada rakamları güncelleyebilirsiniz
  const stats = [
    {
      number: 12,
      label: "Schnupperlehren",
      description: "so viele Schnupperlehren habe ich bisher besucht.",
      color: "bg-gradient-to-br from-blue-600 to-indigo-700"
    },
    {
      number: 8,
      label: "Lehrstellenbewerbungen",
      description: " für eine Lehrstelle habe ich bisher abgeschickt.",
      color: "bg-gradient-to-br from-emerald-600 to-teal-700"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
                     <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
             Meine Bewerbungsstatistiken
           </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Aktuelle Zahlen zu meinen Schnupperlehren und Bewerbungen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`relative overflow-hidden rounded-2xl p-8 text-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:rotate-1 ${stat.color} group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-400/20`}>
                
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="text-4xl md:text-5xl font-bold relative inline-block">
                      <AnimatedCounter value={stat.number} isInView={isInView} />
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-white/20 blur-xl rounded-full animate-pulse"></div>
                    </div>
                    
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">
                    {stat.label}
                  </h3>
                  
                  <p className="text-slate-100 text-sm md:text-base leading-relaxed">
                    {stat.description}
                  </p>
                  
                  {/* Animated border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Update Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
