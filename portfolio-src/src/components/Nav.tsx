import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Github, Linkedin, Twitter, Menu, X } from 'lucide-react'
import { profile } from '../data/mockData'

const tabs = [
  { to: '/', label: 'home.tsx' },
  { to: '/about', label: 'about.tsx' },
  { to: '/projects', label: 'projects.tsx' },
  { to: '/skills', label: 'skills.tsx' },
  { to: '/gallery', label: 'gallery.tsx' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? 'bg-bg/90 backdrop-blur border-border' : 'bg-bg border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <NavLink
                key={tab.to}
                to={tab.to}
                end={tab.to === '/'}
                className={({ isActive }) =>
                  `group relative flex items-center gap-2 px-3 h-14 font-mono text-[13px] whitespace-nowrap border-r border-border/60 transition-colors ${
                    isActive ? 'text-ink bg-surface' : 'text-faint hover:text-muted hover:bg-surface/50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-string' : 'bg-transparent'}`}
                    />
                    {tab.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-string" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 pl-4">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-faint hover:text-ink transition-colors">
              <Github size={17} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-faint hover:text-ink transition-colors">
              <Linkedin size={17} />
            </a>
            <a href={profile.socials.x} target="_blank" rel="noreferrer" aria-label="X" className="text-faint hover:text-ink transition-colors">
              <Twitter size={17} />
            </a>
            <NavLink
              to="/contact"
              className="ml-1 font-mono text-[12px] uppercase tracking-wider px-3.5 py-2 border border-border rounded-sm hover:border-keyword hover:text-keyword transition-colors"
            >
              contact()
            </NavLink>
          </div>

          <button
            className="md:hidden text-ink"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-bg px-5 py-4 flex items-center gap-4">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-faint"><Github size={18} /></a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-faint"><Linkedin size={18} /></a>
          <a href={profile.socials.x} target="_blank" rel="noreferrer" className="text-faint"><Twitter size={18} /></a>
          <NavLink to="/contact" onClick={() => setOpen(false)} className="ml-auto font-mono text-xs uppercase px-3 py-1.5 border border-border rounded-sm">
            contact()
          </NavLink>
        </div>
      )}
    </header>
  )
}
