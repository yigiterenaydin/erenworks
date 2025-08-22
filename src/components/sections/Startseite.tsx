'use client';

import { motion, useReducedMotion } from "framer-motion";
import ProfileCard from "../shared/ProfileCard";
import erenPhoto from "../../../public/assets/bilder/eren-photo.png";

interface StartseiteProps {
  name: string;
}

export default function Startseite({ name }: StartseiteProps) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="home" className="relative pt-20 pb-16 bg-rose-50/60 dark:bg-slate-800/30 backdrop-blur-sm section-anchor">

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -50 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-2xl">
              <motion.h1 
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? undefined : { duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg font-medium text-slate-900 dark:text-white md:text-xl lg:text-2xl"
              >
                Hallo, mein Name ist{" "}
                                 <span className="block font-bold text-transparent text-3xl sm:text-4xl mt-2 mb-3 lg:text-6xl lg:mt-3 lg:mb-4 bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 leading-tight">
                   {name} Aydin.
                 </span>
              </motion.h1>

              <motion.div 
                initial={prefersReducedMotion ? false : { opacity: 0, width: 0 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, width: "100%" }}
                transition={prefersReducedMotion ? undefined : { duration: 0.8, delay: 0.6 }}
                className="w-36 sm:w-20 lg:w-64 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-6"
              ></motion.div>

              <motion.h2 
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? undefined : { duration: 0.8, delay: 0.8 }}
                className="font-light text-slate-900 dark:text-white text-base sm:text-lg mb-6 lg:text-2xl lg:mb-8 leading-relaxed"
              >
                Ich bin {" "}
                                 <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-base sm:text-lg lg:text-2xl">
                   freundlich und höflich.
                 </span>
              </motion.h2>

              <motion.blockquote 
                initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                transition={prefersReducedMotion ? undefined : { duration: 0.8, delay: 1.0 }}
                className="relative p-6 sm:p-8 mb-6 sm:mb-8 rounded-2xl overflow-hidden"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20"></div>
                
                {/* Border Gradient */}
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400">
                  <div className="absolute inset-0 rounded-2xl bg-white dark:bg-slate-900"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">&quot;</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base lg:text-lg italic leading-relaxed mb-3">
                        &quot;Nicht das Fallen ist wichtig, sondern jedes Mal wieder aufzustehen.&quot;
                      </p>
                      <cite className="block text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-semibold">
                        — Confucius
                      </cite>
                    </div>
                  </div>
                </div>
              </motion.blockquote>

              <motion.div 
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? undefined : { duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <motion.a
                  href="https://github.com/yigiterenaydin"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Projekte ansehen – öffnet in neuem Tab"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-indigo-300/80 dark:focus-visible:ring-offset-slate-900 transition-base"
                >
                  Projekte ansehen
                </motion.a>
                <motion.a
                  href="/assets/pdfs/ErenLebensL.pdf"
                  download="ErenLebensL.pdf"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-indigo-300/80 dark:focus-visible:ring-offset-slate-900 transition-base"
                >
                  Lebenslauf herunterladen
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 50 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <ProfileCard
              name="Eren Aydin"
              title="Schüler"
              handle="eren_aydin"
              status="Online"
              contactText="Kontakt"
              avatarUrl={erenPhoto}
              miniAvatarUrl={erenPhoto}
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 480px"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
