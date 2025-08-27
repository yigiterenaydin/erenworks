"use client";

import Header from "@/components/layout/Header";
import AnimatedBackground from "@/components/layout/AnimatedBackground";
import BackToTop from "@/components/shared/BackToTop";

// AppShell: Sayfanın iskeletini yönetir (tema, mobil menü, header ve arka plan)
// Bu bileşen sayfanın ortak iskeletini taşır; içerik bölümleri children olarak gelir
import { useEffect, useState, useCallback } from "react";


interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [autoTheme, setAutoTheme] = useState(true); // Otomatik tema aktif

  // Otomatik tema fonksiyonu
  const getAutoTheme = useCallback(() => {
    const hour = new Date().getHours();
    // 6:00 - 18:00 arası light, diğer zamanlar dark
    return hour >= 6 && hour < 18 ? 'light' : 'dark';
  }, []);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const savedAutoTheme = localStorage.getItem('autoTheme');
    
    if (savedAutoTheme !== null) {
      setAutoTheme(savedAutoTheme === 'true');
    }
    
    if (savedTheme && !autoTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(getAutoTheme());
    }
    
    setIsLoaded(true);
  }, [autoTheme, getAutoTheme]);

  // Theme transition
  useEffect(() => {
    if (!mounted) return;
    const timer = setTimeout(() => {
      const root = document.documentElement;
      root.style.transition = '';
    }, 500);
    return () => clearTimeout(timer);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    
    // Smooth transition for theme change
    root.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  // Otomatik tema kontrolü - her dakika kontrol et (memory leak prevention)
  const checkAutoTheme = useCallback(() => {
    const newTheme = getAutoTheme();
    if (newTheme !== theme) {
      setTheme(newTheme);
    }
  }, [getAutoTheme, theme]);

  useEffect(() => {
    if (!autoTheme) return;
    const interval = setInterval(checkAutoTheme, 60000);
    return () => clearInterval(interval);
  }, [autoTheme, checkAutoTheme]);

  // Manuel tema toggle
  const toggleTheme = useCallback(() => {
    if (autoTheme) {
      // Otomatik moddan çık, manuel moda geç
      setAutoTheme(false);
      setTheme(theme === 'light' ? 'dark' : 'light');
      localStorage.setItem('autoTheme', 'false');
    } else {
      // Manuel modda tema değiştir
      setTheme(prev => prev === 'light' ? 'dark' : 'light');
    }
  }, [autoTheme, theme]);

  // Otomatik tema toggle
  const toggleAutoTheme = useCallback(() => {
    setAutoTheme(prev => !prev);
    localStorage.setItem('autoTheme', (!autoTheme).toString());
    if (!autoTheme) {
      // Otomatik moda geç
      setTheme(getAutoTheme());
    }
  }, [autoTheme, getAutoTheme]);

  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(!isMobileMenuOpen), [isMobileMenuOpen]);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  if (!mounted || !isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 transition-all duration-500">
      <AnimatedBackground />
      <Header
        theme={theme}
        autoTheme={autoTheme}
        onThemeToggle={toggleTheme}
        onAutoThemeToggle={toggleAutoTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={toggleMobileMenu}
        onMobileMenuClose={closeMobileMenu}
      />
      {children}
      <BackToTop />
    </div>
  );
}


