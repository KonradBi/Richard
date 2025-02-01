"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Neubau",
    subtitle: "Villa am See",
    description: "Modernes Wohnhaus mit Fokus auf Nachhaltigkeit",
    image: "/images/projects/neubau/Neubau1.jpeg",
    gradient: "from-emerald-500 to-primary-500",
  },
  {
    title: "Neubau",
    subtitle: "Stadthaus",
    description: "Urbanes Leben im Einklang mit der Natur",
    image: "/images/projects/neubau/Neubau2.png",
    gradient: "from-primary-500 to-emerald-500",
  },
  {
    title: "Sanierung",
    subtitle: "Historisches Ensemble",
    description: "Behutsame Modernisierung mit Charakter",
    image: "/images/projects/sanierung/Umbau.png",
    gradient: "from-green-500 to-primary-500",
  }
]

export function Expertise() {
  const containerRef = useRef(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"])

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-neutral-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #3d8c3d 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <span className="text-primary-500 text-sm uppercase tracking-widest mb-4 block">
            Unsere Projekte
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 mb-8">
            Neubau · Umbau · Sanierung
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Entdecken Sie eine Auswahl unserer realisierten Projekte
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title + index}
              className="relative group cursor-pointer w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, (index + 1) * -30]) }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                {/* Background Blur Effect */}
                <div className="absolute inset-0 bg-neutral-900/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.subtitle}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r ${project.gradient} mb-4 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      {project.title}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">{project.subtitle}</h3>
                    <p className="text-lg text-white leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="group inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full text-primary-600 font-medium shadow-lg shadow-primary-500/5 hover:shadow-primary-500/10 transition-all duration-300">
            Alle Projekte entdecken
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
