import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

// One consistent character (circle head, capsule torso, bar limbs — no
// face, no detail) recurs across every scene so it reads as one person's
// day, not four disconnected icons. Kept deliberately plain: flat shapes,
// site's existing accent palette only, no attempt at realism.

const VB = '0 0 200 140'

function Desk({
  reducedMotion,
  screen,
}: {
  reducedMotion: boolean | null
  screen: React.ReactNode
}) {
  return (
    <svg viewBox={VB} className="w-full max-w-[240px] h-auto">
      <line x1="20" y1="112" x2="180" y2="112" className="stroke-border" strokeWidth={1.5} />

      <rect x="80" y="44" width="40" height="46" rx="14" className="fill-string/85" />
      <circle cx="100" cy="34" r="13" className="fill-ink/90" />

      <rect x="72" y="56" width="56" height="48" rx="5" className="fill-surface2 stroke-border" strokeWidth={1.5} />
      {screen}
      <rect x="82" y="104" width="36" height="7" rx="2" className="fill-surface2 stroke-border" strokeWidth={1} />

      <motion.rect
        x="88" y="98" width="6" height="8" rx="2" className="fill-ink/70"
        animate={reducedMotion ? undefined : { y: [98, 101, 98] }}
        transition={{ duration: 0.7, repeat: Infinity }}
      />
      <motion.rect
        x="106" y="98" width="6" height="8" rx="2" className="fill-ink/70"
        animate={reducedMotion ? undefined : { y: [101, 98, 101] }}
        transition={{ duration: 0.7, repeat: Infinity }}
      />
    </svg>
  )
}

function SceneResearch({ reducedMotion }: { reducedMotion: boolean | null }) {
  const lines = [
    { y: 68, w: 34, delay: 0 },
    { y: 76, w: 28, delay: 0.2 },
    { y: 84, w: 22, delay: 0.4 },
  ]
  return (
    <Desk
      reducedMotion={reducedMotion}
      screen={
        <>
          {lines.map((l) => (
            <motion.rect
              key={l.y}
              x="82" y={l.y} width={l.w} height={3} rx={1.5}
              className="fill-keyword/50"
              animate={reducedMotion ? undefined : { opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: l.delay }}
            />
          ))}
        </>
      }
    />
  )
}

function SceneClientCall({ reducedMotion }: { reducedMotion: boolean | null }) {
  return (
    <Desk
      reducedMotion={reducedMotion}
      screen={
        <>
          <circle cx="100" cy="80" r="11" className="fill-faint/50" />
          <motion.circle
            cx="100" cy="80" r="11" fill="none" className="stroke-success" strokeWidth={2}
            animate={reducedMotion ? undefined : { opacity: [0.3, 0.9, 0.3], scale: [1, 1.08, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.circle
            cx="83" cy="63" r="2.5" className="fill-success"
            animate={reducedMotion ? undefined : { opacity: [1, 0.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </>
      }
    />
  )
}

function SceneTeamSync({ reducedMotion }: { reducedMotion: boolean | null }) {
  return (
    <svg viewBox={VB} className="w-full max-w-[240px] h-auto">
      <rect x="20" y="18" width="72" height="50" rx="4" className="fill-surface2 stroke-border" strokeWidth={1.5} />
      <rect x="30" y="30" width="30" height="3" rx="1.5" className="fill-keyword/50" />
      <rect x="30" y="40" width="42" height="3" rx="1.5" className="fill-string/50" />
      <rect x="30" y="50" width="24" height="3" rx="1.5" className="fill-faint/50" />

      <rect x="20" y="98" width="160" height="8" rx="4" className="fill-border/50" />

      <circle cx="55" cy="80" r="8" className="fill-faint/60" />
      <rect x="45" y="88" width="20" height="20" rx="8" className="fill-faint/25" />
      <motion.g
        animate={reducedMotion ? undefined : { y: [0, -2, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        <circle cx="90" cy="82" r="8" className="fill-faint/60" />
        <rect x="80" y="90" width="20" height="18" rx="8" className="fill-faint/25" />
      </motion.g>

      <circle cx="145" cy="42" r="13" className="fill-ink/90" />
      <rect x="129" y="54" width="32" height="42" rx="14" className="fill-string/85" />
      <motion.rect
        x="102" y="58" width="26" height="7" rx="3" className="fill-ink/70"
        animate={reducedMotion ? undefined : { x: [102, 98, 102] }}
        transition={{ duration: 1.4, repeat: Infinity }}
      />
    </svg>
  )
}

function SceneStakeholders({ reducedMotion }: { reducedMotion: boolean | null }) {
  return (
    <svg viewBox={VB} className="w-full max-w-[240px] h-auto">
      <rect x="118" y="14" width="62" height="42" rx="4" className="fill-surface2 stroke-border" strokeWidth={1.5} />
      <motion.path
        d="M 126 46 L 138 40 L 150 43 L 162 28 L 172 20"
        fill="none"
        className="stroke-success"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: reducedMotion ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
      />

      <circle cx="148" cy="72" r="13" className="fill-ink/90" />
      <rect x="132" y="84" width="32" height="40" rx="14" className="fill-string/85" />
      <motion.rect
        x="126" y="88" width="22" height="7" rx="3" className="fill-ink/70"
        animate={reducedMotion ? undefined : { y: [88, 83, 88] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      <rect x="20" y="112" width="160" height="8" rx="4" className="fill-border/50" />
      {[40, 68, 96].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="96" r="7" className="fill-faint/55" />
          <rect x={cx - 9} y="103" width="18" height="16" rx="7" className="fill-faint/25" />
        </g>
      ))}
    </svg>
  )
}

const sceneList = [
  { label: 'Researching', Scene: SceneResearch },
  { label: 'Client call', Scene: SceneClientCall },
  { label: 'Team sync — roadmap', Scene: SceneTeamSync },
  { label: 'Stakeholder update', Scene: SceneStakeholders },
]

export default function DayInLife() {
  const reducedMotion = useReducedMotion()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reducedMotion) return
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % sceneList.length)
    }, 3600)
    return () => window.clearInterval(id)
  }, [reducedMotion])

  const Active = sceneList[active].Scene

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
              className="w-full flex items-center justify-center"
            >
              <Active reducedMotion={reducedMotion} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        {sceneList.map((_, i) => (
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
            {sceneList[active].label}
          </motion.span>
        </AnimatePresence>
      </p>
    </div>
  )
}
