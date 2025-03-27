"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Erweiterte Projektliste mit Bildern aus verschiedenen Projektordnern
const projects = [
  {
    id: 1,
    title: "Neubau",
    image: "/images/gallerielandingpage/photo_2025-03-16 18.56.03.jpeg",
    description: "Moderne Architektur, die Ihre Vision in die Realität umsetzt.",
    href: "/projekte/neubau"
  },
  {
    id: 2,
    title: "Umbau",
    image: "/images/gallerielandingpage/photo_2025-03-16 18.56.10.jpeg",
    description: "Durchdachte Raumkonzepte für bestehende Gebäude.",
    href: "/projekte/umbau"
  },
  {
    id: 3,
    title: "Sanierung",
    image: "/images/gallerielandingpage/photo_2025-03-16 18.56.16.jpeg",
    description: "Behutsame Modernisierung mit Respekt für die bestehende Bausubstanz.",
    href: "/projekte/sanierung"
  },
  {
    id: 4,
    title: "Wohngebäude",
    image: "/images/gallerielandingpage/photo_2025-03-16 18.56.23.jpeg",
    description: "Nachhaltige Wohnkonzepte für höchsten Komfort.",
    href: "/projekte/wohngebaeude"
  },
  {
    id: 5,
    title: "Gewerbebau",
    image: "/images/gallerielandingpage/photo_2025-03-16 18.56.29.jpeg",
    description: "Funktionale Räume für Ihr Unternehmen.",
    href: "/projekte/gewerbebau"
  },
  {
    id: 6,
    title: "Ulanenpark",
    image: "/projects/ulanenpark/Aussen6.jpg",
    description: "Moderner Wohn- und Gewerbebau im Ulanenpark.",
    href: "/projekte/ulanenpark"
  },
  {
    id: 7,
    title: "Nymphenburger Straße",
    image: "/projects/sanierung/Nymphenburgerstraße1.jpg",
    description: "Stilvolle Sanierung eines historischen Gebäudes.",
    href: "/projekte/sanierung"
  },
  {
    id: 8,
    title: "Mühldorfstraße",
    image: "/projects/muehldorfstrasse/thumbail.jpg",
    description: "Urbanes Wohnen in zentraler Lage.",
    href: "/projekte/muehldorfstrasse"
  },
  {
    id: 9,
    title: "Lucille-Grahn-Straße",
    image: "/projects/lucille-grahn/220111_lcg_c7.jpg",
    description: "Exklusives Wohnprojekt mit hochwertiger Ausstattung.",
    href: "/projekte/lucille-grahn"
  },
  {
    id: 10,
    title: "Bauernweg",
    image: "/projects/bauernweg/1935_Bauernweg_vogelp-1024x576.jpg",
    description: "Harmonische Verbindung von Tradition und Moderne.",
    href: "/projekte/bauernweg"
  },
  {
    id: 11,
    title: "Alte Bäckerei",
    image: "/projects/alte-baeckerei/BAECKEREI_FRONT_Web-768x623.jpg",
    description: "Umnutzung mit Charakter und Geschichte.",
    href: "/projekte/alte-baeckerei"
  }
]

