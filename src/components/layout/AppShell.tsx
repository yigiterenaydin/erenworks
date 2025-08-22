"use client";

import Header from "@/components/layout/Header";
import AnimatedBackground from "@/components/layout/AnimatedBackground";
import BackToTop from "@/components/shared/BackToTop";

// AppShell: Sayfanın iskeletini yönetir (tema, mobil menü, header ve arka plan)
// Bu bileşen sayfanın ortak iskeletini taşır; içerik bölümleri children olarak gelir
import { useEffect, useState } from "react";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) setTheme(savedTheme);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    
    // Smooth transition for theme change
    root.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
    
    // Remove transition after animation completes
    const timer = setTimeout(() => {
      root.style.transition = '';
    }, 500);
    
    return () => clearTimeout(timer);
  }, [theme, mounted]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
        onThemeToggle={toggleTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={toggleMobileMenu}
        onMobileMenuClose={closeMobileMenu}
      />
      {children}
      <BackToTop />
    </div>
  );
}


