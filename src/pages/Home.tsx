import { motion } from 'framer-motion'
import { profile } from '../data/mockData'
import Eyebrow from '../components/Eyebrow'
import DayInLife from '../components/DayInLife'

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-24 flex flex-col items-center text-center">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Eyebrow>{profile.role}</Eyebrow>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[0.95] max-w-3xl"
      >
        {profile.name}.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted text-lg md:text-xl max-w-lg mt-5"
      >
        {profile.bioShort}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-16 w-full"
      >
        <DayInLife />
      </motion.div>
    </section>
  )
}
