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
          isScrolled ? "bg-nature-sand/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
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
                className={isScrolled ? "brightness-75" : ""}
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
                      className="relative text-nature-darkBrown hover:text-nature-teal transition-colors group"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nature-teal group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-10 md:hidden"
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className={`block h-0.5 w-6 bg-nature-darkBrown transform transition-transform duration-300`}
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`block h-0.5 w-6 bg-nature-darkBrown transition-opacity duration-300`}
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className={`block h-0.5 w-6 bg-nature-darkBrown transform transition-transform duration-300`}
                />
              </div>
            </button>
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
              className="absolute inset-0 bg-nature-sand/90 backdrop-blur-lg"
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
                        className="text-3xl font-light text-nature-darkBrown hover:text-nature-teal transition-colors"
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
