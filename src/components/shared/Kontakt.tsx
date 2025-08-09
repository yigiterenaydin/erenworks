'use client';

import { motion } from "framer-motion";
import { useState } from "react";

interface ContactInfo {
  type: 'email' | 'phone' | 'github';
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface KontaktProps {
  title: string;
  description: string;
  contactInfo: ContactInfo[];
}

export default function Kontakt({ title, description, contactInfo }: KontaktProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    // Formspree'e gönder
    fetch('https://formspree.io/f/mqalgvwn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        setIsSubmitted(true);
        e.currentTarget.reset();
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <section id="contact" className="pt-16 pb-16 bg-rose-50/60 dark:bg-slate-900/50 backdrop-blur-sm section-anchor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {title}
          </h3>
          {description && description.trim().length > 0 && (
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Ich freue mich auf Ihre Nachricht</h4>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.type} className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white text-lg">{info.label}</p>
                    {info.type === 'github' ? (
                      <a 
                        href="https://github.com/yigiterenaydin" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-600 dark:text-slate-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/50"
          >
            <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Nachricht senden</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Ihr Name" 
                  required
                  className="w-full px-6 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-all duration-300 backdrop-blur-sm" 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Ihre Email" 
                  required
                  className="w-full px-6 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-all duration-300 backdrop-blur-sm" 
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  placeholder="Ihre Nachricht" 
                  rows={4} 
                  required
                  className="w-full px-6 py-4 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-all duration-300 backdrop-blur-sm resize-none"
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Nachricht senden
              </motion.button>
              
              {/* Vielen Dank Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="mt-6 p-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 border border-indigo-200/50 dark:border-indigo-700/50 rounded-3xl text-center backdrop-blur-sm"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                    Vielen Dank!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-lg">
                    Ihre Nachricht wurde erfolgreich gesendet. Ich werde mich bald bei Ihnen melden!
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
