"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    quote: "Wir sind begeistert von der Kreativität und dem Engagement des Teams. Die Zusammenarbeit war von Anfang bis Ende professionell und zielführend.",
    author: "Familie Müller",
    role: "Bauherr aus Dresden",
    gradientFrom: "from-amber-50",
    gradientTo: "to-orange-100"
  },
  {
    quote: "Innovative Lösungen, die unsere Erwartungen übertroffen haben. Die Verbindung von Funktionalität und Design ist perfekt gelungen.",
    author: "Dr. Schmidt",
    role: "Geschäftsführer, ProBau Development GmbH",
    gradientFrom: "from-stone-100",
    gradientTo: "to-neutral-200"
  },
  {
    quote: "Ein verlässlicher Partner mit Weitblick. Die Umsetzung unseres Projekts war vorbildlich und termingerecht.",
    author: "Michael Weber",
    role: "Bauherr aus Chemnitz",
    gradientFrom: "from-zinc-100",
    gradientTo: "to-slate-200"
  }
]

// Subtiles Anführungszeichen-Symbol für die Testimonials
const QuoteIcon = () => (
  <svg className="w-12 h-12 text-emerald-600/20" viewBox="0 0 50 50" fill="currentColor">
    <path d="M10,43.2c-6.5-6.1-6.8-16.1-6.8-17.3c0-1.1,0-12.3,12.3-19.7c1.1-0.6,2.5-0.2,3.1,0.9c0.6,1.1,0.2,2.5-0.9,3.1 C8.4,16.9,8.7,25.5,8.7,25.9c0,0,0.2,8.3,4.9,12.7c2.6,2.5,6.3,3.7,10.9,3.7c1.3,0,2.3,1,2.3,2.3c0,1.3-1,2.3-2.3,2.3 C18.5,46.9,13.7,45.4,10,43.2z M36.4,43.2c-6.5-6.1-6.8-16.1-6.8-17.3c0-1.1,0-12.3,12.3-19.7c1.1-0.6,2.5-0.2,3.1,0.9 c0.6,1.1,0.2,2.5-0.9,3.1c-9.3,6.7-9,15.3-9,15.7c0,0,0.2,8.3,4.9,12.7c2.6,2.5,6.3,3.7,10.9,3.7c1.3,0,2.3,1,2.3,2.3 c0,1.3-1,2.3-2.3,2.3C44.9,46.9,40.1,45.4,36.4,43.2z"/>
  </svg>
)

export function Testimonials() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const wordVariants = {
    hidden: { 
      opacity: 0,
      y: 10,
      rotateX: 60
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  }

  return (
    <section className="relative py-32 overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,neutral-200_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.015]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-500 text-sm uppercase tracking-widest mb-4 block"
          >
            Stimmen
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-light text-neutral-800 relative"
          >
            <span className="relative">
              Referenzen
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

        <motion.div 
          ref={containerRef}
          className="grid md:grid-cols-3 gap-8 md:gap-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative p-8 h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradientFrom} ${testimonial.gradientTo} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className="mb-6 text-neutral-400">
                    <QuoteIcon />
                  </div>

                  <motion.blockquote 
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mb-8"
                  >
                    {testimonial.quote.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        variants={wordVariants}
                        className="inline-block mr-1 text-lg text-neutral-700"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.blockquote>

                  <motion.footer
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.5 + (testimonial.quote.split(" ").length * 0.05) }}
                  >
                    <div className="font-medium text-neutral-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-neutral-500 mt-1">
                      {testimonial.role}
                    </div>
                  </motion.footer>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
