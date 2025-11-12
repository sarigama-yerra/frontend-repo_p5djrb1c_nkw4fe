import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setTimeout(() => setSent(true), 600)
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Contact us</h2>
          <p className="mt-3 text-slate-700">Tell us about your studio, timelines, and goals. We’ll reply within one business day.</p>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur p-6 grid md:grid-cols-2 gap-4"
        >
          <input className="rounded-lg border border-black/10 px-4 py-3" placeholder="Your name" required />
          <input className="rounded-lg border border-black/10 px-4 py-3" placeholder="Email" type="email" required />
          <input className="rounded-lg border border-black/10 px-4 py-3 md:col-span-2" placeholder="Studio name / website" />
          <textarea className="rounded-lg border border-black/10 px-4 py-3 md:col-span-2" rows="5" placeholder="Tell us about your project, goals, budget, timeline..." />
          <div className="md:col-span-2 flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" className="rounded" /> I’d like a quick audit of our Instagram.
            </label>
            <button className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Send</button>
          </div>
          {sent && <p className="md:col-span-2 text-emerald-600">Thanks! We’ll be in touch shortly.</p>}
        </motion.form>
      </div>
    </section>
  )
}
