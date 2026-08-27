import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Search, User, Check } from 'lucide-react'

// Each scene is deliberately abstract — no real app logos, no fabricated
// timestamps. The point is to gesture at a workflow, not fake telemetry
// about one.

function SceneResearch() {
  return (
    <div className="w-48">
      <div className="rounded-md border border-border/70 bg-surface2 p-4">
        <div className="flex items-center gap-1.5 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-faint/50" />
          <div className="h-1.5 flex-1 rounded-full bg-faint/15" />
        </div>
        <div className="space-y-2">
          <motion.div
            className="h-2 rounded bg-keyword/30"
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          <motion.div
            className="h-2 rounded bg-faint/20 w-4/5"
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: 0.25 }}
          />
          <motion.div
            className="h-2 rounded bg-faint/20 w-3/5"
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: 0.5 }}
          />
        </div>
      </div>
      <motion.div
        className="flex justify-end -mt-3.5 mr-3"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        <div className="h-7 w-7 rounded-full bg-string flex items-center justify-center shadow-lg">
          <Search size={13} className="text-bg" strokeWidth={2.5} />
        </div>
      </motion.div>
    </div>
  )
}

function SceneSync() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="relative h-14 w-14 rounded-md bg-surface2 border border-border/70 flex items-center justify-center"
        >
          <User size={16} className="text-faint" />
          {i === 0 && (
            <motion.span
              className="absolute inset-0 rounded-md border-2 border-success"
              animate={{ opacity: [0.25, 0.9, 0.25] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
          )}
        </div>
      ))}
    </div>
  )
}

function SceneRoadmap() {
  return (
    <div className="w-52">
      <div className="relative h-1 rounded-full bg-border">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-keyword"
          initial={{ width: '8%' }}
          animate={{ width: '62%' }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        />
      </div>
      <div className="flex justify-between mt-3">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <span className={`h-1.5 w-1.5 rounded-full ${i <= 1 ? 'bg-keyword' : 'bg-border'}`} />
            <span
              className={`h-8 w-8 rounded border ${
                i === 1 ? 'border-string bg-string/10' : 'border-border bg-surface2'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function SceneShip() {
  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        className="h-12 w-12 rounded-full bg-success/15 border border-success flex items-center justify-center"
        initial={{ scale: 0.7, rotate: -15 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 220, damping: 14 }}
      >
        <Check size={20} className="text-success" strokeWidth={2.5} />
      </motion.div>
      <span className="font-mono text-[11px] uppercase tracking-wider text-success border border-success/40 rounded-full px-3 py-1">
        Shipped
      </span>
    </div>
  )
}

const scenes = [
  { label: 'Reviewing research', render: <SceneResearch /> },
  { label: 'Cross-functional sync', render: <SceneSync /> },
  { label: 'Roadmap review', render: <SceneRoadmap /> },
  { label: 'Shipped', render: <SceneShip /> },
]

export default function DayInLife() {
  const reducedMotion = useReducedMotion()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reducedMotion) return
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % scenes.length)
    }, 3200)
    return () => window.clearInterval(id)
  }, [reducedMotion])

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="rounded-lg border border-border bg-surface overflow-hidden shadow-2xl shadow-black/30">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#5C6370]/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#5C6370]/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#5C6370]/40" />
        </div>
        <div className="relative h-60 flex items-center justify-center overflow-hidden px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.5 }}
            >
              {scenes[active].render}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        {scenes.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? 'w-6 bg-string' : 'w-1.5 bg-border'
            }`}
          />
        ))}
      </div>

      <p className="text-center font-mono text-[12px] text-faint mt-3 h-4">
        <AnimatePresence mode="wait">
          <motion.span
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {scenes[active].label}
          </motion.span>
        </AnimatePresence>
      </p>
    </div>
  )
}
