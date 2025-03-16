"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    image: "/images/wohnen/arcmuetzewohnen3.png",
    title: "Architektur, die verbindet",
    description: "Mit innovativen Konzepten schaffe ich nachhaltige Lebensräume, die sich nahtlos in die moderne Welt einfügen.",
    gradientFrom: "from-nature-sand",
    gradientTo: "to-nature-sage",
    imagePosition: "right"
  },
  {
    id: 2,
    image: "/images/wohnen/arcmuetzewohnen2.jpg",
    title: "Harmonie der Elemente",
    description: "Licht, Raum und Material verschmelzen zu einer Einheit, die mehr ist als die Summe ihrer Teile.",
    gradientFrom: "from-nature-sage",
    gradientTo: "to-nature-teal",
    imagePosition: "left"
  },
  {
    id: 3,
    image: "/images/wohnen/arcmuetzewohnen1.png",
    title: "Effizienz trifft Ästhetik",
    description: "Erlebe, wie durchdachte Grundrisse Dein Wohnerlebnis verändern und Dein Zuhause in einen Ort der Entfaltung verwandeln.",
    gradientFrom: "from-nature-teal",
    gradientTo: "to-nature-sand",
    imagePosition: "center"
  }
]

// Subtiles Linienmuster für architektonischen Touch
const GridPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.015]" viewBox="0 0 100 100">
    <pattern id="grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
      <line x1="50" y1="0" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
      <line x1="0" y1="50" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
    </pattern>
    <rect x="0" y="0" width="100" height="100" fill="url(#grid)" />
  </svg>
)

export function Living() {
  const containerRef = useRef(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])

  return (
    <section ref={containerRef} className="relative py-32 min-h-screen overflow-hidden bg-nature-sand/5">
      {/* Minimalistischer Hintergrund */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <GridPattern />
        <div className="absolute inset-0 bg-gradient-to-b from-nature-sand/5 via-transparent to-nature-sand/5" />
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
            className="text-nature-teal text-sm uppercase tracking-widest mb-4 block"
          >
            Lebensräume
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-light text-nature-darkBrown relative"
          >
            <span className="relative">
              Wohnen
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-nature-sage/50 to-transparent origin-left"
              />
            </span>
          </motion.h2>
        </div>

        {/* Projects */}
        <div className="relative space-y-48">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              className={`relative ${
                project.imagePosition === "center" ? "md:w-4/5 mx-auto" :
                project.imagePosition === "right" ? "md:ml-auto" : "md:mr-auto"
              } md:w-2/3`}
            >
              {/* Project Container */}
              <div 
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Container */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative aspect-[16/9] mb-8"
                >
                  {/* Subtle Border Frame */}
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-nature-sand/20 to-nature-sage/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
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
                      className="object-cover w-full h-full brightness-[0.98] group-hover:brightness-100 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 66vw"
                      priority={index === 0}
                    />
                    
                    {/* Subtle Gradient Overlay */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} mix-blend-soft-light`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 0.07 : 0 }}
                      transition={{ duration: 0.7 }}
                    />
                  </motion.div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className={`relative ${
                    project.imagePosition === "center" ? "text-center max-w-2xl mx-auto" : 
                    "max-w-xl " + (project.imagePosition === "right" ? "text-right ml-auto" : "")
                  }`}
                >
                  <motion.span
                    className="inline-block text-sm text-nature-teal font-medium mb-2"
                  >
                    Meine Vision
                  </motion.span>
                  <motion.h3
                    className="text-3xl md:text-4xl font-light mb-4 text-nature-darkBrown"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-nature-darkBrown/80 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-center mt-16">
            <Link href="/projekte" className="text-lg font-medium text-nature-teal hover:text-nature-warmBrown transition-colors duration-300">
              Zu den Projekten <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
