"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const titleWords = ["Neues", "Leben", "für", "historische", "Schätze"]

export default function SanierungPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-white h-24 z-10" /> {/* Weißer Bereich für Navigation */}
        <Image
          src="/projects/sanierung/Puschkinallee1.jpg"
          alt="Sanierungsprojekte Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 flex flex-wrap gap-x-5 gap-y-2"
              >
                {titleWords.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2,
                      ease: [0.2, 0.65, 0.3, 0.9]
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed"
              >
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Projekte */}
      <div className="container mx-auto px-4 py-24">
        <div className="space-y-32">
          {/* Puschkinallee */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[16/9] lg:aspect-[21/9]">
                <div className="absolute inset-0">
                  <div className="relative h-full w-full overflow-hidden rounded-3xl group">
                    <Image
                      src="/projects/sanierung/Puschkinallee1.jpg"
                      alt="Puschkinallee Projekt"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:pl-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-[1px] bg-[#d4af37]" />
                  <span className="text-[#d4af37] uppercase tracking-wider text-sm">Dessau</span>
                </div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-4xl font-light mb-6"
                >
                  Puschkinallee
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-gray-600 leading-relaxed"
                >
                  Was einst ein unscheinbares Mehrfamilienhaus war, präsentiert sich heute als modernes Schmuckstück im Herzen der Stadt. Die umfassende Sanierung hat dem Gebäude neues Leben eingehaucht und schafft nun attraktiven Wohnraum für seine Bewohner.
                </motion.p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src="/projects/sanierung/Puschkinallee2.jpg"
                  alt="Puschkinallee weitere Ansicht"
                  fill
                  className="object-cover rounded-3xl"
                  sizes="100vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Konkordienplatz */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 relative aspect-[16/9] lg:aspect-[21/9]">
                <div className="absolute inset-0">
                  <div className="relative h-full w-full overflow-hidden rounded-3xl group">
                    <Image
                      src="/projects/sanierung/Konkordienplatz2.jpeg"
                      alt="Konkordienplatz Projekt"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:pr-8 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-[1px] bg-[#d4af37]" />
                  <span className="text-[#d4af37] uppercase tracking-wider text-sm">Dresden</span>
                </div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-4xl font-light mb-6"
                >
                  Konkordienplatz
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-gray-600 leading-relaxed"
                >
                  Im pulsierenden Herzen Dresdens erwacht ein klassisches Gründerzeithaus zu neuem Leben. Die sorgfältige Sanierung bewahrt den unverwechselbaren Charakter der sächsischen Architekturgeschichte, während moderne Wohnqualität für die Bewohner geschaffen wurde. In harmonischer Weise fügt sich das Gebäude in das historische Stadtbild der Elbmetropole ein.
                </motion.p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src="/projects/sanierung/Konkordienplatz1.jpeg"
                  alt="Konkordienplatz weitere Ansicht"
                  fill
                  className="object-cover rounded-3xl"
                  sizes="100vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Nymphenburgerstraße */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[16/9] lg:aspect-[21/9]">
                <div className="absolute inset-0">
                  <div className="relative h-full w-full overflow-hidden rounded-3xl group">
                    <Image
                      src="/projects/sanierung/Nymphenburgerstraße1.jpg"
                      alt="Nymphenburgerstraße Projekt"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:pl-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-[1px] bg-[#d4af37]" />
                  <span className="text-[#d4af37] uppercase tracking-wider text-sm">München</span>
                </div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-4xl font-light mb-6"
                >
                  Nymphenburgerstraße
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-gray-600 leading-relaxed"
                >
                  In behutsamer Transformation wurde ein historisches Wohnjuwel zum Leben erweckt. Die gelungene Sanierung schafft eine perfekte Balance zwischen ehrwürdigem Bestand und zeitgemäßem Komfort. Hier verschmelzen Tradition und Moderne zu einem harmonischen Ganzen, das neue Maßstäbe in der Wohnqualität setzt. Ein Ort, an dem Geschichte spürbar bleibt und gleichzeitig moderne Lebensart Einzug hält.
                </motion.p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/projects/sanierung/Nymphenburgerstraße2.jpg"
                  alt="Nymphenburgerstraße weitere Ansicht 1"
                  fill
                  className="object-cover rounded-3xl"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/projects/sanierung/Nymphenburgerstraße3.jpg"
                  alt="Nymphenburgerstraße weitere Ansicht 2"
                  fill
                  className="object-cover rounded-3xl"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/projects/sanierung/Nymphenburgerstraße4.jpg"
                  alt="Nymphenburgerstraße weitere Ansicht 3"
                  fill
                  className="object-cover rounded-3xl"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/projects/sanierung/Nymphenburgerstraße5.jpg"
                  alt="Nymphenburgerstraße weitere Ansicht 4"
                  fill
                  className="object-cover rounded-3xl"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Ulrichstraße */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 relative aspect-[16/9] lg:aspect-[21/9]">
                <div className="absolute inset-0">
                  <div className="relative h-full w-full overflow-hidden rounded-3xl group">
                    <Image
                      src="/projects/sanierung/Ulrichstraße2.jpg"
                      alt="Ulrichstraße Projekt"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:pr-8 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-[1px] bg-[#d4af37]" />
                  <span className="text-[#d4af37] uppercase tracking-wider text-sm">Dresden-Loschwitz</span>
                </div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-4xl font-light mb-6"
                >
                  Ulrichstraße
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-gray-600 leading-relaxed"
                >
                  arc MUETZE erhielt den Auftrag für die Planung der Umbau- und Modernisierungsmaßnahmen einer charmanten, denkmalgeschützten Villa in Dresden-Loschwitz. Nach jahrelanger Vernachlässigung durch die Vorbesitzer war das Gebäude eines der letzten unsanierten Objekte dieser Größe in der Straße. Aufgrund des baulichen Zustands und der geplanten zukünftigen Nutzung war eine umfassende Sanierung notwendig, die intensive Abstimmungen mit dem Denkmalschutz erforderte. Zusätzlich zur Sanierung der bestehenden Räumlichkeiten wurde ein moderner Anbau Richtung Garten errichtet, der zusätzlichen Wohnraum bietet.
                </motion.p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src="/projects/sanierung/Ulrichstraße1.jpg"
                  alt="Ulrichstraße weitere Ansicht"
                  fill
                  className="object-cover rounded-3xl"
                  sizes="100vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
