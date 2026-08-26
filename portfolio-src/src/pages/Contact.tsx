import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { profile } from '../data/mockData'
import Eyebrow from '../components/Eyebrow'

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-28">
      <Eyebrow>Get in touch</Eyebrow>
      <h1 className="font-display font-extrabold text-6xl md:text-8xl leading-[0.92] mb-6">
        Let's talk.
      </h1>
      <p className="text-muted text-lg max-w-xl mb-14">
        Open to interesting problems, freelance work, or just a good technical conversation.
        Email is fastest.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="border border-border rounded-md bg-surface p-8 md:p-10 max-w-xl"
      >
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-3 font-mono text-lg md:text-xl text-ink hover:text-keyword transition-colors mb-8"
        >
          <Mail size={20} /> {profile.email}
        </a>

        <div className="flex items-center gap-5 pt-6 border-t border-border">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-faint hover:text-ink transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-faint hover:text-ink transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={profile.socials.x} target="_blank" rel="noreferrer" className="text-faint hover:text-ink transition-colors" aria-label="X">
            <Twitter size={20} />
          </a>
          <span className="ml-auto font-mono text-[12px] text-faint">
            <span className="text-success">●</span> {profile.status}
          </span>
        </div>
      </motion.div>
    </div>
  )
}
