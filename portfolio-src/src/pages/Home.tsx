import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { profile, projects } from '../data/mockData'
import Eyebrow from '../components/Eyebrow'

function useTypewriter(text: string, speed = 42, startDelay = 300) {
  const [out, setOut] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    let timer: number
    const startTimer = window.setTimeout(() => {
      timer = window.setInterval(() => {
        i++
        setOut(text.slice(0, i))
        if (i >= text.length) {
          window.clearInterval(timer)
          setDone(true)
        }
      }, speed)
    }, startDelay)
    return () => {
      window.clearTimeout(startTimer)
      window.clearInterval(timer)
    }
  }, [text, speed, startDelay])

  return { out, done }
}

export default function Home() {
  const line1 = `const developer = "${profile.name}";`
  const line2 = `developer.role = "${profile.role}";`
  const { out: t1, done: d1 } = useTypewriter(line1, 34, 250)
  const { out: t2, done: d2 } = useTypewriter(line2, 34, 250 + line1.length * 34 + 260)

  const featured = projects.filter((p) => p.featured)

  return (
    <div>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-24">
        <div className="rounded-md border border-border bg-surface overflow-hidden">
          {/* fake editor titlebar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#5C6370]/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#5C6370]/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#5C6370]/40" />
            <span className="ml-3 font-mono text-[12px] text-faint">whoami.ts</span>
          </div>

          <div className="p-6 md:p-12 lg:p-16">
            <p className="font-mono text-[13px] text-faint mb-6">
              <span className="text-success">01</span> // loading profile
            </p>

            {/* Typed lines, styled like code, large */}
            <div className="font-mono text-[5.5vw] sm:text-[3.6vw] md:text-[2.4rem] lg:text-[2.7rem] leading-[1.25] mt-2">
              <div className="whitespace-pre-wrap break-words">
                <span className="text-keyword">const</span>{' '}
                <span className="text-ink">developer</span>{' '}
                <span className="text-faint">=</span>{' '}
                <span className="text-string">
                  "{t1.replace('const developer = "', '').replace('";', '')}
                  {!d1 && <span className="inline-block w-[2px] h-[0.9em] bg-ink align-middle animate-pulse ml-0.5" />}
                  {d1 && '"'}
                </span>
                <span className="text-faint">{d1 ? ';' : ''}</span>
              </div>
              <div className="whitespace-pre-wrap break-words min-h-[1.25em]">
                {d1 && (
                  <>
                    <span className="text-ink">developer</span>
                    <span className="text-faint">.</span>
                    <span className="text-keyword">role</span>{' '}
                    <span className="text-faint">=</span>{' '}
                    <span className="text-string">
                      "{t2.replace('developer.role = "', '').replace('";', '')}
                      {!d2 && <span className="inline-block w-[2px] h-[0.9em] bg-ink align-middle animate-pulse ml-0.5" />}
                      {d2 && '"'}
                    </span>
                    <span className="text-faint">{d2 ? ';' : ''}</span>
                  </>
                )}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={d2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-lg md:text-xl text-muted max-w-xl mt-8"
            >
              {profile.bioShort}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={d2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 mt-9"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 bg-ink text-bg font-mono text-[13px] uppercase tracking-wide rounded-sm hover:bg-string transition-colors"
              >
                View Work <ArrowUpRight size={15} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-3 border border-border text-ink font-mono text-[13px] uppercase tracking-wide rounded-sm hover:border-keyword hover:text-keyword transition-colors"
              >
                About Me
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-28">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="font-display font-bold text-4xl md:text-5xl">Recent builds.</h2>
          </div>
          <Link to="/projects" className="font-mono text-[13px] text-faint hover:text-keyword transition-colors inline-flex items-center gap-1">
            View all projects <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group border border-border rounded-md p-6 bg-surface hover:border-keyword/60 transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-string">{p.category}</span>
                <span className="font-mono text-[11px] text-faint">{p.year}</span>
              </div>
              <h3 className="font-display font-bold text-2xl mb-2 group-hover:text-keyword transition-colors">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed flex-1">{p.summary}</p>
              <div className="flex flex-wrap gap-1.5 mt-5">
                {p.stack.slice(0, 3).map((s) => (
                  <span key={s} className="font-mono text-[10px] text-faint border border-border rounded px-2 py-1">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
