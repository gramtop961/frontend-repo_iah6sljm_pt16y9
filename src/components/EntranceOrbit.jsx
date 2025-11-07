import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function EntranceOrbit({ onEnter }) {
  const [ready, setReady] = useState(false)
  const audioCtxRef = useRef(null)
  const humRef = useRef(null)
  const gainRef = useRef(null)

  // Subtle parallax following cursor
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(mx, [-0.5, 0.5], [-10, 10])
  const translate = useTransform(mx, [-0.5, 0.5], [-10, 10])

  useEffect(() => {
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = e.clientX / innerWidth - 0.5
      const y = e.clientY / innerHeight - 0.5
      mx.set(x)
      my.set(y)
    }
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [mx, my])

  const initHum = async () => {
    try {
      if (!audioCtxRef.current) {
        const ctx = new (window.AudioContext || window.webkitAudioContext)()
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.value = 52 // faint analog projector-like hum
        gain.gain.value = 0.02
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start()
        audioCtxRef.current = ctx
        humRef.current = osc
        gainRef.current = gain
      } else if (audioCtxRef.current.state === 'suspended') {
        await audioCtxRef.current.resume()
      }
    } catch (e) {
      // silently continue if audio fails
    }
  }

  const handleEnter = async () => {
    await initHum()
    setReady(true)
    // Slight cinematic fade, then advance
    window.setTimeout(() => {
      if (typeof onEnter === 'function') onEnter()
    }, 400)
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <motion.div
        style={{ rotateX, rotateY }}
        className="absolute inset-0 z-10 flex items-center justify-center"
     >
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div style={{ x: translate }} className="select-none tracking-tight">
            <h1
              className="text-5xl md:text-7xl font-semibold"
              style={{ fontFamily: 'IBM Plex Sans, Inter, system-ui' }}
            >
              <span className="opacity-90">L.</span> Caamaño
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-xl text-center text-sm text-zinc-300 md:text-base"
          >
            Design, Education & AI — where structure meets wonder.
          </motion.p>

          <motion.button
            type="button"
            onClick={handleEnter}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className={`mt-2 rounded-full border border-zinc-700/70 bg-zinc-900/50 px-6 py-3 text-sm transition backdrop-blur-sm hover:bg-zinc-800/60 md:text-base ${
              ready ? 'pointer-events-none' : ''
            }`}
          >
            Enter
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Subtle floating particles (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {[...Array(24)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/30"
            initial={{ opacity: 0, y: Math.random() * 600, x: Math.random() * 1200 }}
            animate={{ opacity: [0.1, 0.5, 0.1], y: ['0%', '-10%', '0%'] }}
            transition={{
              duration: 6 + Math.random() * 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Fade overlay when entering (non-blocking) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none absolute inset-0 bg-black"
      />
    </div>
  )
}
