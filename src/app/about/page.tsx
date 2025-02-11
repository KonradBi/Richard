"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const timeline = [
  {
    period: "ab 2024",
    title: "Architekt, Geschäftsführender Gesellschafter",
    company: "arc MUETZE"
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
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          {/* Top white gradient */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white via-white to-transparent z-10" />
          {/* Main background gradient */}
          <div className="absolute inset-0 bg-gradient-radial from-primary-200/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Column - Timeline */}
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
                  Über Uns
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-800 leading-tight mb-4">
                  Werdegang
                </h1>
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-[1px] bg-primary-500/50" />
                  <h2 className="text-2xl md:text-3xl font-light text-neutral-600">
                    Richard Mütze
                  </h2>
                </div>
                
                {/* Timeline in Hero Section */}
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className="relative group"
                    >
                      <div className="relative pl-8">
                        {/* Timeline dot */}
                        <div className="absolute left-[-4px] top-4 w-2 h-2 rounded-full bg-primary-500 ring-4 ring-white" />
                        
                        {/* Timeline line */}
                        {index !== timeline.length - 1 && (
                          <div className="absolute left-[-3px] top-6 bottom-0 w-px bg-neutral-200 group-hover:bg-primary-200 transition-colors duration-300" />
                        )}
                        
                        {/* Period */}
                        <div className="text-sm text-primary-600 font-medium mb-1">
                          {item.period}
                          {item.duration && (
                            <span className="ml-2 text-neutral-500">({item.duration})</span>
                          )}
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-lg font-light text-neutral-800 mb-1">
                          {item.title}
                        </h3>
                        
                        {/* Company */}
                        <p className="text-base text-neutral-600">
                          {item.company}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Architect Image */}
            <motion.div
              className="relative z-10 lg:h-[85vh]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative w-full h-full min-h-[500px]">
                {/* Background Shapes */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-100/30 rounded-full blur-3xl" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary-200/20 rounded-full blur-2xl" />
                </div>
                
                {/* Architect Image */}
                <motion.div
                  className="relative w-full h-full rounded-2xl overflow-hidden"
                >
                  <Image
                    src="/images/home/hero.jpg"
                    alt="Architekt Mütze"
                    width={1200}
                    height={1600}
                    className="object-cover object-center w-full h-full"
                    priority
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/20 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 