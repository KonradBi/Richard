"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const logos = [
  {
    src: "/images/logos/ak-sachsen.png",
    alt: "Architektenkammer Sachsen Logo",
    width: 320,
    height: 160,
    scale: 1.4
  },
  {
    src: "/images/logos/bak.png",
    alt: "Bundesarchitektenkammer Logo",
    width: 240,
    height: 120,
    scale: 1
  }
]

export function LogoWall() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden bg-nature-sand/5">
      {/* Minimalistischer Hintergrund */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#9ba297_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.015]" />
        <div className="absolute inset-0 bg-gradient-to-b from-nature-sand/5 via-transparent to-nature-sand/5" />
      </motion.div>

      {/* Content Container */}
      <motion.div 
        style={{ y: contentY }}
        className="relative container mx-auto px-4"
      >
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-nature-teal text-sm uppercase tracking-widest mb-4 block"
          >
            Mitgliedschaften
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-light text-nature-darkBrown relative"
          >
            <span className="relative">
              Verbände
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

        {/* Logo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-items-center max-w-4xl mx-auto">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="w-full relative group"
            >
              <div className="relative w-full flex items-center justify-center p-8">
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-nature-sage/5 to-nature-teal/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="relative object-contain transition-all duration-500 group-hover:scale-105"
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto',
                    transform: `scale(${logo.scale})`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
