import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  animate?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  width,
  height,
  rounded = 'md',
  animate = true,
}) => {
  const baseClasses = 'bg-slate-200 dark:bg-slate-700';
  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  const skeletonClasses = `${baseClasses} ${roundedClasses[rounded]} ${animate ? 'animate-pulse' : ''} ${className}`;

  return (
    <motion.div
      className={skeletonClasses}
      style={{
        width: width,
        height: height,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
};

// Predefined skeleton components
export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({
  lines = 1,
  className = '',
}) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        height="1rem"
        width={i === lines - 1 ? '75%' : '100%'}
        className="mb-1"
      />
    ))}
  </div>
);

export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm ${className}`}>
    <Skeleton height="1.5rem" width="75%" className="mb-4" />
    <SkeletonText lines={2} />
  </div>
);

export const SkeletonAvatar: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className = '',
}) => (
  <Skeleton
    width={size}
    height={size}
    rounded="full"
    className={className}
  />
);

export const SkeletonButton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <Skeleton
    height="2.5rem"
    width="8rem"
    rounded="lg"
    className={className}
  />
);

export const SkeletonImage: React.FC<{ aspectRatio?: string; className?: string }> = ({
  aspectRatio = '16/9',
  className = '',
}) => (
  <div
    className={`bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse ${className}`}
    style={{ aspectRatio }}
  />
);

export const SkeletonProfileCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative ${className}`}>
    <div className="aspect-[0.718] bg-white dark:bg-slate-800 rounded-3xl shadow-lg animate-pulse overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 animate-pulse" />
      <div className="absolute bottom-4 left-4 right-4 h-16 bg-white/10 dark:bg-slate-700/10 rounded-xl backdrop-blur-sm animate-pulse" />
    </div>
  </div>
);

export const SkeletonHeader: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`space-y-4 ${className}`}>
    <Skeleton height="4rem" width="100%" rounded="lg" />
    <Skeleton height="1rem" width="33%" />
  </div>
);

export const SkeletonForm: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`space-y-4 ${className}`}>
    <Skeleton height="3rem" width="100%" rounded="md" />
    <Skeleton height="3rem" width="100%" rounded="md" />
    <Skeleton height="6rem" width="100%" rounded="md" />
    <SkeletonButton />
  </div>
);

export const SkeletonGrid: React.FC<{
  cols?: number;
  rows?: number;
  className?: string;
}> = ({ cols = 3, rows = 2, className = '' }) => (
  <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-6 ${className}`}>
    {Array.from({ length: cols * rows }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

export default Skeleton;
