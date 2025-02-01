"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const words = [
  "Architektur", "ist", "der", "durchdachte,", "kühne", "und", "großartige", 
  "Zusammenklang", "von", "Formen,", "die", "im", "Licht", "entstehen."
]
const author = "Le Corbusier"

const BackgroundBlob = () => (
  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.2, 0.3],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-br from-emerald-500/5 to-primary-500/5 blur-3xl"
  />
)

export function Quote() {
  const containerRef = useRef(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const wordVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      rotateX: 90
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  }

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-neutral-950">
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -top-[400px] -left-[400px]">
          <BackgroundBlob />
        </div>
        <div className="absolute -bottom-[400px] -right-[400px]">
          <BackgroundBlob />
        </div>
      </div>

      {/* Subtle grid pattern */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,neutral-800_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.15]" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: contentY }}
        className="relative container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="relative">
            <span className="absolute -top-8 -left-4 text-6xl text-emerald-500/20">"</span>
            <span className="absolute -bottom-8 -right-4 text-6xl text-emerald-500/20">"</span>
            
            <motion.div
              ref={ref}
              className="text-3xl md:text-5xl font-light leading-relaxed tracking-wide text-neutral-200 [word-spacing:0.3em]"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className={`inline-block mx-[0.15em] ${
                    word === "Licht" 
                      ? "text-emerald-400 font-normal relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-emerald-400/30" 
                      : ""
                  }`}
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.footer
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 4 }}
              className="mt-12"
            >
              <cite className="text-neutral-400 tracking-wide">— {author}</cite>
            </motion.footer>
          </blockquote>
        </div>
      </motion.div>
    </section>
  )
}
