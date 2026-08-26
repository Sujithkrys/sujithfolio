import { profile } from '../data/mockData'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="font-mono text-[12px] text-faint">
          © {new Date().getFullYear()} {profile.name} — built from scratch, no template.
        </p>
        <p className="font-mono text-[12px] text-faint">
          <span className="text-success">●</span> {profile.status}
        </p>
      </div>
    </footer>
  )
}
