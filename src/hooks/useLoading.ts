import { useState, useCallback, useEffect } from 'react';

interface UseLoadingOptions {
  initialLoading?: boolean;
  delay?: number;
  minDuration?: number;
}

export const useLoading = (options: UseLoadingOptions = {}) => {
  const { initialLoading = false, delay = 0, minDuration = 0 } = options;
  
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [startTime, setStartTime] = useState<number | null>(null);

  const startLoading = useCallback(() => {
    setStartTime(Date.now());
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    const elapsed = startTime ? Date.now() - startTime : 0;
    const remainingTime = Math.max(0, minDuration - elapsed);

    if (remainingTime > 0) {
      setTimeout(() => {
        setIsLoading(false);
        setStartTime(null);
      }, remainingTime);
    } else {
      setIsLoading(false);
      setStartTime(null);
    }
  }, [startTime, minDuration]);

  const withLoading = useCallback(async <T>(asyncFn: () => Promise<T>): Promise<T> => {
    startLoading();
    try {
      const result = await asyncFn();
      return result;
    } finally {
      stopLoading();
    }
  }, [startLoading, stopLoading]);

  const delayedLoading = useCallback(async <T>(asyncFn: () => Promise<T>): Promise<T> => {
    if (delay > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    return withLoading(asyncFn);
  }, [delay, withLoading]);

  // Auto-loading for component mount
  useEffect(() => {
    if (initialLoading) {
      startLoading();
    }
  }, [initialLoading, startLoading]);

  return {
    isLoading,
    startLoading,
    stopLoading,
    withLoading,
    delayedLoading,
  };
};

// Hook for managing multiple loading states
export const useMultiLoading = () => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  const startLoading = useCallback((key: string) => {
    setLoadingStates(prev => ({ ...prev, [key]: true }));
  }, []);

  const stopLoading = useCallback((key: string) => {
    setLoadingStates(prev => ({ ...prev, [key]: false }));
  }, []);

  const isLoading = useCallback((key: string) => {
    return loadingStates[key] || false;
  }, [loadingStates]);

  const isAnyLoading = useCallback(() => {
    return Object.values(loadingStates).some(Boolean);
  }, [loadingStates]);

  const withLoading = useCallback(async <T>(
    key: string,
    asyncFn: () => Promise<T>
  ): Promise<T> => {
    startLoading(key);
    try {
      const result = await asyncFn();
      return result;
    } finally {
      stopLoading(key);
    }
  }, [startLoading, stopLoading]);

  return {
    loadingStates,
    startLoading,
    stopLoading,
    isLoading,
    isAnyLoading,
    withLoading,
  };
};

// Hook for managing page loading
export const usePageLoading = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate page loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsPageLoading(false);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const resetPageLoading = useCallback(() => {
    setIsPageLoading(true);
    setProgress(0);
  }, []);

  return {
    isPageLoading,
    progress,
    resetPageLoading,
  };
};

// Hook for managing image loading
export const useImageLoading = (src: string) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!src) {
      setIsImageLoading(false);
      return;
    }

    setIsImageLoading(true);
    setHasError(false);

    const img = new Image();
    
    img.onload = () => {
      setIsImageLoading(false);
    };

    img.onerror = () => {
      setIsImageLoading(false);
      setHasError(true);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return {
    isImageLoading,
    hasError,
  };
};

// Hook for managing form submission loading
export const useFormLoading = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const submitForm = useCallback(async <T>(
    submitFn: () => Promise<T>
  ): Promise<T | null> => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await submitFn();
      return result;
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An error occurred');
      return null;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const resetForm = useCallback(() => {
    setIsSubmitting(false);
    setSubmitError(null);
  }, []);

  return {
    isSubmitting,
    submitError,
    submitForm,
    resetForm,
  };
};
