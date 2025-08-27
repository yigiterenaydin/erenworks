import Image from 'next/image';
import { useState } from 'react';
import React from 'react';

// Image optimization utilities
export const imageOptimization = {
  // Get optimized image props
  getOptimizedProps: (src: string, alt: string, width?: number, height?: number) => ({
    src,
    alt,
    width: width || 800,
    height: height || 600,
    quality: 85,
    priority: false,
    loading: 'lazy' as const,
    placeholder: 'blur' as const,
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
  }),

  // Get hero image props (high priority)
  getHeroProps: (src: string, alt: string, width?: number, height?: number) => ({
    src,
    alt,
    width: width || 1200,
    height: height || 800,
    quality: 90,
    priority: true,
    loading: 'eager' as const,
    placeholder: 'blur' as const,
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
  }),

  // Get thumbnail props (small, fast loading)
  getThumbnailProps: (src: string, alt: string, width?: number, height?: number) => ({
    src,
    alt,
    width: width || 300,
    height: height || 200,
    quality: 75,
    priority: false,
    loading: 'lazy' as const,
    placeholder: 'blur' as const,
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
  }),
};

// Optimized Image Component
export const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  priority = false,
  quality = 85,
  ...props 
}: {
  src: string | unknown;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  [key: string]: unknown;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const imageProps = priority 
    ? imageOptimization.getHeroProps(src as string, alt, width, height)
    : imageOptimization.getOptimizedProps(src as string, alt, width, height);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}
      
      {error ? (
        <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-lg">
          <span className="text-gray-500 text-sm">Image failed to load</span>
        </div>
      ) : (
        <Image
          {...imageProps}
          {...props}
          src={src}
          quality={quality}
          priority={priority}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setError(true);
            setIsLoading(false);
          }}
          className={`transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${className}`}
        />
      )}
    </div>
  );
};

// Lazy Image Component with Intersection Observer
export const LazyImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  threshold = 0.1,
  ...props 
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  threshold?: number;
  [key: string]: unknown;
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const imageRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={imageRef} className={`relative overflow-hidden ${className}`}>
      {!isInView && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}
      
      {isInView && !error && (
        <Image
          alt={alt}
          {...imageOptimization.getOptimizedProps(src, alt, width, height)}
          {...props}
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
          className={`transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
        />
      )}
      
      {error && (
        <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-lg">
          <span className="text-gray-500 text-sm">Image failed to load</span>
        </div>
      )}
    </div>
  );
};
