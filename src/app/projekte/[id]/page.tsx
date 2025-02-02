"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from 'react'

interface ProjectData {
  title: string;
  location: string;
  description: string;
  images: string[];
  imageDescriptions: { [key: string]: string };
  facts: string[];
  services: string[];
  copyright: string;
}

interface ProjectsData {
  [key: string]: ProjectData;
}

// Projektdaten
const projectsData: ProjectsData = {
  "lucille-grahn": {
    title: "Lucille-Grahn-Straße",
    location: "München Haidhausen",
    description: "Im beliebten Stadtteil Haidhausen entsteht eines der letzten großen Neubauprojekte mit 110 Wohnungen und Tiefgarage. arc MUETZE übernahm die Ausführungsplanung auf Basis des Entwurfs des Bauherrn. Besonders herausfordernd waren die Statik für vier Untergeschosse und bis zu sieben Obergeschosse sowie die technische Versorgung auf dem dicht bebauten Grundstück. Durch innovative Planung konnte ein Gebäude realisiert werden, das zur Linderung des Wohnraummangels in München beiträgt und auch Sozialwohnungen umfasst.",
    images: [
      '/projects/lucille-grahn/thumbail.jpg',
      '/projects/lucille-grahn/22-0125-B01_LH_LUS_Foyer-Entrance-1024x576.jpg',
      '/projects/lucille-grahn/22-0125_B04_Lhomes_LUC_Whg01.jpg',
      '/projects/lucille-grahn/22-0125_B05_Lhomes_LUC_Whg05.jpg',
      '/projects/lucille-grahn/22-0125_B09_Lhomes_LUC_Whg63_Sz.jpg',
      '/projects/lucille-grahn/22-0125_B11_Lhomes_LUC_Whg66_Var1.jpg',
      '/projects/lucille-grahn/220111_lcg_c7.jpg',
    ],
    imageDescriptions: {
      'thumbail.jpg': 'Außenansicht des Gebäudes',
      '22-0125-B01_LH_LUS_Foyer-Entrance-1024x576.jpg': 'Elegantes Eingangsfoyer',
      '22-0125_B04_Lhomes_LUC_Whg01.jpg': 'Moderne Wohnungsgestaltung',
      '22-0125_B05_Lhomes_LUC_Whg05.jpg': 'Lichtdurchfluteter Wohnbereich',
      '22-0125_B09_Lhomes_LUC_Whg63_Sz.jpg': 'Komfortables Schlafzimmer',
      '22-0125_B11_Lhomes_LUC_Whg66_Var1.jpg': 'Offener Wohnraum',
      '220111_lcg_c7.jpg': 'Architektonische Außenperspektive'
    },
    facts: [
      "110 Wohneinheiten, inkl. Sozialwohnungen",
      "4 Untergeschosse mit Tiefgarage",
      "Bis zu 7 Obergeschosse"
    ],
    services: [
      "Ausführungsplanung",
      "Statische Planung",
      "Technische Gebäudeausrüstung"
    ],
    copyright: " L Homes GmbH"
  },
  "ulanenpark": {
    title: "Ulanenpark",
    location: "Bamberg Wunderburg",
    description: "Das Projekt 'Ulanenpark' auf 50.000 m² Fläche vereint 57 Wohnungen, ein Quartierversorgungszentrum mit Supermarkt und Gastronomie sowie eine Tiefgarage mit 110 Stellplätzen. arc MUETZE setzt mit einer nachhaltigen und optisch ansprechenden Keramikfassade, die voll recyclebar ist, neue Maßstäbe in Bauökologie. Besondere Highlights sind die begrünte Fassade für ein verbessertes Mikroklima und die barrierefreie Gestaltung, die Senioren eine optimale Einbindung ins Quartier ermöglicht. Mit einem Investment von 20 Millionen Euro stellt das Projekt einen wichtigen Beitrag zur Stadtentwicklung dar.",
    images: [
      '/projects/ulanenpark/thumbail.jpg',
      '/projects/ulanenpark/Aussen1.jpg',
      '/projects/ulanenpark/Aussen2.jpg',
      '/projects/ulanenpark/Aussen3-1.jpg',
      '/projects/ulanenpark/Aussen6.jpg',
      '/projects/ulanenpark/MUETZE-GUNKEL-Neubau-Gewerbeflaechen-Wohnungen-Aussenansicht-Bamberg-Ulanenpark2-1024x514.jpg'
    ],
    imageDescriptions: {
      'thumbail.jpg': 'Gesamtansicht Ulanenpark Bamberg',
      'Aussen1.jpg': 'Nachhaltige Keramikfassade',
      'Aussen2.jpg': 'Begrünte Fassadenelemente',
      'Aussen3-1.jpg': 'Barrierefreie Außenanlage',
      'Aussen6.jpg': 'Quartierversorgungszentrum',
      'MUETZE-GUNKEL-Neubau-Gewerbeflaechen-Wohnungen-Aussenansicht-Bamberg-Ulanenpark2-1024x514.jpg': 'Architektonische Gesamtansicht'
    },
    facts: [
      "50.000 m² Gesamtfläche",
      "57 Wohneinheiten",
      "110 Tiefgaragenstellplätze",
      "20 Millionen Euro Investitionsvolumen",
      "Supermarkt und Gastronomie",
      "Recyclebare Keramikfassade",
      "Barrierefreies Konzept"
    ],
    services: [
      "Nachhaltige Bauweise",
      "Quartiersplanung",
      "Barrierefreie Gestaltung"
    ],
    copyright: " arc MUETZE"
  },
  "alte-baeckerei": {
    title: "Alte Bäckerei",
    location: "Königstein bei Pirna, Sächsische Schweiz",
    description: "Das historische Gebäude in Königstein, einst die bedeutendste Bäckerei der Stadt, wurde nach Jahrzehnten des Verfalls von Martin Richter, Richard Gunkel und Richard Mütze gerettet und revitalisiert. Mit einem modernen Anbau und ökologischen Materialien entstand ein KFW-70-Standard Vier-Sterne-Aparthotel mit neun hochwertigen, nachhaltig sanierten Suiten und Studios, viele mit Sauna und Blick auf die Stadt oder Festung. Die denkmalgerechte Sanierung bewahrt das Stadtbild und setzt einen Meilenstein für nachhaltige Architektur in der Region.",
    images: [
      '/projects/alte-baeckerei/thumbail.jpg',
      '/projects/alte-baeckerei/BAECKEREI_FRONT_Web-768x623.jpg',
      '/projects/alte-baeckerei/Koenigstein_Favoriten_-3270026-1024x768.jpg',
      '/projects/alte-baeckerei/Koenigstein_Favoriten_-3270108-1024x768.jpg',
      '/projects/alte-baeckerei/Koenigstein_Favoriten_-3270125-1024x768.jpg',
      '/projects/alte-baeckerei/Koenigstein_Favoriten_-3270140-1024x768.jpg',
      '/projects/alte-baeckerei/Koenigstein_Favoriten_-3270165-1024x768.jpg',
      '/projects/alte-baeckerei/Koenigstein_Favoriten_-3270192-1024x768.jpg'
    ],
    imageDescriptions: {
      'thumbail.jpg': 'Revitalisierte Alte Bäckerei',
      'BAECKEREI_FRONT_Web-768x623.jpg': 'Historische Fassade mit modernem Anbau',
      'Koenigstein_Favoriten_-3270026-1024x768.jpg': 'Blick auf Stadt und Festung',
      'Koenigstein_Favoriten_-3270108-1024x768.jpg': 'Suite mit Sauna',
      'Koenigstein_Favoriten_-3270125-1024x768.jpg': 'Hochwertiges Studio-Apartment',
      'Koenigstein_Favoriten_-3270140-1024x768.jpg': 'Nachhaltige Innenausstattung',
      'Koenigstein_Favoriten_-3270165-1024x768.jpg': 'Denkmalgerechte Details',
      'Koenigstein_Favoriten_-3270192-1024x768.jpg': 'Harmonische Integration ins Stadtbild'
    },
    facts: [
      "Vier-Sterne-Aparthotel",
      "9 Suiten und Studios",
      "KFW-70-Standard",
      "Sauna in vielen Einheiten",
      "Historisches Denkmal",
      "Ökologische Materialien",
      "Blick auf Stadt und Festung"
    ],
    services: [
      "Denkmalgerechte Sanierung",
      "Nachhaltige Bauweise",
      "Hotelplanung"
    ],
    copyright: " arc MUETZE"
  },
  "muehldorfstrasse": {
    title: "Mühldorfstraße",
    location: "München Werksviertel",
    description: "Im Auftrag der Oliv GmbH Thomas Sutor Architekt hat arc MUETZE die Ausführungsplanung eines Neubaus in der Mühldorfstraße begleitet. Das kraftvolle Gebäude besticht durch eine monolithische Formensprache und eine markante, vertikal strukturierte Klinkerfassade. Die zweigeschossige Sockelzone verleiht dem Bauwerk zusätzlich eine starke Präsenz. Ein besonderes architektonisches Highlight ist der zentral gelegene Hochgarten, der über eine großzügige Treppenanlage zugänglich ist. Die flexibel gestalteten Büroflächen sind ideal für eine gemischte Nutzung oder einen Großmieter. Direkt im kreativen Zentrum des Münchner 'Werksviertels' gelegen, fügt sich der Neubau perfekt in das kulturelle Umfeld nahe dem neuen Konzerthaus ein.",
    images: [
      '/projects/muehldorfstrasse/thumbail.jpg'
    ],
    imageDescriptions: {
      'thumbail.jpg': 'Markante Klinkerfassade des Gewerbebaus'
    },
    facts: [
      "Monolithische Architektur",
      "Vertikal strukturierte Klinkerfassade",
      "Zweigeschossige Sockelzone",
      "Zentraler Hochgarten",
      "Flexible Büroflächen",
      "Nähe zum neuen Konzerthaus"
    ],
    services: [
      "Ausführungsplanung",
      "Gewerbebau",
      "Fassadengestaltung"
    ],
    copyright: " arc MUETZE"
  },
  "bauernweg": {
    title: "Bauernweg",
    location: "Dresden-Rähnitz",
    description: "In diesem Projekt habe ich im historischen Ortskern von Rähnitz ein wenig bebautes Grundstück in ein modernes Wohnensemble verwandelt. Unser Ansatz: das Motiv des Dreiseithofs aufgreifen und zeitgemäß interpretieren. Drei Baukörper um einen Gemeinschaftshof wurden entwickelt, angelehnt an die historische Substanz der Umgebung. Die zur Straße hin giebelständigen Doppelhäuser und das hintere Reihenhaus orientieren sich in Form und Größe an den benachbarten Gebäuden. Der Entwurf fand Anerkennung bei den städtischen Ämtern und wurde sogar in die Gestaltungsleitlinie Dresdens aufgenommen. Dieses Projekt bietet hochwertige Wohnqualität mit individuellen Freiflächen und einem gemeinschaftlich genutzten Hof, ideal für Familien.",
    images: [
      '/projects/bauernweg/thumbail.jpg',
      '/projects/bauernweg/1935_Bauernweg_P1_03-1024x576.jpg',
      '/projects/bauernweg/1935_Bauernweg_vogelp-1024x576.jpg'
    ],
    imageDescriptions: {
      'thumbail.jpg': 'Moderne Interpretation des Dreiseithofs',
      '1935_Bauernweg_P1_03-1024x576.jpg': 'Giebelständige Doppelhäuser zur Straße',
      '1935_Bauernweg_vogelp-1024x576.jpg': 'Vogelperspektive des Wohnensembles'
    },
    facts: [
      "Dreiseithof-Konzept",
      "Doppelhäuser und Reihenhaus",
      "Gemeinschaftlich genutzter Hof",
      "Individuelle Freiflächen",
      "In Dresdner Gestaltungsleitlinie aufgenommen",
      "Historischer Ortskern"
    ],
    services: [
      "Architekturentwurf",
      "Ensemble-Planung",
      "Historische Integration"
    ],
    copyright: " arc MUETZE"
  },
  "mangfallstrasse": {
    title: "Mangfallstraße",
    location: "München-Untergiesing",
    description: "Der Neubau in der Mangfallstraße in München-Untergiesing stellte für arc MUETZE eine spannende Herausforderung dar. Hier entstand ein Mehrfamilienhaus nach dem fortschrittlichen KfW 40+ Energiestandard, das acht hochwertige Wohnungen und eine Tiefgarage umfasst. Die Aufgabe, ein ansprechendes und zugleich nachhaltiges Gebäude zu schaffen, das sowohl den modernen Wohnansprüchen als auch den hohen energetischen Vorgaben gerecht wird, wurde mit großem Erfolg umgesetzt.",
    images: [
      '/projects/mangfallstrasse/thumbail.jpg',
      '/projects/mangfallstrasse/Mangfallstraße2.jpg'
    ],
    imageDescriptions: {
      'thumbail.jpg': 'Energieeffizientes Mehrfamilienhaus in Untergiesing',
      'Mangfallstraße2.jpg': 'Detailansicht der Fassade'
    },
    facts: [
      "KfW 40+ Energiestandard",
      "8 hochwertige Wohnungen",
      "Tiefgarage",
      "Nachhaltige Bauweise"
    ],
    services: [
      "Energieeffiziente Planung",
      "Wohnungsbau",
      "Nachhaltigkeitskonzept",
      "Bauüberwachung"
    ],
    copyright: " arc MUETZE"
  },
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { scrollY } = useScroll();
  
  const project = projectsData[id as keyof typeof projectsData];
  const imageScale = useTransform(scrollY, [0, 500], [1.1, 1]);
  const titleOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const titleTranslateY = useTransform(scrollY, [0, 200], [0, 50]);
  
  if (!project) {
    return <div>Projekt nicht gefunden</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section mit Hauptbild */}
      <div className="relative h-[85vh] overflow-hidden">
        {/* Zurück-Button */}
        <div className="absolute top-8 left-8 z-50">
          <Link href="/projekte">
            <div className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm font-light">Zurück</span>
            </div>
          </Link>
        </div>

        <motion.div
          style={{ scale: imageScale }}
          className="absolute inset-0"
        >
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Verstärkter Gradient für bessere Lesbarkeit */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        </motion.div>

        {/* Großer Titel mit Scroll-Animation */}
        <motion.div 
          style={{ 
            opacity: titleOpacity,
            y: titleTranslateY
          }}
          className="absolute inset-0 flex items-center justify-center px-4"
        >
          <div className="w-full max-w-7xl mx-auto text-center">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight break-words hyphens-auto"
                  style={{
                    textShadow: '0 4px 12px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.9)'
                  }}>
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-100 font-light break-words"
                 style={{
                   textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.9)'
                 }}>
                {project.location}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Projektbeschreibung und Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Projektbeschreibung */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">Projektbeschreibung</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed break-words">
              {project.description}
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Bildrechte: {project.copyright}
            </p>
          </motion.div>

          {/* Projektdetails */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Projektfakten */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Projektfakten</h3>
              <ul className="space-y-2">
                {project.facts.map((fact, index) => (
                  <li key={index} className="flex items-start space-x-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm md:text-base">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Leistungen */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Leistungen</h3>
              <ul className="space-y-2">
                {project.services.map((service, index) => (
                  <li key={index} className="flex items-start space-x-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm md:text-base">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bildergalerie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-24"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">Projektimpressionen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {project.images.slice(1).map((image, index) => {
              const imageName = image.split('/').pop() || '';
              const description = project.imageDescriptions[imageName as keyof typeof project.imageDescriptions];
              
              return (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative ${
                    index % 3 === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden rounded-2xl ${
                    index % 3 === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'
                  }`}>
                    <Image
                      src={image}
                      alt={description}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onClick={() => setSelectedImage(image)}
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 p-6 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white text-lg font-light">
                        {description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      {/* Vollbild-Ansicht */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-7xl aspect-[16/9]">
            <Image
              src={selectedImage}
              alt="Vergrößerte Ansicht"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default ProjectDetail;
