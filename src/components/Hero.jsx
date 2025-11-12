import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] bg-green-50">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-200/40 via-teal-200/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-black text-yellow-300 px-3 py-1 text-xs font-medium mb-4">
            Scrapbook Edition
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight">
            What is Studio Odkhaan?
          </h1>
          <p className="mt-4 text-lg text-black/70">
            A social media studio for interior designers, architects, and their vendor partners. Clean strategy, tactile vibes, measurable outcomes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-xl bg-yellow-300 text-black px-4 py-2 font-medium shadow hover:shadow-md transition">
              Explore Services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/ai-helper" className="inline-flex items-center gap-2 rounded-xl bg-teal-300 text-black px-4 py-2 font-medium shadow hover:shadow-md transition">
              Try AI Helper
            </Link>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden border border-black/10 bg-[#E3FFCF] shadow-sm">
          <div className="h-[320px] sm:h-[420px]">
            <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" />
          </div>
          <div className="absolute inset-0 pointer-events-none mix-blend-multiply bg-gradient-to-t from-yellow-100/40 via-transparent to-teal-100/40" />
        </div>
      </div>
    </section>
  )
}
