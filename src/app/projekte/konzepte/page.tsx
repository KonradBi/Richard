"use client"

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const concepts = [
  {
    id: 'concept-1',
    title: 'Urbane Oase',
    year: '2025',
    description: 'Ein innovatives Wohnkonzept, das urbanes Leben mit Natur verbindet. Die Architektur schafft fließende Übergänge zwischen Innen- und Außenräumen.',
    tags: ['Nachhaltigkeit', 'Innovation', 'Wohnen'],
    image: '/projects/konzepte/arcmuetzekonzept1.png',
    challenge: 'Integration von Natur in urbane Wohnräume',
    solution: 'Biophiles Design mit nahtlosen Übergängen zwischen Wohn- und Naturraum',
  },
  {
    id: 'concept-2',
    title: 'Lichtdurchflutete Perspektiven',
    year: '2024',
    description: 'Ein Wohnkonzept, das natürliches Licht als zentrales Gestaltungselement nutzt. Großzügige Fenster und durchdachte Raumaufteilung maximieren den Lichteinfall.',
    tags: ['Lichtdesign', 'Wohnkomfort', 'Nachhaltigkeit'],
    image: '/projects/konzepte/arcmuetzekonzept2.png',
    challenge: 'Optimale Nutzung von natürlichem Licht',
    solution: 'Innovative Fensterkonzepte und offene Raumgestaltung',
  },
  {
    id: 'concept-3',
    title: 'Modulare Flexibilität',
    year: '2025',
    description: 'Ein adaptives Wohnkonzept, das sich den sich ändernden Bedürfnissen seiner Bewohner anpasst. Flexible Grundrisse ermöglichen verschiedene Nutzungsszenarien.',
    tags: ['Flexibilität', 'Innovation', 'Modular'],
    image: '/projects/konzepte/arcmuetzekonzept3.png',
    challenge: 'Anpassungsfähigkeit an verschiedene Lebensphasen',
    solution: 'Transformierbare Räume und modulare Strukturen',
  },
  {
    id: 'concept-4',
    title: 'Vertikale Gärten',
    year: '2025',
    description: 'Eine vertikale Interpretation des urbanen Gartens. Jede Etage bietet private Grünflächen, die als natürliche Klimaanlage fungieren.',
    tags: ['Ökologie', 'Nachhaltigkeit', 'Innovation'],
    image: '/projects/konzepte/arcmuetzekonzept4.png',
    challenge: 'Grünflächen in verdichteten Stadtgebieten',
    solution: 'Integration von Gärten in die Vertikale',
  },
  {
    id: 'concept-5',
    title: 'Ressourcenoptimiertes Wohnen',
    year: '2025',
    description: 'Ein zukunftsweisendes Wohnkonzept, das durch innovative Technologien und intelligentes Design den Ressourcenverbrauch minimiert und nachhaltige Energienutzung optimiert.',
    tags: ['Nachhaltigkeit', 'Innovation', 'Ressourceneffizienz'],
    image: '/projects/konzepte/arcmuetzekonzept5.png',
    challenge: 'Minimierung des ökologischen Fußabdrucks',
    solution: 'Intelligente Systeme für optimierte Ressourcennutzung',
  },
  {
    id: 'concept-6',
    title: 'Gemeinschaftliches Wohnen',
    year: '2025',
    description: 'Ein innovatives Co-Living Konzept, das private Rückzugsorte mit gemeinschaftlich genutzten Bereichen verbindet.',
    tags: ['Co-Living', 'Gemeinschaft', 'Innovation'],
    image: '/projects/konzepte/arcmuetzekonzept6.png',
    challenge: 'Balance zwischen Privatsphäre und Gemeinschaft',
    solution: 'Durchdachte Zonierung und flexible Gemeinschaftsbereiche',
  },
  {
    id: 'concept-7',
    title: 'Minimalistischer Luxus',
    year: '2025',
    description: 'Ein Wohnkonzept, das Luxus durch Reduktion definiert. Hochwertige Materialien und durchdachte Details schaffen zeitlose Eleganz.',
    tags: ['Minimalismus', 'Design', 'Luxus'],
    image: '/projects/konzepte/arcmuetzekonzept7.png',
    challenge: 'Luxuriöses Wohnen ohne Überfluss',
    solution: 'Fokus auf Qualität und essenzielle Gestaltungselemente',
  },
  {
    id: 'concept-8',
    title: 'Smart Living',
    year: '2025',
    description: 'Ein zukunftsweisendes Wohnkonzept, das intelligente Technologien nahtlos in die Architektur integriert.',
    tags: ['Smart Home', 'Technologie', 'Innovation'],
    image: '/projects/konzepte/arcmuetzekonzept8.png',
    challenge: 'Integration von Technologie in Wohnarchitektur',
    solution: 'Unsichtbare aber allgegenwärtige Smart-Home-Lösungen',
  }
]

