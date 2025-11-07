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
    accent: 'from-sky-400/20 to-indigo-500/20',
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
    accent: 'from-amber-400/20 to-orange-500/20',
  },
  leapbrand: {
    title: 'LeapBrand',
    subtitle: 'Studios',
    modules: [
      { name: 'Narrative', desc: 'Origin, momentum, claim.' },
      { name: 'Identity', desc: 'Type, grid, motion.' },
      { name: 'Systems', desc: 'Design ops and AI.' },
    ],
    accent: 'from-rose-400/20 to-fuchsia-500/20',
  },
  isthmus: {
    title: 'Isthmus Labs',
    subtitle: 'Workshops',
    modules: [
      { name: 'Media Lab', desc: 'Film, sound, and edit.' },
      { name: 'Code Lab', desc: 'Generative tools.' },
      { name: 'Form Lab', desc: 'Material experiments.' },
    ],
    accent: 'from-lime-400/20 to-emerald-500/20',
  },
  datoyrelato: {
    title: 'Dato y Relato',
    subtitle: 'Press',
    modules: [
      { name: 'Essays', desc: 'Design, irony, education.' },
      { name: 'Zines', desc: 'Small runs, sharp ideas.' },
      { name: 'Maps', desc: 'Data as stories.' },
    ],
    accent: 'from-stone-200/20 to-zinc-500/20',
  },
}

export default function SystemWorld({ activeKey, onBack, onCenter }) {
  const cfg = contentByKey[activeKey]

  if (!cfg) return null

  return (
    <div className="relative h-screen w-screen bg-black text-zinc-100 overflow-hidden">
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-b ${cfg.accent}`} />
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06), transparent 50%)'
        }} />
      </div>

      <div className="absolute top-6 left-6">
        <button onClick={onBack} className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-200 transition">
          ← Back
        </button>
      </div>

      <div className="absolute top-6 right-6">
        <button onClick={onCenter} className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-200 transition">
          Center
        </button>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 p-10">
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
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              className="relative rounded-xl border border-zinc-800/70 bg-zinc-900/50 backdrop-blur-sm p-6"
            >
              <div className="text-sm text-zinc-400 uppercase tracking-wider">{cfg.subtitle}</div>
              <div className="mt-2 text-xl font-medium">{m.name}</div>
              <div className="mt-1 text-sm text-zinc-300/90">{m.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
