"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Header } from "@/components/layout/header"

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-primary-50/20 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #22c55e 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="relative z-10">
            {/* Header Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-light text-neutral-800 mb-6">
                Kontakt
              </h1>
              <div className="h-px w-24 bg-primary-500 mx-auto mb-8" />
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Haben Sie Fragen oder möchten Sie ein Projekt besprechen? 
                Kontaktieren Sie uns – wir freuen uns auf den Dialog mit Ihnen.
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Ihr Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="ihre@email.de"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Ihre Nachricht an uns"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-6 py-4 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Wird gesendet..." : "Nachricht senden"}
                  </button>

                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 text-center mt-4"
                    >
                      Ihre Nachricht wurde erfolgreich gesendet!
                    </motion.p>
                  )}

                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-center mt-4"
                    >
                      Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.
                    </motion.p>
                  )}
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-12"
              >
                {/* Office Information */}
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-light text-neutral-800 mb-6">Büro</h3>
                  <div className="space-y-4 text-neutral-600">
                    <p>Richard Mütze</p>
                    <p>Freier Architekt</p>
                    <p>Mitglied der Architektenkammer Sachsen</p>
                    <p>Bautzner Straße 10</p>
                    <p>01099 Dresden</p>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-light text-neutral-800 mb-6">Kontaktdaten</h3>
                  <div className="space-y-4">
                    <a href="tel:+4935120071790" className="block text-neutral-600 hover:text-primary-500 transition-colors">
                      Telefon: +49 (0) 351 2007 1790
                    </a>
                    <a href="mailto:muetze@arc-muetze.de" className="block text-neutral-600 hover:text-primary-500 transition-colors">
                      E-Mail: muetze@arc-muetze.de
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
