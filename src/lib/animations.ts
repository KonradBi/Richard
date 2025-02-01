import { useTransform, useScroll } from "framer-motion"

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export const slideIn = {
  initial: { x: -60, opacity: 0 },
  animate: { 
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100
    }
  }
}

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { 
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
}

export const buttonHoverEffect = {
  whileHover: { 
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  whileTap: { scale: 0.95 }
}

export const parallaxScroll = (scrollYProgress: any, intensity = 100) => ({
  y: useTransform(scrollYProgress, [0, 1], [0, intensity])
})
