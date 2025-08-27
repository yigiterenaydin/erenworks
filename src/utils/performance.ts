// Performance monitoring utilities
export const performanceUtils = {
  // Measure bundle load time
  measureBundleLoad: () => {
    if (typeof window !== 'undefined') {
      const start = performance.now();
      
      return {
        start,
        end: () => {
          const end = performance.now();
          const duration = end - start;
          console.log(`Bundle load time: ${duration.toFixed(2)}ms`);
          return duration;
        }
      };
    }
    return { start: 0, end: () => 0 };
  },

  // Measure component render time
  measureRender: (componentName: string) => {
    if (typeof window !== 'undefined') {
      const start = performance.now();
      
      return {
        start,
        end: () => {
          const end = performance.now();
          const duration = end - start;
          console.log(`${componentName} render time: ${duration.toFixed(2)}ms`);
          return duration;
        }
      };
    }
    return { start: 0, end: () => 0 };
  },

  // Check if code splitting is working
  checkCodeSplitting: () => {
    if (typeof window !== 'undefined') {
      const scripts = document.querySelectorAll('script[src]');
      const dynamicScripts = Array.from(scripts).filter(script => 
        script.getAttribute('src')?.includes('chunk')
      );
      
      console.log(`Dynamic chunks loaded: ${dynamicScripts.length}`);
      return dynamicScripts.length;
    }
    return 0;
  },

  // Monitor memory usage
  getMemoryUsage: () => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as { memory: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      return {
        used: Math.round(memory.usedJSHeapSize / 1048576), // MB
        total: Math.round(memory.totalJSHeapSize / 1048576), // MB
        limit: Math.round(memory.jsHeapSizeLimit / 1048576), // MB
      };
    }
    return null;
  }
};

// Bundle size optimization helpers
export const bundleOptimization = {
  // Lazy load with error boundary
  lazyLoad: (importFn: () => Promise<unknown>, fallback?: React.ComponentType) => {
    return {
      component: importFn,
      fallback: fallback || (() => <div>Loading...</div>),
      errorBoundary: true,
    };
  },

  // Preload critical resources
  preloadCritical: () => {
    if (typeof window !== 'undefined') {
      // Preload critical CSS
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = '/globals.css';
      document.head.appendChild(link);
    }
  },

  // Optimize images
  optimizeImages: () => {
    if (typeof window !== 'undefined') {
      // Intersection Observer for lazy loading images
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }
};
