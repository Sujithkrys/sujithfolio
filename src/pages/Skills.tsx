import { motion } from 'framer-motion'
import { skillGroups } from '../data/mockData'
import Eyebrow from '../components/Eyebrow'

const proficiency: Record<string, number> = {
  Python: 92,
  TypeScript: 88,
  JavaScript: 85,
  SQL: 78,
  React: 90,
  'Next.js': 82,
  'Tailwind CSS': 88,
  'Framer Motion': 74,
  FastAPI: 84,
  'Node.js': 80,
  PostgreSQL: 76,
  Redis: 65,
  Docker: 72,
  Git: 90,
  Vercel: 85,
  'GitHub Actions': 70,
}

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-28">
      <Eyebrow>Capabilities</Eyebrow>
      <h1 className="font-display font-extrabold text-6xl md:text-8xl leading-[0.92] mb-6">
        Tech<br />stack.
      </h1>
      <p className="text-muted text-lg max-w-xl mb-16">
        What I actually reach for, not everything I've ever touched once in a tutorial.
      </p>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
        {skillGroups.map((group, gi) => (
          <div key={group.id}>
            <Eyebrow>{group.label}</Eyebrow>
            <div className="space-y-4">
              {group.items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: gi * 0.05 + i * 0.04 }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-sm text-ink">{item}</span>
                    <span className="font-mono text-[11px] text-faint">{proficiency[item] ?? 70}%</span>
                  </div>
                  <div className="h-1.5 bg-surface rounded-full overflow-hidden border border-border">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${proficiency[item] ?? 70}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: gi * 0.05 + i * 0.04 + 0.1, ease: 'easeOut' }}
                      className="h-full bg-keyword rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
