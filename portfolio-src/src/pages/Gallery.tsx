import { motion } from 'framer-motion'
import { gallery } from '../data/mockData'
import Eyebrow from '../components/Eyebrow'

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-28">
      <Eyebrow>Behind the commits</Eyebrow>
      <h1 className="font-display font-extrabold text-6xl md:text-8xl leading-[0.92] mb-6">
        Gallery.
      </h1>
      <p className="text-muted text-lg max-w-xl mb-16">
        A few unstaged moments from actually building the things in the archive.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        {gallery.map((g, i) => (
          <motion.div
            key={g.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="border border-border rounded-md overflow-hidden bg-surface"
          >
            <div className="aspect-[4/3] bg-surface2 flex items-center justify-center">
              <span className="font-mono text-[11px] text-faint">// image placeholder</span>
            </div>
            <p className="font-mono text-[12px] text-muted px-4 py-3 border-t border-border">{g.caption}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
