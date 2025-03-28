"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BackgroundBlob } from "@/components/ui/background-blob"

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
    <main className="min-h-screen bg-nature-sand relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-70">
        <div className="absolute -top-[400px] -left-[400px]">
          <BackgroundBlob />
        </div>
        <div className="absolute -bottom-[400px] -right-[400px]">
          <BackgroundBlob />
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="relative z-10">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <h1 className="text-4xl md:text-6xl font-light text-nature-darkBrown mb-6">
              Kontakt
            </h1>
            <div className="h-px w-24 bg-nature-teal mx-auto mb-8" />
            <p className="text-lg md:text-xl text-nature-darkBrown/80 max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie ein Projekt besprechen? 
              Kontaktieren Sie uns – wir freuen uns auf den Dialog mit Ihnen.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-nature-sand/20"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-nature-darkBrown mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-nature-sand rounded-lg text-nature-darkBrown placeholder-nature-darkBrown/40 focus:outline-none focus:ring-2 focus:ring-nature-teal focus:border-transparent transition-colors"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-nature-darkBrown mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-nature-sand rounded-lg text-nature-darkBrown placeholder-nature-darkBrown/40 focus:outline-none focus:ring-2 focus:ring-nature-teal focus:border-transparent transition-colors"
                    placeholder="ihre@email.de"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-nature-darkBrown mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-nature-sand rounded-lg text-nature-darkBrown placeholder-nature-darkBrown/40 focus:outline-none focus:ring-2 focus:ring-nature-teal focus:border-transparent transition-colors resize-none"
                    placeholder="Ihre Nachricht an uns"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-6 py-4 bg-nature-teal text-white rounded-lg font-medium hover:bg-nature-teal/90 focus:outline-none focus:ring-2 focus:ring-nature-teal focus:ring-offset-2 focus:ring-offset-nature-sand transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Wird gesendet..." : "Nachricht senden"}
                </button>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-nature-teal text-center mt-4"
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
              className="space-y-8"
            >
              {/* Office Information */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-nature-sand/20">
                <h3 className="text-2xl font-light text-nature-darkBrown mb-6">Büro</h3>
                <div className="space-y-3 text-nature-darkBrown/80">
                  <p>Richard Mütze</p>
                  <p>Freier Architekt</p>
                  <p>Mitglied der Architektenkammer Sachsen</p>
                  <p>Liststraße 10</p>
                  <p>01127 Dresden</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-nature-sand/20">
                <h3 className="text-2xl font-light text-nature-darkBrown mb-6">Kontaktdaten</h3>
                <div className="space-y-3">
                  <a href="tel:+4935188942112" className="block text-nature-darkBrown/80 hover:text-nature-teal transition-colors">
                    Telefon: +49 (0)351 88 94 21-12
                  </a>
                  <a href="mailto:buero@arc-muetze.de" className="block text-nature-darkBrown/80 hover:text-nature-teal transition-colors break-words">
                    E-Mail: buero@arc-muetze.de
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}
