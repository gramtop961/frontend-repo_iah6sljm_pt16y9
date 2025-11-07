import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AboutCenter() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative h-screen w-screen bg-black text-zinc-100 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 60%, rgba(200,220,210,0.08) 0%, transparent 60%)'
        }} />
        {/* steam-like wisps */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.0, y: 30 }}
            animate={{ opacity: [0.0, 0.25, 0.0], y: [-10, -30 - i * 10, -60 - i * 10] }}
            transition={{ duration: 6 + i * 0.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
            className="pointer-events-none absolute left-1/2 h-24 w-24 -translate-x-1/2 rounded-full blur-2xl bg-white/10"
            style={{ bottom: `${10 + i * 6}%` }}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight"
        >
          I build coherent systems that teach people to think, create, and rest.
        </motion.h3>
        <motion.button
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full px-6 py-3 text-sm md:text-base border border-zinc-700/70 backdrop-blur-sm bg-zinc-900/50 hover:bg-zinc-800/60 transition"
        >
          Collaborate
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.form
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              onSubmit={(e) => { e.preventDefault(); setOpen(false) }}
              className="w-full max-w-lg rounded-xl border border-zinc-800 bg-zinc-900/70 p-6 text-left space-y-4"
            >
              <div className="text-lg font-medium">Collaborate</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input required placeholder="Name" className="w-full rounded-md bg-black/40 border border-zinc-800 px-3 py-2 text-sm outline-none focus:border-zinc-600" />
                <input required type="email" placeholder="Email" className="w-full rounded-md bg-black/40 border border-zinc-800 px-3 py-2 text-sm outline-none focus:border-zinc-600" />
              </div>
              <textarea required placeholder="What would you like to build together?" rows={4} className="w-full rounded-md bg-black/40 border border-zinc-800 px-3 py-2 text-sm outline-none focus:border-zinc-600" />
              <div className="flex items-center justify-between">
                <button type="button" onClick={() => setOpen(false)} className="text-sm text-zinc-400 hover:text-zinc-200">Cancel</button>
                <button type="submit" className="rounded-md px-4 py-2 text-sm bg-white text-black font-medium hover:bg-zinc-200">Send</button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
