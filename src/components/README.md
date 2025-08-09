# Components Verzeichnis

Hier befinden sich alle wiederverwendbaren React-Komponenten.

## 📁 Komponenten-Struktur

### 🧩 `ui/`
- Basis-UI-Komponenten
- Buttons, Inputs, Cards
- Layout-Komponenten

### 🎨 `layout/`
- Header, Footer, Navigation
- Sidebar, Modal
- Layout-Wrapper

### 📱 `sections/`
- Portfolio-Sektionen
- Hero, About, Projects
- Contact-Formular

### 🎯 `features/`
- Theme-Toggle
- Mobile-Menu
- Animations

## 📋 Verwendung

```typescript
// Beispiel für Komponenten-Import
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/layout/Header'
import { HeroSection } from '@/components/sections/HeroSection'
```

## 🎯 Namenskonventionen

- **Komponenten**: PascalCase (z.B. `HeroSection.tsx`)
- **Dateien**: PascalCase (z.B. `Button.tsx`)
- **Ordner**: camelCase (z.B. `uiComponents`)
- **Props**: camelCase (z.B. `onClick`, `isVisible`)



