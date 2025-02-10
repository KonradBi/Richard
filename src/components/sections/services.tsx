"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Leaf, Building2, LineChart, Handshake } from "lucide-react"

const services = [
  {
    title: "Grundlagenermittlung & Planung",
    description: "Von der ersten Idee bis zur detaillierten Ausführungsplanung begleiten wir Sie durch die HOAI-Leistungsphasen 1-5.",
    Icon: Leaf,
    gradient: "from-primary-200 to-primary-300"
  },
  {
    title: "Ausschreibung & Vergabe",
    description: "Professionelle Vorbereitung und Durchführung der Ausschreibung sowie Vergabe an qualifizierte Fachbetriebe (HOAI-LPH 6-7).",
    Icon: Building2,
    gradient: "from-primary-300 to-primary-200"
  },
  {
    title: "Bauüberwachung",
    description: "Kompetente Objektüberwachung und Qualitätssicherung während der gesamten Bauphase (HOAI-LPH 8).",
    Icon: LineChart,
    gradient: "from-primary-200 to-primary-300"
  },
  {
    title: "Objektbetreuung",
    description: "Umfassende Betreuung und Dokumentation bis zur Fertigstellung sowie während der Gewährleistungsphase (HOAI-LPH 9).",
    Icon: Handshake,
    gradient: "from-primary-300 to-primary-200"
  }
]

export function Services() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"])

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-neutral-50">
      {/* Dynamischer Hintergrund */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-primary-200/20 to-neutral-50" />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #000 1px, transparent 0)",
          backgroundSize: "48px 48px"
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative container mx-auto px-4"
        style={{ y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
            >
              Architektur mit Leidenschaft
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="mt-4 text-lg leading-8 text-neutral-600"
            >
              Von der ersten Skizze bis zur Bauabnahme: Wir begleiten Sie durch alle HOAI-Leistungsphasen und verbinden innovative Gestaltung mit nachhaltiger Bauweise.
            </motion.p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
                  className="group relative"
                >
                  {/* Animierter Hintergrund-Effekt */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/30 to-primary-600/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 group-hover:scale-105" />
                  
                  {/* Karten-Container */}
                  <div className="relative flex flex-col h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-neutral-200/50 group-hover:shadow-xl group-hover:border-primary-300 group-hover:-translate-y-1 transition-all duration-500">
                    {/* Icon mit Animation */}
                    <div className="mb-6 transform group-hover:scale-110 transition-all duration-500">
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        <div className="absolute inset-0 bg-primary-100 rounded-xl group-hover:scale-110 transition-all duration-500" />
                        <service.Icon className="relative h-6 w-6 text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
                      </div>
                    </div>
                    
                    {/* Titel */}
                    <dt className="text-xl font-semibold text-neutral-900 mb-4 group-hover:text-primary-600 transition-all duration-300">
                      {service.title}
                    </dt>
                    
                    {/* Beschreibung */}
                    <dd className="text-base leading-7 text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                      <p>{service.description}</p>
                    </dd>
                  </div>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
