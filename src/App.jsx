import { useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import AIHelper from './components/AIHelper'
import OrganicReport from './components/OrganicReport'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  const sectionsRef = {
    hero: useRef(null),
    services: useRef(null),
    ai: useRef(null),
    report: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
  }

  const scrollTo = (id) => {
    const el = sectionsRef[id]?.current
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar onNavigate={scrollTo} />

      <main className="pt-16">
        <section ref={sectionsRef.hero}>
          <Hero />
        </section>

        <SectionTransition />
        <section ref={sectionsRef.services}>
          <Services />
        </section>

        <SectionTransition />
        <section ref={sectionsRef.ai}>
          <AIHelper />
        </section>

        <SectionTransition />
        <section ref={sectionsRef.report}>
          <OrganicReport />
        </section>

        <SectionTransition />
        <section ref={sectionsRef.testimonials}>
          <Testimonials />
        </section>

        <SectionTransition />
        <section ref={sectionsRef.contact}>
          <Contact />
        </section>
      </main>

      <footer className="border-t border-black/5 py-10 text-center text-slate-500">
        © {new Date().getFullYear()} Studio Odkhaan. All rights reserved.
      </footer>
    </div>
  )
}

function SectionTransition() {
  return (
    <div className="relative h-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100 to-transparent"
      />
    </div>
  )
}

export default App
