"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

// Netzwerkdaten mit Kompetenzbereichen
const networkNodes = [
  { id: 1, label: "Architektur", color: "#9f8e7b", size: 1.2 },
  { id: 2, label: "Planung", color: "#a0ab9d", size: 1.0 },
  { id: 3, label: "Tragwerk", color: "#85766a", size: 1.1 },
  { id: 4, label: "Haustechnik", color: "#a1968d", size: 1.0 },
  { id: 5, label: "Energieeffizienz", color: "#877f6e", size: 1.1 },
  { id: 6, label: "Projektentwicklung", color: "#9ba297", size: 1.0 },
  { id: 7, label: "Finanzierung", color: "#90877b", size: 1.0 },
  { id: 8, label: "Brandschutz", color: "#a59b92", size: 0.9 }
]

// Berechnet Position basierend auf einem Winkel und Abstand vom Zentrum
function getNodePosition(index: number, total: number, radius: number = 35) {
  const angleStep = (2 * Math.PI) / total
  const angle = index * angleStep - Math.PI / 2 // Starte von oben (statt rechts)
  const x = 50 + radius * Math.cos(angle)
  const y = 50 + radius * Math.sin(angle)
  
  return { x, y }
}

// Generiert eine Hexagon-Form für das Zentrum
function createHexagon(x: number, y: number, size: number) {
  const points = []
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i
    points.push(`${x + size * Math.cos(angle)},${y + size * Math.sin(angle)}`)
  }
  return points.join(' ')
}

export function Team() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)
  const [activeNode, setActiveNode] = useState<number | null>(null)
  const controls = useAnimation()

  // Automatische Animation verschiedener Nodes
  useEffect(() => {
    if (!isInView) return
    
    const interval = setInterval(() => {
      const nextIndex = activeNode === null 
        ? 0
        : (networkNodes.findIndex(n => n.id === activeNode) + 1) % networkNodes.length
      setActiveNode(networkNodes[nextIndex].id)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [activeNode, isInView])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Animation Variants
  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05 + 0.3,
        duration: 0.6,
        type: "spring",
        stiffness: 70
      }
    })
  }
  
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1, 
      opacity: 0.5,
      transition: {
        delay: i * 0.04 + 0.2,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  }
  
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05 + 0.8,
        duration: 0.4
      }
    })
  }

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-white to-nature-sand/5">
      {/* Hintergrund mit subtilen Effekten */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#d4c4af_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07]" />
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
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light tracking-tight text-nature-darkBrown mb-8"
          >
            Kompetenz durch Vernetzung
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-nature-darkBrown/80 max-w-3xl mx-auto"
          >
            Mein starkes Netzwerk aus spezialisierten Partnern ermöglicht es mir, Projekte jeder
            Art und Größe professionell zu planen und zu betreuen - vom privaten Wohnungsbau
            bis hin zu komplexen Mischimmobilien. Diese Vernetzung garantiert höchste Qualität
            und Expertise in allen Projektphasen.
          </motion.p>
        </div>

        <div className="relative w-full max-w-3xl mx-auto">
          <div className="relative aspect-square">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
            >
              {/* Großer Kreisring */}
              <motion.circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="#d4c4af"
                strokeWidth="0.2"
                strokeDasharray="1 1"
                custom={0}
                variants={circleVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              />

              {/* Verbindungslinien zwischen Nodes und Zentrum */}
              {networkNodes.map((node, i) => {
                const { x, y } = getNodePosition(i, networkNodes.length)
                const isActive = activeNode === node.id || hoveredNode === node.id
                
                return (
                  <motion.line
                    key={`line-${i}`}
                    x1="50"
                    y1="50"
                    x2={x}
                    y2={y}
                    stroke={node.color}
                    strokeWidth={isActive ? "0.5" : "0.3"}
                    strokeDasharray={isActive ? "none" : "1 2"}
                    custom={i}
                    variants={lineVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    opacity={isActive ? 0.8 : 0.4}
                  />
                )
              })}

              {/* Kreis-Zentrum */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { 
                  scale: 1, 
                  opacity: 1,
                  transition: { 
                    delay: 0.2,
                    duration: 0.7, 
                    type: "spring",
                    stiffness: 50,
                    damping: 10
                  }
                } : { scale: 0, opacity: 0 }}
              >
                {/* Äußerer Kreis */}
                <circle cx="50" cy="50" r="15" fill="#e6dfd6" opacity="0.4" />
                <circle cx="50" cy="50" r="12" fill="#e6dfd6" opacity="0.6" />
                
                {/* Innerer Kreis */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="8" 
                  fill="#85766a"
                  stroke="#fff"
                  strokeWidth="0.2"
                />
                
                <text
                  x="50"
                  y="50"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="2.8"
                  fontWeight="600"
                  fill="#ffffff"
                  style={{
                    filter: "drop-shadow(0px 0.5px 0.5px rgba(0,0,0,0.3))"
                  }}
                >
                  arc muetze
                </text>
              </motion.g>
              
              {/* Kompetenz-Nodes */}
              {networkNodes.map((node, i) => {
                const { x, y } = getNodePosition(i, networkNodes.length)
                const isActive = hoveredNode === node.id || activeNode === node.id
                const size = 3.5 * node.size * (isActive ? 1.2 : 1)
                
                return (
                  <motion.g 
                    key={`node-${node.id}`} 
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => setActiveNode(node.id === activeNode ? null : node.id)}
                    custom={i}
                    variants={circleVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    {/* Hintergrund-Effekt für aktive Nodes */}
                    {isActive && (
                      <motion.circle
                        cx={x}
                        cy={y}
                        r={size * 1.8}
                        fill={node.color}
                        opacity={0.15}
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.1, 0.2, 0.1],
                          transition: { 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      />
                    )}
                    
                    {/* Punkte für Nodes */}
                    <circle
                      cx={x}
                      cy={y}
                      r={size}
                      fill={node.color}
                      stroke={isActive ? "#fff" : "none"}
                      strokeWidth="0.2"
                    />
                    
                    {/* Label */}
                    <motion.text
                      x={x}
                      y={y + 8}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={isActive ? "2.8" : "2.5"}
                      fontWeight={isActive ? "500" : "400"}
                      fill="#614c39"
                      custom={i}
                      variants={textVariants}
                    >
                      {node.label}
                    </motion.text>
                  </motion.g>
                )
              })}

              {/* Äußere Verbindungslinien zwischen benachbarten Punkten */}
              {networkNodes.map((node, i) => {
                const pos1 = getNodePosition(i, networkNodes.length)
                const nextIndex = (i + 1) % networkNodes.length
                const pos2 = getNodePosition(nextIndex, networkNodes.length)
                
                return (
                  <motion.path
                    key={`outer-line-${i}`}
                    d={`M ${pos1.x} ${pos1.y} A 45 45 0 0 1 ${pos2.x} ${pos2.y}`}
                    fill="none"
                    stroke="#d4c4af"
                    strokeWidth="0.2"
                    strokeDasharray="1 2"
                    custom={i + networkNodes.length}
                    variants={lineVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    opacity={0.3}
                  />
                )
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
