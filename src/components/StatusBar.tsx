import { useLocation } from 'react-router-dom'
import { profile } from '../data/mockData'

const routeNames: Record<string, string> = {
  '/': 'home',
  '/about': 'about',
  '/projects': 'projects',
  '/skills': 'skills',
  '/contact': 'contact',
}

export default function StatusBar() {
  const { pathname } = useLocation()
  const file = routeNames[pathname] ?? 'home'

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 h-9 border-t border-border bg-surface/95 backdrop-blur">
      <div className="max-w-7xl mx-auto h-full px-5 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4 min-w-0">
          <span className="font-mono text-[11px] text-faint truncate">
            ~/portfolio/<span className="text-muted">{file}</span>
          </span>
          <span className="hidden sm:inline font-mono text-[11px] text-faint">
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <span className="hidden sm:inline font-mono text-[11px] text-faint">UTF-8</span>
          <span className="hidden sm:inline font-mono text-[11px] text-faint">TypeScript</span>
          <span className="font-mono text-[11px] text-muted flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            {profile.status}
          </span>
        </div>
      </div>
    </footer>
  )
}
