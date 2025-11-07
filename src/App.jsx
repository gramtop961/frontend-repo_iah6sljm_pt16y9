import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import EntranceOrbit from './components/EntranceOrbit'
import Constellations from './components/Constellations'
import SystemWorld from './components/SystemWorld'
import AboutCenter from './components/AboutCenter'

// Depth stages: entrance -> constellations -> system -> center
export default function App() {
  const [stage, setStage] = useState('entrance')
  const [active, setActive] = useState(null)

  const goConstellations = () => setStage('constellations')
  const openSystem = (key) => { setActive(key); setStage('system') }
  const goCenter = () => setStage('center')

  return (
    <div className="h-screen w-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {stage === 'entrance' && (
          <motion.div key="entrance" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <EntranceOrbit onEnter={goConstellations} />
          </motion.div>
        )}

        {stage === 'constellations' && (
          <motion.div key="constellations" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <Constellations onSelect={openSystem} />
          </motion.div>
        )}

        {stage === 'system' && (
          <motion.div key="system" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <SystemWorld activeKey={active} onBack={goConstellations} onCenter={goCenter} />
          </motion.div>
        )}

        {stage === 'center' && (
          <motion.div key="center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <AboutCenter />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
