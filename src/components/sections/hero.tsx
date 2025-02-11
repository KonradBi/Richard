"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { ChevronDown, ArrowRight } from "lucide-react"

const rotatingTexts = [
  { text: "die Zukunft", color: "from-primary-200 to-primary-300" },
  { text: "nachhaltiges Leben", color: "from-primary-300 to-primary-200" },
  { text: "moderne Städte", color: "from-primary-200 to-primary-300" },
  { text: "Ihre Vision", color: "from-primary-300 to-primary-200" },
  { text: "kommende Generationen", color: "from-primary-200 to-primary-300" }
]

export function Hero() {
  const ref = useRef(null)
  const [textIndex, setTextIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  // Rotate through texts
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
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
          {/* Left Column - Text Content */}
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
                Richard Mütze
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-800 leading-tight mb-12">
                Nachhaltige <br/>
                <span className="text-emerald-600">Architektur</span><br/>
                für{" "}
                <span className="relative inline-block min-w-[5ch] h-[1.2em]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={textIndex}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.32, 0.72, 0, 1],
                        opacity: { duration: 0.3 }
                      }}
                      className={`absolute left-0 bg-gradient-to-r ${rotatingTexts[textIndex].color} bg-clip-text text-transparent`}
                    >
                      {rotatingTexts[textIndex].text}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
              <p className="text-xl text-neutral-600 max-w-xl leading-relaxed mb-12 mt-6">
                Wir erschaffen nicht nur Gebäude, sondern nachhaltige Lebensräume im Einklang mit der Natur.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link 
                  href="/projects"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300"
                >
                  <span className="relative z-10">Projekte entdecken</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 -z-10 rounded-full bg-primary-400/20 blur-sm transition-all duration-300 group-hover:bg-primary-500/40" />
                </Link>
                <Link 
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-primary-500 rounded-full text-primary-600 hover:bg-primary-50 transition-all duration-300"
                >
                  <span className="relative z-10">Kontakt aufnehmen</span>
                  <div className="absolute inset-0 -z-10 rounded-full bg-primary-100/50 blur-sm transition-all duration-300 group-hover:bg-primary-200/60" />
                </Link>
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
                style={{ scale }}
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

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        >
          <motion.div 
            className="flex flex-col items-center gap-3"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-primary-600/60 text-sm uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ 
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronDown className="w-6 h-6 text-primary-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-50/0 to-neutral-50 pointer-events-none" />
    </section>
  )
}
