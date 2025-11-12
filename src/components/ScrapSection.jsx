import { motion } from 'framer-motion'

export default function ScrapSection({ children, title, subtitle }) {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-8">
            {title && (
              <h2 className="inline-block text-3xl sm:text-4xl font-extrabold text-black bg-yellow-300 px-3 py-1 -rotate-1 rounded-sm shadow-[4px_4px_0_0_rgba(0,0,0,0.2)]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-black/70 max-w-2xl">{subtitle}</p>
            )}
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative rounded-2xl border border-black/20 bg-[#E3FFCF]/70 backdrop-blur p-4 sm:p-6 shadow-[6px_6px_0_0_#000]"
        >
          {/* taped corners */}
          <div className="pointer-events-none absolute -top-3 left-6 h-6 w-16 bg-yellow-200/80 rotate-[-6deg] shadow" />
          <div className="pointer-events-none absolute -bottom-3 right-6 h-6 w-16 bg-teal-200/80 rotate-[8deg] shadow" />
          {children}
        </motion.div>
      </div>
    </section>
  )
}
