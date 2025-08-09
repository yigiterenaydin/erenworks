'use client';

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef, useCallback, Fragment } from "react";
import {
  HomeIcon,
  UserCircleIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  Squares2X2Icon,
  EnvelopeIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';

interface HeaderProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
  onMobileMenuClose: () => void;
}

export default function Header({ 
  theme, 
  onThemeToggle, 
  isMobileMenuOpen, 
  onMobileMenuToggle, 
  onMobileMenuClose 
}: HeaderProps) {
  const prefersReducedMotion = useReducedMotion();
  const headerRef = useRef<HTMLElement | null>(null);
  const navigationItems = [
    { name: 'Startseite', href: '#home', Icon: HomeIcon },
    { name: 'Persönliches Profil', href: '#about', Icon: UserCircleIcon },
    { name: 'Schulische Unterlagen', href: '#reports', Icon: AcademicCapIcon },
    { name: 'Erfahrung', href: '#experience', Icon: BriefcaseIcon },
    { name: 'Projekte', href: '#projects', Icon: Squares2X2Icon },
    { name: 'Kontakt', href: '#contact', Icon: EnvelopeIcon }
  ];

  const [activeSection, setActiveSection] = useState<string>('home');

  const scrollToHash = useCallback((hash: string) => {
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;
    const headerHeight = headerRef.current?.offsetHeight ?? 80;
    const extra = 32; // mobile header + güvenli boşluk
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - extra;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const sectionIds = navigationItems.map((i) => i.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.1,
      }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.header 
      ref={headerRef}
      initial={prefersReducedMotion ? false : { y: -100, opacity: 0 }}
      animate={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
      transition={prefersReducedMotion ? undefined : { duration: 0.8, ease: "easeOut" }}
      className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-white/20 dark:border-slate-700/50 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
                     <motion.h1 
             whileHover={{ scale: 1.05 }}
             className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
           >
             Lebenslauf
           </motion.h1>
          
          {/* Desktop Pill Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav
              aria-label="Primary"
              className="flex items-center gap-1 rounded-full border border-slate-200/70 dark:border-slate-700/60 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)] px-2 py-2"
            >
              {navigationItems.map((item, index) => {
                const isActive = activeSection === item.href.replace('#', '');
                const ItemIcon = item.Icon;
                return (
                  <Fragment key={item.name}>
                    <motion.a
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); scrollToHash(item.href); }}
                      whileHover={prefersReducedMotion ? undefined : { y: -1 }}
                      aria-current={isActive ? 'page' : undefined}
                      className={`group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shadow-inner'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-indigo-400/70 dark:focus-visible:ring-offset-slate-900`}
                    >
                      {ItemIcon && (
                        <ItemIcon className={`${isActive ? 'text-slate-900 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200'} w-4 h-4`} />
                      )}
                      <span>{item.name}</span>
                    </motion.a>
                    {index < navigationItems.length - 1 && (
                      <span className="h-6 w-px bg-slate-200/80 dark:bg-slate-700/70" />
                    )}
                  </Fragment>
                );
              })}
              <span className="h-6 w-px bg-slate-200/80 dark:bg-slate-700/70" />
              <motion.button
                whileHover={prefersReducedMotion ? undefined : { rotate: 10 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                onClick={onThemeToggle}
                aria-label="Theme toggle"
                className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-indigo-400/70 dark:focus-visible:ring-offset-slate-900"
              >
                {theme === 'light' ? (
                  <MoonIcon className="w-5 h-5" />
                ) : (
                  <SunIcon className="w-5 h-5 text-yellow-400" />
                )}
              </motion.button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle (mobile) */}
            <motion.button
              whileHover={prefersReducedMotion ? undefined : { scale: 1.1, rotate: 180 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.9 }}
              onClick={onThemeToggle}
              className="md:hidden p-3 rounded-xl bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-slate-800 dark:to-indigo-800 hover:from-indigo-200 hover:to-purple-200 dark:hover:from-slate-700 dark:hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-indigo-400/70 dark:focus-visible:ring-offset-slate-900"
            >
              {theme === 'light' ? (
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={prefersReducedMotion ? undefined : { scale: 0.9 }}
              onClick={onMobileMenuToggle}
              className="md:hidden p-3 rounded-xl bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-slate-800 dark:to-indigo-800 hover:from-indigo-200 hover:to-purple-200 dark:hover:from-slate-700 dark:hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-indigo-400/70 dark:focus-visible:ring-offset-slate-900"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-slate-700 dark:bg-slate-300 rounded-full transition-all duration-300"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-0.5 bg-slate-700 dark:bg-slate-300 rounded-full mt-1 transition-all duration-300"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-slate-700 dark:bg-slate-300 rounded-full mt-1 transition-all duration-300"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: -20, scale: 0.95 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -20, scale: 0.95 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.4, ease: [0.4, 0, 0.2, 1], staggerChildren: 0.1 }}
            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-white/20 dark:border-slate-700/50 shadow-2xl"
          >
            <motion.div 
              className="px-6 py-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {navigationItems.map((item, index) => (
                  <motion.div
                  key={item.name}
                  variants={{
                    hidden: prefersReducedMotion ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -30, scale: 0.9 },
                    visible: prefersReducedMotion ? { opacity: 1, x: 0, scale: 1 } : { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 25 } }
                  }}
                    whileHover={prefersReducedMotion ? undefined : { x: 10, scale: 1.02, transition: { duration: 0.2 } }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                >
                  <motion.a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); onMobileMenuClose(); scrollToHash(item.href); }}
                    aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
                    className={`block text-xl font-semibold transition-all duration-300 py-4 px-4 rounded-xl border-b border-slate-200/50 dark:border-slate-700/50 last:border-b-0 group ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-50/80 dark:bg-emerald-900/30'
                        : 'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/80 dark:hover:bg-emerald-900/20'
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-indigo-400/70 dark:focus-visible:ring-offset-slate-900`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {item.name}
                      </span>
                      <motion.div
                        initial={prefersReducedMotion ? false : { opacity: 0, x: -10 }}
                        animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                        transition={prefersReducedMotion ? undefined : { delay: 0.3 + index * 0.1 }}
                        className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </motion.a>
                </motion.div>
              ))}
              
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-700/50"
              >
                                                  <div className="flex justify-center space-x-6">
                   {[
                      { 
                        name: 'Instagram', 
                        href: 'https://www.instagram.com/eren_zhhh/',
                        icon: (
                          <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                         </svg>
                       )
                     },
                     { 
                       name: 'GitHub', 
                       href: 'https://github.com/yigiterenaydin',
                        icon: (
                          <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                         </svg>
                       )
                     },
                     { 
                       name: 'Email', 
                       href: 'mailto:eren.yigit.aydin@gmail.com',
                        icon: (
                          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                         </svg>
                       )
                     },
                     { 
                       name: 'WhatsApp', 
                       href: 'https://wa.me/0041762925353',
                        icon: (
                          <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                         </svg>
                       )
                     }
                   ].map((social) => (
                      <motion.a
                       key={social.name}
                       href={social.href}
                       target="_blank"
                       rel="noopener noreferrer"
                       whileHover={{ scale: 1.2, y: -3 }}
                       whileTap={{ scale: 0.9 }}
                        aria-label={`${social.name} – öffnet in neuem Tab`}
                        className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-indigo-400/70 dark:focus-visible:ring-offset-slate-900"
                     >
                       {social.icon}
                     </motion.a>
                   ))}
                 </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


