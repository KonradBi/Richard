"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    image: "/images/neubau/Neubau1.jpeg",
    subtitle: "Neubau Mehrfamilienhaus",
    title: "Neubau",
    description: "Moderne Architektur, die Ihre Vision in die Realität umsetzt. Nachhaltig, effizient und ästhetisch ansprechend.",
    href: "/projekte/neubau"
  },
  {
    id: 2,
    image: "/images/neubau/Neubau2.png",
    subtitle: "Neubau Villa",
    title: "Umbau",
    description: "Durchdachte Raumkonzepte und innovative Materialien für Ihr individuelles Traumhaus.",
    href: "/projekte/umbau"
  },
  {
    id: 3,
    image: "/images/neubau/Umbau.png",
    subtitle: "Sanierung Villa",
    title: "Sanierung",
    description: "Behutsame Modernisierung mit Respekt für die bestehende Bausubstanz. Wir schaffen neuen Wohnraum im Bestand.",
    href: "/projekte/sanierung"
  }
]

export function Expertise() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-32 overflow-hidden bg-neutral-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Überschrift */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl mb-4">
            Neubau · Umbau · Sanierung
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Entdecken Sie eine Auswahl unserer realisierten Projekte
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={project.href}
              className="group relative block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100">
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.subtitle}
                  width={800}
                  height={1067}
                  className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-4xl font-extralight tracking-wide mb-3 text-white/95">{project.subtitle}</h3>
                  <p className="text-base text-white/80 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
