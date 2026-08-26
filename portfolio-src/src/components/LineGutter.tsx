interface Props {
  count: number
  className?: string
}

// A vertical strip of line numbers, echoing source-code line gutters.
// Purely a structural/atmospheric device tied to the site's editor motif.
export default function LineGutter({ count, className = '' }: Props) {
  return (
    <div className={`hidden md:flex flex-col items-end pr-4 select-none ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="gutter-line leading-[1.9]">
          {String(i + 1).padStart(2, '0')}
        </span>
      ))}
    </div>
  )
}
