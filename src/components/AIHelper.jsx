import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Wand2, Send } from 'lucide-react'

export default function AIHelper() {
  const [input, setInput] = useState('Draft a carousel idea about lighting layers for a modern living room.')
  const [ideas, setIdeas] = useState([
    'Teach the 3 lighting layers: ambient, task, accent — with examples from a recent project.',
    'Before/after: how a single floor lamp changed the mood. CTA: save for your next client presentation.',
  ])
  const [loading, setLoading] = useState(false)

  const generate = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simple client-side mock generation
    setTimeout(() => {
      setIdeas((prev) => [
        `Hook: ${input.split('.')[0]} — Give 5 quick visuals to explain it.`,
        ...prev,
      ])
      setLoading(false)
    }, 800)
  }

  return (
    <section id="ai" className="py-24 bg-gradient-to-b from-white to-indigo-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">AI helper for design-led content</h2>
          <p className="mt-3 text-slate-700">Prompt-tuned ideation for architects and interior designers. Use it to spin up hooks, captions, and carousel outlines.</p>
        </div>

        <form onSubmit={generate} className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur p-4 sm:p-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">Your brief</label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 rounded-lg border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Describe what you want to post..."
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60"
            >
              <Wand2 className="h-5 w-5" /> Generate
            </button>
          </div>
        </form>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {ideas.map((idea, i) => (
              <motion.div
                key={idea + i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-black/10 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-violet-500 mt-1" />
                  <p className="text-slate-800">{idea}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
