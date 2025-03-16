"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

// Strukturdaten für das Blumen-Design
const petals = [
  { id: 1, label: "Architektur", angle: 0, distance: 30, size: 16 },
  { id: 2, label: "Planung", angle: 45, distance: 30, size: 14 },
  { id: 3, label: "Tragwerk", angle: 90, distance: 30, size: 15 },
  { id: 4, label: "Haustechnik", angle: 135, distance: 30, size: 16 },
  { id: 5, label: "Energieeffizienz", angle: 180, distance: 30, size: 15 },
  { id: 6, label: "Steuerstrategie", angle: 225, distance: 30, size: 16 },
  { id: 7, label: "Finanzierung", angle: 270, distance: 30, size: 15 },
  { id: 8, label: "Brandschutz", angle: 315, distance: 30, size: 14 }
]

// Umrechnung von Polarkoordinaten (Winkel + Abstand) in kartesische Koordinaten (x, y)
function polarToCartesian(angle: number, distance: number, centerX = 50, centerY = 50) {
  const angleInRadians = (angle - 90) * Math.PI / 180.0
  const x = centerX + (distance * Math.cos(angleInRadians))
  const y = centerY + (distance * Math.sin(angleInRadians))
  return { x, y }
}

export function Team() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [hoveredPetal, setHoveredPetal] = useState<number | null>(null)
  const [activePetal, setActivePetal] = useState<number | null>(null)
  const controls = useAnimation()

  // Automatische Aktivierung verschiedener Blütenblätter
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = activePetal === null 
        ? Math.floor(Math.random() * petals.length) 
        : (petals.findIndex(p => p.id === activePetal) + 1) % petals.length
      setActivePetal(petals[nextIndex].id)
    }, 3000)
    return () => clearInterval(interval)
  }, [activePetal])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 60
      }
    })
  }

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-nature-teal/20">
      {/* Hintergrund mit subtilen Effekten */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#d4c4af_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15]" />
        <div className="absolute inset-0 bg-gradient-to-br from-nature-sand/10 via-transparent to-nature-sage/15" />
        
        {/* Sanfter Hintergrundverlauf */}
        <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-nature-sand/10 to-transparent blur-xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="text-nature-darkBrown text-sm uppercase tracking-widest mb-4 block"
          >
            Mein Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-nature-darkBrown sm:text-5xl mb-8"
          >
            Kompetenz durch Vernetzung
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-nature-darkBrown/90 max-w-3xl mx-auto"
          >
            Mein starkes Netzwerk aus spezialisierten Partnern ermöglicht es mir, Projekte jeder
            Art und Größe professionell zu planen und zu betreuen - vom privaten Wohnungsbau
            bis hin zu komplexen Mischimmobilien. Diese Vernetzung garantiert höchste Qualität
            und Expertise in allen Projektphasen.
          </motion.p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative aspect-square">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
            >
              {/* Subtile Verbindungslinien zwischen Blütenblättern */}
              {petals.map((petal, i) => {
                const { x: x1, y: y1 } = polarToCartesian(petal.angle, petal.distance * 0.8)
                const nextPetal = petals[(i + 1) % petals.length]
                const { x: x2, y: y2 } = polarToCartesian(nextPetal.angle, nextPetal.distance * 0.8)
                const isActive = hoveredPetal === petal.id || activePetal === petal.id
                
                return (
                  <motion.path
                    key={`connection-${i}`}
                    d={`M ${x1} ${y1} Q 50 50, ${x2} ${y2}`}
                    stroke="#d4c4af"
                    strokeWidth="0.3"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: isActive ? 0.5 : 0.2,
                      transition: { 
                        pathLength: { delay: i * 0.05 + 0.5, duration: 1.5, ease: "easeInOut" },
                        opacity: { duration: 0.3 }
                      }
                    }}
                  />
                )
              })}
              
              {/* Strahlende Linien vom Zentrum zu den Blütenblättern */}
              {petals.map((petal, i) => {
                const { x, y } = polarToCartesian(petal.angle, petal.distance * 0.4)
                const isActive = hoveredPetal === petal.id || activePetal === petal.id
                
                return (
                  <motion.line
                    key={`ray-${i}`}
                    x1="50"
                    y1="50"
                    x2={x}
                    y2={y}
                    stroke="#85766a"
                    strokeWidth={isActive ? "0.6" : "0.4"}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: isActive ? 0.6 : 0.3,
                      transition: { 
                        pathLength: { delay: i * 0.05 + 0.2, duration: 1, ease: "easeInOut" },
                        opacity: { duration: 0.3 }
                      }
                    }}
                  />
                )
              })}

              {/* Blütenblätter (äußere organische Formen) */}
              {petals.map((petal, i) => {
                const { x, y } = polarToCartesian(petal.angle, petal.distance)
                const isActive = hoveredPetal === petal.id || activePetal === petal.id
                const scale = isActive ? 1.1 : 1
                
                return (
                  <g key={`petal-${i}`} style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHoveredPetal(petal.id)}
                    onMouseLeave={() => setHoveredPetal(null)}
                  >
                    <motion.path
                      d={`
                        M ${50 + (x - 50) * 0.35} ${50 + (y - 50) * 0.35}
                        C ${50 + (x - 50) * 0.35 + (y - 50) * 0.1} ${50 + (y - 50) * 0.35 - (x - 50) * 0.1},
                          ${x - (y - 50) * 0.15} ${y + (x - 50) * 0.15},
                          ${x} ${y}
                        C ${x + (y - 50) * 0.15} ${y - (x - 50) * 0.15},
                          ${50 + (x - 50) * 0.35 - (y - 50) * 0.1} ${50 + (y - 50) * 0.35 + (x - 50) * 0.1},
                          ${50 + (x - 50) * 0.35} ${50 + (y - 50) * 0.35}
                      `}
                      fill="#d4c4af"
                      fillOpacity={isActive ? "0.3" : "0.15"}
                      stroke={isActive ? "#9ba297" : "#d4c4af"}
                      strokeWidth={isActive ? "0.5" : "0.3"}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale,
                        opacity: 1,
                        transition: { 
                          scale: { duration: 0.3 },
                          opacity: { delay: i * 0.07 + 0.8, duration: 0.8 }
                        }
                      }}
                      custom={i}
                      variants={itemVariants}
                    />
                    
                    {/* Text für die Blütenblätter */}
                    <motion.text
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="3"
                      fill={isActive ? "#614c39" : "#5c3d2e"}
                      fontWeight={isActive ? "bold" : "normal"}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: 1,
                        transition: { delay: i * 0.07 + 1, duration: 0.5 }
                      }}
                      style={{
                        filter: "drop-shadow(0px 1px 1px rgba(255,255,255,0.7))"
                      }}
                    >
                      {petal.label}
                    </motion.text>

                    {/* Pulsierende Animation für aktive Blütenblätter */}
                    {isActive && (
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="5"
                        fill="transparent"
                        stroke="#9ba297"
                        strokeWidth="0.5"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: [0, 0.3, 0],
                          scale: [0.8, 1.2, 0.8],
                          transition: { 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      />
                    )}
                  </g>
                )
              })}
              
              {/* Zentrale Blütenmitte (arc muetze) */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: { delay: 0.3, duration: 0.8, type: "spring" }
                }}
              >
                {/* Hintergrundkreis */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="12"
                  fill="#e6dfd6"
                  initial={{ opacity: 0.4 }}
                  animate={{ 
                    opacity: [0.4, 0.6, 0.4],
                    scale: [1, 1.05, 1],
                    transition: { 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
                
                {/* Innerer pulsierender Kreis */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="8"
                  fill="#c8b8a1"
                  initial={{ opacity: 0.6 }}
                  animate={{ 
                    opacity: [0.6, 0.8, 0.6],
                    transition: { 
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
                
                {/* Zentraler Kreis */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="6"
                  fill="#85766a"
                  initial={{ opacity: 0.8 }}
                  animate={{ 
                    opacity: [0.8, 1, 0.8],
                    transition: { 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
                
                {/* Zentraler Text (arc muetze) */}
                <motion.text
                  x="50"
                  y="50"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="3.8"
                  fontWeight="bold"
                  fill="#ffffff"
                  style={{
                    filter: "drop-shadow(0px 1px 1px rgba(0,0,0,0.3))"
                  }}
                >
                  arc muetze
                </motion.text>
              </motion.g>
            </svg>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 2 }}
          className="text-center text-nature-darkBrown mt-12 max-w-3xl mx-auto"
        >
          Von der ersten Planung bis zur finalen Umsetzung koordiniere ich die Expertise
          unserer Partner und passe mich flexibel an die spezifischen Anforderungen Ihres
          Projektes an - unabhängig von dessen Größe und Komplexität.
        </motion.p>
      </div>
    </section>
  )
}
