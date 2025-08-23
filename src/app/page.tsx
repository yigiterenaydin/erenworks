"use client";

// Home sayfası: Bölümleri bir araya getirir. İskelet (tema, header, arka plan) AppShell içinde.
import { motion } from "framer-motion";
import AppShell from "@/components/layout/AppShell";
import Startseite from "@/components/sections/Startseite";
import UeberMich from "@/components/sections/UeberMich";
import ExperienceAccordion from "@/components/sections/ExperienceAccordion";
import PortfolioColumns from "@/components/sections/PortfolioColumns";
import Zeugnisse from "@/components/sections/Zeugnisse";
import Kontakt from "@/components/shared/Kontakt";
import Technologies from "@/components/shared/Technologies";
import { AcademicCapIcon, BriefcaseIcon, RocketLaunchIcon, UserGroupIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import StatsSection from "@/components/sections/StatsSection";

export default function Home() {
  return (
    <AppShell>

      <Startseite
        name="Eren"
      />

      <UeberMich
        title="Persönliches Profil"
        skills={[
          {
                icon: <AcademicCapIcon className="w-7 h-7 text-white" />,
            title: "Bildung & Motivation",
                description: "Ich arbeite gerne im Team, kann mich aber auch gut selbstständig organisieren und Aufgaben zuverlässig erledigen. Neue Herausforderungen sehe ich als Chance, mich weiterzuentwickeln und neue Fähigkeiten zu erlernen. In meiner Freizeit interessiere ich mich für digitale Medien und Wirtschaftsthemen, was mir hilft, Zusammenhänge schnell zu verstehen. Durch meine offene Art fällt es mir leicht, mit verschiedenen Menschen ins Gespräch zu kommen und gemeinsam Lösungen zu finden.",
            color: "from-blue-500 to-indigo-600"
          },
          {
                icon: <BriefcaseIcon className="w-7 h-7 text-white" />,
            title: "Berufsziel",
            description: "Mein Ziel ist es, eine Lehrstelle als Kaufmann EFZ in einem Büro – am liebsten in einer Bank – zu finden. Mir ist bewusst, dass dieser Beruf hohe Anforderungen stellt, doch ich bin überzeugt, dass ich mit Einsatzbereitschaft, Lernwillen und Motivation erfolgreich sein kann. Alternativ interessieren mich auch die Berufe Programmierer oder Mediamatiker, da ich gerne mit digitalen Medien arbeite und Freude daran habe, kreative sowie technische Lösungen zu entwickeln.",
            color: "from-purple-500 to-pink-600"
          },
          {
                icon: <RocketLaunchIcon className="w-7 h-7 text-white" />,
            title: "Zukunftsperspektive",
            description: "Mein Ziel ist es, nach einer erfolgreichen Lehrzeit von meinem Ausbildungsbetrieb übernommen zu werden. Ich möchte mich dort Schritt für Schritt weiterentwickeln, neue Aufgaben übernehmen und mit der Zeit mehr Verantwortung tragen. Wenn ich mein Bestes gebe und meine Ziele verfolge, bin ich überzeugt, dass ich in meinem Beruf wachsen und langfristig erfolgreich sein kann.",
            color: "from-green-500 to-emerald-600"
          }
        ]}
      />

      <StatsSection />

      <Zeugnisse
        title="Schulische Unterlagen"
        reports={[
          { term: 'Zeugnisse 1. Sek (Gesamt)', date: '2023', file: '/assets/pdfs/SekundarSchuleZeugnisse1sek.pdf' },
          { term: 'Zeugnisse 2. Sek (Gesamt)', date: '2024', file: '/assets/pdfs/SekundarSchuleZeugnisse2sek.pdf' },
          { term: 'Semesterzeugnis 3. Sek – 1. Semester', date: '01/2025', file: '/assets/pdfs/zeugnis-2025-01.pdf', available: false, comingText: 'In ~6 Monaten verfügbar' },
        ]}
      />

      <ExperienceAccordion
        items={[
          {
            date: "05/2025",
            city: "Zürich",
            company: "EWZ",
            program: "Berufsinformations Veranstaltung",
            description:
              "Teilnahme an einer Berufsinformationsveranstaltung mit Einblicken in verschiedene kaufmännische und technische Berufsbilder sowie Austausch mit Lernenden und Ausbildungsverantwortlichen.",
          },
          {
            date: "04/2025",
            city: "Zürich",
            company: "Kornhaus Verwaltungs AG",
            program: "KV Treuhand / Immobilien",
            description:
              "Einblicke in die Tätigkeiten im Treuhand- und Immobilienbereich, Kennenlernen kaufmännischer Abläufe und der Rekrutierungs- sowie Bewerbungsprozesse, Austausch mit Lernenden und Mitarbeitenden.",
          },
          {
            date: "04/2025",
            city: "Zürich",
            company: "Ergon Smart Software",
            program: "Informatiker EFZ",
            description:
              "Im Rahmen mehrerer Informationsveranstaltungen zur KV‑Branche Bank & Mediamatik sowie zu Informatik und digitalem Business erhielt ich umfassende Einblicke in ICT‑Lehrberufe – mit Fokus auf Applikationsentwicklung. Ich lernte die Firma Ergon Informatik AG und laufende Projekte kennen, informierte mich über Voraussetzungen und Selektionsprozess, nahm an praktischen Übungen wie ‘CS Unplugged’ teil und tauschte mich intensiv mit Lernenden aus.",
          },
          {
            date: "03/2025",
            city: "Zürich",
            company: "E. Weber & Cie AG",
            program: "Kaufmann EFZ",
            description:
              "Beim Schnuppertag erhielt ich einen vielseitigen Einblick in die kaufmännischen Abläufe eines grossen Unternehmens – insbesondere in die Bereiche Kundendienst, Buchhaltung, Einkauf, Marketing und Verkauf.",
          },
          {
            date: "03/2025",
            city: "Zürich",
            company: "Zürcher Kantonalbank",
            program: "Informationsveranstaltung KV Branche Bank & Mediamatik",
            description:
              "Ich erhielt einen Einblick in die ZKB und ihre Ausbildungswelt, tauchte in die Tätigkeiten der Informatik ein, entwickelte eine Website mit HTML und CSS, lernte den Lehrablauf mit den drei Lernorten kennen und tauschte mich mit Lernenden, Mitarbeitenden und Personalverantwortlichen aus.",
          },
          {
            date: "03/2025",
            city: "Zürich",
            company: "Zürcher Kantonalbank",
            program: "Informationsveranstaltung Informatik & Entwicklung digitales Business",
            description:
              "Beim Kennenlernen der ZKB und ihrer Ausbildungswelt erhielt ich Einblicke in den Ablauf der IT‑ und EDB‑Lehre, informierte mich über Bewerbungs- und Rekrutierungsprozesse und klärte allgemeine Fragen rund um die Lehre im Austausch mit Lernenden und Ausbildungsverantwortlichen.",
          },
          {
            date: "01/2025",
            city: "Glattpark",
            company: "Sunrise GmbH",
            program: "Kaufmann EFZ",
            description:
              "Teilnahme an einem Informationstag mit Einblicken in kaufmännische Tätigkeiten in der Telekommunikationsbranche.",
          },
          {
            date: "11/2024",
            city: "Zürich",
            company: "Post Immobilien AG, Zürich",
            program: "Kaufmann EFZ",
            description:
              "Einblick in die kaufmännischen Abläufe eines grossen Unternehmens.",
          },
          {
            date: "8/2024 - 2025",
            city: "Zürich",
            company: "Kita Bärlis Oerlikon",
            program: "",
            description:
              "Unterstützung bei der Betreuung von Kindern im Alter von 0 bis 3 Jahren; Mithilfe beim Aufräumen sowie bei der Organisation von Materialien.",
          },
          {
            date: "06/2025",
            city: "Zürich",
            company: "Zürcher Kantonalbank",
            program: "Schnupperparcours KV Branche Bank",
            description:
              "Beim Schnuppertag erhielt ich einen umfassenden Einblick in eine Filiale der Zürcher Kantonalbank, tauchte in ausbildungs- und bankspezifische Themen ein, lernte die Tätigkeiten eines Kaufmanns EFZ sowie den Lehrablauf mit den drei Lernorten kennen und konnte mich mit Lernenden, Mitarbeitenden sowie Personalverantwortlichen austauschen – dabei wurden der Bewerbungsprozess und allgemeine Fragen zur Lehre beantwortet.",
          },
          {
            date: "05/2025",
            city: "Zürich",
            company: "Zürcher Kantonalbank",
            program: "Schnupperparcours Informatik",
            description:
              "Beim Informatik-Schnuppertag erhielt ich einen vielseitigen Einblick in die Ausbildungswelt der Zürcher Kantonalbank, entwickelte eine Website mit HTML und CSS, löste logische Aufgaben am Computer, programmierte Roboter mit Codeblöcken, lernte den Lehrablauf mit den drei Lernorten kennen und konnte mich mit Lernenden, Mitarbeitenden und Personalverantwortlichen über den Bewerbungsprozess sowie allgemeine Fragen zur Lehre austauschen.",
          },
          {
            date: "05/2025",
            city: "Zürich",
            company: "UBS Bank",
            program: "Kaufmännische Grundbildung UBS Bank",
            description:
              "Beim UBS-Schnuppertag erhielt ich Einblicke in zentrale Bereiche und Tätigkeiten einer internationalen Bank, setzte mich spielerisch mit bankenspezifischen Themen auseinander, informierte mich über die Lehre und den Rekrutierungsprozess und tauschte mich mit Lernenden, Mitarbeitenden und Personalverantwortlichen in einer UBS-Geschäftsstelle aus.",
          },
        ]}
      />

      {/* Sprachkenntnisse menüden kaldırıldı ve aşağıdaki proje kartına gömülü gösteriliyor */}

      <PortfolioColumns
        languages={[
          { code: 'DE', name: 'Deutsch', note: 'Muttersprache', level: 100 },
          { code: 'TR', name: 'Türkisch', note: 'Muttersprache', level: 100 },
          { code: 'GB', name: 'Englisch', note: 'Schulkenntnisse im 7. Jahr', level: 70 },
          { code: 'FR', name: 'Französisch', note: 'Schulkenntnisse im 4. Jahr', level: 55 },
        ]}
        references={[
          { name: 'Thomas Seinige', title: 'Klassenlehrer', email: 'thomas.seinige@schulen.zuerich.ch', phone: 'Nach fragen' },
          { name: 'Cyrill Lam', title: 'Kung‑Fu Lehrer', email: 'zuerich@skema.ch', phone: '044 401 40 42' },
        ]}
      />

      

             <Kontakt
         title="Kontaktieren Sie mich über"
         description=""
                 contactInfo={[
           {
             type: 'email',
             label: 'Email',
             value: 'eren.yigit.aydin@gmail.com',
             icon: null
           },
           {
             type: 'github',
             label: 'GitHub',
             value: 'github.com/yigiterenaydin',
             icon: null
           },
           {
             type: 'phone',
             label: 'Tel:',
             value: '+41 76 292 53 53',
             icon: null
           }
         ]}
       />

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-2xl font-bold mb-6">Eren Portfolio</h4>
              <p className="text-slate-400 leading-relaxed">
                Schüler mit Interesse an KV-Berufen und Bankwesen. Motiviert und bereit für neue Herausforderungen.
              </p>
              <div className="mt-6">
                <h5 className="text-lg font-semibold mb-3 text-white">Schnellzugriff</h5>
                <ul className="space-y-2 text-slate-300">
                  <li>
                    <a href="/assets/pdfs/ErenLebensL.pdf" className="hover:text-indigo-400 transition-colors">Lebenslauf (PDF)</a>
                  </li>
                  <li>
                    <a href="https://github.com/yigiterenaydin" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">GitHub</a>
                  </li>
                  <li>
                    <a href="mailto:eren.yigit.aydin@gmail.com" className="hover:text-indigo-400 transition-colors">E‑Mail</a>
                  </li>
                  <li>
                    <a href="https://wa.me/0041762925353" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">WhatsApp</a>
                  </li>
                </ul>
              </div>
            </div>
            <Technologies />
            <div>
              <h4 className="text-2xl font-bold mb-6">Kontakt</h4>
                                                    <div className="flex space-x-4">
                     {[
                        { 
                         name: 'Instagram', 
                         href: 'https://www.instagram.com/eren_zhhh/',
                         icon: (
                           <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                           </svg>
                         )
                       },
                       { 
                         name: 'GitHub', 
                         href: 'https://github.com/yigiterenaydin',
                         icon: (
                            <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                           </svg>
                         )
                       },
                       { 
                         name: 'Email', 
                         href: 'mailto:eren.yigit.aydin@gmail.com',
                         icon: (
                            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                           </svg>
                         )
                       },
                       { 
                         name: 'WhatsApp', 
                         href: 'https://wa.me/0041762925353',
                         icon: (
                            <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                           </svg>
                         )
                       }
                     ].map((social) => (
                      <motion.a
                         key={social.name}
                         href={social.href}
                         target="_blank"
                         rel="noopener noreferrer"
                         whileHover={{ scale: 1.1, y: -2 }}
                        aria-label={`${social.name} – öffnet in neuem Tab`}
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 border border-slate-700/60 hover:border-slate-600/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 dark:focus-visible:ring-indigo-400/70 dark:focus-visible:ring-offset-black"
                       >
                         {social.icon}
                       </motion.a>
                     ))}
                   </div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-slate-800 mt-12 pt-8 text-center"
          >
            <div className="flex flex-col items-center space-y-4">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center"
              >
                <span className="text-white text-lg font-bold">E</span>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-slate-400 text-sm font-medium"
              >
                &copy; {new Date().getFullYear()} Eren Portfolio. Alle Rechte vorbehalten.
              </motion.p>
              
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </footer>
    </AppShell>
  );
}
