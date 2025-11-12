import { motion } from 'framer-motion'
import { Ruler, Palette, Camera, PenTool, BarChart3, Video, Building2, CalendarRange, Wand2, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Studio Positioning Sprint',
    desc: 'Clarify your aesthetic, audience, and voice so your feed becomes unmistakably you.',
    items: ['Visual language kit', 'Tone & pillars map', 'Bio + highlights refresh'],
  },
  {
    icon: Camera,
    title: 'Site & Project Capture Days',
    desc: 'On-location shooting optimized for social — details, textures, reveals, and process.',
    items: ['Reels + shorts batching', 'Hero imagery for carousels', 'BTS + walk-throughs'],
  },
  {
    icon: PenTool,
    title: 'Editorial Carousels',
    desc: 'Architecture-grade storytelling that educates, differentiates, and sells without selling.',
    items: ['Narrative outlines', 'Art direction', 'Design critique features'],
  },
  {
    icon: Video,
    title: 'Cinematic Reels',
    desc: 'Motion-first assets with texture, rhythm, and sound — made for saves and shares.',
    items: ['Concept + scripts', 'Shoot or edit from assets', 'Hook + CTA frameworks'],
  },
  {
    icon: BarChart3,
    title: 'Lead Engine & Funnels',
    desc: 'From content to consult — DM flows, landing micro-sites, and booking automations.',
    items: ['Profile to booking flow', 'Lead magnets', 'Performance dashboards'],
  },
  {
    icon: Palette,
    title: 'Vendor Partnership Playbooks',
    desc: 'Co-branded content and campaigns for fabricators, suppliers, and makers.',
    items: ['Offer + angle strategy', 'Co-marketing kits', 'Co-hosted launches'],
  },
  {
    icon: CalendarRange,
    title: 'Seasonal Launch Campaigns',
    desc: 'Strategic spikes around openings, awards, press, and seasonal refreshes.',
    items: ['Countdown content', 'Influencer seeding', 'PR coordination'],
  },
  {
    icon: Ruler,
    title: 'Spec-Ready Content Systems',
    desc: 'Templates and ops that help teams publish consistently without creative burnout.',
    items: ['Design system for social', 'Asset library build', 'Notion + Airtable ops'],
  },
  {
    icon: Wand2,
    title: 'AI-Assisted Concept Lab',
    desc: 'Rapid idea prototyping with prompts tuned for the built environment.',
    items: ['Mood-to-post pipelines', 'Prompt packs', 'Style transfer experiments'],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Services built for the built world</h2>
          <p className="mt-3 text-slate-700">A modular stack you can dial up or down — from one-off campaigns to a full growth program.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-white flex items-center justify-center shadow-md">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-700">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-600">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-violet-500" />{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
    </section>
  )
}
