'use client';

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ProfileCard from "../shared/ProfileCard";

interface StartseiteProps {
  name: string;
}

export default function Startseite({ name }: StartseiteProps) {
  const stats = [
    {
      value: 12,
      label: 'Schnupperlehren, an denen ich bisher teilnehmen durfte',
    },
    {
      value: 6,
      label: 'Bisher von mir versandte Bewerbungen für Lehrstellen',
    },
  ];
  return (
    <section id="home" className="relative pt-20 pb-16 bg-rose-50/60 dark:bg-slate-800/30 backdrop-blur-sm section-anchor">

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-2xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg font-medium text-slate-900 dark:text-white md:text-xl lg:text-2xl"
              >
                Hallo, mein Name ist{" "}
                          <span className="block font-bold text-transparent text-3xl sm:text-4xl mt-2 mb-3 lg:text-6xl lg:mt-3 lg:mb-4 bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 leading-tight">
            {name} Aydin.
          </span>
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-36 sm:w-20 lg:w-64 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-6"
              ></motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="font-light text-slate-900 dark:text-white text-base sm:text-lg mb-6 lg:text-2xl lg:mb-8 leading-relaxed"
              >
                Ich bin {" "}
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-base sm:text-lg lg:text-2xl">
                  <TypeAnimation
                    sequence={[
                      "freundlich und höflich.",
                      1500,
                      "mit anderen respektvoll und fair.",
                      1500,
                      "bei wichtigen Themen offen.",
                      1500,
                      "gut darin, mit Menschen aus verschiedenen Kulturen auszukommen.",
                      1500,
                      "sorgfältig und aufmerksam bei der Erledigung von Aufgaben.",
                      1500,
                      "offen für Neues und kann mich gut anpassen.",
                      1500,
                      "auch in stressigen Situationen ruhig.",
                      1500,
                    ]}
                    wrapper="span"
                    speed={70}
                    repeat={Infinity}
                    cursor={true}
                  />
                </span>
              </motion.h2>

              <motion.blockquote 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <motion.a
                  href="https://github.com/yigiterenaydin"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Projekte ansehen
                </motion.a>
                <motion.a
                  href="/assets/pdfs/ErenLebensL.pdf"
                  download="ErenLebensL.pdf"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 animate-pulse"
                >
                  Lebenslauf herunterladen
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <ProfileCard
              name="Eren Aydin"
              title="Schüler"
              handle="eren_aydin"
              status="Online"
              contactText="Kontakt"
              avatarUrl="/assets/bilder/eren-photo.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </motion.div>
        </div>

        {/* Stats Row (test) */}
        <div className="mt-10">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white mb-4">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            Meine Zahlen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-900/70 to-slate-800/40 text-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-extrabold bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
                    {s.value}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
