import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="h-16 bg-white dark:bg-slate-800 rounded-lg shadow-sm animate-pulse mb-4" />
          <div className="h-4 bg-white dark:bg-slate-800 rounded w-1/3 animate-pulse" />
        </div>

        {/* Hero Section Skeleton */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-4">
              <div className="h-8 bg-white dark:bg-slate-800 rounded w-3/4 animate-pulse" />
              <div className="h-6 bg-white dark:bg-slate-800 rounded w-1/2 animate-pulse" />
              <div className="h-4 bg-white dark:bg-slate-800 rounded w-2/3 animate-pulse" />
              <div className="h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg w-48 animate-pulse" />
            </div>
            
            {/* Profile Card Skeleton */}
            <div className="relative">
              <div className="aspect-[0.718] bg-white dark:bg-slate-800 rounded-3xl shadow-lg animate-pulse overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 animate-pulse" />
                <div className="absolute bottom-4 left-4 right-4 h-16 bg-white/10 dark:bg-slate-700/10 rounded-xl backdrop-blur-sm animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Sections Skeleton */}
        <div className="space-y-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="h-8 bg-white dark:bg-slate-800 rounded w-1/4 animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm animate-pulse">
                  <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-4" />
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2" />
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-6">
            <div className="h-8 bg-white dark:bg-slate-800 rounded w-1/4 animate-pulse" />
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm animate-pulse">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/3" />
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/6" />
                  </div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mb-2" />
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="space-y-6">
            <div className="h-8 bg-white dark:bg-slate-800 rounded w-1/4 animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm animate-pulse">
                  <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-4" />
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2" />
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3 mb-4" />
                  <div className="flex gap-2">
                    <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-16" />
                    <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-20" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <div className="h-8 bg-white dark:bg-slate-800 rounded w-1/4 animate-pulse" />
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm animate-pulse">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2" />
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
                </div>
                <div className="space-y-4">
                  <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded" />
                  <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded" />
                  <div className="h-24 bg-slate-200 dark:bg-slate-700 rounded" />
                  <div className="h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded w-32" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="fixed bottom-8 right-8">
          <div className="bg-white dark:bg-slate-800 rounded-full p-4 shadow-lg">
            <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </div>
    </div>
  );
}
