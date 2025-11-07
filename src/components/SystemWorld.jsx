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
    accent: 'from-sky-400/20 via-indigo-500/20 to-indigo-900/30',
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
    accent: 'from-emerald-400/20 via-green-600/20 to-green-900/30',
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
    accent: 'from-rose-400/25 via-fuchsia-600/20 to-purple-900/30',
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
    accent: 'from-lime-400/25 via-emerald-500/20 to-emerald-900/30',
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
    accent: 'from-stone-200/20 via-zinc-500/20 to-black/40',
    theme: 'editorial',
  },
}

function Scenery({ theme }) {
  // Non-interactive background decor per theme
  if (theme === 'homeschool') {
    // Calm emerald forest with floating soft glows
    return (
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* deep forest wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-300/10 via-green-600/15 to-green-950/40" />
        {/* moonlight shafts */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="absolute inset-y-0 w-1/4 bg-gradient-to-b from-white/5 via-emerald-200/5 to-transparent blur-xl"
               style={{ left: `${10 + i * 30}%`, transform: `skewX(-8deg)` }} />
        ))}
        {/* soft bokeh glows */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-24 w-24 rounded-full bg-emerald-400/15 blur-3xl"
            initial={{ opacity: 0.25, y: 10 }}
            animate={{ y: [-8, 8, -8], scale: [1, 1.06, 1] }}
            transition={{ duration: 7 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
            style={{ top: `${Math.random() * 90}%`, left: `${Math.random() * 90}%` }}
          />
        ))}
        {/* subtle canopy vignette */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 45%, rgba(0,0,0,0.45) 100%)'
        }} />
      </div>
    )
  }
  if (theme === 'edu') {
    // Educational blueprint grid with scanning sweeps
    return (
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-300/10 via-indigo-600/15 to-indigo-950/40" />
        {/* blueprint grid */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)',
          backgroundSize: '48px 48px, 48px 48px',
          backgroundPosition: '0 0, 0 0',
        }} />
        {/* rotating guides */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/10"
            style={{ width: 140 + i * 80, height: 140 + i * 80, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            animate={{ rotate: [0, 15, 0] }}
            transition={{ duration: 16 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        {/* vertical scan sweep */}
        <motion.div
          initial={{ x: '-30%' }}
          animate={{ x: '130%' }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-y-0 w-1/6 bg-gradient-to-r from-transparent via-white/6 to-transparent"
        />
      </div>
    )
  }
  if (theme === 'marketing') {
    // Glossy diagonal shards with rose–fuchsia glow
    return (
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-400/15 via-fuchsia-500/15 to-purple-900/40" />
        {/* central bloom */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,90,160,0.12), transparent 55%)'
        }} />
        {/* diagonal shards */}
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-20 w-8 bg-gradient-to-t from-white/20 to-transparent blur-xl"
            initial={{ opacity: 0.25, y: 20, rotate: 45 }}
            animate={{ y: [-12, 12, -12], rotate: [40, 55, 40] }}
            transition={{ duration: 6 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.12 }}
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
        {/* sparkle noise */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 0.5px, transparent 0.5px)',
          backgroundSize: '6px 6px'
        }} />
      </div>
    )
  }
  if (theme === 'education') {
    // Lime/Emerald kinetic scan lines
    return (
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-lime-300/15 via-emerald-500/15 to-emerald-950/40" />
        {/* horizontal scan lines */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px] w-2/3 bg-white/12"
            initial={{ opacity: 0.35, x: -80 }}
            animate={{ x: [-80, 80, -80] }}
            transition={{ duration: 9 + i * 0.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
            style={{ top: `${8 + i * 7}%`, left: `${10 + (i % 3) * 18}%` }}
          />
        ))}
        {/* vertical sweep */}
        <motion.div
          initial={{ y: '110%' }}
          animate={{ y: '-10%' }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute inset-x-0 h-24 bg-gradient-to-b from-emerald-200/10 via-white/5 to-transparent"
        />
      </div>
    )
  }
  // editorial — refined stone/zinc print textures
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-200/15 via-zinc-600/15 to-black/50" />
      {/* halftone */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '12px 12px',
      }} />
      {/* paper grain */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'2\' stitchTiles=\'stitch\' /%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.8\'/%3E%3C/svg%3E")'
      }} />
      {/* vignette */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 50%, rgba(0,0,0,0.55) 100%)'
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
              onClick={() => {}}
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
