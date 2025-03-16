"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-nature-darkBrown text-nature-sand py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Image
                src="/images/logos/logoarcmuetze.png"
                alt="arc muetze Logo"
                width={180}
                height={60}
                className="brightness-0 invert opacity-90"
                priority
              />
            </div>
            <div className="text-left text-nature-sand/80">
              <p className="text-lg">Nachhaltige Architektur für die Zukunft</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-nature-teal mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/uberuns"
                  className="text-base text-nature-sand/80 hover:text-nature-teal transition-colors"
                >
                  Über mich
                </Link>
              </li>
              <li>
                <Link
                  href="/projekte"
                  className="text-base text-nature-sand/80 hover:text-nature-teal transition-colors"
                >
                  Projekte
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-base text-nature-sand/80 hover:text-nature-teal transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-nature-teal mb-6">Kontakt</h3>
            <ul className="space-y-3 text-nature-sand/80">
              <li><p className="text-base">Bautznerstraße 73</p></li>
              <li><p className="text-base">01099 Dresden</p></li>
              <li><p className="text-base">muetze@arcmuetze.de</p></li>
              <li><p className="text-base">+49 (0)351 88 94 21-12</p></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-nature-teal mb-6">Rechtliches</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/datenschutz"
                  className="text-base text-nature-sand/80 hover:text-nature-teal transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-base text-nature-sand/80 hover:text-nature-teal transition-colors"
                >
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-nature-warmBrown/20 mt-8 pt-8 text-center text-nature-sand/60">
          <p>&copy; {new Date().getFullYear()} arc muetze. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
