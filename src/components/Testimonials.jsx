import { motion } from 'framer-motion'

const quotes = [
  {
    quote: 'Our studio finally looks and sounds like us online. The positioning sprint clarified everything.',
    author: 'Anika R., Interior Designer',
  },
  {
    quote: 'The reels bring our process to life — we booked two full-home projects from inbound DMs.',
    author: 'Ravi K., Architecture Principal',
  },
  {
    quote: 'Vendors love the co-branded playbooks. It’s win-win for launches and press.',
    author: 'Mira S., Design Producer',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-violet-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Testimonials</h2>
          <p className="mt-3 text-slate-700">Stories from studios who turned posts into pipelines.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur p-6"
            >
              <p className="text-slate-800 text-lg">“{q.quote}”</p>
              <footer className="mt-4 text-sm text-slate-600">— {q.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
