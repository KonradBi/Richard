"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigation = [
    { name: 'Startseite', href: '/' },
    { name: 'Über uns', href: '/about' },
    { name: 'Projekte', href: '/projekte' },
    { name: 'Haus 0', href: '/haus-0' },
    { name: 'Kontakt', href: '/kontakt' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header 
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="h-24 flex items-center justify-between">
            <Link 
              href="/" 
              className="relative z-10 group flex items-center"
            >
              <Image
                src="/images/logos/logoarcmuetze.png"
                alt="arc muetze Logo"
                width={140}
                height={50}
                className={isScrolled ? "" : ""}
              />
            </Link>
            
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navigation.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Link 
                      href={item.href}
                      className="relative text-neutral-600 hover:text-primary-500 transition-colors group"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.button 
              className="relative z-10 md:hidden w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Menu öffnen</span>
              <div className="relative w-6 h-5">
                <motion.span
                  className="absolute w-full h-0.5 bg-neutral-800"
                  animate={{ 
                    top: isMenuOpen ? "50%" : "0%",
                    rotate: isMenuOpen ? 45 : 0,
                    translateY: isMenuOpen ? "-50%" : "0%"
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-1/2 w-full h-0.5 bg-neutral-800"
                  animate={{ 
                    opacity: isMenuOpen ? 0 : 1,
                    translateY: "-50%"
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute w-full h-0.5 bg-neutral-800"
                  animate={{ 
                    bottom: isMenuOpen ? "50%" : "0%",
                    rotate: isMenuOpen ? -45 : 0,
                    translateY: isMenuOpen ? "50%" : "0%"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute inset-0 bg-white/90 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <nav className="h-full flex items-center justify-center">
                <ul className="space-y-8 text-center">
                  {navigation.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        href={item.href}
                        className="text-3xl font-bold text-neutral-800 hover:text-primary-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
