"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

// Knoten weiter auseinander positioniert
const networkNodes = [
  { id: 1, label: "Architektur", x: 50, y: 30 },
  { id: 2, label: "Planung", x: 80, y: 60 },
  { id: 3, label: "Baurecht", x: 20, y: 60 },
  { id: 4, label: "Statik", x: 35, y: 80 },
  { id: 5, label: "Energieeffizienz", x: 65, y: 80 },
  { id: 6, label: "Projektsteuerung", x: 50, y: 70 },
  { id: 7, label: "Brandschutz", x: 30, y: 40 },
  { id: 8, label: "Bauphysik", x: 70, y: 40 }
]

const connections = [
  [1, 2], [1, 3], [1, 6], [1, 7], [1, 8],
  [2, 4], [2, 5], [2, 6],
  [3, 4], [3, 7],
  [4, 5], [4, 6],
  [5, 6], [5, 8],
  [6, 7], [6, 8],
  [7, 8]
]

// Komponente für den pulsierenden Kreis
const PulsingCircle = ({ isActive }: { isActive: boolean }) => (
  <>
    <motion.circle
      r="4"
      fill="rgb(52 211 153)"
      initial={{ opacity: 0.1 }}
      animate={{
        opacity: isActive ? [0.1, 0.2, 0.1] : 0.1,
        scale: isActive ? [1, 1.3, 1] : 1,
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ filter: "blur(1px)" }}
    />
    <motion.circle
      r="2"
      fill="rgb(52 211 153)"
      initial={{ opacity: 0.6 }}
      animate={{
        opacity: isActive ? [0.6, 0.8, 0.6] : 0.6,
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </>
)

// Komponente für die bewegte Linie
const MovingLine = ({ x1, y1, x2, y2, isHighlighted }: { x1: number, y1: number, x2: number, y2: number, isHighlighted: boolean }) => (
  <motion.circle
    r="1"
    fill="rgb(52 211 153)"
    initial={{ opacity: 0 }}
    animate={{
      opacity: isHighlighted ? [0, 0.4, 0] : 0,
      offsetDistance: ["0%", "100%"],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "linear",
      repeatDelay: 1
    }}
    style={{
      offsetPath: `path("M ${x1} ${y1} L ${x2} ${y2}")`,
    }}
  />
)

export function Team() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)
  const [activeNode, setActiveNode] = useState<number>(1)
  const controls = useAnimation()

  // Automatische Aktivierung verschiedener Knoten
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(current => {
        const next = current % networkNodes.length + 1
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  }

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 0.2,
      transition: {
        delay: i * 0.05 + 0.8,
        duration: 0.8,
        ease: "easeInOut"
      }
    })
  }

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-gray-900">
      {/* Hintergrund mit subtilen Effekten */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,gray-700_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.1]" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-emerald-900/10" />
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="text-emerald-400 text-sm uppercase tracking-widest mb-4 block"
          >
            Unser Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8"
          >
            Kompetenz durch Vernetzung
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Unser starkes Netzwerk aus spezialisierten Partnern ermöglicht es uns, Projekte jeder Größenordnung 
            professionell zu betreuen - vom privaten Wohnungsbau bis hin zu komplexen Gewerbeimmobilien. 
            Diese Vernetzung garantiert höchste Qualität und Expertise in allen Projektphasen.
          </motion.p>
        </div>

        <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
          >
            {/* Verbindungslinien */}
            {connections.map(([from, to], index) => {
              const fromNode = networkNodes.find(n => n.id === from)!
              const toNode = networkNodes.find(n => n.id === to)!
              const isHighlighted = hoveredNode === from || hoveredNode === to || 
                                  activeNode === from || activeNode === to

              return (
                <g key={`${from}-${to}`}>
                  <motion.line
                    x1={`${fromNode.x}%`}
                    y1={`${fromNode.y}%`}
                    x2={`${toNode.x}%`}
                    y2={`${toNode.y}%`}
                    stroke={isHighlighted ? "rgb(52 211 153)" : "#4B5563"}
                    strokeWidth={isHighlighted ? "0.3" : "0.2"}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    variants={lineVariants}
                    style={{
                      opacity: isHighlighted ? 0.4 : 0.15,
                      transition: "opacity 0.3s, stroke 0.3s"
                    }}
                  />
                  {isHighlighted && (
                    <MovingLine
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      isHighlighted={isHighlighted}
                    />
                  )}
                </g>
              )
            })}

            {/* Knoten */}
            {networkNodes.map((node, index) => {
              const isActive = activeNode === node.id
              const isHovered = hoveredNode === node.id

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ cursor: "pointer" }}
                >
                  <PulsingCircle isActive={isActive || isHovered} />
                  <motion.text
                    textAnchor="middle"
                    dy="-14"
                    fontSize="4"
                    fill={isActive || isHovered ? "rgb(52 211 153)" : "#E5E7EB"}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    variants={nodeVariants}
                    style={{
                      userSelect: "none",
                      transition: "fill 0.3s",
                      fontWeight: isActive || isHovered ? "bold" : "normal",
                      filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.3))"
                    }}
                  >
                    {node.label}
                  </motion.text>
                </g>
              )
            })}
          </svg>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 2 }}
          className="text-center text-gray-300 mt-12 max-w-3xl mx-auto"
        >
          Von der ersten Planung bis zur finalen Umsetzung koordinieren wir die Expertise unserer Partner 
          und passen uns flexibel an die spezifischen Anforderungen Ihres Projekts an - unabhängig von dessen Größe und Komplexität.
        </motion.p>
      </div>
    </section>
  )
}
