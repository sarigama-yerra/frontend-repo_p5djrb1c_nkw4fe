import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/ai-helper', label: 'AI Helper' },
    { to: '/organic-report', label: 'Organic Report' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#E3FFCF]/70 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-yellow-400 via-teal-400 to-black flex items-center justify-center shadow-sm">
              <Sparkles className="h-5 w-5 text-black" />
            </div>
            <span className="font-semibold text-black">Studio Odkhaan</span>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-black/80 hover:text-black transition-colors px-2 py-1 rounded-md hover:bg-yellow-200/60"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-yellow-200/60"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-black/10 bg-[#E3FFCF]/80 backdrop-blur"
          >
            <div className="px-4 py-4 space-y-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="block w-full text-left px-3 py-2 rounded-lg hover:bg-yellow-200/60 text-black"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
