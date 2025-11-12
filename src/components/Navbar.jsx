import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ onNavigate }) {
  const [open, setOpen] = useState(false)

  const links = [
    { id: 'hero', label: 'What is Studio Odkhaan?' },
    { id: 'services', label: 'Services' },
    { id: 'ai', label: 'AI Helper' },
    { id: 'report', label: 'Organic Content Report' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleClick = (id) => {
    setOpen(false)
    onNavigate?.(id)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500 flex items-center justify-center shadow-md">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-slate-900">Studio Odkhaan</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => handleClick(l.id)}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
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
            className="md:hidden border-t border-black/5 bg-white/80 backdrop-blur"
          >
            <div className="px-4 py-4 space-y-2">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => handleClick(l.id)}
                  className="block w-full text-left px-2 py-2 rounded-lg hover:bg-slate-100 text-slate-800"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
