import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

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
    }, 500)
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      {/* 3D hero (non-blocking) */}
      <div className="absolute inset-0">
        {/* Spline scene */}
        <div className="absolute inset-0 opacity-80 pointer-events-none">
          <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* cinematic color wash */}
        <div className="pointer-events-none absolute inset-0" style={{
          background:
            'radial-gradient(circle at 50% 55%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.0) 35%, rgba(0,0,0,0.4) 100%)',
        }} />
        {/* letterbox bars */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
        {/* soft chromatic flares */}
        <div className="pointer-events-none absolute inset-0 mix-blend-screen">
          <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full blur-3xl bg-sky-400/10" />
          <div className="absolute -right-24 bottom-1/4 h-72 w-72 rounded-full blur-3xl bg-fuchsia-400/10" />
        </div>
      </div>

      {/* Title + CTA */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="absolute inset-0 z-20 flex items-center justify-center"
     >
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div style={{ x: translate }} className="select-none tracking-tight">
            <h1
              className="text-5xl md:text-7xl font-semibold drop-shadow-[0_6px_30px_rgba(0,0,0,0.6)]"
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`${ready ? 'pointer-events-none' : ''} mt-2 rounded-full border border-zinc-700/70 bg-zinc-900/60 px-7 py-3 text-sm md:text-base transition backdrop-blur-md hover:bg-zinc-800/70`}
          >
            Enter
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating particles (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
        {[...Array(36)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/40"
            initial={{ opacity: 0, y: Math.random() * 600, x: Math.random() * 1200 }}
            animate={{ opacity: [0.15, 0.6, 0.15], y: ['0%', '-14%', '0%'] }}
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

      {/* sweep highlight */}
      <motion.div
        initial={{ x: '-30%' }}
        animate={{ x: '130%' }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-y-0 w-1/6 bg-gradient-to-r from-transparent via-white/4 to-transparent"
      />

      {/* Fade overlay when entering (non-blocking) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="pointer-events-none absolute inset-0 bg-black"
      />
    </div>
  )
}
