'use client';

import { useEffect, useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

interface BackToTopProps {
  // Scroll amount after which the button becomes visible
  showAfter?: number;
}

export default function BackToTop({ showAfter = 0 }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > showAfter);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [showAfter]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      aria-label="Nach oben"
      title="Nach oben"
      onClick={handleClick}
      className="fixed right-4 bottom-4 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-black/70 text-white shadow-lg backdrop-blur hover:bg-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-opacity duration-300"
    >
      <ChevronUpIcon className="h-6 w-6" />
    </button>
  );
}


