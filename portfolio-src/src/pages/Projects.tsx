import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ArrowUpRight, Github } from 'lucide-react'
import { projects, projectCategories } from '../data/mockData'
import Eyebrow from '../components/Eyebrow'

export default function Projects() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category
      const q = query.trim().toLowerCase()
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-28">
      <Eyebrow>Archive directory</Eyebrow>
      <h1 className="font-display font-extrabold text-6xl md:text-8xl leading-[0.92] mb-6">
        Selected<br />work.
      </h1>
      <p className="text-muted text-lg max-w-xl mb-12">
        Everything I've shipped, prototyped, or broken in the process of learning something.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-faint" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, stack, or description..."
            className="w-full bg-surface border border-border rounded-sm pl-11 pr-4 py-3 font-mono text-sm text-ink placeholder:text-faint focus:outline-none focus:border-keyword transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-14">
        {projectCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`font-mono text-[12px] uppercase tracking-wide px-3.5 py-2 rounded-sm border transition-colors ${
              category === c
                ? 'bg-ink text-bg border-ink'
                : 'border-border text-faint hover:border-keyword hover:text-keyword'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="font-mono text-sm text-faint py-16 text-center border border-dashed border-border rounded-md">
          No projects match "{query}". Try a different search or category.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="group border border-border rounded-md p-6 md:p-7 bg-surface hover:border-keyword/60 transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-string">{p.category}</span>
                <span className="font-mono text-[11px] text-faint">{p.year}</span>
              </div>
              <h3 className="font-display font-bold text-2xl mb-2 group-hover:text-keyword transition-colors">
                {p.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed flex-1">{p.summary}</p>
              <div className="flex flex-wrap gap-1.5 mt-5 mb-5">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-[10px] text-faint border border-border rounded px-2 py-1">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <a href={p.demoUrl} className="font-mono text-[12px] text-ink hover:text-keyword inline-flex items-center gap-1.5 transition-colors">
                  Demo <ArrowUpRight size={13} />
                </a>
                <a href={p.codeUrl} className="font-mono text-[12px] text-faint hover:text-keyword inline-flex items-center gap-1.5 transition-colors">
                  <Github size={13} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
