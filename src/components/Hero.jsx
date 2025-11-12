import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-fuchsia-600 bg-fuchsia-50 px-3 py-1 rounded-full">Social Media for the Built World</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold text-slate-900">What is Studio Odkhaan?</h1>
          <p className="mt-4 text-lg text-slate-700">We’re a social media growth studio dedicated to interior designers, architects, and the vendors who fuel their craft. We turn your projects, process, and palette into scroll-stopping stories — engineered to attract premium clients and partnerships.</p>
          <div className="mt-8 flex gap-3">
            <a href="#services" className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">Explore Services</a>
            <a href="#contact" className="px-5 py-3 rounded-lg bg-white/70 backdrop-blur border border-black/10 hover:bg-white transition-colors">Let’s Talk</a>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
    </section>
  )
}
