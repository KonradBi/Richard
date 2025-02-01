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
    gradientFrom: "from-blue-50",
    gradientTo: "to-slate-100"
  },
  {
    id: 2,
    image: "/images/gewerbe/arcmuetzegewerbe2.jpg",
    title: "Nachhaltige Geschäftsräume",
    description: "Zukunftsorientierte Gewerbearchitektur mit Fokus auf Nachhaltigkeit und moderne Arbeitswelten.",
    gradientFrom: "from-slate-50",
    gradientTo: "to-zinc-100"
  }
]

// Diagonales Linienmuster für den Gewerbebereich
const DiagonalPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.02]" viewBox="0 0 100 100">
    <pattern id="diagonal" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
      <line x1="0" y1="10" x2="10" y2="0" stroke="currentColor" strokeWidth="0.5" />
    </pattern>
    <rect x="0" y="0" width="100" height="100" fill="url(#diagonal)" />
  </svg>
)

export function Commercial() {
  const containerRef = useRef(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])

  return (
    <section ref={containerRef} className="relative py-32 min-h-screen overflow-hidden bg-neutral-50">
      {/* Minimalistischer Hintergrund */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <DiagonalPattern />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-transparent to-neutral-50" />
      </motion.div>

      {/* Content Container */}
      <motion.div 
        style={{ y: contentY }}
        className="relative container mx-auto px-4"
      >
        {/* Section Title */}
        <div className="text-center mb-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-500 text-sm uppercase tracking-widest mb-4 block"
          >
            Geschäftsräume
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-light text-neutral-800 relative"
          >
            <span className="relative">
              Gewerbe
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent origin-left"
              />
            </span>
          </motion.h2>
        </div>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-24 leading-relaxed"
        >
          Gewerbearchitektur, die Maßstäbe setzt. Von der ersten Skizze bis zur finalen Umsetzung 
          entwickeln wir gemeinsam Räume, die Ihr Unternehmen optimal repräsentieren.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="relative"
            >
              {/* Project Container */}
              <div 
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] mb-8">
                  {/* Subtle Border Frame */}
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-neutral-100 to-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
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
                      width={1600}
                      height={1200}
                      className="object-cover w-full h-full brightness-[0.98] group-hover:brightness-100 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    
                    {/* Subtle Gradient Overlay */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} mix-blend-soft-light`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
                      transition={{ duration: 0.7 }}
                    />
                  </motion.div>
                </div>

                {/* Text Content */}
                <div className="relative text-center">
                  <motion.h3
                    className="text-2xl md:text-3xl font-light mb-4 text-neutral-800"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-neutral-600 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-center mt-16">
            <Link href="/projekte" className="text-lg font-medium text-primary-600 hover:text-primary-700">
              Zu den Projekten <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
