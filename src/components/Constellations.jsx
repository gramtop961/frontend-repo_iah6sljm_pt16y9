import { useMemo } from 'react'
import { motion } from 'framer-motion'

const ecosystems = [
  {
    key: 'parentmap',
    title: 'ParentMap',
    tagline: 'Ethical education for homeschool families.',
    color: 'from-green-300/70 to-emerald-400/30',
  },
  {
    key: 'eduai',
    title: 'EDU.ai',
    tagline: 'SaaS for teachers with intelligent tools.',
    color: 'from-sky-300/60 to-indigo-400/30',
  },
  {
    key: 'leapbrand',
    title: 'LeapBrand',
    tagline: 'Branding and storytelling lab.',
    color: 'from-amber-300/70 to-orange-400/30',
  },
  {
    key: 'isthmus',
    title: 'Isthmus Labs',
    tagline: 'Weekend creative workshops for teens.',
    color: 'from-pink-300/70 to-fuchsia-400/30',
  },
  {
    key: 'datoyrelato',
    title: 'Dato y Relato',
    tagline: 'Editorial studio mixing irony and design.',
    color: 'from-lime-300/70 to-green-400/30',
  },
]

export default function Constellations({ onSelect }) {
  const nodes = useMemo(() => ecosystems, [])

  return (
    <div className="relative h-screen w-screen bg-black text-zinc-100 overflow-hidden">
      <div className="absolute inset-0">
        {/* depth rings */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 55%, rgba(120,120,120,${0.12 - i * 0.015}) 0%, transparent ${30 + i * 12}%)`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10 max-w-5xl"
        >
          {nodes.map((n, idx) => (
            <motion.button
              key={n.key}
              onClick={() => onSelect(n.key)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * idx }}
              className="relative group h-40 rounded-xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm overflow-hidden"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br ${n.color}`} />
              <div className="absolute -inset-20 opacity-30 blur-3xl group-hover:opacity-50 transition bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

              <div className="relative h-full w-full p-6 text-left flex flex-col items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{n.title}</h3>
                  <p className="mt-2 text-xs text-zinc-300/90 max-w-sm leading-relaxed">{n.tagline}</p>
                </div>
                <span className="text-[11px] uppercase tracking-widest text-zinc-400">Enter →</span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-6 left-6 text-sm text-zinc-400">
        Constellations
      </div>
    </div>
  )
}
