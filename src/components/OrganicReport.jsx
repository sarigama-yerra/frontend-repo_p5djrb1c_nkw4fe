import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Save, Bookmark, Share2 } from 'lucide-react'

const metrics = [
  { label: 'Saves rate', value: '9.8%', delta: '+2.1%' },
  { label: 'Shares rate', value: '5.2%', delta: '+1.3%' },
  { label: 'Profile visits', value: '12.4k', delta: '+18%' },
  { label: 'Inbound DMs', value: '183', delta: '+24%' },
]

export default function OrganicReport() {
  return (
    <section id="report" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Organic content report</h2>
          <p className="mt-3 text-slate-700">A simple, honest view of what’s working — focused on signals that matter for high-consideration design services.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur p-6"
            >
              <div className="text-sm text-slate-600">{m.label}</div>
              <div className="mt-2 text-3xl font-bold text-slate-900">{m.value}</div>
              <div className="mt-1 text-sm text-emerald-600">{m.delta} this month</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 bg-gradient-to-br from-indigo-50 to-fuchsia-50 p-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">The three signals we optimize</h3>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
                <li>Saves: do clients want to keep this as a reference?</li>
                <li>Shares: is there a teaching moment worth passing on?</li>
                <li>DMs: does the content open a conversation?</li>
              </ul>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-white p-4 border border-black/10 text-center">
                <Save className="h-6 w-6 mx-auto text-violet-500" />
                <div className="mt-2 text-sm font-medium">Saves</div>
              </div>
              <div className="rounded-xl bg-white p-4 border border-black/10 text-center">
                <Share2 className="h-6 w-6 mx-auto text-violet-500" />
                <div className="mt-2 text-sm font-medium">Shares</div>
              </div>
              <div className="rounded-xl bg-white p-4 border border-black/10 text-center">
                <TrendingUp className="h-6 w-6 mx-auto text-violet-500" />
                <div className="mt-2 text-sm font-medium">DMs</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
