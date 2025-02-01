# Arc Mütze Website

Eine moderne, responsive Website für Arc Mütze, entwickelt mit Next.js 13, TypeScript, Tailwind CSS und Framer Motion.

## 🚀 Features

- Responsive Design für alle Bildschirmgrößen
- Moderne Animationen und Übergänge
- Optimierte Performance durch Next.js
- SEO-freundliche Struktur
- Interaktive Komponenten
- Dynamische Projektgalerie

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
- **Expertise**: Darstellung der Kernkompetenzen
- **Quote**: Animierte Zitat-Sektion
- **Team/Netzwerk**: Interaktive Visualisierung des Partnernetzwerks
  - Dynamische Verbindungslinien
  - Pulsierende Animationen
  - Hover-Effekte
- **Living/Commercial**: Showcase der Wohn- und Gewerbeprojekte

### Projekte
- **Projektübersicht**: Grid-Layout mit:
  - Hover-Effekten
  - Bildoverlay
  - Animiertem Erscheinen
- **Projektdetails**: Einzelansicht mit:
  - Hero-Bild
  - Projektbeschreibung
  - Technische Details
  - Bildergalerie

### Navigation
- Responsive Header mit Mobile-Menu
- Smooth Scroll zu Sektionen
- Aktive Link-Hervorhebung

### Animationen
- Framer Motion Integrationen
- Scroll-basierte Animationen
- Hover-Effekte
- Übergangsanimationen

## 📸 Projekte

Aktuelle Projektliste:
1. Lucille-Grahn-Straße, München
2. Ulanenpark, Bamberg
3. Alte Bäckerei, Königstein
4. Mühldorfstraße, München
5. Bauernweg Dresden
6. Mangfallstraße Dresden

## 🚀 Getting Started

1. Repository klonen:
```bash
git clone [repository-url]
```

2. Abhängigkeiten installieren:
```bash
npm install
```

3. Entwicklungsserver starten:
```bash
npm run dev
```

4. Browser öffnen und http://localhost:3000 aufrufen

## 🔧 Technologie-Stack

- **Framework**: Next.js 13
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS
- **Animationen**: Framer Motion
- **Deployment**: [Platform]

## 📝 Nächste Schritte

- [ ] Integration der Projektbilder
- [ ] Vervollständigung der Projektdetails
- [ ] SEO-Optimierung
- [ ] Performance-Tests
- [ ] Deployment Setup

## 🤝 Contributing

Bitte lesen Sie CONTRIBUTING.md für Details zu unserem Code of Conduct und dem Prozess für Pull Requests.

## 📄 Lizenz

Dieses Projekt ist lizenziert unter [Lizenz] - siehe LICENSE.md für Details.

## Session Update (01.02.2025)

### Sanierungsprojekte Seite

#### Layout und Design
- Alle Sanierungsprojekte wurden auf einer einzelnen Seite konsolidiert
- Hero-Sektion:
  - Neues Hero-Bild (Puschkinallee1.jpg)
  - Weißer Bereich (h-24) am oberen Rand für bessere Navigation-Sichtbarkeit
  - Animierter Titel "Neues Leben für historische Schätze" mit Wort-für-Wort Animation
  - Entfernung des beschreibenden Textes unter dem Titel
  - Dunklerer Gradient (from-black/80) für bessere Lesbarkeit

#### Bildergalerien
Jedes Projekt wurde mit einer eigenen Bildergalerie ausgestattet:

1. **Puschkinallee**
   - Hauptbild: Puschkinallee1.jpg
   - Zusatzbild: Puschkinallee2.jpg
   - Format: 16:9 (Mobile) / 21:9 (Desktop)

2. **Konkordienplatz**
   - Hauptbild: Konkordienplatz2.jpeg (mit Hover-Effekt)
   - Zusatzbild: Konkordienplatz1.jpeg
   - Format: 16:9 (Mobile) / 21:9 (Desktop)

3. **Nymphenburgerstraße**
   - Hauptbild: Nymphenburgerstraße1.jpg
   - Vier Zusatzbilder im Grid-Layout:
     - Nymphenburgerstraße2.jpg
     - Nymphenburgerstraße3.jpg
     - Nymphenburgerstraße4.jpg
     - Nymphenburgerstraße5.jpg
   - Format: 4:3 für Grid-Bilder

4. **Ulrichstraße**
   - Hauptbild: Ulrichstraße2.jpg (mit Hover-Effekt)
   - Zusatzbild: Ulrichstraße1.jpg
   - Format: 16:9 (Mobile) / 21:9 (Desktop)

#### Bildoptimierungen
- Alle Bilder verwenden `object-cover` für gleichmäßige Abdeckung
- Abgerundete Ecken (rounded-3xl) für alle Bilder
- Hover-Effekte auf Hauptbildern (scale-105 mit 700ms Transition)
- Responsive `sizes` Attribute für optimale Ladeleistung
  - Hauptbilder: `(max-width: 768px) 100vw, 50vw`
  - Grid-Bilder: `(max-width: 768px) 50vw, 25vw`
  - Große Einzelbilder: `100vw`

### Landing Page
- Farbänderung in der Hero-Sektion:
  - Das Wort "Architektur" wurde von der silbernen Gradient-Farbe zurück zu `text-emerald-600` (grün) geändert

### Nächste Schritte
- [ ] Performance-Tests für Bildladeverhalten
- [ ] Überprüfung der Responsive-Darstellung auf verschiedenen Geräten
- [ ] Mögliche Ergänzung weiterer Projektdetails
- [ ] SEO-Optimierung der Bildattribute
