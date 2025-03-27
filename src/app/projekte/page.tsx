"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'
import { useState } from 'react'

// Projekte in Kategorien aufteilen
const newBuildings = [
  { 
    id: 'lucille-grahn',
    name: 'Lucille-Grahn-Straße',
    thumbnail: '/projects/lucille-grahn/thumbail.jpg',
    location: 'München'
  },
  { 
    id: 'ulanenpark',
    name: 'Ulanenpark',
    thumbnail: '/projects/ulanenpark/thumbail.jpg',
    location: 'Bamberg'
  },
  { 
    id: 'muehldorfstrasse',
    name: 'Mühldorfstraße',
    thumbnail: '/projects/muehldorfstrasse/thumbail.jpg',
    location: 'München'
  },
  { 
    id: 'bauernweg',
    name: 'Bauernweg',
    thumbnail: '/projects/bauernweg/thumbail.jpg',
    location: 'Dresden-Rähnitz'
  },
  { 
    id: 'mangfallstrasse',
    name: 'Mangfallstraße',
    thumbnail: '/projects/mangfallstrasse/thumbail.jpg',
    location: 'München-Untergiesing'
  },
  { 
    id: 'alte-baeckerei',
    name: 'Alte Bäckerei',
    thumbnail: '/projects/alte-baeckerei/thumbail.jpg',
    location: 'Königstein'
  }
]

const renovationProjects = [
  {
    id: 'puschkinallee',
    name: 'Puschkinallee',
    thumbnail: '/images/projects/sanierung/puschkinallee/thumbnail.jpg',
    location: 'Dessau',
    description: 'Was einst ein unscheinbares Mehrfamilienhaus war, präsentiert sich heute als modernes Schmuckstück im Herzen der Stadt. Die umfassende Sanierung hat dem Gebäude neues Leben eingehaucht und schafft nun attraktiven Wohnraum für seine Bewohner.'
  },
  {
    id: 'konkordienplatz',
    name: 'Konkordienplatz',
    thumbnail: '/images/projects/sanierung/konkordienplatz/thumbnail.jpg',
    location: 'Dresden',
    description: 'Im pulsierenden Herzen Dresdens erwacht ein klassisches Gründerzeithaus zu neuem Leben. Die sorgfältige Sanierung bewahrt den unverwechselbaren Charakter der sächsischen Architekturgeschichte, während moderne Wohnqualität für die Bewohner geschaffen wurde.'
  },
  {
    id: 'nymphenburgerstrasse',
    name: 'Nymphenburgerstraße',
    thumbnail: '/images/projects/sanierung/nymphenburgerstrasse/thumbnail.jpg',
    location: 'München',
    description: 'In behutsamer Transformation wurde ein historisches Wohnjuwel zum Leben erweckt. Die gelungene Sanierung schafft eine perfekte Balance zwischen ehrwürdigem Bestand und zeitgemäßem Komfort.'
  },
  {
    id: 'ulrichstrasse',
    name: 'Ulrichstraße',
    thumbnail: '/images/projects/sanierung/ulrichstrasse/thumbnail.jpg',
    location: 'Dresden-Loschwitz',
    description: 'Eine charmante, denkmalgeschützte Villa erhielt durch umfassende Sanierung und einen modernen Anbau neues Leben. Die intensive Abstimmung mit dem Denkmalschutz ermöglichte die perfekte Verbindung von historischer Substanz und zeitgemäßem Wohnkomfort.'
  }
]

