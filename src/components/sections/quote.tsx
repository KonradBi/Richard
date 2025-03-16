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
    className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-br from-nature-sage/10 to-nature-teal/10 blur-3xl"
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

  const authorVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 4 } }
  }

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-nature-darkBrown"
    >
      {/* Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 flex items-center justify-center opacity-70"
      >
        <div className="absolute -top-[400px] -left-[400px]">
          <BackgroundBlob />
        </div>
        <div className="absolute -bottom-[400px] -right-[400px]">
          <BackgroundBlob />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        ref={ref}
        style={{ y: contentY }}
        className="relative container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="relative">
            <span className="absolute -top-8 -left-4 text-6xl text-nature-sand/20">"</span>
            <span className="absolute -bottom-8 -right-4 text-6xl text-nature-sand/20">"</span>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-3xl md:text-5xl font-light leading-relaxed tracking-wide text-nature-sand [word-spacing:0.3em]"
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className={`inline-block mx-[0.15em] ${
                    word === "Licht" 
                      ? "text-nature-teal font-normal relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-nature-teal/30" 
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
              <cite className="text-nature-sage/80 tracking-wide">— {author}</cite>
            </motion.footer>
          </blockquote>
        </div>
      </motion.div>
    </section>
  )
}
