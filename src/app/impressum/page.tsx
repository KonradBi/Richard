"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Impressum() {
  return (
    <main className="flex-1">
      <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl mb-16">
              Impressum
            </h1>
          </div>
          <div className="mx-auto mt-10 max-w-2xl space-y-8 text-neutral-700">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="mb-8">
                <p className="font-semibold text-neutral-900">arc MUETZE GmbH</p>
                <p>Bautznerstraße 73</p>
                <p>01099 Dresden</p>
                <div className="mt-4">
                  <p>T: +49 (0)351 88 94 21-12</p>
                  <p>E: muetze@arcmuetze.de</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Geschäftsführer</h3>
              <p className="mb-1">Richard Mütze</p>
              <p className="mb-8">Architekt M.A., ByAK, AKS</p>

              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Umsatzsteuer</h3>
              <p className="mb-8">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE341948609</p>

              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Eingetragen im Handelsregister</h3>
              <p>Registergericht: Amtsgericht Dresden</p>
              <p className="mb-8">Registernummer: HRB 41054</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Bildnachweis</h2>
              <div className="mb-8">
                <p className="font-semibold mb-2">Adobe Stock</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>© evening_tao</li>
                  <li>© imagophotodesign</li>
                  <li>© annanahabed</li>
                  <li>© filipefrazao</li>
                </ul>
                <p className="font-semibold mt-4 mb-2">iStock</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>© juhide</li>
                  <li>© aluxum</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p className="mb-2">Berufsbezeichnung: Architekt (verliehen in Deutschland / SA + BY)</p>
              <p className="mb-4">Zuständige Kammern: Sächsische Architektenkammer, Architektenkammer Bayern</p>
              <div className="space-y-2 mb-8">
                <p>Sächsisches Architektengesetz:</p>
                <Link 
                  href="https://www.revosax.sachsen.de/vorschrift/13966-SaechsArchG"
                  className="text-primary-600 hover:text-primary-700 break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.revosax.sachsen.de/vorschrift/13966-SaechsArchG
                </Link>
                <p className="mt-2">Bayerisches Baukammerngesetz:</p>
                <Link 
                  href="https://www.gesetze-bayern.de/Content/Document/BayBauKaG/true"
                  className="text-primary-600 hover:text-primary-700 break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.gesetze-bayern.de/Content/Document/BayBauKaG/true
                </Link>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Streitschlichtung</h2>
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <Link 
                  href="https://ec.europa.eu/consumers/odr"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/consumers/odr
                </Link>
              </p>
              <p className="mb-8">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Haftung für Inhalte</h2>
              <p className="mb-4">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
              <p className="mb-8">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Urheberrecht</h2>
              <p className="mb-4">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
              <p className="mb-4">Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

              <p className="mb-4">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <address className="mb-4 not-italic">
                arc MUETZE<br />
                Liststraße 10<br />
                01127 Dresden<br /><br />
                Telefon: +49 (0)351 88 94 21-12<br />
                E-Mail: buero@arc-muetze.de
              </address>
            </motion.section>
          </div>
        </div>
      </div>
    </main>
  )
}
