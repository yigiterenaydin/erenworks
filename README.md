## Eren Aydin – Portfolio

Modernes, responsives Portfolio mit Next.js, TypeScript und Tailwind CSS. Enthält PDF‑Vorschau, Accordion für Erfahrungen, Sprachkenntnisse/Interessen/Referenzen und ein Kontaktformular.

### 🚀 Highlights
- **Sauberes Design**: sanfte Gradients, Glassmorphism, dezente Schatten
- **Dark/Light Mode**: Theme‑Toggle mit Speicherung
- **Weiches Scrolling**: aktiver Menü‑Status via IntersectionObserver
- **Animationen**: Framer Motion für Eingänge, Hover, Accordion
- **PDF‑Vorschau**: Zeugnisse im Modal, Download mit einem Klick
- **CV‑Download**: Blinkender Button, `ErenLebensL.pdf`

### 📦 Tech‑Stack
- Next.js 15 (Turbopack) · React 19 · TypeScript 5
- Tailwind CSS 3 · Framer Motion 12 · Heroicons · react‑icons
- react‑hot‑toast (Interessen‑Toasts)

### 📁 Struktur (Auszug)
```text
public/
  assets/
    bilder/
      eren-photo.png
    pdfs/
      ErenLebensL.pdf
      SekundarSchuleZeugnisse1sek.pdf
      SekundarSchuleZeugnisse2sek.pdf
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    layout/
      AppShell.tsx          # Shell: Theme, Header, Hintergrund, BackToTop
      Header.tsx            # Sticky Header + aktiver Menüstatus
      AnimatedBackground.tsx
    sections/
      Startseite.tsx        # Hero + CV‑Download
      UeberMich.tsx         # Persönliches Profil (3 Karten)
      Zeugnisse.tsx         # Schulische Unterlagen (PDF Modal + Download)
      ExperienceAccordion.tsx # Erfahrungen & Schnupperlehren (Accordion)
      PortfolioColumns.tsx  # Sprachkenntnisse, Interessen, Referenzen
    shared/
      ProfileCard.tsx
      BackToTop.tsx
      Kontakt.tsx
```

### 🔧 Entwicklung
```bash
npm install
npm run dev   # startet auf http://localhost:3000 (belegt → 3001)

# Production Build
npm run build
npm start
```

### 🧩 Inhalte anpassen
- Daten werden in `src/app/page.tsx` zusammengeführt (Titel, Texte, Listen).
- Abschnitte sind in `src/components/sections/*` gekapselt.
- PDFs und Bilder liegen unter `public/assets/*` (Dateinamen siehe Struktur oben).
- Konsistentes Scroll‑Offset via `.section-anchor` in `globals.css`.

### 🌐 Deployment (Vercel empfohlen)
1. Repo: `https://github.com/yigiterenaydin/erenworks`
2. Vercel → New Project → Import Git Repository → `yigiterenaydin/erenworks`
3. Framework: Next.js · Build: `next build` · Output: `.next`
4. Deploy. (Env‑Variablen sind aktuell nicht erforderlich.)

### 📝 Notizen
- Aktive Sektionen: Header markiert den aktuellen Abschnitt automatisch.
- Farben/Abstände: Alle Sektionen haben einheitliche vertikale Abstände.
- Barrierefreiheit: Buttons/Links mit `aria‑label`, semantische Überschriften.

### 👤 Kontakt
- E‑Mail: eren.yigit.aydin@gmail.com
- GitHub: `yigiterenaydin/erenworks`
