"use client"

import { motion } from "framer-motion"

export default function Aktuelles() {
  return (
    <main className="flex-1">
      <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl mb-16">
              Aktuelles
            </h1>
          </div>
          
          <div className="mx-auto mt-10 max-w-2xl space-y-16">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative isolate flex flex-col gap-8 lg:flex-row"
            >
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <img
                  src="/images/news/placeholder.jpg"
                  alt="Neues Büro"
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2024-03-16" className="text-gray-500">
                    März 16, 2024
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    Büro
                  </span>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    Neuer Standort in Dresden
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    Wir freuen uns, Ihnen mitteilen zu können, dass wir ab sofort in unserem neuen Büro in der Liststraße 10 in Dresden für Sie da sind. Der neue Standort bietet uns mehr Raum für Kreativität und Zusammenarbeit.
                  </p>
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative isolate flex flex-col gap-8 lg:flex-row"
            >
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <img
                  src="/images/news/placeholder-2.jpg"
                  alt="Projekt Update"
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2024-03-01" className="text-gray-500">
                    März 1, 2024
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    Projekte
                  </span>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    Neue Projekte in Planung
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    In den kommenden Monaten starten wir mit spannenden neuen Projekten. Unser Team arbeitet bereits an innovativen Konzepten für nachhaltige Architektur und moderne Wohnraumgestaltung.
                  </p>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </main>
  )
} 