"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Image
                src="/images/logos/logoarcmuetze.png"
                alt="arc muetze Logo"
                width={180}
                height={60}
                className="brightness-0 invert" // Invertiere das Logo für den dunklen Footer
                priority
              />
            </div>
            <div className="text-left text-gray-400">
              <p className="text-lg">Nachhaltige Architektur für die Zukunft</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-base text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-base text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  Projekte
                </Link>
              </li>
              <li>
                <Link
                  href="/house-0"
                  className="text-base text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  Haus 0
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Kontakt</h3>
            <ul className="space-y-3 text-gray-400">
              <li><p className="text-base text-neutral-400">Bautznerstraße 73</p></li>
              <li><p className="text-base text-neutral-400">01099 Dresden</p></li>
              <li><p className="text-base text-neutral-400">muetze@arcmuetze.de</p></li>
              <li><p className="text-base text-neutral-400">+49 (0)351 88 94 21-12</p></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Rechtliches</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/datenschutz"
                  className="text-base text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-base text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} arc muetze. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
