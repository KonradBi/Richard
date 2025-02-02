'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function Haus0Page() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.5, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <main className="relative min-h-screen bg-black text-white" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          style={{ scale, y }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/projects/haus-0/Haus01hero.png"
            alt="Haus 0 Hauptansicht"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 h-full flex flex-col justify-end md:justify-center items-center text-center px-4 pb-32 md:pb-0"
        >
          {/* In Development Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-8"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-black/50 text-emerald-300 ring-1 ring-emerald-400 shadow-lg backdrop-blur-sm">
              <svg className="w-4 h-4 mr-2 animate-spin" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Konzept in Entwicklung
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Haus 0
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl mx-auto space-y-4 md:space-y-6 text-shadow-lg backdrop-blur-[2px] p-4 md:p-6 rounded-xl bg-black/30"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed font-medium">
              Ein revolutionäres Energiesparkonzept der nächsten Generation, das wir aktuell entwickeln.
            </p>
            <p className="text-base sm:text-lg text-gray-100 leading-relaxed">
              Unser Ziel: Ein vollständig energetisch autarkes Haus, das durch den Einsatz nachhaltiger Materialien 
              und modernster Technologien ohne externe Energiequellen auskommt. Innovative Lösungen in den Bereichen 
              Solarenergie, Wärmerückgewinnung und effizienter Bauweise werden höchsten Wohnkomfort bei minimalen 
              Betriebskosten ermöglichen.
            </p>
          </motion.div>

          {/* Tech Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 md:mt-8 flex flex-wrap justify-center gap-2 md:gap-3 backdrop-blur-sm p-3 md:p-4 rounded-xl bg-black/20"
          >
            {[
              "Energieautark",
              "Smart Home",
              "Solarenergie",
              "Wärmerückgewinnung",
              "Nachhaltig"
            ].map((tag, index) => (
              <span
                key={index}
                className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm bg-white/10 text-white shadow-lg backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-10 w-full md:w-auto"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-300 text-sm uppercase tracking-widest mb-2 text-center">Entdecken</span>
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="relative z-10 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 py-32">
          {/* Image Grid with Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/3] group"
            >
              <div className="relative h-full overflow-hidden rounded-2xl">
                <Image
                  src="/projects/haus-0/Haus02.png"
                  alt="Haus 0 Detail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            {/* Description 1 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="flex items-center"
            >
              <div className="space-y-6">
                <h2 className="text-4xl font-light text-emerald-100">Modernste Architektur</h2>
                <p className="text-gray-200 leading-relaxed">
                  Klare Linien und zeitlose Eleganz prägen das Erscheinungsbild von Haus 0. 
                  Die durchdachte Formgebung schafft einen harmonischen Dialog zwischen 
                  Innen- und Außenraum.
                </p>
              </div>
            </motion.div>

            {/* Description 2 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="flex items-center md:order-3"
            >
              <div className="space-y-6">
                <h2 className="text-4xl font-light text-emerald-100">Innovative Details</h2>
                <p className="text-gray-200 leading-relaxed">
                  Jedes Detail wurde sorgfältig durchdacht und perfekt umgesetzt. 
                  Die Materialwahl und Verarbeitung spiegeln höchste Qualitätsansprüche wider.
                </p>
              </div>
            </motion.div>

            {/* Image 3 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/3] group md:order-4"
            >
              <div className="relative h-full overflow-hidden rounded-2xl">
                <Image
                  src="/projects/haus-0/Haus03.png"
                  alt="Haus 0 Perspektive"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {[
              {
                title: "Energieautarkie",
                description: "Innovative Systeme für vollständige Unabhängigkeit von externen Energiequellen",
                icon: (
                  <svg className="w-8 h-8 mx-auto mb-4 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                  </svg>
                ),
              },
              {
                title: "Wärmekonzept",
                description: "Effiziente Wärmerückgewinnung und innovative Speichertechnologien",
                icon: (
                  <svg className="w-8 h-8 mx-auto mb-4 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ),
              },
              {
                title: "Smart Control",
                description: "KI-gestützte Steuerung für optimale Energieeffizienz",
                icon: (
                  <svg className="w-8 h-8 mx-auto mb-4 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2 text-emerald-200">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
