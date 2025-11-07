import { motion } from 'framer-motion'

const contentByKey = {
  eduai: {
    title: 'EDU.ai',
    subtitle: 'Modules',
    modules: [
      { name: 'Lesson Generator', desc: 'Blueprints from objectives.' },
      { name: 'Quiz Creator', desc: 'Socratic checks for understanding.' },
      { name: 'Image Studio', desc: 'Concept boards and diagrams.' },
    ],
    accent: 'from-sky-400/15 to-indigo-600/25',
    theme: 'edu',
  },
  parentmap: {
    title: 'ParentMap',
    subtitle: 'Frameworks',
    modules: [
      { name: 'HÁBITO', desc: 'Daily rhythms that stick.' },
      { name: 'RAÍZ', desc: 'Core values and rituals.' },
      { name: 'SENDEROS', desc: 'Learning journeys.' },
      { name: 'PUENTES', desc: 'Community touchpoints.' },
    ],
    accent: 'from-emerald-400/15 to-green-700/25',
    theme: 'homeschool',
  },
  leapbrand: {
    title: 'LeapBrand',
    subtitle: 'Studios',
    modules: [
      { name: 'Narrative', desc: 'Origin, momentum, claim.' },
      { name: 'Identity', desc: 'Type, grid, motion.' },
      { name: 'Systems', desc: 'Design ops and AI.' },
    ],
    accent: 'from-rose-400/20 to-fuchsia-600/25',
    theme: 'marketing',
  },
  isthmus: {
    title: 'Isthmus Labs',
    subtitle: 'Workshops',
    modules: [
      { name: 'Media Lab', desc: 'Film, sound, and edit.' },
      { name: 'Code Lab', desc: 'Generative tools.' },
      { name: 'Form Lab', desc: 'Material experiments.' },
    ],
    accent: 'from-lime-400/20 to-emerald-600/25',
    theme: 'education',
  },
  datoyrelato: {
    title: 'Dato y Relato',
    subtitle: 'Press',
    modules: [
      { name: 'Essays', desc: 'Design, irony, education.' },
      { name: 'Zines', desc: 'Small runs, sharp ideas.' },
      { name: 'Maps', desc: 'Data as stories.' },
    ],
    accent: 'from-stone-200/15 to-zinc-600/25',
    theme: 'editorial',
  },
}

function Scenery({ theme }) {
  // Non-interactive background decor per theme
  if (theme === 'homeschool') {
    return (
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-300/10 via-green-500/10 to-green-900/20" />
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-20 w-20 rounded-full bg-emerald-400/10 blur-2xl"
            initial={{ opacity: 0.15, y: 20, x: Math.random() * 100 + '%' }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>
    )
  }
  if (theme === 'edu') {
    return (
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-300/10 via-indigo-500/10 to-indigo-900/20" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px, 40px 40px',
          backgroundPosition: '0 0, 0 0',
        }} />
      </div>
    )
  }
  if (theme === 'marketing') {
    return (
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-400/10 via-fuchsia-500/10 to-purple-800/20" />
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-16 w-16 rotate-45 bg-gradient-to-tr from-white/10 to-transparent blur-xl"
            initial={{ opacity: 0.2, y: 20 }}
            animate={{ y: [-10, 10, -10], rotate: [40, 50, 40] }}
            transition={{ duration: 5 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>
    )
  }
  if (theme === 'education') {
    return (
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-lime-300/10 via-emerald-500/10 to-emerald-900/20" />
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px] w-40 bg-white/10"
            initial={{ opacity: 0.25, x: -60 }}
            animate={{ x: [ -60, 60, -60 ] }}
            transition={{ duration: 8 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            style={{ top: `${(i + 1) * 10}%`, left: `${10 + (i % 3) * 25}%` }}
          />
        ))}
      </div>
    )
  }
  // editorial
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-200/10 via-zinc-600/10 to-black/30" />
      <div className="absolute inset-0 opacity-15" style={{
        backgroundImage:
          'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '14px 14px',
      }} />
    </div>
  )
}

export default function SystemWorld({ activeKey, onBack, onCenter }) {
  const cfg = contentByKey[activeKey]

  if (!cfg) return null

  return (
    <div className="relative h-screen w-screen bg-black text-zinc-100 overflow-hidden">
      {/* Scenic backgrounds per theme (never block clicks) */}
      <Scenery theme={cfg.theme} />

      {/* Soft accent bloom */}
      <div className={`pointer-events-none absolute inset-0 z-0 bg-gradient-to-b ${cfg.accent}`} />
      <div className="pointer-events-none absolute inset-0 z-0" style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06), transparent 50%)'
      }} />

      {/* Controls */}
      <div className="absolute top-6 left-6 z-30">
        <button onClick={onBack} className="text-xs uppercase tracking-widest text-zinc-300 hover:text-white transition">
          ← Back
        </button>
      </div>

      <div className="absolute top-6 right-6 z-30">
        <button onClick={onCenter} className="text-xs uppercase tracking-widest text-zinc-300 hover:text-white transition">
          Center
        </button>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-10 p-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
        >
          {cfg.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full"
        >
          {cfg.modules.map((m, i) => (
            <motion.button
              type="button"
              key={m.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => { /* micro-interaction; no nav yet */ }}
              className="relative text-left rounded-xl border border-zinc-800/70 bg-zinc-900/50 backdrop-blur-sm p-6 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <div className="text-sm text-zinc-400 uppercase tracking-wider">{cfg.subtitle}</div>
              <div className="mt-2 text-xl font-medium">{m.name}</div>
              <div className="mt-1 text-sm text-zinc-300/90">{m.desc}</div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
