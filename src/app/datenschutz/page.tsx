"use client"

import { motion } from "framer-motion"

export default function Datenschutz() {
  return (
    <main className="flex-1">
      <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl mb-16">
              Datenschutzerklärung
            </h1>
          </div>
          <div className="mx-auto mt-10 max-w-2xl space-y-8 text-neutral-700">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Allgemeine Hinweise</h3>
              <p className="mb-4">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
              
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Datenerfassung auf unserer Website</h3>
              <h4 className="text-lg font-medium text-neutral-900 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
              <p className="mb-4">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
              
              <h4 className="text-lg font-medium text-neutral-900 mb-2">Wie erfassen wir Ihre Daten?</h4>
              <p className="mb-4">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
              <p className="mb-4">Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Datenschutz</h3>
              <p className="mb-4">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
              
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <p className="mb-4">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <address className="mb-4 not-italic">
                arc MUETZE<br />
                Bautzner Straße 73<br />
                01099 Dresden<br /><br />
                Telefon: +49 173 8083565<br />
                E-Mail: muetze@arcmuetze.de
              </address>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. Datenerfassung auf unserer Website</h2>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Cookies</h3>
              <p className="mb-4">
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. 
                Sie richten keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher 
                und effektiver zu gestalten.
              </p>
              
              <h4 className="text-lg font-medium text-neutral-900 mb-2">Arten von Cookies</h4>
              <p className="mb-4">Wir verwenden folgende Arten von Cookies:</p>
              <ul className="list-disc list-inside mb-4 ml-4">
                <li className="mb-2">
                  <strong>Technisch notwendige Cookies:</strong> Diese Cookies sind für den Betrieb der Website erforderlich. 
                  Dazu gehört der Cookie für Ihre Cookie-Einwilligung (cookieConsent).
                </li>
              </ul>
              
              <h4 className="text-lg font-medium text-neutral-900 mb-2">Details zu den verwendeten Cookies</h4>
              <div className="mb-4 ml-4">
                <p className="mb-2"><strong>Cookie-Einwilligung (cookieConsent)</strong></p>
                <ul className="list-disc list-inside mb-4 ml-4">
                  <li>Zweck: Speichert Ihre Entscheidung zur Cookie-Nutzung</li>
                  <li>Speicherdauer: 1 Jahr</li>
                  <li>Art: Technisch notwendig</li>
                  <li>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                </ul>
              </div>
              
              <h4 className="text-lg font-medium text-neutral-900 mb-2">Ihre Rechte bezüglich Cookies</h4>
              <p className="mb-4">
                Sie haben das Recht, Ihre Cookie-Einwilligung jederzeit zu widerrufen. Wenn Sie Ihre Einwilligung widerrufen möchten, 
                löschen Sie bitte die Cookies in Ihrem Browser. Bei Ihrem nächsten Besuch können Sie dann eine neue Entscheidung treffen.
              </p>
              
              <h4 className="text-lg font-medium text-neutral-900 mb-2">Sicherheit der Cookies</h4>
              <p className="mb-4">
                Alle von uns gesetzten Cookies werden mit den Attributen "Secure" und "SameSite=Strict" versehen, 
                um höchstmögliche Sicherheit zu gewährleisten. Die Übertragung erfolgt ausschließlich verschlüsselt über HTTPS.
              </p>
              
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Server-Log-Dateien</h3>
              <p className="mb-4">Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
              <ul className="list-disc list-inside mb-4 ml-4">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
            </motion.section>
          </div>
        </div>
      </div>
    </main>
  )
}
