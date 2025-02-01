"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"

export function Contact() {
  const containerRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        e.currentTarget.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={containerRef} id="kontakt" className="relative py-32 overflow-hidden bg-neutral-50">
      {/* Minimalistischer Hintergrund */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,neutral-200_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.015]" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-transparent to-neutral-50" />
      </motion.div>

      {/* Content Container */}
      <motion.div 
        style={{ y: contentY }}
        className="relative container mx-auto px-4"
      >
        {/* Section Title */}
        <div className="text-center mb-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm tracking-wider text-primary-500 mb-4"
          >
            KONTAKT
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-light text-neutral-800 relative"
          >
            <span className="relative inline-block">
              Lassen Sie uns über Ihr Projekt sprechen
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent origin-left"
              />
            </span>
          </motion.h2>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-32 relative"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-50/5 via-primary-100/10 to-primary-50/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.03)_0%,transparent_65%)]"></div>
          </div>
          <div className="relative">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-32">
                <p className="text-lg text-gray-400 mb-8">Telefonisch erreichen Sie uns unter:</p>
                <div className="flex items-center justify-center space-x-4">
                  <svg className="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <a 
                    href="tel:+4935131776150" 
                    className="text-5xl font-light text-primary-500 hover:text-primary-400 transition-colors tracking-wider"
                  >
                    +49 (0) 351 317 761 50
                  </a>
                </div>
              </div>
              <div className="relative bg-neutral-900/80 backdrop-blur-sm p-12 rounded-3xl shadow-xl border border-neutral-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 via-primary-500/5 to-transparent pointer-events-none"></div>
                <div className="text-center mb-12">
                  <p className="text-2xl text-white/90">
                    Schreiben Sie uns eine Nachricht. Wir melden uns zeitnah bei Ihnen.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-base font-medium text-white mb-3">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full px-5 py-4 bg-white/90 border-2 border-transparent rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-neutral-900 placeholder-neutral-500 text-lg"
                        placeholder="Ihr Name"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-base font-medium text-white mb-3">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full px-5 py-4 bg-white/90 border-2 border-transparent rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-neutral-900 placeholder-neutral-500 text-lg"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-base font-medium text-white mb-3">
                      Nachricht
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={6}
                      className="w-full px-5 py-4 bg-white/90 border-2 border-transparent rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-neutral-900 placeholder-neutral-500 resize-none text-lg"
                      placeholder="Ihre Nachricht an uns..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center px-10 py-5 bg-primary-500 text-white text-lg font-medium rounded-xl hover:bg-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px] shadow-xl hover:shadow-primary-500/30"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Wird gesendet...
                        </span>
                      ) : (
                        "Nachricht senden"
                      )}
                    </button>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-emerald-600"
                    >
                      Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-red-600"
                    >
                      Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