export default function ProjektePage() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section mit spektakulärem Design */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          {/* Top white gradient */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white via-white to-transparent z-10" />
          {/* Main background gradient */}
          <div className="absolute inset-0 bg-gradient-radial from-primary-200/30 to-transparent" />
          
          {/* Animated Blobs */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, x: -20, y: -20 }}
            animate={{ 
              scale: [0.8, 1, 0.9],
              opacity: [0.1, 0.2, 0.1],
              x: [-20, 0, -10],
              y: [-20, 0, -15]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-nature-sage/20 rounded-full mix-blend-multiply filter blur-3xl"
          />
          <motion.div 
            initial={{ scale: 1.2, opacity: 0, x: 20, y: 20 }}
            animate={{ 
              scale: [1.2, 1, 1.1],
              opacity: [0.1, 0.2, 0.1],
              x: [20, 0, 10],
              y: [20, 0, 15]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-nature-teal/20 rounded-full mix-blend-multiply filter blur-3xl"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, x: 0, y: 20 }}
            animate={{ 
              scale: [0.9, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 20, -20],
              y: [20, -20, 0]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 left-1/2 w-[275px] md:w-[550px] h-[275px] md:h-[550px] bg-nature-sand/20 rounded-full mix-blend-multiply filter blur-3xl"
          />
          
          {/* Geometrische Muster */}
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.02, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#9ba297_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.015]"
            />
            <motion.div
              animate={{ 
                opacity: [0.3, 0.5, 0.3],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }} 
              className="absolute inset-0 bg-gradient-to-b from-nature-sand/5 via-transparent to-nature-sand/5"
            />
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-sm md:text-base text-nature-teal uppercase tracking-[0.2em] mb-6">
                Referenzen
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-8 leading-tight">
                <span className="block text-nature-darkBrown">
                  Unsere <span className="text-nature-teal">Projekte</span>
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-nature-darkBrown/80 max-w-4xl mx-auto leading-relaxed font-light px-4">
                Nachhaltige Architektur im Einklang mit Mensch und Natur.
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="block mt-4 text-nature-teal"
                >
                  Entdecken Sie unsere Vision für die Zukunft des Bauens.
                </motion.span>
              </p>
            </motion.div>

            {/* Dekorative Linie */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="w-24 md:w-32 h-1 bg-gradient-to-r from-nature-teal to-nature-sage mx-auto rounded-full"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-[calc(50%-3rem)] md:left-[calc(50%-1.5rem)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div 
            className="flex flex-col items-center gap-3"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-nature-teal/60 text-sm uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ 
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg className="w-6 h-6 text-nature-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Projekt Grid mit verbesserten Animationen */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        {/* Einleitender Text */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-base md:text-lg text-nature-darkBrown/80 px-4">
            Hier finden Sie eine kuratierte Auswahl unserer Projekte. Jedes Projekt steht für unsere Vision 
            einer nachhaltigen und lebenswerten Architektur. Entdecken Sie die Geschichten hinter unseren Arbeiten.
          </p>
        </div>

        {/* Neubauprojekte */}
        <div className="mb-24 md:mb-32">
          <h2 className="text-2xl md:text-3xl font-light mb-6 md:mb-8 px-4 text-nature-darkBrown">Neubauprojekte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {newBuildings.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 1,
                  delay: index * 0.2,
                  ease: [0.21, 0.68, 0.66, 1.01]
                }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="relative group"
              >
                <Link href={`/projekte/${project.id}`}>
                  <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2">
                    <div className="aspect-[16/10] overflow-hidden">
                      <motion.div
                        className="relative h-full w-full transform-gpu transition-all duration-700"
                        animate={{
                          scale: hoveredProject === project.id ? 1.1 : 1
                        }}
                      >
                        <Image
                          src={project.thumbnail}
                          alt={project.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-800/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                      </motion.div>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 p-8 md:p-12 bg-gradient-to-t from-nature-darkBrown/90 via-nature-darkBrown/60 to-transparent">
                      <motion.div
                        animate={{
                          y: hoveredProject === project.id ? 0 : 10,
                          opacity: hoveredProject === project.id ? 1 : 0.9
                        }}
                        transition={{ duration: 0.4 }}
                        className="transform-gpu"
                      >
                        <h3 className="text-2xl md:text-3xl font-semibold text-nature-sand mb-3">
                          {project.name}
                        </h3>
                        <div className="flex items-center text-nature-sage text-sm font-light">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.location}
                        </div>
                      </motion.div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-nature-teal via-nature-sage to-nature-teal transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sanierungsprojekte Teaser */}
        <div className="relative mt-32">
          <div className="max-w-7xl mx-auto">
            {/* Split Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Linke Seite - Bild */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-[4/3] lg:aspect-auto"
              >
                <div className="absolute inset-0 lg:inset-y-8">
                  {/* Hintergrundbild Container mit Overlay */}
                  <div className="relative h-full w-full overflow-hidden rounded-3xl">
                    <Image
                      src="/projects/sanierung/Puschkinallee1.jpg"
                      alt="Historisches Gebäude in der Puschkinallee"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 to-stone-900/40" />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        <div className="text-white space-y-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-12 h-[1px] bg-[#e5d5a3]" />
                            <span className="text-sm uppercase tracking-wider text-[#e5d5a3]">Tradition trifft Innovation</span>
                          </div>
                          <h3 className="text-2xl font-light text-white">
                            Behutsame Transformation historischer Architektur
                          </h3>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Rechte Seite - Text */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex items-center px-4 lg:px-8"
              >
                <div className="max-w-xl">
                  <div className="space-y-8">
                    {/* Überschrift */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-[1px] bg-nature-darkBrown/30" />
                        <span className="text-sm uppercase tracking-wider text-nature-darkBrown/50">Sanierungsprojekte</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-light text-nature-darkBrown">
                        Neues Leben für historische Schätze
                      </h2>
                    </motion.div>

                    {/* Beschreibung */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-lg text-nature-darkBrown/80 leading-relaxed"
                    >
                      Entdecken Sie unsere Sanierungsprojekte, bei denen wir historische Gebäude behutsam in die 
                      Moderne führen und dabei ihre einzigartige Geschichte bewahren.
                    </motion.p>

                    {/* Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="pt-4"
                    >
                      <Link 
                        href="/projekte/sanierung"
                        className="group inline-flex items-center text-lg text-nature-darkBrown hover:text-nature-teal transition-colors duration-300"
                      >
                        <span className="border-b-2 border-nature-sand group-hover:border-nature-teal transition-colors duration-300">
                          Sanierungsprojekte entdecken
                        </span>
                        <svg 
                          className="ml-3 w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Konzeptstudien Sektion */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative mt-16 md:mt-32 pt-16 md:pt-0 bg-gradient-to-br from-nature-sand via-white to-nature-sand/80 rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-nature-teal/5 via-transparent to-transparent"></div>
            {/* Animated background elements */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.1, 0.9],
                opacity: [0, 0.15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-nature-sage/20 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [1, 1.2, 0.9],
                opacity: [0, 0.1, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
              className="absolute bottom-1/3 right-1/3 w-48 md:w-96 h-48 md:h-96 bg-nature-teal/20 rounded-full blur-3xl"
            />
          </div>
          
          <div className="relative container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center min-h-[80vh] md:min-h-screen">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto px-4"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-nature-teal via-nature-darkBrown to-nature-sage relative z-10"
              >
                Konzeptstudien
                {/* Text Shadow Effect */}
                <span className="absolute -bottom-2 left-0 w-full text-nature-teal/10 blur-sm z-0">
                  Konzeptstudien
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base sm:text-lg md:text-2xl text-nature-darkBrown leading-relaxed"
              >
                Entdecken Sie unsere Konzeptstudien und Entwürfe. 
                Hier verbinden wir nachhaltige Architektur mit 
                innovativen Ideen für die Zukunft.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block w-full sm:w-auto mt-8"
              >
                <Link 
                  href="/projekte/konzepte"
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-nature-darkBrown bg-nature-teal/10 rounded-full overflow-hidden transition-all duration-300 hover:bg-nature-teal/20 w-full sm:w-auto"
                >
                  <span className="relative z-10">Konzepte entdecken</span>
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-nature-sage/20 via-nature-teal/20 to-nature-sage/20 opacity-50"
                  />
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Decorative Elements - Hidden on mobile */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
              className="hidden md:block absolute left-10 top-1/4 w-24 h-24 border border-nature-teal/20 rounded-full"
            />
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: {
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }
              }}
              className="hidden md:block absolute right-10 bottom-1/4 w-32 h-32 border-2 border-nature-sage/20 rounded-full"
            />
          </div>
        </motion.section>
      </div>
    </div>
  )
}
