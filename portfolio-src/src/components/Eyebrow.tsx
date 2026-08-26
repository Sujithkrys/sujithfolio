export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="h-px w-6 bg-faint" />
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        {children}
      </span>
    </div>
  )
}
