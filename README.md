# Portfolio - Max Mustermann

Ein modernes, responsives Portfolio mit Next.js, TypeScript und Tailwind CSS.

## 🚀 Features

- **Modern Design** - Glassmorphism ve Gradient-Effekte
- **Dark Mode** - Automatischer Theme-Toggle
- **Responsive** - Mobile-first Design
- **Animations** - Framer Motion Integration
- **Almanca** - Vollständig auf Deutsch
- **SEO Optimiert** - Meta-Tags und Open Graph

## 📁 Projektstruktur

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── bilder/          # Profilbilder, Screenshots
│   │   ├── icons/           # Favicon, UI Icons
│   │   ├── zertifikate/     # Zertifikate, Diplome
│   │   ├── projekte/        # Projekt-Assets
│   │   └── pdfs/            # Lebenslauf, Dokumente
│   └── README.md
├── src/
│   ├── app/
│   │   ├── contexts/        # React Context
│   │   ├── globals.css      # Global Styles
│   │   ├── layout.tsx       # Root Layout
│   │   └── page.tsx         # Homepage
│   ├── components/          # Wiederverwendbare Komponenten
│   ├── lib/                 # Utility Libraries
│   ├── types/               # TypeScript Types
│   └── utils/               # Helper Functions
├── tailwind.config.ts       # Tailwind Konfiguration
├── postcss.config.js        # PostCSS Konfiguration
└── package.json
```

## 🛠️ Technologien

- **Next.js 15** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Utility-First CSS
- **Framer Motion** - Animations
- **Vercel** - Deployment

## 📦 Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Build erstellen
npm run build

# Production starten
npm start
```

## 🎨 Anpassung

### 1. Persönliche Informationen
- `src/app/page.tsx` - Name, Beschreibung, Kontakt
- `src/app/layout.tsx` - Meta-Tags und Titel

### 2. Assets hinzufügen
- **Profilbild**: `public/assets/bilder/profilbild.jpg`
- **Zertifikate**: `public/assets/zertifikate/`
- **Projekte**: `public/assets/projekte/`
- **Lebenslauf**: `public/assets/pdfs/lebenslauf.pdf`

### 3. Farben anpassen
- `tailwind.config.ts` - Theme-Farben
- `src/app/globals.css` - Custom CSS

## 🚀 Deployment

### Vercel (Empfohlen)
1. Repository zu GitHub pushen
2. Vercel-Projekt erstellen
3. Automatisches Deployment

### Andere Plattformen
- Netlify
- Railway
- DigitalOcean

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO

- Meta-Tags optimiert
- Open Graph Images
- Structured Data
- Sitemap (automatisch)

## 📄 Lizenz

MIT License - Siehe LICENSE Datei für Details.

## 🤝 Kontakt

- **Email**: max@example.com
- **LinkedIn**: [Max Mustermann](https://linkedin.com/in/maxmustermann)
- **GitHub**: [@maxmustermann](https://github.com/maxmustermann)
