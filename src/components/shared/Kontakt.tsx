'use client';

import { motion } from "framer-motion";
import { useState, useRef } from "react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleCopyNumber = async (phoneNumber: string) => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopiedNumber(phoneNumber);
      setTimeout(() => setCopiedNumber(null), 2000);
    } catch (err) {
      console.error('Failed to copy number:', err);
    }
  };

  const handleEmailAction = async (email: string) => {
    // Mobil cihazlarda email uygulamasını aç
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = `mailto:${email}`;
    } else {
      // Masaüstünde kopyala
      try {
        await navigator.clipboard.writeText(email);
        setCopiedEmail(email);
        setTimeout(() => setCopiedEmail(null), 2000);
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(false);
    setErrorMsg(null);
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    if (!data.name || !data.email || !data.message) {
      setErrorMsg('Bitte alle Felder ausfüllen.');
      setIsSubmitting(false);
      return;
    }
    
    const emailPattern = /.+@.+\..+/;
    if (!emailPattern.test(data.email)) {
      setErrorMsg('Bitte eine gültige E‑Mail angeben.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.status < 400) {
        setErrorMsg(null);
        setIsSubmitted(true);
        // Form'u temizle
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        setErrorMsg('Etwas ist schiefgelaufen. Bitte später erneut versuchen.');
        setIsSubmitted(false);
      }
    } catch {
      setErrorMsg('Etwas ist schiefgelaufen. Bitte später erneut versuchen.');
      setIsSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-16 pb-16 bg-rose-50/60 dark:bg-slate-900/50 backdrop-blur-sm section-anchor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
            {title}
          </h3>
          {description && description.trim().length > 0 && (
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h4 className="text-xl text-slate-600 dark:text-slate-300 mb-8">Ich freue mich, von Ihnen zu hören.</h4>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.type} className="flex items-center space-x-4">
                  <div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{info.label}</p>
                    {info.type === 'github' ? (
                      <div className="flex items-center space-x-3">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href="https://github.com/yigiterenaydin" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="GitHub – öffnet in neuem Tab"
                          className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-base font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-green-400/70 dark:focus-visible:ring-offset-slate-800 w-52"
                        >
                          <span className="flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span>GitHub öffnen</span>
                          </span>
                        </motion.a>
                      </div>
                    ) : info.type === 'phone' ? (
                      <div className="flex items-center space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleCopyNumber(info.value)}
                          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-base font-medium rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-pink-400/70 dark:focus-visible:ring-offset-slate-800 w-52"
                        >
                          {copiedNumber === info.value ? (
                            <span className="flex items-center space-x-2">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Kopiert!</span>
                            </span>
                          ) : (
                            <span className="flex items-center space-x-2">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                              <span>Nummer kopieren</span>
                            </span>
                          )}
                        </motion.button>
                      </div>
                    ) : info.type === 'email' ? (
                      <div className="flex items-center space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleEmailAction(info.value)}
                          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-base font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-blue-400/70 dark:focus-visible:ring-offset-slate-800 w-52"
                        >
                          {copiedEmail === info.value ? (
                            <span className="flex items-center space-x-2">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Kopiert!</span>
                            </span>
                          ) : (
                            <span className="flex items-center space-x-2">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <span>Email kopieren</span>
                            </span>
                          )}
                        </motion.button>
                      </div>
                    ) : (
                      <p className="text-slate-600 dark:text-slate-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/50">
            {!isSubmitted ? (
              <>
                <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Nachricht senden</h4>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" id="contact-form" autoComplete="off">
                  <div className="transition-base">
                    <label htmlFor="contact-name" className="sr-only">Ihr Name</label>
                    <input 
                      id="contact-name"
                      type="text" 
                      name="name"
                      placeholder="Ihr Name" 
                      required
                      autoComplete="off"
                      className="w-full px-6 py-4 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-all duration-300 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-indigo-400/70 dark:focus-visible:ring-offset-slate-800" 
                    />
                  </div>
                  <div className="transition-base">
                    <label htmlFor="contact-email" className="sr-only">Ihre Email</label>
                    <input 
                      id="contact-email"
                      type="email" 
                      name="email"
                      placeholder="Ihre Email" 
                      required
                      autoComplete="off"
                      className="w-full px-6 py-4 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-all duration-300 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-indigo-400/70 dark:focus-visible:ring-offset-slate-800" 
                    />
                  </div>
                  <div className="transition-base">
                    <label htmlFor="contact-message" className="sr-only">Ihre Nachricht</label>
                    <textarea 
                      id="contact-message"
                      name="message"
                      placeholder="Ihre Nachricht" 
                      rows={4} 
                      required
                      autoComplete="off"
                      className="w-full px-6 py-4 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-all duration-300 backdrop-blur-sm resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-indigo-400/70 dark:focus-visible:ring-offset-slate-800"
                    ></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-indigo-300/80 dark:focus-visible:ring-offset-slate-800 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Wird gesendet…' : 'Nachricht senden'}
                  </motion.button>

                  {errorMsg && (
                    <p className="mt-2 text-sm text-red-400" role="alert">{errorMsg}</p>
                  )}
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="p-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 border border-indigo-200/50 dark:border-indigo-700/50 rounded-3xl text-center backdrop-blur-sm"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                  Vielen Dank!
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg mb-6">
                  Ihre Nachricht wurde erfolgreich gesendet. Ich werde mich bald bei Ihnen melden!
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setIsSubmitted(false);
                    setErrorMsg(null);
                    if (formRef.current) {
                      formRef.current.reset();
                    }
                  }}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-green-300/80 dark:focus-visible:ring-offset-slate-800"
                >
                  Neue Nachricht senden
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