export function ProjectsCarousel() {
  const containerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState(0) // -1 für links, 1 für rechts, 0 für initial
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  
  // Check if on mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])
  
  // Parallax effect for the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])
  
  const goToNext = () => {
    if (isTransitioning) return
    setDirection(1)
    setIsTransitioning(true)
    setCurrentIndex((currentIndex + 1) % projects.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }
  
  const goToPrev = () => {
    if (isTransitioning) return
    setDirection(-1)
    setIsTransitioning(true)
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (index) => {
    if (isTransitioning) return
    setDirection(index > currentIndex ? 1 : -1)
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    if (touchStart - touchEnd > 50) {
      goToNext() // Swipe left
    }

    if (touchStart - touchEnd < -50) {
      goToPrev() // Swipe right
    }
    
    // Reset
    setTouchStart(0)
    setTouchEnd(0)
  }
  
  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-nature-sand/5">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#9ba297_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.015]" />
        <div className="absolute inset-0 bg-gradient-to-b from-nature-sand/5 via-transparent to-nature-sand/5" />
      </div>
      
      <motion.div 
        className="relative container mx-auto px-4"
        style={{ y }}
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-light tracking-tight text-nature-darkBrown mb-4"
          >
            Neubau · Umbau · Sanierung
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-lg text-nature-darkBrown/80"
          >
            Entdecken Sie eine Auswahl unserer realisierten Projekte
          </motion.p>
        </div>
        
        {/* Mobile Carousel */}
        {isMobile ? (
          <div className="relative mb-16">
            {/* Navigation Arrows */}
            <button 
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-40 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-md"
              aria-label="Vorheriges Projekt"
            >
              <ChevronLeft className="w-5 h-5 text-nature-darkBrown" />
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-40 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-md"
              aria-label="Nächstes Projekt"
            >
              <ChevronRight className="w-5 h-5 text-nature-darkBrown" />
            </button>
            
            {/* Swipeable Area */}
            <div 
              className="touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div 
                  key={currentIndex}
                  initial={{ 
                    opacity: 0,
                    x: direction > 0 ? 300 : -300
                  }}
                  animate={{ 
                    opacity: 1,
                    x: 0
                  }}
                  exit={{ 
                    opacity: 0,
                    x: direction > 0 ? -300 : 300
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full px-2"
                >
                  <Link href={projects[currentIndex].href} className="block">
                    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                      <div className="aspect-[4/3] w-full relative">
                        <Image
                          src={projects[currentIndex].image}
                          alt={projects[currentIndex].title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw"
                          priority
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="text-xl font-light text-nature-darkBrown mb-1">{projects[currentIndex].title}</h3>
                        <p className="text-sm text-nature-darkBrown/80">{projects[currentIndex].description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Indicator Dots */}
            <div className="flex justify-center mt-6">
              <div className="flex space-x-3">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-nature-teal scale-125' : 'bg-nature-darkBrown/20'
                    }`}
                    aria-label={`Gehe zu Bild ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Desktop Carousel
          <div className="relative mt-20 mb-16">
            {/* Navigation Arrows */}
            <button 
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-md opacity-70 hover:opacity-100 transition-opacity duration-300"
              aria-label="Vorheriges Projekt"
            >
              <ChevronLeft className="w-6 h-6 text-nature-darkBrown" />
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-md opacity-70 hover:opacity-100 transition-opacity duration-300"
              aria-label="Nächstes Projekt"
            >
              <ChevronRight className="w-6 h-6 text-nature-darkBrown" />
            </button>
            
            {/* Redesigned Desktop Carousel */}
            <div className="relative max-w-5xl mx-auto">
              <div className="relative overflow-hidden py-8">
                {/* Single Image */}
                <AnimatePresence initial={false} mode="wait">
                  <motion.div 
                    key={`main-${currentIndex}`}
                    initial={{ 
                      opacity: 0,
                      y: 30
                    }}
                    animate={{ 
                      opacity: 1,
                      y: 0
                    }}
                    exit={{
                      opacity: 0,
                      y: -30
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full max-w-3xl mx-auto"
                  >
                    <Link href={projects[currentIndex].href} className="block h-full">
                      <div className="relative bg-white rounded-xl shadow-xl overflow-hidden h-full flex flex-col">
                        <div className="aspect-[4/3] w-full relative">
                          <Image
                            src={projects[currentIndex].image}
                            alt={projects[currentIndex].title}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1280px) 100vw, 800px"
                            priority
                          />
                        </div>
                        <div className="p-6 text-center flex-1 flex flex-col justify-center">
                          <h3 className="text-2xl font-light text-nature-darkBrown mb-3">{projects[currentIndex].title}</h3>
                          <p className="text-base text-nature-darkBrown/80">{projects[currentIndex].description}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Carousel Indicator Dots */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-3">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-nature-teal scale-125' : 'bg-nature-darkBrown/20'
                    }`}
                    aria-label={`Gehe zu Bild ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  )
} 