export default function KonzeptePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section mit 3D Perspektive */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden perspective-[2000px]">
        <div className="absolute inset-0">
          {/* Dynamischer 3D Hintergrund */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-black to-black transform-gpu rotate-x-12"></div>
          
          {/* Animated Grid mit 3D-Effekt */}
          <div 
            className="absolute inset-0 transform-gpu rotate-x-12" 
            style={{ 
              backgroundImage: `
                linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '4rem 4rem',
              maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
            }}
          ></div>

          {/* Floating particles */}
          {mounted && (
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-emerald-500/30 rounded-full"
                  initial={{
                    x: Math.random() * 1000,
                    y: Math.random() * 1000,
                  }}
                  animate={{
                    x: [
                      Math.random() * 1000,
                      Math.random() * 1000,
                    ],
                    y: [
                      Math.random() * 1000,
                      Math.random() * 1000,
                    ],
                    scale: [0.5, 1.5, 0.5],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                  }}
                  style={{
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Hero Content mit 3D Transform */}
        <div className="flex-1 flex items-center">
          <div className="relative z-10 container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 100, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-5xl mx-auto transform-gpu"
            >
              <div className="relative">
                <motion.h1 
                  className="text-8xl md:text-9xl font-bold mb-8 relative z-10"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-white to-emerald-400 relative z-10">
                    Ideenarchitektur
                  </span>
                  {/* Text Shadow Effect */}
                  <span className="absolute -bottom-2 left-0 w-full text-emerald-900/30 blur-sm z-0">
                    Ideenarchitektur
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-xl md:text-2xl text-gray-300 leading-relaxed relative z-10"
                >
                  Meine Entwürfe gehen über das Heute hinaus und zeigen, wie modernes Wohnen aussehen könnte. 
                  Diese Entwürfe sind kreative Studien, die innovative Grundrisse, nachhaltige Materialien und 
                  ästhetische Harmonie vereinen, um Wohnräume neu zu denken.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator in separatem Container */}
        <div className="relative z-10 pb-16">
          <motion.div
            className="flex flex-col items-center"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 2
            }}
          >
            <span className="text-emerald-400 text-sm uppercase tracking-widest mb-2">Entdecken</span>
            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Concepts Grid mit 3D Cards */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-32">
            {concepts.map((concept, index) => (
              <motion.div
                key={concept.id}
                initial={{ opacity: 0, y: 100, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="relative group perspective-[2000px]"
              >
                {/* Concept Card mit 3D Hover Effect */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 group-hover:transform-gpu group-hover:rotate-y-[-5deg] transition-transform duration-500">
                  {/* Image Side */}
                  <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden rounded-3xl">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={concept.image}
                        alt={concept.title}
                        fill
                        className="object-cover rounded-3xl"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Glowing Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 mix-blend-overlay"></div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Side */}
                  <div className="flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="space-y-6"
                    >
                      {/* Tags mit Glow Effect */}
                      <div className="flex flex-wrap gap-2">
                        {concept.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-1.5 text-sm bg-emerald-900/30 text-emerald-400 rounded-full
                                     hover:bg-emerald-800/40 transition-colors duration-300
                                     shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title mit 3D Effect */}
                      <h2 className="text-4xl font-light relative group">
                        <span className="relative z-10 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {concept.title}
                        </span>
                        <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-emerald-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </h2>

                      {/* Year */}
                      <div className="text-gray-400">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {concept.year}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed">
                        {concept.description}
                      </p>

                      {/* Challenge & Solution mit Hover Effects */}
                      <div className="space-y-4 pt-4">
                        <motion.div
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-emerald-400 font-medium mb-2 flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Herausforderung
                          </h3>
                          <p className="text-gray-400">{concept.challenge}</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-emerald-400 font-medium mb-2 flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Lösung
                          </h3>
                          <p className="text-gray-400">{concept.solution}</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
