"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    image: "/images/gewerbe/arcmuetzegewerbe1.jpg",
    title: "Innovation im Gewerbebau",
    description: "Moderne Gewerbeimmobilien, die Funktionalität und Ästhetik vereinen. Durchdachte Raumkonzepte für maximale Effizienz.",
  },
  {
    id: 2,
    image: "/images/gewerbe/arcmuetzegewerbe2.jpg",
    title: "Nachhaltige Geschäftsräume",
    description: "Zukunftsorientierte Gewerbearchitektur mit Fokus auf Nachhaltigkeit und moderne Arbeitswelten.",
  }
]

export function Commercial() {
  const containerRef = useRef(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <section ref={containerRef} className="relative py-32 min-h-screen overflow-hidden">
      {/* Dynamischer Hintergrund */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #22c55e 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Überschrift */}
        <div className="text-center mb-24">
          <div className="inline-block">
            <span className="block text-sm font-medium tracking-widest text-primary-500 mb-4">
              Geschäftsräume
            </span>
            <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
              Gewerbe
            </h2>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />
          </div>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-300">
            Gewerbearchitektur, die Maßstäbe setzt. Von der ersten Skizze bis zur finalen Umsetzung 
            entwickeln wir gemeinsam Räume, die Ihr Unternehmen optimal repräsentieren.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              {/* Project Container */}
              <div 
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/9] mb-8">
                  {/* Glasmorphism Frame */}
                  <div className="absolute -inset-4 rounded-3xl bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" />
                  
                  {/* Main Image */}
                  <motion.div
                    className="relative w-full h-full rounded-2xl overflow-hidden"
                    animate={{
                      scale: hoveredIndex === index ? 1.02 : 1
                    }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1920}
                      height={1080}
                      className="object-cover w-full h-full brightness-90 group-hover:brightness-100 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    
                    {/* Gradient Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: hoveredIndex === index ? 0.4 : 0.6 }}
                      transition={{ duration: 0.7 }}
                    />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: hoveredIndex === index ? 0 : 20, opacity: hoveredIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="text-3xl font-extralight text-white mb-4 tracking-wide">{project.title}</h3>
                        <p className="text-gray-200/90 leading-relaxed">{project.description}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <Link
            href="/projekte"
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-white bg-primary-500/10 hover:bg-primary-500/20 transition-colors duration-300"
          >
            Mehr Gewerbeprojekte entdecken
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
