import { useEffect, useRef } from 'react';

// Memory leak prevention utilities
export const memoryLeakPrevention = {
  // Clean up event listeners
  cleanupEventListeners: (element: HTMLElement | Window, events: string[]) => {
    return () => {
      events.forEach(event => {
        element.removeEventListener(event, () => {});
      });
    };
  },

  // Clean up timers
  cleanupTimers: (timers: (NodeJS.Timeout | number)[]) => {
    return () => {
      timers.forEach(timer => {
        if (typeof timer === 'number') {
          clearTimeout(timer);
        } else {
          clearTimeout(timer);
        }
      });
    };
  },

  // Clean up animation frames
  cleanupAnimationFrames: (frames: number[]) => {
    return () => {
      frames.forEach(frame => {
        cancelAnimationFrame(frame);
      });
    };
  },

  // Clean up observers
  cleanupObservers: (observers: (IntersectionObserver | ResizeObserver | MutationObserver)[]) => {
    return () => {
      observers.forEach(observer => {
        observer.disconnect();
      });
    };
  },

  // Clean up all resources
  cleanupAll: (resources: {
    eventListeners?: Array<{ element: HTMLElement | Window; events: string[] }>;
    timers?: (NodeJS.Timeout | number)[];
    animationFrames?: number[];
    observers?: (IntersectionObserver | ResizeObserver | MutationObserver)[];
  }) => {
    return () => {
      // Clean up event listeners
      if (resources.eventListeners) {
        resources.eventListeners.forEach(({ element, events }) => {
          events.forEach(event => {
            element.removeEventListener(event, () => {});
          });
        });
      }

      // Clean up timers
      if (resources.timers) {
        resources.timers.forEach(timer => {
          if (typeof timer === 'number') {
            clearTimeout(timer);
          } else {
            clearTimeout(timer);
          }
        });
      }

      // Clean up animation frames
      if (resources.animationFrames) {
        resources.animationFrames.forEach(frame => {
          cancelAnimationFrame(frame);
        });
      }

      // Clean up observers
      if (resources.observers) {
        resources.observers.forEach(observer => {
          observer.disconnect();
        });
      }
    };
  },
};

// Custom hook for event listeners with cleanup
export const useEventListener = (
  element: HTMLElement | Window | null,
  event: string,
  handler: EventListener,
  options?: AddEventListenerOptions
) => {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!element) return;

    const eventListener = (event: Event) => savedHandler.current(event);
    element.addEventListener(event, eventListener, options);

    return () => {
      element.removeEventListener(event, eventListener, options);
    };
  }, [element, event, options]);
};

// Custom hook for timers with cleanup
export const useTimer = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setTimeout(() => savedCallback.current(), delay);
    return () => clearTimeout(id);
  }, [delay]);
};

// Custom hook for intervals with cleanup
export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
};

// Custom hook for animation frames with cleanup
export const useAnimationFrame = (callback: () => void, isActive: boolean = true) => {
  const savedCallback = useRef(callback);
  const frameRef = useRef<number>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!isActive) return;

    const animate = () => {
      savedCallback.current();
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isActive]);
};

// Custom hook for intersection observer with cleanup
export const useIntersectionObserver = (
  element: HTMLElement | null,
  options: IntersectionObserverInit,
  callback: IntersectionObserverCallback
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!element) return;

    observerRef.current = new IntersectionObserver(callback, options);
    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [element, options, callback]);
};

// Custom hook for resize observer with cleanup
export const useResizeObserver = (
  element: HTMLElement | null,
  callback: ResizeObserverCallback
) => {
  const observerRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    if (!element) return;

    observerRef.current = new ResizeObserver(callback);
    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [element, callback]);
};

// Custom hook for mutation observer with cleanup
export const useMutationObserver = (
  element: HTMLElement | null,
  options: MutationObserverInit,
  callback: MutationCallback
) => {
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    if (!element) return;

    observerRef.current = new MutationObserver(callback);
    observerRef.current.observe(element, options);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [element, options, callback]);
};

// Custom hook for scroll events with throttling and cleanup
export const useScrollListener = (
  callback: (scrollY: number, scrollX: number) => void,
  throttleMs: number = 16
) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);
  const lastScrollX = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) return;

      timeoutRef.current = setTimeout(() => {
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        if (scrollY !== lastScrollY.current || scrollX !== lastScrollX.current) {
          lastScrollY.current = scrollY;
          lastScrollX.current = scrollX;
          callback(scrollY, scrollX);
        }

        timeoutRef.current = null;
      }, throttleMs);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [callback, throttleMs]);
};

// Custom hook for resize events with debouncing and cleanup
export const useResizeListener = (
  callback: (width: number, height: number) => void,
  debounceMs: number = 250
) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastWidth = useRef(0);
  const lastHeight = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        if (width !== lastWidth.current || height !== lastHeight.current) {
          lastWidth.current = width;
          lastHeight.current = height;
          callback(width, height);
        }
      }, debounceMs);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [callback, debounceMs]);
};

// Utility function to check for memory leaks in development
export const checkMemoryLeaks = () => {
  if (process.env.NODE_ENV === 'development') {
    // Check for event listeners
    const eventListeners = getEventListeners?.();
    if (eventListeners) {
      console.log('🔍 Event Listeners:', eventListeners);
    }

    // Check for timers
    const activeTimers = (global as { __timers?: unknown[] }).__timers || [];
    if (activeTimers.length > 0) {
      console.warn('⚠️ Active Timers:', activeTimers.length);
    }

    // Check for animation frames
    const activeFrames = (global as { __animationFrames?: unknown[] }).__animationFrames || [];
    if (activeFrames.length > 0) {
      console.warn('⚠️ Active Animation Frames:', activeFrames.length);
    }
  }
};

// Global cleanup function for app-wide cleanup
export const globalCleanup = () => {
  // Clear all timeouts
  const highestTimeoutId = setTimeout(() => {}, 0);
  for (let i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i);
  }

  // Clear all intervals
  const highestIntervalId = setInterval(() => {}, 0);
  for (let i = 0; i < highestIntervalId; i++) {
    clearInterval(i);
  }

  // Remove all event listeners (basic cleanup)
  const events = ['scroll', 'resize', 'click', 'keydown', 'keyup', 'mousedown', 'mouseup'];
  events.forEach(event => {
    window.removeEventListener(event, () => {});
  });

  console.log('🧹 Global cleanup completed');
};
