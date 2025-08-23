'use client';

import { motion } from "framer-motion";

export default function Technologies() {
  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-blue-500 to-blue-600' },
    { name: 'TypeScript', icon: '🔷', color: 'from-blue-600 to-blue-700' },
    { name: 'Tailwind', icon: '🎨', color: 'from-cyan-500 to-blue-500' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-cyan-500' },
    { name: 'Render', icon: '☁️', color: 'from-blue-400 to-blue-600' },
    { name: 'CSS', icon: '💎', color: 'from-blue-400 to-blue-500' },
    { name: 'Next.js', icon: '⚡', color: 'from-black to-gray-800' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-600' },
    { name: 'GitHub', icon: '🐙', color: 'from-gray-800 to-black' },
    { name: 'Vercel', icon: '▲', color: 'from-black to-gray-800' },
    { name: 'n8n', icon: '⚙️', color: 'from-orange-500 to-red-500' },
    { name: 'Gmail', icon: '📧', color: 'from-red-500 to-red-600' },
    { name: 'Framer', icon: '✨', color: 'from-purple-500 to-pink-500' },
    { name: 'ESLint', icon: '🔍', color: 'from-purple-600 to-purple-700' },
    { name: 'PostCSS', icon: '🎯', color: 'from-pink-500 to-pink-600' },
    { name: 'npm', icon: '📦', color: 'from-red-500 to-red-600' },
    { name: 'JavaScript', icon: '🟡', color: 'from-yellow-500 to-yellow-600' },
    { name: 'HTML', icon: '🌐', color: 'from-orange-500 to-orange-600' },
    { name: 'Git', icon: '📝', color: 'from-orange-600 to-red-600' }
  ];

  return (
    <div>
      <h4 className="text-2xl font-bold mb-6">Verwendete Technologien</h4>
             <p className="text-slate-400 mb-4">
         Diese Portfolio-Website wurde mit modernen Technologien entwickelt. Insgesamt wurden{' '}
         <br />
         <span className="text-blue-400 font-semibold">19 verschiedene Technologien</span> verwendet.
       </p>
               <div className="grid grid-cols-6 gap-x-0 gap-y-2 max-w-lg sm:gap-x-0 md:gap-x-1 lg:gap-x-2">
                   {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                boxShadow: [
                  "0 0 0 rgba(255, 255, 255, 0)",
                  "0 0 20px rgba(255, 255, 255, 0.3)",
                  "0 0 0 rgba(255, 255, 255, 0)"
                ]
              }}
                             transition={{ 
                 duration: 0.3, 
                 delay: index * 0.05,
                 boxShadow: {
                   duration: 4,
                   repeat: Infinity,
                   delay: index * 0.4,
                   ease: "easeInOut"
                 }
               }}
              whileHover={{ scale: 1.1 }}
              className={`bg-gradient-to-r ${tech.color} rounded-md p-1.5 text-center group hover:scale-110 transition-transform duration-200 w-14`}
            >
              <div className="text-sm mb-0.5">{tech.icon}</div>
              <div className="text-[10px] text-white font-medium leading-tight">{tech.name}</div>
            </motion.div>
          ))}
       </div>
    </div>
  );
}
