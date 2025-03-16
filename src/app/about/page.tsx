"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const timeline = [
  {
    period: "ab 2024",
    title: "Architekt, Geschäftsführender Gesellschafter",
    company: "arc MUETZE GmbH"
  },
  {
    period: "2012 - 2024",
    duration: "12 Jahre",
    title: "Architekt, Geschäftsführender Gesellschafter",
    company: "MUETZEGUNKEL Baukunst GmbH"
  },
  {
    period: "2006 - 2012",
    duration: "6 Jahre",
    title: "Studium Architektur",
    company: "Hochschule für Technik und Wirtschaft Dresden"
  },
  {
    period: "2008 - 2014",
    duration: "4 Jahre",
    title: "Geschäftsführer M&M Bau GbR",
    company: "Vertrieb und Einbau genormter Fertigbauteile"
  }
]

export default function AboutPage() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-primary-50/20 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #22c55e 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-24 items-center">
            {/* Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-sm md:text-base text-primary-600 uppercase tracking-[0.2em] mb-6">
                  Über mich
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-800 leading-tight mb-4">
                  Werdegang
                </h1>
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-[1px] bg-primary-500/50" />
                  <h2 className="text-2xl md:text-3xl font-light text-neutral-600">
                    Architekt Richard Mütze
                  </h2>
                </div>
                
                {/* Timeline in Hero Section */}
                <div className="space-y-12 max-w-3xl">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-6"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                      </div>
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                          <h3 className="text-lg font-medium text-primary-600">{item.period}</h3>
                          {item.duration && (
                            <span className="text-sm text-neutral-500">({item.duration})</span>
                          )}
                        </div>
                        <h4 className="text-xl font-light text-neutral-800 mb-1">{item.title}</h4>
                        <p className="text-neutral-600">{item.company}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 