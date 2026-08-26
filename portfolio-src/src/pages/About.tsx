import { useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { profile, education, skillGroups } from '../data/mockData'
import Eyebrow from '../components/Eyebrow'
import LineGutter from '../components/LineGutter'

export default function About() {
  // Measure the actual rendered paragraph instead of guessing line count
  // from character length — a guess drifts out of sync the moment the
  // text, font size, or viewport width changes; a measurement can't.
  const bioRef = useRef<HTMLDivElement>(null)
  const [lineCount, setLineCount] = useState(10)
  const [lineHeightPx, setLineHeightPx] = useState(0)

  useLayoutEffect(() => {
    function measure() {
      const el = bioRef.current
      if (!el) return
      const lineHeight = parseFloat(window.getComputedStyle(el).lineHeight)
      if (lineHeight > 0) {
        setLineHeightPx(lineHeight)
        setLineCount(Math.max(1, Math.round(el.clientHeight / lineHeight)))
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-28">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Eyebrow>The background</Eyebrow>
        <h1 className="font-display font-extrabold text-6xl md:text-8xl leading-[0.92] mb-6">
          About<br />me.
        </h1>
        <p className="text-muted text-lg md:text-xl max-w-xl">{profile.bioShort}</p>
      </motion.div>

      <div className="grid lg:grid-cols-[auto_1fr] gap-x-2 mt-20">
        <LineGutter count={lineCount} lineHeightPx={lineHeightPx} className="pt-1" />
        <div>
          <Eyebrow>Who I am</Eyebrow>
          <div
            ref={bioRef}
            className="font-body text-lg md:text-[1.35rem] leading-[1.9] text-ink/90 max-w-3xl"
          >
            {profile.bioLong}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-24">
        <div>
          <Eyebrow>Education</Eyebrow>
          <div className="space-y-6">
            {education.map((e) => (
              <div key={e.id} className="border border-border rounded-md p-6 bg-surface">
                <p className="font-mono text-[11px] text-string mb-2">{e.period}</p>
                <h3 className="font-display font-bold text-xl mb-1">{e.title}</h3>
                <p className="text-muted text-sm mb-3">{e.place}</p>
                <p className="text-faint text-sm leading-relaxed">{e.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Eyebrow>What I reach for</Eyebrow>
          <div className="space-y-5">
            {skillGroups.map((g) => (
              <div key={g.id}>
                <p className="font-mono text-[11px] uppercase tracking-wider text-faint mb-2">{g.label}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span key={item} className="font-mono text-[12px] border border-border rounded px-2.5 py-1.5 text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 flex flex-wrap items-center gap-4">
        <a
          href={profile.resumeUrl}
          className="inline-flex items-center gap-2 px-5 py-3 bg-ink text-bg font-mono text-[13px] uppercase tracking-wide rounded-sm hover:bg-string transition-colors"
        >
          Download Resume
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 px-5 py-3 border border-border text-ink font-mono text-[13px] uppercase tracking-wide rounded-sm hover:border-keyword hover:text-keyword transition-colors"
        >
          {profile.email}
        </a>
      </div>
    </div>
  )
}
