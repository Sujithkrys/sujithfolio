// ─────────────────────────────────────────────────────────────
// MOCK DATA — replace every field here with your real content.
// Nothing else in the codebase should need to change.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Jordan Ellery',
  role: 'Full-Stack Developer',
  tagline: 'I build fast, well-considered software.',
  location: 'Bengaluru, India',
  status: 'Open to opportunities',
  email: 'hello@jordanellery.dev',
  resumeUrl: '#',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    x: 'https://x.com',
  },
  bioShort:
    "Software engineer focused on shipping products end-to-end — from data model to deployed UI. I care more about whether something works under real conditions than whether the demo looks nice.",
  bioLong:
    "I got into programming by taking things apart to see how they worked, which is still basically what I do for a living. Most of my time goes into small teams shipping real products: figuring out the right data model before writing a line of UI, choosing boring technology when boring is correct, and being honest when a clever solution isn't worth its complexity. I've spent the last two years working across the stack — Python and TypeScript day to day — on tools that touch healthcare workflows, developer tooling, and a couple of things I built purely because I was curious whether they'd work.",
}

export const education = [
  {
    id: 1,
    period: '2023 — 2027',
    title: 'B.Tech, Computer Science & Engineering',
    place: 'Manipal University Jaipur',
    note: 'Coursework in algorithms, distributed systems, and applied ML — most of the real learning happened outside it, in projects shipped alongside.',
  },
]

export const skillGroups = [
  {
    id: 'languages',
    label: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: ['FastAPI', 'Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'tooling',
    label: 'Tooling & Infra',
    items: ['Docker', 'Git', 'Vercel', 'GitHub Actions'],
  },
]

export const projects = [
  {
    id: 'triage-copilot',
    title: 'Triage Copilot',
    category: 'Healthcare AI',
    year: '2026',
    summary:
      'A clinical intake assistant that turns patient-reported symptoms into structured, prioritized notes for on-call staff — cutting average intake review time in a pilot clinic by roughly a third.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'OpenAI API'],
    demoUrl: '#',
    codeUrl: '#',
    featured: true,
  },
  {
    id: 'ledgerline',
    title: 'Ledgerline',
    category: 'Developer Tools',
    year: '2025',
    summary:
      'A CLI + web dashboard for tracking cloud spend across three providers in one place, built after getting burned by a surprise bill. Parses billing exports and flags anomalies against a rolling baseline.',
    stack: ['TypeScript', 'Node.js', 'React', 'Redis'],
    demoUrl: '#',
    codeUrl: '#',
    featured: true,
  },
  {
    id: 'fieldnote',
    title: 'Fieldnote',
    category: 'Utility',
    year: '2025',
    summary:
      'Offline-first note capture for people doing fieldwork with unreliable connectivity — syncs opportunistically, resolves conflicts predictably instead of silently, and never loses a draft.',
    stack: ['React Native', 'SQLite', 'TypeScript'],
    demoUrl: '#',
    codeUrl: '#',
    featured: true,
  },
  {
    id: 'signalcheck',
    title: 'SignalCheck',
    category: 'AI Tools',
    year: '2024',
    summary:
      'A lightweight service that cross-references a news claim against multiple sources and returns a corroboration score, not a verdict — designed to inform, not replace, judgment.',
    stack: ['Python', 'Flask', 'NLP'],
    demoUrl: '#',
    codeUrl: '#',
    featured: false,
  },
  {
    id: 'gridwatch',
    title: 'Gridwatch',
    category: 'Utility',
    year: '2024',
    summary:
      'Real-time power outage mapping for a mid-sized city, built from public utility feeds. Started as a weekend project after a three-day outage with no visibility into repair progress.',
    stack: ['React', 'TypeScript', 'Mapbox'],
    demoUrl: '#',
    codeUrl: '#',
    featured: false,
  },
  {
    id: 'roomtone',
    title: 'Roomtone',
    category: 'Games',
    year: '2024',
    summary:
      'A small browser puzzle game about balancing sound levels in a room to avoid waking someone up. Built to learn the Web Audio API properly.',
    stack: ['JavaScript', 'Web Audio API', 'Canvas'],
    demoUrl: '#',
    codeUrl: '#',
    featured: false,
  },
]

export const projectCategories = ['All', 'Healthcare AI', 'Developer Tools', 'AI Tools', 'Utility', 'Games']

export const gallery = [
  { id: 1, caption: 'Whiteboard session — sketching the Triage Copilot data model' },
  { id: 2, caption: 'Desk setup, mid-refactor' },
  { id: 3, caption: 'First working sync test for Fieldnote, offline to online' },
  { id: 4, caption: 'Debugging Gridwatch on a train, of course' },
]
