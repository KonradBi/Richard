# Arc Mütze Website

Eine moderne, responsive Website für Arc Mütze, entwickelt mit Next.js 13, TypeScript, Tailwind CSS und Framer Motion.

## 🚀 Features

- Responsive Design für alle Bildschirmgrößen
- Moderne Animationen und Übergänge
- Optimierte Performance durch Next.js
- SEO-freundliche Struktur
- Interaktive Komponenten
- Dynamische Projektgalerie
- Kontaktformular mit E-Mail-Integration

## 📁 Projektstruktur

```
arcmuetze/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root Layout
│   │   ├── projekte/         # Projekte Sektion
│   │   │   ├── page.tsx      # Projektübersicht
│   │   │   └── [id]/         # Dynamische Projektseiten
│   │   │       └── page.tsx
│   │   ├── kontakt/         # Neue Kontaktseite
│   │   │   └── page.tsx
│   │   ├── datenschutz/      # Datenschutz Seite
│   │   │   └── page.tsx
│   │   └── impressum/        # Impressum Seite
│   │       └── page.tsx
│   │
│   ├── components/            # React Komponenten
│   │   ├── layout/           # Layout Komponenten
│   │   │   ├── header.tsx    # Navigation Header
│   │   │   └── footer.tsx    # Footer
│   │   │
│   │   └── sections/         # Seitenabschnitte
│   │       ├── hero.tsx      # Hero Sektion
│   │       ├── services.tsx  # Services Sektion
│   │       ├── expertise.tsx # Expertise Sektion
│   │       ├── quote.tsx     # Zitat Sektion
│   │       ├── team.tsx      # Team/Netzwerk Sektion
│   │       ├── living.tsx    # Wohnungsbau Sektion
│   │       └── commercial.tsx # Gewerbebau Sektion
│   │
│   └── styles/               # Globale Styles
│       └── globals.css
│
├── public/                    # Statische Assets
│   ├── images/               # Bilder
│   └── projects/             # Projektbilder
│
└── package.json              # Projektabhängigkeiten
```

## 🛠 Implementierte Features

### Homepage
- **Hero Section**: Fullscreen Landing mit animiertem Text
- **Services**: Übersicht der Dienstleistungen
- **Expertise**: Darstellung der Kernkompetenzen mit optimierten Bildern
- **Quote**: Animierte Zitat-Sektion
- **Team/Netzwerk**: Interaktive Visualisierung des Partnernetzwerks
  - Dynamische Verbindungslinien
  - Pulsierende Animationen
  - Hover-Effekte
- **Living/Commercial**: Showcase der Wohn- und Gewerbeprojekte
  - Verbesserte Bilddarstellung
  - Optimierte Links zu Projekten

### Projekte
- **Projektübersicht**: Spektakuläre Hero-Sektion mit:
  - Animierten Hintergrund-Blobs
  - Responsiven Größenanpassungen
  - Geometrischen Mustern
  - Smooth Scroll Indicator
- **Projektgrid**: Modernes Grid-Layout mit:
  - Hover-Effekten
  - Bildoverlay
  - Animiertem Erscheinen
- **Projektdetails**: Einzelansicht mit:
  - Hero-Bild
  - Projektbeschreibung
  - Technische Details
  - Bildergalerie

### Kontakt
- **Dedizierte Kontaktseite** unter `/kontakt` mit:
  - Responsivem Design
  - Kontaktformular mit E-Mail-Integration
  - Büro- und Kontaktinformationen
  - Animierten Übergängen
  - Glasmorphism-Effekten

### Navigation
- Responsive Header mit Mobile-Menu
- Aktualisierte Navigation zur Kontaktseite
- Smooth Scroll zu Sektionen
- Aktive Link-Hervorhebung

### Mobile Optimierung
- Angepasste Größen für alle Viewports
- Optimierte Touch-Targets
- Reduzierte Animationen für bessere Performance
- Responsive Typografie
- Verbesserte Abstände und Layouts

### Animationen
- Framer Motion Integrationen
- Scroll-basierte Animationen
- Hover-Effekte
- Übergangsanimationen
- Optimierte Performance

## 📸 Projekte

Aktuelle Projektliste:
1. Lucille-Grahn-Straße, München
2. Ulanenpark, Bamberg
3. Alte Bäckerei, Königstein
4. Mühldorfstraße, München
5. Bauernweg Dresden
6. Mangfallstraße Dresden

## 🚀 Getting Started

1. Repository klonen
2. Dependencies installieren:
   ```bash
   npm install
   ```
3. Entwicklungsserver starten:
   ```bash
   npm run dev
   ```
4. Browser öffnen unter [http://localhost:3000](http://localhost:3000)

## 📝 Umgesetzte Verbesserungen

### Design
- Optimierte Farbpalette
- Verbesserte Typografie
- Modernere UI-Elemente
- Konsistente Abstände

### Performance
- Optimierte Bildgrößen
- Reduzierte Bundle-Größe
- Verbesserte Ladezeiten
- Mobile-First Ansatz

### Benutzerfreundlichkeit
- Intuitivere Navigation
- Bessere Erreichbarkeit
- Optimierte Formulare
- Responsive Breakpoints

## 🛠 Technologien

- Next.js 13
- TypeScript
- Tailwind CSS
- Framer Motion
- Resend API für E-Mails

## 🤝 Contributing

Bitte lesen Sie CONTRIBUTING.md für Details zu unserem Code of Conduct und dem Prozess für Pull Requests.

## 📄 Lizenz

Dieses Projekt ist lizenziert unter [Lizenz] - siehe LICENSE.md für Details.
