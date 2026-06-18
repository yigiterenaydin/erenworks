export interface ExperienceItem {
  date: string;
  city: string;
  company: string;
  program: string;
  description: string;
  detailTitle?: string;
  detailSubtitle?: string;
  imageUrl?: string;
  pdfUrl?: string;
}

/** Schnupperlehren – yeni firma eklemek için buraya bir obje ekle. */
export const experienceItems: ExperienceItem[] = [
  {
    date: "05/2025",
    city: "Zürich",
    company: "EWZ",
    program: "Berufsinformations Veranstaltung",
    detailTitle: "EWZ – Berufsinfo Veranstaltung",
    detailSubtitle: "Einblicke in kaufmännische und technische Berufsbilder",
    imageUrl: "/assets/bilder/Ewz.png",
    pdfUrl: "/assets/pdfs/ewz.pdf",
    description:
      "Teilnahme an einer Berufsinformationsveranstaltung mit Einblicken in verschiedene kaufmännische und technische Berufsbilder sowie Austausch mit Lernenden und Ausbildungsverantwortlichen.",
  },
  {
    date: "04/2025",
    city: "Zürich",
    company: "Kornhaus Verwaltungs AG",
    program: "KV Treuhand / Immobilien",
    detailTitle: "Kornhaus Verwaltungs AG – KV Treuhand / Immobilien",
    detailSubtitle: "Einblicke in Treuhand‑/Immobilienbereich und kaufmännische Abläufe",
    imageUrl: "/assets/bilder/kornhaus.png",
    pdfUrl: "/assets/pdfs/kornhaus.pdf",
    description:
      "Einblicke in die Tätigkeiten im Treuhand- und Immobilienbereich, Kennenlernen kaufmännischer Abläufe und der Rekrutierungs- sowie Bewerbungsprozesse, Austausch mit Lernenden und Mitarbeitenden.",
  },
  {
    date: "04/2025",
    city: "Zürich",
    company: "Ergon Smart Software",
    program: "Informatiker EFZ",
    detailTitle: "Ergon Smart Software – Informatiker EFZ",
    detailSubtitle: "Einblicke in ICT‑Lehrberufe und praktische Übungen",
    imageUrl: "/assets/bilder/ergon.png",
    pdfUrl: "/assets/pdfs/ergon.pdf",
    description:
      "Im Rahmen mehrerer Informationsveranstaltungen zur KV‑Branche Bank & Mediamatik sowie zu Informatik und digitalem Business erhielt ich umfassende Einblicke in ICT‑Lehrberufe – mit Fokus auf Applikationsentwicklung. Ich lernte die Firma Ergon Informatik AG und laufende Projekte kennen, informierte mich über Voraussetzungen und Selektionsprozess, nahm an praktischen Übungen wie ‘CS Unplugged’ teil und tauschte mich intensiv mit Lernenden aus.",
  },
  {
    date: "03/2025",
    city: "Zürich",
    company: "E. Weber & Cie AG",
    program: "Kaufmann EFZ",
    detailTitle: "E. Weber & Cie AG – Kaufmann EFZ",
    detailSubtitle: "Vielseitiger Einblick in kaufmännische Abläufe",
    imageUrl: "/assets/bilder/weber.png",
    pdfUrl: "/assets/pdfs/weber.pdf",
    description:
      "Beim Schnuppertag erhielt ich einen vielseitigen Einblick in die kaufmännischen Abläufe eines grossen Unternehmens – insbesondere in die Bereiche Kundendienst, Buchhaltung, Einkauf, Marketing und Verkauf.",
  },
  {
    date: "03/2025",
    city: "Zürich",
    company: "Zürcher Kantonalbank",
    program: "Informationsveranstaltung KV Branche Bank & Mediamatik",
    detailTitle: "ZKB – Informationsveranstaltung KV Branche Bank & Mediamatik",
    detailSubtitle: "Einblick in KV Bank & Mediamatik, Lehrablauf und Austausch mit Lernenden",
    imageUrl: "/assets/bilder/KBInfoKVMediamatik.png",
    pdfUrl: "/assets/pdfs/KBInfoKVMediamatik.pdf",
    description:
      "Ich erhielt einen Einblick in die ZKB und ihre Ausbildungswelt, tauchte in die Tätigkeiten der Informatik ein, entwickelte eine Website mit HTML und CSS, lernte den Lehrablauf mit den drei Lernorten kennen und tauschte mich mit Lernenden, Mitarbeitenden und Personalverantwortlichen aus.",
  },
  {
    date: "03/2025",
    city: "Zürich",
    company: "Zürcher Kantonalbank",
    program: "Informationsveranstaltung Informatik & Entwicklung digitales Business",
    detailTitle: "ZKB – Informationsveranstaltung Informatik & Entwicklung digitales Business",
    detailSubtitle: "Überblick zu IT‑/EDB‑Lehre, Bewerbungs‑ und Rekrutierungsprozess",
    imageUrl: "/assets/bilder/KBInforInformatikBus.png",
    pdfUrl: "/assets/pdfs/KBInforInformatikBus.pdf",
    description:
      "Beim Kennenlernen der ZKB und ihrer Ausbildungswelt erhielt ich Einblicke in den Ablauf der IT‑ und EDB‑Lehre, informierte mich über Bewerbungs- und Rekrutierungsprozesse und klärte allgemeine Fragen rund um die Lehre im Austausch mit Lernenden und Ausbildungsverantwortlichen.",
  },
  {
    date: "01/2025",
    city: "Glattpark",
    company: "Sunrise GmbH",
    program: "Kaufmann EFZ",
    detailTitle: "Sunrise GmbH – Kaufmann EFZ",
    detailSubtitle: "Einblick in kaufmännische Tätigkeiten in der Telekommunikationsbranche",
    imageUrl: "/assets/bilder/sunrise.png",
    pdfUrl: "/assets/pdfs/sunrise.pdf",
    description:
      "Teilnahme an einem Informationstag mit Einblicken in kaufmännische Tätigkeiten in der Telekommunikationsbranche.",
  },
  {
    date: "11/2024",
    city: "Zürich",
    company: "Post Immobilien AG, Zürich",
    program: "Kaufmann EFZ",
    detailTitle: "Post Immobilien AG, Zürich – Kaufmann EFZ",
    detailSubtitle: "Einblick in kaufmännische Abläufe eines grossen Unternehmens",
    imageUrl: "/assets/bilder/post.png",
    pdfUrl: "/assets/pdfs/post.pdf",
    description: "Einblick in die kaufmännischen Abläufe eines grossen Unternehmens.",
  },
  {
    date: "8/2024 - 2025",
    city: "Zürich",
    company: "Kita Bärlis Oerlikon",
    program: "Nachweis und kurze Beschreibung",
    detailTitle: "Kita Bärlis Oerlikon",
    detailSubtitle: "Nachweis und kurze Beschreibung",
    imageUrl: "/assets/bilder/kita.png",
    pdfUrl: "/assets/pdfs/Kita%20Schnupperlehre.pdf",
    description:
      "Unterstützung bei der Betreuung von Kindern im Alter von 0 bis 3 Jahren; Mithilfe beim Aufräumen sowie bei der Organisation von Materialien.",
  },
  {
    date: "06/2025",
    city: "Zürich",
    company: "Zürcher Kantonalbank",
    program: "Schnupperparcours KV Branche Bank",
    detailTitle: "ZKB – Schnupperparcours KV Branche Bank",
    detailSubtitle: "Einblick in Filiale, Ausbildungswelt und KV‑Berufsbild",
    imageUrl: "/assets/bilder/kantonalbankparcoursKVBrancheBank.png",
    pdfUrl: "/assets/pdfs/kantonalbankparcoursKVBrancheBank.pdf",
    description:
      "Beim Schnuppertag erhielt ich einen umfassenden Einblick in eine Filiale der Zürcher Kantonalbank, tauchte in ausbildungs- und bankspezifische Themen ein, lernte die Tätigkeiten eines Kaufmanns EFZ sowie den Lehrablauf mit den drei Lernorten kennen und konnte mich mit Lernenden, Mitarbeitenden sowie Personalverantwortlichen austauschen – dabei wurden der Bewerbungsprozess und allgemeine Fragen zur Lehre beantwortet.",
  },
  {
    date: "05/2025",
    city: "Zürich",
    company: "Zürcher Kantonalbank",
    program: "Schnupperparcours Informatik",
    detailTitle: "ZKB – Schnupperparcours Informatik",
    detailSubtitle: "Einblick in IT‑Ausbildung, Web‑Übungen und Austausch mit Lernenden",
    imageUrl: "/assets/bilder/kantonalbankSchnupperparcoursInformatik.png",
    pdfUrl: "/assets/pdfs/kantonalbankSchnupperparcoursInformatik.pdf",
    description:
      "Beim Informatik-Schnuppertag erhielt ich einen vielseitigen Einblick in die Ausbildungswelt der Zürcher Kantonalbank, entwickelte eine Website mit HTML und CSS, löste logische Aufgaben am Computer, programmierte Roboter mit Codeblöcken, lernte den Lehrablauf mit den drei Lernorten kennen und konnte mich mit Lernenden, Mitarbeitenden und Personalverantwortlichen über den Bewerbungsprozess sowie allgemeine Fragen zur Lehre austauschen.",
  },
  {
    date: "05/2025",
    city: "Zürich",
    company: "UBS Bank",
    program: "Kaufmännische Grundbildung UBS Bank",
    detailTitle: "UBS – Kaufmännische Grundbildung",
    detailSubtitle: "Einblicke in zentrale Bereiche und Tätigkeiten einer internationalen Bank",
    imageUrl: "/assets/bilder/UBS.png",
    pdfUrl: "/assets/pdfs/UBS.pdf",
    description:
      "Beim UBS-Schnuppertag erhielt ich Einblicke in zentrale Bereiche und Tätigkeiten einer internationalen Bank, setzte mich spielerisch mit bankenspezifischen Themen auseinander, informierte mich über die Lehre und den Rekrutierungsprozess und tauschte mich mit Lernenden, Mitarbeitenden und Personalverantwortlichen in einer UBS-Geschäftsstelle aus.",
  },
  {
    date: "03/2026",
    city: "Zürich",
    company: "Götz Elektro Zürich",
    program: "Einblicke in den Elektroinstallateur-Beruf",
    detailTitle: "Grundbildung als Elektroinstallateur",
    detailSubtitle: "Einblicke in die zentralen Tätigkeiten des Elektroinstallateur-Berufs",
    imageUrl: "/assets/bilder/gotzelek.png",
    pdfUrl: "/assets/pdfs/x.pdf",
    description:
      "Im Rahmen meines Schnuppertags als Elektroinstallateur habe ich praktische Erfahrungen gesammelt, indem ich mit der Bohrmaschine gearbeitet, Kabel verlegt, Kanäle erstellt und Leitungen eingezogen habe.",
  },
   {
    date: "04/2026",
    city: "Zürich",
    company: "Etavis AG Zürich",
    program: "Einblicke in den Elektroinstallateur-Beruf",
    detailTitle: "Grundbildung als Elektroinstallateur",
    detailSubtitle: "Einblicke in die zentralen Tätigkeiten des Elektroinstallateur-Berufs",
    imageUrl: "/assets/bilder/etavis.png",
    pdfUrl: "/assets/pdfs/etavis.pdf",
    description:
      "Im Rahmen meines Schnuppertags als Elektroinstallateur habe ich praktische Erfahrungen gesammelt, indem ich mit der Bohrmaschine gearbeitet, Kabel verlegt, Kanäle erstellt und Leitungen eingezogen habe.",
  },
  {
    date: "04/2026",
    city: "Zürich",
    company: "Schibli AG Zürich",
    program: "Einblicke in den Elektroinstallateur-Beruf",
    detailTitle: "Grundbildung als Elektroinstallateur",
    detailSubtitle: "Einblicke in die zentralen Tätigkeiten des Elektroinstallateur-Berufs",
    imageUrl: "/assets/bilder/Schibli.png",
    pdfUrl: "/assets/pdfs/x.pdf",
    description:
      "Im Rahmen meines Schnuppertags als Elektroinstallateur habe ich praktische Erfahrungen gesammelt, indem ich mit der Bohrmaschine gearbeitet, Kabel verlegt, Kanäle erstellt und Leitungen eingezogen habe.",
  },
    {
    date: "05/2026",
    city: "Zürich",
    company: "Micom Technics Elektro",
    program: "Einblicke in den Elektroinstallateur-Beruf",
    detailTitle: "Grundbildung als Elektroinstallateur",
    detailSubtitle: "Einblicke in die zentralen Tätigkeiten des Elektroinstallateur-Berufs",
    imageUrl: "/assets/bilder/micom.png",
    pdfUrl: "/assets/pdfs/x.pdf",
    description:
      "Im Rahmen meines Schnuppertags als Elektroinstallateur habe ich praktische Erfahrungen gesammelt, indem ich mit der Bohrmaschine gearbeitet, Kabel verlegt, Kanäle erstellt und Leitungen eingezogen habe.",
  },
      {
    date: "05/2026",
    city: "Zürich",
    company: "Elektro Kasper AG",
    program: "Einblicke in den Elektroinstallateur-Beruf",
    detailTitle: "Grundbildung als Elektroinstallateur",
    detailSubtitle: "Einblicke in die zentralen Tätigkeiten des Elektroinstallateur-Berufs",
    imageUrl: "/assets/bilder/kasper.png",
    pdfUrl: "/assets/pdfs/x.pdf",
    description:
      "Im Rahmen meines Schnuppertags als Elektroinstallateur habe ich praktische Erfahrungen gesammelt, indem ich mit der Bohrmaschine gearbeitet, Kabel verlegt, Kanäle erstellt und Leitungen eingezogen habe.",
  },
        {
    date: "06/2026",
    city: "Zürich",
    company: "Sprecher & Co AG",
    program: "Einblicke in den Elektroinstallateur-Beruf",
    detailTitle: "Grundbildung als Elektroinstallateur",
    detailSubtitle: "Einblicke in die zentralen Tätigkeiten des Elektroinstallateur-Berufs",
    imageUrl: "/assets/bilder/sprecher.jpg",
    pdfUrl: "/assets/pdfs/sprecher.pdf",
    description:
      "Im Rahmen meines Schnuppertags als Elektroinstallateur habe ich praktische Erfahrungen gesammelt, indem ich mit der Bohrmaschine gearbeitet, Kabel verlegt, Kanäle erstellt und Leitungen eingezogen habe.",
  },
   {
    date: "06/2026",
    city: "Zürich",
    company: "Götz Elektro Zürich",
    program: "Einblicke in den Elektroinstallateur-Beruf",
    detailTitle: "Grundbildung als Elektroinstallateur",
    detailSubtitle: "Einblicke in die zentralen Tätigkeiten des Elektroinstallateur-Berufs",
    imageUrl: "/assets/bilder/gotzelek.png",
    pdfUrl: "/assets/pdfs/x.pdf",
    description:
      "Im Rahmen meines Schnuppertags als Elektroinstallateur habe ich praktische Erfahrungen gesammelt, indem ich mit der Bohrmaschine gearbeitet, Kabel verlegt, Kanäle erstellt und Leitungen eingezogen habe.",
  },
     {
    date: "06/2026",
    city: "Zürich",
    company: "Elektro Appenzeller AG",
    program: "Einblicke in den Elektroinstallateur-Beruf",
    detailTitle: "Grundbildung als Elektroinstallateur",
    detailSubtitle: "Einblicke in die zentralen Tätigkeiten des Elektroinstallateur-Berufs",
    imageUrl: "/assets/bilder/apenzeler.png",
    pdfUrl: "/assets/pdfs/apenzeler.pdf",
    description:
      "Im Rahmen meines Schnuppertags als Elektroinstallateur habe ich praktische Erfahrungen gesammelt, indem ich mit der Bohrmaschine gearbeitet, Kabel verlegt, Kanäle erstellt und Leitungen eingezogen habe.",
  },
];
