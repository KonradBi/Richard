"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Leaf, Building2, Users, CheckCircle2, Clock, FileSearch } from "lucide-react"

const services = [
  {
    title: "Projektentwicklung",
    items: [
      "Machbarkeitsstudie",
      "Kosten-Nutzen-Analyse",
      "Finanzielle und Steuerliche Strategie"
    ],
    Icon: Leaf,
    gradient: "from-nature-sage to-nature-teal"
  },
  {
    title: "Architektur",
    items: [
      "Leistungsphasen 1-9",
      "Visualisierungen",
      "Interieurplanung"
    ],
    Icon: Building2,
    gradient: "from-nature-teal to-nature-sage"
  }
]

const stats = [
  {
    value: "15",
    label: "Planungspartner",
    Icon: Users,
    delay: 0.1
  },
  {
    value: "25",
    label: "realisierte Projekte",
    Icon: CheckCircle2,
    delay: 0.2
  },
  {
    value: "15",
    label: "Jahre Planung & Ausführung",
    Icon: Clock,
    delay: 0.3
  },
  {
    value: "100",
    label: "Machbarkeitsstudien",
    Icon: FileSearch,
    delay: 0.4
  }
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 260, 
      damping: 20, 
      delay: 0.2 
    }
  },
  hover: { 
    scale: 1.1,
    transition: { duration: 0.3 }
  }
}

const numberVariants = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { 
      duration: 0.5,
      delay: custom * 0.1 + 0.4
    }
  })
}

// Komponente für animierte Zahlen, die hochzählen
function CountUp({ end, duration = 1.5, delay = 0 }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;
    const endValue = parseInt(end);
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing-Funktion für natürlichere Animation
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easedProgress * endValue));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    // Verzögerung vor Start der Animation
    const timer = setTimeout(() => {
      animationFrame = requestAnimationFrame(updateCount);
    }, delay * 1000);
    
    return () => {
      clearTimeout(timer);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration, delay]);
  
  return <span ref={nodeRef}>{count}</span>;
}

// Fixed Typewriter animation component
function TypewriterText({ text, delay = 3, speed = 40 }) {
  const [displayText, setDisplayText] = useState("");
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      // Start with empty text
      setDisplayText("");
      
      // Start typing after delay
      const startTypingTimeout = setTimeout(() => {
        let currentIndex = 0;
        
        const typingInterval = setInterval(() => {
          if (currentIndex <= text.length) {
            setDisplayText(text.substring(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typingInterval);
          }
        }, speed);
        
        return () => clearInterval(typingInterval);
      }, delay * 1000);
      
      return () => clearTimeout(startTypingTimeout);
    }
  }, [isInView, text, delay, speed]);
  
  return (
    <motion.p
      ref={textRef}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="mt-4 text-lg leading-8 text-nature-darkBrown/80 italic min-h-[6rem] md:min-h-[4.5rem]"
    >
      "{displayText}"
      {displayText !== text && (
        <span className="inline-block w-1 h-5 ml-1 bg-nature-teal/70 animate-pulse" />
      )}
    </motion.p>
  );
}

export function Services() {
  const containerRef = useRef(null)
  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])
  
  const quoteText = "Ich entwerfe Architektur, die morgen noch begeistert – nachhaltig, innovativ und für jedermann bezahlbar bleibt. Gute Gestaltung darf kein Luxus sein, sondern ein Standard für alle.";

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-nature-sand/5">
      {/* Hintergrund mit subtilen Effekten */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#9ba297_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.015]" />
        <div className="absolute inset-0 bg-gradient-to-b from-nature-sand/5 via-transparent to-nature-sand/5" />
      </div>

      <motion.div
        className="relative container mx-auto px-4"
        style={{ y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-light tracking-tight text-nature-darkBrown mb-8"
            >
              Architektur "Neu" gedacht
            </motion.h2>
            
            {/* Fixed Typewriter animation for the quote */}
            <TypewriterText text={quoteText} delay={0.5} speed={30} />
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
                  className="group relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-nature-sage/20"
                >
                  {/* Icon mit Animation */}
                  <div className="mb-6 transform group-hover:scale-110 transition-all duration-500">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <div className="absolute inset-0 bg-nature-sand/50 rounded-xl group-hover:scale-110 transition-all duration-500" />
                      <service.Icon className="relative h-6 w-6 text-nature-teal group-hover:text-nature-warmBrown transition-colors duration-300" />
                    </div>
                  </div>
                  
                  {/* Titel */}
                  <h3 className="text-2xl font-light text-nature-darkBrown mb-6">
                    {service.title}
                  </h3>
                  
                  {/* Liste */}
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 + 0.5 }}
                        className="flex items-center text-nature-darkBrown/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-nature-teal/40 mr-3" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid - Enhanced version */}
            <motion.div 
              ref={statsRef}
              variants={containerVariants}
              initial="hidden"
              animate={isStatsInView ? "visible" : "hidden"}
              className="mt-32 mb-16"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm border border-nature-sage/10 group"
                  >
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      className="mx-auto mb-4 w-12 h-12 rounded-xl bg-nature-sand/50 flex items-center justify-center"
                    >
                      <stat.Icon className="h-6 w-6 text-nature-teal group-hover:text-nature-warmBrown transition-colors duration-300" />
                    </motion.div>
                    
                    <motion.p
                      variants={numberVariants}
                      custom={index}
                      className="text-4xl font-light text-nature-darkBrown mb-2"
                    >
                      <CountUp end={stat.value} delay={0.2 + index * 0.1} duration={1.2} />
                    </motion.p>
                    
                    <motion.p
                      variants={numberVariants}
                      custom={index + 0.5}
                      className="text-sm text-nature-darkBrown/70"
                    >
                      {stat.label}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
